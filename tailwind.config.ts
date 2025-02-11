import type { Config } from "tailwindcss";

export default {
  // Enable dark mode using the "dark" class on the root element.
  darkMode: "class",
  // Specify the paths to all of your components so Tailwind can tree-shake unused styles.
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Extend colors to use your CSS custom properties.
      colors: {
        background: "var(--color-background)",
        panel: "var(--color-panel)",
        card: "var(--color-card)",
        foreground: "var(--color-foreground)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        accent: "var(--color-accent)",
        interactive: "var(--color-interactive)",
      },
      // Use custom fonts defined as CSS variables.
      fontFamily: {
        body: "var(--font-body, 'Inter', sans-serif)",
        heading: "var(--font-heading, 'Space Grotesk', sans-serif)",
        monospace: "var(--font-monospace, 'Fira Code', monospace)",
      },
      // Extend border radius using a custom property.
      borderRadius: {
        DEFAULT: "var(--border-radius)",
      },
      // Optionally extend z-index values (with fallback values)
      zIndex: {
        dropdown: "1000", // You can also use: "var(--z-index-dropdown, 1000)"
        modal: "1100",
        tooltip: "1200",
        highest: "9999",
      },
      // Extend transition properties if needed
      transitionProperty: {
        all: "all",
      },
      // Optionally extend shadows based on your design tokens.
      boxShadow: {
        xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
        sm: "0 1px 3px rgba(0, 0, 0, 0.1)",
        md: "0 4px 6px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
} satisfies Config;
