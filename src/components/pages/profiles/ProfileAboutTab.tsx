import { Star } from "lucide-react";
import ProfileAboutInformation from "./ProfileAboutInformation";
import ProfileAboutStats from "./ProfileAboutStats";
import ProfileAboutRankIllustration from "@/components/vector-graphics/ProfileAboutRankIllustration";
import ProfileAboutDonatedIllustration from "@/components/vector-graphics/ProfileAboutDonatedIllustration";
import ProfileAboutVolunteeredIllustration from "@/components/vector-graphics/ProfileAboutVolunteeredIllustration";

export default function ProfileAboutTab(){
    return (
        <div className="w-full flex flex-col gap-4">
            <div className="w-full flex flex-row justify-around py-8">
                <ProfileAboutStats header={'Current Rank'} img={<ProfileAboutRankIllustration />} desc={'#1023'}/>
                <ProfileAboutStats header={'Total Donated'} img={<ProfileAboutDonatedIllustration />} desc={'Rp 100.000'}/>
                <ProfileAboutStats header={'Total Volunteered'} img={<ProfileAboutVolunteeredIllustration />} desc={'20 times'}/>
            </div>

            <ProfileAboutInformation/>
        </div>
    )
}