import { type ReactNode } from 'react'
import { Header } from '@/components/layout/Header'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6 sm:py-8">
        {children}
      </main>
      <footer className="border-t border-ink/5 py-6">
        <div className="max-w-4xl mx-auto px-4 text-center text-sm text-ink-faint">
          English4All · Curso interactivo de inglés · Hecho para hispanohablantes
        </div>
      </footer>
    </div>
  )
}

export default Layout