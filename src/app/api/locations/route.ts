import { NextResponse } from "next/server";

const locations = [
    { name: "Vienna", ip: "google.at" },
    { name: "Frankfurt", ip: "8.8.8.8" },
    { name: "Amsterdam", ip: "1.0.0.1" },
    { name: "New York", ip: "8.8.4.4" },
];

async function checkHost(ip: string) {
    try {
        const res = await fetch(`https://api.microlink.io/?url=${ip}`, {
            method: "GET",
        });
        return res.ok;
    } catch {
        return false;
    }
}

export async function GET() {
    const results = await Promise.all(
        locations.map(async (loc) => ({
            name: loc.name,
            online: await checkHost(loc.ip),
        }))
    );

    return NextResponse.json(results);
}