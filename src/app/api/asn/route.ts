import { NextResponse } from "next/server"

export async function GET() {

    const stats = {
        asn: 204604,
        prefixes: 12,
        peers: 6,
        upstreams: 2,
        ipv4: 256,
        ipv6: 1024
    }

    return NextResponse.json(stats)
}