"use client";

import { useAppDispatch, useAppSelector } from "@/lib/state/hooks";
import { RootState } from "@/lib/state/store";
import SearchResult from "./SearchResult";
import { setSearchValue } from "@/lib/state/features/search/searchSlice";
import { useLayoutEffect } from "react";

export default function SearchResultContainer() {
  const dispatch = useAppDispatch();

  const searchValue = useAppSelector((state: RootState) => state.search.value);

  useLayoutEffect(() => {
    dispatch(setSearchValue(""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`fixed top-[60px] z-40 w-full bg-light-background-100 ${!!searchValue ? "opacity-100" : "opacity-0"} duration-400 flex items-center justify-center shadow transition-all md:top-[69.6px]`}
    >
      {searchValue && <SearchResult />}
    </div>
  );
}
