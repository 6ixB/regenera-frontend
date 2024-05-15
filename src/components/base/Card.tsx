import cn from "@/lib/utils/cn";
import Image from "next/image";
import Link from "next/link";
import Progress from "./Progress";
import Badge from "./Badge";
import { ChevronRight } from "lucide-react";

interface CardProps {
  variant?: "outlined" | "no-outlined";
  className?: string;
  includeFooter?: boolean;
}

export default function Card({
  variant = "no-outlined",
  className,
  includeFooter = true,
}: CardProps) {
  return (
    <Link href="/projects/mk-ultra">
      <div
        className={cn(
          "w-full h-full flex flex-col bg-light-background-100 rounded-xl cursor-pointer hover:ring hover:ring-light-primary-200",
          {
            "ring-1 ring-light-background-300": variant === "outlined",
          },
          className
        )}
      >
        <Image
          width={0}
          height={0}
          sizes={"100vw"}
          className={`w-full h-auto rounded-t-xl object-cover`}
          src={
            "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
          }
          alt={"Image Description"}
        />
        <div className={"p-4 md:p-5 flex-1 flex flex-col justify-between"}>
          <div className={"flex flex-col gap-1"}>
            <h3 className={"text-lg font-semibold text-light-text-100"}>
              Card title
            </h3>
            <p className={"text-light-text-100 text-base"}>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </p>
          </div>
          {includeFooter && (
            <div className={"inline-flex flex-col gap-2"}>
              <Progress />
              <div className={"text-light-text-100 text-base"}>
                $32,109 raised
              </div>
              <Badge text={"Donating Phase"} />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
