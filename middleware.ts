import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const auth = req.cookies.get("auth");
    const { pathname } = req.nextUrl;

    const protectedPaths = [
        "/status",
        "/v2",
        "/dashboard",
        "/bgp"
    ];

    const isProtected = protectedPaths.some(path =>
        pathname.startsWith(path)
    );

    // 🔒 Schutz
    if (isProtected && auth?.value !== "admin") {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    // 🔁 Wenn eingeloggt → kein Login mehr sehen
    if (pathname === "/login" && auth?.value === "admin") {
        return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/status/:path*",
        "/v2/:path*",
        "/dashboard/:path*",
        "/bgp/:path*",
        "/login",
    ],
};