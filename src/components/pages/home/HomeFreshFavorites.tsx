import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Card from "../../base/Card";
import { ProjectPhaseEnum } from "@/lib/utils/projectUtils";
import { ProjectEntity } from "@/lib/model/project/project.entity";
import { getLatestProjectsFn } from "@/lib/api/projectApi";
import ProjectCard from "@/components/base/ProjectCard";

async function getLatestProjects() {
  try {
    const res = await getLatestProjectsFn();

    if (res.status === 200) {
      return res.data as ProjectEntity[];
    }
  } catch (error) {
    console.log(error);
  }

  return null;
}

export default async function HomeFreshFavorites() {
  const latestProjects = await getLatestProjects();

  if (!latestProjects) {
    throw new Error("Failed to fetch featured projects");
  }

  return (
    <div className={"flex h-fit w-full justify-center bg-light-background-200"}>
      <div className={"container flex flex-col gap-2 py-10"}>
        <div className={"flex items-end gap-x-4"}>
          <div className={"text-2xl font-medium text-light-text-100"}>
            Fresh favorites
          </div>
          <Link
            href={"/discover"}
            className={"flex items-center text-hyperlink"}
          >
            <div>Discover more</div>
            <ChevronRight />
          </Link>
        </div>
        <div className={"grid w-full grid-cols-1 gap-4 md:grid-cols-3"}>
          {latestProjects.map((project) => (
            <ProjectCard key={project.id} data={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
