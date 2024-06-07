import { z } from "zod";

export const CreateUserDtoSchema = z.object({
  username: z.string().min(4).max(32),
  email: z.string().email(),
  password: z.string().min(8).max(32),
});

export const UpdateUserDtoSchema = z.object({
  username: z.string().min(4).max(32).nullable().optional(),
  password: z.string().min(8).max(32).nullable().optional(),
  email: z.string().email().nullable().optional(),
  imageUrl: z.string().nullable().optional(),
  image: z.any().optional(),
  rating: z.number().nullable().optional(),
  refreshToken: z.string().nullable().optional(),
});

const validateFileUrl = (url: any, fileType: any, maxSize: any) => {
  if (!url) return true;

  const blob = fetch(url).then((response) => response.blob());
  return blob.then((blob) => {
    const isValidType = fileType.includes(blob.type);
    const isValidSize = blob.size <= maxSize;
    return isValidType && isValidSize;
  });
};

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const VALID_FILE_TYPES = ["image/jpeg", "image/png", "image/gif"];

export const CreateUserProfileDtoSchema = z.object({
  imageUrl: z
    .string()
    .nullable()
    .refine((url) => validateFileUrl(url, VALID_FILE_TYPES, MAX_FILE_SIZE), {
      message:
        "Invalid image URL. The file must be a jpg, jpeg, png, or gif and should not exceed 5 MB in size.",
    })
    .optional(),
  image: z.any().optional(),
  bannerUrl: z
    .string()
    .nullable()
    .refine((url) => validateFileUrl(url, VALID_FILE_TYPES, MAX_FILE_SIZE), {
      message:
        "Invalid banner URL. The file must be a jpg, jpeg, png, or gif and should not exceed 5 MB in size.",
    })
    .optional(),
  banner: z.any().optional(),
  bio: z.string().nullable().optional(),
  birthDate: z.string().nullable().optional(),
  address: z.string().nullable().optional(),
  phone: z.string().nullable().optional(),
  instagramUrl: z.string().nullable().optional(),
  twitterUrl: z.string().nullable().optional(),
  facebookUrl: z.string().nullable().optional(),
  linkedinUrl: z.string().nullable().optional(),
});

export type CreateUserDto = z.infer<typeof CreateUserDtoSchema>;
export type UpdateUserDto = z.infer<typeof UpdateUserDtoSchema>;

export type CreateUserProfileDto = z.infer<typeof CreateUserProfileDtoSchema>;
export type UpdateUserProfileDto = z.infer<typeof CreateUserProfileDtoSchema>;
