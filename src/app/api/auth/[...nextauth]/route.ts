import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@/lib/prisma"
import bcrypt from "bcrypt"


export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {},
                password: {}
            },

            async authorize(credentials:any) {

                const user = await prisma.user.findUnique({
                    where:{ email: credentials.email }
                })

                if(!user) return null

                const valid = await bcrypt.compare(
                    credentials.password,
                    user.password
                )

                if(!valid) return null

                return {
                    id:user.id,
                    email:user.email
                }
            }
        })
    ],

    session:{
        strategy:"jwt"
    },

    secret:process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }