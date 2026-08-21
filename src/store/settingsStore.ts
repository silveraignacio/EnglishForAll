import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { defaultSettings, type Settings } from '@/types/progress'

interface SettingsStore {
  settings: Settings
  setPassingThreshold: (v: number) => void
  setTheme: (t: 'light' | 'dark') => void
  setDailyGoal: (v: number) => void
  resetSettings: () => void
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      settings: defaultSettings,
      setPassingThreshold: (v) =>
        set((state) => ({ settings: { ...state.settings, passingThreshold: v } })),
      setTheme: (t) =>
        set((state) => ({ settings: { ...state.settings, theme: t } })),
      setDailyGoal: (v) =>
        set((state) => ({ settings: { ...state.settings, dailyGoalXp: v } })),
      resetSettings: () => set({ settings: defaultSettings }),
    }),
    { name: 'english-course-settings' }
  )
)