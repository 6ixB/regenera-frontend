import AboutExpectationsIllustrations from "../../vector-graphics/AboutExpectationsIllustration";

export default function AboutExerpt() {
  return (
    <div
      className={
        "w-full py-12 bg-gradient-to-r from-light-primary-200 to-light-primary-100 flex justify-center"
      }
    >
      <div className={"w-[67rem] flex justify-center items-center gap-x-4"}>
        <div
          className={
            "flex flex-col w-[32rem] gap-y-2 text-light-background-100 text-center"
          }
        >
          <div className={"font-medium text-xl"}>
            Our platform urges people to have better futures
          </div>
          <div className={"text-base"}>
            Here is what to expect when you create a project, our platform
            ensures that everyone involved gets the benefits they want and need.
          </div>
        </div>
      </div>
    </div>
  );
}
