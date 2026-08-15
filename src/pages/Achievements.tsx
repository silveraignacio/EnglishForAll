import { useProgressStore, ACHIEVEMENTS } from '@/store/progressStore'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'

export function Achievements() {
  const progress = useProgressStore((s) => s.progress)
  const earned = new Set(progress.achievements)
  return (
    <div className="space-y-6 animate-fade-in">
      <header>
        <h1 className="text-2xl sm:text-3xl font-extrabold">Logros</h1>
        <p className="text-ink-soft mt-1">Tu progreso y reconocimientos.</p>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
        <Card className="text-center">
          <div className="text-3xl font-bold text-brand-600">⚡ {progress.xp}</div>
          <div className="text-sm text-ink-light mt-1">XP total</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-warning-600">🔥 {progress.streak}</div>
          <div className="text-sm text-ink-light mt-1">Días de racha</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-success-600">{progress.completedModules.length}</div>
          <div className="text-sm text-ink-light mt-1">Módulos completados</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-ink">{progress.completedLessons.length}</div>
          <div className="text-sm text-ink-light mt-1">Lecciones completadas</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-accent-500">{earned.size}/{ACHIEVEMENTS.length}</div>
          <div className="text-sm text-ink-light mt-1">Logros desbloqueados</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-brand-600">{progress.examResults.filter(e => e.totalScore >= 60).length}</div>
          <div className="text-sm text-ink-light mt-1">Exámenes aprobados</div>
        </Card>
      </div>

      <section>
        <h2 className="text-lg font-bold mb-3">Medallas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {ACHIEVEMENTS.map((a) => {
            const unlocked = earned.has(a.id)
            return (
              <Card key={a.id} className={cn('flex items-center gap-3', !unlocked && 'opacity-50')}>
                <div className={cn(
                  'flex-none w-12 h-12 rounded-xl flex items-center justify-center text-2xl',
                  unlocked ? 'bg-brand-50' : 'bg-surface-muted grayscale'
                )}>
                  {a.icon}
                </div>
                <div>
                  <p className="font-semibold text-ink">{a.name}</p>
                  <p className="text-xs text-ink-light">{a.description}</p>
                  {unlocked && <Badge variant="success" className="mt-1">Desbloqueado</Badge>}
                </div>
              </Card>
            )
          })}
        </div>
      </section>

      {progress.examResults.length > 0 && (
        <section>
          <h2 className="text-lg font-bold mb-3">Historial de exámenes</h2>
          <div className="space-y-3">
            {progress.examResults.map((r, i) => (
              <Card key={i} className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-ink">Examen final {r.examId.replace('-final', '').toUpperCase()}</p>
                  <p className="text-xs text-ink-light">{new Date(r.timestamp).toLocaleDateString('es')}</p>
                </div>
                <div className="text-right">
                  <p className={cn('text-2xl font-bold', r.totalScore >= 60 ? 'text-success-600' : 'text-error-600')}>
                    {r.totalScore}%
                  </p>
                  <Badge variant={r.totalScore >= 60 ? 'success' : 'error'}>
                    {r.totalScore >= 60 ? 'Aprobado' : 'No aprobado'}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

export default Achievements