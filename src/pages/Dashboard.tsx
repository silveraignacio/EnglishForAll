import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useProgressStore } from '@/store/progressStore'
import { useAuthStore } from '@/store/authStore'
import { getCourse } from '@/content'
import { Card } from '@/components/ui/Card'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { isLevelUnlocked } from '@/lib/access'
import { LandingSection } from '@/pages/LandingSection'

export function Dashboard() {
  const progress = useProgressStore((s) => s.progress)
  const user = useAuthStore((s) => s.user)
  const course = getCourse()

  const levels = course.levels

  // Brand-new visitor: no account and no progress yet (nothing to lose by
  // showing marketing content instead of an empty personal dashboard).
  // Anyone with local progress or an account keeps seeing their dashboard —
  // this must never hide progress a returning anonymous user already has.
  const isNewVisitor =
    !user &&
    progress.completedLessons.length === 0 &&
    progress.xp === 0 &&
    !progress.placementResult

  if (isNewVisitor) {
    return <LandingSection levels={levels} />
  }

  // Determine active level: the placement-recommended level (if any and
  // still unlocked/available) takes priority — otherwise fall back to the
  // first unlocked level with incomplete lessons. Without this, a user
  // placed at B1 would keep seeing A1 by default just because they hadn't
  // completed every single A1 lesson (reverse-unlock keeps A1 accessible
  // for reference, it doesn't mean the user is "working on" A1).
  const activeLevelId = useMemo(() => {
    const unlockedAvailable = levels.filter(
      (l) => l.status === 'available' && isLevelUnlocked(progress, l.id)
    )
    const recommended = progress.placementResult?.recommendedLevel
    if (recommended && unlockedAvailable.some((l) => l.id === recommended)) {
      return recommended
    }
    // prefer a level with incomplete lessons
    for (const l of unlockedAvailable) {
      const all = l.modules.flatMap((m) => m.lessons)
      if (all.some((ls) => !progress.completedLessons.includes(ls.id))) return l.id
    }
    return unlockedAvailable[0]?.id ?? 'a1'
  }, [levels, progress])

  const [selectedLevelId, setSelectedLevelId] = useState<string>(activeLevelId)
  const selectedLevel = levels.find((l) => l.id === selectedLevelId) ?? levels.find((l) => l.id === activeLevelId)
  if (!selectedLevel) return <div>No course content available</div>

  const isLocked = !isLevelUnlocked(progress, selectedLevel.id)

  const allLessons = useMemo(
    () => selectedLevel.modules.flatMap((m) => m.lessons),
    [selectedLevel]
  )
  const totalLessons = allLessons.length
  const completedCount = allLessons.filter((l) => progress.completedLessons.includes(l.id)).length
  const overallPct = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0

  // Find current lesson for the "Continue" card. If a placement result put
  // the user at, say, B1, look there first — otherwise fall back to
  // scanning every unlocked level from A1 up.
  const currentLesson = useMemo(() => {
    const unlockedLevels = levels.filter((l) => l.status === 'available' && isLevelUnlocked(progress, l.id))
    const recommended = progress.placementResult?.recommendedLevel
    const recommendedLevel = recommended ? unlockedLevels.find((l) => l.id === recommended) : null
    const orderedLevels = recommendedLevel
      ? [recommendedLevel, ...unlockedLevels.filter((l) => l.id !== recommendedLevel.id)]
      : unlockedLevels
    for (const lvl of orderedLevels) {
      for (const m of lvl.modules) {
        const next = m.lessons.find((l) => !progress.completedLessons.includes(l.id))
        if (next) return { lesson: next, module: m, level: lvl }
      }
    }
    return null
  }, [levels, progress])

  const levelStats = useMemo(() => {
    return levels
      .filter((l) => l.status === 'available')
      .map((l) => {
        const all = l.modules.flatMap((m) => m.lessons)
        const done = all.filter((ls) => progress.completedLessons.includes(ls.id)).length
        const unlocked = isLevelUnlocked(progress, l.id)
        return { level: l, total: all.length, done, unlocked }
      })
  }, [levels, progress])

  return (
    <div className="space-y-6 animate-fade-in">
      <section className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-ink">¡Hola! 👋</h1>
          <p className="text-ink-soft mt-1">Continúa aprendiendo inglés.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {levels.map((l) => {
            const unlocked = l.status === 'available' && isLevelUnlocked(progress, l.id)
            const active = l.id === selectedLevel.id
            return (
              <button
                key={l.id}
                disabled={l.status === 'coming_soon'}
                onClick={() => setSelectedLevelId(l.id)}
                className={cn(
                  'px-3 py-1.5 rounded-lg text-sm font-semibold border transition-all',
                  active
                    ? 'bg-brand-600 text-white border-brand-600'
                    : 'bg-surface border-ink/10 text-ink-soft hover:border-brand-400',
                  !unlocked && l.status === 'available' && 'opacity-50'
                )}
                title={unlocked ? `Nivel ${l.name}` : 'Bloqueado: haz la prueba de nivel o aprueba el examen anterior'}
              >
                {l.name} {l.status === 'coming_soon' ? '(🔜)' : !unlocked ? '🔒' : ''}
              </button>
            )
          })}
        </div>
      </section>

      {!progress.placementResult ? (
        <Link to="/placement" className="block">
          <Card hoverable className="flex items-center gap-4 border-dashed border-brand-300 bg-brand-50/40">
            <div className="text-3xl flex-none">🧭</div>
            <div className="flex-1">
              <h2 className="text-lg font-bold text-ink">¿No sabes por dónde empezar?</h2>
              <p className="text-sm text-ink-soft">
                Haz la prueba de nivel (≈10 min) y te recomendamos el nivel perfecto para ti.
              </p>
            </div>
            <Button variant="primary" size="sm">Revisar mi nivel →</Button>
          </Card>
        </Link>
      ) : (
        <Card className="flex items-center gap-4">
          <div className="text-3xl flex-none">🎯</div>
          <div className="flex-1">
            <p className="text-sm text-ink-light">Tu nivel recomendado</p>
            <p className="font-bold text-ink">
              {progress.placementResult.recommendedLevel.toUpperCase()}
              {' · '}
              {new Date(progress.placementResult.timestamp).toLocaleDateString('es')}
            </p>
          </div>
          <Link to="/placement">
            <Button variant="secondary" size="sm">Repetir prueba</Button>
          </Link>
        </Card>
      )}

      {currentLesson && (
        <Card className="bg-gradient-to-br from-brand-50 to-white border-brand-200">
          <div className="flex items-center gap-3 mb-3">
            <Badge variant="brand">Continuar</Badge>
            <span className="text-sm text-ink-light">
              Nivel {currentLesson.level.name} · {currentLesson.module.title}
            </span>
          </div>
          <h2 className="text-xl font-bold text-ink mb-1">{currentLesson.lesson.title}</h2>
          <p className="text-ink-soft text-sm mb-4">{currentLesson.lesson.objective}</p>
          <Link to={`/lesson/${currentLesson.lesson.id}`}>
            <Button size="lg" variant="primary">
              Empezar lección →
            </Button>
          </Link>
        </Card>
      )}

      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold text-ink">
            Nivel {selectedLevel.name} — {selectedLevel.title}
          </h2>
          <Link to={`/level/${selectedLevel.id}`}>
            <Button variant="secondary" size="sm">Ver curso</Button>
          </Link>
        </div>
        {isLocked ? (
          <Card className="bg-warning-50/50 border-warning-200/40">
            <p className="text-ink-soft text-sm mb-3">
              🔒 Este nivel está bloqueado. Aprueba el examen final del nivel anterior para desbloquearlo.
            </p>
            <Link to="/level/a1"><Button variant="primary" size="sm">Ir a A1</Button></Link>
          </Card>
        ) : (
          <Card>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-ink-soft">Progreso del nivel</span>
                  <span className="text-sm font-bold text-ink">{overallPct}%</span>
                </div>
                <ProgressBar value={overallPct} height="lg" />
              </div>
              <div className="flex items-center justify-between text-sm text-ink-soft">
                <span>Lecciones completadas</span>
                <span className="font-semibold text-ink">{completedCount} / {totalLessons}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-ink-soft">
                <span>XP total</span>
                <span className="font-semibold text-brand-600">⚡ {progress.xp}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-ink-soft">
                <span>Racha actual</span>
                <span className="font-semibold text-warning-600">🔥 {progress.streak} días</span>
              </div>
            </div>
          </Card>
        )}
      </section>

      {!isLocked && (
        <section>
          <h2 className="text-lg font-bold text-ink mb-3">Módulos del nivel {selectedLevel.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {selectedLevel.modules.map((m) => {
              const moduleLessons = m.lessons.length
              const moduleCompleted = m.lessons.filter((l) => progress.completedLessons.includes(l.id)).length
              const mPct = moduleLessons > 0 ? Math.round((moduleCompleted / moduleLessons) * 100) : 0
              const isComplete = moduleCompleted === moduleLessons
              const isInProgress = moduleCompleted > 0 && moduleCompleted < moduleLessons
              return (
                <Link key={m.id} to={`/level/${selectedLevel.id}#module-${m.order}`}>
                  <Card hoverable className="h-full">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-ink text-sm leading-tight">{m.order + 1}. {m.title}</h3>
                      {isComplete && <Badge variant="success">✓</Badge>}
                      {isInProgress && <Badge variant="warning">En progreso</Badge>}
                    </div>
                    <p className="text-xs text-ink-light mb-3 line-clamp-2">{m.objective}</p>
                    <ProgressBar value={mPct} height="sm" showValue={false} />
                    <p className="text-xs text-ink-faint mt-1.5">{moduleCompleted}/{moduleLessons} lecciones</p>
                  </Card>
                </Link>
              )
            })}
          </div>
        </section>
      )}

      <section>
        <h2 className="text-lg font-bold text-ink mb-3">Niveles del curso</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {levelStats.map(({ level: l, total, done, unlocked }) => (
            <Link key={l.id} to={unlocked ? `/level/${l.id}` : '#'}>
              <Card hoverable className={cn('text-center h-full', !unlocked && 'opacity-60')}>
                <div className="text-lg font-extrabold text-ink">{l.name}</div>
                <div className="text-xs text-ink-light mt-0.5 mb-2">{l.title}</div>
                {l.status === 'coming_soon' ? (
                  <Badge variant="muted">Próximamente</Badge>
                ) : unlocked ? (
                  <>
                    <ProgressBar value={done} max={total} height="sm" showValue={false} />
                    <p className="text-[11px] text-ink-faint mt-1">{done}/{total} lecciones</p>
                  </>
                ) : (
                  <Badge variant="warning">Bloqueado 🔒</Badge>
                )}
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {progress.weakConcepts.length > 0 && (
        <section>
          <h2 className="text-lg font-bold text-ink mb-3">Conceptos a repasar</h2>
          <Card>
            <div className="flex flex-wrap gap-2">
              {progress.weakConcepts.map((c) => (
                <Badge key={c} variant="warning">{c}</Badge>
              ))}
            </div>
            <Link to="/review" className="block mt-3">
              <Button variant="secondary" size="sm">Ir a repaso</Button>
            </Link>
          </Card>
        </section>
      )}
    </div>
  )
}

export default Dashboard