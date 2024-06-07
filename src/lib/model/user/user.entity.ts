import { z } from "zod";

export const UserEntitySchema = z.object({
  id: z.string(),
  email: z.string(),
  username: z.string(),
  rating: z.number().nullable(),
  imageUrl: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const UserProfileEntitySchema = z.object({
  bio: z.string().nullable(),
  birthDate: z.string().nullable(),
  address: z.string().nullable(),
  bannerUrl: z.string().nullable(),
  phone: z.string().nullable(),
  instagramUrl: z.string().nullable(),
  facebookUrl: z.string().nullable(),
  twitterUrl: z.string().nullable(),
  linkedinUrl: z.string().nullable(),
  user: UserEntitySchema.nullable(),
});

export const UserProffileEntityWithoutUserSchema = UserProfileEntitySchema.omit(
  {
    user: true,
  },
);

export type UserEntity = z.infer<typeof UserEntitySchema>;
export type UserProfileEntity = z.infer<typeof UserProfileEntitySchema>;
export type UserProfileEntityWithoutUser = z.infer<
  typeof UserProffileEntityWithoutUserSchema
>;
