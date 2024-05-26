import { z } from "zod";
import { UserEntitySchema } from "../user/user.entity";

export const AuthEntitySchema = z.object({
  user: UserEntitySchema,
  accessToken: z.string(),
  refreshToken: z.string(),
});

export type AuthEntity = z.infer<typeof AuthEntitySchema>;
