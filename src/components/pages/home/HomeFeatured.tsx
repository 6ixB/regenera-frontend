import Link from "next/link";
import Card from "../../base/Card";
import { ChevronRight } from "lucide-react";
import { ProjectPhaseEnum } from "@/app/(general)/projects/[id]/page";

export default function HomeFeatured() {
  return (
    <div className={"w-full bg-light-background-100 py-8 flex justify-center"}>
      <div className={"container w-full flex flex-col gap-8"}>
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
       
      </div>
    </div>
  );
}
