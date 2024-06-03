import ProfileInformationCards from "./ProfileInformationCards";
import { ProfileTabEnum } from "./ProfileTabs";

export default function ProfileVolunteeredTab() {
  return (
    <div>
      <ProfileInformationCards type={ProfileTabEnum.VOLUNTEERED} />
    </div>
  );
}
