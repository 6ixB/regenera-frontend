// ProfileCreatedTab.tsx
import React, { useEffect } from "react";
import ProfileInformationCards from "./ProfileInformationCards";
import { ProfileTabEnum } from "./ProfileTabs";
import { UserProfileEntity } from "@/lib/model/user/user.entity";
import { getProjectsByOrganizerFn } from "@/lib/api/projectApi";
import { useQuery } from "@tanstack/react-query";
import { CardSkeletonGrid } from "@/components/base/CardSkeletonGrid";
import { AxiosResponse } from "axios";
import { ProjectEntity } from "@/lib/model/project/project.entity";

interface ProfileCreatedTabProps {
  profileData: UserProfileEntity;
}

export default function ProfileCreatedTab({ profileData }: ProfileCreatedTabProps) {

  const { data: projects, isFetching, isSuccess } = useQuery<AxiosResponse<ProjectEntity[]>>
    ({
      queryKey: ["profileCreatedProjects"],
      queryFn: () => getProjectsByOrganizerFn(profileData.user?.id!),
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
};
