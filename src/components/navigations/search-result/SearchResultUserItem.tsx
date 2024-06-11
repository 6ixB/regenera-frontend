import { UserEntity } from "@/lib/model/user/user.entity";
import Image from "next/image";

interface SearchResultUserItemProps {
  user: UserEntity;
}

export default function SearchResultUserItem({
  user,
}: SearchResultUserItemProps) {
  return (
    <a
      href={`/profiles/${user.id}`}
      className="flex w-full cursor-pointer items-center gap-x-4 rounded-md bg-light-background-100 p-3 text-light-text-100 hover:bg-light-background-200"
    >
      {user.imageUrl ? (
        <Image
          width={0}
          height={0}
          sizes={"100vw"}
          className={
            "inline-block size-10 cursor-pointer rounded-full bg-light-background-300 object-cover"
          }
          src={user.imageUrl}
          alt={"Image Description"}
        />
      ) : (
        <div
          className={
            "inline-block size-10 cursor-pointer rounded-full bg-light-background-300"
          }
        />
      )}
      <span
        className={
          "absolute end-0 top-0 block size-1.5 rounded-full bg-light-accent-100 ring-2 ring-white"
        }
      ></span>
      <div className="text-base font-medium">{user.username}</div>
    </a>
  );
}
