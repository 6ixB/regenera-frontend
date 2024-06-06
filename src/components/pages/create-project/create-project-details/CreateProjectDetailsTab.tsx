import cn from "@/lib/utils/cn";
import { CreateProjectTabEnum } from "../CreateProjectTab";
import { ChevronLeft } from "lucide-react";
import CreateProjectDetailsTabForm from "./CreateProjectDetailsTabForm";
import { CreateProjectDto } from "@/lib/model/project/project.dto";

interface CreateProjectDetailsTabProps {
    handleFormData: (data: Partial<CreateProjectDto>, isSubmit?: boolean) => void
    handleActiveTab: (tab: CreateProjectTabEnum) => void,
    className?: string
}

export default function CreateProjectDetailsTab({ handleFormData, handleActiveTab, className }: CreateProjectDetailsTabProps) {

    return (
        <div className={cn(`container h-fit flex flex-col items-center gap-4 py-4 m-auto relative`, className)}>


            <div className="w-11/12  flex flex-col items-center text-center gap-2 relative">
                <h3 className="font-medium text-3xl text-light-text-100">Launch Your Cleanup Campaign</h3>
                <p className="font-medium text-base text-light-text-200">Lay the groundwork by providing details about your project</p>

            </div>
            <div className="w-fit flex items-center justify-center absolute top-5 left-4 cursor-pointer gap-0" onClick={() => handleActiveTab(CreateProjectTabEnum.TITLE)}>
                <ChevronLeft className=" text-light-text-100 size-8 md:size-6" />
                <p className="font-medium text-lg text-light-text-100 hidden md:block">Back</p>
            </div>

            <CreateProjectDetailsTabForm handleFormData={handleFormData} />

        </div>
    )
}