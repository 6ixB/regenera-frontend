import { ProjectEntity } from "../model/project/project.entity";

export const enum ProjectPhaseEnum {
  DONATING = "Donating",
  VOLUNTEERING = "Volunteering",
  PENDING = "Pending",
  ONGOING = "Ongoing",
  COMPLETED = "Completed",
}

export const enum ProjectEntityPhaseEnum {
  DONATING = "DONATING",
  VOLUNTEERING = "VOLUNTEERING",
  PENDING = "PENDING",
  ONGOING = "ONGOING",
  COMPLETED = "COMPLETED",
}

export function getProjectDaysLeft(deadline: Date) {
  const timeDiff = new Date(deadline).getTime() - new Date().getTime();

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

  return `${days}`;
}

export function getProjectCreatedDaysAgo(createdAt: Date) {
  const now = new Date();
  const differenceInTime = now.getTime() - (new Date(createdAt)).getTime();
  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

  return differenceInDays > 0 ? `${differenceInDays}d ago` : "today";
}

export function getProjectPercentage(goal: number, current: number) {
  const percentage = (current / goal) * 100;

  return Math.round(percentage);
}

export function getProjectPhase(phase: string) {
  switch (phase) {
    case ProjectEntityPhaseEnum.DONATING:
      return ProjectPhaseEnum.DONATING;

    case ProjectEntityPhaseEnum.VOLUNTEERING:
      return ProjectPhaseEnum.VOLUNTEERING;

    case ProjectEntityPhaseEnum.PENDING:
      return ProjectPhaseEnum.PENDING;

    case ProjectEntityPhaseEnum.ONGOING:
      return ProjectPhaseEnum.ONGOING;

    case ProjectEntityPhaseEnum.COMPLETED:
      return ProjectPhaseEnum.COMPLETED;

    default:
      return "Unknown";
  }
}

export function getProjectPhaseInformation(data: ProjectEntity) {
  switch (data.phase) {
    case ProjectEntityPhaseEnum.DONATING:
      return `${getProjectDaysLeft(data.fundingGoalDeadline)} days left | ${getProjectPercentage(data.fundingGoal, data.funding)}% funded`;

    case ProjectEntityPhaseEnum.VOLUNTEERING:
      return `${getProjectDaysLeft(data.volunteerGoalDeadline)} days left | ${data.volunteersCount ?? 0} joined`;

    case ProjectEntityPhaseEnum.PENDING:
      return `${getProjectPercentage(data.fundingGoal, data.funding)}% funded | ${data.volunteersCount ?? 0} joined`;

    case ProjectEntityPhaseEnum.ONGOING:
      return ProjectPhaseEnum.ONGOING;

    case ProjectEntityPhaseEnum.COMPLETED:
      return ProjectPhaseEnum.COMPLETED;

    default:
      return "Unknown";
  }
}

export function getProjectProgressByPhase(data: ProjectEntity) {
  switch (data.phase) {
    case ProjectEntityPhaseEnum.DONATING:
      return getProjectPercentage(data.fundingGoal, data.funding);

    case ProjectEntityPhaseEnum.VOLUNTEERING:
      return getProjectPercentage(
        data.volunteerGoal,
        data.volunteersCount ?? 0,
      );

    case ProjectEntityPhaseEnum.PENDING:
      return 100;

    case ProjectEntityPhaseEnum.ONGOING:
      return 100;

    case ProjectEntityPhaseEnum.COMPLETED:
      return 100;

    default:
      return 0;
  }
}
