import DashboardMain from "@/components/pages/dashboard/dashboard-main/DashboardMain";

export default function Dashboard() {
  return (
    <main
      className={
        "flex-1 w-full h-full p-4 flex flex-col items-center overflow-y-auto bg-light-background-200"
      }
    >
      <DashboardMain />
    </main>
  );
}
