"use client"

import { motion } from "framer-motion"
import { Globe, Server, Activity } from "lucide-react"
import Link from "next/link"

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center text-center">

            <motion.h1
                initial={{ opacity:0, y:20 }}
                animate={{ opacity:1, y:0 }}
                className="text-6xl font-bold"
            >
                AS204604
            </motion.h1>

            <p className="text-gray-400 mt-4">
                Independent Network Infrastructure
            </p>

            <div className="flex gap-6 mt-10">

                <Link href="/dashboard" className="bg-white text-black px-6 py-3 rounded-xl flex gap-2 items-center">
                    <Globe size={18}/>
                    ASN Dashboard
                </Link>

                <Link href="/status" className="border border-white px-6 py-3 rounded-xl flex gap-2 items-center">
                    <Activity size={18}/>
                    Server Status
                </Link>

            </div>

        </main>
    )
}