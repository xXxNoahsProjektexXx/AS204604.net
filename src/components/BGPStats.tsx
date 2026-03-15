"use client"

import { useEffect, useState } from "react"

export default function BGPStats(){

    const [data,setData] = useState<any>(null)

    useEffect(()=>{

        fetch("/api/bgp/announced-prefixes")
            .then(res=>res.json())
            .then(setData)

    },[])

    if(!data) return <p>Loading prefixes...</p>

    return(

        <div className="border border-zinc-800 rounded-xl p-6">

            <h2 className="text-lg font-semibold mb-4">
                Announced Prefixes
            </h2>

            <p className="text-zinc-400 mb-4">
                Total Prefixes: {data.count}
            </p>

            <ul className="space-y-2">

                {data.prefixes.map((p:any)=>(
                    <li key={p.prefix} className="font-mono text-sm">
                        {p.prefix}
                    </li>
                ))}

            </ul>

        </div>

    )

}