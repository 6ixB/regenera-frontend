import Google from "@/components/vector-graphics/Google";
import Regenera from "@/components/vector-graphics/Regenera";
import Button from "@/components/base/Button";
import Input from "@/components/forms/Input";
import Link from "next/link";

export default function SignUp() {
  return (
    <main className={"w-full flex justify-center"}>
      <div className={"w-[418px] flex flex-col gap-4"}>
        <Link href={"/"} className={"px-8 md:px-0 flex items-center gap-2"}>
          <Regenera className={"fill-light-text-100"} />
          <div className={"text-2xl font-medium text-light-text-100"}>
            Regenera
          </div>
        </Link>
        <form
          className={
            "bg-light-background-100 rounded border border-light-background-300 md:shadow-sm flex flex-col"
          }
        >
          <div
            className={"px-8 py-4 md:justify-center flex items-center gap-2"}
          >
            <span>Have an account?</span>
            <Link
              href={"/signin"}
              className={
                "py-2 text-base text-hyperlink focus:outline-light-primary-100 hover:opacity-75"
              }
            >
              Sign in
            </Link>
          </div>
          <hr className={"border-light-background-300"} />
          <div className={"p-8 flex flex-col gap-4"}>
            <div className={"text-2xl font-medium text-light-text-100"}>
              Sign up
            </div>
            <Input placeholder={"Username"} />
            <Input placeholder={"Email Address"} />
            <Input placeholder={"Password"} />
            <Input placeholder={"Confirm Password"} />
            <Button variant={"solid"}>Create account</Button>
            <div className={"light-text-100 text-sm"}>
              By signing up, you agree to our Privacy Policy, Cookie Policy and
              Terms of Use.
            </div>
            <div className="flex items-center text-sm text-gray-800 before:flex-1 before:border-t before:border-light-background-3200 before:me-2 after:flex-1 after:border-t after:border-light-background-300 after:ms-2">
              or
            </div>
            <Button variant={"outline"}>
              <div className={"inline-flex gap-x-2"}>
                <Google />
                <span>Continue with Google</span>
              </div>
            </Button>
          </div>
        </form>
        <div className={"text-light-text-100 text-xs px-8 md:px-0"}>
          © 2024 SROOMY. All rights reserved.
        </div>
      </div>
    </main>
  );
}
