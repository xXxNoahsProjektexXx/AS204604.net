"use client";

import { signIn, signOut, useSession } from "next-auth/react"

export default function LoginButton() {
    const { data: session } = useSession()

    if (session) {
        return (
            <>

                <div>
                    Logged in as {session.user?.email}
                    <button onClick={() => signOut()}>
                        Logout
                    </button>
                </div>
            </>
        )
    }

    return (
        <>

            <button onClick={() => signIn()}>
                Login
            </button>
        </>
    )
}