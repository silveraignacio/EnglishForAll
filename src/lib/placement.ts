import type { Exercise } from '@/content/types'
import { getCourse } from '@/content'
import { shuffle } from '@/lib/utils'

// Builds the placement test: a balanced set of questions from every
// available level (A1, A2, B1).
//
// Design decisions (advisor-reviewed):
//  - 7 questions per level: d1×2, d2×2, d3×2, d4×1 (the d4 discriminates up).
//  - Excludes `true_false` (50% guessing floor) and `reading` (v1 tradeoff).
//  - Stratifies by module for concept coverage.
//  - Excludes questions already reused by the module checkpoints, so a
//    student who studied the level doesn't recognize them.

const PLACEMENT_TYPES: Exercise['type'][] = [
  'multiple_choice',
  'fill_blank',
  'select_correct',
  'translate',
]

const QUESTIONS_PER_LEVEL = 7
const CONFIRMATION_QUESTIONS = 4

export interface PlacementSection {
  level: string
  exercises: Exercise[]
}

function suitableExercise(e: Exercise): boolean {
  return (
    PLACEMENT_TYPES.includes(e.type) &&
    e.difficulty >= 1 &&
    e.difficulty <= 4
  )
}

function pickForLevel(
  pool: Exercise[],
  count: number,
  excludedIds: Set<string>
): Exercise[] {
  // Desired difficulty mix: two of d1/d2/d3, one of d4.
  const mix: number[] = [1, 1, 2, 2, 3, 3, 4]
  const selected: Exercise[] = []
  const byDifficulty = new Map<number, Exercise[]>()
  for (const e of pool) {
    if (excludedIds.has(e.id)) continue
    if (!byDifficulty.has(e.difficulty)) byDifficulty.set(e.difficulty, [])
    byDifficulty.get(e.difficulty)!.push(e)
  }
  for (const d of mix) {
    const bucket = byDifficulty.get(d) ?? []
    if (bucket.length === 0) continue
    selected.push(bucket[0])
    bucket.splice(0, 1)
    if (selected.length >= count) break
  }
  // Top-up if the strict mix ran out of items.
  if (selected.length < count) {
    for (const d of [2, 1, 3, 4]) {
      const bucket = byDifficulty.get(d) ?? []
      for (const e of bucket) {
        if (selected.length >= count) break
        selected.push(e)
      }
      if (selected.length >= count) break
    }
  }
  return selected
}

export function buildPlacementSections(): PlacementSection[] {
  const course = getCourse()
  const levels = course.levels.filter(
    (l) => l.status === 'available' && l.modules.length > 0
  )

  return levels.map((level) => {
    // Collect module checkpoints' exercise ids to exclude (avoid recognition).
    const excludedIds = new Set<string>()
    for (const m of level.modules) {
      for (const cex of m.checkpoint.exercises) excludedIds.add(cex.id)
    }

    // Gather regular exercises per module (stratify by module for coverage).
    const byModule: { moduleTitle: string; pool: Exercise[] }[] = level.modules.map(
      (m) => ({
        moduleTitle: m.title,
        pool: m.lessons.flatMap((l) => l.exercises).filter(suitableExercise),
      })
    )

    const selected: Exercise[] = []
    const used = new Set<string>()
    const shuffledModules = shuffle(byModule)

    // Round-robin: one from each module before taking a second from any.
    for (let pass = 0; pass < 3 && selected.length < QUESTIONS_PER_LEVEL; pass++) {
      for (const { pool } of shuffledModules) {
        if (selected.length >= QUESTIONS_PER_LEVEL) break
        const pick = pool.find((e) => !used.has(e.id) && !excludedIds.has(e.id))
        if (pick) {
          used.add(pick.id)
          selected.push(pick)
        }
      }
    }

    // Top-up from any remaining pool if still short.
    if (selected.length < QUESTIONS_PER_LEVEL) {
      const rest = shuffle(
        byModule.flatMap(({ pool }) => pool.filter((e) => !used.has(e.id) && !excludedIds.has(e.id)))
      )
      for (const e of rest) {
        if (selected.length >= QUESTIONS_PER_LEVEL) break
        used.add(e.id)
        selected.push(e)
      }
    }

    return { level: level.id, exercises: selected.slice(0, QUESTIONS_PER_LEVEL) }
  })
}

/** Extra questions for the confirmation round of a specific level. */
export function buildConfirmationQuestions(
  levelId: string,
  phase1Ids: string[]
): Exercise[] {
  const course = getCourse()
  const level = course.levels.find((l) => l.id === levelId)
  if (!level) return []

  const excludedIds = new Set<string>(phase1Ids)
  const pool: Exercise[] = level.modules.flatMap((m) =>
    m.lessons.flatMap((l) => [...l.exercises, ...l.miniTest])
  )
  const suitable = pool.filter((e) => suitableExercise(e) && !excludedIds.has(e.id))
  return pickForLevel(suitable, CONFIRMATION_QUESTIONS, excludedIds).slice(
    0,
    CONFIRMATION_QUESTIONS
  )
}

export function totalPlacementQuestions(sections: PlacementSection[]): number {
  return sections.reduce((acc, s) => acc + s.exercises.length, 0)
}
