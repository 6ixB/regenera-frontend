'use client'

import LongInputGroup from "@/components/forms/LongInputGroup";
import useChatWebSocket from "@/lib/api/secondChatApi";
import { ImageIcon, LucideMessageCircleMore, SendIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function ChatBar(){
  const [inputValue, setInputValue] = useState("");

  const { data: sessionData } = useSession();
  const userId = sessionData?.user.id as string;

  const pathName = usePathname();
  const roomId = pathName.split("/")[2];

  const { chats: socketChats, sendMessage, getChatsInRoom } = useChatWebSocket(roomId, userId);

  const handleSendMessage = () => {
    sendMessage(inputValue, null);
  };

  function handleInputChange(value: string): void {
    setInputValue(value);
  }

  return (
    <div className="flex w-full h-auto bg-light-background-100 gap-5 p-3 justify-between items-center">
      <div className="flex w-full items-center">
        <LongInputGroup
          icon={<LucideMessageCircleMore className="text-light-text-100" />}
          placeholder="Enter a message..."
          onChange={handleInputChange}
        />
      </div>
      <div className="flex w-fit h-full items-center justify-around gap-4 py-2">
        <ImageIcon size={"24px"} className={"text-light-text-100"}  onClick={handleSendMessage}/>
        <SendIcon
          size={"24px"}
          className={"text-light-text-100 cursor-pointer"}
          onClick={handleSendMessage}
        />
      </div>
    </div>
  );
};

