#!/usr/bin/env node
/**
 * Genera el audio de pronunciación (mp3) para cada string hablado de los
 * niveles A1, A2, B1 y B2 — las palabras de vocabulario
 * (`vocabulary[].word`), sus frases de ejemplo (`vocabulary[].example`) y
 * los ejemplos de lección (`examples[].english`) — que hoy reproduce el
 * botón 🔊 vía Web Speech API.
 *
 * PROVEEDOR / VOZ DE TTS:
 *   Google Cloud Text-to-Speech v1 (https://texttospeech.googleapis.com)
 *   Voz: en-GB-Chirp3-HD-Kore  (inglés británico, femenina, natural).
 *   Override con la env var TTS_VOICE (ej. "en-US-Chirp3-HD-Kore").
 *   Requiere `gcloud auth application-default login` y que la API
 *   texttospeech.googleapis.com esté habilitada en el quota project
 *   (header X-Goog-User-Project).
 *
 * FORMATO DE SALIDA:
 *   MP3 nativo de Google TTS (MPEG-2 Layer III, 24 kHz, mono, VBR ~32-48
 *   kbps) — mismo formato que los mp3 existentes en public/audio/tts/.
 *   Se usa el encoder nativo de Google (no se re-encoda): re-encodar con
 *   lamejs producía un "tac" / artefacto de click en el arranque de cada
 *   archivo.
 *
 * NOMENCLATURA:
 *   public/audio/pronounce/<hash>.mp3 donde <hash> = FNV-1a 32-bit en hex
 *   del texto EXACTO que recibe speak(), normalizado igual que en runtime
 *   (una sola letra en mayúscula A-Z se habla en minúscula). El hash se
 *   importa desde src/lib/audioHash.ts para que NUNCA diverja del runtime.
 *
 * IDEMPOTENTE: no regenera los mp3 que ya existen. Maneja rate limits (429)
 * y errores 5xx con reintentos con backoff exponencial, y refresca el token
 * de gcloud si vence (401/403).
 *
 * Uso:
 *   node scripts/generate-pronunciation-audio.mjs              # genera lo que falte en TODOS los niveles
 *   node scripts/generate-pronunciation-audio.mjs a2           # solo A2
 *   node scripts/generate-pronunciation-audio.mjs a2 b1 b2     # solo los niveles indicados
 *   node scripts/generate-pronunciation-audio.mjs --dry-run    # lista textos únicos sin llamar a la API
 *   node scripts/generate-pronunciation-audio.mjs a2 --limit 5 # solo los primeros 5 faltantes de A2
 *
 * El directorio public/audio/ NO está en git (binarios): los archivos nuevos
 * quedan en el filesystem local hasta que se suban por rsync al servidor.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import ts from 'typescript'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

const LEVEL_DIRS = {
  a1: path.join(ROOT, 'src', 'content', 'a1'),
  a2: path.join(ROOT, 'src', 'content', 'a2'),
  b1: path.join(ROOT, 'src', 'content', 'b1'),
  b2: path.join(ROOT, 'src', 'content', 'b2'),
}
const ALL_LEVELS = Object.keys(LEVEL_DIRS)
const AUDIO_HASH_SRC = path.join(ROOT, 'src', 'lib', 'audioHash.ts')
const OUT_DIR = process.env.PRONOUNCE_OUT_DIR || path.join(ROOT, 'public', 'audio', 'pronounce')

const VOICE = process.env.TTS_VOICE || 'en-GB-Chirp3-HD-Kore'
const LANGUAGE_CODE = VOICE.split('-').slice(0, 2).join('-') // p. ej. "en-GB"
const SAMPLE_RATE = 24000
const API_BASE = 'https://texttospeech.googleapis.com/v1'
const MAX_CHARS_PER_REQUEST = 4500
const REQUEST_DELAY_MS = 650 // queda cómodo bajo el default de 120 req/min de Google
const MAX_ATTEMPTS = 5

const args = process.argv.slice(2)
const DRY_RUN = args.includes('--dry-run')
const LIMIT = (() => {
  const i = args.indexOf('--limit')
  return i >= 0 && args[i + 1] ? Number(args[i + 1]) : Infinity
})()
// Niveles pedidos como argumentos posicionales; si no se pasa ninguno, todos.
const ARG_LEVELS = args.filter((a, idx) => !a.startsWith('--') && args[idx - 1] !== '--limit')
const LEVELS = (ARG_LEVELS.length > 0 ? ARG_LEVELS : ALL_LEVELS).filter((l) => LEVEL_DIRS[l])
for (const unknown of ARG_LEVELS.filter((l) => !LEVEL_DIRS[l])) {
  console.warn(`Nivel desconocido, se ignora: "${unknown}" (válidos: ${ALL_LEVELS.join(', ')})`)
}

/* ---------------------------------------------------------------------------
 * Loader mínimo de módulos TS (sin dependencias de bundler): transpila cada
 * archivo con typescript.transpileModule y reescribe los imports relativos
 * a data-URLs recursivamente. Suficiente para el grafo de src/content/*
 * (que solo importa tipos y archivos hermanos), y para src/lib/audioHash.ts.
 * ------------------------------------------------------------------------- */

