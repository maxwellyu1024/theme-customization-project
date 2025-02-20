import { Card } from "@/components/ui/card"
import { themeNames } from "@/themes"

const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

export default function ColorsPage() {
  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="prose dark:prose-invert">
        <h1>Color Palette</h1>
        <p>
          Every color in the default palette includes 11 steps, with 50 being the lightest, and 950 being the darkest:
        </p>
      </div>

      <div className="grid gap-2 ">
        {themeNames.map((theme) => (
          <div key={theme.value} className="flex items-center space-x-4">
            <h3 className="font-semibold capitalize text-lg">{theme.name}</h3>
            <div className="grid grid-cols-11 gap-2">
              {steps.map((step) => (
                <div
                  className={`w-8 h-8 rounded-sm bg-${theme.value}-${step}`}
                  style={{
                    backgroundColor: `hsl(var(--${theme.value}-${step}))`,
                  }}
                />

              ))}
            </div>
          </div>
        ))}
      </div>


    </div>
  )
}

