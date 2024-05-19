import HomeDescriptionOneIllustration from "../../vector-graphics/HomeDescriptionOneIllustration";
import HomeDescriptionThreeIllustration from "../../vector-graphics/HomeDescriptionThreeIllustration";
import HomeDescriptionTwoIllustration from "../../vector-graphics/HomeDescriptionTwoIllustration";

export default function HomeDescription() {
  return (
    <div className={"w-full py-16 bg-light-accent-200 flex justify-center"}>
      <div className={"container flex gap-y-8 justify-between flex-col items-center lg:flex-row lg:items-start"}>
        <div
          className={
            "flex flex-col items-center gap-y-5 text-light-text-100"
          }
        >
          <div className={"text-2xl font-semibold whitespace-nowrap text-light-text-100"}>Join the Race</div>
          <HomeDescriptionOneIllustration className={"max-w-[240px]"} />
          <div className={"text-center text-base font-medium text-light-text-100 w-4/6"}>
            Connect with like-minded individuals who share your passion for
            keeping our planet clean while enjoying fun and engaging activities.
          </div>
        </div>

        <div
          className={"flex flex-col items-center gap-y-5 text-light-text-100"}
        >
          <div className={"text-2xl font-semibold whitespace-nowrap text-light-text-100"}>Revitalize & Rejuvinate</div>
          <HomeDescriptionTwoIllustration className={"max-w-[240px]"} />
          <div className={"text-center text-base font-medium text-light-text-100 w-4/6"}>
            Dive into the depths of environmental stewardship as you clean
            rivers, revitalize green spaces, and breathe new life into our
            communities
          </div>
        </div>
        <div
          className={"flex flex-col items-center gap-y-5 text-light-text-100"}
        >
          <div className={"text-2xl font-semibold whitespace-nowrap text-light-text-100"}>Earn Rewards</div>
          <HomeDescriptionThreeIllustration className={"max-w-[240px]"} />
          <div className={"text-center text-base font-medium text-light-text-100 w-4/6"}>
            We rewards users for their efforts in keeping the environment clean,
            offering a unique opportunity to earn money while making a positive
            impact.
          </div>
        </div>
      </div>
    </div>
  );
}
