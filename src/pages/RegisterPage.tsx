import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/store/authStore'
import { useProgressStore } from '@/store/progressStore'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export function RegisterPage() {
  const navigate = useNavigate()
  const { register, error, setError } = useAuthStore()
  const syncToServer = useProgressStore((s) => s.syncToServer)
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (loading) return
    setError(null)
    if (password !== confirm) {
      setError('Las contraseñas no coinciden.')
      return
    }
    if (password.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres.')
      return
    }
    setLoading(true)
    const ok = await register(nombre, email, password)
    if (ok) {
      // New account: push current local progress to the server
      await syncToServer()
      navigate('/')
    }
    setLoading(false)
  }

  return (
    <div className="max-w-md mx-auto py-10 animate-fade-in">
      <Card>
        <div className="text-center mb-6">
          <div className="text-4xl mb-2">📝</div>
          <h1 className="text-2xl font-extrabold">Crear cuenta</h1>
          <p className="text-sm text-ink-light mt-1">
            Sincroniza tu progreso y continúa en cualquier dispositivo.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nombre" className="label">Nombre</label>
            <input
              id="nombre"
              type="text"
              required
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="input"
              placeholder="Tu nombre"
              autoComplete="name"
            />
          </div>
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
            <label htmlFor="password" className="label">Contraseña (mín. 8 caracteres)</label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              placeholder="••••••••"
              autoComplete="new-password"
            />
          </div>
          <div>
            <label htmlFor="confirm" className="label">Repetir contraseña</label>
            <input
              id="confirm"
              type="password"
              required
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="input"
              placeholder="••••••••"
              autoComplete="new-password"
            />
          </div>

          {error && (
            <p className="text-sm text-error-600 bg-error-50 border border-error-200 rounded-lg px-3 py-2" role="alert">
              {error}
            </p>
          )}

          <Button type="submit" variant="primary" className="w-full" disabled={loading}>
            {loading ? 'Creando cuenta...' : 'Crear cuenta'}
          </Button>
        </form>

        <p className="text-center text-sm text-ink-light mt-4">
          ¿Ya tienes cuenta?{' '}
          <Link to="/login" className="text-brand-600 font-medium hover:underline">
            Inicia sesión
          </Link>
        </p>
        <div className="text-center mt-3">
          <Link to="/" className="text-sm text-ink-soft hover:underline">← Volver al inicio</Link>
        </div>
      </Card>
    </div>
  )
}

export default RegisterPage