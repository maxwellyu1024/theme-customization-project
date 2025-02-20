import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { ThemeCustomizer } from "@/components/theme-customizer"

import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex justify-between items-center p-4 bg-background border-b">
            <h1 className="text-2xl font-bold">Theme Customization Demo</h1>
            <div className="flex gap-4">
              <ModeToggle />
              <ThemeCustomizer />
            </div>
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



