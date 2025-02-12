"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

/**
 * CTASection Component
 * ----------------------
 * A state‑of‑the‑art call-to-action section encouraging visitors to explore your work.
 * It features:
 *  - A kinetic fade‑in header.
 *  - Two interactive buttons ("View Projects" and "Full CV") with smooth scaling effects.
 *  - Each button uses an elongated oval border (increased horizontal padding and a 4px border).
 *  - A subtle footer-like gradient highlight that separates the section from the rest of the page.
 *  - A background gradient that differentiates this section.
 */
const CTASection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-gradient-to-r from-[hsl(var(--panel))] to-[hsl(var(--background))]"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-[hsl(var(--foreground))]"
        >
          Explore More
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <Link href="/projects" className="inline-block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[hsl(var(--primary))] text-[hsl(var(--foreground))] px-12 py-3 rounded-full text-lg font-semibold transition-transform duration-300 transform hover:bg-opacity-90 border-4 border-[hsl(var(--accent))]"
            >
              View Projects
            </motion.div>
          </Link>
          <Link href="/cv" className="inline-block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[hsl(var(--secondary))] text-[hsl(var(--foreground))] px-12 py-3 rounded-full text-lg font-semibold transition-transform duration-300 transform hover:bg-opacity-90 border-4 border-[hsl(var(--accent))]"
            >
              Full CV
            </motion.div>
          </Link>
        </motion.div>
      </div>
      {/* Footer-like gradient highlight */}
      <div className="mt-10">
        <div className="container mx-auto px-4">
          <div className="w-full h-1 bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--secondary))] rounded-full"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default CTASection;
