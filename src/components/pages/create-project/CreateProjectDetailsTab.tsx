import cn from "@/lib/utils/cn";
import CreateProjectDetailsTabForm from "./CreateProjectDetailsTabForm";
import { CreateProjectTabEnum } from "./CreateProjectTab";
import { ArrowLeftToLine, ChevronLeft, Undo2 } from "lucide-react";

interface CreateProjectDetailsTabProps{
    handleActiveTab: (tab: CreateProjectTabEnum) => void,
    className?: string
}

export default function CreateProjectDetailsTab({handleActiveTab, className} : CreateProjectDetailsTabProps){

    return (
        <div className={cn(`w-full h-fit flex flex-col items-center gap-4 py-4`, className)}>


            <div className="w-full flex flex-col items-center text-center gap-2 relative">
                <h3 className="font-medium text-3xl text-light-text-100">Launch Your Cleanup Campaign</h3>
                <p className="font-medium text-base text-light-text-200">Lay the groundwork by providing details about your project</p>

                    
                <div className="w-fit flex items-center justify-center absolute top-2 left-0 cursor-pointer" onClick={() => handleActiveTab(CreateProjectTabEnum.TITLE)}>
                    <ChevronLeft className=" text-light-text-100 "/>
                    <p className="font-medium text-base text-light-text-100">Back</p>
                </div>
            </div>

            <CreateProjectDetailsTabForm />
        </div>
    )
}