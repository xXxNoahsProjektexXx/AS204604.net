"use client"

import { motion } from "framer-motion"
import { Network, Server, Activity, Globe } from "lucide-react"
import Link from "next/link";

export default function Home() {

    return (
        <div className="relative overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F19] via-[#0f172a] to-[#020617]" />
            <div className="absolute w-[800px] h-[800px] bg-purple-600/20 blur-[140px] top-[-200px] left-1/2 -translate-x-1/2" />

            <div className="relative max-w-6xl mx-auto px-6 py-24">

                {/* HERO */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-24"
                >
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                        AS204604 Network
                    </h1>

                    <p className="mt-6 text-gray-400 max-w-xl mx-auto">
                        Autonomous system focused on routing, infrastructure and network experimentation.
                    </p>

                    {/* CTA */}
                    <div className="mt-10 flex justify-center gap-4">
                        <Link href={"/about"}>
                            <button className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 transition">
                                View Network
                            </button>
                        </Link>

                        <Link href={"/bgp"}>
                            <button className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition">
                                BGP Stats
                            </button>
                        </Link>
                    </div>
                </motion.div>

                {/* FEATURE CARDS */}
                <div className="grid md:grid-cols-3 gap-6">

                    {[
                        {
                            icon: Network,
                            title: "Autonomous System",
                            desc: "Public ASN used for BGP routing experiments and real-world infrastructure learning."
                        },
                        {
                            icon: Server,
                            title: "Infrastructure",
                            desc: "Distributed servers hosting services, monitoring tools and network utilities."
                        },
                        {
                            icon: Activity,
                            title: "BGP Statistics",
                            desc: "Detailed routing data, prefix announcements and peer visibility."
                        }
                    ].map((item, i) => {
                        const Icon = item.icon

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-white/5"
                            >
                                <div className="rounded-2xl bg-[#111827] p-6 h-full hover:bg-[#0f172a] transition">

                                    <Icon className="mb-4 text-purple-400" size={28} />

                                    <h2 className="font-semibold mb-2 text-white">
                                        {item.title}
                                    </h2>

                                    <p className="text-sm text-gray-400">
                                        {item.desc}
                                    </p>

                                </div>
                            </motion.div>
                        )
                    })}

                </div>

                {/* NETWORK OVERVIEW */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-24 relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-white/5"
                >
                    <div className="rounded-2xl bg-[#111827] p-8">

                        <h2 className="text-xl font-semibold mb-8 text-white">
                            Network Overview
                        </h2>

                        <div className="grid md:grid-cols-4 gap-6 text-sm">

                            <div>
                                <p className="text-gray-500">ASN</p>
                                <p className="text-lg font-semibold text-white">204604</p>
                            </div>

                            <div>
                                <p className="text-gray-500">Routing</p>
                                <p className="text-lg font-semibold text-white">IPv4 / IPv6</p>
                            </div>

                            <div>
                                <p className="text-gray-500">Region</p>
                                <p className="text-lg font-semibold text-white">EU</p>
                            </div>

                            <div>
                                <p className="text-gray-500">Status</p>
                                <p className="text-lg font-semibold text-green-400">
                                    ● Operational
                                </p>
                            </div>

                        </div>

                    </div>
                </motion.div>

                {/* LOCATIONS (neuer Abschnitt) */}
                <div className="mt-24">

                    <h2 className="text-xl font-semibold text-white mb-6 text-center">
                        Network Locations
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                        {["Vienna", "Frankfurt", "Amsterdam", "New York"].map((loc) => (
                            <div
                                key={loc}
                                className="bg-[#111827] border border-white/5 p-4 rounded-xl text-center hover:bg-[#0f172a] transition"
                            >
                                <p className="text-white font-medium">{loc}</p>
                                <p className="text-green-400 text-xs mt-1">● Online</p>
                            </div>
                        ))}

                    </div>

                </div>

            </div>
        </div>
    )
}