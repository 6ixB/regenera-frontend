import Image from "next/image";

export default function ProjectObjective() {
  return (
    <div className={"w-full flex flex-col gap-y-2"}>
      <Image
        width={0}
        height={0}
        sizes={"100vw"}
        className={`w-full h-auto rounded border`}
        src={
          "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
        }
        alt={"Image Description"}
      />
      <div className={"text-sm text-light-text-100"}>
        Scrape the walls clean
      </div>
    </div>
  );
}
