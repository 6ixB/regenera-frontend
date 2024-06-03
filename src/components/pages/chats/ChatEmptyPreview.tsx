import { LucideMessageCircleMore, MessageCircle, MessageCircleCode } from "lucide-react";

export default function ChatEmptyPreview(){
    return(
        <div className={"w-full h-full justify-center items-center bg-light-background-200 p-2 flex flex-col gap-4"}>
                <div className={"h-1/6 w-1/6 md:h-1/4 md:w-1/4"}>
                    <LucideMessageCircleMore className={"w-full h-full"}/>
                </div>
                <div>
                    Start New Messages !
                </div>
        </div>
    )
}