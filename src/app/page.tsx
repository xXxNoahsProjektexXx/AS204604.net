"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { Globe, Activity } from "lucide-react"

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">

            {/* Hero */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-6xl font-bold mb-4"
            >
                AS204604
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-400 max-w-xl mb-8"
            >
                Independent Autonomous System providing modern network infrastructure, VPS hosting, and backbone connectivity.
            </motion.p>

            {/* Infobox */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 p-6 rounded-2xl max-w-xl text-left mb-10"
            >
                <h2 className="text-2xl font-semibold mb-2">Wichtige Info</h2>
                <p className="text-gray-300">
                    Unsere ASN 204604 bietet sichere und performante Netzwerkverbindungen in Europa.
                    Prüfen Sie regelmäßig den <Link href="/status" className="text-blue-400 underline">Server Status</Link> und Dashboard für aktuelle BGP-Updates.
                </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex gap-6"
            >
                <Link href="/bgp" className="bg-white text-black px-6 py-3 rounded-xl flex gap-2 items-center">
                    <Globe size={18}/> BGP Stats
                </Link>
                <Link href="/status" className="border border-white px-6 py-3 rounded-xl flex gap-2 items-center">
                    <Activity size={18}/> Server Status
                </Link>
            </motion.div>

        </main>
    )
}