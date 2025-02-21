"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState, useCallback } from "react"
import { type Theme, type ColorTheme, type ThemeColors, getThemeColors } from "@/themes"
// import { storage } from "@/lib/utils"
// import NProgress from "nprogress"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  defaultColorTheme?: ColorTheme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  colorTheme: ColorTheme
  setTheme: (theme: Theme) => void
  setColorTheme: (colorTheme: ColorTheme) => void
  applyTheme: (colorTheme: ColorTheme, isDark: boolean) => ThemeColors
}

const initialState: ThemeProviderState = {
  theme: "system",
  colorTheme: "neutral",
  setTheme: () => null,
  setColorTheme: () => null,
  applyTheme: () => ({}) as ThemeColors,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  defaultColorTheme = "neutral",
  storageKey = "shadcn-ui-theme",
  ...props
}: ThemeProviderProps) {
  // State to handle theme and color theme, and whether client-side JS is ready
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [colorTheme, setColorTheme] = useState<ColorTheme>(defaultColorTheme)
  const [isClient, setIsClient] = useState(false) // Flag to check if it's client-side

  const applyTheme = useCallback((colorTheme: ColorTheme, isDark: boolean) => {
    return getThemeColors(colorTheme, isDark ? "dark" : "light")
  }, [])

  // useEffect hook to handle client-specific logic
  useEffect(() => {
    // Ensure this runs only on the client-side
    setIsClient(true)
    // Hydration safety check: useEffect is only called after component mounts
    const storedTheme = localStorage.getItem(`${storageKey}-mode`) as Theme
    const storedColorTheme = localStorage.getItem(`${storageKey}-color`) as ColorTheme

    if (storedTheme) setTheme(storedTheme)
    if (storedColorTheme) setColorTheme(storedColorTheme)
  }, [storageKey])

  // Apply theme after initial render
  useEffect(() => {
    if (!isClient) return // Skip rendering if not on client

    const root = window.document.documentElement
    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme)
    }

    const themeColors = applyTheme(colorTheme, root.classList.contains("dark"))
    Object.entries(themeColors).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value)
    })
    root.classList.remove("no-fouc")
  }, [theme, colorTheme, applyTheme, isClient])

  // Set theme and color theme, and update localStorage
  const value = {
    theme,
    colorTheme,
    setTheme: (newTheme: Theme) => {
      localStorage.setItem(`${storageKey}-mode`, newTheme)
      setTheme(newTheme)
    },
    setColorTheme: (newColorTheme: ColorTheme) => {
      localStorage.setItem(`${storageKey}-color`, newColorTheme)
      setColorTheme(newColorTheme)
    },
    applyTheme,
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
