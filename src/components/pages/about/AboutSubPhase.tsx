interface AboutSubPhaseProps {
  substep: string;
  title: string;
  description: string;
}

export default function AboutSubPhase({
  substep,
  title,
  description,
}: AboutSubPhaseProps) {
  return (
    <div className={"flex flex-col gap-y-4 "}>
      <div className={" flex items-center gap-x-4"}>
        <div
          className={
            "bg-light-accent-200 w-8 h-8 flex justify-center items-center rounded-full text-light-background-100 font-medium text-base"
          }
        >
          {substep}
        </div>
        <div className={"text-light-text-200 text-base font-medium"}>
          {title}
        </div>
      </div>
      <div
        className={
          "flex flex-col gap-y-2 border-l-4 border-light-accent-200 ms-[14px] ps-8"
        }
      >
        <div className={"text-light-text-100 text-base py-4"}>
          {description}
        </div>
      </div>
    </div>
  );
}
