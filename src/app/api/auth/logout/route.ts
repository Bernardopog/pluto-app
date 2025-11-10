import { cookies } from 'next/headers';
import { createMessage } from '@/server/utils/message';

export const GET = async () => {
  const cookieStore = cookies();

  (await cookieStore).delete('token');
  const { message, status, data } = createMessage<boolean>(
    'deslogado com sucesso',
    200,
    true,
  );

  return Response.json({ message, data }, { status });
};
