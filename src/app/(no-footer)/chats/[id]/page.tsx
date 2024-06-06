import ChatBar from "@/components/pages/chats/ChatBar";
import ChatComponent from "@/components/pages/chats/ChatComponent";
import ChatList from "@/components/pages/chats/ChatList";
import ChatTitle from "@/components/pages/chats/ChatTitle";
import { auth } from "@/lib/next-auth/auth";

export default async function ChosenChats({params}: {params: {id: string}}) {

    console.log(params.id);
    

    const session = await auth()

    return (
        <main className="w-full max-h-screen flex pt-[4.5rem]">
            <div className={"hidden sm:w-1/4 sm:flex"}>
                <ChatList id={params.id} />
            </div>
            <div className={"flex flex-col w-full relative bg-light-background-200 sm:flex sm:w-3/4"}>
                <div className={"flex absolute top w-full h-16 border-b border-light-background-300 bg-light-background-100"}>
                    <ChatTitle groupName={"Testing"} />
                </div>
                <ChatComponent session={session} />
                <div className={"flex absolute bottom-0 w-full min-h-16"}>
                    <ChatBar/>
                </div>
            </div>
        </main>
    )

}