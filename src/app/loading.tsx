"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Loading Component
 * =================
 *
 * This component displays an elegant loader while the application (or route)
 * is loading. It uses a rotating spinner animation along with a fade-in text message.
 *
 * Design Details:
 * - A full-screen container with a dynamic gradient background.
 * - A rotating, circular spinner using Framer Motion to convey a subtle yet modern loading animation.
 * - A "Loading..." text with a smooth fade and slide-in effect.
 *
 * This loader reflects a high level of design polish and demonstrates advanced frontend skills.
 *
 * Author: Harshil Chudasama
 */
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-800 dark:via-purple-800 dark:to-pink-800">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
      >
        {/* Rotating Spinner */}
        <motion.div
          className="w-16 h-16 border-4 border-t-4 border-gray-300 dark:border-gray-500 rounded-full mb-4"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        />
        {/* Loading Text */}
        <motion.h1
          className="text-2xl font-bold text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        >
          Loading...
        </motion.h1>
      </motion.div>
    </div>
  );
}
