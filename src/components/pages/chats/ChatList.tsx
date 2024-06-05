import InputGroup from "@/components/forms/InputGroup";
import SingleChatBox from "./SingleChatList";
import { Search } from "lucide-react";
import SquareInputGroup from "@/components/forms/SquareInputGroup";
import { useRouter } from "next/router";

interface ChatListProps {
    id: string;
}
const ChatList : React.FC<ChatListProps> = ({ id })=>{

    return(
        <div className={"w-full bg-light-background-100 p-2 flex flex-col gap-4 border-r"}>
            <div className={"w-full"}>
                <SquareInputGroup icon={<Search className="text-light-text-100"/>} placeholder="Search chat..."/>
            </div>
            <hr className="border-light-background-300" />
            <div className={"flex flex-col w-full px-1 gap-y-1 overflow-y-auto"}>
                <SingleChatBox message="Jeremy Saputra Tatuil" id="1" idFromURL={id}/>
                <SingleChatBox message="Anthonio Obert" id="2" idFromURL={id}/>
                <SingleChatBox message="Hello" id="3" idFromURL={id}/>
                <SingleChatBox message="Hello" id="4" idFromURL={id}/>
                <SingleChatBox message="Hello" id="5" idFromURL={id}/>
                <SingleChatBox message="Hello" id="6" idFromURL={id}/>
                <SingleChatBox message="Hello" id="7" idFromURL={id}/>
                <SingleChatBox message="Hello" id="8" idFromURL={id}/>
                <SingleChatBox message="Hello" id="9" idFromURL={id}/>
                <SingleChatBox message="Hello" id="10" idFromURL={id}/>
            </div>
        </div>
    )
}

export default ChatList;
