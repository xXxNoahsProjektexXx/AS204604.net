"use client"

import { useEffect, useState } from "react"
import BgpFeed from "@/components/BGPFeed"
import SubnetCalculator from "@/components/SubnetCalculator"
import IPChecker from "@/components/IPChecker"

export default function Dashboard() {
    const [stats,setStats] = useState<any>()

    useEffect(()=>{
        fetch("/api/stats")
            .then(r=>r.json())
            .then(setStats)
    },[])

    if(!stats) return null

    return (
        <main className="p-16 space-y-12">
            <h1 className="text-4xl font-bold">AS204604 Dashboard</h1>

            <div className="grid md:grid-cols-4 gap-6">
                <Stat label="ASN" value={stats.asn}/>
                <Stat label="Prefixes" value={stats.prefixes}/>
                <Stat label="Peers" value={stats.peers}/>
                <Stat label="IPv4" value={stats.ipv4}/>
            </div>

            {/* BGP Feed */}
            <BgpFeed />

            {/* Subnet Calculator */}
            <SubnetCalculator />

            {/* IP Checker */}
            <IPChecker />
        </main>
    )
}

function Stat({label,value}:any){
    return (
        <div className="card p-6">
            <p className="text-gray-400">{label}</p>
            <p className="text-3xl font-bold">{value}</p>
        </div>
    )
}