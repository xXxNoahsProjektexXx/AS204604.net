import { NextResponse } from "next/server"

export async function GET() {

    const servers = [
        {
            name: "core-router-1",
            location: "Vienna",
            status: "online",
            load: 23
        },
        {
            name: "vps-node-1",
            location: "Frankfurt",
            status: "online",
            load: 61
        },
        {
            name: "storage-node-1",
            location: "Amsterdam",
            status: "maintenance",
            load: 0
        }
    ]

    return NextResponse.json(servers)
}