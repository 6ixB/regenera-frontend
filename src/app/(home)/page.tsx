import HomeFeatured from "@/components/home/HomeFeatured";
import HomeHero from "@/components/home/HomeHero";

export default function Home() {
  return (
    <main className={"w-full flex flex-col gap-8 items-center"}>
      <HomeHero />
      <HomeFeatured />
    </main>
  );
}
