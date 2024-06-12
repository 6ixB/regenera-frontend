"use client";

import { useEffect, useState } from "react";
import Pagination from "@/components/navigations/pagination/Pagination";
import SearchProjectCards from "./SearchProjectCards";
import { useQuery } from "@tanstack/react-query";
import { ProjectEntity } from "@/lib/model/project/project.entity";
import { searchQueryFn } from "@/lib/api/searchApi";
import { useSearchParams } from "next/navigation";
import { CardSkeletonGrid } from "@/components/base/CardSkeletonGrid";

interface SearchProjectsProps {}

export default function SearchProjects() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") as string;
  const limit = 12;

  const [projects, setProjects] = useState<ProjectEntity[]>([]);

  const [activePage, setActivePage] = useState(1);

  const { data, isFetching, isSuccess } = useQuery({
    queryKey: ["searchProjects", query, activePage],
    queryFn: () => searchQueryFn({ query, page: activePage, limit }),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
    refetchOnMount: true,
    enabled: !!activePage,
  });

  const endPage = Math.ceil(data?.data?.projectsTotal / limit);

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
      setProjects(data?.data.projects);
    }
  }, [data, isSuccess]);

  return (
    <div className="h-fit w-full">
      <div className="container m-auto flex flex-col">
        {isSuccess && projects.length > 0 && (
          <p className="pt-4 text-lg font-medium text-light-text-200">
            {`Explore ${data?.data.projectsTotal} projects for "${query}"`}
          </p>
        )}

        {isFetching && <CardSkeletonGrid />}

        {isSuccess && projects.length > 0 && (
          <>
            <SearchProjectCards projects={projects} />
            {!!endPage && (
              <Pagination
                endPage={endPage}
                activePage={activePage}
                batch={Math.ceil(activePage / 3)}
                onClick={handlePagination}
              />
            )}
          </>
        )}

        {isSuccess && projects.length === 0 && (
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
