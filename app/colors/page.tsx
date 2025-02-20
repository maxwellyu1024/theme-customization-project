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
    <div className="container mx-auto p-4">
      <div className="prose dark:prose-invert mb-8">
        <h1>Color Palette</h1>
        <p>
          Every color in the default palette includes 11 steps, with 50 being the lightest, and 950 being the darkest:
        </p>
      </div>

      <div className="grid grid-cols-[auto_minmax(0,_1fr)] items-center gap-1">
        <div className=" col-start-2 grid grid-cols-11 justify-items-center gap-1 bg-background font-medium text-foreground">
          {steps.map((step) => (
            <div key={step}>{step}</div>
          ))}
        </div>

        {colorThemes.map((theme) => (
          <React.Fragment key={theme.value}>
            <p className="font-medium text-foreground ">{theme.name}</p>
            <div className="grid grid-cols-11 gap-1">
              {steps.map((step) => (
                <div
                  key={`${theme.value}-${step}`}
                  className={cn("h-12 w-12  rounded-md", `bg-${theme.value}-${step}`)}
                  
                />
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className="prose dark:prose-invert mt-8">
        <p>
          The entire color palette is available across all color related utilities, including things like{" "}
          <code>background-color</code>, <code>border-color</code>, <code>fill</code>, <code>caret-color</code>, and
          many more.
        </p>
      </div>
    </div>
  )
}

