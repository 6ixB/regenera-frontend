import cn from "@/lib/utils/cn";
import Image from "next/image";
import Link from "next/link";
import Progress from "./Progress";
import Badge from "./Badge";
import { ProjectEntity } from "@/lib/model/project/project.entity";
import { FrontendRoutesEnum } from "@/lib/routes";
import {
  getProjectPercentage,
  getProjectPhase,
  getProjectPhaseInformation,
  getProjectProgressByPhase,
} from "@/lib/utils/projectUtils";

interface ProjectCardProps {
  data: ProjectEntity;
  variant?: "outlined" | "no-outlined" | "big";
  className?: string;
}

export default function ProjectCard({
  data,
  variant = "no-outlined",
  className,
}: ProjectCardProps) {
  console.log(data.organizer);

  return (
    <Link href={`${FrontendRoutesEnum.PROJECTS}/${data.id}`}>
      <div className="relative h-full w-full ">
        <div
          className={cn(
            "box-content h-fit w-full -translate-x-4 rounded-b-md  rounded-t-xl p-4 duration-200",
            {
              "has-[:hover]:absolute has-[:hover]:z-30 has-[:hover]:bg-light-background-100 has-[:hover]:shadow-xl has-[:hover]:ring-1 has-[:hover]:ring-light-primary-200":
                variant !== "big",
            },
          )}
        >
          <div
            className={cn(
              "group relative flex h-full w-full cursor-pointer flex-col rounded-b-md rounded-t-xl bg-light-background-100 shadow duration-0 hover:shadow-none",
              {
                "ring-1 ring-light-background-300": variant === "outlined",
              },
              className,
            )}
          >
            <div className="relative h-full w-full overflow-hidden">
              <Image
                width={0}
                height={0}
                sizes={"100vw"}
                className={`h-36 w-full rounded-t-xl object-cover lg:h-52`}
                src={data.imageUrl}
                alt={"Image Description"}
              />
              <Badge
                text={getProjectPhase(data.phase)}
                className="absolute bottom-2 right-2"
              />
            </div>

            <div
              className={"flex h-fit flex-row items-center gap-1 p-4 md:p-5"}
            >
              <div className="m-auto flex w-3/12 flex-shrink-0">
                <Image
                  width={0}
                  height={0}
                  sizes={"100vw"}
                  className={`aspect-square h-auto w-full rounded-full object-cover p-2`}
                  src={data.organizer.imageUrl || ""}
                  alt={"User Profile"}
                />
              </div>

              <div className={"max-w-9/12 flex w-full flex-col truncate"}>
                <h3
                  className={
                    "truncate text-lg font-semibold text-light-text-100"
                  }
                >
                  {data.title}
                </h3>
                <p className={"truncate text-base text-light-text-200"}>
                  {data.address}
                </p>
                <h3 className={"text-base font-semibold text-light-text-200"}>
                  {getProjectPhaseInformation(data)}
                </h3>
              </div>
            </div>

            <Progress
              progress={getProjectProgressByPhase(data)}
              color={"green"}
              background={false}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-b-full rounded-t-sm"
            />

            {variant !== "big" && (
              <div className="hidden px-8 pb-6 pt-0 group-hover:flex ">
                <p className="flex-wrap overflow-hidden break-words text-base text-light-text-100">
                  {data.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
