"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Activity, Network, Server, Globe } from "lucide-react"

import BgpFeed from "@/components/BGPFeed"
import SubnetCalculator from "@/components/SubnetCalculator"
import IPChecker from "@/components/IPChecker"

export default function Dashboard() {
    const [stats, setStats] = useState<any>()

    useEffect(() => {
        fetch("/api/stats")
            .then(r => r.json())
            .then(setStats)
    }, [])

    if (!stats) return null

    return (
        <div className="relative overflow-hidden min-h-screen">

            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F19] via-[#0f172a] to-[#020617]" />
            <div className="absolute w-[800px] h-[800px] bg-purple-600/20 blur-[140px] top-[-200px] left-1/2 -translate-x-1/2" />

            <main className="relative max-w-6xl mx-auto px-6 py-20 space-y-16">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                        Dashboard
                    </h1>

                    <p className="text-gray-400 mt-3">
                        Internal overview and network tools for AS204604.
                    </p>
                </motion.div>

                {/* Stats */}
                <div className="grid md:grid-cols-4 gap-6">
                    <Stat icon={Network} label="ASN" value={stats.asn} />
                    <Stat icon={Activity} label="Prefixes" value={stats.prefixes} />
                    <Stat icon={Server} label="Peers" value={stats.peers} />
                    <Stat icon={Globe} label="IPv4" value={stats.ipv4} />
                </div>

                {/* Sections */}
                <div className="space-y-12">

                    {/* BGP Feed */}
                    <Section title="Live BGP Feed">
                        <BgpFeed />
                    </Section>

                    {/* Tools */}
                    <div className="grid md:grid-cols-2 gap-6">

                        <Section title="Subnet Calculator">
                            <SubnetCalculator />
                        </Section>

                        <Section title="IP Checker">
                            <IPChecker />
                        </Section>

                    </div>

                </div>

            </main>
        </div>
    )
}

function Stat({ label, value, icon: Icon }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-white/5"
        >
            <div className="rounded-2xl bg-[#111827] p-6 hover:bg-[#0f172a] transition">

                <Icon className="mb-4 text-purple-400" size={22} />

                <p className="text-gray-400 text-sm">{label}</p>
                <p className="text-3xl font-bold text-white">{value}</p>

            </div>
        </motion.div>
    )
}

function Section({ title, children }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-white/5"
        >
            <div className="rounded-2xl bg-[#111827] p-6">

                <h2 className="text-lg font-semibold text-white mb-6">
                    {title}
                </h2>

                {children}

            </div>
        </motion.div>
    )
}