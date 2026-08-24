import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { UserProgress, ExerciseRecord, ExamResult, PlacementResult } from '@/types/progress'
import { initialProgress } from '@/types/progress'
import { todayKey, yesterdayKey } from '@/lib/utils'
import { saveProgressToServer, loadProgressFromServer } from '@/lib/progressSync'
import { useAuthStore } from '@/store/authStore'
import { getCourse } from '@/content'

const LEVEL_NAMES: Record<string, string> = { a1: 'A1', a2: 'A2', b1: 'B1', b2: 'B2', c1: 'C1', c2: 'C2' }

interface Achievement {
  id: string
  name: string
  description: string
  icon: string
}

const XP_PER_CORRECT = 10
const XP_PER_LESSON = 50
const XP_PER_MODULE = 200
const XP_PER_EXAM_PASS = 500

// Level-completion and exam-pass achievements are generated from the real
// course content (module counts per level) instead of hardcoded — so they
// automatically pick up new levels (B2 today, C1/C2 later) without anyone
// remembering to add a badge by hand.
const AVAILABLE_LEVELS = getCourse().levels.filter((l) => l.status === 'available' && l.modules.length > 0)

const LEVEL_COMPLETE_ACHIEVEMENTS: Achievement[] = AVAILABLE_LEVELS.map((l) => ({
  id: `level-complete-${l.id}`,
  name: `Curso ${LEVEL_NAMES[l.id] ?? l.id.toUpperCase()} completo`,
  description: `Completa los ${l.modules.length} módulos de ${LEVEL_NAMES[l.id] ?? l.id.toUpperCase()}`,
  icon: '🎓',
}))

const EXAM_PASS_ACHIEVEMENTS: Achievement[] = AVAILABLE_LEVELS.map((l) => ({
  id: `exam-pass-${l.id}`,
  name: `Examen ${LEVEL_NAMES[l.id] ?? l.id.toUpperCase()} superado`,
  description: `Aprueba el examen final de ${LEVEL_NAMES[l.id] ?? l.id.toUpperCase()}`,
  icon: '🎖️',
}))

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'first-lesson', name: 'Primera lección', description: 'Completa tu primera lección', icon: '🌱' },
  { id: 'streak-3', name: 'Racha de 3 días', description: 'Estudia 3 días seguidos', icon: '🔥' },
  { id: 'streak-7', name: 'Racha de 7 días', description: 'Estudia 7 días seguidos', icon: '🔥' },
  { id: 'streak-30', name: 'Racha de 30 días', description: 'Estudia 30 días seguidos', icon: '🏆' },
  { id: 'xp-100', name: '100 XP', description: 'Alcanza 100 XP', icon: '⚡' },
  { id: 'xp-500', name: '500 XP', description: 'Alcanza 500 XP', icon: '⚡' },
  { id: 'xp-1000', name: '1000 XP', description: 'Alcanza 1000 XP', icon: '⚡' },
  { id: 'module-1', name: 'Primer módulo', description: 'Completa tu primer módulo', icon: '📦' },
  { id: 'modules-5', name: '5 módulos', description: 'Completa 5 módulos (de cualquier nivel)', icon: '📦' },
  ...LEVEL_COMPLETE_ACHIEVEMENTS,
  ...EXAM_PASS_ACHIEVEMENTS,
  { id: 'placement-done', name: 'Nivel evaluado', description: 'Completa la prueba de nivel', icon: '🧭' },
  { id: 'perfect-lesson', name: 'Lección perfecta', description: 'Acierta todos los ejercicios de una lección', icon: '💯' },
]

interface ProgressStore {
  progress: UserProgress
  recordExercise: (rec: ExerciseRecord) => void
  recordReview: (concept: string, correct: boolean) => void
  completeLesson: (lessonId: string, allCorrect: boolean) => void
  completeModule: (moduleId: string) => void
  recordExam: (result: ExamResult) => void
  recordPlacement: (result: PlacementResult) => void
  setCurrentLesson: (lessonId: string) => void
  resetProgress: () => void
  syncToServer: () => Promise<void>
  syncFromServer: () => Promise<boolean>
}

