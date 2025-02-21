"use client"

import { useEffect, useState } from "react"
import NProgress from "nprogress"
import { usePathname } from "next/navigation"

export function TopLoader() {
    const pathname = usePathname()
    const [searchParams, setSearchParams] = useState<URLSearchParams | null>(null)
    // Ensure `useSearchParams` runs only on the client side
    useEffect(() => {
        if (typeof window !== "undefined") {
            const params = new URLSearchParams(window.location.search)
            setSearchParams(params)
        }
    }, [pathname])  // Re-run when pathname changes

    useEffect(() => {
        NProgress.configure({ showSpinner: false })
    }, [])

    useEffect(() => {
        NProgress.done()
        return () => {
            NProgress.start()
        }
    }, [pathname, searchParams])

    return null
}

