import { z } from "zod";
import { UserEntitySchema } from "../user/user.entity";

const SearchEntitySchema = z.object({
  users: z.array(UserEntitySchema),
});

export type SearchEntity = z.infer<typeof SearchEntitySchema>;
