import { cookies } from "next/headers";
import { verifyJWT } from "@/lib/jwt";
import { IJWTPayload } from "@/interfaces/IJWTPayload";

export const getUser = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) return null;

  const payload = verifyJWT(token) as IJWTPayload;
  return Number(payload.userId);
};
