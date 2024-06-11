import Button from "@/components/base/Button";
import Progress from "@/components/base/Progress";
import { getProjectTopDonationsFn } from "@/lib/api/projectApi";
import { ProjectEntity } from "@/lib/model/project/project.entity";
import { getProjectDaysLeft, getProjectPercentage, ProjectEntityPhaseEnum } from "@/lib/utils/projectUtils";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { Clock, Users } from "lucide-react";
import ProjectTopDonation from "./ProjectTopDonation";
import { UserEntity } from "@/lib/model/user/user.entity";
import ProjectTopDonationSkeleton from "./ProjectTopDonationSkeleton";
import { useEffect } from "react";

interface ProjectSideCardDonationProps {
  projectData: ProjectEntity,
  isOngoing: Boolean,
  onClick: () => void
}

export function ProjectSideCardDonation({ projectData, isOngoing, onClick }: ProjectSideCardDonationProps) {

  const { data: donations, isFetching, isSuccess, refetch } = useQuery<AxiosResponse<{ 'donator': UserEntity, 'totalAmount': number }[]>>
    ({
      queryKey: ["projectTopDonations"],
      queryFn: () => getProjectTopDonationsFn(projectData.id),
      refetchOnMount: "always"
    });

  useEffect(() => {
    refetch()
  }, [projectData.id])

  const topDonations = donations?.data

  return (
    <div className={"w-full text-light-text-100 flex flex-col gap-y-4 bg-light-background-200  p-4"}>
      <div className={"flex gap-y-1 items-start flex-col"}>
        <div className={"text-xl font-medium my-auto"}>Rp {projectData.funding}</div>
        <div className={"text-sm"}>raised of Rp {projectData.fundingGoal} goal</div>
      </div>
      <Progress progress={getProjectPercentage(projectData.fundingGoal, projectData.funding)} />
      <div className={"flex flex-col text-light-text-100"}>
        <div className={"text-base font-medium"}>{getProjectPercentage(projectData.fundingGoal, projectData.funding)}% funded</div>
        <div className={"text-base"}>{projectData?.donationsCount} donations</div>
      </div>

      {
        isOngoing
        &&
        <>
          <div className={"text-light-text-100 flex items-center gap-x-2"}>

            <Clock size={16} />
            <div className={"text-base"}>Ends in {getProjectDaysLeft(projectData.fundingGoalDeadline)} days</div>

          </div>

          <Button
            variant="solid"
            className={
              "bg-gradient-to-r from-light-primary-200 to-light-primary-100 border-none hover:opacity-75"
            }
            onClick={onClick}
          >
            Donate
          </Button>

          <div className={"text-light-text-100 text-sm"}>
            <span className={"underline"}>All or nothing.</span>
            &nbsp;This project will
            only be funded if it reaches its goal by {(new Date(projectData.fundingGoalDeadline)).toUTCString()}.

          </div>
        </>
      }
      <div className={"flex flex-col gap-y-2 text-light-text-100"}>
        <div className={"text-lg font-medium"}>Top Donations</div>
        <div className={"flex flex-col gap-y-2"}>

          {
            (isFetching && !isSuccess) && (
              <>
                <ProjectTopDonationSkeleton idx={1} />
                <ProjectTopDonationSkeleton idx={2} />
                <ProjectTopDonationSkeleton idx={3} />
              </>)
          }
          {isSuccess && (
            (topDonations && topDonations?.length < 1) ? (
              <p className="text-sm font-medium text-light-accent-100">No donation has been made</p>
            ) : (
              topDonations?.map((donation, idx) => (
                <ProjectTopDonation
                  idx={idx + 1}
                  donator={donation.donator}
                  totalAmount={donation.totalAmount}
                  key={idx}
                />
              ))
            )
          )
          }

        </div>
      </div>
    </div >
  )
}