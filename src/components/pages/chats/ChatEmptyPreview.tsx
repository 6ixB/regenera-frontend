import { LucideMessageCircleMore, MessageCircle, MessageCircleCode } from "lucide-react";

export default function ChatEmptyPreview() {
    return (
        <div className={"w-full h-full justify-center items-center bg-light-background-200 p-2 flex flex-col gap-6"}>
            <div className={"h-1/6 w-1/6 md:h-1/4 md:w-1/4"}>
                <LucideMessageCircleMore strokeWidth={1} className={"w-full h-full text-light-text-100 drop-shadow-md"} />
            </div>
            <h1 className={"font-medium text-2xl text-light-text-100 drop-shadow-sm"}>
                Start Chatting With Others!
            </h1>
        </div>
    )
}