// src/store/themeStore.ts

import { create } from 'zustand';

interface ThemeState {
    darkMode: boolean;
    toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>(
    (set: (arg0: (state: any) => { darkMode: boolean }) => any) => ({
        darkMode: false, // Default theme is light
        toggleTheme: () => set((state) => ({ darkMode: !state.darkMode }))
    })
);
