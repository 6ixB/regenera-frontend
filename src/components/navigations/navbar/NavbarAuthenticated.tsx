import Link from "next/link";
import Regenera from "../../vector-graphics/Regenera";
import InputGroup from "../../forms/InputGroup";
import { Bell, ChevronDown, MessageCircleMore, Search } from "lucide-react";
import { SessionEntity } from "@/lib/model/session/session.entity";
import { useQuery } from "@tanstack/react-query";
import { getUserByIdQueryFn } from "@/lib/api/usersApi";
import Image from "next/image";
import NavbarUserDropdown from "./NavbarUserDropdown";

interface NavbarAuthenticatedProps {
  session: SessionEntity;
}

export default function NavbarAuthenticated({
  session,
}: NavbarAuthenticatedProps) {
  const userId = session.userId;

  const { data: user, isLoading } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUserByIdQueryFn(userId),
  });

  return (
    <nav
      className={`container w-full px-0 py-3 items-center justify-between gap-x-4 hidden md:flex
        `}
    >
      <div className={"w-[16rem] flex items-center justify-start gap-x-4"}>
        <Link href={"/"} className={"flex items-center gap-2"}>
          <Regenera className={"fill-light-text-100"} />
          <div className={"text-lg font-medium text-light-text-100"}>
            Regenera
          </div>
        </Link>
        <Link href={"/projects"}>
          <div className={"text-base text-light-text-100 whitespace-nowrap"}>
            Projects
          </div>
        </Link>
      </div>
      <InputGroup
        icon={<Search className={"text-light-text-100"} />}
        placeholder={"Search projects, creators, and categories"}
      />

      <div className={"w-[16rem] flex items-center justify-end gap-x-4"}>
        <div
          className={
            "flex justify-center items-center p-2 rounded-md cursor-pointer hover:bg-light-background-200"
          }
        >
          <div className={"relative inline-block"}>
            <MessageCircleMore className={"text-light-text-100"} size={24} />
            <span
              className={
                "absolute top-0 end-0 block size-1.5 rounded-full ring-2 ring-white bg-gray-400"
              }
            ></span>
          </div>
        </div>
        <div
          className={
            "flex justify-center items-center p-2 rounded-md cursor-pointer hover:bg-light-background-200"
          }
        >
          <div className={"relative inline-block"}>
            <Bell className={"text-light-text-100"} size={24} />
            <span
              className={
                "absolute top-0 end-0 block size-1.5 rounded-full ring-2 ring-white bg-gray-400"
              }
            ></span>
          </div>
        </div>
        <NavbarUserDropdown isLoading={isLoading} user={user} />
      </div>
    </nav>
  );
}