import HomeDescription from "@/components/pages/home/HomeDescription";
import HomeFeatured from "@/components/pages/home/HomeFeatured";
import HomeFreshFavorites from "@/components/pages/home/HomeFreshFavorites";
import HomeHero from "@/components/pages/home/HomeHero";
import HomeLeaderboard from "@/components/pages/home/HomeLeaderboard";

export default function Home() {
  return (
    <main className={"w-full flex flex-col items-center"}>
      <HomeHero />
      <HomeFeatured />
      <HomeFreshFavorites />
      <div className={"w-full flex flex-col"}>
        <HomeDescription />
        <HomeLeaderboard />
      </div>
    </main>
  );
}
