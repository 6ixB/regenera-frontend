import { Target } from "lucide-react";
import ProjectObjective from "./ProjectObjective";
import { ProjectObjectiveEntity } from "@/lib/model/project/project.entity";

interface ProjectObjectivesProps{
  objectives: ProjectObjectiveEntity[]
}

export default function ProjectObjectives({objectives}: ProjectObjectivesProps) {
  return (
    <div className={"flex flex-col gap-4"}>
      <div className={"text-light-text-100 flex items-center gap-x-2"}>
        <Target />
        <div className={"text-lg font-medium"}>Objectives</div>
      </div>
      <div className={"grid grid-cols-3 gap-4"}>
        {objectives.map((objective, idx) => (
          <ProjectObjective objective={objective} key={idx} />
        ))}
      </div>
    </div>
  );
}
