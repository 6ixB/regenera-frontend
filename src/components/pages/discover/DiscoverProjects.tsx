"use client";

import Pagination from "@/components/navigations/pagination/Pagination";
import DiscoverProjectsCards from "./DiscoverProjectsCards";
import { useEffect, useState } from "react";
import { ProjectEntity } from "@/lib/model/project/project.entity";
import { useQuery } from "@tanstack/react-query";
import { getAllProjectsFn } from "@/lib/api/projectApi";
import { CardSkeletonGrid } from "@/components/base/CardSkeletonGrid";

interface DiscoverProjectsProps {}

export default function DiscoverProjects({}: DiscoverProjectsProps) {
  const [activePage, setActivePage] = useState(1);
  const [projects, setProjects] = useState<ProjectEntity[]>([]);

  const { data, isFetching, isSuccess } = useQuery({
    queryKey: ["getPaginatedProjects", activePage],
    queryFn: () => getAllProjectsFn({ page: activePage, limit: 12 }),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
    refetchOnMount: true,
    enabled: !!activePage,
  });

  const endPage = Math.ceil(data?.data?.projectsTotal / 12);

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
        <p className="pt-4 text-lg font-medium text-light-text-200">
          Discover projects
        </p>

        {isFetching && !isSuccess && <CardSkeletonGrid />}
        {isSuccess && <DiscoverProjectsCards projects={projects} />}

        {!!endPage && (
          <Pagination
            endPage={endPage}
            activePage={activePage}
            batch={Math.ceil(activePage / 3)}
            onClick={handlePagination}
          />
        )}
      </div>
    </div>
  );
}
