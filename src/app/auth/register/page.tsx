"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage(){

    const router = useRouter()

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    async function login(){

        const res = await signIn("credentials",{
            email,
            password,
            redirect:false
        })

        if(!res?.error){
            router.push("/dashboard")
        }
    }

    return (
        <div className="flex items-center justify-center h-screen bg-zinc-950">

            <div className="bg-zinc-900 p-10 rounded-2xl w-96 shadow-xl">

                <h1 className="text-2xl font-bold text-white mb-6">
                    Login
                </h1>

                <input
                    className="w-full p-3 mb-3 rounded bg-zinc-800 text-white"
                    placeholder="Email"
                    onChange={e=>setEmail(e.target.value)}
                />

                <input
                    type="password"
                    className="w-full p-3 mb-5 rounded bg-zinc-800 text-white"
                    placeholder="Password"
                    onChange={e=>setPassword(e.target.value)}
                />

                <button
                    onClick={login}
                    className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded text-white"
                >
                    Login
                </button>

            </div>
        </div>
    )
}