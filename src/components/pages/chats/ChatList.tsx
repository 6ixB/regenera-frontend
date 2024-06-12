'use client'

import { Search } from "lucide-react";
import SquareInputGroup from "@/components/forms/SquareInputGroup";
import ChatBox from "./ChatBox";
import { useEffect, useState } from "react";
import { findAllByUserId } from "@/lib/api/chatRoomRelationApi";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ChatRoomEntity } from "@/lib/model/chat/chat.entity";
import { auth } from "@/lib/next-auth/auth";
import { useSession } from "next-auth/react";

interface ChatListProps {
    id: string;
    title: string;
}
const ChatList : React.FC<ChatListProps> = ({ id })=>{
    const session = useSession();
    const userid = session.data?.user.id as string;

    const { data, isLoading, isError } = useQuery<AxiosResponse<ChatRoomEntity[]>>
    ({
        queryKey: ['chatRoom'],
        queryFn: () => findAllByUserId(userid)
    });

    const chatRooms = data?.data;

    console.log(chatRooms);

    return(
        <div className={"w-full bg-light-background-100 pt-2 px-2 flex flex-col gap-2 border-r"}>
            <div className={"w-full"}>
                <SquareInputGroup icon={<Search className="text-light-text-100"/>} placeholder="Search chat..." />
            </div>
            <hr className="border-light-background-300" />
            <div className={"flex flex-col w-full px-1 gap-y-1 pt-2 overflow-y-auto"}>             
            {chatRooms && chatRooms.map((chatRoom) => (
                <ChatBox
                    key={chatRoom.id} 
                    message={chatRoom.title} 
                    id={chatRoom.id} 
                    idFromURL={id}
                />
            ))}
            </div>  
        </div>
    )
}

export default ChatList;
