"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Activity, Globe, Info, Scale } from "lucide-react"
import { usePathname } from "next/navigation"

const links = [
    { name: "Home", href: "/", icon: Globe },
    { name: "BGP", href: "/bgp", icon: Activity },
    { name: "About", href: "/about", icon: Info },
    { name: "Legal", href: "/legal", icon: Scale },
    { name: "Kontakt", href: "/contact", icon: Info },
]

export default function Navbar() {

    const pathname = usePathname()

    return (

        <header className="sticky top-0 z-50 backdrop-blur-lg bg-black/60 border-b border-zinc-800">

            <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">

                {/* Logo */}

                <motion.div
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    className="flex items-center gap-2 font-semibold text-lg"
                >

                    <Activity size={20} className="text-blue-400"/>

                    <Link href="/">
                        AS204604
                    </Link>

                </motion.div>

                {/* Navigation */}

                <nav className="flex items-center gap-2">

                    {links.map((link,i)=>{

                        const Icon = link.icon
                        const active = pathname === link.href

                        return (

                            <motion.div
                                key={link.href}
                                whileHover={{y:-2}}
                                whileTap={{scale:0.95}}
                            >

                                <Link
                                    href={link.href}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition
${active
                                        ? "bg-zinc-800 text-white"
                                        : "text-zinc-400 hover:text-white hover:bg-zinc-900"}
`}
                                >

                                    <Icon size={16}/>
                                    {link.name}

                                </Link>

                            </motion.div>

                        )

                    })}

                </nav>

            </div>

        </header>

    )

}