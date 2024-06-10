import {
  ProjectEntity,
} from "@/lib/model/project/project.entity";
import {
  ProjectEntityPhaseEnum,
} from "@/lib/utils/projectUtils";
import { useQuery } from "@tanstack/react-query";

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

  const { data: userProfileData, refetch: refetchProfile } = useQuery({
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
    refetchProfile();
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

    switch (projectData.phase) {

      case ProjectEntityPhaseEnum.DONATING: {

        router.push(`/projects/donate/${projectData.id}`);
        router.refresh()
        return
      }
      case ProjectEntityPhaseEnum.VOLUNTEERING: {

        router.push(`/projects/volunteer/${projectData.id}`);
        return
      }

    }
  }, [userProfileData, isButtonClicked, router]);

  const modalNotice = (() => {

    switch (projectData.phase) {

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
        "right-0 top-24 flex h-fit w-full rounded  lg:sticky lg:w-1/3 flex-col gap-y-4"
      }
    >
      {ProjectEntityPhaseEnum.DONATING !== projectData.phase && (

        <ProjectSideCardVolunteer session={session} projectData={projectData} isOngoing={ProjectEntityPhaseEnum.VOLUNTEERING === projectData.phase} onClick={handleButtonClick} />

      )}
      <ProjectSideCardDonation
        projectData={projectData}
        isOngoing={ProjectEntityPhaseEnum.DONATING === projectData.phase}
        onClick={handleButtonClick}
      />

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
