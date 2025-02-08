// src/app/page.tsx
"use client";

/**
 * Home Page
 * =========
 *
 * This file defines the Home Page of the portfolio application using the Next.js App Router.
 * It demonstrates advanced frontend skills with a modular design, responsive layouts, and
 * polished animations using Framer Motion.
 *
 * The page is divided into three main sections:
 *  1. HeroSection: Introduces Harshil Chudasama, displays a professional headline (subheader),
 *     and highlights key expertise in a refined summary.
 *  2. SkillsSection: Displays key skill areas including scalable systems, cloud automation,
 *     AI/ML, computer vision, and both frontend & backend development.
 *  3. CTASection: Provides clear calls-to-action to explore projects and get in touch.
 *
 * The implementation uses Tailwind CSS for styling and Framer Motion for smooth, modern animations.
 *
 * Author: Harshil Chudasama (adapted by [Your Name])
 * Date: [Today's Date]
 */

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

/**
 * Animation Variants for Consistent Motion Effects
 */
const heroVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.3, duration: 0.8 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

/**
 * HeroSection Component
 * -----------------------
 * Renders the main hero section with:
 * - A large, bold heading displaying the name.
 * - A subheading (professional headline) styled similarly to LinkedIn.
 * - A refined, multi-line summary that clearly outlines expertise.
 * - Animated call-to-action buttons.
 */
const HeroSection: React.FC = () => {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen 
                 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 
                 dark:from-indigo-800 dark:via-purple-800 dark:to-pink-800 px-4"
    >
      {/* Animated Main Heading */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-2 text-center"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        Harshil Chudasama
      </motion.h1>

      {/* Animated Subheading (Professional Headline) */}
      <motion.h2
        className="text-xl md:text-2xl italic text-gray-700 dark:text-gray-300 mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.8 } }}
      >
        Software Engineer | AI/ML, Cloud & Data Specialist
      </motion.h2>

      {/* Animated Summary */}
      <motion.div
        className="text-center max-w-2xl leading-relaxed mb-8"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <p>Experienced Software Engineer with a Master’s in Computer Science.</p>
        <p className="mt-2">
          Expert in designing scalable, fault-tolerant systems and high-performance data pipelines.
        </p>
        <p className="mt-2">
          Proven ability to build robust backend systems, engaging frontend interfaces, and cloud-native applications.
        </p>
        <p className="mt-2">
          Passionate about leveraging AI/ML and computer vision to drive innovative solutions.
        </p>
      </motion.div>

      {/* Animated Call-to-Action Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-6"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <Link
          href="/projects"
          className="px-8 py-3 bg-primary text-white rounded-lg shadow hover:bg-primaryLight transition-colors"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary transition-colors"
        >
          Contact Me
        </Link>
      </motion.div>
    </section>
  );
};

/**
 * SkillsSection Component
 * -------------------------
 * Highlights key skills and areas of expertise through a responsive grid of cards.
 * Each card represents a core competency.
 */
const SkillsSection: React.FC = () => {
  const skills = [
    "Scalable & Fault-Tolerant Systems",
    "High-Performance Data Pipelines",
    "Backend Development",
    "Frontend Development",
    "Cloud Automation & Infrastructure",
    "Kubernetes & Docker",
    "DevOps & CI/CD",
    "AI/ML & Computer Vision",
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          Key Skills & Expertise
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md"
              variants={fadeInVariants}
            >
              <p className="text-xl font-medium text-gray-800 dark:text-gray-200">
                {skill}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/**
 * CTASection Component
 * ----------------------
 * Provides a call-to-action for the visitor to explore the portfolio further.
 * Includes animated headings and buttons to guide users to the Projects and Contact pages.
 */
const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-200 to-purple-200 dark:from-indigo-700 dark:to-purple-700">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Explore My Work
        </motion.h2>
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Link
            href="/projects"
            className="px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-primaryLight transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary transition-colors"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

/**
 * HomePage Component
 * -------------------
 * The main export for the Home Page, assembling all sections together.
 * Structured to be easily extended with additional components such as testimonials or featured projects.
 */
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SkillsSection />
      <CTASection />
    </main>
  );
}
