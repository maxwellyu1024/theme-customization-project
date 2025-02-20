import { ThemePreview } from "@/components/theme-preview"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="preview">Theme Preview</TabsTrigger>
          <TabsTrigger value="current">Current Theme</TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
         
            <ThemePreview />
         
        </TabsContent>
        <TabsContent value="current">
          <div className="mt-6 space-y-8">

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
        </TabsContent>
      </Tabs>
    </main>
  )
}

