import { Link, useParams } from 'react-router-dom'
import { getCourse } from '@/content'
import { useProgressStore } from '@/store/progressStore'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { isLevelUnlocked, EXAM_BY_LEVEL } from '@/lib/access'

export function LevelPath() {
  const { levelId = 'a1' } = useParams<{ levelId: string }>()
  const course = getCourse()
  const progress = useProgressStore((s) => s.progress)
  const level = course.levels.find((l) => l.id === levelId)

  if (!level) {
    return (
      <div className="text-center py-20">
        <p className="text-ink-soft mb-4">Nivel no encontrado.</p>
        <Link to="/"><Button variant="secondary">Volver al inicio</Button></Link>
      </div>
    )
  }

  const unlocked = isLevelUnlocked(progress, levelId)

  // Locked screen
  if (!unlocked) {
    return (
      <div className="space-y-6 max-w-2xl mx-auto animate-fade-in text-center py-16">
        <div className="text-5xl">🔒</div>
        <h1 className="text-2xl font-extrabold">Nivel {level.name} — {level.title}</h1>
        <p className="text-ink-soft">
          Este nivel todavía está bloqueado.
        </p>
        <Card className="bg-warning-50/50 border-warning-200/40">
          <p className="text-ink-soft text-sm">
            Para desbloquear el nivel {level.name}, haz la prueba de nivel o aprueba el
            examen final del nivel anterior.
          </p>
          <Link to="/placement" className="block mt-3">
            <Button variant="primary" size="sm" className="w-full">🧭 Revisar mi nivel</Button>
          </Link>
        </Card>
        <div className="flex justify-center gap-3">
          <Link to="/"><Button variant="ghost">Volver al inicio</Button></Link>
          <Link to={`/level/a1`}><Button variant="primary">Ir al nivel A1</Button></Link>
        </div>
      </div>
    )
  }

  const examId = EXAM_BY_LEVEL[levelId]

  // Coming soon levels
  if (level.status === 'coming_soon' || level.modules.length === 0) {
    return (
      <div className="space-y-6 max-w-2xl mx-auto animate-fade-in text-center py-16">
        <div className="text-5xl">🚧</div>
        <h1 className="text-2xl font-extrabold">Nivel {level.name} — {level.title}</h1>
        <p className="text-ink-soft">{level.description}</p>
        <Card className="bg-surface-muted">
          <p className="text-ink-soft text-sm">
            Este nivel estará disponible próximamente. Sigue practicando los niveles disponibles.
          </p>
        </Card>
        <Link to="/"><Button variant="primary">Volver al inicio</Button></Link>
      </div>
    )
  }

  const totalLessons = level.modules.reduce((acc, m) => acc + m.lessons.length, 0)
  const completedCount = level.modules.reduce(
    (acc, m) => acc + m.lessons.filter((l) => progress.completedLessons.includes(l.id)).length,
    0
  )

  return (
    <div className="space-y-8 animate-fade-in">
      <header>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-ink mb-1">
          Nivel {level.name} — {level.title}
        </h1>
        <p className="text-ink-soft">{level.description}</p>
        <div className="mt-3 max-w-xs">
          <ProgressBar value={completedCount} max={totalLessons} showValue label="Progreso del nivel" />
        </div>
      </header>

      {/* Other levels */}
      <section>
        <h2 className="text-sm font-semibold text-ink-light mb-2 uppercase tracking-wide">Otros niveles</h2>
        <div className="flex flex-wrap gap-2">
          {course.levels.map((l) => {
            const lUnlocked = isLevelUnlocked(progress, l.id)
            return (
              <Link
                key={l.id}
                to={lUnlocked ? `/level/${l.id}` : '#'}
                className={cn(
                  'badge cursor-default',
                  l.id === levelId ? 'badge-brand' : l.status === 'available' ? (lUnlocked ? 'badge-muted hover:bg-surface-subtle' : 'badge-muted opacity-50') : 'badge-muted opacity-50'
                )}
              >
                {l.status === 'coming_soon' ? `${l.name} (próximamente)` : lUnlocked ? l.name : `${l.name} 🔒`}
              </Link>
            )
          })}
        </div>
      </section>

      <div className="space-y-6">
        {level.modules.map((m, mi) => {
          const moduleLessons = m.lessons.length
          const moduleCompleted = m.lessons.filter((l) => progress.completedLessons.includes(l.id)).length
          const mPct = moduleLessons > 0 ? Math.round((moduleCompleted / moduleLessons) * 100) : 0
          const isComplete = moduleCompleted === moduleLessons
          const isInProgress = moduleCompleted > 0 && moduleCompleted < moduleLessons
          const firstIncomplete = m.lessons.find((l) => !progress.completedLessons.includes(l.id))
          const isFirstModule = mi === 0
          const prevModule = level.modules[mi - 1]
          const prevDone = isFirstModule || (prevModule && prevModule.lessons.every((l) => progress.completedLessons.includes(l.id)))
          const moduleUnlocked = !!prevDone
          return (
            <section key={m.id} id={`module-${mi}`} className="scroll-mt-20">
              <div className="flex items-center gap-3 mb-3">
                <div className={cn(
                  'w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-lg',
                  isComplete ? 'bg-success-500 text-white' : isInProgress ? 'bg-brand-600 text-white' : 'bg-surface-muted text-ink-light'
                )}>
                  {isComplete ? '✓' : mi + 1}
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-bold text-ink">{m.title}</h2>
                  <p className="text-sm text-ink-light">{m.objective}</p>
                </div>
                {isComplete && <Badge variant="success">Completado</Badge>}
                {isInProgress && <Badge variant="warning">{mPct}%</Badge>}
                {!moduleUnlocked && <span className="text-ink-faint">🔒</span>}
              </div>
              <Card className={cn(!moduleUnlocked && 'opacity-60')}>
                <div className="space-y-1">
                  {m.lessons.map((l, li) => {
                    const done = progress.completedLessons.includes(l.id)
                    const isCurrent = !done && l.id === (firstIncomplete?.id ?? '')
                    const prereqMet = moduleUnlocked && (li === 0 || progress.completedLessons.includes(m.lessons[li - 1].id))
                    return (
                      <Link
                        key={l.id}
                        to={prereqMet ? `/lesson/${l.id}` : '#'}
                        className={cn(
                          'flex items-center gap-3 p-3 rounded-xl transition-colors',
                          prereqMet ? 'hover:bg-surface-muted cursor-pointer' : 'cursor-not-allowed opacity-50'
                        )}
                      >
                        <div className={cn(
                          'flex-none w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold',
                          done ? 'bg-success-500 text-white' : isCurrent ? 'bg-brand-100 text-brand-700 ring-2 ring-brand-300' : 'bg-surface-muted text-ink-light'
                        )}>
                          {done ? '✓' : li + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={cn('font-medium text-ink truncate', !prereqMet && 'text-ink-light')}>{l.title}</p>
                          <p className="text-xs text-ink-faint truncate">{l.objective}</p>
                        </div>
                        {!prereqMet && <span className="text-xs text-ink-faint">🔒</span>}
                        {prereqMet && !done && <span className="text-brand-500 text-xs">→</span>}
                      </Link>
                    )
                  })}
                </div>
                {moduleCompleted === moduleLessons && (
                  <div className="mt-4 pt-4 border-t border-ink/5">
                    <Link to={`/module/${m.id}/checkpoint`}>
                      <Button variant="secondary" className="w-full">
                        {progress.completedModules.includes(m.id) ? 'Repetir checkpoint' : 'Hacer checkpoint del módulo'}
                      </Button>
                    </Link>
                  </div>
                )}
              </Card>
            </section>
          )
        })}
      </div>

      {/* Final exam for the level */}
      {examId && completedCount === totalLessons && totalLessons > 0 && (
        <section>
          <Card className="bg-gradient-to-br from-brand-50 to-white border-brand-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="text-3xl">🎓</div>
              <div>
                <h2 className="text-lg font-bold text-ink">Examen Final {level.name}</h2>
                <p className="text-sm text-ink-light">
                  Has completado todas las lecciones. Aprueba este examen para desbloquear el siguiente nivel.
                </p>
              </div>
            </div>
            <Link to={`/exam/${examId}`}>
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Hacer examen final {level.name} →
              </Button>
            </Link>
          </Card>
        </section>
      )}
    </div>
  )
}

export default LevelPath