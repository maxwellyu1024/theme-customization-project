"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState, useCallback } from "react"
import { type Theme, type ColorTheme, type ThemeColors, getThemeColors } from "@/themes"

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
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem(`${storageKey}-mode`) as Theme) || defaultTheme)
  const [colorTheme, setColorTheme] = useState<ColorTheme>(
    () => (localStorage.getItem(`${storageKey}-color`) as ColorTheme) || defaultColorTheme,
  )

  const applyTheme = useCallback((colorTheme: ColorTheme, isDark: boolean) => {
    return getThemeColors(colorTheme, isDark ? "dark" : "light")
  }, [])

  useEffect(() => {
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
  }, [theme, colorTheme, applyTheme])

  const value = {
    theme,
    colorTheme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(`${storageKey}-mode`, theme)
      setTheme(theme)
    },
    setColorTheme: (colorTheme: ColorTheme) => {
      localStorage.setItem(`${storageKey}-color`, colorTheme)
      setColorTheme(colorTheme)
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

