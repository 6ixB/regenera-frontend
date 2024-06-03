import DashboardMyProjectCards from "@/components/pages/dashboard/dashboard-my-projects/DashboardMyProjectCards";
import { Leaf } from "lucide-react";

export default function DashboardMyProjects() {
  return (
    <main
      className={
        "flex-1 w-full h-full flex flex-col items-center overflow-y-hidden bg-light-background-200"
      }
    >
      <div
        className={
          "z-40 sticky top-0 text-light-text-100 flex items-center gap-x-2 bg-light-background-100 w-full p-6 shadow"
        }
      >
        <Leaf size={20} />
        <div className={"text-xl font-medium "}>My projects</div>
      </div>
      <div
        className={
          "w-full flex justify-center overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-light-background-300 [&::-webkit-scrollbar-thumb]:rounded-full"
        }
      >
        <div
          className={
            "min-[1280px]:max-w-[1280px] 2xl:max-w-[1536px] w-full h-full flex flex-col items-center"
          }
          style={{ scrollbarGutter: "stable" }}
        >
          <DashboardMyProjectCards />
        </div>
      </div>
    </main>
  );
}
