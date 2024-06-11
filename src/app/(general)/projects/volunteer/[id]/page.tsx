import VolunteerProjectInformation from "@/components/pages/volunteer-project/VolunteerProjectInformation";
import VolunteerProjectForm from "@/components/pages/volunteer-project/VolunterProjectForm";

export default function VolunteerProject({ params }: { params: { id: string } }) {

    return (
        <main className="flex pb-16 pt-32 w-full justify-center">
            <div className="container flex flex-col-reverse md:flex-row-reverse gap-12 items-center ">
                <VolunteerProjectForm id={params.id}/>
                <VolunteerProjectInformation id={params.id} />
            </div>
        </main>
    )
}