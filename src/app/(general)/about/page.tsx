import AboutExerpt from "@/components/pages/about/AboutExerpt";
import AboutExpectations from "@/components/pages/about/AboutExpectations";
import AboutHero from "@/components/pages/about/AboutHero";
import AboutPhases from "@/components/pages/about/AboutPhases";

export default function About() {
  return (
    <main className={"w-full flex flex-col items-center"}>
      <AboutHero />
      <AboutExpectations />
      <AboutPhases />
      <AboutExerpt />
    </main>
  );
}
