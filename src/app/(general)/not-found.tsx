import Regenera from "@/components/vector-graphics/Regenera";
import { FrontendRoutesEnum } from "@/lib/routes";
import { TrafficCone } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className={"flex min-h-dvh w-full justify-center pb-8 pt-24"}>
      <div className={"flex w-[418px] flex-col gap-4"}>
        <div
          className={
            "flex flex-col items-center justify-center gap-4 rounded border border-light-background-300 bg-light-background-100 px-16 py-8 md:shadow-sm"
          }
        >
          <TrafficCone size={32} className={"text-light-text-100"} />
          <div className="flex flex-col justify-center gap-y-2">
            <div
              className={"flex flex-col gap-y-4 text-base text-light-text-100"}
            >
              <div className="text-light-text-100">
                Hmm... We couldn&apos;t find the thing that you&apos;re looking
                for.
              </div>
            </div>
            <Link
              href={FrontendRoutesEnum.HOME.toString()}
              className={
                "py-2 text-base text-hyperlink hover:opacity-75 focus:outline-light-primary-100"
              }
            >
              Go back to home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
