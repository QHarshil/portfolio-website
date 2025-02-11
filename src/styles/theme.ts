/**
 * Theme Configuration
 * ====================
 *
 * This file defines the design tokens for our futuristic, minimalistic website.
 * It includes detailed color tokens for both light and dark modes, along with
 * settings for typography, spacing, borders, shadows, transitions, and breakpoints.
 *
 * Light Mode (Futuristic Minimalism):
 *   - Background: Off-White (#F9F9F9)
 *   - Panel: Soft Gray (#EAEAEA)
 *   - Card: Clean White (#FFFFFF)
 *   - Foreground: Deep Dark (#1C1C1E)
 *   - Primary: Vivid Blue (#007BFF)
 *   - Secondary: Warm Gold (#FFC107)
 *   - Tertiary: Muted Purple (#5A189A)
 *   - Accent: Cool Violet-Blue (#5856D6)
 *   - Interactive: Interactive Blue (#0A84FF)
 *   - Overlay: rgba(255, 255, 255, 0.8)
 *   - Border: #D1D1D6
 *
 * Dark Mode (Sleek Futurism):
 *   - Background: Deep Dark (#1C1C1E)
 *   - Panel: Charcoal Gray (#2C2C2E)
 *   - Card: Very Dark Gray (#262629)
 *   - Foreground: Soft Off-White (#F2F2F7)
 *   - Primary: Bright Blue (#0A84FF)
 *   - Secondary: Muted Orange (#FF9F0A)
 *   - Tertiary: Deep Purple (#7E57C2)
 *   - Accent: Consistent Violet-Blue (#5856D6)
 *   - Interactive: Lighter Interactive Blue (#5AC8FA)
 *   - Overlay: rgba(0, 0, 0, 0.8)
 *   - Border: #3A3A3C
 *
 * Typography, spacing, and other design scales are also defined below.
 *
 * Author: Harshil Chudasama
 * Date: [Current Date]
 */

export const theme = {
  colors: {
    light: {
      background: "#F9F9F9",      // Off-White Background
      panel: "#EAEAEA",           // Soft Gray Panels
      card: "#FFFFFF",            // Clean White Cards
      foreground: "#1C1C1E",      // Deep Dark Text
      primary: "#007BFF",         // Vivid Blue for CTAs
      secondary: "#FFC107",       // Warm Gold for accents
      tertiary: "#5A189A",        // Muted Purple for secondary highlights
      accent: "#5856D6",          // Cool Violet-Blue Accent
      interactive: "#0A84FF",     // Interactive Blue for hover states
      overlay: "rgba(255, 255, 255, 0.8)",
      border: "#D1D1D6",
    },
    dark: {
      background: "#1C1C1E",      // Deep Dark Background
      panel: "#2C2C2E",           // Charcoal Gray Panels
      card: "#262629",            // Very Dark Gray for Cards
      foreground: "#F2F2F7",      // Soft Off-White Text
      primary: "#0A84FF",         // Bright Blue for CTAs
      secondary: "#FF9F0A",       // Muted Orange for accents
      tertiary: "#7E57C2",        // Deep Purple for secondary highlights
      accent: "#5856D6",          // Consistent Violet-Blue Accent
      interactive: "#5AC8FA",     // Lighter Interactive Blue for hover states
      overlay: "rgba(0, 0, 0, 0.8)",
      border: "#3A3A3C",
    },
  },
  typography: {
    fonts: {
      body: "'Inter', sans-serif",
      heading: "'Space Grotesk', sans-serif",
      monospace: "'Fira Code', monospace",
    },
    sizes: {
      xs: "0.75rem",    // 12px
      sm: "0.875rem",   // 14px
      base: "1rem",     // 16px
      lg: "1.125rem",   // 18px
      xl: "1.25rem",    // 20px
      "2xl": "1.5rem",  // 24px
      "3xl": "1.875rem",// 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem",    // 48px
    },
    weights: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
    lineHeights: {
      normal: 1.5,
      relaxed: 1.75,
      tight: 1.25,
    },
  },
  spacing: {
    xs: "0.25rem",    // 4px
    sm: "0.5rem",     // 8px
    md: "1rem",       // 16px
    lg: "1.5rem",     // 24px
    xl: "2rem",       // 32px
    "2xl": "3rem",    // 48px
    "3xl": "4rem",    // 64px
  },
  breakpoints: {
    mobile: "640px",
    tablet: "768px",
    laptop: "1024px",
    desktop: "1280px",
  },
  borders: {
    none: "0",
    sm: "0.125rem",
    md: "0.375rem",
    lg: "0.5rem",
    full: "9999px",
  },
  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.1)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.15)",
  },
  transitions: {
    default: "all 0.3s ease",
  },
  zIndices: {
    dropdown: 1000,
    modal: 1100,
    tooltip: 1200,
    highest: 9999,
  },
};

export default theme;
