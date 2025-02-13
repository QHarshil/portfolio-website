"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Globe,
  Code2,
  Briefcase,
  GraduationCap,
  Cog,
  Book,
  Plane,
  Music,
  Dumbbell as Boxing,
  ChefHat,
  Icon,
} from "lucide-react";
import { tennisRacket} from '@lucide/lab';
import { Badge } from "@/components/ui/badge";


const Tennis = (props: { size?: number; className?: string }) => (
  <Icon iconNode={tennisRacket} {...props} />
);

// API interfaces
interface ContactInfo {
  name: string;
  email: string;
  linkedin: string;
  phone: string;
  github: string;
}

interface CVData {
  summary: string;
  professionalExperience: {
    role: string;
    company: string;
    location: string;
    dates: string;
    responsibilities: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    dates: string;
    coursework?: string[];
  }[];
  skills: {
    languages: string[];
    cloudPlatforms: string[];
    frameworks: string[];
    aiMl: string[];
    dataEngineering: string[];
  };
}

interface Project {
  id: string;
  title: string;
  summary: string;
  technologies?: string[];
  link?: string;
}

// Alternating color classes for tech badges (rotating every 4 badges)
const alternatingTechColors = [
  "bg-[hsl(350,70%,80%)] text-[hsl(350,70%,20%)]", // Soft pink
  "bg-[hsl(45,80%,70%)] text-[hsl(45,80%,20%)]",   // Warm gold
  "bg-[hsl(204,100%,70%)] text-[hsl(204,100%,20%)]",// Light blue
  "bg-[hsl(5,80%,80%)] text-[hsl(5,80%,20%)]",      // Soft rose
];

