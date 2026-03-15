"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function AdminPageClient() {
    const router = useRouter()

    useEffect(() => {
        const auth = document.cookie
            .split("; ")
            .find(row => row.startsWith("auth="))
            ?.split("=")[1]

        if (auth !== "admin") router.push("/login")
    }, [router])

    return <div>Admin Dashboard</div>
}