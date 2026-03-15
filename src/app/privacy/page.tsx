"use client"

import { motion } from "framer-motion"

export default function PrivacyPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-16 text-gray-300">

            <motion.h1
                className="text-4xl font-bold mb-8 text-white"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Privacy Policy / Datenschutzerklärung
            </motion.h1>

            <div className="space-y-8 text-sm leading-relaxed">

                <section>
                    <h2 className="text-xl font-semibold text-white mb-2">
                        1. Allgemeine Informationen
                    </h2>
                    <p>
                        Diese Website wird im Zusammenhang mit dem autonomen System
                        <strong> AS204604 </strong> betrieben. Der Schutz Ihrer persönlichen
                        Daten ist uns wichtig. In dieser Datenschutzerklärung informieren wir
                        Sie darüber, welche Daten beim Besuch dieser Website erfasst werden
                        und wie diese verwendet werden.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-2">
                        2. Verantwortlicher
                    </h2>
                    <p>
                        Verantwortlich für die Datenverarbeitung auf dieser Website ist der
                        Betreiber von AS204604. Weitere Informationen finden Sie im
                        Impressum dieser Website.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-2">
                        3. Server-Logfiles
                    </h2>
                    <p>
                        Beim Besuch dieser Website werden automatisch technische
                        Informationen durch den Webserver erfasst. Diese Daten sind
                        erforderlich, um den Betrieb der Website sicherzustellen.
                    </p>

                    <ul className="list-disc ml-6 mt-2 space-y-1">
                        <li>IP-Adresse</li>
                        <li>Datum und Uhrzeit der Anfrage</li>
                        <li>Browsertyp und Version</li>
                        <li>Betriebssystem</li>
                        <li>Referrer URL</li>
                        <li>aufgerufene Seiten</li>
                    </ul>

                    <p className="mt-2">
                        Diese Daten werden ausschließlich zur technischen Überwachung,
                        Fehleranalyse und zur Sicherheit der Infrastruktur verarbeitet.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-2">
                        4. Netzwerk- und Infrastrukturinformationen
                    </h2>
                    <p>
                        Diese Website stellt Informationen über Netzwerkressourcen,
                        Routinginformationen und Infrastruktur des autonomen Systems
                        AS204604 bereit. Dazu können öffentlich verfügbare Daten aus
                        Routing-Datenbanken, BGP-Feeds oder anderen Netzwerkquellen
                        angezeigt werden.
                    </p>

                    <p className="mt-2">
                        Diese Daten enthalten keine personenbezogenen Informationen,
                        sondern ausschließlich technische Netzwerkdaten.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-2">
                        5. Cookies
                    </h2>
                    <p>
                        Diese Website verwendet grundsätzlich keine Tracking-Cookies.
                        Technisch notwendige Cookies können verwendet werden, um
                        grundlegende Funktionen der Website bereitzustellen.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-2">
                        6. Externe Dienste
                    </h2>
                    <p>
                        Einzelne Inhalte der Website können Daten von externen Quellen
                        laden, beispielsweise öffentliche Routing-Datenbanken,
                        Netzwerkstatistiken oder Monitoring-Dienste. Beim Abrufen dieser
                        Inhalte kann Ihre IP-Adresse an diese Dienste übermittelt werden.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-2">
                        7. Ihre Rechte
                    </h2>
                    <p>
                        Sie haben gemäß der Datenschutz-Grundverordnung (DSGVO) das Recht
                        auf Auskunft über die Verarbeitung Ihrer personenbezogenen Daten
                        sowie gegebenenfalls das Recht auf Berichtigung, Löschung oder
                        Einschränkung der Verarbeitung.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-2">
                        8. Änderungen dieser Datenschutzerklärung
                    </h2>
                    <p>
                        Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie
                        an neue gesetzliche Anforderungen oder Änderungen der Website
                        anzupassen.
                    </p>
                </section>

                <section>
                    <p className="text-gray-500 text-xs pt-6">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </section>

            </div>
        </div>
    )
}