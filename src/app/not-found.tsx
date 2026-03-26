"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound404() {
    return (
        <div className="relative flex min-h-screen items-center justify-center bg-[#0B0F19] text-white overflow-hidden">

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F19] via-[#0f172a] to-[#020617]" />

            {/* Glow Effect */}
            <div className="absolute w-[700px] h-[700px] bg-purple-600/20 blur-[140px] top-[-200px] left-1/2 -translate-x-1/2" />

            {/* Grid Overlay (subtle tech feel) */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]" />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative text-center px-6"
            >
                {/* 404 */}
                <motion.h1
                    initial={{ scale: 0.85 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-8xl md:text-9xl font-bold tracking-tight bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent"
                >
                    404
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-6 text-lg text-gray-400 max-w-md mx-auto"
                >
                    Die angeforderte Route konnte im Netzwerk nicht gefunden werden.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <Link
                        href="/"
                        className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 transition font-medium"
                    >
                        Zur Startseite
                    </Link>

                    <Link
                        href="/status"
                        className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition"
                    >
                        Network Status
                    </Link>
                </motion.div>

                {/* Small hint */}
                <p className="mt-10 text-xs text-gray-500">
                    Error Code: ASN_ROUTE_NOT_FOUND
                </p>
            </motion.div>
        </div>
    );
}