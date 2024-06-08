// ProfileCreatedTab.tsx
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProfileInformationCards from "./ProfileInformationCards";
import { ProfileTabEnum } from "./ProfileTabs";
import { fetchOrganizerProjects } from "@/lib/state/features/profiles/fetchCreatedTabSlice";
import { useAppDispatch } from "@/lib/state/hooks";
import { RootState } from "@/lib/state/store";
import { UserProfileEntity } from "@/lib/model/user/user.entity";

interface ProfileCreatedTabProps {
  profileData: UserProfileEntity;
}

export function ProfileCreatedTab({ profileData }: ProfileCreatedTabProps) {

  const dispatch = useAppDispatch();
  const { projects, isFetched, loading, error } = useSelector((state: RootState) => state.fetchCreatedTabSlice);

  useEffect(() => {
    if (!isFetched) {
      dispatch(fetchOrganizerProjects(profileData.user?.id!));
    }
  }, [dispatch, isFetched, profileData.user?.id!]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <ProfileInformationCards type={ProfileTabEnum.CREATED} projects={projects} />
    </div>
  );
};

export default ProfileCreatedTab;
