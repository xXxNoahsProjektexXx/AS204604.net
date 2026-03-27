"use client"

import { useEffect, useState } from "react"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Cursor from "@/components/Cursor"

export default function RootLayout({
                                       children
                                   }: {
    children: React.ReactNode
}) {
    const [isDesktop, setIsDesktop] = useState(false)

    useEffect(() => {
        const media = window.matchMedia("(hover: hover) and (pointer: fine)")
        setIsDesktop(media.matches)

        const listener = () => setIsDesktop(media.matches)
        media.addEventListener("change", listener)

        return () => media.removeEventListener("change", listener)
    }, [])

    return (
        <html lang="de">
        <body className="bg-black text-white">

        <div className="flex flex-col min-h-screen">

            <Navbar />

            {/* 👇 Cursor nur Desktop */}
            {isDesktop && <Cursor />}

            <main className="flex-1">
                {children}
            </main>

            <Footer />

        </div>

        </body>
        </html>
    )
}