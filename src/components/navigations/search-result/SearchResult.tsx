"use client";

import { searchQueryFn } from "@/lib/api/searchApi";
import { UserEntity } from "@/lib/model/user/user.entity";
import { useAppSelector } from "@/lib/state/hooks";
import { RootState } from "@/lib/state/store";
import { useQuery } from "@tanstack/react-query";
import { useDebounce, useLockBodyScroll } from "@uidotdev/usehooks";
import SearchResultUserItem from "./SearchResultUserItem";
import { SearchEntity } from "@/lib/model/search/search.entity";
import Link from "next/link";

export default function SearchResult() {
  useLockBodyScroll();
  const searchValue = useAppSelector((state: RootState) => state.search.value);
  const debouncedSearchValue = useDebounce(searchValue, 200);

  const page = 1;
  const limit = 5;

  const { data, isFetching } = useQuery({
    queryKey: ["search", debouncedSearchValue],
    queryFn: () =>
      searchQueryFn({ query: debouncedSearchValue.trim(), page, limit }),
    enabled: !!debouncedSearchValue,
  });

  const searchEntity = data?.data as SearchEntity;

  if (!debouncedSearchValue) return null;

  if (!isFetching && !searchEntity.users.length) {
    return (
      <div className="flex w-full flex-col items-center pb-6 pt-2 text-light-text-100">
        <div className="font-medium">
          Oops we couldn&apos;t find any results
        </div>
        <div>Try searching for something else or check your spelling</div>
      </div>
    );
  }

  return (
    <div className="flex h-full max-h-96 w-full justify-center overflow-y-auto pb-6 pt-2">
      {debouncedSearchValue && (
        <div className="flex h-full w-full max-w-[560px] items-center justify-center">
          {isFetching ? (
            <div
              className="inline-block size-6 animate-spin rounded-full border-[3px] border-current border-t-transparent text-light-primary-200"
              role="status"
              aria-label="loading"
            >
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <div className="flex w-full flex-col items-center">
              <div className="mb-4 w-full text-base font-medium text-light-text-100">
                Search Results
              </div>
              <div className="flex w-full flex-col items-center gap-y-2">
                <div className="w-full text-sm font-semibold text-light-text-100">
                  Users
                </div>
                {data?.data.users.map((user: UserEntity) => (
                  <SearchResultUserItem key={user.id} user={user} />
                ))}
              </div>
              {searchEntity.users.length > 1 && (
                <div className="mt-2 flex w-full items-center justify-center">
                  <Link
                    href={`/search?query=${debouncedSearchValue.trim()}&page=${page}&limit=${limit}`}
                    className="text-sm font-semibold text-light-text-100"
                  >
                    View more
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
