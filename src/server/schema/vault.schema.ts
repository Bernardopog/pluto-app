import { z } from 'zod';

export const vaultSchema = z.object({
  name: z.string(),
  targetPrice: z.number(),
  icon: z.enum(['plane', 'piggy', 'car']),
});
