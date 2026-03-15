"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Globe, Activity, FileText } from "lucide-react"
import { motion } from "framer-motion"

export default function Nav() {
    const pathname = usePathname()

    const links = [
        { href: "/bgp", label: "BGP Infos", icon: Globe },
        { href: "/status", label: "Status", icon: Activity },
        { href: "/privacy", label: "Privacy / Datenschutz", icon: FileText }
    ]

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/70 border-b border-zinc-800">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-8 py-4">

                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2 font-semibold text-lg text-white hover:text-blue-400 transition"
                >
                    <Home size={22} />
                    AS204604
                </Link>

                {/* Navigation */}
                <div className="flex items-center gap-2 bg-zinc-900/60 p-1 rounded-xl border border-zinc-800">

                    {links.map((link) => {
                        const Icon = link.icon
                        const active = pathname.startsWith(link.href)

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="relative px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium"
                            >
                                {active && (
                                    <motion.div
                                        layoutId="navbar-active"
                                        className="absolute inset-0 bg-blue-500/15 border border-blue-400/40 rounded-lg"
                                        transition={{ type: "spring", duration: 0.5 }}
                                    />
                                )}

                                <Icon
                                    size={16}
                                    className={`relative ${
                                        active ? "text-blue-400" : "text-gray-400"
                                    }`}
                                />

                                <span
                                    className={`relative ${
                                        active
                                            ? "text-white"
                                            : "text-gray-400 hover:text-gray-200"
                                    }`}
                                >
                                    {link.label}
                                </span>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}