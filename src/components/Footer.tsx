"use client"

import { motion } from "framer-motion"
import { Github, Globe, Network } from "lucide-react"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="relative mt-24 border-t border-white/5 bg-[#0B0F19]">

            {/* Glow */}
            <div className="absolute w-[600px] h-[300px] bg-purple-600/10 blur-[120px] left-1/2 -translate-x-1/2 top-0" />

            <div className="relative max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 text-sm">

                {/* Brand */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 font-semibold text-lg mb-3"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-purple-500/30 blur-md rounded-full" />
                            <Network size={18} className="relative text-purple-400" />
                        </div>

                        <span className="text-white">AS204604</span>
                    </motion.div>

                    <p className="text-gray-400 max-w-sm">
                        Private autonomous system focused on routing, infrastructure and experimental networking.
                    </p>

                    {/* Social */}
                    <div className="flex gap-3 mt-4">
                        <a
                            href="#"
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
                        >
                            <Github size={16} />
                        </a>
                    </div>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="font-semibold mb-4 text-white">
                        Navigation
                    </h3>

                    <ul className="space-y-2 text-gray-400">
                        <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                        <li><Link href="/bgp" className="hover:text-white transition">BGP Stats</Link></li>
                        <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                        <li><Link href="/legal" className="hover:text-white transition">Legal</Link></li>
                    </ul>
                </div>

                {/* Network */}
                <div>
                    <h3 className="font-semibold mb-4 text-white">
                        Network
                    </h3>

                    <ul className="space-y-2 text-gray-400">
                        <li className="flex gap-2 items-center">
                            <Globe size={14} />
                            ASN: 204604
                        </li>

                        <li className="flex gap-2 items-center">
                            <Network size={14} />
                            EU Infrastructure
                        </li>

                        <li className="flex gap-2 items-center text-green-400">
                            ● Operational
                        </li>
                    </ul>
                </div>

            </div>

            {/* Bottom */}
            <div className="border-t border-white/5 text-center text-xs text-gray-500 py-4">
                © {new Date().getUTCFullYear()} AS204604 • Network Infrastructure
            </div>

        </footer>
    )
}