"use client"

import { CardsDemo } from "@/components/cards"
import { ThemePreview } from "@/components/theme-preview"
import { useTheme } from "@/components/theme-provider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { themeNames } from "@/themes"

export default function Home() {
  const { colorTheme, setColorTheme } = useTheme()
  const theme = themeNames.find((theme) => theme.value === colorTheme)
  return (
    <Tabs defaultValue="theme" className="w-full shadow-xl bg-background">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="theme">Theme ({themeNames.length})</TabsTrigger>
        <TabsTrigger value="preview">Preview ({theme?.name})</TabsTrigger>
      </TabsList>
      <TabsContent value="theme">
        <ThemePreview />
      </TabsContent>
      <TabsContent value="preview">
        <div className="mt-6 space-y-8 px-4">
          <CardsDemo />
        </div>
      </TabsContent>
    </Tabs>
  )
}

