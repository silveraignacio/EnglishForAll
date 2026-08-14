#!/usr/bin/env node
// validate-content-semantic.mjs — Deep, data-level content checks.
// Bundles src/content/index.ts with esbuild and inspects the real Exercise
// objects (not text/regex), so it catches things the field-presence checker
// in validate-content.mjs can't: unsolvable reorder/sentence_building
// exercises, correctAnswer not present in options, duplicate options,
// malformed true_false answers, fill_blank prompts missing a blank, etc.

import esbuild from 'esbuild'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { writeFileSync, mkdtempSync } from 'fs'
import { tmpdir } from 'os'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

function normalize(s) {
  return s
    .toLowerCase()
    .replace(/[.,!?;:'"]/g, '')
    .trim()
    .replace(/\s+/g, ' ')
}

const outdir = mkdtempSync(join(tmpdir(), 'content-bundle-'))
const outfile = join(outdir, 'content.mjs')

await esbuild.build({
  entryPoints: [join(root, 'src/content/index.ts')],
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile,
  logLevel: 'silent',
})

const { getCourse } = await import('file://' + outfile)
const course = getCourse()

let errors = []
let warnings = []
let counts = { exercises: 0, byType: {} }

function checkExercise(ex, loc) {
  counts.exercises++
  counts.byType[ex.type] = (counts.byType[ex.type] || 0) + 1

  // `match` is graded from `pairs`, `writing` from an AI evaluation — an
  // empty correctAnswer there is the authored convention, not a bug.
  const gradedByCorrectAnswer = !['reading', 'match', 'writing'].includes(ex.type)

  if (gradedByCorrectAnswer) {
    if (ex.correctAnswer == null || ex.correctAnswer === '') {
      errors.push(`${loc}: ${ex.type} "${ex.id}" has empty correctAnswer`)
    }
  }

  if (ex.type === 'multiple_choice' || ex.type === 'select_correct') {
    const opts = ex.options || []
    if (opts.length < 2) {
      errors.push(`${loc}: ${ex.type} "${ex.id}" has fewer than 2 options`)
    }
    if (!opts.includes(ex.correctAnswer)) {
      errors.push(`${loc}: ${ex.type} "${ex.id}" correctAnswer "${ex.correctAnswer}" not among options ${JSON.stringify(opts)}`)
    }
    const dupes = opts.filter((o, i) => opts.indexOf(o) !== i)
    if (dupes.length) {
      errors.push(`${loc}: ${ex.type} "${ex.id}" has duplicate options: ${JSON.stringify([...new Set(dupes)])}`)
    }
  }

  if (ex.type === 'true_false') {
    if (ex.correctAnswer !== 'true' && ex.correctAnswer !== 'false') {
      errors.push(`${loc}: true_false "${ex.id}" correctAnswer must be 'true'/'false', got "${ex.correctAnswer}"`)
    }
  }

  if (ex.type === 'fill_blank') {
    // Not a correctness bug (grading doesn't depend on the prompt text) —
    // but the UI shows a fixed instruction "Rellena solo el hueco (___)",
    // which reads oddly on prompts that ask an open question instead of
    // showing a sentence with a blank.
    if (!/___/.test(ex.prompt)) {
      warnings.push(`${loc}: fill_blank "${ex.id}" prompt has no "___" blank, instruction text may not fit: "${ex.prompt}"`)
    }
  }

  if (ex.type === 'reorder' || ex.type === 'sentence_building') {
    // The UI now shuffles `words` and lets the user click them into any
    // order, so what matters is whether SOME permutation of `words`
    // reconstructs an accepted answer — not the literal source order.
    const words = ex.words || []
    if (words.length < 2) {
      errors.push(`${loc}: ${ex.type} "${ex.id}" has fewer than 2 words — nothing to reorder`)
    }
    const wordTokens = words.flatMap((w) => normalize(w).split(/\s+/)).filter(Boolean).sort()
    const candidates = [ex.correctAnswer, ...(ex.acceptedAnswers || [])]
    const solvable = candidates.some((c) => {
      const tokens = normalize(c).split(/\s+/).filter(Boolean).sort()
      return tokens.length === wordTokens.length && tokens.every((t, i) => t === wordTokens[i])
    })
    if (!solvable) {
      errors.push(
        `${loc}: ${ex.type} "${ex.id}" is UNSOLVABLE — no reordering of words ${JSON.stringify(words)} matches correctAnswer "${ex.correctAnswer}"${ex.acceptedAnswers ? ` or acceptedAnswers ${JSON.stringify(ex.acceptedAnswers)}` : ''}`
      )
    }
  }

  if (ex.type === 'match') {
    const pairs = ex.pairs || []
    if (pairs.length < 2) {
      errors.push(`${loc}: match "${ex.id}" has fewer than 2 pairs`)
    }
    for (const p of pairs) {
      if (normalize(p.left) === normalize(p.right)) {
        warnings.push(`${loc}: match "${ex.id}" has a pair where left equals right: "${p.left}"`)
      }
    }
    const lefts = pairs.map((p) => normalize(p.left))
    const rights = pairs.map((p) => normalize(p.right))
    if (new Set(lefts).size !== lefts.length) errors.push(`${loc}: match "${ex.id}" has duplicate left items`)
    // Duplicate right-hand labels are a legitimate categorization pattern
    // (several lefts sharing one right label) — the Match component grades
    // by text equality, not slot index, so duplicates are solvable.
  }

  if (ex.type === 'reading' && ex.reading) {
    for (const q of ex.reading.questions || []) {
      checkExercise(q, `${loc} (reading sub-question)`)
    }
  }

  if (ex.type === 'listening') {
    if (!ex.listening || !ex.listening.audioText || !ex.listening.audioText.trim()) {
      errors.push(`${loc}: listening "${ex.id}" has no audioText for TTS to read`)
    }
    // The prompt/promptTranslation must never leak the audio content —
    // that would defeat the listening comprehension exercise.
    if (ex.listening?.audioText && ex.prompt && normalize(ex.prompt) === normalize(ex.listening.audioText)) {
      errors.push(`${loc}: listening "${ex.id}" prompt duplicates audioText — it would reveal the transcript`)
    }
    const questions = ex.listening?.questions || []
    if (questions.length < 1) {
      errors.push(`${loc}: listening "${ex.id}" has no comprehension questions`)
    }
    for (const q of questions) {
      checkExercise(q, `${loc} (listening sub-question)`)
    }
  }

  if (ex.type === 'writing') {
    if (ex.minWords != null && ex.maxWords != null && ex.minWords > ex.maxWords) {
      errors.push(`${loc}: writing "${ex.id}" has minWords (${ex.minWords}) > maxWords (${ex.maxWords})`)
    }
    if (!ex.prompt || !ex.prompt.trim()) {
      errors.push(`${loc}: writing "${ex.id}" has no topic prompt`)
    }
  }

  if (ex.type === 'speaking') {
    if (!ex.correctAnswer || !ex.correctAnswer.trim()) {
      errors.push(`${loc}: speaking "${ex.id}" has no target phrase (correctAnswer)`)
    }
  }
}

for (const level of course.levels) {
  if (level.status !== 'available') continue
  for (const mod of level.modules || []) {
    for (const lesson of mod.lessons || []) {
      const loc = `${level.id}/${mod.id}/${lesson.id}`
      for (const ex of lesson.exercises || []) checkExercise(ex, loc)
      for (const ex of lesson.miniTest || []) checkExercise(ex, `${loc} (miniTest)`)
    }
    for (const ex of mod.checkpoint?.exercises || []) {
      checkExercise(ex, `${level.id}/${mod.id}/checkpoint`)
    }
  }
}

console.log('=== English On Course — Semantic Content Validation ===\n')

if (errors.length > 0) {
  console.log(`❌ ${errors.length} ERRORS:\n`)
  errors.forEach((e) => console.log(`  ✗ ${e}`))
} else {
  console.log('✓ No semantic errors found.\n')
}

if (warnings.length > 0) {
  console.log(`\n⚠️  ${warnings.length} WARNINGS:\n`)
  warnings.forEach((w) => console.log(`  ! ${w}`))
}

console.log(`\n--- Statistics ---`)
console.log(`Exercises checked: ${counts.exercises}`)
console.log(JSON.stringify(counts.byType, null, 2))

process.exit(errors.length > 0 ? 1 : 0)
