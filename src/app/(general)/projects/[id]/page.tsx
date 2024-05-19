import ProjectDescription from "@/components/pages/projects/ProjectDescription";
import ProjectObjectives from "@/components/pages/projects/ProjectObjectives";
import ProjectOrganizer from "@/components/pages/projects/ProjectOrganizer";
import ProjectRequirements from "@/components/pages/projects/ProjectRequirements";
import ProjectSideCard from "@/components/pages/projects/ProjectSideCard";
import { Flag } from "lucide-react";
import Image from "next/image";

export enum ProjectPhaseEnum {
  DONATING = 'Donating Phase',
  VOLUNTEERING = 'Volunteering Phase',
  COMPLETED = 'Completed'
}

export default function Project() {
  return (
    <main className={"w-full pt-24 pb-8 flex justify-center"}>
      <div className={"container flex flex-col gap-y-4"}>
        <div className={"text-light-text-100 font-medium text-2xl"}>
          Project MK Ultra
        </div>
        <div className={"w-full flex gap-x-8 relative flex-col lg:flex-row"}>
          <div className={"flex flex-col gap-y-8 w-full lg:w-2/3"}>
            <Image
              width={0}
              height={0}
              sizes={"100vw"}
              className={`w-full h-auto rounded border`}
              src={
                "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
              }
              alt={"Image Description"}
            />
            <ProjectOrganizer />
            <hr className={"border-light-background-300"} />
            <ProjectDescription />
            <hr className={"border-light-background-300"} />
            <ProjectObjectives />
            <hr className={"border-light-background-300"} />
            <ProjectRequirements />
            <div className={"text-sm text-light-text-100"}>Created 2d ago</div>
            <div className={"flex items-center gap-x-2"}>
              <Flag size={20} />
              <div className={"text-base text-light-text-100"}>
                Report project
              </div>
            </div>
          </div>
          <ProjectSideCard />
        </div>
      </div>
    </main>
  );
}
