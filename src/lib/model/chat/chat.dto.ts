import { z } from "zod";

export const chattoSchema = z.object({
    message: z.string().min(1).optional().nullable(),
    userId: z.string(),
    chatRoomId: z.string(),
    image: z
    .instanceof(FileList)
    .refine((files) => files.length === 1, "Image is required")
    .transform((files) => files[0]).optional().nullable(),
});

export const chatRoomtoSchema = z.object({
    title: z.string().min(1),
    projectId: z.string()
})

export const chatRoomUsertoSchema = z.object({
    chatRoomId: z.string().min(1),
    userId: z.string().min(1)
})
  
export type ChatDto = z.infer<typeof chattoSchema>;
export type ChatRoomDto = z.infer<typeof chatRoomtoSchema>;
export type ChatRoomUserDto = z.infer<typeof chatRoomUsertoSchema>;
