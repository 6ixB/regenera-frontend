import AboutHeroIllustration from "../../vector-graphics/AboutHeroIllustration";

export default function AboutHero() {
  return (
    <div
      className={
        "w-full bg-dark-primary-300 flex flex-col items-center gap-y-10 pt-8"
      }
    >
      <div className={"flex flex-col items-center gap-y-2 text-light-text-100"}>
        <div className={"text-4xl font-medium"}>How Regenera Works</div>
        <div className={"text-base w-[32rem] text-center"}>
          Our platform offers an innovative approach to tackling pollution and
          waste by inviting individuals and communities to compete for a cleaner
          tomorrow.
        </div>
      </div>
      <AboutHeroIllustration className={"w-25rem h-auto"} />
    </div>
  );
}
