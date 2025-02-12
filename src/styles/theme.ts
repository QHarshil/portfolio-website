/**
 * Theme Configuration
 * ====================
 *
 * This file defines the design tokens for our futuristic, elegant, and minimalistic website.
 * It leverages CSS custom properties defined in our global CSS (via @layer base)
 * to provide dynamic, responsive theming for both light and dark modes.
 *
 * Author: Harshil Chudasama
 */

const theme = {
  colors: {
    light: {
      background: "hsl(var(--background))",               // Light Sand with soft pinkish hue
      foreground: "hsl(var(--foreground))",               // Deep dark text
      card: "hsl(var(--card))",                             // Egyptian Papyrus for cards
      cardForeground: "hsl(var(--card-foreground))",
      popover: "hsl(var(--popover))",
      popoverForeground: "hsl(var(--popover-foreground))",
      primary: "hsl(var(--primary))",                       // Desert Gold accent
      primaryForeground: "hsl(var(--primary-foreground))",
      secondary: "hsl(var(--secondary))",                   // Pharaoh's Gold accent
      secondaryForeground: "hsl(var(--secondary-foreground))",
      accent: "hsl(var(--accent))",                         // Burnt Umber accent
      accentForeground: "hsl(var(--accent-foreground))",
      destructive: "hsl(var(--destructive))",               // Strong red for destructive actions
      destructiveForeground: "hsl(var(--destructive-foreground))",
      border: "hsl(var(--border))",                         // Antique Bronze border
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
    },
    dark: {
      background: "hsl(var(--background))",               // Deep, warm charcoal
      foreground: "hsl(var(--foreground))",               // Light Sand text
      card: "hsl(var(--card))",                             // Dark cards slightly lighter than background
      cardForeground: "hsl(var(--card-foreground))",
      popover: "hsl(var(--popover))",
      popoverForeground: "hsl(var(--popover-foreground))",
      primary: "hsl(var(--primary))",                       // Pharaoh's Gold for CTAs
      primaryForeground: "hsl(var(--primary-foreground))",
      secondary: "hsl(var(--secondary))",                   // Royal Blue for dark mode accents
      secondaryForeground: "hsl(var(--secondary-foreground))",
      accent: "hsl(var(--accent))",                         // Burnt Umber accent remains
      accentForeground: "hsl(var(--accent-foreground))",
      destructive: "hsl(var(--destructive))",
      destructiveForeground: "hsl(var(--destructive-foreground))",
      border: "hsl(var(--border))",                         // Lighter Antique Bronze for separation
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
    },
  },
  typography: {
    fonts: {
      body: "'Lora', 'Poppins', sans-serif",
      heading: "'Playfair Display', 'Garamond', 'EB Garamond', 'Merriweather', serif",
      monospace: "'Fira Code', monospace",
    },
    sizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
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
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4rem",
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
