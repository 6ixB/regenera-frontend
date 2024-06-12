"use client";

import Pagination from "@/components/navigations/pagination/Pagination";
import LeaderboardTableItem from "./LeaderboardTableItem";
import { useEffect, useState } from "react";
import { UserEntity } from "@/lib/model/user/user.entity";
import { useQuery } from "@tanstack/react-query";
import { getAllUsersByRatingFn } from "@/lib/api/usersApi";
import LeaderboarddTableItemSkeleton from "./LeaderboardTableItemSkeleton";

export default function LeaderboardTable() {
  const [activePage, setActivePage] = useState(1);
  const [users, setUsers] = useState<UserEntity[]>([]);

  const { data, isFetching, isSuccess } = useQuery({
    queryKey: ["getTopUsers", activePage],
    queryFn: () => getAllUsersByRatingFn({ page: activePage, limit: 10 }),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
    refetchOnMount: true,
    enabled: !!activePage,
  });

  const endPage = Math.ceil(data?.data?.usersTotal / 10);

  const handlePagination = (page: number) => {
    if (page < 1) {
      page = 1;
    } else if (page > endPage) {
      page = endPage;
    }

    setActivePage(page);
  };

  useEffect(() => {
    if (isSuccess) {
      setUsers(data?.data.userEntities);
    }
  }, [data, isSuccess]);

  return (
    <>
      <div className={"flex h-full w-full flex-col gap-y-2"}>
        {isFetching &&
          !isSuccess &&
          Array.from({ length: 10 }).map((_, index) => (
            <LeaderboarddTableItemSkeleton key={index} />
          ))}
        {users &&
          users.map((user, index) => (
            <LeaderboardTableItem
              user={user}
              key={index}
              position={index + 1 + (activePage - 1) * 10}
              isTop3={index < 3}
            />
          ))}
      </div>
      {!!endPage && (
        <Pagination
          endPage={endPage}
          activePage={activePage}
          batch={Math.ceil(activePage / 3)}
          onClick={handlePagination}
        />
      )}
    </>
  );
}
