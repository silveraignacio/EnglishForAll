import { useState, useMemo, useCallback } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getCourse } from '@/content'
import { useProgressStore } from '@/store/progressStore'
import { useSettingsStore } from '@/store/settingsStore'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { Badge } from '@/components/ui/Badge'
import { ExerciseRenderer } from '@/components/exercises/ExerciseRenderer'
import { isLevelUnlocked } from '@/lib/access'

export function ModuleCheckpoint() {
  const { moduleId } = useParams<{ moduleId: string }>()
  const navigate = useNavigate()
  const course = getCourse()
  const progress = useProgressStore((s) => s.progress)
  const completeModule = useProgressStore((s) => s.completeModule)
  const settings = useSettingsStore((s) => s.settings)

  const { module: mod, nextModule, levelId } = useMemo(() => {
    for (const lvl of course.levels) {
      const found = lvl.modules.find((m) => m.id === moduleId)
      if (found) {
        const idx = lvl.modules.indexOf(found)
        return { module: found, nextModule: lvl.modules[idx + 1] ?? null, levelId: lvl.id }
      }
    }
    return { module: null, nextModule: null, levelId: null }
  }, [course, moduleId])

  const [started, setStarted] = useState(false)
  const [idx, setIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const handleAnswer = useCallback(
    (correct: boolean) => {
      if (correct) setScore((s) => s + 1)
    },
    []
  )

  const handleNext = useCallback(() => {
    if (!mod) return
    const total = mod.checkpoint.exercises.length
    if (idx < total - 1) {
      setIdx(idx + 1)
    } else {
      const pct = Math.round((score / total) * 100)
      setFinished(true)
      if (pct >= mod.checkpoint.passingScore) {
        completeModule(mod.id)
      }
    }
  }, [mod, idx, score, completeModule])

  if (!mod) {
    return (
      <div className="text-center py-20">
        <p className="text-ink-soft mb-4">Módulo no encontrado.</p>
        <Link to="/level/a1"><Button variant="secondary">Volver</Button></Link>
      </div>
    )
  }

  if (levelId && !isLevelUnlocked(progress, levelId)) {
    return (
      <div className="space-y-6 max-w-2xl mx-auto animate-fade-in text-center py-16">
        <div className="text-5xl">🔒</div>
        <h1 className="text-2xl font-extrabold">Nivel bloqueado</h1>
        <p className="text-ink-soft">
          Debes aprobar el examen final del nivel anterior para acceder a este contenido.
        </p>
        <div className="flex justify-center gap-3">
          <Link to="/"><Button variant="ghost">Volver al inicio</Button></Link>
          <Link to="/level/a1"><Button variant="primary">Ir al nivel A1</Button></Link>
        </div>
      </div>
    )
  }

  const safeLevelId = levelId ?? 'a1'

  if (finished) {
    const pct = Math.round((score / mod.checkpoint.exercises.length) * 100)
    const passed = pct >= mod.checkpoint.passingScore
    return (
      <div className="space-y-6 text-center py-10 max-w-2xl mx-auto animate-fade-in">
        <div className="text-6xl">{passed ? '🏆' : '💪'}</div>
        <h2 className="text-2xl font-extrabold">{passed ? '¡Checkpoint superado!' : 'Sigue practicando'}</h2>
        <div className="max-w-sm mx-auto">
          <ProgressBar value={pct} height="lg" showValue color={passed ? 'success' : 'warning'} />
        </div>
        <p className="text-ink-soft">
          {score} / {mod.checkpoint.exercises.length} correctas ({pct}%)
        </p>
        {passed && (
          <Badge variant="success" className="text-base">Módulo {mod.order + 1} completado</Badge>
        )}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <Button variant="secondary" onClick={() => { setIdx(0); setScore(0); setFinished(false); setStarted(false) }}>
            Repetir
          </Button>
          {nextModule ? (
            <Button variant="primary" onClick={() => navigate(`/level/${safeLevelId}#module-${nextModule.order}`)}>
              Siguiente módulo →
            </Button>
          ) : (
            <Link to={`/exam/${safeLevelId === 'a1' ? 'a1' : `${safeLevelId}-final`}`}>
              <Button variant="success">Examen final {safeLevelId.toUpperCase()} →</Button>
            </Link>
          )}
        </div>
      </div>
    )
  }

  if (!started) {
    return (
      <div className="space-y-6 max-w-2xl mx-auto animate-fade-in text-center py-10">
        <div className="text-5xl">🎯</div>
        <h1 className="text-2xl font-extrabold">Checkpoint: {mod.title}</h1>
        <p className="text-ink-soft">Demuestra lo que has aprendido. Necesitas al menos {mod.checkpoint.passingScore}% para superar el módulo.</p>
        <div className="text-ink-light">
          {mod.checkpoint.exercises.length} preguntas · Gramática + Vocabulario + Comprensión
        </div>
        <Button variant="primary" size="lg" onClick={() => setStarted(true)}>
          Empezar checkpoint
        </Button>
      </div>
    )
  }

  const total = mod.checkpoint.exercises.length
  const curEx = mod.checkpoint.exercises[idx]
  return (
    <div className="space-y-5 max-w-3xl mx-auto">
      <div className="flex items-center justify-between">
        <Badge variant="brand">Checkpoint</Badge>
        <span className="text-sm font-medium text-ink-soft">{idx + 1} / {total}</span>
      </div>
      <ProgressBar value={Math.round((idx / total) * 100)} height="sm" />
      <ExerciseRenderer
        key={curEx.id}
        exercise={curEx}
        onAnswer={handleAnswer}
        onNext={handleNext}
        isLast={idx === total - 1}
        strictMode
      />
    </div>
  )
}

export default ModuleCheckpoint