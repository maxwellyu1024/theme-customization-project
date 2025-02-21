"use client"

import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { themeNames } from "@/themes"
import { ScrollArea } from "@/components/ui/scroll-area"
export function ThemePreview() {
  const { setColorTheme, colorTheme, applyTheme, theme } = useTheme()

  const isDarkMode = theme === "dark"

  return (
    <ScrollArea className="h-[calc(100vh-150px)] min-h-[500px]">
      <div className="gap-4 p-4 bg-background grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center items-center">
        {themeNames.map((themeOption) => {
          const themeColors = applyTheme(themeOption.value, isDarkMode)
          const styleObject = Object.entries(themeColors).reduce(
            (acc, [key, value]) => {
              acc[`--${key}`] = value
              return acc
            },
            {} as Record<string, string>,
          )

          return (
            <Card
              key={themeOption.value}
              className={`w-72 cursor-pointer ${colorTheme === themeOption.value ? "ring-2 ring-primary" : ""
                } ${isDarkMode ? "dark" : ""}`}
              onClick={() => setColorTheme(themeOption.value)}
              style={styleObject}
            >
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-foreground">{themeOption.name}</h3>
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
    </ScrollArea>
  )
}

