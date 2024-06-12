import { UserEntity } from "@/lib/model/user/user.entity";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface LeaderboardTableItemProps {
  position: number;
  isTop3?: boolean;
  user: UserEntity;
}

export default function LeaderboardTableItem({
  position,
  isTop3,
  user,
}: LeaderboardTableItemProps) {
  return (
    <Link
      href={`/profiles/${user.id}`}
      className={`w-full rounded-lg px-6 py-6 ${isTop3 ? (position == 1 ? "border-2 border-light-accent-100" : "border-2 border-light-primary-200") : "border border-light-background-300"} flex cursor-pointer justify-between text-light-text-100 transition-all hover:scale-105`}
    >
      <div className={"flex items-center gap-4"}>
        <div
          className={
            "flex h-6 w-8 items-center justify-center text-xl font-bold"
          }
        >
          {position}
        </div>
        <div className={"flex gap-x-4"}>
          {!user.imageUrl ? (
            <div
              className={
                "m-auto aspect-square h-10 w-10 rounded-full bg-light-background-300"
              }
            ></div>
          ) : (
            <Image
              sizes="0"
              width={0}
              height={0}
              src={user.imageUrl}
              alt=""
              className={
                "m-auto aspect-square h-10 w-10 rounded-full bg-light-background-300 object-cover"
              }
            />
          )}
          <div className={"flex flex-col justify-center"}>
            <div className={"text-base font-medium"}>{user.username}</div>
            <div className={"hidden text-sm sm:block"}>
              51 projects donated, 21 events participated
            </div>
          </div>
        </div>
      </div>
      <div className={"flex items-center gap-4"}>
        <div className={"flex items-center gap-2"}>
          <Star />
          <div className={"flex items-center"}>{Math.round(user.rating!)}</div>
        </div>
        <div className={"h-10 w-10 rounded bg-light-background-300"}></div>
      </div>
    </Link>
  );
}
