"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const visible = !pathname.includes("/dashboard");

  return (
    <>
      {visible && (
        <footer
          className={
            "mt-auto w-full pt-16 pb-8 bg-light-background-100 flex flex-col items-center justify-center border-t border-light-background-300 shadow-sm select-none"
          }
        >
          <div
            className={
              "w-full flex flex-col gap-8 items-center text-light-text-100"
            }
          >
            <div
              className={"w-full container flex justify-between items-start"}
            >
              <div className={"text-lg font-medium leading-4"}>Regenera</div>
              <div className={"flex flex-col gap-4 text-sm"}>
                <div className={"font-semibold"}>Clean for</div>
                <Link href={"/"}>
                  <div className="text-xs md:text-sm">Emergency</div>
                </Link>
                <Link href={"/"}>
                  <div className="text-xs md:text-sm">Crisis relief</div>
                </Link>
                <Link href={"/"}>
                  <div className="text-xs md:text-sm">Medical</div>
                </Link>
                <Link href={"/"}>
                  <div className="text-xs md:text-sm">Education</div>
                </Link>
              </div>
              <div className={"flex flex-col gap-4 text-sm"}>
                <div className={"font-semibold"}>Learn more</div>
                <Link href={"/"}>
                  <div className="text-xs md:text-sm">How Regenera Works</div>
                </Link>
                <Link href={"/"}>
                  <div className="text-xs md:text-sm">Why Regenera</div>
                </Link>
                <Link href={"/"}>
                  <div className="text-xs md:text-sm">Common questions</div>
                </Link>
                <Link href={"/"}>
                  <div className="text-xs md:text-sm">Success stories</div>
                </Link>
              </div>
              <div className={"flex flex-col gap-4 text-sm"}>
                <div className={"font-semibold"}>Resources</div>
                <Link href={"/"}>
                  <div className="text-xs md:text-sm">Help center</div>
                </Link>
                <Link href={"/"}>
                  <div className="text-xs md:text-sm">Blog</div>
                </Link>
                <Link href={"/"}>
                  <div className="text-xs md:text-sm">Regenera stories</div>
                </Link>
                <Link href={"/"}>
                  <div className="text-xs md:text-sm">Newsroom</div>
                </Link>
              </div>
            </div>
            <hr className={"w-full border-light-background-300"}></hr>
            <div
              className={
                "w-full container flex justify-between text-sm text-light-text-100"
              }
            >
              <div>© 2024 SROOMY</div>
              <div className={"flex items-center gap-8"}>
                <Link href={"/"}>
                  <div>Terms</div>
                </Link>
                <Link href={"/"}>
                  <div>Privacy Notice</div>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}
