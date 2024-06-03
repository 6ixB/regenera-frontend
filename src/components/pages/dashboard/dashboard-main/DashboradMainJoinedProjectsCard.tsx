import { Target } from "lucide-react";
import DashboardMainJoinedProjectListItem from "./DashboardMainJoinedProjectListItem";

export default function DashboardMainJoinedProjectsCard() {
  return (
    <div
      className={
        "flex-1 h-full w-full flex flex-col gap-y-4 bg-light-background-100 border border-light-background-300 text-light-text-100 ps-8 py-8 pe-4 rounded-md row-span-7 overflow-y-hidden"
      }
    >
      <div className={"flex items-center gap-x-2"}>
        <Target size={20} className={"text-light-text-100"} />
        <div className={"text-base font-semibold"}>Joined projects</div>
      </div>
      <div
        className={
          "flex flex-col pe-4 overflow-y-hidden hover:overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-light-background-100 [&::-webkit-scrollbar-thumb]:bg-light-background-300 [&::-webkit-scrollbar-thumb]:rounded-full"
        }
        style={{ scrollbarGutter: "stable" }}
      >
        <DashboardMainJoinedProjectListItem />
        <DashboardMainJoinedProjectListItem />
        <DashboardMainJoinedProjectListItem />
        <DashboardMainJoinedProjectListItem />
        <DashboardMainJoinedProjectListItem />
        <DashboardMainJoinedProjectListItem />
        <DashboardMainJoinedProjectListItem />
        <DashboardMainJoinedProjectListItem />
      </div>
    </div>
  );
}
