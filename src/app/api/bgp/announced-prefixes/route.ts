import { NextResponse } from "next/server"

export async function GET() {

    try {

        const res = await fetch(
            "https://stat.ripe.net/data/announced-prefixes/data.json?resource=AS204604",
            {
                headers: {
                    "Accept": "application/json"
                },
                cache: "no-store"
            }
        )

        if (!res.ok) {
            throw new Error("RIPE API error")
        }

        const data = await res.json()

        return NextResponse.json({
            prefixes: data.data.prefixes,
            asn: data.data.resource,
            count: data.data.prefixes.length
        })

    } catch (error) {

        return NextResponse.json(
            { error: "Failed to fetch BGP prefixes" },
            { status: 500 }
        )

    }

}