import ProfileInformationCards from "./ProfileInformationCards";
import { ProfileTabEnum } from "./ProfileTabs";

export default function ProfileCreatedTab() {
  return (
    <div>
      <ProfileInformationCards type={ProfileTabEnum.CREATED} />
    </div>
  );
}
