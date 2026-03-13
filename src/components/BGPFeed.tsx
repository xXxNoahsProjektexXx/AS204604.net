"use client"

import { useEffect,useState } from "react"

export default function BgpFeed(){

    const [routes,setRoutes] = useState<any[]>([])

    async function load(){

        const res = await fetch("/api/bgp")
        const data = await res.json()

        setRoutes(data)

    }

    useEffect(()=>{

        load()

        const i = setInterval(load,10000)

        return ()=>clearInterval(i)

    },[])

    return(

        <div className="card p-6">

            <h2 className="text-xl mb-4">
                Live BGP Prefixes
            </h2>

            <div className="space-y-2 text-sm">

                {routes.map((r,i)=>(
                    <div key={i}
                         className="flex justify-between border-b border-zinc-800 pb-1"
                    >

                        <span>{r.prefix}</span>
                        <span className="text-gray-400">
              seen {r.timeseen}
            </span>

                    </div>
                ))}

            </div>

        </div>

    )
}