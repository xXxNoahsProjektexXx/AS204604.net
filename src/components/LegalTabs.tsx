"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function LegalTabs() {
    const [tab, setTab] = useState<"impressum"|"privacy">("impressum")

    const tabContent = {
        impressum: (
            <div className="space-y-2 text-gray-300">
                <h2 className="text-2xl font-semibold">Impressum</h2>
                <p><strong>Betreiber:</strong> AS204604 Network Services</p>
                <p><strong>Adresse:</strong> Leo-Mathauser-Gasse 72, 1230 Wien, Österreich</p>
                <p><strong>Telefon:</strong> +43 670 7019622</p>
                <p><strong>Email:</strong> noc@as204604.de</p>
                
                <p>
                    Haftungshinweis: Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für Inhalte externer Links.
                </p>
            </div>
        ),
        privacy: (
            <div className="space-y-2 text-gray-300">
                <h2 className="text-2xl font-semibold">Datenschutz / Privacy Policy</h2>
                <p>
                    Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Alle Daten werden gemäß DSGVO verarbeitet.
                </p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>IP-Adressen werden nur temporär gespeichert</li>
                    <li>Keine Weitergabe an Dritte ohne Einwilligung</li>
                    <li>Kontaktformulare nur für Supportzwecke</li>
                </ul>
            </div>
        )
    }

    return (
        <div className="max-w-3xl mx-auto p-6 space-y-4">
            {/* Tabs */}
            <div className="flex gap-4 border-b border-zinc-800 mb-6">
                <button
                    className={`px-4 py-2 font-medium ${
                        tab==="impressum" ? "border-b-2 border-blue-400 text-blue-400" : "text-gray-400"
                    }`}
                    onClick={()=>setTab("impressum")}
                >
                    Impressum
                </button>
                <button
                    className={`px-4 py-2 font-medium ${
                        tab==="privacy" ? "border-b-2 border-blue-400 text-blue-400" : "text-gray-400"
                    }`}
                    onClick={()=>setTab("privacy")}
                >
                    Privacy / Datenschutz
                </button>
            </div>

            {/* Animated Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={tab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    {tabContent[tab]}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}