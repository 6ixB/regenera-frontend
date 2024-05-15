import HomeDescriptionOneIllustration from "../../vector-graphics/HomeDescriptionOneIllustration";
import HomeDescriptionThreeIllustration from "../../vector-graphics/HomeDescriptionThreeIllustration";
import HomeDescriptionTwoIllustration from "../../vector-graphics/HomeDescriptionTwoIllustration";

export default function HomeDescription() {
  return (
    <div className={"w-full py-16 bg-light-accent-200 flex justify-center"}>
      <div className={"container flex gap-x-32"}>
        <div
          className={
            "max-w-[240px] flex flex-col items-center gap-y-3 text-light-text-100"
          }
        >
          <div className={"text-2xl font-medium"}>Join the Race</div>
          <HomeDescriptionOneIllustration className={"max-w-[240px]"} />
          <div className={"text-center text-base font-semibold"}>
            Connect with like-minded individuals who share your passion for
            keeping our planet clean while enjoying fun and engaging activities.
          </div>
        </div>
        <div
          className={"flex flex-col items-center gap-y-3 text-light-text-100"}
        >
          <div className={"text-2xl font-medium"}>Revitalize & Rejuvinate</div>
          <HomeDescriptionTwoIllustration className={"max-w-[240px]"} />
          <div className={"text-center text-base font-semibold"}>
            Dive into the depths of environmental stewardship as you clean
            rivers, revitalize green spaces, and breathe new life into our
            communities
          </div>
        </div>
        <div
          className={"flex flex-col items-center gap-y-3 text-light-text-100"}
        >
          <div className={"text-2xl font-medium"}>Earn Rewards</div>
          <HomeDescriptionThreeIllustration className={"max-w-[240px]"} />
          <div className={"text-center text-base font-semibold"}>
            We rewards users for their efforts in keeping the environment clean,
            offering a unique opportunity to earn money while making a positive
            impact.
          </div>
        </div>
      </div>
    </div>
  );
}
