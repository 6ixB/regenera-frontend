import { z } from "zod";
import { UserEntitySchema } from "../user/user.entity";

export const ProjectObjectiveEntitySchema = z.object({
  id: z.string(),
  objective: z.string(),
  imageUrl: z.string(),
});

export const ProjectRequirementEntitySchema = z.object({
  id: z.string(),
  requirement: z.string(),
  quantity: z.number(),
});

export const CreateProjectTitleEntitySchema = z.object({
  title: z.string(),
  imageUrl: z.string(),
});

export const CreateProjectDetailsEntitySchema = z.object({
  address: z.string(),
  description: z.string(),
  fundingGoal: z.number(),
  fundingGoalDeadline: z.date(),
  volunteerGoal: z.number(),
  volunteerGoalDeadline: z.date(),
  objectives: ProjectObjectiveEntitySchema.array(),
  requirements: ProjectRequirementEntitySchema.array(),
});

export const ProjectDonationEntitySchema = z.object({
  donatorId: z.string(),
  amount: z.number(),
});

export const ProjectVolunteerEntitySchema = z.object({
  volunteerId: z.string(),
});

export const ProjectEntitySchema = z.object({
  id: z.string(),
  ...CreateProjectTitleEntitySchema.shape,
  ...CreateProjectDetailsEntitySchema.shape,
  organizer: UserEntitySchema,
  donations: ProjectDonationEntitySchema.array(),
  volunteers: ProjectVolunteerEntitySchema.array(),
  funding: z.number(),
  phase: z.string(),
  donationsCount: z.number().optional().default(0),
  volunteersCount: z.number().optional().default(0)
});

export type ProjectEntity = z.infer<typeof ProjectEntitySchema>;
export type ProjectObjectiveEntity = z.infer<
  typeof ProjectObjectiveEntitySchema
>;
export type ProjectRequirementEntity = z.infer<
  typeof ProjectRequirementEntitySchema
>;
export type ProjectDonationEntity = z.infer<typeof ProjectDonationEntitySchema>;
