import { z } from "zod";

export const UserEntitySchema = z.object({
  id: z.string(),
  email: z.string(),
  username: z.string(),
  rating: z.number().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const UserProfileEntitySchema = z.object({
  id: z.string(),
  bio: z.string(),
  birthDate: z.date(),
  userId: z.string(),
  user: UserEntitySchema,
});

export type UserEntity = z.infer<typeof UserEntitySchema>;
export type UserProfileEntity = z.infer<typeof UserProfileEntitySchema>;
