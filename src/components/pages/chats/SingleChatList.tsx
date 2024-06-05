"use client";

import { User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

interface SingleChatListProps {
    message: string;
    id: string;
    idFromURL: string;
}

const SingleChatBox: React.FC<SingleChatListProps> = ({ message, id, idFromURL }) => {

    const router = useRouter();

    const handleOnClick=(id:string)=>{
        const next_url = "/chats/"+id
        router.push(next_url)
    }

    return (
        <div className={`w-full flex gap-2 p-4 justify-center rounded-md items-center group ${id === idFromURL ? 'bg-light-primary-100 bg-opacity-50' : 'bg-light-background-100 hover:bg-light-primary-100 hover:bg-opacity-10 '} transition-all cursor-pointer`} onClick={()=>handleOnClick(id)}>
            <div className={"flex w-1/6 h-auto aspect-square rounded-full bg-light-primary-100 p-2 drop-shadow-lg"}>
                <User strokeWidth={1.5} className={"w-full h-full text-light-background-100"}/>
            </div>
            <div className={`w-5/6 px-2`}>
                <h3 className={`text-base font-medium ${id === idFromURL ? '' : ''}`}>
                    {message}
                </h3>
                <p className={`text-md truncate ${id === idFromURL ? 'text-light-background-200' : 'text-light-background-300'}`}>
                    {id}    
                     - this is a test message aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </p>
            </div>
        </div>
    );
    
};

export default SingleChatBox;
