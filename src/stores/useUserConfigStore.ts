import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserConfigStore {
  showAuroraBackground: boolean;
  setShowAuroraBackground: (_showAuroraBackground: boolean) => void;
}

export const useUserConfigStore = create(
  persist<UserConfigStore>(
    (set) => ({
      showAuroraBackground: true,
      setShowAuroraBackground: (_showAuroraBackground: boolean) =>
        set(() => ({ showAuroraBackground: _showAuroraBackground })),
    }),
    {
      name: "userConfig",
    }
  )
);
