import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function HomeFeatured() {
  return (
    <div className={"max-w-[67rem] w-full flex flex-col gap-8"}>
      <div className={"flex items-end gap-x-4"}>
        <div className={"font-medium text-light-text-100 text-2xl"}>
          Featured projects
        </div>
        <Link href={"/discover"} className={"flex items-center text-hyperlink"}>
          <div>Discover more</div>
          <ChevronRight />
        </Link>
      </div>
    </div>
  );
}
