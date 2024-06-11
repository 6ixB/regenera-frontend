import { UserProfileEntity } from "@/lib/model/user/user.entity";
import ProfileInformationCards from "./ProfileInformationCards";
import { ProfileTabEnum } from "./ProfileTabs";
import { AxiosResponse } from "axios";
import { useQuery } from "@tanstack/react-query";
import { ProjectEntity } from "@/lib/model/project/project.entity";
import { getProjectsByVolunteerFn } from "@/lib/api/projectApi";
import { CardSkeletonGrid } from "@/components/base/CardSkeletonGrid";

interface ProfileVolunteeredTabProps {
  profileData: UserProfileEntity;
}

export default function ProfileVolunteeredTab({ profileData }: ProfileVolunteeredTabProps) {

  const { data: projects, isFetching, isSuccess } = useQuery<AxiosResponse<ProjectEntity[]>>
    ({
      queryKey: ["profileVolunteeredProjects"],
      queryFn: () => getProjectsByVolunteerFn(profileData.user?.id!),
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
      refetchOnMount: "always"
    });

  return (
    <div>
      {(isFetching && !isSuccess) && (
        <CardSkeletonGrid />
      )}
      {
        (isSuccess && projects.data) &&
        <ProfileInformationCards type={ProfileTabEnum.CREATED} projects={projects.data} />
      }
    </div>
  );
}
