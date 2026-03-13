"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Network, Server, Share2, Globe } from "lucide-react"

export default function Dashboard(){

    const [stats,setStats] = useState<any>()

    useEffect(()=>{

        fetch("/api/asn")
            .then(r=>r.json())
            .then(setStats)

    },[])

    if(!stats) return null

    return(

        <main className="p-20">

            <h1 className="text-4xl font-bold mb-10">
                ASN Statistics
            </h1>

            <div className="grid md:grid-cols-4 gap-6">

                <Card icon={<Network/>} label="ASN" value={stats.asn}/>
                <Card icon={<Server/>} label="Prefixes" value={stats.prefixes}/>
                <Card icon={<Share2/>} label="Peers" value={stats.peers}/>
                <Card icon={<Globe/>} label="IPv4 Addresses" value={stats.ipv4}/>

            </div>

        </main>

    )
}

function Card({icon,label,value}:any){

    return(

        <motion.div
            whileHover={{ scale:1.05 }}
            className="bg-zinc-900 p-6 rounded-xl border border-zinc-800"
        >

            <div className="text-blue-400 mb-2">
                {icon}
            </div>

            <h2 className="text-lg">
                {label}
            </h2>

            <p className="text-3xl font-bold">
                {value}
            </p>

        </motion.div>

    )

}