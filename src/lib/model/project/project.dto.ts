import { z } from "zod";

export const CreateProjectTitleDtoSchema = z.object({
    title: z.string().min(8, { message: 'Title must be at least 8 characters long'} ),
    image: z
    .instanceof(FileList)
    .refine((files) => files.length === 1, "Image is required")
    .transform((files) => files[0]),
})

export type CreateProjectTitleDto = z.infer<typeof CreateProjectTitleDtoSchema>