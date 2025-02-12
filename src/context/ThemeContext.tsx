"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import theme from "../styles/theme"; // Import design tokens from theme.ts

/* =============================================================================
   TYPES & INTERFACES
============================================================================= */
export type Theme = "light" | "dark";

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

/* =============================================================================
   CONTEXT CREATION
============================================================================= */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/* =============================================================================
   HELPER FUNCTION
============================================================================= */
/**
 * applyTokens
 * -----------
 * Applies a set of CSS custom properties (design tokens) to the document's root element.
 *
 * @param tokens - An object mapping CSS variable names to their values.
 */
function applyTokens(tokens: Record<string, string>) {
  Object.entries(tokens).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
}

/* =============================================================================
   THEME PROVIDER
============================================================================= */
/**
 * ThemeProvider Component
 * -------------------------
 * Provides theme state management by:
 * - Determining the initial theme from localStorage or system preferences.
 * - Applying the corresponding CSS custom properties (from theme.ts) to the document.
 * - Toggling a "dark" class on the <html> element for Tailwind's dark mode variants.
 */
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Determine the initial theme.
  const getInitialTheme = (): Theme => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") as Theme | null;
      if (storedTheme) return storedTheme;
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
    }
    return "light";
  };

  const [currentTheme, setCurrentTheme] = useState<Theme>(getInitialTheme());

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", currentTheme);
      if (currentTheme === "dark") {
        document.documentElement.classList.add("dark");
        applyTokens(theme.colors.dark);
      } else {
        document.documentElement.classList.remove("dark");
        applyTokens(theme.colors.light);
      }
    }
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const contextValue: ThemeContextType = {
    theme: currentTheme,
    toggleTheme,
  };

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

/* =============================================================================
   CUSTOM HOOK: useTheme
============================================================================= */
/**
 * useTheme
 * --------
 * A custom hook to access the ThemeContext.
 *
 * @returns The current theme and toggleTheme function.
 * @throws An error if used outside of a ThemeProvider.
 */
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeContext };
