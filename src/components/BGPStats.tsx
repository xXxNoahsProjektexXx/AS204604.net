"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Activity } from "lucide-react"

export default function BGPStats() {
    const [data, setData] = useState<any>(null)

    useEffect(() => {
        fetch("/api/bgp/announced-prefixes")
            .then(res => res.json())
            .then(setData)
    }, [])

    if (!data) {
        return (
            <div className="relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-white/5">
                <div className="rounded-2xl bg-[#111827] p-6 text-gray-400">
                    Loading prefixes...
                </div>
            </div>
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-white/5"
        >
            <div className="rounded-2xl bg-[#111827] p-6">

                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                        <Activity className="text-purple-400" size={18} />
                        <h2 className="text-lg font-semibold text-white">
                            Announced Prefixes
                        </h2>
                    </div>

                    <span className="text-sm text-gray-400">
                        {data.count} prefixes
                    </span>
                </div>

                {/* List */}
                <div className="max-h-[300px] overflow-y-auto pr-2 space-y-2">

                    {data.prefixes.map((p: any) => (
                        <div
                            key={p.prefix}
                            className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#0f172a] border border-white/5 hover:bg-[#111827] transition"
                        >
                            <span className="font-mono text-sm text-white">
                                {p.prefix}
                            </span>

                            <span className="text-xs text-green-400">
                                ● announced
                            </span>
                        </div>
                    ))}

                </div>

            </div>
        </motion.div>
    )
}