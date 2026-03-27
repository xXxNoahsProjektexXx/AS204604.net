"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Locations() {
    const [locations, setLocations] = useState<any[]>([])

    useEffect(() => {
        fetch("/api/locations")
            .then(res => res.json())
            .then(setLocations)
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-white/5"
        >
            <div className="rounded-2xl bg-[#111827] p-6">

                <h2 className="text-lg font-semibold text-white mb-6">
                    Network Locations
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                    {locations.map((loc) => (
                        <div
                            key={loc.name}
                            className="bg-[#0f172a] border border-white/5 rounded-xl p-4 text-center hover:bg-[#111827] transition"
                        >
                            <p className="text-white text-sm font-medium">
                                {loc.name}
                            </p>

                            <p className={`text-xs mt-1 ${
                                loc.online ? "text-green-400" : "text-red-400"
                            }`}>
                                ● {loc.online ? "Online" : "Offline"}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </motion.div>
    )
}