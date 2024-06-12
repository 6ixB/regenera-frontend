import { ProjectEntity } from "@/lib/model/project/project.entity";
import Image from "next/image";

interface SearchResultProjectItemProps {
  project: ProjectEntity;
}

export default function SearchResultProjectItem({
  project,
}: SearchResultProjectItemProps) {
  return (
    <a
      className="flex w-full items-center gap-x-4 rounded-md bg-light-background-100 p-3 text-light-text-100  hover:bg-light-background-200"
      href={`/projects/${project.id}`}
    >
      <Image
        sizes="100vw"
        width="128"
        height="96"
        src={project.imageUrl}
        alt={project.id}
        className="rounded"
      />
      <div className="flex w-full flex-1 flex-col justify-center">
        <div className="text-base font-semibold">{project.title}</div>
        <div className="text-xs">{`by ${project.organizer.username}`}</div>
        <div className="text-xs">{`${project.funding / project.fundingGoal}% funded`}</div>
      </div>
    </a>
  );
}
