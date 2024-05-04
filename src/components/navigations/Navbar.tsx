import Regenera from "../vector-graphics/Regenera";
import Link from "next/link";
import InputGroup from "../forms/InputGroup";
import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <header
      className={
        "z-50 sticky top-0 w-full flex justify-center items-center bg-light-background-100 shadow-sm"
      }
    >
      <nav
        className={
          "max-w-[67rem] w-full py-3 flex items-center justify-between"
        }
      >
        <div className={"w-[16rem] flex items-center justify-start gap-x-4"}>
          <Link href={"/"} className={"flex items-center gap-2"}>
            <Regenera className={"fill-light-text-100"} />
            <div className={"text-lg font-medium text-light-text-100"}>
              Regenera
            </div>
          </Link>
          <Link href={"/about"}>
            <div className={"text-sm text-light-text-100"}>How it works</div>
          </Link>
        </div>
        <InputGroup
          width={"80rem"}
          icon={<Search className={"text-light-text-100"} />}
          placeholder={"Search projects, creators, and categories"}
        />
        <div className={"w-[16rem] flex items-center justify-end gap-x-4"}>
          <Link href={"/signin"}>
            <div className={"text-sm text-light-text-100"}>Sign in</div>
          </Link>
          <Link
            href={"/project/create"}
            className={"px-4 py-2 rounded-full border border-light-accent-100"}
          >
            <div className={"text-sm text-light-text-100"}>Start a project</div>
          </Link>
        </div>
      </nav>
    </header>
  );
}
