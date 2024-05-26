import DashboardMainGreetingCard from "./dashboard-main-greeting/DashboardMainGreetingCard";
import DashboardMainJoinedProjectsCard from "./dashboard-main-joined-projects/DashboradMainJoinedProjectsCard";
import DashboardMainMyProjectsCard from "./dashboard-main-my-projects/DashboardMainMyProjectsCard";

export default function DashboardMain() {
  return (
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
  );
}
