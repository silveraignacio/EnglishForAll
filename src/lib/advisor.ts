import type { UserProgress, PlacementResult } from '@/types/progress'
import { hasPassedExam } from '@/lib/access'

// Level placement advisor ("Revisa tu nivel de inglés").
//
// The advisor evaluates how the user performed on questions from every
// available level and recommends the level where they should start.
//
// Unlock rule (reverse): if the advisor recommends level N, then level N and
// ALL lower levels are unlocked. E.g. recommended = A2 → A1 and A2 unlocked.

export const LEVEL_ORDER = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'] as const
export type LevelId = (typeof LEVEL_ORDER)[number]

// Placement (not certification) thresholds.
//  - >= MASTERY_THRESHOLD → level is "mastered", skip it.
//  - [CONFIRM_LOW, MASTERY_THRESHOLD) → uncertain band, confirm with extra questions.
//  - < CONFIRM_LOW → strong signal, no confirmation needed.
export const MASTERY_THRESHOLD = 80
export const CONFIRM_LOW = 60

// Early-stop: if the user gets fewer than this many correct in the A1 phase,
// stop the test and recommend A1 (don't show harder questions to a nervous
// absolute beginner).
export const EARLY_STOP_A1_MIN_CORRECT = 2

export interface LevelScore {
  level: string
  correct: number
  total: number
  pct: number
}

export interface PlacementAnalysis {
  recommendedLevel: string | null // null when a confirmation round is needed
  needsConfirmation: boolean
  confirmLevel: string | null
  mode: 'start' | 'review'
}

function toPct(correct: number, total: number): number {
  return total > 0 ? Math.round((correct / total) * 100) : 0
}

function firstBelowThreshold(scores: LevelScore[]): number {
  for (let i = 0; i < LEVEL_ORDER.length; i++) {
    const s = scores.find((x) => x.level === LEVEL_ORDER[i])
    if (s && s.pct < MASTERY_THRESHOLD) return i
  }
  return -1
}

/**
 * First pass over the initial phase scores. Returns either a final
 * recommendation or a request for a confirmation round on `confirmLevel`.
 *
 * A confirmation round is triggered when:
 *  - the first-below-threshold level lands in the uncertain band [60,80), OR
 *  - a HIGHER level scores >= mastery (anomaly: e.g. A1=40% but A2=90%),
 *    which means the low score is likely noise and must be re-checked.
 */
export function analyzePlacement(scores: LevelScore[]): PlacementAnalysis {
  const idx = firstBelowThreshold(scores)
  if (idx < 0) {
    // Every tested level is mastered → highest available for review.
    const highest = scores[scores.length - 1]?.level ?? 'a1'
    return { recommendedLevel: highest, needsConfirmation: false, confirmLevel: null, mode: 'review' }
  }

  const levelScore = scores.find((s) => s.level === LEVEL_ORDER[idx])!

  // Anomaly: a strictly higher level is mastered while this one isn't.
  const anomaly = scores.some((s) => {
    const i = LEVEL_ORDER.indexOf(s.level as LevelId)
    return i > idx && s.pct >= MASTERY_THRESHOLD
  })

  const inBand = levelScore.pct >= CONFIRM_LOW && levelScore.pct < MASTERY_THRESHOLD

  if (anomaly || inBand) {
    return {
      recommendedLevel: null,
      needsConfirmation: true,
      confirmLevel: levelScore.level,
      mode: 'start',
    }
  }

  return { recommendedLevel: levelScore.level, needsConfirmation: false, confirmLevel: null, mode: 'start' }
}

/**
 * Second pass after the confirmation round. Merges the confirmation results
 * into the level's score and re-runs the decision.
 */
export function finalizePlacement(
  initial: LevelScore[],
  confirmLevel: string,
  confirmCorrect: number,
  confirmTotal: number
): { recommendedLevel: string; mode: 'start' | 'review'; scores: LevelScore[] } {
  const merged = initial.map((s) => {
    if (s.level !== confirmLevel) return s
    const correct = s.correct + confirmCorrect
    const total = s.total + confirmTotal
    return { ...s, correct, total, pct: toPct(correct, total) }
  })

  const idx = firstBelowThreshold(merged)
  if (idx < 0) {
    const highest = merged[merged.length - 1]?.level ?? 'a1'
    return { recommendedLevel: highest, mode: 'review', scores: merged }
  }
  const level = merged.find((s) => s.level === LEVEL_ORDER[idx])!.level
  return { recommendedLevel: level, mode: 'start', scores: merged }
}

/**
 * Level unlocking for the whole app.
 *
 * Returns true when a level is accessible. A level is unlocked when:
 *  1. It is A1 (always unlocked), OR
 *  2. The placement advisor recommends it or a HIGHER level (reverse unlock), OR
 *  3. The user passed the previous level's final exam (progression path).
 * Unlocks only ever ADD — they never revoke.
 */
export function isLevelUnlockedForPlacement(
  progress: UserProgress,
  levelId: string
): boolean {
  const idx = LEVEL_ORDER.indexOf(levelId as LevelId)
  if (idx <= 0) return true

  // Placement result: if we recommended this level or a higher one, unlock it.
  const placement = progress.placementResult
  if (placement) {
    const recIdx = LEVEL_ORDER.indexOf(placement.recommendedLevel as LevelId)
    if (recIdx >= 0 && idx <= recIdx) return true
  }

  // Progression path: passed the previous level's exam.
  const prevLevel = LEVEL_ORDER[idx - 1]
  const examId = `${prevLevel}-final`
  if (hasPassedExam(progress, examId)) return true

  return false
}

export function getRecommendedLevelLabel(levelId: string): string {
  const labels: Record<string, string> = {
    a1: 'Nivel A1 (Breakthrough) — desde cero',
    a2: 'Nivel A2 (Waystage) — pre-intermedio',
    b1: 'Nivel B1 (Threshold) — intermedio',
    b2: 'Nivel B2 (Vantage) — intermedio-alto',
    c1: 'Nivel C1 (Advanced)',
    c2: 'Nivel C2 (Mastery)',
  }
  return labels[levelId] ?? `Nivel ${levelId.toUpperCase()}`
}

export type { PlacementResult }
