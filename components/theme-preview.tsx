"use client"

import { useState } from "react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Moon, Sun } from "lucide-react"

const themes = [
  { name: "Neutral", value: "neutral" },
  { name: "Rose", value: "rose" },
  // Add more themes here as you create them
]

export function ThemePreview() {
  const { setColorTheme, colorTheme, applyTheme } = useTheme()
  const [previewMode, setPreviewMode] = useState<"light" | "dark">("light")

  const togglePreviewMode = () => {
    setPreviewMode((prev) => (prev === "light" ? "dark" : "light"))
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button variant="outline" size="icon" onClick={togglePreviewMode}>
          {previewMode === "light" ? (
            <Moon className="h-[1.2rem] w-[1.2rem]" />
          ) : (
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          )}
        </Button>
      </div>
      <div className="flex flex-wrap justify-center gap-4 p-4 bg-background">
        {themes.map((theme) => {
          const themeStyles = applyTheme(theme.value as any, previewMode === "dark")
          const styleObject = Object.entries(themeStyles).reduce(
            (acc, [key, value]) => {
              acc[`--${key}`] = value
              return acc
            },
            {} as Record<string, string>,
          )

          return (
            <Card
              key={theme.value}
              className={`w-72 cursor-pointer ${
                colorTheme === theme.value ? "ring-2 ring-primary" : ""
              } ${previewMode === "dark" ? "dark" : ""}`}
              onClick={() => setColorTheme(theme.value as any)}
            style={styleObject}
          >
            <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-foreground">{theme.name}</h3>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded bg-primary border-[1px]" title="primary" />
                  <div className="w-8 h-8 rounded bg-secondary border-[1px]" />
                  <div className="w-8 h-8 rounded bg-popover border-[1px]" />
                  <div className="w-8 h-8 rounded bg-accent border-[1px]" />
                  <div className="w-8 h-8 rounded bg-card border-[1px]" />
                  <div className="w-8 h-8 rounded bg-destructive border-[1px]" />
                  <div className="w-8 h-8 rounded bg-muted border-[1px]" />
                </div>
                <Button size="sm" className="w-full">
                  Primary Button
                </Button>
                <Button size="sm" variant="secondary" className="w-full">
                  Secondary Button
                </Button>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground">Switch</span>
                  <Switch />
                </div>
                <div className="w-full h-2 rounded bg-muted" />
                <p className="text-sm text-muted-foreground">Sample text in muted foreground color</p>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
    </div>
  )
}

