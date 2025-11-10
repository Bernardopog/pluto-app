import { create } from 'zustand';

interface IDataMessage {
  message: string;
  status: number;
  description: string;
}

interface IUseMessageStore {
  data: IDataMessage;
  setMessage: (data: IDataMessage) => void;
}

export const useMessageStore = create<IUseMessageStore>((set) => ({
  data: {
    message: '',
    status: 0,
    description: '',
  },
  setMessage: (data) => set(() => ({ data })),
}));
