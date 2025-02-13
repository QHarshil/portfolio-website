"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Loading Component
 * =================
 *
 * This component displays a fast, elegant loader while the application or route is loading.
 * It leverages CSS custom properties to match your overall theme and uses Framer Motion for
 * a smooth, quick fade-in and rotating spinner animation.
 *
 * Author: Harshil Chudasama
 */
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[hsl(var(--background))]">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.4 } }}
      >
        {/* Fast rotating spinner */}
        <motion.div
          className="w-12 h-12 border-4 border-t-4 border-[hsl(var(--primary))] rounded-full mb-4"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        />
        {/* Loading text */}
        <motion.h1
          className="text-xl font-bold text-[hsl(var(--foreground))]"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
        >
          Loading...
        </motion.h1>
      </motion.div>
    </div>
  );
}
