import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getPopularProjectsFn } from "@/lib/api/projectApi";
import { ProjectEntity } from "@/lib/model/project/project.entity";
import ProjectCard from "@/components/base/ProjectCard";

async function getFeaturedProjects() {
  try {
    const res = await getPopularProjectsFn();

    if (res.status === 200) {
      return res.data as ProjectEntity[];
    }
  } catch (error) {
    console.log(error);
  }

  return null;
}

export default async function HomeFeatured() {
  const featuredProjects = await getFeaturedProjects();

  if (!featuredProjects) {
    throw new Error("Failed to fetch featured projects");
  }

  return (
    <div
      className={
        "flex h-fit w-full justify-center bg-light-background-100 py-8"
      }
    >
      <div className={"container flex flex-col gap-2"}>
        <div className={"flex items-end gap-x-4"}>
          <div className={"text-2xl font-medium text-light-text-100"}>
            Featured projects
          </div>
          <Link
            href={"/discover"}
            className={"flex items-center text-hyperlink"}
          >
            <div>Discover more</div>
            <ChevronRight />
          </Link>
        </div>
        <div className={"flex w-full flex-col gap-4 lg:flex-row"}>
          <div className={"w-full lg:w-1/2 "}>
            <ProjectCard data={featuredProjects[0]} />
          </div>
          <div
            className={"grid w-full flex-1 grid-cols-2 gap-4 lg:grid-cols-2"}
          >
            {featuredProjects.slice(1).map((project) => (
              <ProjectCard key={project.id} data={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
