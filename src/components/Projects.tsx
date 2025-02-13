// src/components/Projects.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export interface Project {
  id: string;
  title: string;
  summary: string;         // Short summary (e.g., 50-100 words)
  technologies?: string[]; // Array of technology names (optional)
  link?: string;           // External URL for project details (optional)
}

interface ProjectsProps {
  projects: Project[];
}

// Animation variants for the flashcards
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.1 },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

// Array of Tailwind classes for alternating tech badge colors (rotates every 4 badges)
const alternatingTechColors = [
  "bg-[hsl(350,70%,80%)] text-[hsl(350,70%,20%)]",  // Soft pink
  "bg-[hsl(45,80%,70%)] text-[hsl(45,80%,20%)]",    // Warm gold
  "bg-[hsl(204,100%,70%)] text-[hsl(204,100%,20%)]", // Light blue
  "bg-[hsl(5,80%,80%)] text-[hsl(5,80%,20%)]",       // Soft rose
];

export default function Projects({ projects }: ProjectsProps) {
  // Limit featured projects to 6 if needed
  const featuredProjects = projects.slice(0, 6);

  return (
    <section id="projects" className="py-20 bg-[hsl(var(--background))]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))]">
          My Projects
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {featuredProjects.map((project, index) => {
            // Use the project's external link if provided, otherwise navigate to the dynamic route.
            const href = project.link ? project.link : `/projects/${project.id}`;
            return (
              <Link key={project.id} href={href} passHref>
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
                              const altColor =
                                alternatingTechColors[
                                  techIndex % alternatingTechColors.length
                                ];
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
                      <div className="w-full text-center bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] px-4 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-colors duration-300">
                        View Project →
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
        <div className="text-center mt-8">
          <Link
            href="/projects"
            className="inline-block bg-[hsl(var(--primary))] text-white px-6 py-2 rounded-full hover:bg-opacity-80 transition-colors duration-300"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
