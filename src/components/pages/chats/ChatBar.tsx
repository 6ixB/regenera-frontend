import InputGroup from "@/components/forms/InputGroup";
import LongInputGroup from "@/components/forms/LongInputGroup";
import { Image, LucideMessageCircleMore, Send, SendHorizonal, SendIcon, UserCircle } from "lucide-react";

interface CharBarProps {
    groupname: string;
}
const ChatBar: React.FC<CharBarProps> = ({ groupname }) => {
    return (
        <div className="flex w-full h-auto bg-light-background-100 gap-5 p-3 justify-between items-center">
            <div className="flex w-full items-center">
                <LongInputGroup icon={<LucideMessageCircleMore className="text-light-text-100"/>} placeholder="Enter a message..."/>
            </div>
            <div className="flex w-fit h-full items-center justify-around gap-4 py-2">
                <Image className={"h-full w-auto text-light-text-100"}/>
                <SendIcon className={"h-full w-auto text-light-text-100"}/>
            </div>
        </div>
    );
};

export default ChatBar;