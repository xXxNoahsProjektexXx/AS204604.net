import { NextResponse } from "next/server";

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

export async function POST(req: Request) {

    try {

        const { name, email, message } = await req.json();

        if(!DISCORD_WEBHOOK_URL) {
            return NextResponse.json({ error: "Contact Form is not configured!"}, { status: 500 })
        }

        const payload = {
            username: "AS204604.net -- Contact Form",
            embeds: [
                {
                    title: `New Message from ${name}`,
                    color: 3447003, // blue
                    fields: [
                        { name: "Name", value: name, inline: true },
                        { name: "E-Mail", value: email, inline: true },
                        { name: "Message", value: message, inline: false },
                    ],
                    timestamp: new Date().toISOString()
                }
            ]
        }

        await fetch(DISCORD_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        })

        return NextResponse.json({ status: "success", message: "Contact has been received" }, { status: 200 })
    } catch(error) {
        console.error(error)
        return NextResponse.json({ status: "error", error: error }, { status: 500 })
    }
}