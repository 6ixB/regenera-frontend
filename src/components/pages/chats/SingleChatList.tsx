"use client";

import { CircleUserRound, User, UserCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface SingleChatListProps {
    message: string;
    id: string;
    idFromURL: string;
}

const SingleChatBox: React.FC<SingleChatListProps> = ({ message, id, idFromURL }) => {
    const [secondId, setSecondId] = useState("");
    const router = useRouter();

    return (
        <div className={`w-full flex gap-3 p-2 justify-center rounded-md ${id === idFromURL ? 'bg-light-background-200' : 'bg-light-background-100'}`}>
            <div className={"flex w-1/6"}>
                <UserCircle strokeWidth={1.5} className={"w-full h-full text-light-text-100"}/>
            </div>
            <div className={"w-5/6 flex-row"}>
                <div>
                    {message}
                </div>
                <div className={"text-light-background-300"}>
                    {id}
                    -this is a test message
                </div>
            </div>
        </div>
    );
    
};

export default SingleChatBox;
