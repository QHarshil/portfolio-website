// src/app/contacts/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <Header />
      <div className="flex items-center justify-center h-[calc(100vh-80px)]">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Contacts
          </h1>
          <p className="text-xl">
            This page is coming soon. Stay tuned for updates!
            Reach out on LinkedIn or Email in the meantime.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
