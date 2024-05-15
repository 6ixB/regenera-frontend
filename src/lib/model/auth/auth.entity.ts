import { z } from "zod";

export const AuthEntitySchema = z.object({
  accessToken: z.string(),
});

export type AuthEntity = z.infer<typeof AuthEntitySchema>;
