// src/store/userStore.ts
import { create } from 'zustand';
import { User } from 'firebase/auth';

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserStore>((set: (arg0: { user: User | null; }) => void) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));
