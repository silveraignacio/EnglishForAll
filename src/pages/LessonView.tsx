import { useState, useMemo, useCallback } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getCourse } from '@/content'
import { useProgressStore } from '@/store/progressStore'
import { useSettingsStore } from '@/store/settingsStore'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { ExerciseRenderer } from '@/components/exercises/ExerciseRenderer'
import { Markdown } from '@/components/ui/Markdown'
import { SpeakButton } from '@/components/ui/SpeakButton'
import type { ExerciseRecord } from '@/types/progress'
import { cn } from '@/lib/utils'
import { isLevelUnlocked } from '@/lib/access'

type LessonPhase = 'explanation' | 'exercises' | 'results'

export function LessonView() {
  const { lessonId } = useParams<{ lessonId: string }>()
  const navigate = useNavigate()
  const course = getCourse()
  const progress = useProgressStore((s) => s.progress)
  const recordExercise = useProgressStore((s) => s.recordExercise)
  const completeLesson = useProgressStore((s) => s.completeLesson)
  const setCurrentLesson = useProgressStore((s) => s.setCurrentLesson)
  const settings = useSettingsStore((s) => s.settings)

  const lessonData = useMemo((): {
    lesson: import('@/content/types').Lesson | null
    module: import('@/content/types').Module | null
    moduleIndex: number
    lessonIndex: number
    nextLesson: import('@/content/types').Lesson | null
  } => {
    for (const level of course.levels) {
      for (let mi = 0; mi < level.modules.length; mi++) {
        const mod = level.modules[mi]
        for (let li = 0; li < mod.lessons.length; li++) {
          const l = mod.lessons[li]
          if (l.id === lessonId) {
            const next = mod.lessons[li + 1] || (level.modules[mi + 1]?.lessons[0] ?? null)
            return { lesson: l, module: mod, moduleIndex: mi, lessonIndex: li, nextLesson: next }
          }
        }
      }
    }
    return { lesson: null, module: null, moduleIndex: -1, lessonIndex: -1, nextLesson: null }
  }, [course, lessonId])

  const lesson = lessonData.lesson
  const mod = lessonData.module
  const moduleIndex = lessonData.moduleIndex
  const lessonIndex = lessonData.lessonIndex
  const nextLesson = lessonData.nextLesson

  const [phase, setPhase] = useState<LessonPhase>('explanation')
  const [exerciseIdx, setExerciseIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [attemptResults, setAttemptResults] = useState<boolean[]>([])

  // Practice exercises and the mini-test are one continuous sequence for the
  // learner — no separate "phase" screen or counter reset in between.
  const allExercises = useMemo(
    () => (lesson ? [...lesson.exercises, ...lesson.miniTest] : []),
    [lesson]
  )

  const handleRecord = useCallback(
    (correct: boolean, userAnswer: string, attempts: number) => {
      if (!lesson) return
      const rec: ExerciseRecord = {
        exerciseId: '',
        lessonId: lesson.id,
        correct,
        attempts,
        timestamp: Date.now(),
        concept: '',
        difficulty: 1,
        userAnswer,
      }
      // Fill from current exercise
      const ex = allExercises[exerciseIdx]
      rec.exerciseId = ex.id
      rec.concept = ex.concept
      rec.difficulty = ex.difficulty
      recordExercise(rec)
      if (correct) {
        setScore((s) => s + 1)
        setAttemptResults((r) => [...r, true])
      } else {
        setAttemptResults((r) => [...r, false])
      }
    },
    [lesson, allExercises, exerciseIdx, recordExercise]
  )

  const handleNext = useCallback(() => {
    if (!lesson) return
    if (exerciseIdx < allExercises.length - 1) {
      setExerciseIdx(exerciseIdx + 1)
    } else {
      setPhase('results')
      // Determine if lesson passed. `score` already reflects the answer to
      // this last exercise — handleRecord runs before handleNext.
      const totalAttempted = allExercises.length
      const pct = totalAttempted > 0 ? (score / totalAttempted) * 100 : 0
      const passed = pct >= settings.passingThreshold
      const allCorrect = score === totalAttempted
      if (passed) {
        completeLesson(lesson.id, allCorrect)
      }
    }
  }, [lesson, allExercises, exerciseIdx, score, completeLesson, settings.passingThreshold])

  if (!lesson || !mod) {
    return (
      <div className="text-center py-20">
        <p className="text-ink-soft mb-4">Lección no encontrada.</p>
        <Link to="/"><Button variant="secondary">Volver al inicio</Button></Link>
      </div>
    )
  }

  const lessonLevelId = mod.levelId
  const lessonUnlocked = isLevelUnlocked(progress, lessonLevelId)
  if (!lessonUnlocked) {
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

  const totalExercises = allExercises.length
  const currentExercise = phase === 'exercises' ? allExercises[exerciseIdx] : null

  if (phase === 'explanation') {
    return (
      <div className="space-y-6 animate-fade-in max-w-3xl mx-auto">
        <LessonBreadcrumb module={mod} lesson={lesson} moduleIndex={moduleIndex} lessonIndex={lessonIndex} />
        <LessonExplanation lesson={lesson} />
        <div className="flex items-center justify-between pt-4 border-t border-ink/5">
          <Link to={`/level/${mod.levelId}`}>
            <Button variant="ghost">← Módulos</Button>
          </Link>
          <Button variant="primary" size="lg" onClick={() => { setCurrentLesson(lesson.id); setPhase('exercises') }}>
            Empezar práctica ({totalExercises} ejercicios) →
          </Button>
        </div>
      </div>
    )
  }

  if (phase === 'results') {
    const totalAttempted = totalExercises
    const pct = totalAttempted > 0 ? Math.round((score / totalAttempted) * 100) : 0
    const passed = pct >= settings.passingThreshold
    return (
      <div className="space-y-6 animate-fade-in max-w-2xl mx-auto text-center py-10">
        <div className="text-6xl">{passed ? '🎉' : '💪'}</div>
        <h2 className="text-2xl font-extrabold">
          {passed ? '¡Lección completada!' : 'Sigue practicando'}
        </h2>
        <div className="max-w-sm mx-auto">
          <ProgressBar value={pct} height="lg" showValue color={passed ? 'success' : 'warning'} />
        </div>
        <p className="text-ink-soft">
          Aciertos: {score} / {totalAttempted} ({pct}%)
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          {nextLesson && passed ? (
            <>
              <Button variant="secondary" onClick={() => { setPhase('explanation'); setExerciseIdx(0); setScore(0); setAttemptResults([]) }}>
                Repetir lección
              </Button>
              <Button variant="primary" onClick={() => navigate(`/lesson/${nextLesson.id}`)}>
                Siguiente lección →
              </Button>
            </>
          ) : !nextLesson && passed ? (
            <Button variant="success" onClick={() => navigate(`/module/${mod!.id}/checkpoint`)}>
              Hacer checkpoint del módulo →
            </Button>
          ) : (
            <Button variant="primary" onClick={() => { setPhase('explanation'); setExerciseIdx(0); setScore(0); setAttemptResults([]) }}>
              Repetir lección
            </Button>
          )}
        </div>
        {!passed && (
          <p className="text-sm text-ink-light pt-2">
            Necesitas al menos {settings.passingThreshold}% para completar la lección.
          </p>
        )}
      </div>
    )
  }

  // Exercise phase — practice and mini-test exercises flow as a single sequence.
  const phaseProgress = Math.round((exerciseIdx / totalExercises) * 100)

  return (
    <div className="space-y-5 max-w-3xl mx-auto">
      <LessonBreadcrumb module={mod} lesson={lesson} moduleIndex={moduleIndex} lessonIndex={lessonIndex} compact />
      <div className="flex items-center justify-between">
        <Badge variant="brand">Práctica</Badge>
        <span className="text-sm font-medium text-ink-soft">
          {exerciseIdx + 1} / {totalExercises}
        </span>
      </div>
      <ProgressBar value={phaseProgress} height="sm" />
      {currentExercise && (
        <ExerciseRenderer
          key={currentExercise.id + exerciseIdx}
          exercise={currentExercise}
          onAnswer={handleRecord}
          onNext={handleNext}
          isLast={exerciseIdx === totalExercises - 1}
        />
      )}
    </div>
  )
}

function LessonBreadcrumb({ module: mod, lesson, moduleIndex, lessonIndex, compact }: {
  module: import('@/content/types').Module
  lesson: import('@/content/types').Lesson
  moduleIndex: number
  lessonIndex: number
  compact?: boolean
}) {
  const levelId = mod.levelId
  return (
    <div className={cn('flex items-center gap-2 text-sm text-ink-light', compact && 'text-xs')}>
      <Link to={`/level/${levelId}`} className="hover:text-ink">{levelId.toUpperCase()}</Link>
      <span>/</span>
      <Link to={`/level/${levelId}#module-${moduleIndex}`} className="hover:text-ink">Módulo {moduleIndex + 1}</Link>
      <span>/</span>
      <span className="text-ink font-medium">Lección {lessonIndex + 1}</span>
    </div>
  )
}

function LessonExplanation({ lesson }: { lesson: import('@/content/types').Lesson }) {
  return (
    <article className="space-y-6">
      <header>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-ink mb-2">{lesson.title}</h1>
        <p className="text-ink-soft text-base">{lesson.objective}</p>
      </header>

      {/* Explanation */}
      <Card>
        <h2 className="text-lg font-bold text-ink mb-3">📖 Explicación</h2>
        <div className="text-ink-soft leading-relaxed">
          <Markdown content={lesson.explanation_es} />
        </div>
      </Card>

      {/* Examples */}
      {lesson.examples.length > 0 && (
        <Card>
          <h2 className="text-lg font-bold text-ink mb-3">✏️ Ejemplos</h2>
          <div className="space-y-3">
            {lesson.examples.map((ex, i) => (
              <div key={i} className="p-3 rounded-xl bg-surface-muted border border-ink/5">
                <div className="flex items-start gap-2">
                  <p className="text-ink font-medium">{ex.english}</p>
                  <SpeakButton text={ex.english} size="sm" />
                </div>
                <p className="text-ink-light text-sm mt-0.5">= {ex.spanish}</p>
                {ex.note && <p className="text-brand-600 text-xs mt-1.5 italic">{ex.note}</p>}
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Rule */}
      <Card className="bg-brand-50 border-brand-100">
        <h2 className="text-lg font-bold text-ink mb-3">📐 Regla</h2>
        <div className="text-ink-soft leading-relaxed">
          <Markdown content={lesson.rule} />
        </div>
      </Card>

      {/* Formation — cómo se forma el tiempo/forma verbal (sección clave) */}
      {lesson.formation && (
        <Card className="border-2 border-brand-300 bg-gradient-to-b from-brand-50 to-white shadow-sm">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="inline-flex items-center rounded-full bg-brand-600 text-white text-xs font-bold px-2.5 py-0.5 uppercase tracking-wider">
              ⭐ Clave
            </span>
            <h2 className="text-lg font-extrabold text-ink">{lesson.formation.title}</h2>
          </div>
          {lesson.formation.intro && (
            <p className="text-ink-soft text-sm mb-4">{lesson.formation.intro}</p>
          )}
          <div className="space-y-4">
            {lesson.formation.patterns.map((p, i) => (
              <div key={i} className="rounded-xl border border-brand-100 bg-white p-4">
                <h3 className="font-bold text-brand-700 mb-2">{p.name}</h3>
                <p className="font-mono text-sm bg-brand-50 border-l-4 border-brand-500 text-brand-800 rounded-r-md px-3 py-2 mb-3">
                  {p.formula}
                </p>
                <ul className="space-y-1.5">
                  {p.examples.map((e, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-ink font-medium">{e.english}</span>
                      <SpeakButton text={e.english} size="sm" />
                      <span className="text-ink-light text-sm">= {e.spanish}</span>
                    </li>
                  ))}
                </ul>
                {p.note && <p className="text-brand-600 text-xs italic mt-2">💡 {p.note}</p>}
              </div>
            ))}
          </div>
          {lesson.formation.notes && lesson.formation.notes.length > 0 && (
            <div className="mt-4 rounded-xl bg-amber-50 border border-amber-200 p-4">
              <h3 className="font-bold text-amber-800 text-sm mb-2">⚠️ Casos particulares</h3>
              <ul className="space-y-1">
                {lesson.formation.notes.map((n, i) => (
                  <li key={i} className="text-ink-soft text-sm flex gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Card>
      )}

      {/* Common Mistakes */}
      {lesson.commonMistakes.length > 0 && (
        <Card className="bg-error-50/30 border-error-200/40">
          <h2 className="text-lg font-bold text-error-600 mb-3">⚠️ Errores comunes</h2>
          <ul className="space-y-3">
            {lesson.commonMistakes.map((m, i) => (
              <li key={i} className="border-l-2 border-error-300 pl-3">
                <p className="text-error-600 text-sm line-through">{m.wrong}</p>
                <p className="text-success-600 text-sm font-medium">{m.correct}</p>
                <p className="text-ink-light text-xs mt-1">{m.explanation}</p>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {/* Vocabulary */}
      {lesson.vocabulary.length > 0 && (
        <Card>
          <h2 className="text-lg font-bold text-ink mb-3">📚 Vocabulario</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {lesson.vocabulary.map((v, i) => (
              <div key={i} className="p-3 rounded-lg bg-surface-muted border border-ink/5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="font-semibold text-ink truncate">{v.word}</span>
                    <SpeakButton text={v.word} size="sm" />
                  </div>
                  <Badge variant="muted">{v.partOfSpeech}</Badge>
                </div>
                <p className="text-ink-light text-sm">{v.translation_es}</p>
                <div className="flex items-start gap-1 mt-1">
                  <p className="text-ink-faint text-xs italic">"{v.example}"</p>
                  <SpeakButton text={v.example} size="sm" className="!p-0.5 text-xs" />
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Grammar Points */}
      {lesson.grammarPoints.length > 0 && (
        <Card>
          <h2 className="text-lg font-bold text-ink mb-3">🧩 Gramática</h2>
          <div className="space-y-4">
            {lesson.grammarPoints.map((g, i) => (
              <div key={i} className="p-3 rounded-lg bg-surface-muted border border-ink/5">
                <h3 className="font-semibold text-ink mb-1">{g.name}</h3>
                <p className="text-ink-light text-sm mb-2">{g.explanation_es}</p>
                <p className="text-brand-700 font-mono text-sm bg-brand-50 rounded px-2 py-1 inline-block">{g.formula}</p>
                <ul className="mt-2 space-y-1">
                  {g.examples.map((e, j) => (
                    <li key={j} className="text-ink-soft text-sm">• {e}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>
      )}
    </article>
  )
}

export default LessonView