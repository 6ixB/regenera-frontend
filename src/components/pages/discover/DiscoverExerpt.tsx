import Regenera from "@/components/vector-graphics/Regenera";

export default function DiscoverExerpt(){

    return (
        <div className="w-full h-full">

            <div className="container flex flex-col gap-y-4 m-auto items-center">
                <div className=" w-3/4 flex justify-center items-center gap-x-4">

                    <hr className={"w-full border-light-background-300"} />
                    
                    <div className="w-fit flex items-center gap-x-2">
                        <Regenera className={"fill-light-text-100"} />
                        <p className={"text-3xl font-medium text-light-text-100"}>
                            Regenera
                        </p>       
                    </div>
            
                    <hr className={"w-full border-light-background-300"} />
                </div>

                <p className="text-base font-medium text-light-text-200">Become an eco-warrior now</p>
            </div>
        </div>

    )
}