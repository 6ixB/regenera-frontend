'use client'

import useChatWebSocket from "@/lib/api/secondChatApi";
import { ChatEntity } from "@/lib/model/chat/chat.entity";
import { UserProfileEntity } from "@/lib/model/user/user.entity";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { format } from 'date-fns';

export interface ChatProps {
  time: string;
  chat: string;
  sender: UserProfileEntity;
}

export interface ChatPreviewProps {
  chats: ChatProps[];
}

export default function ChatPreview({ chats }: ChatPreviewProps) {
  const { data: sessionData } = useSession();
  const userId = sessionData?.user.id as string;

  const pathName = usePathname();
  const roomId = pathName.split("/")[2];

  const { chats: socketChats, sendMessage, getChatsInRoom } = useChatWebSocket(roomId, userId);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['chats', roomId],
    queryFn: () => getChatsInRoom(roomId, userId)
  });

  useEffect(() => {
    if (data) {
      socketChats.length = 0;
      socketChats.push(...data);
    }

    console.log(data);
  }, [data, socketChats]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading chats</div>;
  }

  const allChats = [...socketChats];

  return (
    <div className="chat-preview space-y-4 p-4 bg-gray-100 rounded-lg">
      {allChats.map((chat, index) => {
        const isSender = chat.userId === userId;
        const formattedTime = format(new Date(chat.createdAt), 'yyyy-MM-dd HH:mm:ss');

        return (
          <div key={index} className={`flex items-start mb-4 ${isSender ? 'justify-end' : ''}`}>
            <div className={`flex items-start`}>
              <div className="flex flex-col">
                <div className={`flex text-sm font-semibold mb-1 ${isSender ? 'justify-end' : 'justify-start'}`}>{chat.user.username}</div>
                <div className={`relative max-w-xs p-4 rounded-lg shadow ${isSender ? 'bg-light-primary-100 text-white' : 'bg-light-background-300'}`}>
                  <div className="text-sm">{chat.message}</div>
                </div>
                <div className={`flex text-xs mt-1 ${isSender ? 'right-1 bottom-1 justify-end' : 'left-1 bottom-1 justify-start'}`}>{formattedTime}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
