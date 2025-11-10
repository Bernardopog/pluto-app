import type { IMessage } from '@/interfaces/IMessage';

export const showError = <U>(res: IMessage<U>) => {
  console.error(res.message, res.data);
};
