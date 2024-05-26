import { Star } from "lucide-react";
interface AchievementsTableItemProps {
    position: number;
    isCollected?: boolean;
  }

export default function AchievementsTableItem({
    position,
    isCollected,
  }: AchievementsTableItemProps) {
  return (
    <div
      className={`py-6 px-6 w-full rounded bg-light-background-100 border border-light-primary-200 flex justify-between text-light-background-100 group cursor-pointer transition-all 
        relative`}
    >
      <div className={"flex items-center gap-4 group-hover:scale-95 transition-all"}>
        <div className={"flex gap-x-4"}>
          <div
            className={
              "h-12 w-auto aspect-square rounded-full bg-light-background-300 m-auto"
            }
          ></div>
          <div className={"flex flex-col justify-center text-light-text-100"}>
            <div className={"text-base font-medium text-light-text-100"}>Example Achievement</div>
            <div className={"text-sm hidden sm:block text-light-text-100"}>
              Volunteered 10 Projects
            </div>
          </div>
        </div>
      </div>
      <div className={"flex items-center gap-4"}>
      </div>

      {!isCollected && (
        <div className="absolute w-full h-full bg-light-background-300 bg-opacity-40 top-0 left-0">
        </div>
      )}
    </div>
  );
}
