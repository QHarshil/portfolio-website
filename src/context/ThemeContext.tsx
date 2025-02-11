"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

/* =============================================================================
   TYPES & INTERFACES
============================================================================= */
// Define a union type for theme values.
export type Theme = "light" | "dark";

// Define the interface for the ThemeContext value.
export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

/* =============================================================================
   CONTEXT CREATION
============================================================================= */
// Create the ThemeContext with an initial value of undefined to enforce provider usage.
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/* =============================================================================
   DESIGN TOKENS
============================================================================= */
// Light Mode Tokens: Futuristic Minimalism
const lightThemeTokens: Record<string, string> = {
  "--color-background": "#F9F9F9",       // Off-White Background
  "--color-panel": "#EAEAEA",            // Soft Gray Panels
  "--color-card": "#FFFFFF",             // Clean White for Cards
  "--color-foreground": "#1C1C1E",       // Deep Dark Text
  "--color-primary": "#007BFF",          // Vivid Blue for CTAs
  "--color-secondary": "#FFC107",        // Warm Gold for Accents
  "--color-tertiary": "#5A189A",         // Muted Purple for Secondary Highlights
  "--color-accent": "#5856D6",           // Cool Violet-Blue Accent
  "--color-interactive": "#0A84FF",      // Interactive Blue for hover states
  "--color-overlay": "rgba(255, 255, 255, 0.8)",
  "--color-border": "#D1D1D6",
};

// Dark Mode Tokens: Sleek Futurism
const darkThemeTokens: Record<string, string> = {
  "--color-background": "#1C1C1E",       // Deep Dark Background
  "--color-panel": "#2C2C2E",            // Charcoal Gray Panels
  "--color-card": "#262629",             // Very Dark Gray for Cards
  "--color-foreground": "#F2F2F7",       // Soft Off-White Text
  "--color-primary": "#0A84FF",          // Bright Blue for CTAs
  "--color-secondary": "#FF9F0A",        // Muted Orange for Accents
  "--color-tertiary": "#7E57C2",         // Deep Purple for Secondary Highlights
  "--color-accent": "#5856D6",           // Consistent Violet-Blue Accent
  "--color-interactive": "#5AC8FA",      // Lighter Interactive Blue for hover states
  "--color-overlay": "rgba(0, 0, 0, 0.8)",
  "--color-border": "#3A3A3C",
};

/* =============================================================================
   HELPER FUNCTION
============================================================================= */
/**
 * applyTokens
 * -----------
 * Applies a set of CSS custom properties to the document's root element.
 *
 * @param tokens - An object mapping custom property names to their values.
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
 * Wraps your application and provides theme state management.
 * - Determines the initial theme from localStorage or system preference.
 * - Applies the corresponding CSS custom properties to the document root.
 * - Toggles a "dark" class on the <html> element (to activate Tailwind’s dark mode).
 *
 * @param children - The child components that require theme context.
 */
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Determine initial theme from localStorage or system settings.
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

  const [theme, setTheme] = useState<Theme>(getInitialTheme());

  // Update the theme whenever it changes.
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
        applyTokens(darkThemeTokens);
      } else {
        document.documentElement.classList.remove("dark");
        applyTokens(lightThemeTokens);
      }
    }
  }, [theme]);

  // Toggle function to switch between light and dark modes.
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Provide the theme state and toggle function to children.
  const contextValue: ThemeContextType = { theme, toggleTheme };

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
 * @returns The current theme and the toggleTheme function.
 * @throws Error if used outside of a ThemeProvider.
 */
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeContext };
