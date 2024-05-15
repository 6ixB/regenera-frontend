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

            <div className="w-full grid grid-cols-3 gap-6">
                <Card phase={ProjectPhaseEnum.COMPLETED} />
                <Card phase={ProjectPhaseEnum.COMPLETED}/>
                <Card phase={ProjectPhaseEnum.COMPLETED}/>
                <Card phase={ProjectPhaseEnum.COMPLETED}/>
                <Card phase={ProjectPhaseEnum.COMPLETED}/>
            </div>
        </div>
    )
}

export function FormatDateToMonthYear(date: Date){

    const months = ["January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"];    

    return `${months[date.getMonth()]} ${date.getFullYear()}`
}