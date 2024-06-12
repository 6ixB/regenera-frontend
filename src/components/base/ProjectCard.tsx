'use client'

import cn from "@/lib/utils/cn";
import Image from "next/image";
import Link from "next/link";
import Progress from "./Progress";
import Badge from "./Badge";
import { ProjectEntity } from "@/lib/model/project/project.entity";
import { FrontendRoutesEnum } from "@/lib/routes";
import { getProjectPercentage, getProjectPhase, getProjectPhaseInformation, getProjectProgressByPhase } from "@/lib/utils/projectUtils";
import { useState } from "react";

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

    const [isImageLoading, setIsImageLoading] = useState(true);

    const handleImageLoad = () => {
        setIsImageLoading(false);
    };

    return (
        <Link href={`${FrontendRoutesEnum.PROJECTS}/${data.id}`}>
            <div className="w-full h-full relative ">
                <div
                    className={cn(
                        "w-full h-fit p-4 rounded-t-xl rounded-b-md  duration-200 -translate-x-4 box-content",
                        {
                            "has-[:hover]:ring-1 has-[:hover]:ring-light-primary-200 has-[:hover]:absolute has-[:hover]:z-30 has-[:hover]:shadow-xl has-[:hover]:bg-light-background-100":
                                variant !== "big",
                        }
                    )}
                >
                    <div
                        className={cn(
                            "w-full h-full flex flex-col rounded-t-xl rounded-b-md cursor-pointer relative shadow group hover:shadow-none duration-0 bg-light-background-100",
                            {
                                "ring-1 ring-light-background-300": variant === "outlined",
                            },
                            className
                        )}
                    >
                        <div className="w-full h-full relative overflow-hidden">
                            <Image
                                width={0}
                                height={0}
                                sizes={"100vw"}
                                className={`w-full lg:h-52 h-36 rounded-t-xl object-cover ${isImageLoading ? 'bg-gray-300 animate-pulse duration-200' : ''}`}
                                src={
                                    data.imageUrl
                                }
                                alt={"Image Description"}
                                onLoad={handleImageLoad}
                            />
                            <Badge text={getProjectPhase(data.phase)} className="absolute bottom-2 right-2" />
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

                            <div className={"max-w-9/12 w-full flex flex-col truncate"}>
                                <h3 className={"text-lg font-semibold text-light-text-100 truncate"}>
                                    {data?.title}
                                </h3>
                                <p className={"text-light-text-200 text-base truncate"}>
                                    {data?.address || "Kemanggisan, Jakarta Barat"}
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
