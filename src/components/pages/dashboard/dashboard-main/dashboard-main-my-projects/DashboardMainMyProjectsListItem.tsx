import Badge from "@/components/base/Badge";
import Progress from "@/components/base/Progress";
import Image from "next/image";
import Link from "next/link";

export default function DashboardMainMyProjectsListItem() {
  return (
    <Link
      href={"/projects/mk-ultra"}
      className="w-full border relative border-light-background-300 rounded-md cursor-pointer"
    >
      <div className="absolute top-4 left-4 p-2 bg-light-background-100 bg-opacity-50 rounded-md text-light-text-100">
        BINUS 2024 Cleaning Movement
      </div>
      <Badge text={"Donating"} className={"absolute top-4 right-4"} />
      <div
        className={"absolute w-full p-4 bottom-0 left-0 flex flex-col gap-y-4"}
      >
        <div className={"w-full flex flex-col text-light-text-100"}>
          <div className={"text-xs font-medium"}>50% funded</div>
          <div className={"text-xs"}>2.8k donations</div>
        </div>
        <Progress progress={50} />
      </div>
      <Image
        sizes="100vw"
        width={0}
        height={0}
        alt=""
        src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
        className="w-full h-auto rounded-md bg-light-background-300 object-cover"
      />
    </Link>
  );
}
