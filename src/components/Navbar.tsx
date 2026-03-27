"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Activity, Globe, Info, Scale, Shield, LayoutDashboard, User } from "lucide-react"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const publicLinks = [
    { name: "Home", href: "/", icon: Globe },
    { name: "BGP", href: "/bgp", icon: Activity },
    { name: "About", href: "/about", icon: Info },
    { name: "Legal", href: "/legal", icon: Scale },
    { name: "Kontakt", href: "/contact", icon: Info },
    { name: "Admin Login", href: "/login", icon: User },
]

const adminLinks = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Status", href: "/status", icon: Activity },
    { name: "v2", href: "/v2", icon: Shield },
]

export default function Navbar() {
    const pathname = usePathname()
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        fetch("/api/auth/me")
            .then(res => res.json())
            .then(data => setLoggedIn(data.loggedIn))
    }, [])

    const links = loggedIn
        ? [...publicLinks, ...adminLinks]
        : publicLinks

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

                {/* Navigation */}
                <nav className="flex items-center gap-1">

                    {links.map((link) => {
                        const Icon = link.icon
                        const active = pathname === link.href

                        return (
                            <Link key={link.href} href={link.href}>
                                <motion.div
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.96 }}
                                    className="relative"
                                >
                                    {active && (
                                        <div className="absolute inset-0 bg-purple-600/20 rounded-xl blur-md" />
                                    )}

                                    <div
                                        className={`
                      relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition
                      ${active
                                            ? "text-white bg-white/5 border border-white/10"
                                            : "text-gray-400 hover:text-white hover:bg-white/5"}
                    `}
                                    >
                                        <Icon size={16} />
                                        {link.name}
                                    </div>

                                </motion.div>
                            </Link>
                        )
                    })}

                    {/* Logout Button */}
                    {loggedIn && (
                        <button
                            onClick={async () => {
                                await fetch("/api/auth/logout", { method: "POST" })
                                window.location.href = "/login"
                            }}
                            className="ml-3 px-3 py-2 text-sm text-red-400 hover:text-white hover:bg-red-500/10 rounded-xl transition"
                        >
                            Logout
                        </button>
                    )}

                </nav>

            </div>
        </header>
    )
}