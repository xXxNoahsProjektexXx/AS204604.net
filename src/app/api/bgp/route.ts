import { NextResponse } from "next/server"

export async function GET(){

    const res = await fetch(
        "https://stat.ripe.net/data/announced-prefixes/data.json?resource=AS204604"
    )

    const data = await res.json()

    const prefixes =
        data.data.prefixes.map((p:any)=>({
            prefix:p.prefix,
            timeseen:p.timeseen
        }))

    const bgpData = data.messages

    return NextResponse.json(bgpData)

}