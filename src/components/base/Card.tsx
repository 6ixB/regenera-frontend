import cn from "@/lib/utils/cn";
import Image from "next/image";
import Link from "next/link";
import Progress from "./Progress";
import Badge from "./Badge";
import { ChevronRight, User } from "lucide-react";
import { ProjectPhaseEnum } from "@/app/(general)/projects/[id]/page";


interface CardProps {
  phase: ProjectPhaseEnum,
  variant?: "outlined" | "no-outlined";
  className?: string;
}

export default function Card({
  phase,
  variant = "no-outlined",
  className,
}: CardProps) {
  return (
    <Link href="/projects/mk-ultra">
      <div
        className={cn(
          "w-full h-full flex flex-col bg-light-background-100 rounded-t-xl rounded-b-md cursor-pointer shadow relative group hover:ring hover:ring-light-primary-200 hover:z-40",
          {
            "ring-1 ring-light-background-300": variant === "outlined",
          },
          className
        )}
      >
        <div className="w-full relative ">
          <Image
            width={0}
            height={0}
            sizes={"100vw"}
            className={`w-full h-auto rounded-t-xl object-cover`}
            src={
              "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
            }
            alt={"Image Description"}
          />
            <Badge text={phase} className="absolute bottom-2 right-2" />
        </div>

        <div className={"flex flex-row items-center gap-1 p-4 md:p-5"}>
          <div className="flex m-auto w-3/12">
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

          <div className={"w-full flex flex-col "}>
            <h3 className={"text-lg font-semibold text-light-text-100 "}>
              Card title
            </h3>
            <p className={"text-light-text-200 text-base"}>
              Kemanggisan, Jakarta Barat
            </p>
            <h3 className={"text-base font-semibold text-light-text-200"}>
              19 days left | 120% funded
            </h3>
          </div>
        </div>

        <Progress progress={80.23} color={'green'} background={false} className="absolute bottom-0 rounded-b-full rounded-t-sm -translate-x-1/2 left-1/2" />

        <div className="hidden group-hover:flex pt-0 pb-6 px-8 break-words">
          <p className="text-base text-light-text-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum incidunt ipsa sapiente corrupti fuga. Quaerat, magni in voluptatum illum quidem itaque nam unde tempore consequuntur hic doloremque adipisci vitae?</p>
        </div>
      </div>
    </Link>
  );
}
