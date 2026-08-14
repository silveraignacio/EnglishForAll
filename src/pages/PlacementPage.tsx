import { useMemo, useState, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { ExerciseRenderer } from '@/components/exercises/ExerciseRenderer'
import { buildPlacementSections, buildConfirmationQuestions, totalPlacementQuestions } from '@/lib/placement'
import {
  analyzePlacement,
  finalizePlacement,
  getRecommendedLevelLabel,
  EARLY_STOP_A1_MIN_CORRECT,
  type LevelScore,
  type PlacementAnalysis,
} from '@/lib/advisor'
import { useProgressStore } from '@/store/progressStore'
import type { PlacementResult } from '@/types/progress'
import { cn } from '@/lib/utils'

type Phase =
  | { name: 'intro' }
  | { name: 'phase1' }
  | { name: 'confirm' }
  | { name: 'results' }

const LEVEL_LABELS: Record<string, string> = {
  a1: 'A1 · Básico',
  a2: 'A2 · Pre-intermedio',
  b1: 'B1 · Intermedio',
}

export function PlacementPage() {
  const navigate = useNavigate()
  const recordPlacement = useProgressStore((s) => s.recordPlacement)
  const existing = useProgressStore((s) => s.progress.placementResult)

  const sections = useMemo(() => buildPlacementSections(), [])
  const [phase, setPhase] = useState<Phase>({ name: 'intro' })

  // Phase 1 state
  const [sectionIdx, setSectionIdx] = useState(0)
  const [exIdx, setExIdx] = useState(0)
  const [answers, setAnswers] = useState<Record<string, boolean>>({})

  // Confirmation state
  const [analysis, setAnalysis] = useState<PlacementAnalysis | null>(null)
  const [confirmExercises, setConfirmExercises] = useState<import('@/content/types').Exercise[]>([])
  const [confirmIdx, setConfirmIdx] = useState(0)
  const [confirmAnswers, setConfirmAnswers] = useState<Record<string, boolean>>({})
  const [levelScores, setLevelScores] = useState<LevelScore[]>([])

  // Results
  const [result, setResult] = useState<PlacementResult | null>(null)

  const startTest = useCallback(() => {
    setSectionIdx(0)
    setExIdx(0)
    setAnswers({})
    setConfirmAnswers({})
    setConfirmIdx(0)
    setAnalysis(null)
    setLevelScores([])
    setResult(null)
    setPhase({ name: 'phase1' })
  }, [])

  const handleAnswer = useCallback(
    (correct: boolean, userAnswer: string, _attempts: number) => {
      const section = sections[sectionIdx]
      if (!section) return
      const ex = section.exercises[exIdx]
      setAnswers((prev) => ({ ...prev, [ex.id]: correct }))
    },
    [sections, sectionIdx, exIdx]
  )

  const buildScores = useCallback((ans: Record<string, boolean>): LevelScore[] => {
    return sections.map((section) => {
      const total = section.exercises.length
      const correct = section.exercises.filter((e) => ans[e.id]).length
      return {
        level: section.level,
        correct,
        total,
        pct: total > 0 ? Math.round((correct / total) * 100) : 0,
      }
    })
  }, [sections])

  const finishPhase1 = useCallback(() => {
    const scores = buildScores(answers)

    // Early stop: if A1 performance is very weak, don't show harder levels.
    const a1 = scores.find((s) => s.level === 'a1')
    if (a1 && a1.correct < EARLY_STOP_A1_MIN_CORRECT) {
      const res: PlacementResult = {
        recommendedLevel: 'a1',
        breakdown: scores.map((s) => ({ ...s })),
        totalPct: a1.pct,
        timestamp: Date.now(),
      }
      recordPlacement(res)
      setResult(res)
      setPhase({ name: 'results' })
      return
    }

    const analysis = analyzePlacement(scores)
    setLevelScores(scores)
    setAnalysis(analysis)

    if (analysis.needsConfirmation && analysis.confirmLevel) {
      const phase1Ids = sections.flatMap((s) => s.exercises.map((e) => e.id))
      setConfirmExercises(buildConfirmationQuestions(analysis.confirmLevel, phase1Ids))
      setConfirmIdx(0)
      setConfirmAnswers({})
      setPhase({ name: 'confirm' })
    } else if (analysis.recommendedLevel) {
      const res: PlacementResult = {
        recommendedLevel: analysis.recommendedLevel,
        breakdown: scores.map((s) => ({ ...s })),
        totalPct: Math.round(
          scores.reduce((acc, s) => acc + s.pct, 0) / (scores.length || 1)
        ),
        timestamp: Date.now(),
      }
      recordPlacement(res)
      setResult(res)
      setPhase({ name: 'results' })
    }
  }, [answers, buildScores, sections, recordPlacement])

  const handleNextPhase1 = useCallback(() => {
    const section = sections[sectionIdx]
    if (!section) return
    if (exIdx < section.exercises.length - 1) {
      setExIdx(exIdx + 1)
    } else if (sectionIdx < sections.length - 1) {
      setSectionIdx(sectionIdx + 1)
      setExIdx(0)
    } else {
      finishPhase1()
    }
  }, [sections, sectionIdx, exIdx, finishPhase1])

  const handleConfirmAnswer = useCallback(
    (correct: boolean, userAnswer: string, _attempts: number) => {
      const ex = confirmExercises[confirmIdx]
      if (!ex) return
      setConfirmAnswers((prev) => ({ ...prev, [ex.id]: correct }))
    },
    [confirmExercises, confirmIdx]
  )

  const finishConfirmation = useCallback(() => {
    if (!analysis?.confirmLevel) return
    const confirmTotal = confirmExercises.length
    const confirmCorrect = confirmExercises.filter((e) => confirmAnswers[e.id]).length
    const final = finalizePlacement(levelScores, analysis.confirmLevel, confirmCorrect, confirmTotal)
    const res: PlacementResult = {
      recommendedLevel: final.recommendedLevel,
      breakdown: final.scores.map((s) => ({ ...s })),
      totalPct: Math.round(
        final.scores.reduce((acc, s) => acc + s.pct, 0) / (final.scores.length || 1)
      ),
      timestamp: Date.now(),
    }
    recordPlacement(res)
    setResult(res)
    setPhase({ name: 'results' })
  }, [analysis, confirmExercises, confirmAnswers, levelScores, recordPlacement])

  const handleNextConfirm = useCallback(() => {
    if (confirmIdx < confirmExercises.length - 1) {
      setConfirmIdx(confirmIdx + 1)
    } else {
      finishConfirmation()
    }
  }, [confirmIdx, confirmExercises, finishConfirmation])

  // ---------------- Intro ----------------
  if (phase.name === 'intro') {
    return (
      <div className="space-y-6 max-w-2xl mx-auto animate-fade-in text-center py-10">
        <div className="text-5xl">🧭</div>
        <h1 className="text-2xl font-extrabold">Revisa tu nivel de inglés</h1>
        <p className="text-ink-soft">
          Responde unas preguntas de los niveles <strong>A1, A2 y B1</strong> y
          te recomendaremos en qué nivel empezar.
        </p>
        <div className="flex flex-wrap justify-center gap-2 text-sm">
          <Badge variant="brand">~{totalPlacementQuestions(sections)} preguntas</Badge>
          <Badge variant="brand">≈ 10 minutos</Badge>
          <Badge variant="brand">Sin nota</Badge>
        </div>
        <Card className="bg-brand-50/60 border-brand-100 text-left">
          <p className="text-sm text-ink-soft leading-relaxed">
            Si no sabes una respuesta, responde lo que creas y sigue adelante. No hay respuestas «malas»:
            la prueba solo sirve para saber por dónde empezar. Durante las preguntas no se muestra si
            acertaste — el resultado aparece todo junto al final. No puedes volver atrás ni cambiar una
            respuesta, así que confía en tu primera opción.
          </p>
        </Card>
        {existing && (
          <p className="text-sm text-ink-light">
            Tu nivel recomendado actual: <strong>{getRecommendedLevelLabel(existing.recommendedLevel)}</strong>. Repetir la prueba actualizará tu recomendación.
          </p>
        )}
        <div className="flex justify-center gap-3">
          <Link to="/"><Button variant="ghost">Volver</Button></Link>
          <Button variant="primary" size="lg" onClick={startTest}>
            Empezar prueba →
          </Button>
        </div>
      </div>
    )
  }

  // ---------------- Results ----------------
  if (phase.name === 'results' && result) {
    const isReview = result.recommendedLevel === 'b1' && result.breakdown.every((b) => b.pct >= 80)
    return (
      <div className="space-y-6 max-w-2xl mx-auto animate-fade-in py-6">
        <div className="text-center">
          <div className="text-6xl mb-3">{isReview ? '🌟' : '🎯'}</div>
          <h1 className="text-2xl font-extrabold">Tu nivel recomendado</h1>
          <div className="mt-3">
            <Badge variant="brand" className="text-lg px-4 py-1.5">
              {getRecommendedLevelLabel(result.recommendedLevel)}
            </Badge>
          </div>
          <p className="text-ink-soft mt-3 text-sm max-w-md mx-auto">
            {isReview
              ? '¡Has dominado todo el contenido disponible! Puedes empezar en B1 para repasar o esperar a que llegue B2.'
              : 'Según tus respuestas, te recomendamos empezar aquí. Los niveles anteriores quedan desbloqueados para que repases cuando quieras.'}
          </p>
        </div>

        <Card>
          <h2 className="text-lg font-bold text-ink mb-4">Resultado por nivel</h2>
          <div className="space-y-4">
            {result.breakdown.map((b) => (
              <div key={b.level}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-ink-soft">{LEVEL_LABELS[b.level] ?? b.level}</span>
                  <span className="text-sm font-semibold text-ink">{b.correct}/{b.total} · {b.pct}%</span>
                </div>
                <ProgressBar
                  value={b.pct}
                  color={b.pct >= 80 ? 'success' : b.pct >= 60 ? 'brand' : 'warning'}
                />
              </div>
            ))}
          </div>
        </Card>

        <Card className={cn('border', isReview ? 'bg-warning-50/40 border-warning-200/40' : 'bg-brand-50/50 border-brand-100')}>
          <h2 className="text-lg font-bold text-ink mb-2">¿Y ahora qué?</h2>
          <p className="text-sm text-ink-soft leading-relaxed">
            {isReview
              ? 'Puedes empezar en B1 para consolidar lo que ya sabes. Cuando esté disponible el nivel B2, podrás seguir avanzando.'
              : `Empieza en el nivel recomendado. Los niveles inferiores quedan desbloqueados para que los consultes cuando necesites repasar un tema.`}
          </p>
        </Card>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Link to={`/level/${result.recommendedLevel}`}>
            <Button variant="primary" size="lg">
              Empezar en {result.recommendedLevel.toUpperCase()} →
            </Button>
          </Link>
          <Link to="/level/a1">
            <Button variant="secondary">Ir a A1</Button>
          </Link>
          <Button variant="ghost" onClick={startTest}>Repetir prueba</Button>
        </div>
      </div>
    )
  }

  // ---------------- Confirmation phase ----------------
  if (phase.name === 'confirm') {
    const cur = confirmExercises[confirmIdx]
    if (!cur) {
      finishConfirmation()
      return null
    }
    return (
      <div className="space-y-5 max-w-3xl mx-auto">
        <div className="flex items-center justify-between">
          <Badge variant="warning">Confirmando nivel {analysis?.confirmLevel?.toUpperCase()}</Badge>
          <span className="text-sm font-medium text-ink-soft">{confirmIdx + 1} / {confirmExercises.length}</span>
        </div>
        <p className="text-sm text-ink-light">
          Unas preguntas más para afinar tu recomendación.
        </p>
        <ProgressBar value={Math.round((confirmIdx / confirmExercises.length) * 100)} height="sm" />
        <ExerciseRenderer
          key={cur.id}
          exercise={cur}
          onAnswer={handleConfirmAnswer}
          onNext={handleNextConfirm}
          isLast={confirmIdx === confirmExercises.length - 1}
          silentMode
        />
      </div>
    )
  }

  // ---------------- Phase 1 ----------------
  const section = sections[sectionIdx]
  const curEx = section?.exercises[exIdx]
  const isLastOverall =
    sectionIdx === sections.length - 1 && exIdx === section.exercises.length - 1

  return (
    <div className="space-y-5 max-w-3xl mx-auto">
      <div className="flex items-center justify-between">
        <Badge variant="brand">Fase {sectionIdx + 1} de {sections.length} · {LEVEL_LABELS[section.level]}</Badge>
        <span className="text-sm font-medium text-ink-soft">
          {sections.slice(0, sectionIdx).reduce((a, s) => a + s.exercises.length, 0) + exIdx + 1} / {totalPlacementQuestions(sections)}
        </span>
      </div>
      <ProgressBar
        value={Math.round(
          ((sections.slice(0, sectionIdx).reduce((a, s) => a + s.exercises.length, 0) + exIdx) /
            totalPlacementQuestions(sections)) *
            100
        )}
        height="sm"
      />
      {curEx && (
        <ExerciseRenderer
          key={curEx.id}
          exercise={curEx}
          onAnswer={handleAnswer}
          onNext={handleNextPhase1}
          isLast={isLastOverall}
          silentMode
        />
      )}
    </div>
  )
}

export default PlacementPage