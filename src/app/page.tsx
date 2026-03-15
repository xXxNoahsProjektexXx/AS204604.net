"use client"

import { motion } from "framer-motion"
import { Network, Server, Activity, Globe } from "lucide-react"

export default function Home(){

    return(

        <div className="max-w-6xl mx-auto px-6 py-20">

            {/* Hero */}

            <motion.div
                initial={{opacity:0,y:20}}
                animate={{opacity:1,y:0}}
                className="text-center mb-20"
            >

                <h1 className="text-4xl md:text-5xl font-bold mb-6">

                    AS204604 Network

                </h1>

                <p className="text-zinc-400 max-w-xl mx-auto">

                    Private autonomous system used for networking
                    experiments, infrastructure and services.

                </p>

            </motion.div>

            {/* Cards */}

            <div className="grid md:grid-cols-3 gap-6">

                <div className="border border-zinc-800 rounded-xl p-6 hover:bg-zinc-900 transition">

                    <Network className="mb-4 text-blue-400"/>

                    <h2 className="font-semibold mb-2">
                        Autonomous System
                    </h2>

                    <p className="text-sm text-zinc-400">

                        Public ASN for BGP routing experiments
                        and infrastructure learning.

                    </p>

                </div>

                <div className="border border-zinc-800 rounded-xl p-6 hover:bg-zinc-900 transition">

                    <Server className="mb-4 text-blue-400"/>

                    <h2 className="font-semibold mb-2">
                        Infrastructure
                    </h2>

                    <p className="text-sm text-zinc-400">

                        Private servers hosting services and
                        networking tools.

                    </p>

                </div>

                <div className="border border-zinc-800 rounded-xl p-6 hover:bg-zinc-900 transition">

                    <Activity className="mb-4 text-blue-400"/>

                    <h2 className="font-semibold mb-2">
                        BGP Statistics
                    </h2>

                    <p className="text-sm text-zinc-400">

                        View routing information,
                        prefix announcements and peers.

                    </p>

                </div>

            </div>

            {/* Network Info */}

            <div className="mt-20 border border-zinc-800 rounded-xl p-8">

                <h2 className="text-xl font-semibold mb-6">

                    Network Overview

                </h2>

                <div className="grid md:grid-cols-3 gap-6 text-sm">

                    <div>

                        <p className="text-zinc-500">ASN</p>
                        <p className="text-lg font-semibold">204604</p>

                    </div>

                    <div>

                        <p className="text-zinc-500">Routing</p>
                        <p className="text-lg font-semibold">IPv4 / IPv6</p>

                    </div>

                    <div>

                        <p className="text-zinc-500">Location</p>
                        <p className="text-lg font-semibold">Europe</p>

                    </div>

                </div>

            </div>

        </div>

    )

}