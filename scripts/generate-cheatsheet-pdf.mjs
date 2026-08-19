#!/usr/bin/env node
/**
 * Genera el PDF descargable del cheat sheet de tiempos verbales.
 *
 * Flujo:
 *   1. Sirve el build ya compilado (dist/) con un mini servidor HTTP estático
 *      (con SPA-fallback para la ruta client-side /cheatsheet).
 *   2. Abre /cheatsheet con Playwright (Chromium headless), espera a que el
 *      React renderice los datos de formación del curso.
 *   3. Emula medios de impresión y exporta a PDF A4 con los colores de fondo.
 *   4. Guarda el PDF en dist/cheatsheet/english-tenses-cheatsheet.pdf para que
 *      el rsync de deploy lo suba junto al resto del sitio.
 *
 * Requiere: npm run build (el dist/ debe existir) y Chromium de Playwright
 * (`npx playwright install chromium` si falta).
 *
 * Uso:
 *   node scripts/generate-cheatsheet-pdf.mjs
 *   CHEATSHEET_PORT=4174 node scripts/generate-cheatsheet-pdf.mjs
 */

import { chromium } from 'playwright'
import http from 'node:http'
import { readFile, access } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const DIST = path.join(ROOT, 'dist')
const OUT_DIR = path.join(DIST, 'cheatsheet')
const OUT_FILE = path.join(OUT_DIR, 'english-tenses-cheatsheet.pdf')

const PORT = process.env.CHEATSHEET_PORT || '4173'

// Niveles disponibles (c1/c2 son placeholders y no tienen formación todavía).
const LEVELS = ['a1', 'a2', 'b1', 'b2']

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.mp3': 'audio/mpeg',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
}

async function exists(p) {
  try {
    await access(p)
    return true
  } catch {
    return false
  }
}

async function serve() {
  const server = http.createServer(async (req, res) => {
    try {
      const urlPath = decodeURIComponent(new URL(req.url ?? '/', `http://localhost:${PORT}`).pathname)
      let file = path.join(DIST, urlPath === '/' ? 'index.html' : urlPath)
      // SPA fallback: las rutas client-side no tienen archivo real → index.html.
      if (!(await exists(file))) file = path.join(DIST, 'index.html')
      const data = await readFile(file)
      const ext = path.extname(file).toLowerCase()
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' })
      res.end(data)
    } catch {
      res.writeHead(404)
      res.end('Not found')
    }
  })
  await new Promise((resolve) => server.listen(Number(PORT), resolve))
  return server
}

async function main() {
  if (!(await exists(path.join(DIST, 'index.html')))) {
    throw new Error('No existe dist/index.html. Corré `npm run build` primero.')
  }

  const browser = await chromium.launch()
  const server = await serve()
  const fs = await import('node:fs')
  fs.mkdirSync(OUT_DIR, { recursive: true })

  // Genera un PDF para todos los niveles y uno por cada nivel disponible.
  // La app usa HashRouter: la ruta del cheat sheet es /#/cheatsheet (todos) o
  // /#/cheatsheet/<levelId> (un solo nivel).
  const targets = [
    { levelId: null, file: OUT_FILE },
    ...LEVELS.map((levelId) => ({
      levelId,
      file: path.join(OUT_DIR, `english-tenses-cheatsheet-${levelId}.pdf`),
    })),
  ]

  try {
    const page = await browser.newPage({ viewport: { width: 1024, height: 800 } })
    // Emular medios de impresión para aplicar el CSS de @media print.
    await page.emulateMedia({ media: 'print' })

    for (const { levelId, file } of targets) {
      const route = levelId ? `/#/cheatsheet/${levelId}` : '/#/cheatsheet'
      await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle' })
      // Esperar a que React renderice las secciones por nivel.
      await page.waitForSelector('.cheatsheet-page', { timeout: 20000 })
      await page.pdf({
        path: file,
        format: 'A4',
        printBackground: true,
        margin: { top: 0, right: 0, bottom: 0, left: 0 }, // los márgenes los controla el @page del CSS
      })
      console.log(`PDF generado: ${file}`)
    }
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})