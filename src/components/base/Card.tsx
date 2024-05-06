import Image from "next/image";
import Link from "next/link";

interface CardProps {
  variant?: "outlined" | "no-outlined";
}

export default function Card({ variant = "outlined" }: CardProps) {
  return (
    <Link href="/projects/mk-ultra">
      <div
        className={`w-full h-full flex flex-col bg-light-background-100 rounded-xl ${
          variant === "outlined" && "border"
        } cursor-pointer hover:outline hover:outline-1 hover:outline-light-background-300`}
      >
        <Image
          width={0}
          height={0}
          sizes={"100vw"}
          className={`w-full h-auto ${
            variant === "outlined" ? "rounded-t-xl" : "rounded-xl"
          }`}
          src={
            "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
          }
          alt={"Image Description"}
        />
        <div className={"p-4 md:p-5"}>
          <h3 className={"text-lg font-semibold text-gray-800"}>Card title</h3>
          <p className={"mt-1 text-gray-500 text-base"}>
            Some quick example text to build on the card title and make up the
            bulk of the card&apos;s content.
          </p>
        </div>
      </div>
    </Link>
  );
}
