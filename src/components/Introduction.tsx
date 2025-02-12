"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

// Define TypeScript interfaces for the API responses.
interface SummaryResponse {
  summary: string;
}

interface ContactInfo {
  name: string;
  email: string;
  linkedin: string;
  phone: string;
  github: string;
  // Optionally, you can add a title field if your API provides one.
  title?: string;
}

export default function Introduction() {
  // Local state for summary and contact information.
  const [summary, setSummary] = useState<string>("");
  const [contact, setContact] = useState<ContactInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch summary and contact info from APIs when the component mounts.
  useEffect(() => {
    async function fetchData() {
      try {
        const [summaryRes, contactRes] = await Promise.all([
          fetch("/api/summary"),
          fetch("/api/contactinfo"),
        ]);

        if (!summaryRes.ok || !contactRes.ok) {
          throw new Error("Failed to fetch API data");
        }

        const summaryData: SummaryResponse = await summaryRes.json();
        const contactData: ContactInfo = await contactRes.json();

        setSummary(summaryData.summary);
        setContact(contactData);
      } catch (err) {
        console.error("Error fetching introduction data:", err);
        setError("Failed to load introduction data. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Use Framer Motion hooks for a dynamic parallax effect on scroll.
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, -150]);

  // Show a loading indicator while data is being fetched.
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-[var(--color-foreground)]">
        Loading...
      </div>
    );
  }

  // In case of an error, display a message.
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-red-500">
        {error}
      </div>
    );
  }

  // Use fetched contact name and title; if title is missing, fallback to a default.
  const displayName = contact?.name || "Your Name";
  const displayTitle = contact?.title || "Full-Stack Developer";

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mb-16 flex flex-col items-center text-center relative overflow-hidden"
    >
      {/* Parallax effect container for the profile image */}
      <motion.div style={{ y: parallaxY }} className="relative mb-8">
        {/* A subtle radial gradient overlay for a futuristic feel */}
        <div className="absolute inset-0 bg-gradient-radial from-[var(--color-primary)] to-transparent opacity-30 rounded-full blur-2xl"></div>
        <Image
          src="/profile_pic.jpg"  // Use your actual profile image here
          alt={displayName}
          width={200}
          height={200}
          className="rounded-full relative z-10 border-4 border-[var(--color-secondary)]"
        />
      </motion.div>
      {/* Display your name and title fetched from API */}
      <h1 className="text-5xl font-bold mb-2 text-[var(--color-primary)]">
        {displayName}
      </h1>
      <h2 className="text-2xl text-[var(--color-foreground)] mb-4">
        {displayTitle}
      </h2>
      {/* Display the fetched summary */}
      <p className="max-w-2xl text-[var(--color-foreground)] mb-8 px-4">
        {summary}
      </p>
      {/* Call-to-action buttons */}
      <div className="flex space-x-4">
        <Link
          href="/projects"
          className="bg-[var(--color-primary)] text-[var(--color-foreground)] px-6 py-2 rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className="bg-[var(--color-secondary)] text-[var(--color-foreground)] px-6 py-2 rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105"
        >
          Contact Me
        </Link>
      </div>
    </motion.section>
  );
}
