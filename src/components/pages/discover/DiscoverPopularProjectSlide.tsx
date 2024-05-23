import cn from "@/lib/utils/cn"
import { MapPin } from "lucide-react"
import Image from "next/image"

interface DiscoverPopularProjectSlideProps{
    number: number,
    activeNumber: number,
    className?: string,
    onClick: (number: number) => void
}

export default function DiscoverPopularProjectSlide({number, activeNumber, className, onClick}: DiscoverPopularProjectSlideProps){
    
    const isActive = number === activeNumber

    return (
        <div className={cn('w-full h-1/5 md:w-2/12 lg:w-1/12 md:h-[30rem] relative rounded-3xl cursor-pointer transition-all duration-[600ms] ease-in-out shadow-[0_6px_14px_-8px_rgba(0,0,0,0.8)] overflow-hidden group'
            , {'h-full md:w-full lg:w-full': isActive}
            , className
        )} onClick={() => onClick(number)}>
            <Image
                width={0}
                height={0}
                sizes={"100vw"}
                className={cn(`w-full h-full rounded-2xl object-cover transition-all duration-300`
                    ,{'scale-110 group-hover:scale-100': isActive}
                )}
                src={
                  "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
                }
                alt={"Image Description"}
                
              />

        
            <div className={`w-auto h-10 aspect-square rounded-full bg-black bg-opacity-70 absolute flex right-3 bottom-3 z-20}`}>
                <p className="text-base font-medium text-light-background-100 m-auto z-20">{number}</p>
            </div>
            
            <div className="absolute w-full h-full bg-black bg-opacity-50 z-10 top-0 left-0 transition-opacity duration-200 opacity-0 
                group-hover:opacity-100 group-hover:shadow-inner">
                {
                    isActive &&
                    <div className="w-full h-full p-8 flex flex-col justify-between gap-1 z-20 absolute top-0 left-0 group-hover:opacity-100">
                        <div className="w-full flex gap-2 items-center transition-transform  duration-[600ms] -translate-y-[500%] group-hover:translate-y-0 group-hover:delay-300">
                            <MapPin className="text-light-accent-100 scale-110"/>
                            <p className="text-xl text-light-background-100 whitespace-nowrap drop-shadow-sm">Kemanggisan, Jakarta Barat</p>
                        </div>
                        <div className="w-full transition-transform duration-[600ms] translate-y-[500%] group-hover:translate-y-0">
                            <h3 className="text-4xl font-medium text-light-background-100 drop-shadow-md whitespace-nowrap">Card Title</h3>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}