import { ProjectPhaseEnum } from "@/app/(general)/projects/[id]/page";

enum ProjectEntityPhaseEnum {
  DONATING = "DONATING",
  VOLUNTEERING = "VOLUNTEERING",
  COMPLETED = "COMPLETED",
}

export function calculateDaysLeft(deadline: Date) {
  const timeDiff = new Date(deadline).getTime() - new Date().getTime();

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

  return `${days} days left`;
}

export function calculateFundingPercentage(fundingGoal: number) {
  return fundingGoal;
}

export function getProjectPhase(phase: string) {
  switch (phase) {
    case ProjectEntityPhaseEnum.DONATING:
      return ProjectPhaseEnum.DONATING;

    case ProjectEntityPhaseEnum.VOLUNTEERING:
      return ProjectPhaseEnum.VOLUNTEERING;

    case ProjectEntityPhaseEnum.COMPLETED:
      return ProjectPhaseEnum.COMPLETED;

    default:
      return "Unknown";
  }
}
