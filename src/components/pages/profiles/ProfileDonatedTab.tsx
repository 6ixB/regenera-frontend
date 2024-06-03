import ProfileInformationCards from "./ProfileInformationCards";
import { ProfileTabEnum } from "./ProfileTabs";

export default function ProfileDonatedTab() {
  return (
    <div>
      <ProfileInformationCards type={ProfileTabEnum.DONATED} />
    </div>
  );
}
