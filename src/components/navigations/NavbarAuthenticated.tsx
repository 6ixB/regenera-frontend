import Link from "next/link";
import Regenera from "../vector-graphics/Regenera";
import InputGroup from "../forms/InputGroup";
import { Bell, MessageCircleMore, Search } from "lucide-react";
import { SessionEntity } from "@/lib/model/session/session.entity";
import { useQuery } from "@tanstack/react-query";
import { getUserByIdQueryFn } from "@/lib/api/usersApi";
import Image from "next/image";

interface NavbarAuthenticatedProps {
  session: SessionEntity;
}

export default function NavbarAuthenticated({
  session,
}: NavbarAuthenticatedProps) {
  const userId = session.userId;

  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUserByIdQueryFn(userId),
  });

  return (
    <nav
      className={`container w-full py-3 items-center justify-between gap-x-4 hidden md:flex
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
          <div className={"text-base text-light-text-100 whitespace-nowrap"}>
            Projects
          </div>
        </Link>
      </div>
      <InputGroup
        icon={<Search className={"text-light-text-100"} />}
        placeholder={"Search projects, creators, and categories"}
      />
      <div className={"w-[16rem] flex items-center justify-end gap-x-6"}>
        <div className={"relative inline-block"}>
          <MessageCircleMore className={"text-light-text-100"} size={24} />
          <span
            className={
              "absolute top-0 end-0 block size-1.5 rounded-full ring-2 ring-white bg-gray-400"
            }
          ></span>
        </div>
        <div className={"relative inline-block"}>
          <Bell className={"text-light-text-100"} size={24} />
          <span
            className={
              "absolute top-0 end-0 block size-1.5 rounded-full ring-2 ring-white bg-gray-400"
            }
          ></span>
        </div>
        {isLoading ? (
          <div
            className={
              "animate-pulse bg-light-background-300 inline-block size-8 rounded-full"
            }
          ></div>
        ) : (
          <div className={"relative inline-block"}>
            <Image
              width={0}
              height={0}
              sizes={"100vw"}
              className={"inline-block size-8 rounded-full cursor-pointer"}
              src={
                "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              }
              alt={"Image Description"}
            />
            <span
              className={
                "absolute top-0 end-0 block size-1.5 rounded-full ring-2 ring-white bg-gray-400"
              }
            ></span>
          </div>
        )}
      </div>
    </nav>
  );
}
