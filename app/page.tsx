import { ThemePreview } from "@/components/theme-preview"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Theme Customization Demo</h1>

      <ThemePreview />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-8">
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
            <CardTitle>Another Card</CardTitle>
            <CardDescription>With different content</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Here's some more example content to show theme variations.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Secondary Action</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Third Card</CardTitle>
            <CardDescription>Demonstrating theme flexibility</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This card shows how different components adapt to theme changes.</p>
          </CardContent>
          <CardFooter>
            <Button variant="secondary">Tertiary Action</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}

