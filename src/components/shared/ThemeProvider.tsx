/**
 * @file ThemeProvider.tsx
 * @description Theme provider component that prevents hydration mismatches.
 * @summary This component ensures consistent theme rendering between server
 * and client by handling theme application after hydration. It prevents
 * the className mismatch error by initially rendering without theme classes.
 */

'use client'

import { useEffect, useState } from 'react'
import { useTheme } from '@/hooks/useTheme'

interface ThemeProviderProps {
  /** Child components to render */
  children: React.ReactNode
}

/**
 * Provider component that handles theme application without hydration mismatches.
 * @param children - Child components to render
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  // Ensure theme is only applied after client-side mounting
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const root = document.documentElement

    // Remove existing theme classes
    root.classList.remove('dark')

    // Apply theme based on current setting
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'
      if (systemTheme === 'dark') {
        root.classList.add('dark')
      }
    } else if (theme === 'dark') {
      root.classList.add('dark')
    }
  }, [theme, mounted])

  return <>{children}</>
}
