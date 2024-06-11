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
        className={`w-full h-32 md:h-40 rounded border object-cover`}
        src={
          objective.imageUrl
        }
        alt={"Image Description"}
      />
      <div className={"text-sm text-light-text-100 font-medium"}>
        {objective.objective}
      </div>
    </div>
  );
}
