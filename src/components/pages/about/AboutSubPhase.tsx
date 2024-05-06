export default function AboutSubPhase() {
  return (
    <div className={"flex flex-col gap-y-4"}>
      <div className={" flex items-center gap-x-4"}>
        <div
          className={
            "bg-light-accent-200 w-8 h-8 flex justify-center items-center rounded-full text-light-background-100 font-medium text-base"
          }
        >
          a
        </div>
        <div className={"text-light-text-200 text-base font-medium"}>
          Find a cause you care about
        </div>
      </div>
      <div
        className={
          "flex flex-col gap-y-2 border-l-4 border-light-accent-200 ms-[14px] ps-8"
        }
      >
        <div className={"text-light-text-100 text-base w-[30rem] py-4"}>
          Browse through a variety of cleanup projects and choose one that
          resonates with you.
        </div>
      </div>
    </div>
  );
}
