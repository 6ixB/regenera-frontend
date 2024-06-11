import SearchExerpt from "@/components/pages/search/SearchExcerpt";
import SearchHeader from "@/components/pages/search/SearchHeader";
import SearchProjects from "@/components/pages/search/SearchProjects";
import { searchQueryFn } from "@/lib/api/searchApi";
import { SearchEntity } from "@/lib/model/search/search.entity";

async function getSearchResult({
  query,
  page = 1,
  limit = 1,
}: {
  query: string;
  page?: number;
  limit?: number;
}): Promise<SearchEntity | null> {
  try {
    const res = await searchQueryFn({ query, page, limit });

    if (res.status === 200) {
      return res.data as SearchEntity;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
}

export default async function Search({ searchParams }: any) {
  const { query, page, limit } = searchParams;

  const searchEntity = await getSearchResult({ query, page, limit });

  if (!searchEntity) {
    throw new Error("Someting went wrong, while fetching search results.");
  }

  return (
    <main className="flex w-full flex-col gap-8 pb-8 pt-24">
      <SearchExerpt />
      <SearchHeader />
      <SearchProjects searchEntity={searchEntity} />
    </main>
  );
}
