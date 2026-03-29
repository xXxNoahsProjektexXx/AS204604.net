import { NextResponse } from "next/server";
import {prisma} from "@/lib/prisma";

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        // ❗ Validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "All fields are required." },
                { status: 400 }
            );
        }

        if (message.length > 1000) {
            return NextResponse.json(
                {
                    error:
                        "Message too long. Please use less than 1000 characters.",
                },
                { status: 400 }
            );
        }

        const contact = await prisma.contact.create({
            data: {
                name,
                email,
                message,
            },
        });

        if (!DISCORD_WEBHOOK_URL) {
            return NextResponse.json(
                { error: "Contact Form is not configured!" },
                { status: 500 }
            );
        }

        const payload = {
            username: "AS204604 • NOC",
            avatar_url: "https://cdn-icons-png.flaticon.com/512/906/906334.png",

            content: "<@1408739495662190694>",

            embeds: [
                {
                    title: "📩 New Contact Request",
                    description: `New message received via **AS204604 Contact Form**\ngo to [login](https://as204604.net/dashboard)`,
                    color: 0x7c3aed,

                    /*fields: [
                        {
                            name: "👤 Name",
                            value: `\`${name}\``,
                            inline: true,
                        },
                        {
                            name: "📧 Email",
                            value: `\`${email}\``,
                            inline: true,
                        },
                        {
                            name: "💬 Message",
                            value: message,
                            inline: false,
                        },
                    ],*/

                    footer: {
                        text: "AS204604 Network • Contact System",
                    },

                    timestamp: new Date().toISOString(),
                },
            ],
        };

        await fetch(DISCORD_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        return NextResponse.json(
            { status: "success", message: "Contact has been received" },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { status: "error", error: "Internal Server Error" },
            { status: 500 }
        );
    }
}