import { UserEntity } from "@/lib/model/user/user.entity";
import { FrontendRoutesEnum } from "@/lib/routes";
import { ShieldCheck, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectOrganizerProps {
  organizer: UserEntity;
}

export default function ProjectOrganizer({ organizer }: ProjectOrganizerProps) {
  return (
    <Link
      href={`${FrontendRoutesEnum.PROFILES}/${organizer.id}`}
      className={"cursor-pointer"}
    >
      <div className={"flex items-center justify-between"}>
        <div
          className={
            "flex items-center gap-x-4 rounded py-2 pe-4 ps-2 hover:bg-light-background-200"
          }
        >
          <div className={"h-11 w-11 rounded-full bg-light-background-300"}>
            <Image
              width={0}
              height={0}
              sizes={"100vw"}
              className={`h-11 w-11 rounded-full border object-cover`}
              src={organizer.imageUrl || ""}
              alt={"Image Description"}
            />
          </div>
          <div className={"flex flex-col justify-center"}>
            <div className={"text-base font-medium text-light-text-100"}>
              {organizer.username}
            </div>
            <div
              className={
                "bg-gradient-to-r from-light-primary-200 to-light-primary-100 px-2 py-1 text-sm text-light-background-100"
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
              "flex items-center justify-end gap-x-1 text-light-accent-100"
            }
          >
            <ShieldCheck size={16} />
            <div className={"text-sm"}>Trusted</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
