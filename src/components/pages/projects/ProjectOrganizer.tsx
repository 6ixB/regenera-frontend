import { ProjectEntity } from "@/lib/model/project/project.entity";
import { UserEntity } from "@/lib/model/user/user.entity";
import { ShieldCheck, Star } from "lucide-react";
import Image from "next/image";

interface ProjectOrganizerProps {
  organizer: UserEntity
}

export default function ProjectOrganizer({ organizer }: ProjectOrganizerProps) {
  return (
    <div className={"flex items-center justify-between"}>
      <div className={"flex items-center gap-x-4"}>
        <div className={"w-11 h-11 bg-light-background-300 rounded-full"}>
          <Image
            width={0}
            height={0}
            sizes={"100vw"}
            className={`w-full h-auto rounded-full border`}
            src={
              organizer.imageUrl || ''
            }
            alt={"Image Description"}
          />
        </div>
        <div className={"flex flex-col justify-center"}>
          <div className={"text-light-text-100 font-medium text-base"}>
            {organizer.username}
          </div>
          <div
            className={
              "bg-gradient-to-r from-light-primary-200 to-light-primary-100 px-2 py-1 text-light-background-100 text-sm"
            }
          >
            Project Organizer
          </div>
        </div>
      </div>
      <div className={"flex flex-col gap-y-1"}>
        <div className={"flex items-center gap-x-1 text-light-text-100"}>
          <Star size={20} />
          <div className={"font-medium"}>{organizer.rating || 231.2}</div>
        </div>
        <div
          className={
            "flex items-center justify-end text-light-accent-100 gap-x-1"
          }
        >
          <ShieldCheck size={16} />
          <div className={"text-sm"}>Trusted</div>
        </div>
      </div>
    </div>
  );
}
