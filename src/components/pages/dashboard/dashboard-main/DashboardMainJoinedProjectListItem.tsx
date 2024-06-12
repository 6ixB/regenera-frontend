import Badge from "@/components/base/Badge";
import Progress from "@/components/base/Progress";
import { ProjectEntity } from "@/lib/model/project/project.entity";
import Image from "next/image";
import Link from "next/link";

interface DashboardMainJoinedProjectListItemProps {
  project: ProjectEntity;
}

export default function DashboardMainJoinedProjectListItem({
  project,
}: DashboardMainJoinedProjectListItemProps) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className={
        "flex cursor-pointer items-center gap-x-4 rounded-md px-2 py-3 hover:bg-light-background-200"
      }
    >
      <Image
        sizes={"100vw"}
        width={0}
        height={0}
        alt={""}
        src={project.imageUrl}
        className={"size-20 rounded-md bg-light-background-300 object-cover"}
      />
      <div className={"flex min-h-full flex-1 flex-col justify-between"}>
        <div className={"flex items-center justify-between"}>
          <div className={"w-full font-medium text-light-text-100"}>
            {project.title}
          </div>
          <Badge text={project.phase} />
        </div>
        <div className={"flex flex-col text-light-text-100"}>
          <div
            className={"text-xs font-medium"}
          >{`${Math.round(project.funding / project.fundingGoal)}% funded`}</div>
          <div className={"text-xs"}>2.8k donations</div>
        </div>
        <Progress progress={50} />
      </div>
    </Link>
  );
}
