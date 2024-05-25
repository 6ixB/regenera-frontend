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
    .instanceof(FileList)
    .refine((files) => files.length === 1, "Image is required")
    .transform((files) => files[0]),
    address: z
      .string()
      .min(8, { message: "Address must be at least 8 characters long" }),
    description: z.string().min(16, { message: 'Describe your goals and plans with more than 16 characters'}),
    minimumFund: z.number().min(100000, { message: 'The minimum fund is Rp 100.000,00'}),
    endCrowdfundDate: z.date().min(new Date(), 'Start date must be in the future')
  });

export type CreateProjectTitleDto = z.infer<typeof CreateProjectTitleDtoSchema>;
export type CreateProjectDetailsDto = z.infer<typeof CreateProjectDetailsDtoSchema>;
