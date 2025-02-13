"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Code2, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";

// Define a TypeScript interface for a Project.
export interface Project {
  id: string;
  title: string;
  summary: string;
  technologies?: string[];
  link?: string;
}

/* =============================================================================
   ANIMATION VARIANTS
============================================================================= */
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.1 },
  }),
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, delay: 0.3 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

/* =============================================================================
   ALTERNATING TECHNOLOGY COLORS
============================================================================= */
/**
 * An array of Tailwind classes for alternating tech badge colors.
 * Rotates every four badges.
 */
const alternatingTechColors = [
  "bg-[hsl(350,70%,80%)] text-[hsl(350,70%,20%)]",  // Soft pink
  "bg-[hsl(45,80%,70%)] text-[hsl(45,80%,20%)]",    // Warm gold
  "bg-[hsl(204,100%,70%)] text-[hsl(204,100%,20%)]", // Light blue
  "bg-[hsl(5,80%,80%)] text-[hsl(5,80%,20%)]",       // Soft rose
];

/* =============================================================================
   PROJECTS PAGE COMPONENT
============================================================================= */
/**
 * ProjectsPage Component
 * ------------------------
 * Fetches project data from the API at /api/projects and displays each project
 * as a clickable flashcard. Each card uses the global theme tokens and, when clicked,
 * links to the full project page based on the project ID.
 */
export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("/api/projects");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: Project[] = await response.json();
        setProjects(data);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Failed to load projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-[hsl(var(--foreground))]">Loading projects...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-500">{error}</p>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))] selection:bg-[hsl(var(--primary))] selection:text-[hsl(var(--primary-foreground))]">
      {/* Fixed Header */}
      <Header />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">
          <span className="text-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] transition-colors duration-300">My</span>{" "}
          <span className="text-[hsl(var(--accent))] hover:text-[hsl(var(--accent))] transition-colors duration-300">Projects</span>
        </h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {projects.map((project, index) => (
            <Link key={project.id} href={project.link ? project.link : `/projects/${project.id}`} passHref>
              <motion.div
                custom={index}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                className="cursor-pointer"
              >
                <div className="aspect-square min-h-[400px] bg-[hsl(var(--card))] rounded-lg overflow-hidden shadow-2xl border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))] transition-all duration-300 transform hover:scale-105 flex flex-col justify-between">
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[hsl(var(--primary))]">
                        {project.title}
                      </h3>
                      <p className="text-xs text-[hsl(var(--foreground))] mb-4 line-clamp-4">
                        {project.summary}
                      </p>
                      <div className="mb-4">
                        <h4 className="text-xs font-semibold mb-2 text-[hsl(var(--primary))]">
                          Tech Stack:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {(project.technologies || []).map((tech, techIndex) => {
                            const altColor = alternatingTechColors[techIndex % alternatingTechColors.length];
                            return (
                              <Badge
                                key={techIndex}
                                className={`px-3 py-1 text-xs rounded-full ${altColor}`}
                              >
                                {tech}
                              </Badge>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="block bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] px-4 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-colors duration-300">
                      View Project →
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
