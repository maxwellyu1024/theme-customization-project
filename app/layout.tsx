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
import { Home, Palette } from "lucide-react"

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "shadcn/ui theme customization",
  description: "a powerful theme customization tool for shadcn/ui",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="system"  >
          <div className="flex justify-between items-center p-4 bg-background border-b">
            <div className="flex items-center gap-6">
              <h1 className="text-2xl font-bold">shadcn/ui theme customization</h1>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink className="flex items-center px-3 py-2 hover:bg-accent rounded-md">
                        <Home className="w-4 h-4 mr-2" />
                        Home
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/colors" legacyBehavior passHref>
                      <NavigationMenuLink className="flex items-center px-3 py-2 hover:bg-accent rounded-md">
                        <Palette className="w-4 h-4 mr-2" />
                        Colors
                      </NavigationMenuLink>
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

