import { Link } from 'react-router-dom'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import type { Level } from '@/content/types'

interface LandingSectionProps {
  levels: Level[]
}

const FEATURES: { emoji: string; title: string; description: string }[] = [
  {
    emoji: '📚',
    title: 'De A1 a B1, con más niveles en camino',
    description: 'Explicaciones en español, práctica en inglés. Cada lección tiene teoría, vocabulario, ejemplos y ejercicios variados.',
  },
  {
    emoji: '🧭',
    title: 'Prueba de nivel',
    description: '¿Ya sabés algo de inglés? Hacé la prueba de nivel y te recomendamos por dónde empezar, sin repetir lo que ya sabés.',
  },
  {
    emoji: '🎓',
    title: 'Checkpoints y exámenes finales',
    description: 'Cada módulo tiene un checkpoint, y cada nivel un examen final que desbloquea el siguiente.',
  },
  {
    emoji: '⚡',
    title: 'XP, rachas y logros',
    description: 'Sumá experiencia por cada ejercicio correcto, mantené tu racha de estudio día a día, y desbloqueá logros a medida que avanzás.',
  },
  {
    emoji: '🔊',
    title: 'Pronunciación con audio',
    description: 'Escuchá cualquier palabra o frase en inglés con un clic, gratis, las veces que quieras.',
  },
  {
    emoji: '🎯',
    title: 'Repaso inteligente',
    description: 'El sistema detecta los conceptos donde más te cuesta y te arma un repaso con esos ejercicios.',
  },
]

export function LandingSection({ levels }: LandingSectionProps) {
  const available = levels.filter((l) => l.status === 'available')
  const comingSoon = levels.filter((l) => l.status === 'coming_soon')
  const availableNames = available.map((l) => l.name).join(', ')
  const comingSoonNames = comingSoon.map((l) => l.name).join(', ')

  return (
    <div className="space-y-14 animate-fade-in">
      <section className="text-center pt-4 pb-2">
        <p className="text-5xl mb-4">🇬🇧</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ink">Aprendé inglés desde cero</h1>
        <p className="mt-3 text-lg text-ink-soft max-w-xl mx-auto">
          Un curso pensado para hispanohablantes: <strong className="text-ink">se explica en español, se practica
          en inglés.</strong> Niveles {availableNames} disponibles{comingSoonNames ? ` · ${comingSoonNames} próximamente` : ''}.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link to="/register">
            <Button variant="primary" size="lg">Crear cuenta gratis</Button>
          </Link>
          <Link to="/placement">
            <Button variant="secondary" size="lg">Probar sin registrarme →</Button>
          </Link>
        </div>
        <p className="mt-4 text-sm text-warning-700 bg-warning-50 border border-warning-200/60 rounded-lg px-4 py-2 max-w-md mx-auto">
          ⚠️ Podés usar el curso sin cuenta, pero tu progreso se guarda solo en este navegador/dispositivo.
          Si cambiás de dispositivo o borrás los datos del navegador <strong>sin haberte registrado, lo perdés</strong>.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => (
          <Card key={f.title} className="h-full">
            <p className="text-3xl">{f.emoji}</p>
            <h2 className="mt-2 font-bold text-ink">{f.title}</h2>
            <p className="mt-1 text-sm text-ink-light">{f.description}</p>
          </Card>
        ))}
      </section>

      <section className="rounded-2xl bg-brand-50 border border-brand-200 p-8 text-center">
        <h2 className="text-xl font-bold text-ink">¿Cómo funciona?</h2>
        <p className="mt-2 text-ink-soft max-w-2xl mx-auto">
          Cada nivel se divide en módulos, y cada módulo en lecciones con teoría breve en español, vocabulario con
          pronunciación, ejemplos y ejercicios de distintos tipos (opción múltiple, traducir, ordenar, corregir
          errores, comprensión de lectura, y más). Al completar todas las lecciones de un módulo hacés el
          checkpoint, y al terminar todos los módulos de un nivel, el examen final — si lo aprobás, se desbloquea
          el siguiente nivel.
        </p>
        <Link to="/register" className="inline-block mt-6">
          <Button variant="primary" size="lg">Empezar ahora →</Button>
        </Link>
      </section>
    </div>
  )
}

export default LandingSection
