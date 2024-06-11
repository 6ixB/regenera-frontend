import Button from "@/components/base/Button"
import Progress from "@/components/base/Progress"
import { getProjectsByVolunteerFn } from "@/lib/api/projectApi"
import { ProjectEntity } from "@/lib/model/project/project.entity"
import { getProjectDaysLeft, getProjectPercentage, ProjectEntityPhaseEnum } from "@/lib/utils/projectUtils"
import { useQuery } from "@tanstack/react-query"
import { AxiosResponse } from "axios"
import { Clock, Users } from "lucide-react"
import { Session } from "next-auth"
import { useEffect, useState } from "react"

interface ProjectSideCardVolunteerProps {
    projectData: ProjectEntity,
    isOngoing: boolean,
    session: Session | null,
    onClick: () => void
}

export function ProjectSideCardVolunteer({ session, projectData, isOngoing, onClick }: ProjectSideCardVolunteerProps) {

    const { data: volunteeredProjects, isFetching, isSuccess, refetch: refetchVolunteeredProjects } = useQuery<AxiosResponse<ProjectEntity[]>>
        ({
            queryKey: ["volunteeredProjects"],
            queryFn: () => getProjectsByVolunteerFn(session?.user.id as string),
            refetchOnWindowFocus: false,
        });


    const [isVolunteered, setIsVolunteered] = useState(
        volunteeredProjects?.data.some((project) => project.id === projectData.id)
    );

    useEffect(() => {

        setIsVolunteered(
            volunteeredProjects?.data.some((project) => project.id === projectData.id)
        );
    }, [volunteeredProjects, projectData]);

    return (
        <div className={"w-full text-light-text-100 flex flex-col gap-y-4 bg-light-background-200 p-4"}>
            <div className={"flex gap-y-1 items-start flex-col"}>
                <div className={"text-xl font-medium my-auto flex gap-x-2"}>
                    <Users />
                    <p>
                        {projectData.volunteersCount}
                    </p>
                </div>

                <div className={"text-sm"}>joined out of {projectData.volunteerGoal} volunteers </div>
            </div>
            <Progress progress={getProjectPercentage(projectData.volunteerGoal, projectData.volunteersCount)} />
            {
                projectData.volunteersCount < projectData.volunteerGoal ?
                    <div className={"text-base font-medium text-light-text-100"}>{projectData.volunteerGoal - projectData.volunteersCount} more to proceed </div>
                    :
                    <div className={"text-base font-medium text-light-text-100"}>{projectData.volunteersCount - projectData.volunteerGoal} extra volunteers has joined! </div>
            }
            {isOngoing &&
                <>
                    <div className={"text-light-text-100 flex items-center gap-x-2"}>
                        <Clock size={16} />
                        <div className={"text-base"}>Ends in {getProjectDaysLeft(projectData.volunteerGoalDeadline)} days</div>
                    </div>
                    {
                        !isVolunteered ?
                            <Button
                                variant="solid"
                                className={
                                    "bg-gradient-to-r from-light-primary-200 to-light-primary-100 border-none hover:opacity-75"
                                }
                                onClick={onClick}
                            >
                                Volunteer
                            </Button>
                            :
                            <Button
                                variant="solid"
                                className={
                                    "bg-gradient-to-r from-light-primary-200 to-light-primary-100 border-none opacity-75 hover:opacity-75 "
                                }

                            >
                                Already a Volunteer
                            </Button>
                    }
                    <div className={"text-light-text-100 text-sm"}>
                        <span className={"underline"}>All or nothing.</span>
                        &nbsp;This project will only be realized if it reaches its minimum number of volunteers by {(new Date(projectData.volunteerGoalDeadline)).toUTCString()}.
                    </div>
                </>
            }

        </div >
    )
}