import Card from "@/components/base/Card";
import ProjectCard from "@/components/base/ProjectCard";
import { getProjectsByVolunteerFn } from "@/lib/api/projectApi";
import { ProjectEntity } from "@/lib/model/project/project.entity";
import { auth } from "@/lib/next-auth/auth";
import { ProjectPhaseEnum } from "@/lib/utils/projectUtils";

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

export default async function DashboardJoinedProjectCards() {
  const session = await auth();
  const joinedProjects = await getJoinedProjects(session?.user.id as string);

  if (!joinedProjects) {
    throw new Error("Failed to fetch created projects");
  }

  return (
    <>
      <div className="grid w-full grid-cols-4 gap-6 px-8 py-4">
        {joinedProjects.map((project) => (
          <ProjectCard key={project.id} data={project} />
        ))}
      </div>
    </>
  );
}