function checkAchievements(progress: UserProgress): UserProgress {
  const newlyEarned = [...progress.achievements]
  const unlocked = (id: string) => newlyEarned.includes(id)

  if (!unlocked('first-lesson') && progress.completedLessons.length >= 1) newlyEarned.push('first-lesson')
  if (!unlocked('streak-3') && progress.streak >= 3) newlyEarned.push('streak-3')
  if (!unlocked('streak-7') && progress.streak >= 7) newlyEarned.push('streak-7')
  if (!unlocked('streak-30') && progress.streak >= 30) newlyEarned.push('streak-30')
  if (!unlocked('xp-100') && progress.xp >= 100) newlyEarned.push('xp-100')
  if (!unlocked('xp-500') && progress.xp >= 500) newlyEarned.push('xp-500')
  if (!unlocked('xp-1000') && progress.xp >= 1000) newlyEarned.push('xp-1000')
  if (!unlocked('module-1') && progress.completedModules.length >= 1) newlyEarned.push('module-1')
  if (!unlocked('modules-5') && progress.completedModules.length >= 5) newlyEarned.push('modules-5')

  for (const level of AVAILABLE_LEVELS) {
    const id = `level-complete-${level.id}`
    if (unlocked(id)) continue
    const allDone = level.modules.every((m) => progress.completedModules.includes(m.id))
    if (allDone) newlyEarned.push(id)
  }

  return { ...progress, achievements: newlyEarned }
}

function updateStreak(progress: UserProgress): UserProgress {
  const today = todayKey()
  if (progress.lastStudyDate === today) return progress
  let newStreak = progress.streak
  if (progress.lastStudyDate === yesterdayKey()) {
    newStreak = progress.streak + 1
  } else if (progress.lastStudyDate !== today) {
    newStreak = 1
  }
  return { ...progress, streak: newStreak, lastStudyDate: today }
}

/** Suma XP al total y al bucket diario (clave 'YYYY-MM-DD'). */
function addXp(progress: UserProgress, amount: number): UserProgress {
  if (amount <= 0) return progress
  const today = todayKey()
  return {
    ...progress,
    xp: progress.xp + amount,
    dailyXp: { ...progress.dailyXp, [today]: (progress.dailyXp[today] ?? 0) + amount },
  }
}

/** Programación de repaso espaciado simple por concepto (niveles 0..5). */
const SRS_INTERVALS_MS = [0, 1, 3, 7, 14, 30].map((d) => d * 86400000)
function updateReviewSchedule(
  progress: UserProgress,
  concept: string | undefined,
  correct: boolean
): UserProgress {
  if (!concept) return progress
  const now = Date.now()
  const cur = progress.reviewSchedule[concept]
  let level: number
  let due: number
  if (correct) {
    level = Math.min((cur?.level ?? 0) + 1, 5)
    due = now + SRS_INTERVALS_MS[level]
  } else {
    level = 0
    due = now + 6 * 3600000 // re-ver en ~6h
  }
  return {
    ...progress,
    reviewSchedule: { ...progress.reviewSchedule, [concept]: { level, due } },
  }
}

