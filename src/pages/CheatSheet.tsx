import { getCourse } from '@/content'
import { Button } from '@/components/ui/Button'
import type { Lesson } from '@/content/types'

// Hoja de repaso imprimible: resume cómo se forma cada tiempo/forma verbal
// (afirmativo, negativo, pregunta, casuística) usando los datos `formation`
// que ya viven en cada lección. Sirve para leer y recordar rápido, y se
// exporta a PDF con scripts/generate-cheatsheet-pdf.mjs.
export function CheatSheet() {
  const course = getCourse()
  const levels = course.levels.filter((l) => l.status === 'available')
  const sections = levels
    .map((level) => ({
      level,
      lessons: level.modules
        .flatMap((m) => m.lessons)
        .filter((l): l is Lesson & { formation: NonNullable<Lesson['formation']> } => !!l.formation),
    }))
    .filter((s) => s.lessons.length > 0)

  return (
    <div className="cheatsheet">
      <header className="flex flex-wrap items-start justify-between gap-4 mb-6 print:hidden">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-ink">📋 Cheat Sheet · Tiempos verbales</h1>
          <p className="text-ink-soft mt-1 max-w-xl">
            Resumen de cómo se forma cada tiempo y forma verbal del curso (A1–B2):
            afirmativo, negativo, pregunta y casos particulares. Para leer y recordar rápido.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" onClick={() => window.print()}>🖨️ Imprimir / PDF</Button>
          <a href="/cheatsheet/english-tenses-cheatsheet.pdf" download className="inline-flex">
            <Button variant="primary">⬇️ Descargar PDF</Button>
          </a>
        </div>
      </header>

      {sections.map(({ level, lessons }) => (
        <section key={level.id} className="cheatsheet-page">
          <h2 className="text-xl font-extrabold text-brand-700 border-b-2 border-brand-200 pb-2 mb-4">
            Nivel {level.name} · {level.title}
          </h2>
          <div className="space-y-4">
            {lessons.map((lesson) => (
              <FormationCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        </section>
      ))}

      <footer className="mt-8 pt-4 border-t border-ink/10 text-xs text-ink-faint print:hidden">
        English4All · Generado automáticamente desde el contenido del curso. Imprimí o guardá como PDF.
      </footer>
    </div>
  )
}

function FormationCard({ lesson }: { lesson: Lesson & { formation: NonNullable<Lesson['formation']> } }) {
  const f = lesson.formation
  return (
    <article className="cheatsheet-card rounded-xl border border-ink/10 bg-surface p-4 print:border-ink/20">
      <h3 className="font-extrabold text-ink text-base mb-1">{f.title}</h3>
      {f.intro && <p className="text-ink-soft text-sm mb-3">{f.intro}</p>}
      <div className="space-y-3">
        {f.patterns.map((p) => (
          <div key={p.name}>
            <h4 className="font-bold text-brand-700 text-sm mb-1">{p.name}</h4>
            <p className="font-mono text-xs bg-brand-50 border-l-4 border-brand-500 text-brand-800 rounded-r px-2.5 py-1.5 mb-1.5">
              {p.formula}
            </p>
            <ul className="space-y-0.5">
              {p.examples.map((e, i) => (
                <li key={i} className="text-sm">
                  <span className="font-medium text-ink">{e.english}</span>
                  <span className="text-ink-light"> = {e.spanish}</span>
                </li>
              ))}
            </ul>
            {p.note && <p className="text-xs italic text-brand-600 mt-1">💡 {p.note}</p>}
          </div>
        ))}
      </div>
      {f.notes && f.notes.length > 0 && (
        <ul className="mt-3 pt-2 border-t border-ink/5 space-y-0.5">
          {f.notes.map((n, i) => (
            <li key={i} className="text-xs text-ink-soft flex gap-1.5">
              <span className="text-amber-600 font-bold">•</span>
              <span>{n}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

export default CheatSheet