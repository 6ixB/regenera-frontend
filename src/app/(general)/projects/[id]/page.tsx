import ProjectDescription from "@/components/pages/projects/ProjectDescription";
import ProjectObjectives from "@/components/pages/projects/ProjectObjectives";
import ProjectOrganizer from "@/components/pages/projects/ProjectOrganizer";
import ProjectRequirements from "@/components/pages/projects/ProjectRequirements";
import { getProjectByIdFn, getProjectData } from "@/lib/api/projectApi";
import { ProjectEntity } from "@/lib/model/project/project.entity";
import { getProjectCreatedDaysAgo } from "@/lib/utils/projectUtils";
import { Flag } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { notFound } from "next/navigation";

const ProjectSideCard = dynamic(
  () => import("@/components/pages/projects/ProjectSideCard"),
  {
    ssr: false,
  }
);


export default async function Project({ params }: { params: { id: string } }) {

  const projectData = await getProjectData(params.id);

  if (!projectData) {
    notFound();
  }

  return (
    <main className={"w-full pt-24 pb-8 flex justify-center"}>
      {projectData &&
        <div className={"container flex flex-col gap-y-4"}>
          <div className={"text-light-text-100 font-medium text-2xl"}>
            {projectData.title}
          </div>
          <div className={"w-full flex gap-x-8 relative flex-col lg:flex-row"}>
            <div className={"flex flex-col gap-y-8 w-full lg:w-2/3"}>
              <Image
                width={0}
                height={0}
                sizes={"100vw"}
                className={`w-full h-auto rounded border object-cover`}
                src={
                  projectData.imageUrl
                }
                alt={"Image Description"}
              />
              <ProjectOrganizer organizer={projectData.organizer} />
              <hr className={"border-light-background-300"} />
              <ProjectDescription description={projectData.description} />
              <hr className={"border-light-background-300"} />
              <ProjectObjectives objectives={projectData.objectives} />
              <hr className={"border-light-background-300"} />
              <ProjectRequirements requirements={projectData.requirements} />
              <div className={"text-sm text-light-text-100"}>Created {getProjectCreatedDaysAgo(projectData.createdAt)}</div>
              <div className={"flex items-center gap-x-2 cursor-pointer"}>
                <Flag size={20} />
                <div className={"text-base text-light-text-100"}>
                  Report project
                </div>
              </div>
            </div>
            <ProjectSideCard projectData={projectData} />
          </div>
        </div>
      }
    </main>
  );
}
