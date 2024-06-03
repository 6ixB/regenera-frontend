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
        <div className={"w-full bg-light-background-100 p-2 flex flex-col gap-4"}>
            <div className={"w-full"}>
                <SquareInputGroup icon={<Search/>} placeholder="Search Chat..."/>
            </div>
            <div className={"w-full overflow-y-auto"}>
                <SingleChatBox message="testing" id="1" idFromURL={id}/>
                <SingleChatBox message="testing" id="2" idFromURL={id}/>
                <SingleChatBox message="testing" id="3" idFromURL={id}/>
                <SingleChatBox message="testing" id="4" idFromURL={id}/>
                <SingleChatBox message="testing" id="5" idFromURL={id}/>
                <SingleChatBox message="testing" id="6" idFromURL={id}/>
                <SingleChatBox message="testing" id="7" idFromURL={id}/>
                <SingleChatBox message="testing" id="8" idFromURL={id}/>
                <SingleChatBox message="testing" id="9" idFromURL={id}/>
                <SingleChatBox message="testing" id="10" idFromURL={id}/>
            </div>
        </div>
    )
}

export default ChatList;
