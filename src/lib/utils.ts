// Pure utility functions.

export function normalize(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/[.,!?;:'"]/g, '')
    .replace(/\s+/g, ' ')
}

export function normalizeForCompare(s: string): string {
  return normalize(s).replace(/'s\b/g, 's').replace(/\ba\b/g, '').replace(/\bthe\b/g, '')
}

export function isAnswerCorrect(userAnswer: string, exercise: {
  correctAnswer: string
  acceptedAnswers?: string[]
  acceptApproximate?: boolean
}): boolean {
  const user = normalize(userAnswer)
  if (!user) return false
  const correct = normalize(exercise.correctAnswer)
  if (user === correct) return true
  if (exercise.acceptedAnswers && exercise.acceptedAnswers.some(a => normalize(a) === user)) return true
  if (exercise.acceptApproximate) {
    const userC = normalizeForCompare(userAnswer)
    const correctC = normalizeForCompare(exercise.correctAnswer)
    if (userC === correctC) return true
    if (Math.abs(userC.length - correctC.length) <= 2) {
      const distance = levenshtein(userC, correctC)
      if (distance <= 1) return true
    }
  }
  return false
}

function levenshtein(a: string, b: string): number {
  const m = a.length, n = b.length
  const d: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
  for (let i = 0; i <= m; i++) d[i][0] = i
  for (let j = 0; j <= n; j++) d[0][j] = j
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost)
    }
  }
  return d[m][n]
}

export function shuffle<T>(arr: T[]): T[] {
  const result = [...arr]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}

export function todayKey(): string {
  return new Date().toISOString().split('T')[0]
}

export function yesterdayKey(): string {
  const d = new Date()
  d.setDate(d.getDate() - 1)
  return d.toISOString().split('T')[0]
}

export function streakFrom(lastDate: string | null): number {
  if (!lastDate) return 1
  const today = todayKey()
  if (lastDate === today) return 0
  if (lastDate === yesterdayKey()) return 1
  return 1
}