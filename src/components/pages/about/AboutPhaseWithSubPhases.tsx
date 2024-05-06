import AboutPhaseOneIllustration from "../../vector-graphics/AboutPhaseOneIllustration";
import AboutSubPhase from "./AboutSubPhase";

export default function AboutPhaseWithSubPhases() {
  return (
    <div
      className={"w-full max-w-[67rem] py-8 flex items-center justify-between"}
    >
      <div className={"flex flex-col gap-y-4"}>
        <div className={" flex items-center gap-x-4"}>
          <div
            className={
              "bg-light-primary-200 w-12 h-12 flex justify-center items-center rounded-full text-light-background-100 font-medium text-2xl"
            }
          >
            0
          </div>
          <div className={"text-light-text-200 text-2xl font-medium"}>
            Start a project
          </div>
        </div>
        <div
          className={
            "flex flex-col gap-y-2 border-l-4 border-light-primary-200 ms-[21px] ps-10"
          }
        >
          <AboutSubPhase />
          <AboutSubPhase />
          <AboutSubPhase />
        </div>
      </div>
      <AboutPhaseOneIllustration />
    </div>
  );
}
