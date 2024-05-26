"use client";

import Pagination from "@/components/navigations/pagination/Pagination";
import { useState } from "react";
import AchievementsTableItem from "./AchievementsItem";

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
    <>
    <div className="w-full h-full flex gap-y-2">
        <div className="w-full grid grid-cols-2 gap-x-4 gap-y-2">
            {Array(10)  
            .fill(0)
            .map((_, index) => (
                <AchievementsTableItem
                key={index}
                position={index + 1}
                isCollected={index < 3}
                />
            ))}
        </div>
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
