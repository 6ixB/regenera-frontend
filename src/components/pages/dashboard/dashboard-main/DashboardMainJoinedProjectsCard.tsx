import { Target } from "lucide-react";
import DashboardMainJoinedProjectListItem from "./DashboardMainJoinedProjectListItem";
import { getProjectsByVolunteerFn } from "@/lib/api/projectApi";
import { ProjectEntity } from "@/lib/model/project/project.entity";
import { auth } from "@/lib/next-auth/auth";
import ProjectSideCard from "../../projects/ProjectSideCard";

async function getJoinedProjects(userId: string) {
  try {
    const res = await getProjectsByVolunteerFn(userId);

    if (res.status === 200) {
      return res.data as ProjectEntity[];
    }
  } catch (error) {
    console.log(error);
  }

  return null;
}

export default async function DashboardMainJoinedProjectsCard() {
  const session = await auth();
  const joinedProjects = await getJoinedProjects(session?.user.id as string);

  if (!joinedProjects) {
    throw new Error("Failed to fetch created projects");
  }

  return (
    <div
      className={
        "row-span-7 flex h-full w-full flex-1 flex-col gap-y-4 overflow-y-hidden rounded-md border border-light-background-300 bg-light-background-100 py-8 pe-4 ps-8 text-light-text-100"
      }
    >
      <div className={"flex items-center gap-x-2"}>
        <Target size={20} className={"text-light-text-100"} />
        <div className={"text-base font-semibold"}>Joined projects</div>
      </div>
      <div
        className={"flex flex-col overflow-y-hidden pe-4 hover:overflow-y-auto"}
        style={{ scrollbarGutter: "stable" }}
      >
        {joinedProjects.map((project) => (
          <DashboardMainJoinedProjectListItem
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </div>
  );
}
