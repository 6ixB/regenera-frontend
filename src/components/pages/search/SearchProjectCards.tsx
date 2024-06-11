import Card from "@/components/base/Card";
import ProjectCard from "@/components/base/ProjectCard";
import { ProjectEntity } from "@/lib/model/project/project.entity";
import { useState } from "react";

interface SearchProjectCardsProps {
  initialProjects: ProjectEntity[];
  activePage: number;
}

export default function SearchProjectCards({
  initialProjects,
  activePage,
}: SearchProjectCardsProps) {
  const [projects, setProjects] = useState<ProjectEntity[]>(initialProjects);

  return (
    <div className="grid h-fit w-full grid-cols-2 gap-4 md:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} data={project} />
      ))}
    </div>
  );
}
