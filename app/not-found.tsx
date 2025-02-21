import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-5 text-center">
            <h1 className="text-9xl font-bold text-primary">404</h1>
            <div className="mt-4">
                <h2 className="text-2xl md:text-3xl font-semibold mb-2">Oops! Page not found</h2>
                <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist or has been moved.</p>
            </div>
            <Link href="/">
                <Button size="lg">Go back home</Button>
            </Link>
        </div>
    )
}

