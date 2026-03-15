"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Scale, Shield } from "lucide-react"

export default function LegalPage(){

    const [tab,setTab] = useState<"imprint" | "privacy">("imprint")

    return(

        <div className="max-w-4xl mx-auto px-6 py-16">

            {/* Title */}

            <h1 className="text-3xl font-bold mb-8">
                Legal Notice / Rechtlicher Hinweis
            </h1>

            {/* Tabs */}

            <div className="flex gap-4 mb-10">

                <button
                    onClick={()=>setTab("imprint")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition
${tab==="imprint"
                        ? "bg-zinc-800 text-white"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-900"}
`}
                >
                    <Scale size={16}/>
                    Impressum
                </button>

                <button
                    onClick={()=>setTab("privacy")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition
${tab==="privacy"
                        ? "bg-zinc-800 text-white"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-900"}
`}
                >
                    <Shield size={16}/>
                    Datenschutz
                </button>

            </div>

            {/* Content */}

            <AnimatePresence mode="wait">

                {tab === "imprint" && (

                    <motion.div
                        key="imprint"
                        initial={{opacity:0,y:10}}
                        animate={{opacity:1,y:0}}
                        exit={{opacity:0,y:-10}}
                        className="border border-zinc-800 rounded-xl p-8 space-y-4"
                    >

                        <h2 className="text-xl font-semibold">
                            Impressum
                        </h2>

                        <p className="text-zinc-400">

                            Angaben gemäß § 5 ECG und § 24 Mediengesetz

                        </p>

                        <div className="space-y-2 text-sm">

                            <h2 className="text-2xl font-semibold">Impressum</h2>
                            <p><strong>Name / Betreiber:</strong> Marcel Noah Weixelbaum</p>
                            <p><strong>Anschrift:</strong> Leo-mathauser-gasse 72, 1230 Wien, Österreich</p>
                            <p><strong>E-Mail:</strong> <a href="mailto:admin@as204604.de" className="text-blue-600 underline">admin@as204604.de</a></p>
                            <p><strong>Telefon:</strong> <a href={"tel:+436707019622"} className={"text-blue-600 underline"}>+43 670 70 19622</a> </p>
                            <p><strong>Verantwortlich für den Inhalt:</strong> Marcel Noah Weixelbaum</p>
                            <p>Dieses Impressum gilt für die Präsentation und den Betrieb des Autonomen Systems AS204604.</p>


                        </div>

                    </motion.div>

                )}

                {tab === "privacy" && (

                    <motion.div
                        key="privacy"
                        initial={{opacity:0,y:10}}
                        animate={{opacity:1,y:0}}
                        exit={{opacity:0,y:-10}}
                        className="border border-zinc-800 rounded-xl p-8 space-y-6"
                    >

                        <h2 className="text-xl font-semibold">
                            Datenschutzerklärung
                        </h2>

                        <div className="space-y-4 text-sm text-zinc-400">

                            <p>

                                Diese Website verarbeitet grundsätzlich keine personenbezogenen Daten,
                                außer diese werden freiwillig übermittelt.

                            </p>

                            <p>

                                Beim Besuch der Website können automatisch technische Informationen
                                durch den Webserver erfasst werden, darunter:

                            </p>

                            <ul className="list-disc list-inside space-y-1">

                                <li>IP-Adresse</li>
                                <li>Datum und Uhrzeit der Anfrage</li>
                                <li>Browsertyp und Version</li>
                                <li>Betriebssystem</li>
                                <li>Referrer URL</li>

                            </ul>

                            <p>

                                Diese Daten werden ausschließlich zur Gewährleistung
                                der Sicherheit und Stabilität der Website verarbeitet.

                            </p>

                            <p>

                                Es erfolgt keine Weitergabe der Daten an Dritte.

                            </p>

                            <p>

                                Bei Fragen zum Datenschutz können Sie sich jederzeit
                                an den Betreiber dieser Website wenden.

                            </p>

                        </div>

                    </motion.div>

                )}

            </AnimatePresence>

        </div>

    )

}