"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function StatusPage() {
    const [servers, setServers] = useState<any[]>([])

    useEffect(() => {
        fetch("/api/status")
            .then((r) => r.json())
            .then(setServers)
    }, [])

    const statusConfig = (status: string) => {
        if (status === "online")
            return {
                color: "text-green-400",
                bg: "bg-green-500/20",
                border: "border-green-500/30",
                label: "Operational"
            }

        if (status === "maintenance")
            return {
                color: "text-yellow-400",
                bg: "bg-yellow-500/20",
                border: "border-yellow-500/30",
                label: "Maintenance"
            }

        return {
            color: "text-red-400",
            bg: "bg-red-500/20",
            border: "border-red-500/30",
            label: "Offline"
        }
    }

    const overall =
        servers.length > 0 &&
        servers.every((s) => s.status === "online")

    return (
        <div className="relative overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F19] via-[#0f172a] to-[#020617]" />
            <div className="absolute w-[800px] h-[800px] bg-purple-600/20 blur-[140px] top-[-200px] left-1/2 -translate-x-1/2" />

            <main className="relative max-w-7xl mx-auto px-6 py-24">

                {/* HEADER */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                        Network Status
                    </h1>

                    <p className="text-gray-400 mt-4">
                        Live infrastructure status for AS204604
                    </p>

                    {/* Overall Status */}
                    <div className="mt-6">
            <span
                className={`px-4 py-2 rounded-xl text-sm border ${
                    overall
                        ? "bg-green-500/20 text-green-400 border-green-500/30"
                        : "bg-red-500/20 text-red-400 border-red-500/30"
                }`}
            >
              {overall ? "● All Systems Operational" : "● Partial Outage"}
            </span>
                    </div>
                </div>

                {/* GRID */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {servers.length === 0 && (
                        <p className="text-gray-500">Loading infrastructure...</p>
                    )}

                    {servers.map((s, i) => {
                        const config = statusConfig(s.status)

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-white/5"
                            >
                                <div className="rounded-2xl bg-[#111827] p-6 h-full hover:bg-[#0f172a] transition">

                                    {/* Header */}
                                    <div className="flex justify-between items-start">

                                        <div>
                                            <h2 className="text-lg font-semibold text-white">
                                                {s.name}
                                            </h2>

                                            <p className="text-gray-500 text-xs mt-1">
                                                {s.location}
                                            </p>
                                        </div>

                                        <span
                                            className={`text-xs px-2 py-1 rounded-md border ${config.bg} ${config.color} ${config.border}`}
                                        >
                      {config.label}
                    </span>

                                    </div>

                                    {/* Load */}
                                    <div className="mt-6">

                                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                                            <span>CPU Load</span>
                                            <span>{s.load}%</span>
                                        </div>

                                        <div className="h-2 bg-black/40 rounded-full overflow-hidden">

                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${s.load}%` }}
                                                transition={{ duration: 0.8 }}
                                                className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                                            />

                                        </div>

                                    </div>

                                    {/* Extra Info */}
                                    <div className="mt-5 text-xs text-gray-500">
                                        Last check: just now
                                    </div>

                                </div>
                            </motion.div>
                        )
                    })}

                </div>

            </main>
        </div>
    )
}