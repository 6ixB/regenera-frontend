import { ProjectObjectiveEntity } from "@/lib/model/project/project.entity";
import Image from "next/image";

interface ProjectObjectiveProps{
  objective: ProjectObjectiveEntity
}

export default function ProjectObjective({objective}: ProjectObjectiveProps) {
  return (
    <div className={"w-full flex flex-col gap-y-2"}>
      <Image
        width={0}
        height={0}
        sizes={"100vw"}
        className={`w-full h-auto rounded border`}
        src={
          objective.imageUrl
        }
        alt={"Image Description"}
      />
      <div className={"text-sm text-light-text-100"}>
        {objective.objective}
      </div>
    </div>
  );
}
