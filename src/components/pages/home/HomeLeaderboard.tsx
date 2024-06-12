import { Trophy } from "lucide-react";
import HomeLeaderboardItem from "./HomeLeaderboardItem";
import Link from "next/link";
import { FrontendRoutesEnum } from "@/lib/routes";
import { getAllUsersByRatingFn } from "@/lib/api/usersApi";
import { UserEntity } from "@/lib/model/user/user.entity";

async function getTop10Users() {
  try {
    const res = await getAllUsersByRatingFn({ page: 1, limit: 5 });

    if (res.status === 200) {
      return res.data.userEntities as UserEntity[];
    }
  } catch (error) {
    console.log(error);
  }

  return null;
}

export default async function HomeLeaderboard() {
  const top10Users = await getTop10Users();

  if (!top10Users) {
    throw new Error("Failed to fetch top 10 users");
  }

  return (
    <div className={"flex w-full justify-center bg-light-primary-100 py-16"}>
      <div
        className={"container flex flex-col gap-y-8 text-light-background-100"}
      >
        <div className={"flex items-end justify-between"}>
          <div className={"flex flex-col gap-4"}>
            <div className={"text-2xl font-medium"}>Global Ranking</div>
            <div className={"flex gap-2"}>
              <Trophy />
              <div className={"text-base"}>Top 5</div>
            </div>
          </div>
          <div className={"text-sm font-semibold"}>
            Total Participants: 23912
          </div>
        </div>
        <div className={"flex flex-col gap-y-2"}>
          {top10Users.slice(0, 5).map((user, index) => (
            <HomeLeaderboardItem
              key={user.id}
              position={index + 1}
              isTop3={index < 3}
              user={user}
            />
          ))}
        </div>
        <Link href={FrontendRoutesEnum.LEADERBOARD.toString()}>
          <div
            className={"text-base text-light-background-100 hover:opacity-75"}
          >
            View more
          </div>
        </Link>
      </div>
    </div>
  );
}
