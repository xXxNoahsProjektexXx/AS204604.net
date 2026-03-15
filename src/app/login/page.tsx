"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import LoginButton from "@/components/LoginButton";

export default function Login(){

    const router = useRouter()
    const [user,setUser] = useState("")
    const [pass,setPass] = useState("")

    async function login(){

        const res = await fetch("/api/auth/login",{
            method:"POST",
            body:JSON.stringify({
                username:user,
                password:pass
            })
        })

        const data = await res.json()

        if(data.token){
            localStorage.setItem("token",data.token)
            router.push("/dashboard")
        }

    }

    return(

        <main className="flex h-screen items-center justify-center">

            <div className="card p-8 w-80">

                <h1 className="text-2xl mb-6 font-bold">
                    Dashboard Login
                </h1>

                <input
                    placeholder="Username"
                    className="w-full mb-3 p-2 bg-zinc-800 rounded"
                    onChange={e=>setUser(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-4 p-2 bg-zinc-800 rounded"
                    onChange={e=>setPass(e.target.value)}
                />

                <button
                    onClick={login}
                    className="btn-primary w-full"
                >
                    Login
                </button>

                <LoginButton />

            </div>

        </main>

    )
}