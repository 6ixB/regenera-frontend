import LongInputGroup from "@/components/forms/LongInputGroup";
import { ImageIcon, LucideMessageCircleMore, SendIcon } from "lucide-react";

export default function ChatBar(){
  return (
    <div className="flex w-full h-auto bg-light-background-100 gap-5 p-3 justify-between items-center">
      <div className="flex w-full items-center">
        <LongInputGroup
          icon={<LucideMessageCircleMore className="text-light-text-100" />}
          placeholder="Enter a message..."
        />
      </div>
      <div className="flex w-fit h-full items-center justify-around gap-4 py-2">
        <ImageIcon size={"24px"} className={"text-light-text-100"} />
        <SendIcon size={"24px"} className={"text-light-text-100"} />
      </div>
    </div>
  );
};

