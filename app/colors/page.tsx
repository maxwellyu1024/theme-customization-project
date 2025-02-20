import { cn } from "@/lib/utils"
import React from "react"

const colorThemes = [
  { name: "Red", value: "red" },
  { name: "Orange", value: "orange" },
  { name: "Amber", value: "amber" },
  { name: "Yellow", value: "yellow" },
  { name: "Lime", value: "lime" },
  { name: "Green", value: "green" },
  { name: "Emerald", value: "emerald" },
  { name: "Teal", value: "teal" },
  { name: "Cyan", value: "cyan" },
  { name: "Sky", value: "sky" },
  { name: "Blue", value: "blue" },
  { name: "Indigo", value: "indigo" },
  { name: "Violet", value: "violet" },
  { name: "Purple", value: "purple" },
  { name: "Fuchsia", value: "fuchsia" },
  { name: "Pink", value: "pink" },
  { name: "Rose", value: "rose" },
  { name: "Slate", value: "slate" },
  { name: "Gray", value: "gray" },
  { name: "Zinc", value: "zinc" },
  { name: "Neutral", value: "neutral" },
  { name: "Stone", value: "stone" },
]

const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

export default function ColorsPage() {
  return (
    <div className="container mx-auto p-4 max-w-2xl mb-20">
      <div className="prose dark:prose-invert mb-4 text-center">
        <h1 className="text-2xl font-bold mb-2">Color Palette</h1>
        <p className="text-sm">Every color includes 11 steps, from 50 (lightest) to 950 (darkest).</p>
      </div>

      <div className="grid grid-cols-[auto_1fr] items-center gap-2">
        <div className="col-start-2 grid grid-cols-11 justify-items-center gap-2 text-sm font-medium text-foreground mb-1">
          {steps.map((step) => (
            <div key={step}>{step}</div>
          ))}
        </div>

        {colorThemes.map((theme) => (
          <React.Fragment key={theme.value}>
            <p className="text-sm font-medium text-foreground pr-10">{theme.name}</p>
            <div className="grid grid-cols-11 gap-2">
              {steps.map((step) => (
                <div key={`${theme.value}-${step}`} className={cn("h-8 w-8 rounded-sm border border-gray-200", `bg-${theme.value}-${step}`)} />
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className="prose dark:prose-invert mt-4 text-center text-sm">
        <p>
          This color palette is available for all color-related utilities, including{" "}
          <code className="text-xs">background-color</code>, <code className="text-xs">border-color</code>,{" "}
          <code className="text-xs">fill</code>, <code className="text-xs">caret-color</code>, and more.
        </p>
      </div>
    </div>
  )
}

