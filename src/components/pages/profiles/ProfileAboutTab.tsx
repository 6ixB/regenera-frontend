import { Star } from "lucide-react";
import ProfileAboutInformation from "./ProfileAboutInformation";
import ProfileAboutStats from "./ProfileAboutStats";
import ProfileAboutRankIllustration from "@/components/vector-graphics/ProfileAboutRankIllustration";
import ProfileAboutDonatedIllustration from "@/components/vector-graphics/ProfileAboutDonatedIllustration";
import ProfileAboutVolunteeredIllustration from "@/components/vector-graphics/ProfileAboutVolunteeredIllustration";

export default function ProfileAboutTab(){
    return (
        <div className="w-full flex flex-col gap-4">
            <div className="w-full flex flex-row justify-around py-4 md:py-8 gap-x-8">
                <ProfileAboutStats header={'Current Rank'} img={<ProfileAboutRankIllustration className="max-w-[221px]" />} desc={'#1023'}/>
                <ProfileAboutStats header={'Total Donated'} img={<ProfileAboutDonatedIllustration className="max-w-[221px]"/>} desc={'Rp 100.000'}/>
                <ProfileAboutStats header={'Total Volunteered'} img={<ProfileAboutVolunteeredIllustration className="max-w-[270px]" />} desc={'20 times'}/>
            </div>

            <ProfileAboutInformation/>
        </div>
    )
}