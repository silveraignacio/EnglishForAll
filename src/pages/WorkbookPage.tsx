import { Link, useParams } from 'react-router-dom'
import { getLevel, getWorkbook, getWorkbookPage } from '@/content'
import { ExerciseRenderer } from '@/components/exercises/ExerciseRenderer'
import { Button } from '@/components/ui/Button'
import type { WorkbookPage as WPage } from '@/content/workbook'

/**
 * Libro de ejercicios ("workbook") tipo libro de inglés: páginas numeradas
 * con ejercicios variados (reading, fill-in-the-blanks, match, writing…).
 * Reutiliza el tipo `Exercise` y `ExerciseRenderer` (showNext=false) para
 * resolverlos en pantalla con feedback, y es imprimible / exportable a PDF.
 *
 * Rutas:
 *   /workbook/:levelId            → libro completo del nivel (índice + todas
 *                                   las páginas; es lo que se imprime / PDF).
 *   /workbook/:levelId/page/:page → una página concreta.
 */
export function WorkbookPage() {
  const { levelId = '', page: pageParam } = useParams()
  const level = getLevel(levelId)
  const pages = getWorkbook(levelId).sort((a, b) => a.page - b.page)
  const pageNum = pageParam ? Number(pageParam) : undefined
  const current = pageNum !== undefined ? getWorkbookPage(levelId, pageNum) : undefined

  if (!level) {
    return (
      <div className="max-w-3xl mx-auto py-12 text-center text-ink-soft">
        <p className="mb-4">No encontramos el nivel «{levelId}».</p>
        <Link to="/" className="text-brand-600 font-semibold underline">Volver al inicio</Link>
      </div>
    )
  }

  // Página concreta
  if (pageNum !== undefined) {
    if (!current) {
      return (
        <div className="max-w-3xl mx-auto py-12 text-center text-ink-soft">
          <p className="mb-4">No existe la página {pageNum} del workbook de {level.name}.</p>
          <Link to={`/workbook/${levelId}`} className="text-brand-600 font-semibold underline">Ver el índice</Link>
        </div>
      )
    }
    return <SinglePage levelId={levelId} levelName={level.name} levelTitle={level.title} page={current} />
  }

  // Libro completo (índice + páginas) → se usa para imprimir / exportar PDF
  return (
    <div className="workbook">
      <header className="mb-6 print:hidden">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-ink">📘 Workbook · Nivel {level.name}</h1>
            <p className="text-ink-soft mt-1 max-w-xl">
              Libro de ejercicios de {level.title}. Páginas numeradas con ejercicios variados
              (comprensión de lectura, completar, relacionar, escribir…). Resolvelos en pantalla
              o imprimí / guardá como PDF.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" onClick={() => window.print()}>🖨️ Imprimir / PDF</Button>
            <a href={`/workbook/english-workbook-${levelId}.pdf`} download className="inline-flex">
              <Button variant="primary">⬇️ Descargar PDF</Button>
            </a>
          </div>
        </div>
        <Toc levelId={levelId} levelName={level.name} pages={pages} />
      </header>

      {pages.map((p) => (
        <section key={p.id} className="workbook-page">
          <PageHeading levelId={levelId} levelName={level.name} page={p} />
          <PageBody page={p} />
        </section>
      ))}

      <footer className="mt-8 pt-4 border-t border-ink/10 text-xs text-ink-faint print:hidden">
        English4All · Workbook Nivel {level.name} · Generado desde el contenido del curso. Imprimí o guardá como PDF.
      </footer>
    </div>
  )
}

