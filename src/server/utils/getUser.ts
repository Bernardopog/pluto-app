import { cookies } from 'next/headers';
import type { IJWTPayload } from '@/interfaces/IJWTPayload';
import { verifyJWT } from '@/lib/jwt';

export const getUser = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  if (!token) return null;

  const payload = verifyJWT(token) as IJWTPayload;
  if (!payload) return null;
  return Number(payload.userId);
};
