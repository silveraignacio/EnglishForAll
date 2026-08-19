import { useState, useMemo, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getLevel, getExam } from '@/content'
import { useProgressStore } from '@/store/progressStore'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { Badge } from '@/components/ui/Badge'
import { ExerciseRenderer } from '@/components/exercises/ExerciseRenderer'
import type { ExamResult } from '@/types/progress'
import { cn } from '@/lib/utils'
import { isLevelUnlocked } from '@/lib/access'

interface ExamArea {
  name: string
  weight: number
  exercises: import('@/content/types').Exercise[]
}

interface AreaResult {
  area: string
  score: number
  weight: number
}

const PASSING_SCORE = 60

// Map exam id -> level id. The examId is "a1-final", "a2-final", "b1-final"...
function levelIdFromExam(examId: string): string {
  return examId.replace('-final', '')
}

function scoreLabel(score: number): string {
  if (score >= 85) return 'Muy fuerte'
  if (score >= 70) return 'Bueno'
  if (score >= 50) return 'Necesita práctica'
  return 'Débil'
}

function scoreColor(score: number): 'success' | 'warning' | 'error' | 'brand' {
  if (score >= 85) return 'success'
  if (score >= 70) return 'brand'
  if (score >= 50) return 'warning'
  return 'error'
}

