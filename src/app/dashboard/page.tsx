import DashboardMainGreetingCard from "@/components/pages/dashboard/dashboard-main/DashboardMainGreetingCard";
import DashboardMainJoinedProjectsCard from "@/components/pages/dashboard/dashboard-main/DashboardMainJoinedProjectsCard";
import DashboardMainMyProjectsCard from "@/components/pages/dashboard/dashboard-main/DashboardMainMyProjectsCard";

export default function Dashboard() {
  return (
    <main
      className={
        "flex h-full w-full flex-1 flex-col items-center overflow-y-auto bg-light-background-200 p-4"
      }
      style={{ scrollbarGutter: "stable" }}
    >
      <div
        className={
          "flex h-full w-full gap-4 min-[1280px]:max-w-[1280px] 2xl:max-w-[1536px]"
        }
      >
        <div className={"flex h-full w-7/12 flex-col gap-4"}>
          <DashboardMainGreetingCard />
          <DashboardMainJoinedProjectsCard />
        </div>
        <DashboardMainMyProjectsCard />
      </div>
    </main>
  );
}
