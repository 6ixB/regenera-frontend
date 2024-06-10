import Button from "@/components/base/Button";
import Progress from "@/components/base/Progress";
import { Clock } from "lucide-react";
import ProjectTopDonation from "./ProjectTopDonation";
import {
  ProjectDonationEntity,
  ProjectEntity,
} from "@/lib/model/project/project.entity";
import {
  ProjectEntityPhaseEnum,
  getProjectDaysLeft,
  getProjectPercentage,
} from "@/lib/utils/projectUtils";
import { useQuery } from "@tanstack/react-query";
import { getProjectTopDonationsFn } from "@/lib/api/projectApi";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { getUserProfileByIdQueryFn } from "@/lib/api/usersApi";
import { useRouter } from "next/navigation";
import ClientOnlyPortal from "@/components/ClientOnlyPortal";
import IncompleteProfileNoticeModal, {
  IncompleteProfileNoticeModalEnum,
} from "@/components/modal/IncompleteProfileNoticeModal";
import { ProjectSideCardDonation } from "./ProjectSideCardDonation";
import { ProjectSideCardVolunteer } from "./ProjectSideCardVolunteer";

interface ProjectSideCardProps {
  projectData: ProjectEntity;
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

  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [
    isOpenIncompleteProfileDataModal,
    setIsOpenIncompleteProfileDataModal,
  ] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked);
    refetch();
  };

  useEffect(() => {
    if (!isButtonClicked || !userProfileData) {
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
  }, [userProfileData, isButtonClicked, router]);

  const modalNotice =(() => {

    switch(projectData.phase){

      case ProjectEntityPhaseEnum.DONATING:
        return IncompleteProfileNoticeModalEnum.DONATE_PROJECT
      case ProjectEntityPhaseEnum.VOLUNTEERING:
        return IncompleteProfileNoticeModalEnum.VOLUNTEER_PROJECT
      default:
        return IncompleteProfileNoticeModalEnum.DONATE_PROJECT
    }
  })()

  return (
    <div
      className={
        "right-0 top-24 flex h-fit w-full rounded bg-light-background-200 p-4 lg:sticky lg:w-1/3"
      }
    >
      {projectData.phase === ProjectEntityPhaseEnum.DONATING && (
        <ProjectSideCardDonation
          projectData={projectData}
          onClick={handleButtonClick}
        />
      )}
      {projectData.phase === ProjectEntityPhaseEnum.VOLUNTEERING && (
        <ProjectSideCardVolunteer />
      )}
      {isOpenIncompleteProfileDataModal && (
        <ClientOnlyPortal selector="body">
          <IncompleteProfileNoticeModal
            onClose={() => {
              setIsOpenIncompleteProfileDataModal(false);
            }}
            notice={modalNotice}
          />
        </ClientOnlyPortal>
      )}
    </div>
  );
}
