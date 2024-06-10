import { useQuery } from "@tanstack/react-query";
import ProfileInformationCards from "./ProfileInformationCards";
import { ProfileTabEnum } from "./ProfileTabs";
import { AxiosResponse } from "axios";
import { ProjectEntity } from "@/lib/model/project/project.entity";
import { CardSkeletonGrid } from "@/components/base/CardSkeletonGrid";
import { getProjectsByDonatorFn } from "@/lib/api/projectApi";
import { UserProfileEntity } from "@/lib/model/user/user.entity";

interface ProfileDonatedTabProps {
  profileData: UserProfileEntity;
}

export default function ProfileDonatedTab({ profileData }: ProfileDonatedTabProps) {

  const { data: projects, isFetching, isSuccess } = useQuery<AxiosResponse<ProjectEntity[]>>
    ({
      queryKey: ["profileDonatedProjects"],
      queryFn: () => getProjectsByDonatorFn(profileData.user?.id!),
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
      refetchOnMount: true
    });

  return (
    <div>
      {(isFetching && !isSuccess) && (
        <CardSkeletonGrid />
      )}
      {
        (isSuccess && projects.data) &&
        <div className="">
          <ProfileInformationCards type={ProfileTabEnum.CREATED} projects={projects.data} />
        </div>
      }
    </div>
  );
}
