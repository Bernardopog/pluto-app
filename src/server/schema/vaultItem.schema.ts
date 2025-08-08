import { z } from "zod";

export const vaultItemSchema = z.object({
  name: z.string(),
  value: z.number(),
  vaultId: z.number(),
});
