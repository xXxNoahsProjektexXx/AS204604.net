import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {SessionProvider} from "next-auth/react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "AS204604 — LOGIN",
    description: "AS204604 — Independent Autonomous System providing reliable BGP routing, IP transit and open peering.",
    keywords: ['AS204604', 'ASN', 'BGP', 'peering', 'IP transit', 'NOC'],
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="de">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
        >
        <SessionProvider>
            {children}
        </SessionProvider>

        </body>
        </html>
    );
}