import { z } from "zod";

export const budgetSchema = z.object({
  name: z.string(),
  limit: z.number(),
  color: z.string(),

  userId: z.number(),
});
