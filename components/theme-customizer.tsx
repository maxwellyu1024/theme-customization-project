"use client"

import {  PaintBucket } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { themes, themeNames, ColorTheme } from "@/themes"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState, useEffect } from "react"

export function ThemeCustomizer() {
  const { colorTheme, setColorTheme, theme } = useTheme()
  const [mode, setMode] = useState<"light" | "dark">("light")

  useEffect(() => {
    if (theme === "system") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setMode(isDark ? "dark" : "light")
    } else {
      setMode(theme as "light" | "dark")
    }
  }, [theme])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <PaintBucket className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        <ScrollArea className="h-[300px]">
          {themeNames.map((themeItem) => (
            <ThemeItem
              key={themeItem.value}
              themeItem={themeItem}
              mode={mode}
              colorTheme={colorTheme}
              setColorTheme={setColorTheme}
            />

          ))}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
interface ThemeItemProps {
  themeItem: { value: ColorTheme; name: string }
  mode: "light" | "dark"
  colorTheme: string
  setColorTheme: (theme: ColorTheme) => void
}

function ThemeItem({ themeItem, mode, colorTheme, setColorTheme }: ThemeItemProps) {
  // const itemTheme = mode === "light" ? themes[themeItem.value ].light : themes[themeItem.value].dark
  const themeKey = themeItem.value as keyof typeof themes
  const itemTheme = themes[themeKey] ? (mode === "light" ? themes[themeKey].light : themes[themeKey].dark) : themes.neutral.light // 兜底方案
  // 判断是否选中
  const isSelected = colorTheme === themeItem.value
  return (
    <DropdownMenuItem
      onClick={() => setColorTheme(themeItem.value)}
      className="flex items-center justify-between cursor-pointer py-1 pr-3"
      style={{ backgroundColor: isSelected ? `hsl(${itemTheme.primary})` : "transparent" }}
    >
      <div
        className="flex h-8 items-center gap-2 w-full px-2 rounded border border-transparent hover:border-gray-300"
        style={{ backgroundColor: `hsl(${itemTheme.background})` }}
      >
        <div
          className="w-4 h-4 rounded-full"
          style={{
            backgroundColor: `hsl(${itemTheme.primary})`,
            border: `2px solid hsl(${itemTheme.border})`,
          }}
        />
        <div
          className="w-4 h-4 rounded-full"
          style={{
            backgroundColor: `hsl(${itemTheme.secondary})`,
            border: `2px solid hsl(${itemTheme.border})`,
          }}
        />
        <span style={{ color: `hsl(${itemTheme.foreground})` }}>{themeItem.name}</span>
        {/* {isSelected && <Check className="w-4 h-4 ml-auto" />} */}
      </div>
    </DropdownMenuItem>
  )
}
