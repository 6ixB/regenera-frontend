import { Target } from "lucide-react";
import ProjectObjective from "./ProjectObjective";

export default function ProjectObjectives() {
  return (
    <div className={"flex flex-col gap-4"}>
      <div className={"text-light-text-100 flex items-center gap-x-2"}>
        <Target />
        <div className={"text-lg font-medium"}>Objectives</div>
      </div>
      <div className={"grid grid-cols-3 gap-4"}>
        <ProjectObjective />
        <ProjectObjective />
        <ProjectObjective />
        <ProjectObjective />
        <ProjectObjective />
        <ProjectObjective />
        <ProjectObjective />
      </div>
    </div>
  );
}
