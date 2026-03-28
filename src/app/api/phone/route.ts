import { NextResponse } from "next/server"

export async function GET() {
    await new Promise(r => setTimeout(r, 1000 * 2))
    return NextResponse.json({
        phone: "+43 670 70 19622",
        message: "Here is the Number",
    })
}