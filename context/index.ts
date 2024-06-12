import React, { createContext } from "react";

interface state {
  en: boolean;
  setEn: () => void;
  darkMode: boolean;
  setDarkMode: () => void;
}
export const Context = createContext<state>({
  en: true,
  setEn: () => {},
  darkMode: true,
  setDarkMode: () => {},
});
