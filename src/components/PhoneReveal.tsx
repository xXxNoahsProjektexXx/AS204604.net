import { useState } from "react"
import { ShieldCheck, Loader2 } from "lucide-react"

export default function PhoneReveal() {
    const [phone, setPhone] = useState<string | null>(null)
    const [message, setMessage] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    async function handleReveal() {
        setLoading(true)

        try {
            const res = await fetch("/api/phone")
            const data = await res.json()

            setPhone(data.phone)
            setMessage(data.message)
        } catch (e) {
            setPhone("Error loading number")
        }

        setLoading(false)
    }

    return (
        <div>
            <p className="text-gray-500 text-xs">Telefon</p>

            {!phone && (
                <button
                    onClick={handleReveal}
                    disabled={loading}
                    className="mt-1 flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition disabled:opacity-50"
                >
                    {loading ? (
                        <Loader2 size={14} className="animate-spin" />
                    ) : (
                        <ShieldCheck size={14} />
                    )}

                    {loading ? "Verifying you are not a Robot..." : "Click to verify you are human"}
                </button>
            )}

            {phone && (
                <a
                    href={`tel:${phone}`}
                    className="text-purple-400 hover:underline hover:text-purple-500 transition"
                >
                    {phone}
                </a>
            )}
        </div>
    )
}