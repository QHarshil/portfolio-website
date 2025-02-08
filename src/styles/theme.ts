// src/styles/theme.ts
/**
 * Theme Configuration
 * ====================
 * 
 * This file defines the design tokens for our portfolio website, establishing a modern,
 * sleek, and futuristic aesthetic. The theme is structured to be modular and scalable,
 * allowing for easy updates and consistency throughout the application.
 *
 * Design Principles:
 * - Sleek & Subtle: A minimalist design using soft shadows, refined typography,
 *   and a balanced color palette that is modern yet understated.
 * - Futuristic: Clean lines, thoughtful spacing, and a slight emphasis on high-contrast
 *   elements (e.g., primary and secondary accents) to convey innovation without overwhelming the user.
 * - Consistency: Centralized design tokens ensure a uniform look and feel across all components.
 *
 * Integration:
 * - This theme object can be used with CSS-in-JS libraries (such as styled-components or Emotion)
 *   or to extend Tailwind CSS configurations.
 *
 * Author: [Your Name]
 * Date: [Today's Date]
 */

export const theme = {
    // -----------------------------------------------------------------------------
    // Colors
    // -----------------------------------------------------------------------------
    colors: {
      // Primary colors for interactive elements (buttons, links)
      primary: "#0070f3",         // A vibrant, clean blue for primary actions.
      primaryLight: "#3291ff",    // Lighter variant for hover states.
      primaryDark: "#005bb5",     // Darker variant for active states.
  
      // Secondary accents to complement primary elements.
      secondary: "#ff4081",       // A modern, vibrant pink accent.
      secondaryLight: "#ff79a7",
      secondaryDark: "#c60055",
  
      // Background and foreground colors for layout and text.
      background: "#ffffff",      // Light background for standard mode.
      backgroundDark: "#0a0a0a",    // Dark background for dark mode.
      foreground: "#171717",      // Dark text for legibility on light backgrounds.
      foregroundLight: "#ededed",  // Light text for dark mode contrast.
  
      // Neutral colors for borders, shadows, and subtle UI elements.
      neutral: "#888888",
      neutralLight: "#cccccc",
      neutralDark: "#444444",
  
      // Semantic colors for status and alerts.
      success: "#28a745",         // Green for success messages.
      warning: "#ffcc00",         // Yellow for warnings.
      error: "#ff3b30",           // Red for error states.
    },
  
    // -----------------------------------------------------------------------------
    // Typography
    // -----------------------------------------------------------------------------
    typography: {
      // Font families for various text roles.
      fonts: {
        body: "'Inter', sans-serif",         // A modern, versatile sans-serif for body text.
        heading: "'Roboto', sans-serif",       // A clean, bold font for headings.
        monospace: "'Fira Code', monospace",   // A monospaced font for code snippets.
      },
      // Font sizes (scale in rem units) for consistent sizing.
      sizes: {
        xs: "0.75rem",   // 12px
        sm: "0.875rem",  // 14px
        base: "1rem",    // 16px
        lg: "1.125rem",  // 18px
        xl: "1.25rem",   // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem",  // 36px
        "5xl": "3rem",     // 48px
      },
      // Font weights for textual hierarchy.
      weights: {
        normal: 400,
        medium: 500,
        bold: 700,
      },
      // Line heights for optimal readability.
      lineHeights: {
        normal: 1.5,
        relaxed: 1.75,
        tight: 1.25,
      },
    },
  
    // -----------------------------------------------------------------------------
    // Spacing
    // -----------------------------------------------------------------------------
    spacing: {
      // Base spacing scale, which can be multiplied for margins, paddings, etc.
      xs: "0.25rem",  // 4px
      sm: "0.5rem",   // 8px
      md: "1rem",     // 16px
      lg: "1.5rem",   // 24px
      xl: "2rem",     // 32px
      "2xl": "3rem",  // 48px
      "3xl": "4rem",  // 64px
    },
  
    // -----------------------------------------------------------------------------
    // Breakpoints
    // -----------------------------------------------------------------------------
    breakpoints: {
      // Responsive design breakpoints.
      mobile: "640px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
    },
  
    // -----------------------------------------------------------------------------
    // Borders
    // -----------------------------------------------------------------------------
    borders: {
      // Border radius values for soft, modern rounded corners.
      none: "0",
      sm: "0.125rem", // 2px
      md: "0.375rem", // 6px
      lg: "0.5rem",   // 8px
      full: "9999px", // Fully rounded (pill shape)
    },
  
    // -----------------------------------------------------------------------------
    // Shadows
    // -----------------------------------------------------------------------------
    shadows: {
      // Subtle shadows to provide depth and a futuristic feel.
      xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
      sm: "0 1px 3px rgba(0, 0, 0, 0.1)",
      md: "0 4px 6px rgba(0, 0, 0, 0.1)",
      lg: "0 10px 15px rgba(0, 0, 0, 0.15)",
    },
  
    // -----------------------------------------------------------------------------
    // Transitions
    // -----------------------------------------------------------------------------
    transitions: {
      // Default transition for smooth interactive effects.
      default: "all 0.3s ease",
    },
  
    // -----------------------------------------------------------------------------
    // Z-Index
    // -----------------------------------------------------------------------------
    zIndices: {
      // Z-index layering for UI elements.
      dropdown: 1000,
      modal: 1100,
      tooltip: 1200,
      highest: 9999,
    },
  };
  
  export default theme;
  