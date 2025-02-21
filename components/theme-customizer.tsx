"use client"

import { Check, PaintBucket } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { themeNames } from "@/themes"
import { ScrollArea } from "@/components/ui/scroll-area"

export function ThemeCustomizer() {
  const { colorTheme, setColorTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <PaintBucket className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <ScrollArea className="h-[300px]">
        {themeNames.map((theme) => (
          <DropdownMenuItem key={theme.value} onClick={() => setColorTheme(theme.value)}>
            {theme.name}
            {colorTheme === theme.value && <Check className="w-4 h-4 ml-2" />}
          </DropdownMenuItem>
        ))}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

