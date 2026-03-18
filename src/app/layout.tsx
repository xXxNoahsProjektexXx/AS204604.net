import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Cursor from "@/components/Cursor";

export const metadata = {
    title: "AS204604 Network",
    description: "Private networking infrastructure"
}

export default function RootLayout({
                                       children
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="de">
        <body className="bg-black text-white">

        <div className="flex flex-col min-h-screen">

            <Navbar />
            <Cursor />
            <main className="flex-1">

                {children}
            </main>

            <Footer />

        </div>

        </body>
        </html>
    )
}