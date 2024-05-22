import { z } from "zod";

export const SignInDtoSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(32),
});

export const SignInWithGoogleDtoSchema = z.object({
  idToken: z.string(),
});

export type SignInDto = z.infer<typeof SignInDtoSchema>;
export type SignInWithGoogleDto = z.infer<typeof SignInWithGoogleDtoSchema>;
