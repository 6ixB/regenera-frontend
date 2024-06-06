import ChatEmptyPreview from "@/components/pages/chats/ChatEmptyPreview";
import ChatList from "@/components/pages/chats/ChatList";

export default function Chats() {
    return <main className="w-full max-h-screen flex pt-[4.5rem]">
        <div className={"flex w-full sm:w-1/4"}>
            <ChatList id="" />
        </div>
        <div className={"hidden sm:flex sm:w-3/4"}>
            <ChatEmptyPreview />
        </div>
    </main>;
}