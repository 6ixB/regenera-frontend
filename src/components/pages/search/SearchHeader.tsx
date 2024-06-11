"use client";

import { useSearchParams } from "next/navigation";

export default function SearchHeader() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  return (
    <div className="flex w-full justify-center">
      <div className="container flex flex-col items-center justify-center gap-4">
        <h3 className="pt-2 text-center text-2xl font-medium text-light-text-200">
          {`Showing results for "${query}"`}
        </h3>
      </div>
    </div>
  );
}
