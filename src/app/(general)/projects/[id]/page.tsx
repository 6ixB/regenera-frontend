'use client'

import ProjectDescription from "@/components/pages/projects/ProjectDescription";
import ProjectObjectives from "@/components/pages/projects/ProjectObjectives";
import ProjectOrganizer from "@/components/pages/projects/ProjectOrganizer";
import ProjectRequirements from "@/components/pages/projects/ProjectRequirements";
import ProjectSideCard from "@/components/pages/projects/ProjectSideCard";
import { getProjectByIdFn } from "@/lib/api/projectApi";
import { ProjectEntity } from "@/lib/model/project/project.entity";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { Flag } from "lucide-react";
import Image from "next/image";

export default function Project({ params }: { params: { id: string } }) {

  const { data, isFetching, isSuccess } = useQuery<AxiosResponse<ProjectEntity>>
    ({
      queryKey: ["projectDetail"],
      queryFn: () => getProjectByIdFn(params.id),
    });

  const projectData = data?.data

  return (
    <main className={"w-full pt-24 pb-8 flex justify-center"}>
      {(isSuccess && projectData) &&
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
                className={`w-full h-auto rounded border`}
                src={
                  projectData.imageUrl
                }
                alt={"Image Description"}
              />
              <ProjectOrganizer organizer={projectData.organizer} />
              <hr className={"border-light-background-300"} />
              <ProjectDescription description={projectData.description}/>
              <hr className={"border-light-background-300"} />
              <ProjectObjectives objectives={projectData.objectives}/>
              <hr className={"border-light-background-300"} />
              <ProjectRequirements requirements={projectData.requirements} />
              <div className={"text-sm text-light-text-100"}>Created 2d ago</div>
              <div className={"flex items-center gap-x-2 cursor-pointer"}>
                <Flag size={20} />
                <div className={"text-base text-light-text-100"}>
                  Report project
                </div>
              </div>
            </div>
            <ProjectSideCard projectData={projectData}/>
          </div>
        </div>
      }
    </main>
  );
}
