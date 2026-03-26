"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Scale, Shield, ShieldCheck } from "lucide-react"
import PhoneReveal from "@/components/PhoneReveal";



export default function LegalPage() {
    const [tab, setTab] = useState<"imprint" | "privacy">("imprint")

    return (
        <div className="relative overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F19] via-[#0f172a] to-[#020617]" />
            <div className="absolute w-[700px] h-[700px] bg-purple-600/20 blur-[140px] top-[-200px] left-1/2 -translate-x-1/2" />

            <div className="relative max-w-4xl mx-auto px-6 py-24">

                {/* HEADER */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                        Legal Notice
                    </h1>

                    <p className="mt-4 text-gray-400 text-sm">
                        Legal information and privacy policy for AS204604
                    </p>
                </div>

                {/* TABS */}
                <div className="flex justify-center mb-12">
                    <div className="flex gap-2 p-1 rounded-xl bg-white/5 border border-white/10 backdrop-blur">

                        {[
                            { key: "imprint", label: "Imprint", icon: Scale },
                            { key: "privacy", label: "Privacy", icon: Shield }
                        ].map((item) => {
                            const Icon = item.icon
                            const active = tab === item.key

                            return (
                                <button
                                    key={item.key}
                                    onClick={() => setTab(item.key as any)}
                                    className={`
                    relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition
                    ${active
                                        ? "bg-white/10 text-white"
                                        : "text-gray-400 hover:text-white"}
                  `}
                                >
                                    <Icon size={16} />
                                    {item.label}
                                </button>
                            )
                        })}

                    </div>
                </div>

                {/* CONTENT */}
                <AnimatePresence mode="wait">

                    {/* IMPRINT */}
                    {tab === "imprint" && (
                        <motion.div
                            key="imprint"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-white/5"
                        >
                            <div className="rounded-2xl bg-[#111827] p-8 space-y-6">

                                <h2 className="text-xl font-semibold text-white">
                                    Impressum
                                </h2>

                                <p className="text-gray-400 text-sm">
                                    Angaben gemäß § 5 ECG und § 24 Mediengesetz
                                </p>

                                <div className="space-y-3 text-sm text-gray-400">

                                    <div>
                                        <p className="text-gray-500 text-xs">Name / Betreiber</p>
                                        <p className="text-white">Marcel Noah Weixelbaum</p>
                                    </div>

                                    <div>
                                        <p className="text-gray-500 text-xs">Adresse</p>
                                        <p className="text-white">
                                            Leo-mathauser-gasse 72, 1230 Wien, Österreich
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-gray-500 text-xs">E-Mail</p>
                                        <a
                                            href="mailto:admin@as204604.de"
                                            className="text-purple-400 hover:underline"
                                        >
                                            admin@as204604.de
                                        </a>
                                    </div>

                                    {/* ✅ Phone with Human Check */}
                                    <PhoneReveal />

                                    <div>
                                        <p className="text-gray-500 text-xs">
                                            Verantwortlich für den Inhalt
                                        </p>
                                        <p className="text-white">Marcel Noah Weixelbaum</p>
                                    </div>

                                    <p className="pt-4 text-gray-500 text-xs">
                                        Dieses Impressum gilt für die Präsentation und den Betrieb
                                        des autonomen Systems AS204604.
                                    </p>

                                </div>

                            </div>
                        </motion.div>
                    )}

                    {/* PRIVACY */}
                    {tab === "privacy" && (
                        <motion.div
                            key="privacy"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-white/5"
                        >
                            <div className="rounded-2xl bg-[#111827] p-8 space-y-6">

                                <h2 className="text-xl font-semibold text-white">
                                    Privacy Policy
                                </h2>

                                <div className="space-y-4 text-sm text-gray-400 leading-relaxed">

                                    <p>
                                        This website does not process personal data unless voluntarily provided.
                                    </p>

                                    <p>
                                        When visiting the website, technical data may be collected automatically:
                                    </p>

                                    <ul className="list-disc list-inside space-y-1 text-white">
                                        <li>IP address</li>
                                        <li>Date and time of request</li>
                                        <li>Browser type and version</li>
                                        <li>Operating system</li>
                                        <li>Referrer URL</li>
                                    </ul>

                                    <p>
                                        This data is used solely to ensure security and stability of the system.
                                    </p>

                                    <p className="text-red-400">
                                        No data is shared with third parties.
                                    </p>

                                    <p>
                                        For privacy-related inquiries, please contact the operator.
                                    </p>

                                </div>

                            </div>
                        </motion.div>
                    )}

                </AnimatePresence>

            </div>
        </div>
    )
}