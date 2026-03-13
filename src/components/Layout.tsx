"use client"
import React from "react"
import Nav from "./Nav"
import Fut from "./Fut"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <main className="flex-1">{children}</main>
        </div>
    )
}