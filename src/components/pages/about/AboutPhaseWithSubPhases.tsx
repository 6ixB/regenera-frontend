import React from "react";
import AboutPhaseOneIllustration from "../../vector-graphics/AboutPhaseOneIllustration";

interface AboutPhaseWithSubPhasesProps {
  step: string;
  title: string;
  children: React.ReactNode;
  illustration?: React.ReactNode;
}

export default function AboutPhaseWithSubPhases({
  step,
  title,
  children,
  illustration,
}: AboutPhaseWithSubPhasesProps) {
  return (
    <div className={"container py-8 flex items-center justify-between "}>
      <div className={"flex flex-col gap-y-4 w-full lg:w-1/2"}>
        <div className={"flex items-center gap-x-4"}>
          <div
            className={
              "bg-light-primary-200 w-12 h-12 flex justify-center items-center rounded-full text-light-background-100 font-medium text-2xl"
            }
          >
            {step}
          </div>
          <div className={"text-light-text-200 text-2xl font-medium"}>
            {title}
          </div>
        </div>
        <div
          className={
            "flex flex-col gap-y-2 border-l-4 border-light-primary-200 ms-[21px] ps-10 "
          }
        >
          {children}
        </div>
      </div>
      {illustration && (
        <div className="w-full hidden md:w-1/2 lg:flex justify-center">
          {illustration}
        </div>
      )}
    </div>
  );
}
