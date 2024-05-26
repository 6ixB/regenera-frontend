import cn from "@/lib/utils/cn";
import { CreateProjectTabEnum } from "./CreateProjectTab";
import { ChevronLeft } from "lucide-react";
import dynamic from "next/dynamic";

const CreateProjectDetailsTabForm = dynamic(
    () => import("./CreateProjectDetailsTabForm"),
    {
        ssr: false,
    }
);

interface CreateProjectDetailsTabProps {
    handleActiveTab: (tab: CreateProjectTabEnum) => void;
    className?: string;
}

export default function CreateProjectDetailsTab({
    handleActiveTab,
    className,
}: CreateProjectDetailsTabProps) {
    return (
        <div
            className={cn(
                `container h-fit flex flex-col items-center gap-4 py-4 m-auto`,
                className
            )}
        >
            <div className="w-full flex flex-col items-center text-center gap-2 relative">
                <h3 className="font-medium text-3xl text-light-text-100">
                    Launch Your Cleanup Campaign
                </h3>
                <p className="font-medium text-base text-light-text-200">
                    Lay the groundwork by providing details about your project
                </p>

            </div>


            <CreateProjectDetailsTabForm />
        </div>
    );
}
