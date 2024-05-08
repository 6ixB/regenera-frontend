"use client";

import Regenera from "../vector-graphics/Regenera";
import Link from "next/link";
import InputGroup from "../forms/InputGroup";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function NavbarPill() {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      setIsExpanded(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`z-50 fixed w-full flex justify-center items-center select-none transition-all duration-200  ${
        !isExpanded ? "top-4" : "top-0 bg-light-background-100 shadow"
      }`}
    >
      <nav
        className={`max-w-[67rem] w-full py-3 px-8 flex items-center justify-between ${
          !isExpanded ? "bg-light-background-100 shadow rounded-full" : ""
        }`}
      >
        <div className={"w-[16rem] flex items-center justify-start gap-x-4"}>
          <Link href={"/"} className={"flex items-center gap-2"}>
            <Regenera className={"fill-light-text-100"} />
            <div className={"text-lg font-medium text-light-text-100"}>
              Regenera
            </div>
          </Link>
          <Link href={"/about"}>
            <div className={"text-base text-light-text-100"}>How it works</div>
          </Link>
        </div>
        <InputGroup
          icon={<Search className={"text-light-text-100"} />}
          placeholder={"Search projects, creators, and categories"}
        />
        <div className={"w-[16rem] flex items-center justify-end gap-x-4"}>
          <Link href={"/signin"}>
            <div className={"text-base text-light-text-100"}>Sign in</div>
          </Link>
          <Link
            href={"/projects/create"}
            className={
              "px-4 py-2 rounded-full border-2 border-light-accent-100"
            }
          >
            <div className={"text-base text-light-text-100"}>
              Start a project
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}