const dataUrlCache = new Map()

function resolveSpecifier(fromFile, spec) {
  const dir = path.dirname(fromFile)
  const candidates = [
    path.resolve(dir, `${spec}.ts`),
    path.resolve(dir, `${spec}.tsx`),
    path.resolve(dir, `${spec}.js`),
    path.resolve(dir, spec, 'index.ts'),
    path.resolve(dir, spec, 'index.js'),
  ]
  for (const c of candidates) {
    if (fs.existsSync(c)) return c
  }
  throw new Error(`No se pudo resolver el import '${spec}' desde ${fromFile}`)
}

function loadTsAsDataUrl(absPath) {
  if (dataUrlCache.has(absPath)) return dataUrlCache.get(absPath)
  const src = fs.readFileSync(absPath, 'utf8')
  const js = ts.transpileModule(src, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 },
  }).outputText
  // transpileModule ya borra los `import type`. Reescribimos los imports de
  // valor con specifiers relativos → data-URL del archivo transpilado.
  const rewritten = js.replace(
    /((?:\bimport\b[^;]*?\bfrom\s*)|(?:\bexport\b[^;]*?\bfrom\s*))(['"])([^'"]+)\2/g,
    (m, prefix, _q, spec) => {
      if (!spec.startsWith('.')) return m
      const resolved = resolveSpecifier(absPath, spec)
      return `${prefix}${JSON.stringify(loadTsAsDataUrl(resolved))}`
    }
  )
  const dataUrl = `data:text/javascript;base64,${Buffer.from(rewritten, 'utf8').toString('base64')}`
  dataUrlCache.set(absPath, dataUrl)
  return dataUrl
}

async function importTs(absPath) {
  return import(loadTsAsDataUrl(absPath))
}

/* ---------------------------------------------------------------------------
 * Autenticación contra Google Cloud TTS.
 * ------------------------------------------------------------------------- */

const execFileP = promisify(execFile)

async function adcQuotaProject() {
  const adcPath = process.env.GOOGLE_APPLICATION_CREDENTIALS
    || path.join(process.env.HOME || '', '.config', 'gcloud', 'application_default_credentials.json')
  if (process.env.GCLOUD_QUOTA_PROJECT) return process.env.GCLOUD_QUOTA_PROJECT
  try {
    const adc = JSON.parse(fs.readFileSync(adcPath, 'utf8'))
    if (adc.quota_project_id) return adc.quota_project_id
  } catch {
    /* fall back a gcloud config */
  }
  try {
    const { stdout } = await execFileP('gcloud', ['config', 'get-value', 'project'])
    const proj = stdout.trim()
    if (proj) return proj
  } catch {
    /* sin gcloud disponible */
  }
  throw new Error(
    'No se encontró un quota project. Definí GCLOUD_QUOTA_PROJECT o configurá ' +
    '`gcloud auth application-default login` / `gcloud config set project <id>`.'
  )
}

let cachedToken = null
let cachedQuotaProject = null

async function getAccessToken(force = false) {
  if (!force && cachedToken) return cachedToken
  if (process.env.GOOGLE_ACCESS_TOKEN) {
    cachedToken = process.env.GOOGLE_ACCESS_TOKEN
  } else {
    const { stdout } = await execFileP('gcloud', ['auth', 'application-default', 'print-access-token'])
    cachedToken = stdout.trim()
  }
  if (!cachedQuotaProject) cachedQuotaProject = await adcQuotaProject()
  return cachedToken
}

async function synthOne(text) {
  const body = {
    input: { text },
    voice: { languageCode: LANGUAGE_CODE, name: VOICE },
    audioConfig: { audioEncoding: 'MP3', sampleRateHertz: SAMPLE_RATE },
  }

  let lastErr = null
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    const token = await getAccessToken()
    try {
      const res = await fetch(`${API_BASE}/text:synthesize`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'X-Goog-User-Project': cachedQuotaProject,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
      if (res.ok) {
        const json = await res.json()
        return Buffer.from(json.audioContent, 'base64')
      }
      if (res.status === 401 || res.status === 403) {
        // Token vencido o quota project mal seteado → refrescamos una vez.
        if (attempt === 1) {
          cachedToken = null
          await getAccessToken(true)
          continue
        }
        const msg = await res.text()
        throw new Error(`HTTP ${res.status}: ${msg.slice(0, 200)}`)
      }
      if (res.status === 429 || res.status >= 500) {
        lastErr = new Error(`HTTP ${res.status} en el intento ${attempt}`)
        await delay(backoffMs(attempt))
        continue
      }
      const msg = await res.text()
      throw new Error(`HTTP ${res.status} (${res.statusText}): ${msg.slice(0, 200)}`)
    } catch (err) {
      if (err.message.startsWith('HTTP 401') || err.message.startsWith('HTTP 403')) throw err
      lastErr = err
      if (attempt < MAX_ATTEMPTS) await delay(backoffMs(attempt))
    }
  }
  throw new Error(`Falló la síntesis tras ${MAX_ATTEMPTS} intentos: ${lastErr?.message}`)
}

function backoffMs(attempt) {
  return Math.min(1000 * 2 ** (attempt - 1), 16000)
}

function delay(ms) {
  return new Promise((r) => setTimeout(r, ms))
}

/* ---------------------------------------------------------------------------
 * Extracción de textos únicos de un nivel (mismo hash que usa el runtime).
 * ------------------------------------------------------------------------- */

async function collectLevelTexts(levelId) {
  // Importamos el MISMO módulo que usa el runtime (src/lib/audioHash.ts) para
  // que el hash de archivo coincida siempre con el que pedirá speak().
  const { speechAudioUrl } = await importTs(AUDIO_HASH_SRC)
  const levelMod = await importTs(path.join(LEVEL_DIRS[levelId], 'index.ts'))
  const level = Object.values(levelMod).find(
    (m) => m && typeof m === 'object' && m.id === levelId && Array.isArray(m.modules)
  )
  if (!level) throw new Error(`No se encontró el nivel "${levelId}" en su index.ts`)

  const seen = new Map() // hash -> { text, hash }
  const add = (text) => {
    if (!text || typeof text !== 'string') return
    const url = speechAudioUrl(text)
    if (!url) return
    const hash = /([0-9a-f]+)\.mp3$/.exec(url)?.[1]
    if (hash && !seen.has(hash)) seen.set(hash, { text, hash })
  }

  for (const mod of level.modules) {
    for (const lesson of mod.lessons) {
      for (const ex of lesson.examples || []) add(ex.english)
      for (const v of lesson.vocabulary || []) {
        add(v.word)
        if (v.example) add(v.example)
      }
    }
  }
  return { texts: [...seen.values()] }
}

/* ---------------------------------------------------------------------------
 * Main.
 * ------------------------------------------------------------------------- */

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true })

  const seen = new Map() // hash -> { text, hash } (global, los textos repetidos entre niveles comparten hash)
  for (const levelId of LEVELS) {
    console.log(`Extrayendo textos únicos de ${levelId.toUpperCase()} (${LEVEL_DIRS[levelId]})…`)
    const { texts } = await collectLevelTexts(levelId)
    for (const t of texts) if (!seen.has(t.hash)) seen.set(t.hash, t)
    console.log(`  → ${texts.length} textos únicos en ${levelId.toUpperCase()}`)
  }

  const texts = [...seen.values()]
  texts.sort((a, b) => a.hash.localeCompare(b.hash))
  console.log(`Textos únicos en total: ${texts.length} (niveles: ${LEVELS.join(', ')})`)

  if (DRY_RUN) {
    console.log('\n--dry-run: NO se llama a la API. Textos:')
    for (const { text, hash } of texts) {
      console.log(`  ${hash}  ${JSON.stringify(text)}`)
    }
    return
  }

  let generated = 0
  let failed = 0
  const toGenerate = texts.filter(({ hash }) => {
    const file = path.join(OUT_DIR, `${hash}.mp3`)
    return !(fs.existsSync(file) && fs.statSync(file).size > 0)
  })
  const existed = texts.length - toGenerate.length

  const planned = Math.min(toGenerate.length, LIMIT)
  console.log(`Ya existían: ${existed} · Faltan: ${toGenerate.length} · A generar ahora: ${planned}\n`)

  for (let i = 0; i < toGenerate.length; i++) {
    if (generated >= LIMIT) break
    const { text, hash } = toGenerate[i]
    const file = path.join(OUT_DIR, `${hash}.mp3`)
    const display = text.length > 60 ? `${text.slice(0, 60)}…` : text
    try {
      if (text.length > MAX_CHARS_PER_REQUEST) {
        console.log(`[${i + 1}/${toGenerate.length}] Omitido (texto muy largo): ${JSON.stringify(display)}`)
        failed++
        continue
      }
      const mp3 = await synthOne(text)
      fs.writeFileSync(file, mp3)
      generated++
      console.log(`[${i + 1}/${toGenerate.length}] ${hash}  ${JSON.stringify(display)}`)
    } catch (err) {
      failed++
      console.error(`[${i + 1}/${toGenerate.length}] ERROR ${hash}  ${JSON.stringify(display)}: ${err.message}`)
    }
    // Pequeña pausa entre requests para respetar la quota de la API.
    if (i < toGenerate.length - 1) await delay(REQUEST_DELAY_MS)
  }

  console.log('\n=========================')
  console.log(`Generados: ${generated}`)
  console.log(`Ya existían: ${existed}`)
  console.log(`Errores/omitidos: ${failed}`)
  console.log(`Directorio: ${OUT_DIR}`)
  console.log(`Voz: ${VOICE} (${LANGUAGE_CODE})`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
