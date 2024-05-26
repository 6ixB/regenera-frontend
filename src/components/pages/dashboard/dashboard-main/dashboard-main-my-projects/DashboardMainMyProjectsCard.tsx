import { Leaf } from "lucide-react";
import DashboardMainMyProjectsListItem from "./DashboardMainMyProjectsListItem";

export default function DashboardMainMyProjectsCard() {
  return (
    <div
      className={
        "w-5/12 h-full flex flex-col gap-y-4 bg-light-background-100 border border-light-background-300 text-light-text-100 ps-8 py-8 pe-4 rounded"
      }
    >
      <div className={"flex items-center gap-x-2"}>
        <Leaf size={20} className={"text-light-text-100"} />
        <div className={"text-base font-semibold"}>My projects</div>
      </div>
      <div
        className={
          "w-full flex flex-col gap-y-4 pe-4 overflow-y-hidden hover:overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-light-background-100 [&::-webkit-scrollbar-thumb]:bg-light-background-300 [&::-webkit-scrollbar-thumb]:rounded-full"
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
