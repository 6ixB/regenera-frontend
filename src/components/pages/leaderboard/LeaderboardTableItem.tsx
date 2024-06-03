import { Star } from "lucide-react";
import Link from "next/link";

interface LeaderboardTableItemProps {
  position: number;
  isTop3?: boolean;
}

export default function LeaderboardTableItem({
  position,
  isTop3,
}: LeaderboardTableItemProps) {
  return (
    <Link
      href={"/profiles/1"}
      className={`py-6 px-6 w-full rounded-lg ${isTop3 ? (position == 1 ? "border-2 border-light-accent-100" : "border-2 border-light-primary-200") : "border border-light-background-300"} flex justify-between text-light-text-100 hover:scale-105 cursor-pointer transition-all`}
    >
      <div className={"flex items-center gap-4"}>
        <div
          className={
            "w-8 h-6 flex justify-center items-center font-bold text-xl"
          }
        >
          {position}
        </div>
        <div className={"flex gap-x-4"}>
          <div
            className={
              "size-10 aspect-square rounded-full bg-light-background-300 m-auto"
            }
          ></div>
          <div className={"flex flex-col justify-center"}>
            <div className={"text-base font-medium"}>Example User</div>
            <div className={"text-sm hidden sm:block"}>
              51 projects donated, 21 events participated
            </div>
          </div>
        </div>
      </div>
      <div className={"flex items-center gap-4"}>
        <div className={"flex items-center gap-2"}>
          <Star />
          <div className={"flex items-center"}>213.86</div>
        </div>
        <div className={"bg-light-background-300 w-10 h-10 rounded"}></div>
      </div>
    </Link>
  );
}
