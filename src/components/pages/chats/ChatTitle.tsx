import { UserCircle } from "lucide-react";

interface CharTitleProps {
    groupname: string;
}
const ChatTitle: React.FC<CharTitleProps> = ({ groupname }) => {
    return (
        <div className="w-full h-full flex bg-light-background-100 gap-3">
            <div className="flex h-full items-center">
                <UserCircle className={"w-full h-3/4 ml-8"}/>
            </div>
            <div className="flex h-full items-center font-semibold">
                {groupname}
            </div>
        </div>
    );
};

export default ChatTitle;