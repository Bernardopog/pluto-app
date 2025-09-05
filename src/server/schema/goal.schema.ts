import { z } from "zod";

export const goalSchema = z.object({
  name: z.string(),
  targetAmount: z.number(),
  deadline: z.coerce.date().nullable(),
  progress: z.enum(["balance", "vault"]),
  assignedVault: z.number().nullable(),
});
