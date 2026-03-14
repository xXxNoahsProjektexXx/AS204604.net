"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function StatusPage(){

    const [servers,setServers] = useState<any[]>([])

    useEffect(()=>{

        fetch("/api/status")
            .then(r=>r.json())
            .then(setServers)

    },[])

    const statusColor = (status:string)=>{
        if(status==="online") return "bg-green-500/20 text-green-400 border-green-500/30"
        if(status==="maintenance") return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
        return "bg-red-500/20 text-red-400 border-red-500/30"
    }

    return(

        <main className="max-w-7xl mx-auto px-8 py-16">

            {/* Header */}
            <div className="mb-12">
                <h1 className="text-4xl font-bold text-white">
                    Network Status
                </h1>

                <p className="text-gray-400 mt-2">
                    Live infrastructure status for AS204604
                </p>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                {servers.length === 0 && (
                    <p className="text-gray-500">Loading servers...</p>
                )}

                {servers.map((s,i)=>(

                    <motion.div
                        key={i}
                        initial={{ opacity:0, y:20 }}
                        animate={{ opacity:1, y:0 }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ scale:1.03 }}
                        className="bg-zinc-900/70 backdrop-blur border border-zinc-800 p-6 rounded-xl shadow-lg hover:border-blue-500/40 transition"
                    >

                        {/* Server Name */}
                        <h2 className="text-xl font-semibold text-white">
                            {s.name}
                        </h2>

                        <p className="text-gray-400 text-sm mt-1">
                            {s.location}
                        </p>

                        {/* Status */}
                        <div className="mt-4 flex items-center gap-2">

                            <span className="text-sm text-gray-400">
                                Status
                            </span>

                            <span className={`text-xs px-2 py-1 rounded-md border ${statusColor(s.status)}`}>
                                {s.status}
                            </span>

                        </div>

                        {/* Load */}
                        <div className="mt-5">

                            <div className="flex justify-between text-sm text-gray-400 mb-1">
                                <span>Load</span>
                                <span>{s.load}%</span>
                            </div>

                            <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">

                                <motion.div
                                    initial={{ width:0 }}
                                    animate={{ width:`${s.load}%` }}
                                    transition={{ duration:0.8 }}
                                    className="h-full bg-blue-500"
                                />

                            </div>

                        </div>

                    </motion.div>

                ))}

            </div>

        </main>

    )
}