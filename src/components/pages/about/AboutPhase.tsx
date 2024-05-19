import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function AboutPhase() {
  return (
    <div className={"container py-8"}>
      <div className={"flex flex-col gap-y-4"}>
        <div className={" flex items-center gap-x-4"}>
          <div
            className={
              "bg-light-primary-200 w-12 h-12 flex justify-center items-center rounded-full text-light-background-100 font-medium text-2xl"
            }
          >
            0
          </div>
          <div className={"text-light-text-200 text-2xl font-medium"}>
            Start a project
          </div>
        </div>
        <div
          className={
            "flex flex-col gap-y-2 border-l-4 border-light-primary-200 ms-[21px] ps-10 py-4"
          }
        >
          <div className={"text-light-text-100 text-base  lg:w-1/2"}>
            Select your cleaning location, snap some before pictures, and
            complete the required information. Then, simply relax and watch your
            environment getting cleaned
          </div>
          <Link
            href={"/projects/create"}
            className={"flex items-center text-hyperlink"}
          >
            <div>Start a project now</div>
            <ChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
