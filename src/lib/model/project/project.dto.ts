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
    .min(1, { message: "Bring items to your project" }),
});

export const CreateProjectDtoSchema = z.object({
  ...CreateProjectTitleDtoSchema.shape,
  ...CreateProjectDetailsDtoSchema.shape,
  organizerId: z.string(),
});

export const ProjectDonationDtoSchema = z.object({
  donatorId: z.string().min(1, {message: "Input a valid user ID"}),
  amount: z
    .number()
    .min(1000, { message: "The minimum donation is Rp 1.000,00" }),
});

export const UpdateProjectDtoSchema = z.object({
  donation: ProjectDonationDtoSchema.nullable().optional(),
  volunteerId: z.string().min(1).nullable().optional(),
  meetupDate: z.date().min(new Date(), "Start date must be in the future").nullable().optional(),
  submissionObjectiveIds: z.string().array().nullable().optional(),
  submissionSubmitterIds: z.string().array().nullable().optional(),
  submissionImages: z.instanceof(File).array().nullable().optional()
});

export const VolunteerProjectDtoSchema = z.object({
  agreeProjectObjective: z.boolean().refine(val => val === true, {
    message: "You must acknowledge the project’s objective",
  }),
  agreeParticipationCommitment: z.boolean().refine(val => val === true, {
    message: "You must agree to attend the project location and participate",
  }),
  agreeTermsAcceptance: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions",
  }),
})

export type CreateProjectTitleDto = z.infer<typeof CreateProjectTitleDtoSchema>;
export type CreateProjectDetailsDto = z.infer<
  typeof CreateProjectDetailsDtoSchema
>;
export type CreateProjectDto = z.infer<typeof CreateProjectDtoSchema>;
export type ProjectObjectiveDto = z.infer<typeof ProjectObjectiveDtoSchema>;
export type ProjectRequirementDto = z.infer<typeof ProjectRequirementDtoSchema>;
export type UpdateProjectDto = z.infer<typeof UpdateProjectDtoSchema>;
export type VolunteerProjectDto = z.infer<typeof VolunteerProjectDtoSchema>
