// Application-side types (separate from content authoring types).
// StyleAnalysis is responsible for understanding text content style features to avoid randomization issues.

export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'

export interface ExerciseRecord {
  exerciseId: string
  lessonId: string
  correct: boolean
  attempts: number
  timestamp: number
  concept: string
  difficulty: number
  userAnswer: string
}

export interface ExamResult {
  examId: string
  totalScore: number
  breakdown: { area: string; score: number }[]
  recommendations: string[]
  timestamp: number
}

export interface PlacementResult {
  recommendedLevel: string
  breakdown: { level: string; correct: number; total: number; pct: number }[]
  totalPct: number
  timestamp: number
}

export interface UserProgress {
  completedLessons: string[]
  completedModules: string[]
  exerciseHistory: ExerciseRecord[]
  xp: number
  /** XP ganado por día, clave = 'YYYY-MM-DD'. */
  dailyXp: Record<string, number>
  streak: number
  lastStudyDate: string | null
  achievements: string[]
  weakConcepts: string[]
  /** Programación de repaso espaciado por concepto: { level: 1..5, due: timestamp }. */
  reviewSchedule: Record<string, { level: number; due: number }>
  examResults: ExamResult[]
  placementResult: PlacementResult | null
  currentLessonId: string | null
}

export const initialProgress: UserProgress = {
  completedLessons: [],
  completedModules: [],
  exerciseHistory: [],
  xp: 0,
  dailyXp: {},
  streak: 0,
  lastStudyDate: null,
  achievements: [],
  weakConcepts: [],
  reviewSchedule: {},
  examResults: [],
  placementResult: null,
  currentLessonId: 'a1-m1-l1',
}

export interface Settings {
  passingThreshold: number
  interfaceLanguage: string
  /** Tema de la interfaz: 'light' | 'dark'. */
  theme: 'light' | 'dark'
  /** Objetivo diario de XP. */
  dailyGoalXp: number
}

export const defaultSettings: Settings = {
  passingThreshold: 80,
  interfaceLanguage: 'es',
  theme: 'light',
  dailyGoalXp: 100,
}