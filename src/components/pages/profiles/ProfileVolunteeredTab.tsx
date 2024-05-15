import ProfileInformationCards from "./ProfileInformationCards";
import { ProfileTabEnum } from "./ProfileTabs";

export default function ProfileVolunteeredTab(){
    return (
        <div>
            <ProfileInformationCards type={ProfileTabEnum.VOLUNTEERED} date={new Date('2024-04-03')} header={'5 times'}/>
            <ProfileInformationCards type={ProfileTabEnum.VOLUNTEERED} date={new Date('2024-03-03')} header={'5 times'}/>
            <ProfileInformationCards type={ProfileTabEnum.VOLUNTEERED} date={new Date('2024-02-03')} header={'5 times'}/>

        </div>
    )
}