import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
    const { username, password } = await req.json();

    if (
        username === process.env.ADMIN_USER &&
        password === process.env.ADMIN_PASS
    ) {
        const cookieStore = await cookies();

        cookieStore.set({
            name: "auth",
            value: "admin",
            httpOnly: true,
            path: "/",
            sameSite: "lax", // 🔥 wichtig
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24, // 1 Tag
        });

        return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false }, { status: 401 });
}