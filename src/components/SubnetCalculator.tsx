"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import ipaddr from "ipaddr.js" // npm install ipaddr.js

export default function SubnetCalculator() {
    const [input, setInput] = useState("")
    const [result, setResult] = useState<any>(null)
    const [error, setError] = useState("")

    const calculate = () => {
        try {
            setError("")
            let [ip, mask] = input.split("/")
            mask = parseInt(mask)
            if(!ipaddr.isValid(ip)) throw new Error("Invalid IP")

            const addr = ipaddr.parse(ip)
            if(addr.kind() === "ipv4") {
                const network = ipaddr.parse(ip).mask(mask)
                const broadcast = addr.range()[1] || "N/A"
                setResult({ network: network.toString(), mask, broadcast })
            } else {
                // IPv6
                setResult({ network: addr.toString(), mask, broadcast: "N/A" })
            }

        } catch(e:any){
            setError(e.message)
            setResult(null)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card p-6 space-y-4"
        >
            <h2 className="text-2xl font-semibold">Subnet Calculator</h2>

            <div className="flex gap-2">
                <input
                    type="text"
                    placeholder="Enter IP/Prefix (e.g., 192.168.0.0/24)"
                    className="flex-1 p-2 rounded bg-zinc-800"
                    value={input}
                    onChange={e=>setInput(e.target.value)}
                />
                <button onClick={calculate} className="btn-primary">
                    Calculate
                </button>
            </div>

            {error && <p className="text-red-400">{error}</p>}

            {result && (
                <div className="text-gray-300 space-y-1">
                    <p>Network: {result.network}</p>
                    <p>Mask: {result.mask}</p>
                    <p>Broadcast: {result.broadcast}</p>
                    <p className="flex items-center gap-1 text-green-400">
                        <CheckCircle size={16}/> Valid Subnet
                    </p>
                </div>
            )}
        </motion.div>
    )
}