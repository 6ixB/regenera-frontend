import Button from "@/components/base/Button"
import Progress from "@/components/base/Progress"
import { getProjectsByVolunteerFn } from "@/lib/api/projectApi"
import { ProjectEntity } from "@/lib/model/project/project.entity"
import { getProjectDaysLeft, getProjectPercentage, ProjectEntityPhaseEnum } from "@/lib/utils/projectUtils"
import { useQuery } from "@tanstack/react-query"
import { AxiosResponse } from "axios"
import { Clock, ShieldEllipsis } from "lucide-react"
import { Session } from "next-auth"

interface ProjectSideCardOngoingProps {
    projectData: ProjectEntity,
    isOngoing: boolean,
    isOrganizer: boolean,
    session: Session | null,
    onClick: () => void
}

export function ProjectSideCardOngoing({ session, projectData, isOngoing, isOrganizer, onClick }: ProjectSideCardOngoingProps) {


    return (
        <div className={"w-full text-light-text-100 flex flex-col gap-y-4 bg-light-background-200 p-4"}>
            <div className={"flex gap-y-1 items-start flex-col"}>
                <div className={"text-xl font-medium my-auto flex gap-x-2 items-center"}>
                    <ShieldEllipsis />
                    <p>
                        Ongoing Project
                    </p>
                </div>

                <div className={"text-sm"}>waiting for organizer approval</div>
            </div>

            {isOngoing &&
                <>
                    <Button
                        variant="solid"
                        className={
                            "bg-gradient-to-r from-light-primary-200 to-light-primary-100 border-none hover:opacity-75"
                        }
                        onClick={onClick}
                    >
                        Submission
                    </Button>

                    <div className={"text-light-text-100 text-sm"}>
                        <span className={"underline"}>Submission is verified by the organizer</span>
                    </div>
                </>
            }

    </div >
    )
}