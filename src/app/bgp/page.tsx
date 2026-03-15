import BGPStats from "@/components/BGPStats"

export default function BGPPage(){

    return(

        <div className="max-w-5xl mx-auto p-10">

            <h1 className="text-3xl font-bold mb-6">
                BGP Statistics
            </h1>

            <BGPStats/>

        </div>

    )

}