"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

// Define navigation items (excluding Projects, which gets a dropdown)
const navItems = [
  { name: "Home", path: "/" },
  { name: "CV", path: "/cv" },
  { name: "Contact", path: "/contact" },
];

// Define the individual project links for the Projects dropdown.
const projectDropdownItems = [
  { name: "All Projects", path: "/projects" },
  { name: "High‑Frequency Trading", path: "/projects/trading" },
  { name: "Cloud‑Native Platform", path: "/projects/cloud-platform" },
  { name: "Data Processing Pipeline", path: "/projects/data-pipeline" },
  { name: "Route Optimization", path: "/projects/route-optimization" },
  { name: "Donor Management", path: "/projects/donor-app" },
  { name: "FaceFit AR App", path: "/projects/facefit" },
  { name: "Portfolio Showcase", path: "/projects/portfolio" },
];

/* -----------------------------------------------------------------------------
   Framer Motion Variants
----------------------------------------------------------------------------- */
const navItemVariant = {
  hidden: { opacity: 0, y: -5 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.1, transition: { duration: 0.2 } },
};

/**
 * Header Component
 * ----------------
 * A modern, futuristic header with:
 * - A branding section that links to home.
 * - A desktop navigation menu that includes a Projects dropdown.
 * - A responsive mobile menu using a hamburger icon.
 * - A dark/light mode toggle.
 */
const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProjectsDropdownOpen, setProjectsDropdownOpen] = useState(false);

  // Toggle the mobile menu open/close state.
  const handleMobileMenuToggle = () => setMobileMenuOpen((prev) => !prev);

  // Toggle the Projects dropdown open/close state.
  const handleProjectsToggle = () => setProjectsDropdownOpen((prev) => !prev);

  return (
    <header className="relative z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl border-b border-gray-300 dark:border-gray-700">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Branding / Logo */}
        <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          <Link href="/">Harshil Chudasama</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              variants={navItemVariant}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <Link href={item.path}>
                <span className="cursor-pointer text-lg font-medium text-gray-900 dark:text-gray-100 hover:underline">
                  {item.name}
                </span>
              </Link>
            </motion.div>
          ))}

          {/* Projects Dropdown */}
          <motion.div
            className="relative"
            onMouseEnter={() => setProjectsDropdownOpen(true)}
            onMouseLeave={() => setProjectsDropdownOpen(false)}
          >
            <motion.button
              variants={navItemVariant}
              whileHover="hover"
              onClick={handleProjectsToggle}
              className="cursor-pointer text-lg font-medium text-gray-900 dark:text-gray-100 hover:underline"
            >
              Projects
            </motion.button>
            <AnimatePresence>
              {isProjectsDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  {projectDropdownItems.map((proj) => (
                    <Link key={proj.name} href={proj.path}>
                      <a className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                        {proj.name}
                      </a>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </nav>

        {/* Right Controls: Dark/Light Toggle & Mobile Hamburger */}
        <div className="flex items-center space-x-4">
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            className="p-2 rounded-full border border-gray-400 dark:border-gray-500 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </motion.button>
          <div className="md:hidden">
            <button
              onClick={handleMobileMenuToggle}
              className="text-gray-900 dark:text-gray-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <HiOutlineX className="h-8 w-8" />
              ) : (
                <HiOutlineMenu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900">
          <ul className="flex flex-col space-y-4 p-4">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="text-center text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-[var(--color-primary)] transition-colors"
              >
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
            <li className="relative text-center">
              <button
                onClick={handleProjectsToggle}
                className="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-[var(--color-primary)] transition-colors"
              >
                Projects
              </button>
              <AnimatePresence>
                {isProjectsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="mt-2 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 border border-gray-200 dark:border-gray-700"
                  >
                    {projectDropdownItems.map((proj) => (
                      <Link key={proj.name} href={proj.path}>
                        <a className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                          {proj.name}
                        </a>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
