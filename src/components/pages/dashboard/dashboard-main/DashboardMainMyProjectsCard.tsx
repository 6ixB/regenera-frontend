import { Leaf } from "lucide-react";
import DashboardMainMyProjectsListItem from "./DashboardMainMyProjectsListItem";
import { ProjectEntity } from "@/lib/model/project/project.entity";
import { getProjectsByOrganizerFn } from "@/lib/api/projectApi";
import { auth } from "@/lib/next-auth/auth";

async function getCreatedProjects(userId: string) {
  try {
    const res = await getProjectsByOrganizerFn(userId);

    if (res.status === 200) {
      return res.data as ProjectEntity[];
    }
  } catch (error) {
    console.log(error);
  }

  return null;
}

export default async function DashboardMainMyProjectsCard() {
  const session = await auth();
  const createdProjects = await getCreatedProjects(session?.user.id as string);

  if (!createdProjects) {
    throw new Error("Failed to fetch created projects");
  }

  return (
    <div
      className={
        "flex h-full w-5/12 flex-col gap-y-4 rounded border border-light-background-300 bg-light-background-100 py-8 pe-4 ps-8 text-light-text-100"
      }
    >
      <div className={"flex items-center gap-x-2"}>
        <Leaf size={20} className={"text-light-text-100"} />
        <div className={"text-base font-semibold"}>My projects</div>
      </div>
      <div
        className={
          "flex w-full flex-col gap-y-4 overflow-y-hidden pe-4 hover:overflow-y-auto"
        }
        style={{ scrollbarGutter: "stable" }}
      >
        {createdProjects.map((project) => (
          <DashboardMainMyProjectsListItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
