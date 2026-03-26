"use client"

import { motion } from "framer-motion"
import { Mail, Send, User, MessageSquare } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [status, setStatus] = useState("")

    async function submit(e: any) {
        e.preventDefault()
        setStatus("Sending...")

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        })

        if (res.ok) {
            setStatus("Message sent ✔")
            setForm({ name: "", email: "", message: "" })
        } else {
            setStatus("Error sending message")
        }
    }

    return (
        <div className="relative overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F19] via-[#0f172a] to-[#020617]" />
            <div className="absolute w-[700px] h-[700px] bg-purple-600/20 blur-[140px] top-[-200px] left-1/2 -translate-x-1/2" />

            <div className="relative max-w-5xl mx-auto px-6 py-24">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 text-center"
                >
                    <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                        Contact
                    </h1>

                    <p className="mt-4 text-gray-400 max-w-xl mx-auto">
                        Get in touch regarding routing, infrastructure, peering or general network inquiries.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">

                    {/* FORM */}
                    <motion.form
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        onSubmit={submit}
                        className="relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-white/5"
                    >
                        <div className="rounded-2xl bg-[#111827] p-6 space-y-5">

                            <h2 className="text-lg font-semibold text-white">
                                Send Message
                            </h2>

                            {/* Name */}
                            <div>
                                <label className="text-xs text-gray-400 flex items-center gap-2 mb-1">
                                    <User size={14} /> Name
                                </label>

                                <input
                                    required
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    className="w-full bg-[#0f172a] border border-white/5 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="text-xs text-gray-400 flex items-center gap-2 mb-1">
                                    <Mail size={14} /> Email
                                </label>

                                <input
                                    type="email"
                                    required
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    className="w-full bg-[#0f172a] border border-white/5 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="text-xs text-gray-400 flex items-center gap-2 mb-1">
                                    <MessageSquare size={14} /> Message
                                </label>

                                <textarea
                                    required
                                    rows={5}
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    className="w-full bg-[#0f172a] border border-white/5 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
                                />
                            </div>

                            {/* Button */}
                            <button
                                className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 transition px-4 py-2 rounded-xl text-sm font-medium"
                            >
                                <Send size={16} />
                                Send Message
                            </button>

                            {/* Status */}
                            <p className="text-xs text-gray-500 text-center">
                                {status}
                            </p>

                        </div>
                    </motion.form>

                    {/* CONTACT INFO */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-white/5"
                    >
                        <div className="rounded-2xl bg-[#111827] p-6">

                            <h2 className="text-lg font-semibold mb-6 text-white">
                                Network Operations Center
                            </h2>

                            <div className="space-y-5 text-sm">

                                <div className="flex items-center gap-4">
                                    <div className="bg-[#0f172a] p-3 rounded-lg">
                                        <Mail size={18} />
                                    </div>

                                    <div>
                                        <p className="text-gray-400 text-xs">Email</p>
                                        <p className="font-mono text-white">
                                            noc@as204604.de
                                        </p>
                                    </div>
                                </div>

                                <div className="text-gray-400 text-sm mt-6 leading-relaxed">
                                    For peering requests, routing issues or infrastructure inquiries,
                                    please contact the NOC directly via email.
                                </div>

                                {/* Status */}
                                <div className="mt-6 text-green-400 text-xs">
                                    ● Network Operational
                                </div>

                            </div>

                        </div>
                    </motion.div>

                </div>

            </div>
        </div>
    )
}