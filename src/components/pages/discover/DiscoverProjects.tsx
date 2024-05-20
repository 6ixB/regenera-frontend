import { ProjectPhaseEnum } from "@/app/(general)/projects/[id]/page";
import Card from "@/components/base/Card";

export default function DiscoverProjects(){
    return (
        <div className="w-full h-fit">

            <div className="container flex flex-col">

                <p className="text-lg font-medium text-light-text-200  pt-4">Discover projects</p>

                <div className="w-full h-fit grid grid-cols-3">

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
            </div>

        </div>
    )
}