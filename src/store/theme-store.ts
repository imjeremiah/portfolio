/**
 * @file theme-store.ts
 * @description Zustand store for managing theme state across the application.
 * @summary This store handles the theme state (light, dark, system) and provides
 * actions to toggle between themes. It persists the user's preference in localStorage.
 * Theme application is handled by the ThemeProvider component to prevent hydration issues.
 */

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Theme = 'light' | 'dark' | 'system'

interface ThemeStore {
  /** Current theme setting */
  theme: Theme
  /** Set the theme */
  setTheme: (theme: Theme) => void
  /** Toggle between light and dark themes */
  toggleTheme: () => void
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme: 'system',
      setTheme: (theme) => {
        set({ theme })
      },
      toggleTheme: () => {
        const currentTheme = get().theme
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
        get().setTheme(newTheme)
      },
    }),
    {
      name: 'theme-storage',
    }
  )
)
