import { z } from 'zod';

export const transactionSchema = z.object({
  name: z.string(),
  value: z.number(),
  date: z.coerce.date(),

  categoryId: z.number(),
});
