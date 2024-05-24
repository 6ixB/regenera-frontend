"use client";

import Button from "@/components/base/Button";
import GoogleSignInButton from "@/components/forms/GoogleSignInButton";
import Input from "@/components/forms/Input";
import { createUserMutationFn } from "@/lib/api/usersApi";
import { CreateUserDto, CreateUserDtoSchema } from "@/lib/model/user/user.dto";
import { FrontendRoutesEnum } from "@/lib/routes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function SignUpForm() {
  const router = useRouter();

  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CreateUserDto>({ resolver: zodResolver(CreateUserDtoSchema) });

  const password = watch("password");

  const createUser = useMutation({
    mutationFn: createUserMutationFn,
    onSuccess: () => {
      router.push(
        `${FrontendRoutesEnum.SIGNIN.toString()}?signin=SignUpSuccess`
      );
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit: SubmitHandler<CreateUserDto> = async (data) => {
    if (password !== confirmPassword) {
      setError("password", {
        type: "manual",
        message: "Passwords do not match",
      });
      return;
    }

    await createUser.mutateAsync(data);
  };

  return (
    <form
      className={
        "bg-light-background-100 rounded border border-light-background-300 md:shadow-sm flex flex-col"
      }
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={"px-8 py-4 md:justify-center flex items-center gap-2"}>
        <span>Have an account?</span>
        <Link
          href={FrontendRoutesEnum.SIGNIN.toString()}
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
        <div className={"flex flex-col gap-2"}>
          <Input
            type={"text"}
            placeholder={"Username"}
            {...register("username")}
          />
          {errors.username && (
            <div className={"text-red-500 text-sm"}>
              {errors.username.message}
            </div>
          )}
        </div>
        <div className={"flex flex-col gap-2"}>
          <Input
            type={"email"}
            placeholder={"Email Address"}
            {...register("email")}
          />
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
        <div className={"flex flex-col gap-2"}>
          <Input
            type={"password"}
            placeholder={"Confirm Password"}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
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
            "Create account"
          )}
        </Button>
        <div className={"light-text-100 text-sm"}>
          By signing up, you agree to our Privacy Policy, Cookie Policy and
          Terms of Use.
        </div>
        <div className="flex items-center text-sm text-gray-800 before:flex-1 before:border-t before:border-light-background-3200 before:me-2 after:flex-1 after:border-t after:border-light-background-300 after:ms-2">
          or
        </div>
        <GoogleSignInButton />
      </div>
    </form>
  );
}
