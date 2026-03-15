"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link";

export default function LegalTabs() {
    const [tab, setTab] = useState<"impressum"|"privacy">("impressum")

    const tabs = [
        { id: "impressum", label: "Impressum" },
        { id: "privacy", label: "Privacy / Datenschutz" }
    ]

    const tabContent = {
        impressum: (
            <div className="space-y-3 text-gray-300">
                <h2 className="text-2xl font-semibold text-white">Impressum</h2>
                <p><strong>Betreiber:</strong> Marcel Noah Weixelbaum</p>
                <p><strong>Adresse:</strong> Leo-Mathauser-Gasse 72, 1230 Wien, Österreich</p>
                <p className="text-sm text-red-400">
                    Hinweis: Privatpakete werden an dieser Adresse nicht entgegengenommen.
                </p>
                <p><strong>Telefon:</strong> +43 670 7019622</p>
                <p><strong>Email:</strong> noc@as204604.de</p>

                <p className="text-sm text-gray-400">
                    Haftungshinweis: Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für Inhalte externer Links.
                </p>
            </div>
        ),
        privacy: (
            <div className="space-y-3 text-gray-300">
                <h2 className="text-2xl font-semibold text-white">Datenschutz / Privacy Policy</h2>
                <p>
                    Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Alle Daten werden gemäß DSGVO verarbeitet.
                </p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>IP-Adressen werden nur temporär gespeichert</li>
                    <li>Keine Weitergabe an Dritte ohne Einwilligung</li>
                    <li>Kontaktformulare nur für Supportzwecke</li>
                </ul>
                <Link href={"/privacy"}>Privacy Tab</Link>
            </div>
        )
    }

    return (
        <div className="max-w-3xl mx-auto p-6">

            {/* Tabs */}
            <div className="flex justify-center mb-8">
                <div className="relative flex bg-zinc-900/60 backdrop-blur p-1 rounded-xl border border-zinc-800">
                    {tabs.map((t) => {
                        const active = tab === t.id
                        return (
                            <>
                                <button
                                    key={t.id}
                                    onClick={() => setTab(t.id as any)}
                                    className="relative px-5 py-2 text-sm font-medium z-10"
                                >
                                    {active && (
                                        <motion.div
                                            layoutId="tab-indicator"
                                            className="absolute inset-0 bg-blue-500/20 rounded-lg border border-blue-400/40"
                                            transition={{ type: "spring", duration: 0.5 }}
                                        />
                                    )}

                                    <span className={`relative ${active ? "text-white" : "text-gray-400 hover:text-gray-200"}`}>
                                    {t.label}
                                </span>
                                </button>
                            </>
                        )
                    })}
                </div>
            </div>

            {/* Content */}
            <div className="relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={tab}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.25 }}
                        className="bg-zinc-900/60 backdrop-blur border border-zinc-800 rounded-xl p-6 shadow-xl"
                    >
                        {tabContent[tab]}
                    </motion.div>
                </AnimatePresence>
            </div>

        </div>
    )
}