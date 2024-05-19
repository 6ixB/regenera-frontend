import { Star } from "lucide-react";

interface HomeLeaderboardItemProps {
  isTop3?: boolean;
}

export default function HomeLeaderboardItem({
  isTop3 = false,
}: HomeLeaderboardItemProps) {
  return (
    <div
      className={`py-6 px-6 w-full rounded bg-gradient-to-r ${
        isTop3 ? "from-[#DD8C73]" : "from-light-primary-200"
      } to-light-primary-100 border-t border-r border-b border-light-primary-200 text-light-background-100 flex justify-between`}
    >
      <div className={"flex items-center gap-4"}>
        <div className={"w-8 h-6 flex justify-center items-center"}>1</div>
        <div className={"flex gap-x-4"}>
          <div
            className={"w-10 h-10 aspect-square rounded-full bg-light-background-300 m-auto"}
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
    </div>
  );
}
