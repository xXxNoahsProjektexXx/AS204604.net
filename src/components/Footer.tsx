"use client"

import { motion } from "framer-motion"
import { Github, Globe, Network } from "lucide-react"
import Link from "next/link"

export default function Footer(){

    return(

        <footer className="border-t border-zinc-800 mt-20">

            <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-sm">

                {/* Brand */}

                <div>

                    <motion.div
                        initial={{opacity:0,y:10}}
                        animate={{opacity:1,y:0}}
                        className="flex items-center gap-2 font-semibold text-lg mb-2"
                    >

                        <Network size={18} className="text-blue-400"/>

                        AS204604

                    </motion.div>

                    <p className="text-zinc-400">
                        Private networking infrastructure for friends,
                        services and routing experiments.
                    </p>

                </div>

                {/* Navigation */}

                <div>

                    <h3 className="font-semibold mb-3">
                        Navigation
                    </h3>

                    <ul className="space-y-2 text-zinc-400">

                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/bgp">BGP Stats</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/legal">Legal</Link></li>

                    </ul>

                </div>

                {/* Network */}

                <div>

                    <h3 className="font-semibold mb-3">
                        Network
                    </h3>

                    <ul className="space-y-2 text-zinc-400">

                        <li className="flex gap-2 items-center">
                            <Globe size={14}/>
                            ASN: 204604
                        </li>

                        <li className="flex gap-2 items-center">
                            <Github size={14}/>
                            Infrastructure Projects
                        </li>

                    </ul>

                </div>

            </div>

            <div className="border-t border-zinc-800 text-center text-xs text-zinc-500 py-4">

                © {new Date().getFullYear()} AS204604 • Private Network Infrastructure

            </div>

        </footer>

    )

}