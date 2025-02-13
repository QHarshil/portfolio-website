"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Github, Linkedin, Globe } from "lucide-react";

// Navigation items for main links (excluding Projects)
const navItems = [
  { name: "Home", path: "/" },
  { name: "CV", path: "/cv" },
  { name: "Contact", path: "/contact" },
];

// Dropdown items for the Projects menu (do not include "All Projects" here)
const projectDropdownItems = [
  { name: "High‑Frequency Trading", path: "/projects/trading" },
  { name: "Cloud‑Native Platform", path: "/projects/cloud-platform" },
  { name: "Data Processing Pipeline", path: "/projects/data-pipeline" },
  { name: "Route Optimization", path: "/projects/route-optimization" },
  { name: "Donor Management", path: "/projects/donor-app" },
  { name: "FaceFit AR App", path: "/projects/facefit" },
  { name: "Portfolio Showcase", path: "/projects/portfolio" },
];

const navItemVariant = {
  hidden: { opacity: 0, y: -5 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.1, transition: { duration: 0.2 } },
};

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProjectsDropdownOpen, setProjectsDropdownOpen] = useState(false);

  const handleMobileMenuToggle = () => setMobileMenuOpen(prev => !prev);
  const handleProjectsToggle = () => setProjectsDropdownOpen(prev => !prev);

  return (
    <header className="relative z-50 bg-[hsl(var(--background))] text-[hsl(var(--foreground))] shadow-md">
      {/* Top bar gradient */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] opacity-90" />
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Branding / Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">Harshil Chudasama</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map(item => (
            <motion.div
              key={item.name}
              variants={navItemVariant}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <Link href={item.path}>
                <span className="cursor-pointer text-sm font-medium hover:underline">
                  {item.name}
                </span>
              </Link>
            </motion.div>
          ))}
          {/* Projects Dropdown: Clicking Projects text navigates to All Projects */}
          <motion.div
            className="relative"
            onMouseEnter={() => setProjectsDropdownOpen(true)}
            onMouseLeave={() => setProjectsDropdownOpen(false)}
          >
            <Link href="/projects">
              <span className="cursor-pointer text-sm font-medium hover:underline">
                Projects
              </span>
            </Link>
            <button
              onClick={handleProjectsToggle}
              className="ml-1 focus:outline-none"
              aria-label="Toggle Projects Dropdown"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <AnimatePresence>
              {isProjectsDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute left-0 mt-2 w-64 max-w-[90vw] bg-[hsl(var(--background))] rounded-md shadow-lg border border-[hsl(var(--border))] z-50"
                >
                  {/* Separate "All Projects" entry */}
                  <Link href="/projects">
                    <div className="block px-4 py-2 text-[hsl(var(--foreground))] hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--primary-foreground))] cursor-pointer">
                      All Projects
                    </div>
                  </Link>
                  {projectDropdownItems.map(proj => (
                    <Link key={proj.name} href={proj.path}>
                      <div className="block px-4 py-2 text-[hsl(var(--foreground))] hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--primary-foreground))] cursor-pointer">
                        {proj.name}
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </nav>

        {/* Right Controls */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-4">
            <Link href="https://github.com/QHarshil" target="_blank" rel="noopener noreferrer">
              <Github size={22} className="hover:text-[hsl(var(--primary))] transition-colors" />
            </Link>
            <Link href="https://www.linkedin.com/in/harshil-c" target="_blank" rel="noopener noreferrer">
              <Linkedin size={22} className="hover:text-[hsl(var(--primary))] transition-colors" />
            </Link>
            <Link href="mailto:Harshil_c@hotmail.com">
              <Globe size={22} className="hover:text-[hsl(var(--primary))] transition-colors" />
            </Link>
          </div>
          <motion.button onClick={toggleTheme} whileHover={{ scale: 1.1 }} className="p-2 rounded-full border border-[hsl(var(--ring))] hover:bg-[hsl(var(--accent))] transition-colors" aria-label="Toggle Theme">
            {theme === "light" ? "🌙" : "☀️"}
          </motion.button>
          <div className="md:hidden">
            <button onClick={handleMobileMenuToggle} className="focus:outline-none" aria-label="Toggle Menu">
              {isMobileMenuOpen ? <HiOutlineX className="h-8 w-8" /> : <HiOutlineMenu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            className="md:hidden bg-[hsl(var(--background))] border-t border-[hsl(var(--border))] p-4"
          >
            <ul className="flex flex-col space-y-4">
              {navItems.map(item => (
                <li key={item.name} className="text-center text-lg font-medium hover:text-[hsl(var(--primary))] transition-colors">
                  <Link href={item.path}>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
              <li className="relative text-center">
                <button onClick={handleProjectsToggle} className="text-lg font-medium hover:text-[hsl(var(--primary))] transition-colors">
                  Projects
                </button>
                <AnimatePresence>
                  {isProjectsDropdownOpen && (
                    <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }} className="mt-2 bg-[hsl(var(--background))] rounded-md shadow-lg py-2 border border-[hsl(var(--border))]">
                      <Link href="/projects">
                        <div className="block px-4 py-2 hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--primary-foreground))] cursor-pointer">
                          All Projects
                        </div>
                      </Link>
                      {projectDropdownItems.map(proj => (
                        <Link key={proj.name} href={proj.path}>
                          <div className="block px-4 py-2 hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--primary-foreground))] cursor-pointer">
                            {proj.name}
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
