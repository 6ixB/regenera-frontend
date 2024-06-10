import { ProfileTabEnum } from "./ProfileTabs";
import { ProjectEntity } from "@/lib/model/project/project.entity";
import ProjectCard from "@/components/base/ProjectCard";

interface ProfileInformationCardsProps {
  type: ProfileTabEnum;
  projects: ProjectEntity[]
}

export default function ProfileInformationCards({
  type,
  projects
}: ProfileInformationCardsProps) {
  if (type === ProfileTabEnum.ABOUT) return;  

  return (
    <div className="w-full">
      <div className="w-full grid gap-6 grid-cols-2 md:grid-cols-3 ">
        {projects && projects.map((data, idx) => (

          <ProjectCard data={data} key={idx} />
        ))}

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
