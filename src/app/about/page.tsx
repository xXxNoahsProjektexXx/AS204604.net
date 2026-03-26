"use client"

import { motion } from "framer-motion"
import { Activity, Server, Globe } from "lucide-react"

export default function AboutPage() {
    return (
        <div className="relative overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F19] via-[#0f172a] to-[#020617]" />
            <div className="absolute w-[700px] h-[700px] bg-purple-600/20 blur-[140px] top-[-200px] left-1/2 -translate-x-1/2" />

            <div className="relative max-w-5xl mx-auto px-6 py-24">

                {/* HERO */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                        About AS204604
                    </h1>

                    <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
                        AS204604 is a private autonomous system focused on routing, infrastructure,
                        and experimental networking. It provides a controlled environment for testing,
                        learning and operating real-world network technologies.
                    </p>
                </motion.div>

                {/* FEATURE CARDS */}
                <div className="grid md:grid-cols-3 gap-6">

                    {[
                        {
                            icon: Globe,
                            title: "Autonomous System",
                            desc: "Registered ASN providing BGP routing capabilities for real-world experiments and infrastructure."
                        },
                        {
                            icon: Server,
                            title: "Infrastructure",
                            desc: "Distributed servers and virtual systems powering services, monitoring and network tools."
                        },
                        {
                            icon: Activity,
                            title: "Projects & Learning",
                            desc: "Hands-on experimentation with routing protocols, peering strategies and network services."
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

                                    <Icon className="mb-4 text-purple-400" size={26} />

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

                {/* PHILOSOPHY */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-24 relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-white/5"
                >
                    <div className="rounded-2xl bg-[#111827] p-8">

                        <h2 className="text-xl font-semibold mb-4 text-white">
                            Our Philosophy
                        </h2>

                        <p className="text-gray-400 text-sm max-w-2xl">
                            We focus on experimentation, reliability and continuous learning.
                            AS204604 serves as a platform for building, testing and operating
                            network infrastructure in a controlled and responsible environment.
                        </p>

                    </div>
                </motion.div>

                {/* OPTIONAL EXTRA: STATS */}
                <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

                    {[
                        { label: "ASN", value: "204604" },
                        { label: "Protocols", value: "IPv4 / IPv6" },
                        { label: "Region", value: "EU" },
                        { label: "Status", value: "Operational" }
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-[#111827] border border-white/5 rounded-xl p-4"
                        >
                            <p className="text-gray-500 text-xs">{item.label}</p>
                            <p className="text-white font-semibold mt-1">{item.value}</p>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}