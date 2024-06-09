import DonateProjectForm from "@/components/pages/donate-project/DonateProjectForm";
import DonateProjectInformation from "@/components/pages/donate-project/DonateProjectInformation";

export default function DonateProject({ params }: { params: { id: string } }) {

    return (
        <main className="flex pb-16 pt-32 w-full justify-center">
            <div className="container flex flex-col-reverse md:flex-row gap-12 ">
                <DonateProjectForm id={params.id}/>
                <DonateProjectInformation id={params.id} />
            </div>
        </main>
    )
}