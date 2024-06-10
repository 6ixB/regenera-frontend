import Button from "@/components/base/Button";
import Progress from "@/components/base/Progress";
import { getProjectTopDonationsFn } from "@/lib/api/projectApi";
import { ProjectEntity } from "@/lib/model/project/project.entity";
import { getProjectDaysLeft, getProjectPercentage } from "@/lib/utils/projectUtils";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { Clock } from "lucide-react";
import ProjectTopDonation from "./ProjectTopDonation";

interface ProjectSideCardDonationProps{
    projectData: ProjectEntity,
    onClick: () => void
}

export function ProjectSideCardDonation({projectData, onClick}: ProjectSideCardDonationProps){

    const { data, isFetching, isSuccess } = useQuery<AxiosResponse<{ '_sum': any, 'donatorId': string }[]>>
    ({
      queryKey: ["projectTopDonations"],
      queryFn: () => getProjectTopDonationsFn(projectData.id),
    });

  const topDonations = data?.data


    return (
        <div className={"w-full text-light-text-100 flex flex-col gap-y-4"}>
        <div className={"flex gap-y-1 items-start flex-col"}>
          <div className={"text-xl font-medium my-auto"}>Rp {projectData.funding}</div>
          <div className={"text-sm"}>raised of Rp {projectData.fundingGoal} goal</div>
        </div>
        <Progress progress={getProjectPercentage(projectData.fundingGoal, projectData.funding)} />
        <div className={"flex flex-col text-light-text-100"}>
          <div className={"text-base font-medium"}>{getProjectPercentage(projectData.fundingGoal, projectData.funding)}% funded</div>
          <div className={"text-base"}>{projectData.donations.length} donations</div>
        </div>
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
          <span className={"underline"}>All or nothing.</span> This project will
          only be funded if it reaches its goal by {(new Date(projectData.fundingGoalDeadline)).toUTCString()}.
        </div>
        <div className={"flex flex-col gap-y-2 text-light-text-100"}>
          <div className={"text-lg font-medium"}>Top Donations</div>
          <div className={"flex flex-col gap-y-2"}>

            {topDonations?.map((donation, idx) => (
              <ProjectTopDonation idx={idx + 1} donatorId={donation.donatorId} sum={donation._sum?.amount} key={idx} />
            ))}
          </div>
        </div>
      </div>
    )
}