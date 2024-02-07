import { createContext, useContext } from "react";

type Theme = "light" | "dark";
type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
  };
  
  const ThemeContext = createContext<ThemeContextType | null>(null);

export function useTheme() {
    const context = useContext(ThemeContext);
  
    if (context === null) {
      throw new Error("useTheme must be used within a ThemeContextProvider");
    }
  
    return context;
  }