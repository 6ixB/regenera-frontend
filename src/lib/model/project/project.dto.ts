import { z } from "zod";

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
  objectives: z
    .instanceof(File)
    .array()
    .refine((files) => files.length >= 1, "Objectives is required"),
  address: z
    .string()
    .min(8, { message: "Address must be at least 8 characters long" }),
  description: z.string().min(16, {
    message: "Describe your goals and plans with more than 16 characters",
  }),
  minimumFund: z.coerce
    .number()
    .gte(200000, { message: "The minimum fund is Rp 200.000,00" }),
  endCrowdfundDate: z.coerce
    .date()
    .min(new Date(), "Start date must be in the future"),
  requirements: z
    .array(
      z.object({
        name: z.string(),
        quantity: z.number(),
      })
    )
    .min(1, { message: "1 item can increase the team efficiency" }),
});

export const ProjectRequirementSchema = z.object({
  name: z.string().min(1, "Item name is required"),
  quantity: z.number().min(1, "Quantity must be more than 0"),
});


export type CreateProjectTitleDto = z.infer<typeof CreateProjectTitleDtoSchema>;
export type CreateProjectDetailsDto = z.infer<
  typeof CreateProjectDetailsDtoSchema
>;
export type ProjectRequirementDto = z.infer<typeof ProjectRequirementSchema>;
