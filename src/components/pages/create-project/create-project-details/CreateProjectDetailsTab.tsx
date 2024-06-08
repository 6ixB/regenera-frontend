import cn from "@/lib/utils/cn";
import { CreateProjectTabEnum } from "../CreateProjectTab";
import { ChevronLeft } from "lucide-react";
import { CreateProjectDto } from "@/lib/model/project/project.dto";
import dynamic from "next/dynamic";

const CreateProjectDetailsTabForm = dynamic(
  () => import("./CreateProjectDetailsTabForm"),
  {
    ssr: false,
  },
);

interface CreateProjectDetailsTabProps {
  handleFormData: (data: Partial<CreateProjectDto>, isSubmit?: boolean) => void;
  handleActiveTab: (tab: CreateProjectTabEnum) => void;
  className?: string;
}

export default function CreateProjectDetailsTab({
  handleFormData,
  handleActiveTab,
  className,
}: CreateProjectDetailsTabProps) {
  return (
    <div
      className={cn(
        `container relative m-auto flex h-fit flex-col items-center gap-4 py-4`,
        className,
      )}
    >
      <div className="relative  flex w-11/12 flex-col items-center gap-2 text-center">
        <h3 className="text-3xl font-medium text-light-text-100">
          Launch Your Cleanup Campaign
        </h3>
        <p className="text-base font-medium text-light-text-200">
          Lay the groundwork by providing details about your project
        </p>
      </div>
      <div
        className="absolute left-4 top-5 flex w-fit cursor-pointer items-center justify-center gap-0"
        onClick={() => handleActiveTab(CreateProjectTabEnum.TITLE)}
      >
        <ChevronLeft className=" size-8 text-light-text-100 md:size-6" />
        <p className="hidden text-lg font-medium text-light-text-100 md:block">
          Back
        </p>
      </div>

      <CreateProjectDetailsTabForm handleFormData={handleFormData} />
    </div>
  );
}
