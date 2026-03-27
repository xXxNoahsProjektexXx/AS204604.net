"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import ipaddr from "ipaddr.js"

export default function SubnetCalculator() {
    const [input, setInput] = useState("")
    const [result, setResult] = useState<any>(null)
    const [error, setError] = useState("")

    const calculate = () => {
        try {
            setError("")
            setResult(null)

            const [ip, maskRaw] = input.split("/")
            const mask = parseInt(maskRaw)

            if (!ipaddr.isValid(ip)) throw new Error("Invalid IP")

            const addr = ipaddr.parse(ip)

            if (addr.kind() === "ipv4") {
                const ipParts = ip.split(".").map(Number)

                const maskBits = 32 - mask
                const hosts = Math.pow(2, maskBits)

                const ipInt =
                    (ipParts[0] << 24) |
                    (ipParts[1] << 16) |
                    (ipParts[2] << 8) |
                    ipParts[3]

                const networkInt = ipInt & (~((1 << maskBits) - 1))
                const broadcastInt = networkInt + hosts - 1

                const toIP = (num: number) =>
                    [
                        (num >>> 24) & 255,
                        (num >>> 16) & 255,
                        (num >>> 8) & 255,
                        num & 255,
                    ].join(".")

                setResult({
                    network: toIP(networkInt),
                    mask,
                    broadcast: toIP(broadcastInt),
                    hosts,
                })
            } else {
                setResult({
                    network: addr.toString(),
                    mask,
                    broadcast: "N/A",
                    hosts: "N/A",
                })
            }

        } catch (e: any) {
            setError(e.message)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-white/5"
        >
            <div className="rounded-2xl bg-[#111827] p-6 space-y-5">

                <h2 className="text-lg font-semibold text-white">
                    Subnet Calculator
                </h2>

                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="192.168.0.0/24"
                        className="flex-1 px-4 py-2 rounded-xl bg-[#0f172a] border border-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    />

                    <button
                        onClick={calculate}
                        className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 transition text-white text-sm"
                    >
                        Calculate
                    </button>
                </div>

                {error && (
                    <p className="text-red-400 text-sm">{error}</p>
                )}

                {result && (
                    <div className="text-sm text-gray-300 space-y-2">

                        <div className="flex justify-between">
                            <span className="text-gray-500">Network</span>
                            <span className="text-white">{result.network}</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-gray-500">Mask</span>
                            <span className="text-white">/{result.mask}</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-gray-500">Broadcast</span>
                            <span className="text-white">{result.broadcast}</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-gray-500">Hosts</span>
                            <span className="text-white">{result.hosts}</span>
                        </div>

                        <div className="flex items-center gap-2 text-green-400 mt-3">
                            <CheckCircle size={16} />
                            Valid Subnet
                        </div>

                    </div>
                )}

            </div>
        </motion.div>
    )
}