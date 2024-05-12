import { Star } from "lucide-react";
import ProfileAboutInformation from "./ProfileAboutInformation";
import ProfileAboutStats from "./ProfileAboutStats";

export default function ProfileAboutTab(){
    return (
        <div className="w-full flex flex-col gap-4">
            <div className="w-full flex flex-row justify-around py-8">
                <ProfileAboutStats header={'Current Rank'} img desc={'#1023'}/>
                <ProfileAboutStats header={'Total Donated'} img desc={'Rp 100.000'}/>
                <ProfileAboutStats header={'Total Volunteered'} img desc={'20 times'}/>
            </div>

            <ProfileAboutInformation/>
        </div>
    )
}