function Toc({ levelId, levelName, pages }: { levelId: string; levelName: string; pages: WPage[] }) {
  const byUnit = pages.reduce<Record<string, WPage[]>>((acc, p) => {
    ;(acc[p.unit] ||= []).push(p)
    return acc
  }, {})
  return (
    <nav className="mt-6 rounded-2xl border border-ink/10 bg-surface p-4" aria-label="Índice del workbook">
      <h2 className="font-bold text-ink mb-3">Índice</h2>
      <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
        {Object.entries(byUnit).map(([unit, unitPages]) => (
          <div key={unit}>
            <p className="text-xs font-semibold text-brand-700 uppercase tracking-wide mb-1">{unit}</p>
            <ul className="space-y-1 mb-2">
              {unitPages.map((p) => (
                <li key={p.id} className="flex items-center gap-2 text-sm">
                  <span className="w-7 text-right font-mono text-ink-faint tabular-nums">{p.page}</span>
                  <Link
                    to={`/workbook/${levelId}/page/${p.page}`}
                    className="text-ink hover:text-brand-600 hover:underline"
                  >
                    {p.title || `Página ${p.page}`}
                    <span className="text-ink-faint"> · {p.exercises.length} ejercicios</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  )
}

function SinglePage({
  levelId,
  levelName,
  levelTitle,
  page,
}: {
  levelId: string
  levelName: string
  levelTitle: string
  page: WPage
}) {
  return (
    <div className="workbook max-w-3xl mx-auto">
      <header className="flex flex-wrap items-center justify-between gap-3 mb-6 print:hidden">
        <Link to={`/workbook/${levelId}`} className="text-brand-600 font-semibold text-sm hover:underline">
          ← Índice del workbook
        </Link>
        <div className="flex gap-2">
          <Button variant="secondary" onClick={() => window.print()}>🖨️ Imprimir / PDF</Button>
          <a href={`/workbook/english-workbook-${levelId}.pdf`} download className="inline-flex">
            <Button variant="primary">⬇️ Descargar PDF del nivel</Button>
          </a>
        </div>
      </header>

      <section className="workbook-page">
        <PageHeading levelId={levelId} levelName={levelName} page={page} />
        <PageBody page={page} />
      </section>

      <div className="mt-8 flex items-center justify-between text-sm print:hidden">
        {page.page > 1 ? (
          <Link to={`/workbook/${levelId}/page/${page.page - 1}`} className="text-brand-600 hover:underline">
            ← Página {page.page - 1}
          </Link>
        ) : (
          <span />
        )}
        <span className="text-ink-faint">
          {levelTitle} · Workbook · Página {page.page}
        </span>
        <Link to={`/workbook/${levelId}/page/${page.page + 1}`} className="text-brand-600 hover:underline">
          Página {page.page + 1} →
        </Link>
      </div>
    </div>
  )
}

function PageHeading({ levelId, levelName, page }: { levelId: string; levelName: string; page: WPage }) {
  return (
    <div className="flex items-center justify-between border-b-2 border-brand-200 pb-2 mb-4">
      <div>
        <p className="text-xs font-semibold text-brand-700 uppercase tracking-wide">
          Workbook · Nivel {levelName} · {page.unit}
        </p>
        {page.title && <h2 className="text-xl font-extrabold text-ink mt-0.5">{page.title}</h2>}
      </div>
      <span className="flex-none rounded-lg bg-brand-600 text-white font-mono text-lg font-bold px-3 py-1.5 shadow-sm">
        {page.page}
      </span>
    </div>
  )
}

function PageBody({ page }: { page: WPage }) {
  return (
    <div className="space-y-6">
      {page.intro && <p className="text-ink-soft text-sm">{page.intro}</p>}
      {page.exercises.map((ex, i) => (
        <div key={ex.id} className="workbook-exercise">
          <div className="flex items-center gap-2 mb-2">
            <span className="rounded-md bg-ink text-white text-xs font-bold px-2 py-0.5">
              Exercise {i + 1}
            </span>
            <span className="text-xs text-ink-faint">{ex.concept}</span>
          </div>
          <ExerciseRenderer exercise={ex} onAnswer={() => {}} showNext={false} />
        </div>
      ))}
    </div>
  )
}

export default WorkbookPage
