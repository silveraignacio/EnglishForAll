import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { pb } from '@/lib/pocketbase'

interface AuthUser {
  id: string
  email: string
  nombre: string
}

interface AuthState {
  user: AuthUser | null
  isInitialized: boolean
  isSyncing: boolean
  error: string | null
  init: () => void
  login: (email: string, password: string) => Promise<boolean>
  register: (nombre: string, email: string, password: string) => Promise<boolean>
  logout: () => void
  setError: (msg: string | null) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isInitialized: false,
      isSyncing: false,
      error: null,

      init: () => {
        if (get().isInitialized) return
        // Restore session from the SDK's persisted token (if any)
        const authData = pb.authStore.model
        if (pb.authStore.isValid && authData) {
          set({
            user: {
              id: authData.id,
              email: (authData as Record<string, unknown>).email as string,
              nombre: ((authData as Record<string, unknown>).nombre as string) || '',
            },
            isInitialized: true,
          })
        } else {
          set({ isInitialized: true })
        }
      },

      login: async (email, password) => {
        set({ error: null })
        try {
          const authData = await pb.collection('users').authWithPassword(email, password)
          const model = authData.record
          set({
            user: {
              id: model.id,
              email: model.email as string,
              nombre: (model as Record<string, unknown>).nombre as string || '',
            },
          })
          return true
        } catch {
          set({ error: 'Email o contraseña incorrectos.' })
          return false
        }
      },

      register: async (nombre, email, password) => {
        set({ error: null })
        try {
          await pb.collection('users').create({
            nombre,
            email,
            password,
            passwordConfirm: password,
          })
          // Auto-login after register
          await pb.collection('users').authWithPassword(email, password)
          const model = pb.authStore.model
          if (!model) {
            set({ error: 'No se pudo iniciar sesión automáticamente.' })
            return false
          }
          set({
            user: {
              id: model.id,
              email: model.email as string,
              nombre,
            },
          })
          return true
        } catch (e) {
          const err = e as { data?: { data?: Record<string, { message: string }> } }
          const emailErr = err?.data?.data?.email?.message
          set({
            error: emailErr || 'No se pudo crear la cuenta. Revisa los datos e inténtalo de nuevo.',
          })
          return false
        }
      },

      logout: () => {
        pb.authStore.clear()
        set({ user: null })
      },

      setError: (msg) => set({ error: msg }),
    }),
    { name: 'english-course-auth', partialize: (s) => ({ user: s.user }) }
  )
)