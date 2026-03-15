import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {

    const { username, password } = await req.json();

    if(username === "admin" && password === "Admin123") {
        // Set Cookie
        const cookieStore = await cookies()
        cookieStore.set({
            name:"auth",
            value:"admin",
            httpOnly:true,
            path:"/",
            sameSite:"strict",
            secure:process.env.NODE_ENV==="production"
        })

        return NextResponse.json({ success: true })
    }

    return NextResponse.json({ success: false }, { status: 401 })
}