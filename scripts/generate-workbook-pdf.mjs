#!/usr/bin/env node
/**
 * Genera el PDF del workbook (libro de ejercicios) para cada nivel.
 *
 * Flujo (igual que generate-cheatsheet-pdf.mjs):
 *   1. Sirve el build compilado (dist/) con un mini servidor HTTP estático
 *      (SPA-fallback para la ruta client-side /workbook/:levelId).
 *   2. Abre /#/workbook/<nivel> con Playwright (Chromium headless), espera a
 *      que React renderice las páginas (.workbook-page).
 *   3. Emula medios de impresión y exporta a PDF A4 con fondos.
 *   4. Guarda dist/workbook/english-workbook-<nivel>.pdf para el deploy.
 *
 * Requiere: npm run build (dist/) y Chromium de Playwright.
 *
 * Uso:
 *   node scripts/generate-workbook-pdf.mjs
 *   WORKBOOK_PORT=4184 node scripts/generate-workbook-pdf.mjs
 */

import { chromium } from 'playwright'
import http from 'node:http'
import { readFile, access } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const DIST = path.join(ROOT, 'dist')
const OUT_DIR = path.join(DIST, 'workbook')

const PORT = process.env.WORKBOOK_PORT || '4174'

// Niveles disponibles (c1/c2 son placeholders y no tienen workbook todavía).
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

  try {
    const page = await browser.newPage({ viewport: { width: 1024, height: 800 } })
    await page.emulateMedia({ media: 'print' })

    for (const levelId of LEVELS) {
      const file = path.join(OUT_DIR, `english-workbook-${levelId}.pdf`)
      await page.goto(`http://localhost:${PORT}/#/workbook/${levelId}`, { waitUntil: 'networkidle' })
      // Esperar a que React renderice al menos una página del workbook.
      await page.waitForSelector('.workbook-page', { timeout: 20000 })
      await page.pdf({
        path: file,
        format: 'A4',
        printBackground: true,
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
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
