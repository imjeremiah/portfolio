/**
 * @file useTheme.ts
 * @description Custom hook for theme management.
 * @summary This hook provides a clean interface to the theme store.
 * Theme application is handled by the ThemeProvider component to prevent
 * hydration mismatches.
 */

import { useThemeStore } from '@/store/theme-store'

/**
 * Custom hook for managing theme state.
 * @returns Object containing current theme, theme setter, and toggle function
 */
export function useTheme() {
  const { theme, setTheme, toggleTheme } = useThemeStore()

  return {
    theme,
    setTheme,
    toggleTheme,
  }
}
