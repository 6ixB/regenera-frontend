import { Target } from "lucide-react";
import DashboardMainJoinedProjectListItem from "./DashboardMainJoinedProjectListItem";

export default function DashboardMainJoinedProjectsCard() {
  return (
    <div
      className={
        "row-span-7 flex h-full w-full flex-1 flex-col gap-y-4 overflow-y-hidden rounded-md border border-light-background-300 bg-light-background-100 py-8 pe-4 ps-8 text-light-text-100"
      }
    >
      <div className={"flex items-center gap-x-2"}>
        <Target size={20} className={"text-light-text-100"} />
        <div className={"text-base font-semibold"}>Joined projects</div>
      </div>
      <div
        className={"flex flex-col overflow-y-hidden pe-4 hover:overflow-y-auto"}
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
