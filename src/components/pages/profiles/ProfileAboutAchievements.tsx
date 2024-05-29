import { Award } from "lucide-react";
import AchievementTableItem from "../dashboard/dashboard-achievements/AchievementItem";

export default function ProfileAboutAchievements() {
  return (
    <div className="w-1/3 flex flex-col gap-4 bg-light-background-100 p-6 rounded-md shadow">
      <div className="text-light-text-100 flex items-center gap-x-2">
        <Award size={18} />
        <div className="text-base font-semibold">Achievements</div>
      </div>
      <div className="w-full flex flex-col gap-y-2">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <AchievementTableItem key={index} isCollected={true} />
          ))}
      </div>
    </div>
  );
}
