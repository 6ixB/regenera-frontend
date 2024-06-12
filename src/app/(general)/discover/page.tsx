import DiscoverExerpt from "@/components/pages/discover/DiscoverExerpt";
import DiscoverHeader from "@/components/pages/discover/DiscoverHeader";
import DiscoverProjects from "@/components/pages/discover/DiscoverProjects";

export default async function Discover() {
  return (
    <main className="flex w-full flex-col gap-8 pb-8 pt-24">
      <DiscoverHeader />
      <DiscoverExerpt />
      <DiscoverProjects />
    </main>
  );
}
