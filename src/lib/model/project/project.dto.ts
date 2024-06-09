import { z } from "zod";

export const ProjectObjectiveDtoSchema = z.object({
  objectiveImage: z
    .instanceof(File)
    .refine((file) => file, "Image is required"),
  objective: z
    .string()
    .min(4, { message: "Describe the objective clearly" })
    .optional(),
});

export const ProjectRequirementDtoSchema = z.object({
  requirement: z.string().min(1, "Item name is required"),
  quantity: z.number().min(1, "Quantity must be more than 0"),
});

export const CreateProjectTitleDtoSchema = z.object({
  title: z
    .string()
    .min(8, { message: "Title must be at least 8 characters long" }),
  image: z
    .instanceof(FileList)
    .refine((files) => files.length === 1, "Image is required")
    .transform((files) => files[0]),
});

export const CreateProjectDetailsDtoSchema = z.object({
  objectives: ProjectObjectiveDtoSchema.array()
    .min(1, "Objectives is required")
    .superRefine((objectives, ctx) => {
      objectives.forEach((objective, index) => {
        if (!objective.objective || objective.objective.trim() === "") {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `Each objective must have a description [${index}]`,
            path: [index],
          });
        }
      });
    }),
  address: z
    .string()
    .min(8, { message: "Address must be at least 8 characters long" }),
  description: z.string().min(16, {
    message: "Describe your goals and plans with more than 16 characters",
  }),
  fundingGoal: z.coerce
    .number()
    .gte(200000, { message: "The minimum fund is Rp 200.000,00" }),
  fundingGoalDeadline: z.coerce
    .date()
    .min(new Date(), "Start date must be in the future"),
  volunteerGoal: z.coerce
    .number()
    .gte(1, { message: "The minimum volunteer is 1" }),
  volunteerGoalDeadline: z.coerce
    .date()
    .min(new Date(), "Start date must be in the future"),
  requirements: z
    .object({
      requirement: z.string(),
      quantity: z.number(),
    })
    .array()
    .min(1, { message: "1 item can increase the team efficiency" }),
});

export const CreateProjectDtoSchema = z.object({
  ...CreateProjectTitleDtoSchema.shape,
  ...CreateProjectDetailsDtoSchema.shape,
  organizerId: z.string(),
});

export type CreateProjectTitleDto = z.infer<typeof CreateProjectTitleDtoSchema>;
export type CreateProjectDetailsDto = z.infer<
  typeof CreateProjectDetailsDtoSchema
>;
export type CreateProjectDto = z.infer<typeof CreateProjectDtoSchema>;
export type ProjectObjectiveDto = z.infer<typeof ProjectObjectiveDtoSchema>;
export type ProjectRequirementDto = z.infer<typeof ProjectRequirementDtoSchema>;
