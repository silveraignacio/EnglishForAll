import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/store/authStore'
import { useProgressStore } from '@/store/progressStore'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export function LoginPage() {
  const navigate = useNavigate()
  const { login, error, setError } = useAuthStore()
  const syncFromServer = useProgressStore((s) => s.syncFromServer)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (loading) return
    setError(null)
    setLoading(true)
    const ok = await login(email, password)
    if (ok) {
      // Load server progress into local state (server is source of truth for logged users)
      const loaded = await syncFromServer()
      if (!loaded) {
        // No server progress yet — push local progress up
        await useProgressStore.getState().syncToServer()
      }
      navigate('/')
    }
    setLoading(false)
  }

  return (
    <div className="max-w-md mx-auto py-10 animate-fade-in">
      <Card>
        <div className="text-center mb-6">
          <div className="text-4xl mb-2">🔐</div>
          <h1 className="text-2xl font-extrabold">Iniciar sesión</h1>
          <p className="text-sm text-ink-light mt-1">Accede para sincronizar tu progreso.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="label">Email</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              placeholder="tu@email.com"
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor="password" className="label">Contraseña</label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>

          {error && (
            <p className="text-sm text-error-600 bg-error-50 border border-error-200 rounded-lg px-3 py-2" role="alert">
              {error}
            </p>
          )}

          <Button type="submit" variant="primary" className="w-full" disabled={loading}>
            {loading ? 'Entrando...' : 'Entrar'}
          </Button>
        </form>

        <p className="text-center text-sm text-ink-light mt-4">
          ¿No tienes cuenta?{' '}
          <Link to="/register" className="text-brand-600 font-medium hover:underline">
            Regístrate
          </Link>
        </p>
        <p className="text-center text-xs text-ink-faint mt-3">
          Puedes seguir estudiando sin cuenta: el progreso se guarda en tu navegador.
        </p>
        <div className="text-center mt-3">
          <Link to="/" className="text-sm text-ink-soft hover:underline">← Volver al inicio</Link>
        </div>
      </Card>
    </div>
  )
}

export default LoginPage