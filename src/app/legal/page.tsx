import Layout from "@/components/Layout"
import LegalTabs from "@/components/LegalTabs"

export default function LegalPage() {
    return (
        <Layout>
            <main className="py-16">
                <h1 className="text-4xl font-bold text-center mb-10">Legal Information</h1>
                <LegalTabs />
            </main>
        </Layout>
    )
}