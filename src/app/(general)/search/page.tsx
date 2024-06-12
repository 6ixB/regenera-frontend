import SearchExerpt from "@/components/pages/search/SearchExcerpt";
import SearchHeader from "@/components/pages/search/SearchHeader";
import SearchProjects from "@/components/pages/search/SearchProjects";

export default async function Search() {
  return (
    <main className="flex w-full flex-col gap-8 pb-8 pt-24">
      <SearchExerpt />
      <SearchHeader />
      <SearchProjects />
    </main>
  );
}