export const useProgressStore = create<ProgressStore>()(
  persist(
    (set, get) => ({
      progress: initialProgress,
      recordExercise: (rec) =>
        set((state) => {
          const updated = updateStreak(state.progress)
          const xpGain = rec.correct ? XP_PER_CORRECT : 0
          const withXp = addXp(updated, xpGain)
          const newHistory = [...withXp.exerciseHistory, rec].slice(-2000)
          // weak concept logic (track concepts with accuracy below 50% from at least 3 attempts)
          const conceptRecords = newHistory.filter(h => h.concept === rec.concept)
          const accurate = conceptRecords.filter(h => h.correct).length
          const newWeak = [...withXp.weakConcepts]
          if (conceptRecords.length >= 3) {
            const acc = (accurate / conceptRecords.length) * 100
            const idx = newWeak.indexOf(rec.concept)
            if (acc < 50 && idx < 0) newWeak.push(rec.concept)
            else if (acc >= 70 && idx >= 0) newWeak.splice(idx, 1)
          }
          const withSrs = updateReviewSchedule(withXp, rec.concept, rec.correct)
          const progressWithStats = {
            ...withSrs,
            exerciseHistory: newHistory,
            weakConcepts: newWeak,
          }
          const final = checkAchievements(progressWithStats)
          if (useAuthStore.getState().user) saveProgressToServer(final)
          return { progress: final }
        }),
      recordReview: (concept, correct) =>
        set((state) => {
          const updated = updateReviewSchedule(state.progress, concept, correct)
          const final = checkAchievements(updated)
          if (useAuthStore.getState().user) saveProgressToServer(final)
          return { progress: final }
        }),
      completeLesson: (lessonId, allCorrect) =>
        set((state) => {
          const updated = updateStreak(state.progress)
          const alreadyComplete = updated.completedLessons.includes(lessonId)
          const completedLessons = alreadyComplete
            ? updated.completedLessons
            : [...updated.completedLessons, lessonId]
          const xpToAdd = alreadyComplete ? 0 : XP_PER_LESSON
          const achievements = [...updated.achievements]
          if (allCorrect && !achievements.includes('perfect-lesson')) {
            achievements.push('perfect-lesson')
          }
          const newXp = addXp(updated, xpToAdd)
          const progressWithStats: UserProgress = {
            ...newXp,
            completedLessons,
            achievements,
          }
          const final = checkAchievements(progressWithStats)
          if (useAuthStore.getState().user) saveProgressToServer(final)
          return { progress: final }
        }),
      completeModule: (moduleId) =>
        set((state) => {
          const updated = updateStreak(state.progress)
          const alreadyComplete = updated.completedModules.includes(moduleId)
          const completedModules = alreadyComplete
            ? updated.completedModules
            : [...updated.completedModules, moduleId]
          const xpToAdd = alreadyComplete ? 0 : XP_PER_MODULE
          const final = checkAchievements({ ...addXp(updated, xpToAdd), completedModules })
          if (useAuthStore.getState().user) saveProgressToServer(final)
          return { progress: final }
        }),
      recordExam: (result) =>
        set((state) => {
          const updated = updateStreak(state.progress)
          const examResults = [...updated.examResults, result]
          // examId looks like "a1-final" — the achievement is per level, so
          // passing B1's exam after already passing A1's still gives the
          // full first-time bonus.
          const levelId = result.examId.replace('-final', '')
          const achievementId = `exam-pass-${levelId}`
          const alreadyUnlocked = updated.achievements.includes(achievementId)
          let xpToAdd = 0
          const achievements = [...updated.achievements]
          if (result.totalScore >= 60) {
            if (!alreadyUnlocked) {
              xpToAdd += XP_PER_EXAM_PASS
              if (ACHIEVEMENTS.some((a) => a.id === achievementId)) achievements.push(achievementId)
            } else {
              xpToAdd += 100
            }
          }
          const final = checkAchievements({
            ...addXp(updated, xpToAdd),
            examResults,
            achievements,
          })
          if (useAuthStore.getState().user) saveProgressToServer(final)
          return { progress: final }
        }),
      recordPlacement: (result) =>
        set((state) => {
          const updated = updateStreak(state.progress)
          const wasNull = updated.placementResult === null
          // 50 XP único por completar la prueba de nivel (no repetible).
          const xpToAdd = wasNull ? 50 : 0
          const achievements = [...updated.achievements]
          if (!achievements.includes('placement-done')) achievements.push('placement-done')
          const final = checkAchievements({
            ...addXp(updated, xpToAdd),
            placementResult: result,
            achievements,
          })
          if (useAuthStore.getState().user) saveProgressToServer(final)
          return { progress: final }
        }),
      setCurrentLesson: (lessonId) =>
        set((state) => ({ progress: { ...state.progress, currentLessonId: lessonId } })),
      resetProgress: () => {
        set({ progress: initialProgress })
        if (useAuthStore.getState().user) saveProgressToServer(initialProgress)
      },
      syncToServer: async () => {
        const current = get().progress
        if (useAuthStore.getState().user) {
          await saveProgressToServer(current)
        }
      },
      syncFromServer: async () => {
        const server = await loadProgressFromServer()
        if (server) {
          set({ progress: server })
          return true
        }
        return false
      },
    }),
    { name: 'english-course-progress' }
  )
)