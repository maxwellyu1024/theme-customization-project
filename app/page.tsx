import { CardsDemo } from "@/components/cards"
import { ThemePreview } from "@/components/theme-preview"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <main className="p-4 w-full">
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

           <CardsDemo />
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}

