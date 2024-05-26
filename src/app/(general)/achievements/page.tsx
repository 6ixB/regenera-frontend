import AchievementsTable from "@/components/achievements/AchievementsTable";
import LeaderboardTable from "@/components/pages/leaderboard/LeaderboardTable";
import { Award } from "lucide-react";

export default function Achievements() {
  return (
    <main
      className={
        "container w-full h-full flex flex-col gap-y-4 items-center mt-[60px] md:mt-[69.6px] py-8"
      }
    >
      <div
        className={
          "self-start text-3xl font-medium text-light-text-100 flex items-center gap-x-2"
        }
      >
        <Award size={28} />
        <div>Achievements</div>
      </div>
      <AchievementsTable />
    </main>
  );
}
