"use client";

import Pagination from "@/components/navigations/pagination/Pagination";
import LeaderboardTableItem from "./LeaderboardTableItem";
import { useState } from "react";

export default function LeaderboardTable() {
  const [activePage, setActivePage] = useState(1);

  const endPage = 12;

  const handlePagination = (page: number) => {
    if (page < 1) {
      page = 1;
    } else if (page > endPage) {
      page = endPage;
    }

    setActivePage(page);
  };

  return (
    <>
      <div className={"w-full h-full flex flex-col gap-y-2"}>
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <LeaderboardTableItem
              key={index}
              position={index + 1}
              isTop3={index < 3}
            />
          ))}
      </div>
      <Pagination
        endPage={endPage}
        activePage={activePage}
        batch={Math.ceil(activePage / 3)}
        onClick={handlePagination}
      />
    </>
  );
}
