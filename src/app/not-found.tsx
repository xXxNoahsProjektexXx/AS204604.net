"use client";

import { motion } from "framer-motion";
import Link from "next/link";


export default function NotFound404() {
    return (

        <div className="flex min-h-screen items-center justify-center bg-black text-white">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center"
            >
                <motion.h1
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-7xl font-bold mb-4"
                >
                    404
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg text-gray-400 mb-8"
                >
                    Diese Seite existiert nicht oder wurde verschoben.
                </motion.p>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                        href="/"
                        className="rounded-xl bg-white text-black px-6 py-3 font-medium"
                    >
                        Zur Startseite
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );

}