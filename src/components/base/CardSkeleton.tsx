import cn from "@/lib/utils/cn";


export default function CardSkeleton(

) {
    return (
        <div
            className={cn(
                "w-full h-fit p-4 rounded-t-xl rounded-b-md  duration-200 -translate-x-4 box-content animate-pulse",

            )}
        >
            <div
                className={cn(
                    "w-full h-full flex flex-col rounded-t-xl rounded-b-md cursor-pointer relative shadow group hover:shadow-none duration-0 bg-light-background-100",

                )}
            >
                <div className="flex items-center justify-center lg:h-52 h-36 bg-gray-300 rounded-t-xl relative">
                    <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    </svg>
                    <div className="absolute bottom-2 right-2 bg-gray-200 w-5/12 h-3 rounded-xl">
                    </div>
                </div>

                <div
                    className={"h-fit flex flex-row items-center gap-2 p-4 md:p-5"}
                >
                    <div className="flex m-auto w-3/12">

                        <div className="w-full h-auto aspect-square rounded-full object-cover bg-gray-200">

                        </div>

                    </div>

                    <div className={"w-full flex flex-col gap-2"}>
                        <div className="bg-gray-200 w-1/3 h-3 rounded-xl">
                        </div>
                        <div className="bg-gray-200 w-2/3 h-3 rounded-xl">
                        </div>
                        <div className="bg-gray-200 w-full h-3 rounded-xl">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
