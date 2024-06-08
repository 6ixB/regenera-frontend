"use client";

import SettingsProfileBioCard from "@/components/pages/settings/profile/SettingsProfileBioCard";
import SettingsProfilePersonalInformationCard from "@/components/pages/settings/profile/SettingsProfilePersonalInformationCard";
import SettingsProfilePhotoAndBannerCard from "@/components/pages/settings/profile/SettingsProfilePhotoAndBannerCard";
import SettingsProfileSocialsCard from "@/components/pages/settings/profile/SettingsProfileSocialsCard";
import { UpdateUserProfileDto } from "@/lib/model/user/user.dto";
import { UserProfileEntity } from "@/lib/model/user/user.entity";
import {
  setCurrentUpdateProfileDto,
  setOriginalUpdateProfileDto,
} from "@/lib/state/features/users/updateUserProfileSlice";
import { useAppDispatch, useAppSelector } from "@/lib/state/hooks";
import { RootState } from "@/lib/state/store";
import { useEffect } from "react";

interface SettingsProfileProps {
  profileData: UserProfileEntity;
}

export default function SettingsProfileMain({
  profileData,
}: SettingsProfileProps) {
  const dispatch = useAppDispatch();

  const currentUpdateUserProfileDto = useAppSelector(
    (state: RootState) => state.updateUserProfileDto.current,
  );

  useEffect(() => {
    const originalUpdateUserProileDto: UpdateUserProfileDto = {
      address: profileData.address,
      bio: profileData.bio,
      phone: profileData.phone,
      // Ugly hack to convert date to string
      birthDate: profileData.birthDate
        ? new Date(profileData.birthDate).toISOString().split("T")[0]
        : null,
      instagramUrl: profileData.instagramUrl,
      twitterUrl: profileData.twitterUrl,
      facebookUrl: profileData.facebookUrl,
      linkedinUrl: profileData.linkedinUrl,
      bannerUrl: profileData.bannerUrl,
      imageUrl: profileData.user?.imageUrl,
    };

    dispatch(setCurrentUpdateProfileDto(originalUpdateUserProileDto));
    dispatch(setOriginalUpdateProfileDto(originalUpdateUserProileDto));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex w-full flex-col gap-12 overflow-y-auto p-4 md:px-16 md:py-8">
      <div className="flex w-full justify-center gap-6">
        <div className="flex w-full max-w-[740px] flex-col gap-6">
          <SettingsProfilePhotoAndBannerCard />
          <SettingsProfilePersonalInformationCard />
        </div>
        <div className="flex w-full max-w-[580px] flex-col gap-6">
          <SettingsProfileBioCard />
          <SettingsProfileSocialsCard />
        </div>
      </div>
    </div>
  );
}
