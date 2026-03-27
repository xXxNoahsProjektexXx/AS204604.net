import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
    const cookieStore = await cookies();
    const auth = cookieStore.get("auth");

    return NextResponse.json({
        loggedIn: auth?.value === "admin",
    });
}