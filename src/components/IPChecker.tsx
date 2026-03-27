"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ipaddr from "ipaddr.js"
import { CheckCircle, XCircle } from "lucide-react"

export default function IPChecker() {
    const [ip, setIP] = useState("")
    const [valid, setValid] = useState<boolean | null>(null)

    const checkIP = () => {
        if (ipaddr.isValid(ip)) setValid(true)
        else setValid(false)
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-white/5"
        >
            <div className="rounded-2xl bg-[#111827] p-6 space-y-5">

                <h2 className="text-lg font-semibold text-white">
                    IPv4 / IPv6 Checker
                </h2>

                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Enter IP Address"
                        className="flex-1 px-4 py-2 rounded-xl bg-[#0f172a] border border-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50"
                        value={ip}
                        onChange={e => setIP(e.target.value)}
                    />

                    <button
                        onClick={checkIP}
                        className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 transition text-white text-sm"
                    >
                        Check
                    </button>
                </div>

                {valid !== null && (
                    <div
                        className={`flex items-center gap-2 text-sm ${
                            valid ? "text-green-400" : "text-red-400"
                        }`}
                    >
                        {valid ? <CheckCircle size={16} /> : <XCircle size={16} />}
                        {valid
                            ? `${ip} is valid`
                            : `${ip} is invalid`}
                    </div>
                )}

            </div>
        </motion.div>
    )
}