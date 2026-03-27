"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Activity, Globe, Info, Scale, Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { useState } from "react"

const links = [
    { name: "Home", href: "/", icon: Globe },
    { name: "BGP", href: "/bgp", icon: Activity },
    { name: "About", href: "/about", icon: Info },
    { name: "Legal", href: "/legal", icon: Scale },
    { name: "Kontakt", href: "/contact", icon: Info },
]

export default function Navbar() {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0B0F19]/70 backdrop-blur-xl">

            <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="relative">
                        <div className="absolute inset-0 bg-purple-500/30 blur-md rounded-full" />
                        <Activity size={20} className="relative text-purple-400" />
                    </div>

                    <span className="font-semibold text-white tracking-tight">
                        AS204604
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {links.map((link) => {
                        const Icon = link.icon
                        const active = pathname === link.href

                        return (
                            <Link key={link.href} href={link.href}>
                                <div
                                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition ${
                                        active
                                            ? "text-white bg-white/5 border border-white/10"
                                            : "text-gray-400 hover:text-white hover:bg-white/5"
                                    }`}
                                >
                                    <Icon size={16} />
                                    {link.name}
                                </div>
                            </Link>
                        )
                    })}
                </nav>

                {/* Mobile Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-white"
                >
                    {open ? <X /> : <Menu />}
                </button>

            </div>

            {/* Mobile Menu */}
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden px-6 pb-6"
                >
                    <div className="flex flex-col gap-2 mt-4">

                        {links.map((link) => {
                            const Icon = link.icon

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#111827] text-white hover:bg-[#0f172a] transition"
                                >
                                    <Icon size={16} />
                                    {link.name}
                                </Link>
                            )
                        })}

                    </div>
                </motion.div>
            )}

        </header>
    )
}