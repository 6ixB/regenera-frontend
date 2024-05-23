import { ProjectPhaseEnum } from "@/app/(general)/projects/[id]/page"
import Card from "@/components/base/Card"

interface DiscoverProjectsCardsProps{
    activePage: number
}

export default function DiscoverProjectsCards({activePage}: DiscoverProjectsCardsProps){
    
    return(

        <div className="w-full h-fit grid gap-4 grid-cols-2 md:grid-cols-3">

            <Card phase={ProjectPhaseEnum.VOLUNTEERING} />
            <Card phase={ProjectPhaseEnum.VOLUNTEERING} />
            <Card phase={ProjectPhaseEnum.VOLUNTEERING} />
            <Card phase={ProjectPhaseEnum.VOLUNTEERING} />
            <Card phase={ProjectPhaseEnum.VOLUNTEERING} />
            <Card phase={ProjectPhaseEnum.VOLUNTEERING} />
            <Card phase={ProjectPhaseEnum.VOLUNTEERING} />
            <Card phase={ProjectPhaseEnum.VOLUNTEERING} />
            <Card phase={ProjectPhaseEnum.VOLUNTEERING} />
            <Card phase={ProjectPhaseEnum.VOLUNTEERING} />
            <Card phase={ProjectPhaseEnum.VOLUNTEERING} />
            <Card phase={ProjectPhaseEnum.VOLUNTEERING} />

        </div>

    )
}