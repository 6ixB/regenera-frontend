import cn from "@/lib/utils/cn";
import dynamic from "next/dynamic";
import { CreateProjectTabEnum } from "./CreateProjectTab";

const CreateProjectTitleTabForm = dynamic(
  () => import("./CreateProjectTitleTabForm"),
  {
    ssr: false,
  }
);

interface CreateProjectTitleTabProps{
    handleActiveTab: (tab: CreateProjectTabEnum) => void,
    className?: string
}

export default function CreateProjectTitleTab({handleActiveTab, className} : CreateProjectTitleTabProps) {
  return (
    <div className={cn(`container h-fit flex flex-col items-center gap-10 py-4 m-auto `, className)}>
        <div className="w-full flex flex-col items-center text-center gap-2">
            <h3 className="font-medium text-3xl text-light-text-100">
            Initiate a Cleaner Tomorrow
            </h3>
            <p className="font-medium text-base text-light-text-200">
            Kickstart your cleanup project by giving a compelling title and
            eye-catching photo
            </p>
        </div>

        <CreateProjectTitleTabForm handleActiveTab={handleActiveTab} />
    </div>
  );
}
