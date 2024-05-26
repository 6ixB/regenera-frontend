import { Trophy } from "lucide-react";
import HomeLeaderboardItem from "./HomeLeaderboardItem";
import Link from "next/link";
import { FrontendRoutesEnum } from "@/lib/routes";

export default function HomeLeaderboard() {
  return (
    <div className={"w-full bg-light-primary-100 flex justify-center py-16"}>
      <div
        className={"container text-light-background-100 flex flex-col gap-y-8"}
      >
        <div className={"flex justify-between items-end"}>
          <div className={"flex flex-col gap-4"}>
            <div className={"text-2xl font-medium"}>Global Ranking</div>
            <div className={"flex gap-2"}>
              <Trophy />
              <div className={"text-base"}>Top 5</div>
            </div>
          </div>
          <div className={"text-sm font-semibold"}>
            Total Participants: 23912
          </div>
        </div>
        <div className={"flex flex-col gap-y-2"}>
          <HomeLeaderboardItem isTop3={true} />
          <HomeLeaderboardItem isTop3={true} />
          <HomeLeaderboardItem isTop3={true} />
          <HomeLeaderboardItem />
          <HomeLeaderboardItem />
        </div>
        <Link href={FrontendRoutesEnum.LEADERBOARD.toString()}>
          <div
            className={"text-base text-light-background-100 hover:opacity-75"}
          >
            View more
          </div>
        </Link>
      </div>
    </div>
  );
}
