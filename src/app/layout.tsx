// src/app/layout.tsx
import "../styles/globals.css"; // Global CSS for resets, Tailwind directives, and custom properties
import { ThemeProvider } from "../context/ThemeContext";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

// Initialize and assign Google Fonts to CSS variables.
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

// Enhanced SEO and Open Graph metadata with direct meta tags.
export const metadata: Metadata = {
  title: "Harshil Chudasama | Software Developer | Ex-Product Manager",
  description:
    "Portfolio of Harshil Chudasama, Full-Stack Engineer and Ex-Product Manager with expertise in distributed systems, cloud automation, and algorithm optimization.",
  openGraph: {
    title: "Harshil Chudasama | Software Developer | Ex-Product Manager",
    description:
      "Explore Harshil Chudasama's projects and expertise in full-stack engineering and cross-functional leadership.",
    url: "https://qharshil.ca",
    siteName: "Harshil Chudasama Portfolio",
    images: [{
      url: "/profile_pic.jpg",
      width: 1200,
      height: 630,
      alt: "Harshil Chudasama Portfolio Preview",
    }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@HarshilChudasama",
    title: "Harshil Chudasama | Software Developer",
    description: "Software Developer and Ex-Product Manager portfolio featuring projects, achievements, and skills.",
    images: ["/profile_pic.jpg"],
  },
};

/**
 * RootLayout Component
 * ======================
 * - Loads global styles and fonts.
 * - Provides SEO metadata for Open Graph and Twitter.
 * - Adds a direct Open Graph meta tag for compatibility.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <meta property="og:image" content="/profile_pic.jpg" />
        <link rel="canonical" href="https://qharshil.ca" />
      </head>
      <body className="antialiased bg-gray-50 text-gray-900">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
