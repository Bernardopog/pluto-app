import { z } from "zod";

export const transactionSchema = z.object({
  name: z.string(),
  value: z.number(),
  date: z.transform((dateStr) => new Date(`${dateStr}T00:00:00.000Z`)),

  categoryId: z.number(),
});
