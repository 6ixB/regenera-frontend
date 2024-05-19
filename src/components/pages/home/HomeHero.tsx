import Image from "next/image";
import HomeHeroIllustration from "../../vector-graphics/HomeHeroIllustration";
import HomeHeroIllustrationMobile from "@/components/vector-graphics/HomeHeroIllustrationMobile";

export default function HomeHero() {
  return (
    <div
      className={"w-full flex justify-center items-center bg-dark-primary-300"}
    >
      <div className="w-full max-w-[67rem] flex items-center relative">
        <HomeHeroIllustration
          className={"h-full max-w-[40rem] min-w-[41rem] min-h-[26rem] hidden lg:block"}
        />
        <HomeHeroIllustrationMobile
          className={"block lg:hidden"}
        />
        <div
          className={
            "absolute top-2/3 -translate-y-2/3 right-0 flex flex-col justify-center items-center gap-y-4 text-light-text-100 lg:w-1/2 text-center lg:text-start "
          }
        >
          <div className={"text-3xl md:text-4xl font-medium"}>
            Competing for a Cleaner Tomorrow
          </div>
          <div className={"text-base w-5/6 lg:w-full"}>
            Our platform offers an innovative approach to tackling pollution and
            waste by inviting individuals and communities to compete for a
            cleaner tomorrow.
          </div>
        </div>
      </div>
    </div>
  );
}
