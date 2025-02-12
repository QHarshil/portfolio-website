"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMail, FiGithub, FiLinkedin, FiPhone } from "react-icons/fi";

export interface HeroSectionProps {
  summary: string;
  contact: {
    name: string;
    title: string;
  };
}

/**
 * Hero Component
 * --------------
 * A dynamic, futuristic hero section that displays your name, title, a detailed
 * professional summary, a row of contact icons, and an interactive "Get in Touch" button.
 * The section uses a parallax effect on the heading and shows a high-quality profile image.
 */
export default function Hero({ summary, contact }: HeroSectionProps) {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 300], [0, -150]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const displayName = contact?.name || "Your Name";
  const displayTitle = contact?.title || "Full-Stack Developer | Ex-Product Manager";

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center bg-[hsl(var(--background))] px-4 pt-20 overflow-hidden"
    >
      <div className="container mx-auto px-6 py-24 flex flex-col-reverse md:flex-row items-center">
        {/* Text Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            style={{ y: parallaxY }}
            className="text-4xl md:text-6xl font-bold mb-4 tracking-wider text-[hsl(var(--foreground))]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            Hi, I'm{" "}
            <span className="text-[hsl(var(--primary))]">{displayName}</span>
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-3xl font-semibold mb-6 uppercase tracking-wide text-[hsl(var(--foreground))]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {displayTitle}
          </motion.h2>
          <motion.p
            className="max-w-xl text-xl md:text-2xl mb-8 text-[hsl(var(--foreground))] leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {summary}
          </motion.p>

          {/* Contact Icons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
            <Link
              href="mailto:Harshil_c@hotmail.com"
              className="flex items-center text-2xl text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
            >
              <FiMail />
            </Link>
            <Link
              href="https://github.com/QHarshil"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-2xl text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
            >
              <FiGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/harshil-c"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-2xl text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
            >
              <FiLinkedin />
            </Link>
            <Link
              href="tel:6478985470"
              className="flex items-center text-2xl text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
            >
              <FiPhone />
            </Link>
          </div>

          {/* Wrapped Get in Touch Button */}
          <div className="inline-block rounded-full bg-[hsl(var(--primary))] px-8 py-3 shadow-lg border-2 border-[hsl(var(--accent))]">
            <motion.a
              href="#contact"
              className="block text-lg font-semibold text-[hsl(var(--foreground))] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
        {/* Profile Image */}
        <motion.div
          className="md:w-1/2 mb-12 md:mb-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Image
            src="/profile_pic.jpg" // Replace with your actual profile image path
            alt={displayName}
            width={400}
            height={400}
            className="rounded-full shadow-2xl"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
