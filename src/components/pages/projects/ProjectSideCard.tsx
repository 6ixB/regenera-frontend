import Button from "@/components/base/Button";
import Progress from "@/components/base/Progress";
import { Clock } from "lucide-react";
import ProjectTopDonation from "./ProjectTopDonation";

export default function ProjectSideCard() {
  return (
    <div
      className={
        "flex mt-4 top-24 right-0 h-fit bg-light-background-200 rounded p-4 w-full lg:w-1/3 lg:sticky"
      }
    >
      <div className={"w-full text-light-text-100 flex flex-col gap-y-4"}>
        <div className={"flex gap-y-1 items-start flex-col"}>
          <div className={"text-xl font-medium my-auto"}>$188,571</div>
          <div className={"text-sm"}>raised of $100,000 goal</div>
        </div>
        <Progress />
        <div className={"flex flex-col text-light-text-100"}>
          <div className={"text-base font-medium"}>188% funded</div>
          <div className={"text-base"}>2.8k donations</div>
        </div>
        <div className={"text-light-text-100 flex items-center gap-x-2"}>
          <Clock size={16} />
          <div className={"text-base"}>Ends in 5 days</div>
        </div>
        <Button
          variant="solid"
          className={
            "bg-gradient-to-r from-light-primary-200 to-light-primary-100 border-none hover:opacity-75"
          }
        >
          Donate
        </Button>
        <div className={"text-light-text-100 text-sm"}>
          <span className={"underline"}>All or nothing.</span> This project will
          only be funded if it reaches its goal by Fri, May 3 2024 4:50 AM UTC
          +07:00.
        </div>
        <div className={"flex flex-col gap-y-2 text-light-text-100"}>
          <div className={"text-lg font-medium"}>Top Donations</div>
          <div className={"flex flex-col gap-y-2"}>
            <ProjectTopDonation />
            <ProjectTopDonation />
            <ProjectTopDonation />
          </div>
        </div>
      </div>
    </div>
  );
}
