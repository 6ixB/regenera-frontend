"use client";

import ChatBar from "@/components/pages/chats/ChatBar";
import ChatComponent from "@/components/pages/chats/ChatComponent";
import ChatEmptyPreview from "@/components/pages/chats/ChatEmptyPreview";
import ChatList from "@/components/pages/chats/ChatList";
import ChatPreview, { ChatPreviewProps, ChatProbs } from "@/components/pages/chats/ChatPreview";
import ChatTitle from "@/components/pages/chats/ChatTitle";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ChosenChats(){
    const path = usePathname();
    const paths = path.split("/")
    const id:string = paths[3].toString()
    

    return <main className="w-full max-h-screen flex pt-[4.5rem]">
            <div className={"hidden sm:w-1/4 sm:flex"}>
                <ChatList id={id}/>
            </div>
            <div className={"flex flex-col w-full relative bg-light-background-200 sm:flex sm:w-3/4"}>
                <div className={"flex absolute top w-full h-16"}>
                    <ChatTitle groupname="Testing"/>
                </div>
                <ChatComponent/>
                <div className={"flex absolute bottom-0 w-full min-h-16"}>
                    <ChatBar groupname="Testing"/>
                </div>
            </div>
    </main>;
}