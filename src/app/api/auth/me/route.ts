// /app/api/me/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
    const auth = (await cookies()).get("auth");

    if (auth?.value === "admin") {
        return NextResponse.json({ loggedIn: true });
    }

    return NextResponse.json({ loggedIn: false });
}