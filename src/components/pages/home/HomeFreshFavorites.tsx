import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Card from "../../base/Card";

export default function HomeFreshFavorites() {
  return (
    <div className={"w-full bg-light-background-200 flex justify-center h-fit"}>
      <div className={"container py-8 flex flex-col gap-8"}>
        <div className={"flex items-end gap-x-4"}>
          <div className={"font-medium text-light-text-100 text-2xl"}>
            Fresh favorites
          </div>
          <Link
            href={"/discover"}
            className={"flex items-center text-hyperlink"}
          >
            <div>Discover more</div>
            <ChevronRight />
          </Link>
        </div>
        <div className={"w-full grid grid-cols-1 gap-4 md:grid-cols-3"}>
          <Card variant={"outlined"} includeFooter={false} />
          <Card variant={"outlined"} includeFooter={false} />
          <Card variant={"outlined"} includeFooter={false} />
        </div>
      </div>
    </div>
  );
}
