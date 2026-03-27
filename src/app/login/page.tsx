"use client";

import { useState } from "react";

export default function LoginPage() {
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: any) => {
        e.preventDefault();
        setLoading(true);

        const res = await fetch("/api/auth/login", {
            method: "POST",
            credentials: "include", // 🔥 SEHR wichtig
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: e.target.username.value,
                password: e.target.password.value,
            }),
        });

        if (res.ok) {
            // 🔥 wichtig → sorgt dafür dass Cookie sicher da ist
            window.location.replace("/dashboard");
        } else {
            alert("Login fehlgeschlagen");
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleLogin} className="flex flex-col gap-4 max-w-sm mx-auto mt-40">
            <input name="username" placeholder="Username" className="p-2 rounded bg-white/10" />
            <input name="password" type="password" placeholder="Password" className="p-2 rounded bg-white/10" />

            <button
                type="submit"
                disabled={loading}
                className="p-2 bg-purple-600 rounded"
            >
                {loading ? "Loading..." : "Login"}
            </button>
        </form>
    );
}