"use client"

import { motion } from "framer-motion"
import { Network, Activity, Globe, Server } from "lucide-react"
import BGPStats from "@/components/BGPStats"
import Locations from "@/components/Locations"

export default function BGPPage() {
    return (
        <div className="relative overflow-hidden min-h-screen">

            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F19] via-[#0f172a] to-[#020617]" />
            <div className="absolute w-[800px] h-[800px] bg-purple-600/20 blur-[140px] top-[-200px] left-1/2 -translate-x-1/2" />

            <main className="relative max-w-6xl mx-auto px-6 py-20 space-y-16">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                        BGP Network Overview
                    </h1>

                    <p className="text-gray-400 mt-3 max-w-xl">
                        Real-time insights into AS204604 routing, prefixes and infrastructure.
                    </p>
                </motion.div>

                {/* STATS */}
                <div className="grid md:grid-cols-4 gap-6">
                    <Stat icon={Network} label="ASN" value="204604" />
                    <Stat icon={Activity} label="Prefixes" value="Loading..." />
                    <Stat icon={Server} label="Peers" value="Active" />
                    <Stat icon={Globe} label="Routing" value="IPv4 / IPv6" />
                </div>

                {/* BGP DATA */}
                <div className="grid md:grid-cols-2 gap-6">

                    {/* Prefix List */}
                    <BGPStats />

                    {/* INFO PANEL */}
                    <Section title="Network Details">

                        <InfoRow label="ASN" value="AS204604" />
                        <InfoRow label="Registry" value="RIPE NCC" />
                        <InfoRow label="Region" value="Europe" />
                        <InfoRow label="Policy" value="Open Peering" />
                        <InfoRow label="Status" value="Operational" highlight />

                    </Section>

                </div>

                {/* PEERING / LOCATIONS */}
                <Section title="Locations">

                    <Locations />

                </Section>

            </main>
        </div>
    )
}

function Stat({ icon: Icon, label, value }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-white/5"
        >
            <div className="rounded-2xl bg-[#111827] p-6">

                <Icon className="mb-3 text-purple-400" size={22} />

                <p className="text-gray-400 text-sm">{label}</p>
                <p className="text-xl font-semibold text-white">{value}</p>

            </div>
        </motion.div>
    )
}

function Section({ title, children }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
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

function InfoRow({ label, value, highlight }: any) {
    return (
        <div className="flex justify-between items-center py-2 border-b border-white/5 last:border-none">
            <span className="text-gray-500 text-sm">{label}</span>
            <span className={`text-sm font-medium ${
                highlight ? "text-green-400" : "text-white"
            }`}>
                {value}
            </span>
        </div>
    )
}