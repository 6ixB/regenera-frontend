import { ProjectEntity, ProjectObjectiveEntity } from "@/lib/model/project/project.entity";
import { Camera, Plus, PlusCircle, ScanEye } from "lucide-react";
import Image from "next/image";

interface SubmissionProjectFormCardProps {
    objective: ProjectObjectiveEntity,
    idx: number
}

export default function SubmissionProjectFormCard({ objective, idx }: SubmissionProjectFormCardProps) {
    return (
        <div className="w-full h-fit flex flex-col border rounded-lg border-light-background-300 shadow bg-light-background-100 ">

            <div className="w-full flex flex-col hover:cursor-pointer">
                {objective?.submission?.imageUrl ?
                    <Image
                        width={0}
                        height={0}
                        sizes={"100vw"}
                        className={`w-full h-auto max-h-64 aspect-square object-cover border rounded-t-lg`}
                        src={
                            objective?.submission?.imageUrl || ""
                        }
                        alt={"User Profile"} />
                    :
                    <Camera strokeWidth={1.5} className="w-full h-auto text-light-text-100 p-20 max-h-64 aspect-square object-cover border rounded-t-lg" />
                }
            </div>
            <div className="w-full flex flex-col px-4 py-4 gap-y-2">

                <p className="text-lg text-light-text-100 font-medium">{objective.objective}</p>
            </div>
        </div>
    )
}