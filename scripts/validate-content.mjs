#!/usr/bin/env node
// validate-content.mjs — Validates all course content for completeness.
// Run: npm run test:content
// Checks: every lesson has all required fields; every exercise has an answer + explanation + concept + difficulty.

import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { readFileSync, readdirSync, statSync } from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const srcDir = join(__dirname, '..', 'src')

const EXERCISE_TYPES = [
  'multiple_choice', 'fill_blank', 'translate', 'reorder', 'true_false',
  'match', 'error_correction', 'reading', 'sentence_building', 'select_correct',
  'listening', 'writing', 'speaking'
]

let errors = []
let warnings = []
let stats = { modules: 0, lessons: 0, exercises: 0, vocab: 0, grammarPoints: 0 }

function findFiles(dir) {
  let files = []
  let names
  try {
    names = readdirSync(dir)
  } catch {
    return files
  }
  for (const name of names) {
    const full = join(dir, name)
    if (statSync(full).isDirectory()) files = files.concat(findFiles(full))
    else if (name.startsWith('lesson-') && name.endsWith('.ts')) files.push(full)
  }
  return files
}

const lessonFiles = []
for (const levelDir of ['a1', 'a2', 'b1', 'b2']) {
  lessonFiles.push(...findFiles(join(srcDir, 'content', levelDir)))
}

for (const file of lessonFiles) {
  const content = readFileSync(file, 'utf8')
  const label = file.split('/').pop()

  // Lesson-level required fields
  const required = ['id:', 'moduleId:', 'order:', 'title:', 'objective:', 'explanation_es:', 'examples:', 'rule:', 'commonMistakes:', 'vocabulary:', 'grammarPoints:', 'exercises:', 'miniTest:', 'reviewItems:', 'prerequisites:']
  for (const f of required) {
    if (!content.includes(f)) errors.push(`${label}: missing lesson field "${f}"`)
  }

  // Find each exercise block by type, then within the block (up to next "id:" of similar shape), check fields.
  // Approach: find positions of each `type: '<NAME>'` and slice forward ~800 chars to look for fields.
  const typeRegex = new RegExp(`type:\\s*['"](${EXERCISE_TYPES.join('|')})['"]`, 'g')
  let m
  let exerciseCount = 0
  while ((m = typeRegex.exec(content)) !== null) {
    exerciseCount++
    const start = m.index
    // Slice up to next "id:" that begins a new exercise, or end of file
    let slice = content.slice(start, start + 3000)
    // Trim if a next id: appears (start of subsequent entry)
    const nextIdIdx = slice.slice(m[0].length).search(/\n\s*id:\s*['"`]/)
    if (nextIdIdx >= 0) slice = slice.slice(0, m[0].length + nextIdIdx)
    // Check required fields
    // Reading/listening are graded by their sub-questions, writing by AI —
    // the outer correctAnswer is informational/absent for those.
    const skipsCorrectAnswer = m[1] === 'reading' || m[1] === 'listening' || m[1] === 'writing'
    if (!skipsCorrectAnswer && !slice.includes('correctAnswer')) {
      errors.push(`${label} (${m[1]} #${exerciseCount}): missing correctAnswer`)
    }
    const isReading = m[1] === 'reading'
    if (!isReading && !slice.includes('explanation')) {
      errors.push(`${label} (${m[1]} #${exerciseCount}): missing explanation`)
    }
    if (!slice.includes('concept')) {
      errors.push(`${label} (${m[1]} #${exerciseCount}): missing concept`)
    }
    if (!slice.includes('difficulty')) {
      errors.push(`${label} (${m[1]} #${exerciseCount}): missing difficulty`)
    }
    if (!slice.includes('prompt')) {
      errors.push(`${label} (${m[1]} #${exerciseCount}): missing prompt`)
    }
  }
  stats.exercises += exerciseCount

  // Placeholder content checks
  if (/\bLOREM\s+IPSUM\b/i.test(content)) errors.push(`${label}: contains "LOREM IPSUM"`)
  if (/\bcoming soon\b/i.test(content)) warnings.push(`${label}: contains "coming soon" — A1 content should be complete`)
  if (/\bplaceholder\b/i.test(content)) warnings.push(`${label}: contains "placeholder"`)

  stats.lessons++
}

// Check module index has at least N modules
let a1Dir, moduleDirs = []
try {
  a1Dir = join(srcDir, 'content', 'a1')
  moduleDirs = readdirSync(a1Dir).filter(n => n.startsWith('m'))
  for (const levelDir of ['a2', 'b1', 'b2']) {
    const dir = join(srcDir, 'content', levelDir)
    try {
      moduleDirs.push(...readdirSync(dir).filter(n => n.startsWith('m')))
    } catch {}
  }
  stats.modules = moduleDirs.length
} catch {}

console.log('=== English On Course — Content Validation ===\n')

if (errors.length > 0) {
  console.log(`❌ ${errors.length} ERRORS:\n`)
  errors.forEach(e => console.log(`  ✗ ${e}`))
} else {
  console.log('✓ All content checks passed.\n')
}

if (warnings.length > 0) {
  console.log(`⚠️  ${warnings.length} WARNINGS:\n`)
  warnings.forEach(w => console.log(`  ! ${w}`))
}

console.log(`\n--- Statistics ---`)
console.log(`Modules:    ${stats.modules}`)
console.log(`Lessons:    ${stats.lessons}`)
console.log(`Exercises:  ${stats.exercises}`)
console.log()

if (errors.length > 0) {
  console.log('❌ Validation FAILED.')
  process.exit(1)
} else {
  console.log('✓ Validation passed.')
  process.exit(0)
}