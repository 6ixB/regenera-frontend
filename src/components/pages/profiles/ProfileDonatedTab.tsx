import ProfileInformationCards from "./ProfileInformationCards";
import { ProfileTabEnum } from "./ProfileTabs";

export default function ProfileDonatedTab(){
    return (
        <div>
            <ProfileInformationCards type={ProfileTabEnum.DONATED} date={new Date('2024-04-03')} header={'Rp. 100.000,00'}/>
            <ProfileInformationCards type={ProfileTabEnum.DONATED} date={new Date('2024-03-03')} header={'Rp. 100.000,00'}/>
            <ProfileInformationCards type={ProfileTabEnum.DONATED} date={new Date('2024-02-03')} header={'Rp. 100.000,00'}/>

        </div>
    )
}