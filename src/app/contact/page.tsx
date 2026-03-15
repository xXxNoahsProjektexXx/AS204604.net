"use client"

import { motion } from "framer-motion"
import { Mail, Send, User, MessageSquare } from "lucide-react"
import { useState } from "react"

export default function ContactPage(){

    const [form,setForm] = useState({
        name:"",
        email:"",
        message:""
    })

    const [status,setStatus] = useState("")

    async function submit(e:any){
        e.preventDefault()

        setStatus("Sending...")

        const res = await fetch("/api/contact",{
            method:"POST",
            headers:{ "Content-Type":"application/json"},
            body: JSON.stringify(form)
        })

        if(res.ok){
            setStatus("Message sent ✔")
            setForm({name:"",email:"",message:""})
        }else{
            setStatus("Error sending message")
        }

    }

    return(

        <div className="max-w-5xl mx-auto px-6 py-16">

            <motion.div
                initial={{opacity:0,y:20}}
                animate={{opacity:1,y:0}}
                className="mb-12"
            >

                <h1 className="text-3xl font-bold mb-4">
                    Contact
                </h1>

                <p className="text-zinc-400">
                    Questions about the network, routing or infrastructure of AS204604.
                </p>

            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">

                {/* CONTACT FORM */}

                <motion.form
                    initial={{opacity:0,y:20}}
                    animate={{opacity:1,y:0}}
                    onSubmit={submit}
                    className="border border-zinc-800 rounded-xl p-6 space-y-4"
                >

                    <h2 className="text-lg font-semibold mb-2">
                        Send Message
                    </h2>

                    <div>

                        <label className="text-sm text-zinc-400 flex items-center gap-2 mb-1">
                            <User size={14}/> Name
                        </label>

                        <input
                            required
                            value={form.name}
                            onChange={(e)=>setForm({...form,name:e.target.value})}
                            className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-sm"
                        />

                    </div>

                    <div>

                        <label className="text-sm text-zinc-400 flex items-center gap-2 mb-1">
                            <Mail size={14}/> Email
                        </label>

                        <input
                            type="email"
                            required
                            value={form.email}
                            onChange={(e)=>setForm({...form,email:e.target.value})}
                            className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-sm"
                        />

                    </div>

                    <div>

                        <label className="text-sm text-zinc-400 flex items-center gap-2 mb-1">
                            <MessageSquare size={14}/> Message
                        </label>

                        <textarea
                            required
                            rows={5}
                            value={form.message}
                            onChange={(e)=>setForm({...form,message:e.target.value})}
                            className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-sm"
                        />

                    </div>

                    <button
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg text-sm"
                    >

                        <Send size={16}/>
                        Send Message

                    </button>

                    <p className="text-xs text-zinc-500">
                        {status}
                    </p>

                </motion.form>

                {/* EMAIL CONTAINER */}

                <motion.div
                    initial={{opacity:0,y:20}}
                    animate={{opacity:1,y:0}}
                    className="border border-zinc-800 rounded-xl p-6"
                >

                    <h2 className="text-lg font-semibold mb-4">
                        Direct Contact
                    </h2>

                    <div className="space-y-4 text-sm">

                        <div className="flex items-center gap-3">

                            <div className="bg-zinc-900 p-3 rounded-lg">
                                <Mail size={18}/>
                            </div>

                            <div>

                                <p className="text-zinc-400">
                                    Email
                                </p>

                                <p className="font-mono">
                                    noc@as204604.de
                                </p>

                            </div>

                        </div>

                        <div className="text-zinc-400 text-sm mt-6">

                            For network related requests, peering inquiries or infrastructure questions please contact via email.

                        </div>

                    </div>

                </motion.div>

            </div>

        </div>

    )

}