import { z } from "zod";
import { UserEntitySchema } from "../user/user.entity";
import { ProjectEntitySchema } from "../project/project.entity";

const SearchEntitySchema = z.object({
  users: z.array(UserEntitySchema),
  usersTotal: z.number(),
  projects: z.array(ProjectEntitySchema),
  projectsTotal: z.number(),
});

export type SearchEntity = z.infer<typeof SearchEntitySchema>;
