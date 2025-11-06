import { create } from "zustand";

interface IThemeStore {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

export const useThemeStore = create<IThemeStore>((set) => ({
  theme: "light",
  setTheme: (theme: "light" | "dark") => set({ theme }),
}));