export function ExamPage() {
  const { examId } = useParams<{ examId: string }>()
  const recordExam = useProgressStore((s) => s.recordExam)
  const progress = useProgressStore((s) => s.progress)

  const exam = useMemo(() => getExam(examId || 'b1-final'), [examId])

  const levelName = useMemo(() => {
    const levelId = levelIdFromExam(examId || 'b1-final')
    const lvl = getLevel(levelId)
    return lvl ? `Nivel ${lvl.name}` : 'Nivel'
  }, [examId])

  const examLocked = useMemo(() => {
    const levelId = levelIdFromExam(examId || 'b1-final')
    return !isLevelUnlocked(progress, levelId)
  }, [progress, examId])

  const [started, setStarted] = useState(false)
  const [answers, setAnswers] = useState<Record<string, boolean>>({})
  const [phases, setPhases] = useState<ExamArea[]>([])
  const [phaseIdx, setPhaseIdx] = useState(0)
  const [exIdx, setExIdx] = useState(0)
  const [finished, setFinished] = useState(false)
  const [result, setResult] = useState<ExamResult | null>(null)

  const startExam = useCallback(() => {
    if (!exam) return
    const areas: ExamArea[] = exam.sections.map((s) => ({
      name: s.name,
      weight: s.weight,
      exercises: s.exercises,
    }))
    setPhases(areas)
    setPhaseIdx(0)
    setExIdx(0)
    setAnswers({})
    setFinished(false)
    setResult(null)
    setStarted(true)
  }, [exam])

  const handleAnswer = useCallback(
    (correct: boolean) => {
      const cur = phases[phaseIdx].exercises[exIdx]
      setAnswers((prev) => ({ ...prev, [`${phaseIdx}-${cur.id}`]: correct }))
    },
    [phases, phaseIdx, exIdx]
  )

  const handleNext = useCallback(() => {
    if (phases.length === 0) return
    const area = phases[phaseIdx]
    if (exIdx < area.exercises.length - 1) {
      setExIdx(exIdx + 1)
    } else if (phaseIdx < phases.length - 1) {
      setPhaseIdx(phaseIdx + 1)
      setExIdx(0)
    } else {
      // Compute per-area results (each area weighted)
      const areaResults: AreaResult[] = phases.map((ph, pi) => {
        const total = ph.exercises.length
        const correctCount = ph.exercises.filter((e) => answers[`${pi}-${e.id}`]).length
        return {
          area: ph.name,
          score: total > 0 ? Math.round((correctCount / total) * 100) : 0,
          weight: ph.weight,
        }
      })
      const totalWeight = areaResults.reduce((acc, a) => acc + a.weight, 0)
      const totalScore = Math.round(
        areaResults.reduce((acc, a) => acc + (a.score * a.weight) / totalWeight, 0)
      )
      // Recommendations based on weak areas
      const recommendations: string[] = []
      const weak = areaResults
        .filter((a) => a.score < 70)
        .sort((a, b) => a.score - b.score)
      weak.forEach((a) => recommendations.push(a.area))
      const res: ExamResult = {
        examId: examId || 'a1-final',
        totalScore,
        breakdown: areaResults.map((a) => ({ area: a.area, score: a.score })),
        recommendations,
        timestamp: Date.now(),
      }
      recordExam(res)
      setResult(res)
      setFinished(true)
    }
  }, [phases, phaseIdx, exIdx, answers, examId, recordExam])

  const totalExercises = useMemo(
    () => phases.reduce((acc, p) => acc + p.exercises.length, 0),
    [phases]
  )
  const completedCount = useMemo(() => {
    let c = 0
    phases.forEach((p, pi) => {
      if (pi < phaseIdx) c += p.exercises.length
      else if (pi === phaseIdx) c += exIdx
    })
    return c
  }, [phases, phaseIdx, exIdx])

  if (!exam) {
    return (
      <div className="text-center py-20">
        <p className="text-ink-soft">No hay contenido para el examen.</p>
      </div>
    )
  }

  // ---- Locked screen ----
  if (examLocked) {
    return (
      <div className="space-y-6 max-w-2xl mx-auto animate-fade-in text-center py-16">
        <div className="text-5xl">🔒</div>
        <h1 className="text-2xl font-extrabold">Examen {levelName} bloqueado</h1>
        <p className="text-ink-soft">
          Debes aprobar el examen final del nivel anterior para poder realizar este examen.
        </p>
        <div className="flex justify-center gap-3">
          <Link to="/"><Button variant="ghost">Volver al inicio</Button></Link>
          <Link to={`/level/${levelIdFromExam(examId || 'b1-final')}`}><Button variant="primary">Ir al nivel {levelName.replace('Nivel ', '')}</Button></Link>
        </div>
      </div>
    )
  }

  // ---- Results screen ----
  if (finished && result) {
    const passed = result.totalScore >= PASSING_SCORE
    return (
      <div className="space-y-6 max-w-2xl mx-auto animate-fade-in py-6">
        <div className="text-center">
          <div className="text-6xl mb-3">{passed ? '🎓' : '💪'}</div>
          <h1 className="text-2xl font-extrabold">
            {passed ? '¡Enhorabuena, has aprobado!' : 'Sigue practicando'}
          </h1>
          <p className="text-ink-soft mt-1">
            {levelName} — Examen final
          </p>
        </div>

        <Card className="text-center">
          <p className="text-sm text-ink-light mb-1">Puntuación total</p>
          <p className={cn('text-5xl font-extrabold', passed ? 'text-success-600' : 'text-warning-600')}>
            {result.totalScore}%
          </p>
          <p className="text-sm text-ink-soft mt-2">
            {passed ? 'Nivel superado. Estás listo para el siguiente nivel.' : `Necesitas al menos ${PASSING_SCORE}% para aprobar.`}
          </p>
        </Card>

        <Card>
          <h2 className="text-lg font-bold text-ink mb-4">Desglose por área</h2>
          <div className="space-y-4">
            {result.breakdown.map((b) => (
              <div key={b.area}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-ink-soft">{b.area}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-ink">{b.score}%</span>
                    <Badge variant={scoreColor(b.score)}>{scoreLabel(b.score)}</Badge>
                  </div>
                </div>
                <ProgressBar value={b.score} color={scoreColor(b.score)} />
              </div>
            ))}
          </div>
        </Card>

        {result.recommendations.length > 0 ? (
          <Card className="bg-warning-50/50 border-warning-200/40">
            <h2 className="text-lg font-bold text-warning-600 mb-2">📌 Repaso recomendado</h2>
            <p className="text-sm text-ink-soft mb-3">
              Estas áreas necesitan más práctica. Vuelve a las lecciones correspondientes o usa el repaso inteligente:
            </p>
            <div className="flex flex-wrap gap-2">
              {result.recommendations.map((r) => (
                <Badge key={r} variant="warning">{r}</Badge>
              ))}
            </div>
          </Card>
        ) : (
          <Card className="bg-success-50 border-success-200/40">
            <h2 className="text-lg font-bold text-success-600 mb-1">✨ Dominio completo</h2>
            <p className="text-sm text-ink-soft">
              Excelente resultado en todas las áreas. Tienes un dominio sólido del {levelName}.
            </p>
          </Card>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Button variant="secondary" onClick={startExam}>Repetir examen</Button>
          <Link to={`/level/${levelIdFromExam(examId || 'b1-final')}`}>
            <Button variant="ghost">Volver al curso</Button>
          </Link>
          <Link to="/review">
            <Button variant="primary">Ir a repaso inteligente</Button>
          </Link>
        </div>
      </div>
    )
  }

  // ---- Intro screen ----
  if (!started) {
    return (
      <div className="space-y-6 max-w-2xl mx-auto animate-fade-in text-center py-10">
        <div className="text-5xl">🎓</div>
        <h1 className="text-2xl font-extrabold">Examen Final {levelName}</h1>
        <p className="text-ink-soft">
          {exam.description}
        </p>
        <div className="flex flex-wrap gap-2 justify-center text-sm">
          {exam.sections.map((d) => (
            <Badge key={d.name} variant="brand">{d.name} {d.weight}%</Badge>
          ))}
        </div>
        <div className="text-ink-light">
          {totalExercises || '~40'} preguntas · Necesitas {PASSING_SCORE}% para aprobar
        </div>
        <div className="flex justify-center gap-3">
          <Link to={`/level/${levelIdFromExam(examId || 'b1-final')}`}><Button variant="ghost">Volver</Button></Link>
          <Button variant="primary" size="lg" onClick={startExam}>
            Empezar examen →
          </Button>
        </div>
      </div>
    )
  }

  // ---- Exam in progress ----
  const area = phases[phaseIdx]
  const cur = area.exercises[exIdx]
  return (
    <div className="space-y-5 max-w-3xl mx-auto">
      <div className="flex items-center justify-between">
        <Badge variant="brand">{area.name} ({phaseIdx + 1}/{phases.length})</Badge>
        <span className="text-sm font-medium text-ink-soft">{completedCount + 1} / {totalExercises}</span>
      </div>
      <ProgressBar value={Math.round((completedCount / totalExercises) * 100)} height="sm" />
      <ExerciseRenderer
        key={`${phaseIdx}-${cur.id}-${exIdx}`}
        exercise={cur}
        onAnswer={handleAnswer}
        onNext={handleNext}
        isLast={phaseIdx === phases.length - 1 && exIdx === area.exercises.length - 1}
        strictMode
      />
    </div>
  )
}

export default ExamPage