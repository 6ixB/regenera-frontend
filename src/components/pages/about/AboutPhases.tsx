import AboutPhase from "./AboutPhase";
import AboutPhaseWithSubPhases from "./AboutPhaseWithSubPhases";

export default function AboutPhases() {
  return (
    <div className={"w-full flex flex-col items-center justify-center"}>
      <div className={"w-full flex justify-center bg-light-background-200"}>
        <AboutPhase />
      </div>
      <div className={"w-full flex justify-center"}>
        <AboutPhaseWithSubPhases />
      </div>
      <div className={"w-full flex justify-center bg-light-background-200"}>
        <AboutPhaseWithSubPhases />
      </div>
      <div className={"w-full flex justify-center"}>
        <AboutPhaseWithSubPhases />
      </div>
      <div className={"w-full flex justify-center bg-light-background-200"}>
        <AboutPhaseWithSubPhases />
      </div>
    </div>
  );
}
