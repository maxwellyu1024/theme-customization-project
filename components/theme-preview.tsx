"use client"

import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

const themes = [
  { name: "Neutral", value: "neutral" },
  { name: "Rose", value: "rose" },
  // Add more themes here as you create them
]

export function ThemePreview() {
  const { setColorTheme, colorTheme } = useTheme()

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 bg-background">
      {themes.map((theme) => (
        <Card
          key={theme.value}
          className={`w-72 cursor-pointer ${colorTheme === theme.value ? "ring-2 ring-primary" : ""}`}
          onClick={() => setColorTheme(theme.value as any)}
        >
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">{theme.name}</h3>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded bg-primary" />
                <div className="w-8 h-8 rounded bg-secondary" />
                <div className="w-8 h-8 rounded bg-accent" />
                <div className="w-8 h-8 rounded bg-muted" />
              </div>
              <Button size="sm" className="w-full">
                Primary Button
              </Button>
              <Button size="sm" variant="secondary" className="w-full">
                Secondary Button
              </Button>
              <div className="flex items-center justify-between">
                <span className="text-sm">Switch</span>
                <Switch />
              </div>
              <div className="w-full h-2 rounded bg-muted" />
              <p className="text-sm text-muted-foreground">Sample text in muted foreground color</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

