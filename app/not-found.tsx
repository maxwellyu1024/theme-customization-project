"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function NotFound() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null


    return (

        <div className="flex flex-col items-center justify-center min-h-screen p-5 text-center">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
                <h1 className="text-9xl font-bold text-primary">404</h1>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <h2 className="text-2xl md:text-3xl font-semibold mt-4 mb-2">Oops! Page not found</h2>
                <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist or has been moved.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                <Link href="/">
                    <Button size="lg">Go back home</Button>
                </Link>
            </motion.div>
            <motion.div className="mt-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                <div className="h-[200px] w-[200px] relative">

                </div>
            </motion.div>
        </div>

    )
}
