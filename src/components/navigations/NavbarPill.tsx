"use client";

import Regenera from "../vector-graphics/Regenera";
import Link from "next/link";
import InputGroup from "../forms/InputGroup";
import { Search, Menu } from "lucide-react";
import { useEffect, useState } from "react";
//import '../css/navigations/NavbarPill.css'
import Sidebar from "./Sidebar";

interface NavbarPillProps{
  pill: Boolean
}

export default function NavbarPill({pill}: NavbarPillProps) {

  const [isExpanded, setIsExpanded] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
   
    if(pill){

      const handleScroll = () => {
        const scrollTop = window.scrollY;
  
        setIsExpanded(scrollTop > 0);
      };
  
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
    
  })

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
    
  }

  return (
    <header
      className={`flex z-50 fixed justify-center items-center user-select-none transition-all duration-200 bg-light-background-100
      shadow px-8
      ${isExpanded ? 'top-0 w-full rounded-none md:w-3/4 md:top-4 md:rounded-full md:px-8' : 'top-0 w-full'}`}
    >
      <nav
        className={`${pill ? 'max-w-[67rem]' : 'w-full'} w-full py-3 items-center justify-between gap-x-4 hidden md:flex
        `}
      >
        <div className={"w-[16rem] flex items-center justify-start gap-x-4"}>
          <Link href={"/"} className={"flex items-center gap-2"}>
            <Regenera className={"fill-light-text-100"} />
            <div className={"text-lg font-medium text-light-text-100"}>
              Regenera
            </div>
          </Link>
          <Link href={"/about"}>
            <div className={"text-base text-light-text-100 whitespace-nowrap"}>How it works</div>
          </Link>
        </div>
        <InputGroup
          icon={<Search className={"text-light-text-100"} />}
          placeholder={"Search projects, creators, and categories"}
        />
        <div className={"w-[16rem] flex items-center justify-end gap-x-4"}>
          <Link href={"/signin"}>
            <div className={"text-base text-light-text-100 whitespace-nowrap"}>Sign in</div>
          </Link>
          <Link
            href={"/projects/create"}
            className={
              "px-4 py-2 rounded-full border-2 border-light-accent-100"
            }
          >
            <div className={"text-base text-light-text-100 whitespace-nowrap"}>
              Start a project
            </div>
          </Link>
        </div>
      </nav>

      <nav
        className={`max-w-[67rem] w-full py-3 flex items-center justify-evenly md:hidden
        `}
      >
        <Search className={"text-light-text-100"} />
        <div className={"w-[16rem] flex items-center justify-center gap-x-4"}>
          <Link href={"/"} className={"flex items-center gap-2"}>
            <Regenera className={"fill-light-text-100"} />
            <div className={"text-lg font-medium text-light-text-100"}>
              Regenera
            </div>
          </Link>
        </div>
        <Menu className={"text-light-text-100 cursor-pointer"} onClick={toggleSidebar}/>
      </nav>

      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
    </header>
  );
}
