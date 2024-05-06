import Link from "next/link";
import Card from "../../base/Card";
import { ChevronRight } from "lucide-react";

export default function HomeFeatured() {
  return (
    <div className={"w-full bg-light-background-100 py-8 flex justify-center"}>
      <div className={"max-w-[67rem] w-full flex flex-col gap-8"}>
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
        <div className={"w-full flex gap-4"}>
          <div className={"w-1/2"}>
            <Card variant={"no-outlined"} />
          </div>
          <div className={"w-full flex-1 grid grid-cols-2 gap-4"}>
            <Card variant={"no-outlined"} />
            <Card variant={"no-outlined"} />
            <Card variant={"no-outlined"} />
            <Card variant={"no-outlined"} />
          </div>
        </div>
      </div>
    </div>
  );
}
