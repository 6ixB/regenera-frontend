import HomeHeroIllustration from "../vector-graphics/HomeHeroIllustration";

export default function HomeHero() {
  return (
    <div
      className={
        "max-w-[67rem] w-full flex items-center bg-dark-primary-300 rounded-lg shadow"
      }
    >
      <HomeHeroIllustration className={"w-[32rem]"} />
      <div
        className={
          "flex-1 flex flex-col justify-center items-center gap-y-4 p-8 text-light-text-100"
        }
      >
        <div className={"text-4xl font-medium"}>
          Competing for a Cleaner Tomorrow
        </div>
        <div className={"text-base"}>
          Our platform offers an innovative approach to tackling pollution and
          waste by inviting individuals and communities to compete for a cleaner
          tomorrow.
        </div>
      </div>
    </div>
  );
}
