import { NextResponse } from "next/server"

export async function GET(){

    return NextResponse.json({

        asn: 204604,
        prefixes: 14,
        peers: 5,
        upstreams: 2,
        ipv4: 256,
        ipv6: 4096

    })

}