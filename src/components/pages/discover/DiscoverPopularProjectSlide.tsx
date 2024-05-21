import cn from "@/lib/utils/cn"
import Image from "next/image"

interface DiscoverPopularProjectSlideProps{
    number: number,
    activeNumber: number,
    className?: string,
    onClick: (number: number) => void
}

export default function DiscoverPopularProjectSlide({number, activeNumber, className, onClick}: DiscoverPopularProjectSlideProps){
    
    return (
        <div className={cn('w-full h-[30rem] relative rounded-3xl cursor-pointer transition-transform duration-200 shadow overflow-hidden group'
            , {'flex-shrink-0 w-3/4': number === activeNumber}
            , className
        )} onClick={() => onClick(number)}>
            <Image
                width={0}
                height={0}
                sizes={"100vw"}
                className={cn(`w-full h-full rounded-2xl object-cover transition-all duration-300`
                    ,{'scale-110 group-hover:scale-100': number === activeNumber}
                )}
                src={
                  "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
                }
                alt={"Image Description"}
                
              />
            <div className="w-10 h-auto aspect-square rounded-full bg-black bg-opacity-70 absolute right-3 bottom-3 flex z-20">
                <p className="text-base font-medium text-light-background-100 m-auto">{number}</p>
            </div>

            <div className="absolute w-full h-full bg-black bg-opacity-50 z-10 top-0 left-0 transition-opacity duration-200 opacity-0 
                group-hover:opacity-100 group-hover:shadow-inner "></div>
        </div>
    )
}