export default function CVPage() {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [cv, setCv] = useState<CVData | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [contactRes, cvRes, projectsRes] = await Promise.all([
          fetch("/api/contactinfo"),
          fetch("/api/cv"),
          fetch("/api/projects"),
        ]);

        if (!contactRes.ok || !cvRes.ok || !projectsRes.ok) {
          throw new Error("Error fetching data from API");
        }

        const contactData: ContactInfo = await contactRes.json();
        const cvData: CVData = await cvRes.json();
        const projectsData: Project[] = await projectsRes.json();

        setContactInfo(contactData);
        setCv(cvData);
        // Limit featured projects to 6 on the CV page
        setProjects(projectsData.slice(0, 6));
      } catch (err) {
        console.error(err);
        setError("Failed to load CV data. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-[hsl(var(--foreground))]">Loading CV...</p>
      </div>
    );
  }

  if (error || !contactInfo || !cv) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-500">{error || "Data not available"}</p>
      </div>
    );
  }

  // Split full name for styling
  const [firstName, ...rest] = contactInfo.name.split(" ");
  const lastName = rest.join(" ");

  // Define hobbies for the Hobbies section
  const hobbies = [
    { name: "Tennis", icon: Tennis },
    { name: "Reading", icon: Book },
    { name: "Travelling", icon: Plane },
    { name: "Music", icon: Music },
    { name: "Boxing", icon: Boxing },
    { name: "Cooking", icon: ChefHat },
  ];

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))] selection:bg-[hsl(var(--primary))] selection:text-[hsl(var(--primary-foreground))]">
      {/* Fixed Header */}
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Top Profile Section */}
        <header className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div className="flex items-center gap-6">
            <div className="relative w-24 h-24 md:w-32 md:h-32">
              <div className="absolute inset-0 bg-[hsl(var(--primary))] rounded-full opacity-50 blur-md"></div>
              <Image
                src="/profile_pic.jpg"
                alt={contactInfo.name}
                fill
                className="rounded-full object-cover relative z-10"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-2">
                <span className="text-[hsl(var(--primary))] transition-colors duration-300">
                  {firstName}
                </span>{" "}
                <span className="text-[hsl(var(--foreground))] transition-colors duration-300">
                  {lastName}
                </span>
              </h1>
              <h2 className="text-xl text-[hsl(var(--muted-foreground))]">Full-Stack Developer</h2>
            </div>
          </div>
          <div className="text-right mt-6 md:mt-0">
            <div className="flex flex-col items-end space-y-2">
              <a
                href={`tel:${contactInfo.phone}`}
                className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors duration-300"
              >
                {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors duration-300"
              >
                {contactInfo.email}
              </a>
              <span className="text-[hsl(var(--muted-foreground))]">Vancouver, BC, Canada</span>
              <div className="flex gap-4 mt-2">
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-transform hover:scale-110 duration-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-transform hover:scale-110 duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-transform hover:scale-110 duration-300"
                >
                  <Globe size={20} />
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Professional Summary Section */}
        <section className="mb-12">
          <h2 className="flex items-center text-3xl font-bold mb-4 text-[hsl(var(--primary))]">
            <Code2 className="mr-2" size={24} />
            Professional Summary
          </h2>
          <p className="text-lg leading-relaxed text-[hsl(var(--foreground))]">{cv.summary}</p>
        </section>

        {/* Work Experience Section */}
        <section className="mb-12">
          <h2 className="flex items-center text-3xl font-bold mb-4 text-[hsl(var(--primary))]">
            <Briefcase className="mr-2" size={24} />
            Work Experience
          </h2>
          <div className="space-y-8">
            {cv.professionalExperience.map((job, idx) => (
              <div
                key={idx}
                className="backdrop-blur-sm bg-[hsl(var(--card))] rounded-lg p-6 shadow-md hover:bg-[hsl(var(--card))] transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-[hsl(var(--primary))]">{job.role}</h3>
                <p className="mb-2 text-[hsl(var(--muted-foreground))]">
                  {job.company} | {job.location} | {job.dates}
                </p>
                <ul className="list-disc list-inside text-[hsl(var(--muted-foreground))] space-y-1">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="flex items-center text-3xl font-bold mb-4 text-[hsl(var(--primary))]">
            <GraduationCap className="mr-2" size={24} />
            Education
          </h2>
          <div className="space-y-8">
            {cv.education.map((edu, idx) => (
              <div
                key={idx}
                className="backdrop-blur-sm bg-[hsl(var(--card))] rounded-lg p-6 shadow-md hover:bg-[hsl(var(--card))] transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-[hsl(var(--primary))]">{edu.degree}</h3>
                <p className="mb-2 text-[hsl(var(--muted-foreground))]">
                  {edu.institution} | {edu.dates}
                </p>
                {edu.coursework && (
                  <>
                    <p className="mt-2 text-[hsl(var(--muted-foreground))] font-semibold">
                      Relevant Coursework:
                    </p>
                    <p className="text-[hsl(var(--muted-foreground))]">{edu.coursework.join(", ")}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="flex items-center text-3xl font-bold mb-4 text-[hsl(var(--primary))]">
            <Cog className="mr-2" size={24} />
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            {Object.entries(cv.skills).map(([category, skills], idx) => (
              <div
                key={idx}
                className="backdrop-blur-sm bg-[hsl(var(--card))] rounded-lg p-4 shadow-md hover:bg-[hsl(var(--card))] transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-[hsl(var(--primary))] capitalize mb-2">
                  {category}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {Array.isArray(skills) &&
                    skills.map((skill, i) => (
                      <Badge key={i} index={i}>
                        {skill}
                      </Badge>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="mb-12">
          <h2 className="flex items-center text-3xl font-bold mb-4 text-[hsl(var(--primary))]">
            <Code2 className="mr-2" size={24} />
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={project.link ? project.link : `/projects/${project.id}`}
                passHref
              >
                <div className="cursor-pointer backdrop-blur-sm bg-[hsl(var(--card))] rounded-lg p-6 shadow-md hover:bg-[hsl(var(--card))] transition-all duration-300">
                  <h3 className="text-xl font-bold text-[hsl(var(--primary))] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[hsl(var(--foreground))] mb-4 line-clamp-4">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.map((tech, i) => {
                      const altColor = alternatingTechColors[i % alternatingTechColors.length];
                      return (
                        <Badge
                          key={i}
                          className={`px-3 py-1 text-xs rounded-full ${altColor}`}
                        >
                          {tech}
                        </Badge>
                      );
                    })}
                  </div>
                  <div className="pt-4">
                    <div className="w-full text-center bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] px-4 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-colors duration-300">
                      View Project →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Hobbies Section */}
        <section className="mb-12">
          <h2 className="flex items-center text-3xl font-bold mb-6 text-[hsl(var(--primary))] relative inline-block">
            <Tennis className="mr-2" size={24} />
            HOBBIES
            <div className="absolute bottom-0 left-0 w-full h-px bg-[hsl(var(--primary))]/20" />
          </h2>
          <div className="flex flex-wrap gap-4">
            {hobbies.map((hobby) => (
              <div
                key={hobby.name}
                className="bg-[hsl(var(--card))] rounded-full px-4 py-2 text-sm text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--foreground))] transition-all duration-300 flex items-center gap-2"
              >
                <hobby.icon size={16} />
                {hobby.name}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
