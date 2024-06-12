import Regenera from "@/components/vector-graphics/Regenera";

export default function SearchExerpt() {
  return (
    <div className="h-full w-full">
      <div className="container m-auto flex flex-col items-center gap-y-4 pt-8">
        <div className=" flex w-3/4 items-center justify-center gap-x-4">
          <hr className={"w-full border-light-background-300"} />

          <div className="flex w-fit items-center gap-x-2">
            <Regenera className={"fill-light-text-100"} />
            <p className={"text-3xl font-medium text-light-text-100"}>
              Regenera
            </p>
          </div>

          <hr className={"w-full border-light-background-300"} />
        </div>

        <p className="text-base font-medium text-light-text-200">
          Become an eco-warrior now
        </p>
      </div>
    </div>
  );
}
