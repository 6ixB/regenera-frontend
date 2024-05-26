import { Star } from "lucide-react";

export default function ProfileAboutInformation() {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex flex-row py-2">
        <div className="w-2/6 md:w-1/6">
          <p className="text-base font-medium text-light-text-100">Rating</p>
        </div>
        <div className="w-full flex items-center gap-1">
          <Star className="text-light-text-100" />
          <p className="text-base font-medium     text-light-text-100">
            125.99 <b>(#1023)</b>
          </p>
        </div>
      </div>

      <hr className={"border-light-background-300"} />

      <div className="w-full flex flex-row py-2">
        <div className="w-2/6 md:w-1/6">
          <p className="text-base font-medium text-light-text-100">Biography</p>
        </div>
        <div className="w-full flex items-center gap-1">
          <p className="text-base text-light-text-100">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis,
            maiores. Sapiente unde enim sed ipsa laboriosam nobis nam quasi
            architecto aperiam? Eveniet dolorem voluptate, repellendus accusamus
            vitae velit sapiente est?
          </p>
        </div>
      </div>

      <hr className={"border-light-background-300"} />

      <div className="w-full flex flex-row py-2">
        <div className="w-2/6 md:w-1/6">
          <p className="text-base font-medium text-light-text-100">
            Birth date
          </p>
        </div>
        <div className="w-full flex items-center gap-1">
          <p className="text-base text-light-text-100">
            1 January 2000 <b>(24 years)</b>
          </p>
        </div>
      </div>
    </div>
  );
}
