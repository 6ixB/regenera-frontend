import Link from "next/link";
import Card from "../../base/Card";
import { ChevronRight } from "lucide-react";
import { ProjectPhaseEnum } from "@/app/(general)/projects/[id]/page";

export default function HomeFeatured() {
  return (
    <div className={"w-full bg-light-background-100 py-8 flex justify-center h-fit"}>
      <div className={"container  flex flex-col gap-8"}>
        <div className={"flex items-end gap-x-4"}>
          <div className={"font-medium text-light-text-100 text-2xl"}>
            Featured projects
          </div>
          <Link
            href={"/discover"}
            className={"flex items-center text-hyperlink"}
          >
            <div>Discover more</div>
            <ChevronRight />
          </Link>
        </div>
        <div className={"w-full h-[40rem] flex gap-4 md:flex-row"}>
           <div className={"w-full md:w-1/2 "}>
            <Card phase={ProjectPhaseEnum.DONATING} variant={"no-outlined"} />
          </div>
          <div className={"w-full flex-1 grid grid-cols-2 gap-4 relative"}>
            <Card phase={ProjectPhaseEnum.DONATING} variant={"no-outlined"} />
            <Card phase={ProjectPhaseEnum.VOLUNTEERING} variant={"no-outlined"} />
            <Card phase={ProjectPhaseEnum.COMPLETED} variant={"no-outlined"}/>
            <Card phase={ProjectPhaseEnum.COMPLETED} variant={"no-outlined"} />
          </div>
        </div>
      </div>
    </div>
  );
}
