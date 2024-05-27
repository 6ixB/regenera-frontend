import DashboardMainGreetingCard from "@/components/pages/dashboard/dashboard-main/DashboardMainGreetingCard";
import DashboardMainJoinedProjectsCard from "@/components/pages/dashboard/dashboard-main/DashboradMainJoinedProjectsCard";
import DashboardMainMyProjectsCard from "@/components/pages/dashboard/dashboard-main/DashboardMainMyProjectsCard";

export default function Dashboard() {
  return (
    <main
      className={
        "flex-1 w-full h-full p-4 flex flex-col items-center overflow-y-auto bg-light-background-200"
      }
      style={{ scrollbarGutter: "stable" }}
    >
      <div
        className={
          "min-[1280px]:max-w-[1280px] 2xl:max-w-[1536px] w-full h-full flex gap-4"
        }
      >
        <div className={"w-7/12 h-full flex flex-col gap-4"}>
          <DashboardMainGreetingCard />
          <DashboardMainJoinedProjectsCard />
        </div>
        <DashboardMainMyProjectsCard />
      </div>
    </main>
  );
}
