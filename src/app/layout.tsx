// src/app/layout.tsx
/**
 * RootLayout Component
 * ======================
 * 
 * This component defines the global layout for the portfolio application using the Next.js App Router.
 * It performs the following key tasks:
 * 
 * 1. **Global CSS & Font Setup:**
 *    - Imports global styles from `globals.css` (including Tailwind CSS directives and resets).
 *    - Uses Next.js's built-in font optimization via `next/font/google` to load and apply custom fonts.
 * 
 * 2. **SEO & Metadata:**
 *    - Sets up metadata (title, description, Open Graph data) based on Harshil Chudasama's resume.
 *      The metadata emphasizes expertise in scalable systems, cloud automation, machine learning,
 *      and a broad range of software engineering skills relevant to backend, frontend, and full-stack roles.
 * 
 * 3. **Theming & State Management:**
 *    - Wraps the entire application in the `ThemeProvider` to enable dark/light mode across pages.
 * 
 * 4. **HTML Structure:**
 *    - Establishes the base HTML structure with language settings and applies font variables.
 * 
 * Design Decisions:
 * - SEO metadata is tailored to showcase a well-rounded Software Development Engineer.
 * - Global styles and font configurations ensure a consistent, modern look and feel.
 * - The modular structure allows for future enhancements (e.g., additional analytics, more complex layouts).
 *
 * Author: Harshil Chudasama
 * Date: Februrary 7, 2025
 */

import type { Metadata } from "next";
import React from "react";

// Import optimized Google Fonts via Next.js for performance and consistency
import { Geist, Geist_Mono } from "next/font/google";

// Import global CSS (includes Tailwind CSS directives, resets, and custom properties)
import "../styles/globals.css";

// Import the ThemeProvider to enable global dark/light mode management
import { ThemeProvider } from "../context/ThemeContext";

// Initialize Google Fonts and assign them to CSS custom properties
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define metadata for SEO, social sharing, and browser configuration based on resume details
export const metadata: Metadata = {
  title: "Harshil Chudasama | Software Development Engineer",
  description:
    "Harshil Chudasama is a Software Development Engineer with an MSc in Computer Science. Experienced in designing scalable, fault-tolerant systems, distributed computing, and cloud automation using AWS and Kubernetes. Skilled in machine learning, high-performance applications, and optimizing large-scale data pipelines for low-latency, compute-intensive workflows. Open to roles in backend, frontend, or full-stack development.",
  openGraph: {
    title: "Harshil Chudasama | Software Development Engineer",
    description:
      "Discover the portfolio of Harshil Chudasama, a versatile Software Development Engineer with expertise in scalable systems, cloud automation, machine learning, and data pipelines. Explore projects demonstrating high-performance backend, frontend, and full-stack solutions.",
    url: "https://yourportfolio.com", // Replace with your actual portfolio URL
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
};

/**
 * RootLayout
 * 
 * Wraps the entire application with global configurations, including:
 * - HTML language settings and font variables.
 * - The ThemeProvider to manage and persist dark/light mode.
 *
 * @param {React.ReactNode} children - The page content to be rendered.
 * @returns {JSX.Element} The complete HTML structure for the application.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Additional head elements (e.g., favicon links, extra meta tags) can be added here */}
      </head>
      <body className="antialiased">
        {/*
          Wrap the application with the ThemeProvider to ensure that every component
          can access and toggle the global dark/light theme.
        */}
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
