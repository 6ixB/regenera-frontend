import DummyUserIcon from "@/components/base/DummyUserIcon";
import { UserCircle } from "lucide-react";

interface CharTitleProps {
    groupName: string;
}
const ChatTitle: React.FC<CharTitleProps> = ({ groupName }) => {
    return (
        <div className="w-full h-full flex gap-1 p-2 items-center">
            <DummyUserIcon classNameContainer="bg-light-background-100" classNameIcon="text-light-text-100" />
            <div className="flex h-full items-center font-medium font-base text-light-text-100">
                {groupName}
            </div>
        </div>
    );
};

export default ChatTitle;