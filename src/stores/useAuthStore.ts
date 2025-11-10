import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IAuthStore {
  userId: number | null;
  setUserId: (id: number | null) => void;
  clearUserId: () => void;
}

export const useAuthStore = create<IAuthStore>()(
  persist(
    (set) => ({
      userId: null,
      setUserId: (id) => set({ userId: id }),
      clearUserId: () => set({ userId: null }),
    }),
    {
      name: 'auth-storage',
    },
  ),
);
