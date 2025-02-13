// src/app/projects/[id]/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "@/components/Header";

interface ProjectDetail {
  id: string;
  title: string;
  summary: string;
  fullDescription: string;
  techStack: string[];
  codeSnippets?: {
    caption: string;
    code: string;
  }[];
}

export default function ProjectDetailPage() {
  // Get the dynamic route param using Next.js hook
  const { id } = useParams() as { id: string };
  const [project, setProject] = useState<ProjectDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProject() {
      try {
        const response = await fetch(`/api/projects/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: ProjectDetail = await response.json();
        setProject(data);
      } catch (err) {
        console.error("Error fetching project details:", err);
        setError("Failed to load project details. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[hsl(var(--background))] text-[hsl(var(--foreground))] p-6">
        <p className="text-xl">Loading project details...</p>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[hsl(var(--background))] text-red-500 p-6">
        <p className="text-xl">{error || "Project details not available."}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))] p-6">
      <Header />
      <div className="container mx-auto text-center py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
        <p className="text-lg mb-6">
          The details for the project{" "}
          <span className="font-semibold">{project.title}</span> are coming soon.
          Please check back later for updates!
        </p>
        <p className="text-sm">
          Meanwhile, you can browse all of my projects{" "}
          <Link href="/projects">
            <span className="underline text-[hsl(var(--primary))] hover:text-[hsl(var(--accent))] transition-colors">
              here
            </span>
          </Link>.
        </p>
      </div>
    </div>
  );
}
