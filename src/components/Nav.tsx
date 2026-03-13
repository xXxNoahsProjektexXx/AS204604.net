"use client"
import Link from "next/link"
import { Home, Globe, Activity, FileText } from "lucide-react"

export default function Nav() {
    return (
        <nav className="flex justify-between items-center px-10 py-4 border-b border-zinc-800 sticky top-0 bg-black/80 backdrop-blur-md z-50">

            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                <Home size={24} /> AS204604
            </Link>

            <div className="flex gap-6">
                <Link href="/dashboard" className="hover:text-blue-400 flex items-center gap-1">
                    <Globe size={18} /> Dashboard
                </Link>
                <Link href="/status" className="hover:text-blue-400 flex items-center gap-1">
                    <Activity size={18} /> Status
                </Link>
                <Link href="/legal" className="hover:text-blue-400 flex items-center gap-1">
                    <FileText size={18} /> Legal
                </Link>
            </div>
        </nav>
    )
}