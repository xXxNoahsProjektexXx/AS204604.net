import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const auth = req.cookies.get("auth");

    const protectedPaths = [
        "/status",
        "/v2",
        "/dashboard",
        "/bgp"
    ];

    const { pathname } = req.nextUrl;

    const isProtected = protectedPaths.some(path =>
        pathname.startsWith(path)
    );

    if (isProtected && !auth) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
}

// Wichtig für Performance (Next.js matcher)
export const config = {
    matcher: [
        "/status/:path*",
        "/v2/:path*",
        "/dashboard/:path*",
        "/bgp/:path*",
    ],
};