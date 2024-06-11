"use client";

import { useState } from "react";
import Pagination from "@/components/navigations/pagination/Pagination";
import { SearchEntity } from "@/lib/model/search/search.entity";
import SearchProjectCards from "./SearchProjectCards";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ProjectEntity } from "@/lib/model/project/project.entity";
import { searchQueryFn } from "@/lib/api/searchApi";
import { useSearchParams } from "next/navigation";

interface SearchProjectsProps {
  searchEntity: SearchEntity;
}

export default function SearchProjects({ searchEntity }: SearchProjectsProps) {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") as string;
  const limit = parseInt(searchParams.get("limit") as string);

  const [activePage, setActivePage] = useState(1);

  const {
    data: projects,
    isFetching,
    isSuccess,
  } = useQuery<AxiosResponse<ProjectEntity[]>>({
    queryKey: ["profileCreatedProjects"],
    queryFn: () => searchQueryFn({ query, page: activePage, limit }),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
    refetchOnMount: true,
    enabled: !!activePage,
  });

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
        {searchEntity.projects.length > 0 ? (
          <>
            <p className="pt-4 text-lg font-medium text-light-text-200">
              {`Explore ${searchEntity.projectsTotal} projects`}
            </p>

            <SearchProjectCards
              initialProjects={searchEntity.projects}
              activePage={activePage}
            />

            {searchEntity.projectsTotal > 3 && (
              <Pagination
                endPage={endPage}
                activePage={activePage}
                batch={Math.ceil(activePage / 3)}
                onClick={handlePagination}
              />
            )}
          </>
        ) : (
          <div className="flex w-full flex-col items-center pb-6 pt-2 text-light-text-100">
            <div className="font-medium">
              Oops we couldn&apos;t find any results
            </div>
            <div>Try searching for something else or check your spelling</div>
          </div>
        )}
      </div>
    </div>
  );
}
