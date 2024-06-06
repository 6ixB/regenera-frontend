import { Search } from "lucide-react";
import SquareInputGroup from "@/components/forms/SquareInputGroup";
import ChatBox from "./ChatBox";

interface ChatListProps {
    id: string;
}
const ChatList : React.FC<ChatListProps> = ({ id })=>{

    return(
        <div className={"w-full bg-light-background-100 pt-2 px-2 flex flex-col gap-2 border-r"}>
            <div className={"w-full"}>
                <SquareInputGroup icon={<Search className="text-light-text-100"/>} placeholder="Search chat..." />
            </div>
            <hr className="border-light-background-300" />
            <div className={"flex flex-col w-full px-1 gap-y-1 pt-2 overflow-y-auto"}>
                <ChatBox message="Jeremy Saputra Tatuil" id="1" idFromURL={id}/>
                <ChatBox message="Anthonio Obert" id="2" idFromURL={id}/>
                <ChatBox message="Mr. Tatuil Ganteng Max Pls Marry Me Pls Pls Pls" id="3" idFromURL={id}/>
                <ChatBox message="Tuan Jeremy" id="4" idFromURL={id}/>
                <ChatBox message="Yang Mulia Jeremy" id="5" idFromURL={id}/>
                <ChatBox message="Jeremy-chan" id="6" idFromURL={id}/>
                <ChatBox message="Tatuil Mixtape" id="7" idFromURL={id}/>
                <ChatBox message="Yang Terhormat Sheryl" id="8" idFromURL={id}/>
                <ChatBox message="Sir. Teresa Sheryl" id="9" idFromURL={id}/>
                <ChatBox message="Naruto" id="10" idFromURL={id}/>
            </div>
        </div>
    )
}

export default ChatList;
