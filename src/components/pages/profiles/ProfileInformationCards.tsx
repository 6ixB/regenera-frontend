import Card from "@/components/base/Card";
import { ProfileTabEnum } from "./ProfileTabs"
import { ProjectPhaseEnum } from "@/app/(general)/projects/[id]/page";

interface ProfileInformationCardsProps{
    type: ProfileTabEnum
    date: Date,
    header: string,
}

export default function ProfileInformationCards({type, date, header}: ProfileInformationCardsProps){

    if(type === ProfileTabEnum.ABOUT) return

    return (
        <div className="w-full py-4">
            <h2 className="text-lg font-semibold text-light-text-100 py-4">{FormatDateToMonthYear(date)} - {header}</h2>

            <div className="w-full grid gap-6 grid-cols-2 md:grid-cols-3 ">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}

export function FormatDateToMonthYear(date: Date){

    const months = ["January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"];    

    return `${months[date.getMonth()]} ${date.getFullYear()}`
}