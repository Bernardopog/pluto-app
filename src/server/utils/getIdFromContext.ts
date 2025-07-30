import { IContext } from "@/interfaces/IContext";

export const getIdFromContext = async (context: IContext) =>
  (await context.params)?.id;
