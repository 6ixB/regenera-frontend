import DiscoverExerpt from "@/components/pages/discover/DiscoverExerpt";
import DiscoverHeader from "@/components/pages/discover/DiscoverHeader";
import DiscoverProjects from "@/components/pages/discover/DiscoverProjects";

export default function Discover(){
    return (
        <main className="w-full flex flex-col gap-8 pt-24 pb-8">
            <DiscoverHeader />
            <DiscoverExerpt />
            <DiscoverProjects />
        </main>
    )
}