import { neutralTheme } from "./neutral"
import { roseTheme } from "./rose"
import { redTheme } from "./red"
import { orangeTheme } from "./orange"
import { amberTheme } from "./amber"
import { yellowTheme } from "./yellow"
import { limeTheme } from "./lime"
import { greenTheme } from "./green"
import { emeraldTheme } from "./emerald"
import { tealTheme } from "./teal"
import { cyanTheme } from "./cyan"
import { skyTheme } from "./sky"
import { blueTheme } from "./blue"
import { indigoTheme } from "./indigo"
import { violetTheme } from "./violet"
import { purpleTheme } from "./purple"
import { fuchsiaTheme } from "./fuchsia"
import { pinkTheme } from "./pink"
import { slateTheme } from "./slate"
import { grayTheme } from "./gray"
import { zincTheme } from "./zinc"
import { stoneTheme } from "./stone"

export type ThemeMode = "light" | "dark"
export type ColorTheme =
  | "neutral"
  | "rose"
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "slate"
  | "gray"
  | "zinc"
  | "stone"
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
  "chart-1"?: string
  "chart-2"?: string
  "chart-3"?: string
  "chart-4"?: string
  "chart-5"?: string
}

export interface ThemeConfig {
  light: ThemeColors
  dark: ThemeColors
}

export const themes: Record<ColorTheme, ThemeConfig> = {
  neutral: neutralTheme,
  rose: roseTheme,
  red: redTheme,
  orange: orangeTheme,
  amber: amberTheme,
  yellow: yellowTheme,
  lime: limeTheme,
  green: greenTheme,
  emerald: emeraldTheme,
  teal: tealTheme,
  cyan: cyanTheme,
  sky: skyTheme,
  blue: blueTheme,
  indigo: indigoTheme,
  violet: violetTheme,
  purple: purpleTheme,
  fuchsia: fuchsiaTheme,
  pink: pinkTheme,
  slate: slateTheme,
  gray: grayTheme,
  zinc: zincTheme,
  stone: stoneTheme,
}

export const themeNames: { name: string; value: ColorTheme }[] = [
  { name: "Neutral", value: "neutral" },
  { name: "Red", value: "red" },
  { name: "Orange", value: "orange" },
  { name: "Amber", value: "amber" },
  { name: "Yellow", value: "yellow" },
  { name: "Lime", value: "lime" },
  { name: "Green", value: "green" },
  { name: "Emerald", value: "emerald" },
  { name: "Teal", value: "teal" },
  { name: "Cyan", value: "cyan" },
  { name: "Sky", value: "sky" },
  { name: "Blue", value: "blue" },
  { name: "Indigo", value: "indigo" },
  { name: "Violet", value: "violet" },
  { name: "Purple", value: "purple" },
  { name: "Fuchsia", value: "fuchsia" },
  { name: "Pink", value: "pink" },
  { name: "Rose", value: "rose" },
  { name: "Slate", value: "slate" },
  { name: "Gray", value: "gray" },
  { name: "Zinc", value: "zinc" },
  { name: "Stone", value: "stone" },
]

export function getThemeColors(colorTheme: ColorTheme, mode: ThemeMode): ThemeColors {
  return themes[colorTheme][mode]
}

