import { z } from "zod";

export const CreateUserDtoSchema = z.object({
  username: z.string().min(4).max(32),
  email: z.string().email(),
  password: z.string().min(8).max(32),
});

export const UpdateUserDtoSchema = z.object({
  username: z.string().min(4).max(32),
  email: z.string().email(),
  password: z.string().min(8).max(32),
  rating: z.number().nullable(),
});

export type CreateUserDto = z.infer<typeof CreateUserDtoSchema>;
export type UpdateUserDto = z.infer<typeof UpdateUserDtoSchema>;
