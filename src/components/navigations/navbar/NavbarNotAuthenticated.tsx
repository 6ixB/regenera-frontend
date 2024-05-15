import { Search } from "lucide-react";
import InputGroup from "../../forms/InputGroup";
import Regenera from "../../vector-graphics/Regenera";
import Link from "next/link";

export default function NavbarNotAuthenticated() {
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
            How it works
          </div>
        </Link>
      </div>
      <InputGroup
        icon={<Search className={"text-light-text-100"} />}
        placeholder={"Search projects, creators, and categories"}
      />
      <div className={"w-[16rem] flex items-center justify-end gap-x-4"}>
        <Link href={"/signin"}>
          <div className={"text-base text-light-text-100 whitespace-nowrap"}>
            Sign in
          </div>
        </Link>
        <Link
          href={"/projects/create"}
          className={"px-4 py-2 rounded-full border-2 border-light-accent-100"}
        >
          <div className={"text-base text-light-text-100 whitespace-nowrap"}>
            Start a project
          </div>
        </Link>
      </div>
    </nav>
  );
}
