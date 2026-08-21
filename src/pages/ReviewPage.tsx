import { useMemo, useState, useCallback } from 'react'
import { getCourse } from '@/content'
import { useProgressStore } from '@/store/progressStore'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ExerciseRenderer } from '@/components/exercises/ExerciseRenderer'

export function ReviewPage() {
  const course = getCourse()
  const progress = useProgressStore((s) => s.progress)
  const [started, setStarted] = useState(false)
  const [idx, setIdx] = useState(0)
  const [correct, setCorrect] = useState(0)

  // Collect exercises from weak concepts, plus recently failed exercises,
  // plus concepts due for spaced repetition (reviewSchedule.due <= now).
  const reviewExercises = useMemo(() => {
    const now = Date.now()
    const weak = new Set(progress.weakConcepts)
    const recentFail = new Set(
      progress.exerciseHistory
        .slice(-100)
        .filter((h) => !h.correct)
        .map((h) => h.exerciseId)
    )
    const due = new Set(
      Object.entries(progress.reviewSchedule || {})
        .filter(([, v]) => v.due <= now)
        .map(([c]) => c)
    )
    const all: { lessonId: string; exercise: import('@/content/types').Exercise }[] = []
    course.levels.forEach((lvl) => {
      lvl.modules.forEach((m) => {
        m.lessons.forEach((l) => {
          ;[...l.exercises, ...l.miniTest].forEach((e) => {
            if (weak.has(e.concept) || recentFail.has(e.id) || due.has(e.concept)) {
              all.push({ lessonId: l.id, exercise: e })
            }
          })
        })
      })
    })
    // Dedupe by exercise id, then prioritize: due (spaced repetition) first,
    // then weak concepts, then recent fails.
    const seen = new Set<string>()
    const rank = (item: { exercise: import('@/content/types').Exercise }) =>
      due.has(item.exercise.concept) ? 0 : weak.has(item.exercise.concept) ? 1 : 2
    return all
      .filter((item) => {
        if (seen.has(item.exercise.id)) return false
        seen.add(item.exercise.id)
        return true
      })
      .sort((a, b) => rank(a) - rank(b))
      .slice(0, 20) // cap at 20
  }, [course, progress])

  const recordReview = useProgressStore((s) => s.recordReview)
  const handleAnswer = useCallback((c: boolean, concept: string | undefined) => {
    if (c) setCorrect(s => s + 1)
    if (concept) recordReview(concept, c)
  }, [recordReview])
  const handleNext = useCallback(() => {
    if (idx < reviewExercises.length - 1) {
      setIdx(idx + 1)
    } else {
      setStarted(false)
      setIdx(0)
      setCorrect(0)
    }
  }, [idx, reviewExercises.length])

  if (reviewExercises.length === 0) {
    return (
      <div className="space-y-6 animate-fade-in text-center py-16 max-w-2xl mx-auto">
        <div className="text-5xl">✨</div>
        <h1 className="text-2xl font-extrabold">¡Sin repaso pendiente!</h1>
        <p className="text-ink-soft">No tienes conceptos débiles ni ejercicios fallados recientemente. Sigue aprendiendo y vuelve cuando necesites repasar.</p>
      </div>
    )
  }

  if (!started) {
    return (
      <div className="space-y-6 max-w-2xl mx-auto animate-fade-in text-center py-10">
        <div className="text-5xl">🔄</div>
        <h1 className="text-2xl font-extrabold">Repaso inteligente</h1>
        <p className="text-ink-soft">Hemos seleccionado {reviewExercises.length} ejercicios de tus conceptos débiles y errores recientes.</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {progress.weakConcepts.length > 0 && (
            <div className="w-full mb-2">
              <p className="text-sm font-semibold text-ink-soft mb-2">Conceptos débiles:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {progress.weakConcepts.map(c => <Badge key={c} variant="warning">{c}</Badge>)}
              </div>
            </div>
          )}
        </div>
        <Button variant="primary" size="lg" onClick={() => setStarted(true)}>
          Empezar repaso ({reviewExercises.length} ejercicios)
        </Button>
      </div>
    )
  }

  const cur = reviewExercises[idx]
  return (
    <div className="space-y-5 max-w-3xl mx-auto">
      <div className="flex items-center justify-between">
        <Badge variant="warning">Repaso</Badge>
        <span className="text-sm font-medium text-ink-soft">{idx + 1} / {reviewExercises.length}</span>
      </div>
      <ExerciseRenderer
        key={cur.exercise.id + idx}
        exercise={cur.exercise}
        onAnswer={(c) => handleAnswer(c, cur.exercise.concept)}
        onNext={handleNext}
        isLast={idx === reviewExercises.length - 1}
      />
    </div>
  )
}

export default ReviewPage