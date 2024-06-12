import Badge from "@/components/base/Badge";
import Progress from "@/components/base/Progress";
import { ProjectEntity } from "@/lib/model/project/project.entity";
import Image from "next/image";
import Link from "next/link";

interface DashboardMainMyProjectsListItemProps {
  project: ProjectEntity;
}

export default function DashboardMainMyProjectsListItem({
  project,
}: DashboardMainMyProjectsListItemProps) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="relative w-full cursor-pointer rounded-md border border-light-background-300"
    >
      <div className="absolute left-4 top-4 rounded-md bg-light-background-100 bg-opacity-50 p-2 text-light-text-100">
        {project.title}
      </div>
      <Badge text={project.phase} className={"absolute right-4 top-4"} />
      <div
        className={"absolute bottom-0 left-0 flex w-full flex-col gap-y-4 p-4"}
      >
        <div className={"flex w-full flex-col text-light-text-100"}>
          <div
            className={"text-xs font-medium"}
          >{`${Math.round(project.funding / project.fundingGoal)}% funded`}</div>
          <div className={"text-xs"}>2.8k donations</div>
        </div>
        <Progress progress={50} />
      </div>
      <Image
        sizes="100vw"
        width={0}
        height={0}
        alt=""
        src={project.imageUrl}
        className="h-auto w-full rounded-md bg-light-background-300 object-cover"
      />
    </Link>
  );
}
