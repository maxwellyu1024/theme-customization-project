import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { ThemeCustomizer } from "@/components/theme-customizer"
import Link from "next/link"
import { Home, Palette } from "lucide-react"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "nprogress/nprogress.css"
import { TopLoader } from "@/components/top-loader"
import { TailwindIndicator } from "@/components/tailwind-indicator"

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
    <html lang="en" suppressHydrationWarning className="no-fouc">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="system"  >
          <TopLoader />
          <header className="border-b bg-background">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center gap-6">
                  <h1 className="text-2xl font-bold">Theme Customization</h1>
                  <nav>
                    <ul className="flex space-x-4">
                      <li>
                        <Link href="/" className="flex items-center px-3 py-2 rounded-md hover:bg-accent">
                          <Home className="w-4 h-4 mr-2" />
                          <span>Home</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/colors" className="flex items-center px-3 py-2 rounded-md hover:bg-accent">
                          <Palette className="w-4 h-4 mr-2" />
                          <span>Colors</span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="flex gap-4">
                  <ModeToggle />
                  <ThemeCustomizer />
                </div>
              </div>
            </div>
          </header>
          <main className="container mx-auto py-4">{children}</main>
        </ThemeProvider>
        <TailwindIndicator />
      </body>
    </html>
  )
}

