import { NextRequest, NextResponse } from "next/server"

// Routen, die geschützt werden sollen
const protectedRoutes = ["/admin", "/status"]

export function middleware(req: NextRequest) {

    const { pathname } = req.nextUrl

    // nur geschützte Routen prüfen
    if (protectedRoutes.some(route => pathname.startsWith(route))) {

        const authCookie = req.cookies.get("auth")?.value

        if (!authCookie || authCookie !== "admin") {
            // Weiterleitung auf Login
            const loginUrl = req.nextUrl.clone()
            loginUrl.pathname = "/login"
            return NextResponse.redirect(loginUrl)
        }

    }

    return NextResponse.next()
}

// nur auf diese Pfade anwenden
export const config = {
    matcher: ["/admin/:path*", "/status/:path*"]
}