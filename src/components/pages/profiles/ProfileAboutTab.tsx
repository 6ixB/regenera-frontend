import { UserProfileEntity } from "@/lib/model/user/user.entity";
import ProfileAboutAchievements from "./ProfileAboutAchievements";
import ProfileAboutInformation from "./ProfileAboutInformation";

interface ProfileAboutTabProps {
  profileData: UserProfileEntity;
}

export default function ProfileAboutTab({ profileData }: ProfileAboutTabProps) {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex w-full gap-4">
        <ProfileAboutInformation profileData={profileData} />
        <ProfileAboutAchievements />
      </div>
    </div>
  );
}
