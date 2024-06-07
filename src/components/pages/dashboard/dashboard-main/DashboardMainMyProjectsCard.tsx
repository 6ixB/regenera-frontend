import { Leaf } from "lucide-react";
import DashboardMainMyProjectsListItem from "./DashboardMainMyProjectsListItem";

export default function DashboardMainMyProjectsCard() {
  return (
    <div
      className={
        "flex h-full w-5/12 flex-col gap-y-4 rounded border border-light-background-300 bg-light-background-100 py-8 pe-4 ps-8 text-light-text-100"
      }
    >
      <div className={"flex items-center gap-x-2"}>
        <Leaf size={20} className={"text-light-text-100"} />
        <div className={"text-base font-semibold"}>My projects</div>
      </div>
      <div
        className={
          "flex w-full flex-col gap-y-4 overflow-y-hidden pe-4 hover:overflow-y-auto"
        }
        style={{ scrollbarGutter: "stable" }}
      >
        <DashboardMainMyProjectsListItem />
        <DashboardMainMyProjectsListItem />
        <DashboardMainMyProjectsListItem />
        <DashboardMainMyProjectsListItem />
        <DashboardMainMyProjectsListItem />
        <DashboardMainMyProjectsListItem />
        <DashboardMainMyProjectsListItem />
      </div>
    </div>
  );
}
