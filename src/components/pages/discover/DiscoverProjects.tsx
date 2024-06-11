"use client";

import Pagination from "@/components/navigations/pagination/Pagination";
import DiscoverProjectsCards from "./DiscoverProjectsCards";
import { useState } from "react";

export default function DiscoverProjects() {
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
    <div className="h-fit w-full">
      <div className="container m-auto flex flex-col">
        <p className="pt-4 text-lg font-medium text-light-text-200">
          Discover projects
        </p>

        <DiscoverProjectsCards activePage={activePage} />

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
