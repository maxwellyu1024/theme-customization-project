import { ThemePreview } from "@/components/theme-preview"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Theme Customization Demo</h1>

      <ThemePreview />

      <div className="mt-12 space-y-8">
        <h2 className="text-2xl font-semibold mb-4">Current Theme Preview</h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is some example content for the card.</p>
          </CardContent>
          <CardFooter>
            <Button>Action</Button>
          </CardFooter>
        </Card>
          <Card>
            <CardHeader>
              <CardTitle>Form Example</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter your email" type="email" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button>Submit</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Button Variants</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full">Primary</Button>
              <Button className="w-full" variant="secondary">
                Secondary
              </Button>
              <Button className="w-full" variant="outline">
                Outline
              </Button>
              <Button className="w-full" variant="ghost">
                Ghost
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

