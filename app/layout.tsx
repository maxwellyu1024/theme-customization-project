import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { ThemeCustomizer } from "@/components/theme-customizer"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

import "./globals.css"

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
            <div className="flex items-center gap-6">
              <h1 className="text-2xl font-bold">Theme Customization</h1>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink className="px-3 py-2 hover:bg-accent rounded-md">Home</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/colors" legacyBehavior passHref>
                      <NavigationMenuLink className="px-3 py-2 hover:bg-accent rounded-md">Colors</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
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



