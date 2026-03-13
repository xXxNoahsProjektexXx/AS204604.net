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

    return(

        <main className="p-20">

            <h1 className="text-4xl font-bold mb-10">
                Server Status
            </h1>

            <div className="grid md:grid-cols-3 gap-6">

                {servers.map((s,i)=>(

                    <motion.div
                        key={i}
                        whileHover={{ scale:1.05 }}
                        className="bg-zinc-900 p-6 rounded-xl border border-zinc-800"
                    >

                        <h2 className="text-xl font-semibold">
                            {s.name}
                        </h2>

                        <p className="text-gray-400">
                            {s.location}
                        </p>

                        <div className="mt-4">

                            Status:
                            <span className={`ml-2 ${
                                s.status==="online" ? "text-green-400" :
                                    s.status==="maintenance" ? "text-yellow-400" :
                                        "text-red-400"
                            }`}>
                {s.status}
              </span>

                        </div>

                        <p className="mt-2 text-sm text-gray-500">
                            Load: {s.load}%
                        </p>

                    </motion.div>

                ))}

            </div>

        </main>

    )
}