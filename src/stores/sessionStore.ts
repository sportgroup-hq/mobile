import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { SESSION_STORE_NAME } from "../constants/stores";

export interface SessionState {
  token: string | null;
  setToken: (token: string | null) => void;
  isHydrating: boolean;
  setIsHydrating: (isHydrating: boolean) => void;
}

const useSessionStore = create<SessionState>()(
  persist(
    (set) => ({
      token: null,
      setToken: (token) => {
        set({ token });
      },
      isHydrating: true,
      setIsHydrating: (isHydrating) => {
        set({ isHydrating });
      },
    }),
    {
      name: SESSION_STORE_NAME,
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state) => {
        state?.setIsHydrating(false);
      },
    }
  )
);

export default useSessionStore;
