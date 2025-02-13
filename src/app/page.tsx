"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import Projects from "../components/Projects";
import CTASection from "../components/CTASection";

// TypeScript interfaces for API responses.
interface SummaryResponse {
  summary: string;
}

interface ContactInfo {
  name: string;
  email: string;
  linkedin: string;
  phone: string;
  github: string;
  title?: string;
}

interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  technologies: string[];
  link: string;
}

/**
 * HomePage Component
 * ===================
 * This component assembles the entire Home Page using modular sections:
 * - A fixed Header at the top.
 * - A HeroSection that displays your dynamic summary and contact info along with a parallax effect.
 * - A SkillsSection that displays your key skills.
 * - A Projects section that renders dynamic flashcards for your featured projects.
 * - A CTASection prompting further exploration.
 *
 * Data is fetched from API endpoints (/api/summary, /api/contactinfo, /api/projects).
 */
export default function HomePage() {
  // State for dynamic data fetched from API endpoints.
  const [summary, setSummary] = useState<string>("");
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [summaryRes, contactRes, projectsRes] = await Promise.all([
          fetch("/api/summary"),
          fetch("/api/contactinfo"),
          fetch("/api/projects"),
        ]);

        // Check if responses are OK.
        if (!summaryRes.ok || !contactRes.ok || !projectsRes.ok) {
          throw new Error("Failed to fetch API data");
        }

        const summaryData: SummaryResponse = await summaryRes.json();
        const contactData: ContactInfo = await contactRes.json();
        const projectsData: Project[] = await projectsRes.json();

        setSummary(summaryData.summary);
        setContactInfo(contactData);
        setProjects(projectsData);
      } catch (err) {
        console.error("Error fetching home page data:", err);
        setError("Failed to load home page data. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-[var(--color-foreground)]">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-red-500">
        {error}
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Fixed header renders at the top */}
      <Header />
      {/* Hero Section: dynamic summary & contact info with parallax effect */}
      <HeroSection summary={summary} contact={contactInfo!} />
      {/* Skills Section: key skills are passed as props */}
      <SkillsSection
        skills={[
          "Scalable Systems",
          "High-Performance Pipelines",
          "Backend & Frontend",
          "Cloud Infrastructure",
          "DevOps & CI/CD",
          "AI/ML & Computer Vision",
          "Cross-Functional Leadership",
          "Product Management",
        ]}
      />
      {/* Projects Section: dynamic project flashcards */}
      <Projects projects={projects} />
      {/* CTA Section: calls the user to explore more */}
      <CTASection />
    </main>
  );
}
