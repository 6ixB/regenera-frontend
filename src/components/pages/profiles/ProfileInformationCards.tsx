import Card from "@/components/base/Card";
import { ProfileTabEnum } from "./ProfileTabs";
import { ProjectPhaseEnum } from "@/app/(general)/projects/[id]/page";

interface ProfileInformationCardsProps {
  type: ProfileTabEnum;
}

export default function ProfileInformationCards({
  type,
}: ProfileInformationCardsProps) {
  if (type === ProfileTabEnum.ABOUT) return;

  return (
    <div className="w-full">
      <div className="w-full grid gap-6 grid-cols-2 md:grid-cols-3 ">
        <Card phase={ProjectPhaseEnum.DONATING} />
        <Card phase={ProjectPhaseEnum.DONATING} />
        <Card phase={ProjectPhaseEnum.DONATING} />
        <Card phase={ProjectPhaseEnum.VOLUNTEERING} />
        <Card phase={ProjectPhaseEnum.VOLUNTEERING} />
        <Card phase={ProjectPhaseEnum.VOLUNTEERING} />
        <Card phase={ProjectPhaseEnum.COMPLETED} />
        <Card phase={ProjectPhaseEnum.COMPLETED} />
        <Card phase={ProjectPhaseEnum.COMPLETED} />
      </div>
    </div>
  );
}

export function FormatDateToMonthYear(date: Date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${months[date.getMonth()]} ${date.getFullYear()}`;
}
