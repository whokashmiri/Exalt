import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("exalt-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("exalt-theme", theme);
    set({ theme });
  },
}));