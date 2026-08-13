import { pb } from '@/lib/pocketbase'
import { useAuthStore } from '@/store/authStore'
import type { UserProgress, ExamResult, ExerciseRecord, PlacementResult } from '@/types/progress'

// Sync layer for course progress. Reads/writes the user's progress row in the
// PocketBase "progress" collection. Falls back silently to local-only when not
// authenticated or when the backend is unreachable.
//
// NOTE: The live PocketBase "progress" collection uses dedicated columns
// (completedLessons, examResults, exerciseResults, lastActivityDate, streak,
// placementResult) rather than a single json blob. We map UserProgress onto
// those columns.

function toServerPayload(p: UserProgress) {
  return {
    completedLessons: p.completedLessons,
    examResults: p.examResults,
    exerciseResults: p.exerciseHistory,
    lastActivityDate: p.lastStudyDate ?? '',
    streak: p.streak,
    placementResult: p.placementResult,
  }
}

function fromServerRecord(rec: Record<string, unknown>): UserProgress | null {
  const completedLessons = (rec.completedLessons as string[]) || []
  const examResults = (rec.examResults as ExamResult[]) || []
  const exerciseHistory = (rec.exerciseResults as ExerciseRecord[]) || []
  const lastStudyDate = (rec.lastActivityDate as string) || null
  const streak = (rec.streak as number) || 0
  const placementResult = (rec.placementResult as PlacementResult) || null
  return {
    completedLessons,
    completedModules: [],
    exerciseHistory,
    xp: 0,
    streak,
    lastStudyDate,
    achievements: [],
    weakConcepts: [],
    examResults,
    placementResult,
    currentLessonId: null,
  }
}

export async function saveProgressToServer(progress: UserProgress): Promise<boolean> {
  const user = useAuthStore.getState().user
  if (!user) return false
  try {
    const list = await pb.collection('progress').getList(1, 1, {
      filter: `user = "${user.id}"`,
    })
    const payload = toServerPayload(progress)
    if (list.items.length > 0) {
      await pb.collection('progress').update(list.items[0].id, payload)
    } else {
      await pb.collection('progress').create({ user: user.id, ...payload })
    }
    return true
  } catch {
    return false
  }
}

export async function loadProgressFromServer(): Promise<UserProgress | null> {
  const user = useAuthStore.getState().user
  if (!user) return null
  try {
    const list = await pb.collection('progress').getList(1, 1, {
      filter: `user = "${user.id}"`,
    })
    if (list.items.length > 0) {
      return fromServerRecord(list.items[0] as unknown as Record<string, unknown>)
    }
    return null
  } catch {
    return null
  }
}

export async function deleteProgressOnServer(): Promise<boolean> {
  const user = useAuthStore.getState().user
  if (!user) return false
  try {
    const list = await pb.collection('progress').getList(1, 1, {
      filter: `user = "${user.id}"`,
    })
    if (list.items.length > 0) {
      await pb.collection('progress').delete(list.items[0].id)
    }
    return true
  } catch {
    return false
  }
}