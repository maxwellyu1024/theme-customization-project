import { neutralTheme } from "./neutral"
import { roseTheme } from "./rose"
// Import other theme files here

export type ThemeMode = "light" | "dark"
export type ColorTheme = "neutral" | "rose" // Add other theme names here
export type Theme = "light" | "dark" | "system"

export interface ThemeColors {
  background: string
  foreground: string
  card: string
  "card-foreground": string
  popover: string
  "popover-foreground": string
  primary: string
  "primary-foreground": string
  secondary: string
  "secondary-foreground": string
  muted: string
  "muted-foreground": string
  accent: string
  "accent-foreground": string
  destructive: string
  "destructive-foreground": string
  border: string
  input: string
  ring: string
  "chart-1": string
  "chart-2": string
  "chart-3": string
  "chart-4": string
  "chart-5": string
}

export interface ThemeConfig {
  light: ThemeColors
  dark: ThemeColors
}

export const themes: Record<ColorTheme, ThemeConfig> = {
  neutral: neutralTheme,
  rose: roseTheme,
  // Add other themes here
}

export const themeNames: { name: string; value: ColorTheme }[] = [
  { name: "Neutral", value: "neutral" },
  { name: "Rose", value: "rose" },
  // Add other themes here
]

export function getThemeColors(colorTheme: ColorTheme, mode: ThemeMode): ThemeColors {
  return themes[colorTheme][mode]
}

