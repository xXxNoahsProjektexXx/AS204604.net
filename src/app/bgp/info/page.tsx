"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Network, Filter, Search, RefreshCw, Clock, AlertTriangle, CheckCircle2, Globe } from "lucide-react";

interface Prefix {
    prefix: string;
    timelines: { starttime: string; endtime: string }[];
}
interface RipeData {
    data: { prefixes: Prefix[]; resource: string; query_time: string };
    status: string;
}

function isIPv6(p: string) { return p.includes(":"); }

export default function BgpPage() {
    const [data, setData] = useState<RipeData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [filter, setFilter] = useState<"all" | "v4" | "v6">("all");
    const [search, setSearch] = useState("");

    const fetchData = async () => {
        setLoading(true); setError(null);
        try {
            const res = await fetch("https://stat.ripe.net/data/announced-prefixes/data.json?resource=AS204604");
            if (!res.ok) throw new Error("API request failed");
            setData(await res.json());
        } catch (e) {
            setError(e instanceof Error ? e.message : "Unknown error");
        } finally { setLoading(false); }
    };

    useEffect(() => { fetchData(); }, []);

    const prefixes = data?.data?.prefixes ?? [];
    const filtered = prefixes.filter((p) => {
        if (filter === "v4" && isIPv6(p.prefix)) return false;
        if (filter === "v6" && !isIPv6(p.prefix)) return false;
        if (search && !p.prefix.toLowerCase().includes(search.toLowerCase())) return false;
        return true;
    });

    const v4Count = prefixes.filter((p) => !isIPv6(p.prefix)).length;
    const v6Count = prefixes.filter((p) => isIPv6(p.prefix)).length;

    const fmtDate = (d: string) =>
        d ? new Date(d).toLocaleDateString("de-AT", { day: "2-digit", month: "2-digit", year: "numeric" }) : "—";

    return (
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-32">
            {/* Header */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" as const }} className="mb-12">
                <div className="flex items-center gap-2 font-mono text-[var(--dim)] text-xs tracking-widest uppercase mb-3">
                    <Globe size={11} />
                    RIPE NCC · stat.ripe.net
                </div>
                <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    <span className="text-[var(--text)]">BGP </span>
                    <span className="text-[var(--accent)]" style={{ textShadow: "0 0 30px rgba(0,212,255,0.4)" }}>Routing Info</span>
                </h1>
                <p className="text-[var(--dim)] max-w-xl">
                    Live-Daten der angekündigten IP-Prefixe von AS204604 — abgerufen direkt von der RIPE NCC API.
                </p>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                    { label: "Gesamt", value: loading ? "—" : prefixes.length, icon: Network },
                    { label: "IPv4", value: loading ? "—" : v4Count, icon: Globe },
                    { label: "IPv6", value: loading ? "—" : v6Count, icon: Globe },
                    { label: "ASN", value: "204604", icon: Network },
                ].map((s) => {
                    const Icon = s.icon;
                    return (
                        <div key={s.label} className="rounded-lg border border-[var(--border)] bg-[var(--surface)]/50 p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <Icon size={13} className="text-[var(--muted)]" />
                                <span className="font-mono text-[var(--dim)] text-xs uppercase tracking-widest">{s.label}</span>
                            </div>
                            <div className="font-mono text-[var(--accent)] text-2xl font-bold">{s.value}</div>
                        </div>
                    );
                })}
            </motion.div>

            {/* Controls */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
                        className="flex flex-col sm:flex-row gap-3 mb-6">
                <div className="flex gap-2 font-mono text-sm">
                    {(["all", "v4", "v6"] as const).map((f) => (
                        <button key={f} onClick={() => setFilter(f)}
                                className="px-4 py-2 rounded border transition-all duration-200 flex items-center gap-1.5"
                                style={{
                                    borderColor: filter === f ? "var(--accent)" : "var(--border)",
                                    color: filter === f ? "var(--accent)" : "var(--dim)",
                                    background: filter === f ? "rgba(0,212,255,0.08)" : "transparent",
                                }}>
                            <Filter size={11} />
                            {f === "all" ? "Alle" : f.toUpperCase()}
                        </button>
                    ))}
                </div>

                <div className="relative flex-1">
                    <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--dim)]" />
                    <input type="text" placeholder="Prefix suchen..." value={search}
                           onChange={(e) => setSearch(e.target.value)}
                           className="w-full pl-9 pr-4 py-2 rounded border border-[var(--border)] bg-[var(--surface)]/30 text-[var(--text)] font-mono text-sm placeholder:text-[var(--dim)]/40 focus:outline-none focus:border-[var(--accent)] transition-colors" />
                </div>

                <button onClick={fetchData}
                        className="px-4 py-2 rounded border border-[var(--border)] text-[var(--dim)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200 flex items-center gap-2 font-mono text-sm">
                    <motion.div animate={loading ? { rotate: 360 } : { rotate: 0 }}
                                transition={loading ? { duration: 1, repeat: Infinity, ease: "linear" } : {}}>
                        <RefreshCw size={13} />
                    </motion.div>
                    Refresh
                </button>
            </motion.div>

            {/* Table */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }} className="rounded-xl border border-[var(--border)] overflow-hidden">
                {/* Header */}
                <div className="grid px-6 py-3 border-b border-[var(--border)] font-mono text-xs uppercase tracking-widest text-[var(--dim)]"
                     style={{ gridTemplateColumns: "1fr auto auto auto", background: "rgba(10,22,40,0.8)" }}>
                    <span className="flex items-center gap-1.5"><Network size={10} /> Prefix</span>
                    <span className="pr-8 text-right">Typ</span>
                    <span className="pr-8 text-right flex items-center gap-1 justify-end"><Clock size={10} /> Seit</span>
                    <span className="text-right">Bis</span>
                </div>

                {loading && (
                    <div className="p-16 text-center">
                        <motion.div className="inline-flex items-center gap-3 text-[var(--dim)] font-mono text-sm">
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}>
                                <RefreshCw size={16} className="text-[var(--accent)]" />
                            </motion.div>
                            Daten werden geladen...
                        </motion.div>
                    </div>
                )}

                {error && (
                    <div className="p-16 text-center">
                        <div className="inline-flex items-center gap-2 text-red-400 font-mono text-sm">
                            <AlertTriangle size={16} />
                            Fehler: {error}
                        </div>
                    </div>
                )}

                {!loading && !error && (
                    <AnimatePresence>
                        {filtered.length === 0 ? (
                            <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                        className="p-16 text-center font-mono text-[var(--dim)] text-sm">
                                Keine Prefixe gefunden.
                            </motion.div>
                        ) : (
                            filtered.map((p, i) => {
                                const v6 = isIPv6(p.prefix);
                                const latest = p.timelines?.[p.timelines.length - 1];
                                const isActive = !latest?.endtime;
                                return (
                                    <motion.div key={p.prefix}
                                                initial={{ opacity: 0, x: -16 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: Math.min(i * 0.03, 0.4), duration: 0.35, ease: "easeOut" }}
                                                className="grid items-center px-6 py-3.5 border-b border-[var(--border)]/40 hover:bg-[var(--accent)]/5 transition-colors duration-150 group"
                                                style={{ gridTemplateColumns: "1fr auto auto auto" }}>
                                        <div className="font-mono text-sm group-hover:text-[var(--accent)] transition-colors">
                                            {p.prefix}
                                        </div>
                                        <div className="pr-8">
                      <span className="font-mono text-xs px-2 py-0.5 rounded" style={{
                          background: v6 ? "rgba(0,102,255,0.15)" : "rgba(0,212,255,0.1)",
                          color: v6 ? "#6699ff" : "var(--accent)",
                          border: `1px solid ${v6 ? "rgba(0,102,255,0.3)" : "rgba(0,212,255,0.2)"}`,
                      }}>
                        {v6 ? "IPv6" : "IPv4"}
                      </span>
                                        </div>
                                        <div className="font-mono text-xs text-[var(--dim)] pr-8 text-right">
                                            {fmtDate(latest?.starttime)}
                                        </div>
                                        <div className="font-mono text-xs text-right">
                                            {isActive
                                                ? <span className="flex items-center gap-1 justify-end text-emerald-400"><CheckCircle2 size={11} /> Aktiv</span>
                                                : <span className="text-[var(--dim)]">{fmtDate(latest?.endtime)}</span>}
                                        </div>
                                    </motion.div>
                                );
                            })
                        )}
                    </AnimatePresence>
                )}
            </motion.div>

            {/* Footer */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
                        className="mt-5 font-mono text-xs text-[var(--dim)] flex items-center gap-2">
                <CheckCircle2 size={11} className="text-emerald-400" />
                Datenquelle: stat.ripe.net · {data?.data?.query_time
                ? new Date(data.data.query_time).toLocaleString("de-AT") : "—"}
            </motion.div>
        </div>
    );
}
