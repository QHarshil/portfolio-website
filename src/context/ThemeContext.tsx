// src/context/ThemeContext.tsx

"use client";

/**
 * ThemeContext
 * ------------
 *
 * This module provides a React Context to manage the theme state (light or dark)
 * across the entire application. It detects the user's preferred color scheme,
 * persists the selected theme in localStorage, and offers a toggle function.
 *
 * Design & Implementation Details:
 * - Uses React Context to share theme data and a toggling function across components.
 * - Detects system-level color scheme preference using window.matchMedia.
 * - Persists theme selection in localStorage to maintain consistency across sessions.
 * - Updates the document’s root element class to enable CSS-based theming.
 *
 * Usage:
 * - Wrap your application's root component with <ThemeProvider> to enable global theming.
 * - Use the custom hook `useTheme()` in any component to access the current theme and toggle functionality.
 */

import React, { createContext, useContext, useEffect, useState } from "react";

// Define the type for the theme (either "light" or "dark")
type Theme = "light" | "dark";

// Define the interface for our ThemeContext, including the current theme and a toggle function
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Create the ThemeContext with a default fallback value. The default will be overwritten by the Provider.
const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

/**
 * ThemeProvider Component
 *
 * Wraps the application and provides theme state management.
 * - Checks for any previously saved theme in localStorage.
 * - Falls back to the system's preferred color scheme if no value is found.
 * - Updates the document's root class to support CSS-based dark mode styling.
 *
 * @param {React.ReactNode} children - The child components that require theme context.
 */
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Function to determine the initial theme.
  const getInitialTheme = (): Theme => {
    if (typeof window !== "undefined") {
      // Try to retrieve a stored theme from localStorage
      const storedTheme = localStorage.getItem("theme") as Theme | null;
      if (storedTheme) {
        return storedTheme;
      }
      // If not stored, detect the system preference using matchMedia
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
    }
    // Default to light theme if no preference is detected
    return "light";
  };

  // Initialize the theme state
  const [theme, setTheme] = useState<Theme>(getInitialTheme());

  // useEffect to persist theme changes and update the document root class
  useEffect(() => {
    // Persist the current theme in localStorage for future visits
    localStorage.setItem("theme", theme);

    // Toggle a class on the <html> element to enable CSS dark mode styles
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // The context value to be provided to child components
  const contextValue: ThemeContextType = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Custom Hook: useTheme
 *
 * Provides an easy way to access the theme context.
 * Components using this hook will re-render on theme changes.
 *
 * @returns {ThemeContextType} - The current theme and the toggleTheme function.
 *
 * @throws {Error} - If used outside of a ThemeProvider.
 */
const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useTheme };
