import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"

export async function POST(req: Request) {

    const { username, password } = await req.json()

    if (
        username === process.env.ADMIN_USER &&
        password === process.env.ADMIN_PASS
    ) {

        const token = jwt.sign(
            { user: username },
            process.env.NEXTAUTH_SECRET!,
            { expiresIn: "1d" }
        )

        return NextResponse.json({ token })
    }

    return NextResponse.json(
        { error: "invalid credentials" },
        { status: 401 }
    )
}