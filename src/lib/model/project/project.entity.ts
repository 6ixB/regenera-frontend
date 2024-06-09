import { z } from "zod";

export const ProjectObjectiveEntitySchema = z
  .object({
    id: z.string(),
    objective: z.string(),
    imageUrl: z.string(),
  })
  .array();

export const ProjectRequirementEntitySchema = z
  .object({
    id: z.string(),
    requirement: z.string(),
    quantity: z.number(),
  })
  .array();

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
  objectives: ProjectObjectiveEntitySchema,
  requirements: ProjectRequirementEntitySchema,
});

export const ProjectEntitySchema = z.object({
  id: z.string(),
  ...CreateProjectTitleEntitySchema.shape,
  ...CreateProjectDetailsEntitySchema.shape,
  phase: z.string(),
});

export type ProjectEntity = z.infer<typeof ProjectEntitySchema>;
