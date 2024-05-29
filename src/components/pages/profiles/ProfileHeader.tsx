import { MapPin } from "lucide-react";

export default function ProfileHeader() {
  return (
    <>
      <div className="w-full h-fit bg-light-background-100">
        <div className="w-full h-80 bg-light-background-300"></div>

        <div className="container h-44 flex flex-row m-auto gap-6">
          <div className="w-auto h-[130%] aspect-square bg-light-background-300 rounded-full -translate-y-1/2 border-4 border-light-background-100"></div>

          <div className="flex flex-col py-6">
            <h2 className="text-3xl font-medium text-light-text-100">
              Robert William
            </h2>
            <div className="flex items-center gap-x-2 text-light-text-100">
              <MapPin size={14} />
              <div className="text-sm">Kemanggisan, Jakarta Barat</div>
            </div>
          </div>
        </div>
      </div>
      <hr className={"border-light-background-300"} />
    </>
  );
}
