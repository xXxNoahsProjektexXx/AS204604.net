"use client";

import { motion } from "framer-motion"
import { Server, Globe, ShieldCheck, Cpu } from "lucide-react"

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col">

            {/* Hero */}
            <section className="flex flex-col items-center justify-center text-center py-40 px-6">

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-6xl font-bold"
                >
                    AS204604
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-400 mt-6 max-w-xl"
                >
                    Independent Autonomous System providing modern network
                    infrastructure, VPS hosting and backbone connectivity.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-10 flex gap-4"
                >
                    <button className="bg-white text-black px-6 py-3 rounded-xl">
                        Network Details
                    </button>

                    <button className="border border-white px-6 py-3 rounded-xl">
                        Contact
                    </button>
                </motion.div>

            </section>

            {/* Features */}

            <section className="grid md:grid-cols-4 gap-10 px-10 pb-40">

                <Feature
                    icon={<Globe size={32}/>}
                    title="Global Routing"
                    text="Connected to multiple upstream providers and IXPs."
                />

                <Feature
                    icon={<Server size={32}/>}
                    title="Infrastructure"
                    text="Modern virtual infrastructure and dedicated hardware."
                />

                <Feature
                    icon={<ShieldCheck size={32}/>}
                    title="Security"
                    text="RPKI, filtering and modern network security."
                />

                <Feature
                    icon={<Cpu size={32}/>}
                    title="Performance"
                    text="Optimized routing and low latency connectivity."
                />

            </section>

        </main>
    )
}

function Feature({ icon, title, text }:{
    icon: React.ReactNode
    title: string
    text: string
}) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800"
        >
            <div className="mb-4 text-blue-400">
                {icon}
            </div>

            <h3 className="text-xl font-semibold">
                {title}
            </h3>

            <p className="text-gray-400 mt-2">
                {text}
            </p>

        </motion.div>
    )
}