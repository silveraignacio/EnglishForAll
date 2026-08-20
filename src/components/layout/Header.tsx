import { Link, useLocation } from 'react-router-dom'
import { useProgressStore } from '@/store/progressStore'
import { useAuthStore } from '@/store/authStore'
import { cn } from '@/lib/utils'

export function Header() {
  const progress = useProgressStore((s) => s.progress)
  const user = useAuthStore((s) => s.user)
  const logout = useAuthStore((s) => s.logout)
  const location = useLocation()
  const navItems = [
    { to: '/', label: 'Inicio', icon: '🏠' },
    { to: '/level/a1', label: 'Curso', icon: '📚' },
    { to: '/review', label: 'Repaso', icon: '🔄' },
    { to: '/cheatsheet', label: 'Cheat sheet', icon: '📋' },
    { to: '/workbook', label: 'Workbook', icon: '📘' },
    { to: '/achievements', label: 'Logros', icon: '🏆' },
  ]
  return (
    <header className="sticky top-0 z-30 bg-surface/85 backdrop-blur-md border-b border-ink/5">
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-ink hover:opacity-80 transition-opacity">
          <span className="w-9 h-9 rounded-lg bg-brand-600 text-white flex items-center justify-center font-extrabold">E4A</span>
          <span className="hidden sm:inline">English4All</span>
        </Link>
        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                'px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                location.pathname === item.to
                  ? 'bg-brand-100 text-brand-700'
                  : 'text-ink-soft hover:bg-surface-muted'
              )}
            >
              <span className="sm:hidden">{item.icon}</span>
              <span className="hidden sm:inline">{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 text-sm">
          <div className="hidden sm:flex items-center gap-1 text-warning-600 font-semibold" title="Racha de estudio">
            🔥 {progress.streak}
          </div>
          <div className="flex items-center gap-1 text-brand-600 font-semibold" title="Puntos de experiencia">
            ⚡ {progress.xp}
          </div>
          {user ? (
            <div className="flex items-center gap-2">
              <span className="hidden md:inline text-ink-soft font-medium max-w-[120px] truncate" title={user.email}>
                👤 {user.nombre || user.email}
              </span>
              <button
                onClick={() => logout()}
                className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-surface-muted text-ink-soft hover:bg-error-50 hover:text-error-600 transition-colors"
                title="Cerrar sesión"
              >
                Salir
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-brand-50 text-brand-700 hover:bg-brand-100 transition-colors"
            >
              Iniciar sesión
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header