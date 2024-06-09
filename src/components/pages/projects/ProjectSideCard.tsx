import Button from "@/components/base/Button";
import Progress from "@/components/base/Progress";
import { Clock } from "lucide-react";
import ProjectTopDonation from "./ProjectTopDonation";
import { ProjectDonationEntity, ProjectEntity } from "@/lib/model/project/project.entity";
import { getProjectDaysLeft, getProjectPercentage } from "@/lib/utils/projectUtils";
import { useQuery } from "@tanstack/react-query";
import { getProjectTopDonationsFn } from "@/lib/api/projectApi";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { getUserProfileByIdQueryFn } from "@/lib/api/usersApi";
import { useRouter } from "next/navigation";
import ClientOnlyPortal from "@/components/ClientOnlyPortal";
import IncompleteProfileNoticeModal, { IncompleteProfileNoticeModalEnum } from "@/components/modal/IncompleteProfileNoticeModal";

interface ProjectSideCardProps {
  projectData: ProjectEntity
}

export default function ProjectSideCard({ projectData }: ProjectSideCardProps) {

  const router = useRouter();

  const { data: session } = useSession();

  const { data: userProfileData, refetch } = useQuery({
    queryKey: ["userProfile"],
    queryFn: () => getUserProfileByIdQueryFn(session?.user.id as string),
    enabled: false,
    refetchOnWindowFocus: false,
  });

  const { data, isFetching, isSuccess } = useQuery<AxiosResponse<{ '_sum': any, 'donatorId': string }[]>>
    ({
      queryKey: ["projectTopDonations"],
      queryFn: () => getProjectTopDonationsFn(projectData.id),
    });

  const topDonations = data?.data

  const [isDonateClicked, setIsDonateClicked] = useState(false);
  const [
    isOpenIncompleteProfileDataModal,
    setIsOpenIncompleteProfileDataModal,
  ] = useState(false);

  useEffect(() => {
    if (!isDonateClicked || !userProfileData) {
      return;
    }

    if (
      !userProfileData.data.address ||
      !userProfileData.data.phone ||
      !userProfileData.data.user.imageUrl
    ) {
      setIsOpenIncompleteProfileDataModal(true);
      return;
    }

    router.push(`/projects/donate/${projectData.id}`);
    router.refresh();
  }, [userProfileData, isDonateClicked, router]);

  if (!topDonations) return

  return (
    <div
      className={
        "flex top-24 right-0 h-fit bg-light-background-200 rounded p-4 w-full lg:w-1/3 lg:sticky"
      }
    >
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
          onClick={() => {
            setIsDonateClicked(true);
            refetch();
          }}
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
      {isOpenIncompleteProfileDataModal && (
        <ClientOnlyPortal selector="body">
          <IncompleteProfileNoticeModal
            onClose={() => {
              setIsOpenIncompleteProfileDataModal(false);
            }}
            notice={IncompleteProfileNoticeModalEnum.DONATE_PROJECT} />
        </ClientOnlyPortal>
      )}
    </div>
  );
}
