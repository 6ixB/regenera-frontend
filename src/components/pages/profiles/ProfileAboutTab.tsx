import ProfileAboutAchievements from "./ProfileAboutAchievements";
import ProfileAboutInformation from "./ProfileAboutInformation";

export default function ProfileAboutTab() {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex gap-4">
        <ProfileAboutInformation />
        <ProfileAboutAchievements />
      </div>
    </div>
  );
}
