"use client";

import DummyUserIcon from '@/components/base/DummyUserIcon';
import { User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

interface ChatBoxProps {
    message: string;
    id: string;
    idFromURL: string;
}

const ChatBox: React.FC<ChatBoxProps> = ({ message, id, idFromURL }) => {

    const router = useRouter();

    const handleOnClick = (id: string)=>{
        const next_url = "/chats/"+id
        router.push(next_url)
    }

    return (
        <div className={`w-full box-border flex gap-1 p-4 rounded-md items-center group ${id === idFromURL ? 'bg-light-primary-100 bg-opacity-50' : 'bg-light-background-100 hover:bg-light-primary-100 hover:bg-opacity-10 '} transition-all cursor-pointer`} onClick={()=>handleOnClick(id)}>
            <DummyUserIcon classNameContainer={"drop-shadow-lg"} />
            <div className={`flex flex-col w-full px-2 truncate`}>
                <h3 className={`text-base font-medium truncate ${id === idFromURL ? '' : ''}`}>
                    {message}
                </h3>
                <p className={`text-md truncate ${id === idFromURL ? 'text-light-background-200' : 'text-light-background-300'}`}>
                    
                </p>
            </div>
        </div>
    );
    
};

export default ChatBox;
