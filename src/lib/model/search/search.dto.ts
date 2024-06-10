import { z } from "zod";

const SearchDtoSchema = z.object({
  query: z.string().min(1).max(255),
  page: z.number().int().positive(),
  limit: z.number().int().positive(),
});

export type SearchDto = z.infer<typeof SearchDtoSchema>;
