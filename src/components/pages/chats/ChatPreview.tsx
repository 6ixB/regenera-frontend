import { UserProfileEntity } from "@/lib/model/user/user.entity";
import { Session } from "next-auth";
import Image from "next/image";

export interface ChatProps {
    time: string;
    chat: string;
    sender: UserProfileEntity;
}

export interface ChatPreviewProps {
    chats: ChatProps[];
    session: Session | null
}

export default function ChatPreview({chats, session} : ChatPreviewProps) {

    return (
        <div className="chat-preview space-y-4 p-4 bg-gray-100 rounded-lg">

            {chats.map((chat, index) => {

                // const isSender = chat.sender.userId === session?.user.id;
                const isSender = true

                return (
                    <div key={index} className={`flex items-start mb-4 ${isSender ? 'justify-end' : ''}`}>
                        <div className={`flex items-start`} >
                            {!isSender && <Image src={chat.sender.userId || ''} alt="Profile" className="w-10 h-10 rounded-full mr-3 mt-2 bg-light-primary-100" />}
                            <div className="flex flex-col">
                                {/* <div className={`flex text-sm font-semibold mb-1 ${isSender ? 'justify-end' : 'justify-start'}`}>{chat.sender.user.username}</div> */}
                                <div className={`flex text-sm font-semibold mb-1 ${isSender ? 'justify-end' : 'justify-start'}`}>Tatuil</div>
                                <div className={`relative max-w-xs p-4 rounded-lg shadow ${isSender ? 'bg-light-primary-100 text-white' : 'bg-light-background-300'}`}>
                                    <div className="text-sm">{chat.chat}</div>
                                </div>
                                <div className={`flex text-xs mt-1 ${isSender ? 'right-1 bottom-1 justify-end' : 'left-1 bottom-1 justify-start'}`}>{chat.time}</div>
                            </div>
                            {isSender && <Image src={chat.sender.userId || ''} alt="Profile" className="w-10 h-10 rounded-full ml-3 mt-2" />}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
