import cn from "@/lib/utils/cn";
import Image from "next/image";
import Link from "next/link";
import Progress from "./Progress";
import Badge from "./Badge";
import { ProjectEntity } from "@/lib/model/project/project.entity";
import { calculateDaysLeft, calculateFundingPercentage, getProjectPhase } from "@/lib/utils/projectUtils";
import { FrontendRoutesEnum } from "@/lib/routes";

interface ProjectCardProps {
    data: ProjectEntity
    variant?: "outlined" | "no-outlined" | "big";
    className?: string;
}

export default function ProjectCard({
    data,
    variant = "no-outlined",
    className,
}: ProjectCardProps) {

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
                        <div className="w-full h-full relative ">
                            <Image
                                width={0}
                                height={0}
                                sizes={"100vw"}
                                className={`w-full h-full rounded-t-xl object-cover`}
                                src={
                                    data.imageUrl
                                }
                                alt={"Image Description"}
                            />
                            <Badge text={getProjectPhase(data.phase)} className="absolute bottom-2 right-2" />
                        </div>

                        <div
                            className={"h-fit flex flex-row items-center gap-1 p-4 md:p-5"}
                        >
                            <div className="flex m-auto w-3/12 flex-shrink-0">
                                <Image
                                    width={0}
                                    height={0}
                                    sizes={"100vw"}
                                    className={`w-full h-auto aspect-square rounded-full object-cover p-2`}
                                    src={
                                        "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
                                    }
                                    alt={"User Profile"}
                                />
                            </div>

                            <div className={"max-w-9/12 w-full flex flex-col truncate"}>
                                <h3 className={"text-lg font-semibold text-light-text-100 truncate"}>
                                    {data.title}
                                </h3>
                                <p className={"text-light-text-200 text-base truncate"}>
                                    {data.address}
                                </p>
                                <h3 className={"text-base font-semibold text-light-text-200"}>
                                    {calculateDaysLeft(data.deadline)} | {calculateFundingPercentage(data.fundingGoal)}%
                                </h3>
                            </div>
                        </div>

                        <Progress
                            progress={calculateFundingPercentage(data.fundingGoal)}
                            color={"green"}
                            background={false}
                            className="absolute bottom-0 rounded-b-full rounded-t-sm -translate-x-1/2 left-1/2"
                        />

                        {variant !== "big" && (
                            <div className="hidden group-hover:flex pt-0 pb-6 px-8 break-words">
                                <p className="text-base text-light-text-100">
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