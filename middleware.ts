import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Routen die geschützt werden sollen
const PROTECTED_ROUTES = ["/bgp/info", "/status", "/v2"];

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Prüfen ob die aktuelle Route geschützt ist
    const isProtected = PROTECTED_ROUTES.some(
        (route) => pathname === route || pathname.startsWith(route + "/")
    );

    if (!isProtected) {
        return NextResponse.next();
    }

    // Auth-Cookie auslesen
    const authCookie = request.cookies.get("auth");

    // Kein Cookie vorhanden → weiterleiten zu /login
    if (!authCookie || !authCookie.value) {
        const loginUrl = new URL("/login", request.url);

        // Optional: ursprüngliche URL als redirect-Parameter mitgeben
        loginUrl.searchParams.set("redirect", pathname);

        return NextResponse.redirect(loginUrl);
    }

    // Cookie vorhanden → Zugriff erlauben
    return NextResponse.next();
}

export const config = {
    matcher: [
        "/bgp/info",
        "/bgp/info/:path*",
        "/status",
        "/status/:path*",
        "/v2",
        "/v2/:path*",
        "/dashboard/:path*",
        "/privacy",
    ],
};