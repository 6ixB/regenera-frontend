import ProjectCard from "@/components/base/ProjectCard";
import { getProjectsByOrganizerFn } from "@/lib/api/projectApi";
import { ProjectEntity } from "@/lib/model/project/project.entity";
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

export default async function DashboardMyProjectCards() {
  const session = await auth();
  const createdProjects = await getCreatedProjects(session?.user.id as string);

  if (!createdProjects) {
    throw new Error("Failed to fetch created projects");
  }

  return (
    <>
      <div className="grid w-full grid-cols-4 gap-6 px-8 py-4">
        {createdProjects.map((project) => (
          <ProjectCard key={project.id} data={project} />
        ))}
      </div>
    </>
  );
}
