"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import ipaddr from "ipaddr.js"
import { CheckCircle, XCircle } from "lucide-react"

export default function IPChecker() {
    const [ip, setIP] = useState("")
    const [valid, setValid] = useState<boolean|null>(null)

    const checkIP = () => {
        if(ipaddr.isValid(ip)) setValid(true)
        else setValid(false)
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card p-6 space-y-4"
        >
            <h2 className="text-2xl font-semibold">IPv4 / IPv6 Checker</h2>

            <div className="flex gap-2">
                <input
                    type="text"
                    placeholder="Enter IP"
                    className="flex-1 p-2 rounded bg-zinc-800"
                    value={ip}
                    onChange={e=>setIP(e.target.value)}
                />
                <button onClick={checkIP} className="btn-primary">
                    Check
                </button>
            </div>

            {valid !== null && (
                <p className={`flex items-center gap-2 ${
                    valid ? "text-green-400" : "text-red-400"
                }`}>
                    {valid ? <CheckCircle size={16}/> : <XCircle size={16}/>}
                    {valid ? `${ip} is valid` : `${ip} is invalid`}
                </p>
            )}
        </motion.div>
    )
}