"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { neutralTheme } from "@/themes/neutral"
import { roseTheme } from "@/themes/rose"
// Import other theme files as needed

type Theme = "light" | "dark" | "system"
type ColorTheme = "neutral" | "rose" | "green" | "blue"

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
}

const initialState: ThemeProviderState = {
  theme: "system",
  colorTheme: "neutral",
  setTheme: () => null,
  setColorTheme: () => null,
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

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  useEffect(() => {
    const root = window.document.documentElement
    let themeObject

    switch (colorTheme) {
      case "neutral":
        themeObject = neutralTheme[theme === "dark" ? "dark" : "light"]
        break
      case "rose":
        themeObject = roseTheme[theme === "dark" ? "dark" : "light"]
        break
      // Add cases for other themes
      default:
        themeObject = neutralTheme[theme === "dark" ? "dark" : "light"]
    }

    Object.entries(themeObject).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value)
    })
  }, [theme, colorTheme])

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
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")

  return context
}

