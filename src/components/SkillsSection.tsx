"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * SkillsSectionProps Interface
 * -----------------------------
 * Represents the props for the SkillsSection component.
 * @property skills - An array of strings representing key skills.
 */
interface SkillsSectionProps {
  skills: string[];
}

/**
 * fadeInVariants - A simple fade-in animation variant for elements.
 */
const fadeInVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/**
 * SkillsSection Component
 * -------------------------
 * Displays a list of skills in a responsive grid layout.
 * Each skill is rendered within a card that fades into view with a staggered animation.
 * This component uses CSS custom properties (via hsl(var(--token))) so that its styling
 * automatically adapts to theme changes.
 *
 * @param skills - An array of strings representing key skills.
 * @returns A React component.
 */
const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <section className="py-16 bg-[hsl(var(--panel))]">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-[hsl(var(--foreground))]"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        >
          Key Skills & Expertise
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="p-6 bg-[hsl(var(--card))] rounded-lg shadow-xl"
              variants={fadeInVariants}
            >
              <p className="text-xl font-medium text-[hsl(var(--card-foreground))]">
                {skill}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
