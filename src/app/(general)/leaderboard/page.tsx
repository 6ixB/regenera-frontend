import LeaderboardTable from "@/components/pages/leaderboard/LeaderboardTable";
import { Trophy } from "lucide-react";

export default function Leaderboard() {
  return (
    <main
      className={
        "container w-full h-full flex flex-col gap-y-4 items-center mt-[60px] md:mt-[69.6px] py-8"
      }
    >
      <div
        className={
          "self-start text-light-text-100 flex flex-col justify-center gap-y-2"
        }
      >
        <div className={"flex items-center gap-x-2"}>
          <Trophy size={28} />
          <div className={"text-3xl font-medium"}>Leaderboard</div>
        </div>
        <div>
          Track the top performers and see how you rank on the leaderboard page.
        </div>
      </div>
      <LeaderboardTable />
    </main>
  );
}
