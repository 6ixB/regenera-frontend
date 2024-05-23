"use client";

import Button from "@/components/base/Button";
import Checkbox from "@/components/forms/Checbox";
import Input from "@/components/forms/Input";
import GoogleSignInButton from "@/components/forms/GoogleSignInButton";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInDto, SignInDtoSchema } from "@/lib/model/auth/auth.dto";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FrontendRoutesEnum } from "@/lib/routes";

export default function SignInForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SignInDto>({ resolver: zodResolver(SignInDtoSchema) });

  const onSubmit: SubmitHandler<SignInDto> = async (data) => {
    const result = await signIn("credentials", { ...data, redirect: false });

    if (result?.error) {
      setError("password", {
        type: "manual",
        message: "Invalid credentials.",
      });
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <form
      className={
        "bg-light-background-100 rounded border border-light-background-300 md:shadow-sm flex flex-col"
      }
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={"p-8 flex flex-col gap-4"}>
        <div className={"text-2xl font-medium text-light-text-100"}>
          Sign in
        </div>
        <div className={"flex flex-col gap-2"}>
          <Input placeholder={"Email Address"} {...register("email")} />
          {errors.email && (
            <div className={"text-red-500 text-sm"}>{errors.email.message}</div>
          )}
        </div>
        <div className={"flex flex-col gap-2"}>
          <Input
            type={"password"}
            placeholder={"Password"}
            {...register("password")}
          />
          {errors.password && (
            <div className={"text-red-500 text-sm"}>
              {errors.password.message}
            </div>
          )}
        </div>
        <Link
          href={"/forgot-password"}
          className={
            "py-2 text-base text-hyperlink focus:outline-light-primary-100 hover:opacity-75"
          }
        >
          Forgot your password?
        </Link>
        <Button type={"submit"} variant={"solid"} disabled={isSubmitting}>
          {isSubmitting ? (
            <div
              className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-light-primary-200 rounded-full"
              role="status"
              aria-label="loading"
            >
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            "Sign in"
          )}
        </Button>
        <Checkbox label={"Remember me"} />
        <div className="flex items-center text-sm text-gray-800 before:flex-1 before:border-t before:border-light-background-300 before:me-2 after:flex-1 after:border-t after:border-light-background-300 after:ms-2">
          or
        </div>
        <GoogleSignInButton />
        <div className={"light-text-100 text-sm"}>
          By clicking the Sign In button, you agree to the Regenera Terms of
          Service and acknowledge the Privacy Notice.
        </div>
      </div>
      <hr className={"border-light-background-300"} />
      <div className={"px-8 py-4 md:justify-center flex items-center gap-2"}>
        <span>New to Regenera?</span>
        <Link
          href={FrontendRoutesEnum.SIGNUP.toString()}
          className={
            "py-2 text-base text-hyperlink focus:outline-light-primary-100 hover:opacity-75"
          }
        >
          Sign up
        </Link>
      </div>
    </form>
  );
}
