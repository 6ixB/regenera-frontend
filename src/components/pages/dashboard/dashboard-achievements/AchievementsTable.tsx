"use client";

import Pagination from "@/components/navigations/pagination/Pagination";
import { useState } from "react";
import AchievementTableItem from "./AchievementItem";

export default function AchievementsTable() {
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
    <div className={"w-full flex flex-col items-center gap-y-8 p-8"}>
      <div className="w-full h-full flex gap-y-2">
        <div className="w-full grid grid-cols-3 gap-x-5 gap-y-5">
          {Array(15)
            .fill(0)
            .map((_, index) => (
              <AchievementTableItem key={index} isCollected={index < 5} />
            ))}
        </div>
      </div>
      <div className="w-fit flex items-center justify-center py-2 px-8">
        <Pagination
          endPage={endPage}
          activePage={activePage}
          batch={Math.ceil(activePage / 3)}
          onClick={handlePagination}
        />
      </div>
    </div>
  );
}
