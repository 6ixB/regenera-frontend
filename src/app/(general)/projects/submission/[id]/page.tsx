import DonateProjectForm from "@/components/pages/donate-project/DonateProjectForm";
import DonateProjectInformation from "@/components/pages/donate-project/DonateProjectInformation";
import SubmissionProjectForm from "@/components/pages/submission-project/SubmissionProjectForm";
import SubmissionProjectInformation from "@/components/pages/submission-project/SubmissionProjectInformation";
import { getProjectData } from "@/lib/api/projectApi";
import { auth } from "@/lib/next-auth/auth";
import { notFound } from "next/navigation";

export default async function SubmissionProject({ params }: { params: { id: string } }) {

    const session = await auth()

    const projectData = await getProjectData(params.id);

    if (!projectData) {
        notFound();
    }

    return (
        <main className="flex pb-16 pt-32 w-full justify-center">
            <div className="container flex flex-col-reverse md:flex-row gap-24 px-12">
                <SubmissionProjectForm projectData={projectData} session={session} />
                <SubmissionProjectInformation projectData={projectData} />
            </div>
        </main>
    )
}