import Badge from "@/components/base/Badge";
import Progress from "@/components/base/Progress";
import Image from "next/image";
import Link from "next/link";

export default function DashboardMainJoinedProjectListItem() {
  return (
    <Link
      href={"/projects/mk-ultra"}
      className={
        "flex items-center gap-x-4 cursor-pointer rounded-md hover:bg-light-background-200 px-2 py-3"
      }
    >
      <Image
        sizes={"100vw"}
        width={0}
        height={0}
        alt={""}
        src={
          "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
        }
        className={"size-20 rounded-md bg-light-background-300 object-cover"}
      />
      <div className={"flex-1 min-h-full flex flex-col justify-between"}>
        <div className={"flex items-center justify-between"}>
          <div className={"w-full text-light-text-100 font-medium"}>
            BINUS 2024 Cleaning Movement
          </div>
          <Badge text={"Donating"} />
        </div>
        <div className={"flex flex-col text-light-text-100"}>
          <div className={"text-xs font-medium"}>50% funded</div>
          <div className={"text-xs"}>2.8k donations</div>
        </div>
        <Progress progress={50} />
      </div>
    </Link>
  );
}
