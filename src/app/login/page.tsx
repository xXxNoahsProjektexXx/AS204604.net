"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Lock, User } from "lucide-react"

export default function LoginPage(){

    const router = useRouter()
    const [form,setForm] = useState({username:"",password:""})
    const [error,setError] = useState("")

    async function submit(e:any){
        e.preventDefault()
        setError("")

        const res = await fetch("/api/auth/login",{
            method:"POST",
            headers:{ "Content-Type":"application/json" },
            body: JSON.stringify(form)
        })

        const data = await res.json()

        if(data.success){
            router.push("/admin") // nach erfolgreichem Login
        }else{
            setError("Invalid credentials")
        }

    }

    return(
        <div className="flex items-center justify-center min-h-screen bg-black px-6">

            <motion.form
                initial={{opacity:0,y:20}}
                animate={{opacity:1,y:0}}
                onSubmit={submit}
                className="w-full max-w-md border border-zinc-800 rounded-xl p-8 space-y-6 bg-zinc-900"
            >
                <h1 className="text-2xl font-bold text-center mb-4">Admin Login</h1>

                <div>
                    <label className="text-sm text-zinc-400 flex items-center gap-2 mb-1"><User size={14}/> Username</label>
                    <input
                        required
                        value={form.username}
                        onChange={(e)=>setForm({...form,username:e.target.value})}
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm"
                    />
                </div>

                <div>
                    <label className="text-sm text-zinc-400 flex items-center gap-2 mb-1"><Lock size={14}/> Password</label>
                    <input
                        type="password"
                        required
                        value={form.password}
                        onChange={(e)=>setForm({...form,password:e.target.value})}
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm"
                    />
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button className="w-full bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg text-white font-semibold">
                    Login
                </button>

            </motion.form>

        </div>
    )
}