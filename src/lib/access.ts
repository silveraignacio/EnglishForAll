import type { UserProgress } from '@/types/progress'

// Exam that unlocks each level. A level is unlocked only by passing ITS previous
// level's final exam — passing A1 does NOT transitively unlock B1 (you must pass A2).
export const EXAM_BY_LEVEL: Record<string, string> = {
  a1: 'a1-final',
  a2: 'a2-final',
  b1: 'b1-final',
}

export const PASS_THRESHOLD = 60

export function hasPassedExam(progress: UserProgress, examId: string): boolean {
  return progress.examResults.some(
    (r) => r.examId === examId && r.totalScore >= PASS_THRESHOLD
  )
}

export function isLevelUnlocked(progress: UserProgress, levelId: string): boolean {
  const levelOrder = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2']
  const idx = levelOrder.indexOf(levelId)
  if (idx <= 0) return true // a1 always unlocked
  const prevLevel = levelOrder[idx - 1]
  const prevExam = EXAM_BY_LEVEL[prevLevel]
  if (!prevExam) return true
  return hasPassedExam(progress, prevExam)
}

export function getRequiredExamForLevel(levelId: string): string | null {
  const levelOrder = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2']
  const idx = levelOrder.indexOf(levelId)
  if (idx <= 0) return null
  return EXAM_BY_LEVEL[levelOrder[idx - 1]] ?? null
}

export function getLockedLevelMessage(levelId: string): string {
  const required = getRequiredExamForLevel(levelId)
  if (!required) return ''
  return `Para desbloquear el nivel ${levelId.toUpperCase()} debes aprobar el examen final del nivel anterior.`
}