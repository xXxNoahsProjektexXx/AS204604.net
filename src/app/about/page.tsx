"use client"

import { motion } from "framer-motion"
import { Activity, Server, Globe } from "lucide-react"

export default function AboutPage(){

    return(

        <div className="max-w-5xl mx-auto px-6 py-16">

            {/* Hero Section */}

            <motion.div
                initial={{opacity:0,y:20}}
                animate={{opacity:1,y:0}}
                className="text-center mb-12"
            >

                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    About AS204604
                </h1>

                <p className="text-zinc-400 max-w-2xl mx-auto">
                    AS204604 is a private autonomous system designed for networking experiments,
                    infrastructure projects, routing studies, and services for friends and collaborators.
                    Our goal is to provide a safe environment for learning and testing advanced
                    network technologies.
                </p>

            </motion.div>

            {/* Feature Cards */}

            <div className="grid md:grid-cols-3 gap-6">

                {/* ASN / BGP */}
                <div className="border border-zinc-800 rounded-xl p-6 hover:bg-zinc-900 transition">

                    <Globe className="mb-4 text-blue-400"/>

                    <h2 className="font-semibold mb-2">
                        Autonomous System
                    </h2>

                    <p className="text-sm text-zinc-400">
                        AS204604 is a fully registered ASN providing BGP routing capabilities for
                        our network experiments and infrastructure.
                    </p>

                </div>

                {/* Infrastructure */}
                <div className="border border-zinc-800 rounded-xl p-6 hover:bg-zinc-900 transition">

                    <Server className="mb-4 text-blue-400"/>

                    <h2 className="font-semibold mb-2">
                        Infrastructure
                    </h2>

                    <p className="text-sm text-zinc-400">
                        Private servers, virtual instances, and experimental services powering our
                        network and projects.
                    </p>

                </div>

                {/* Projects / Learning */}
                <div className="border border-zinc-800 rounded-xl p-6 hover:bg-zinc-900 transition">

                    <Activity className="mb-4 text-blue-400"/>

                    <h2 className="font-semibold mb-2">
                        Projects & Learning
                    </h2>

                    <p className="text-sm text-zinc-400">
                        We focus on learning, testing routing protocols, peering strategies, and
                        network services in a private and safe environment.
                    </p>

                </div>

            </div>

            {/* Optional Extra Section */}

            <motion.div
                initial={{opacity:0,y:20}}
                animate={{opacity:1,y:0}}
                className="mt-16 border border-zinc-800 rounded-xl p-8"
            >

                <h2 className="text-xl font-semibold mb-4">
                    Our Philosophy
                </h2>

                <p className="text-zinc-400 text-sm">
                    We value experimentation, privacy, and learning. AS204604 provides a platform
                    for private network management, routing experiments, and collaborative projects.
                    All activities are conducted responsibly within the private network infrastructure.
                </p>

            </motion.div>

        </div>

    )

}