// src/app/layout.tsx
import "../styles/globals.css"; // Global CSS: resets, Tailwind directives, and custom properties
import { ThemeProvider } from "../context/ThemeContext";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

// Initialize Google Fonts and assign them to custom CSS variables.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

// Define metadata for SEO, Open Graph, and other purposes.
export const metadata: Metadata = {
  title: "Harshil Chudasama | Full-Stack Engineer & Product Leader",
  description:
    "Explore the portfolio of Harshil Chudasama, a visionary Full-Stack Engineer and Ex-Product Manager. With expertise in scalable systems, cloud automation, and cross-functional leadership, Harshil delivers innovative digital solutions that push the boundaries of technology.",
  openGraph: {
    title: "Harshil Chudasama | Portfolio",
    description:
      "Discover projects and skills from Harshil Chudasama — a seasoned Full-Stack Engineer and Product Leader with a passion for innovation and technology.",
    url: "https://yourportfolio.com", // Replace with your actual URL
    siteName: "Harshil Chudasama Portfolio",
    images: [
      {
        url: "https://yourportfolio.com/og-image.png", // Replace with your Open Graph image URL
        width: 1200,
        height: 630,
        alt: "Harshil Chudasama Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // Additional meta tags can be added here.
};

/**
 * RootLayout Component
 * ======================
 *
 * Wraps the entire application with global configurations:
 * - Global CSS is imported for resets, utilities, and custom properties.
 * - Custom fonts are initialized and set as CSS variables.
 * - SEO and Open Graph metadata are defined.
 * - The entire app is wrapped in a ThemeProvider for centralized dark/light mode management.
 *
 * Author: Harshil Chudasama
 * Date: February 7, 2025
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Additional head elements (favicon, extra meta tags, etc.) can be added here */}
      </head>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
