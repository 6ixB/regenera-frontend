import DashboardJoinedProjectCards from "@/components/pages/dashboard/dashboard-joined-projects/DashboardJoinedProjectCards";
import { Target } from "lucide-react";

export default function DashboardJoinedProjects() {
  return (
    <main
      className={
        "flex h-full w-full flex-1 flex-col items-center overflow-y-hidden bg-light-background-200"
      }
    >
      <div
        className={
          "sticky top-0 z-40 flex w-full items-center gap-x-2 bg-light-background-100 p-6 text-light-text-100 shadow"
        }
      >
        <Target size={20} />
        <div className={"text-xl font-medium "}>Joined projects</div>
      </div>
      <div className={"flex w-full justify-center overflow-y-auto"}>
        <div
          className={
            "flex h-full w-full flex-col items-center min-[1280px]:max-w-[1280px] 2xl:max-w-[1536px]"
          }
          style={{ scrollbarGutter: "stable" }}
        >
          <DashboardJoinedProjectCards />
        </div>
      </div>
    </main>
  );
}
