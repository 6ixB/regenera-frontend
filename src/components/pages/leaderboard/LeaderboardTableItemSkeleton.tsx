import { Star } from "lucide-react";

export default function LeaderboarddTableItemSkeleton() {
  return (
    <div
      className={`flex w-full cursor-pointer justify-between rounded-lg border-2 border-light-primary-200 px-6 py-6 text-light-text-100 transition-all hover:scale-105`}
    >
      <div className={"flex items-center gap-4"}>
        <div
          className={
            "flex h-6 w-8 items-center justify-center text-xl font-bold"
          }
        >
          #
        </div>
        <div className={"flex gap-x-4"}>
          <div
            className={
              "m-auto aspect-square size-10 rounded-full bg-light-background-300"
            }
          ></div>
          <div className={"flex flex-col justify-center"}>
            <div className={"text-base font-medium"}>Example User</div>
            <div className={"hidden text-sm sm:block"}>
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
        <div className={"h-10 w-10 rounded bg-light-background-300"}></div>
      </div>
    </div>
  );
}
