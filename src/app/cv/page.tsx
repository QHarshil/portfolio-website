// src/app/cv/page.tsx
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
  ExternalLink,
} from "lucide-react";

// Define TypeScript interfaces for the API data
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
        // Limit featured projects to 6 for the CV page
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
        <p className="text-xl text-gray-400">Loading CV...</p>
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

  // Split the name for styling
  const [firstName, lastName] = contactInfo.name.split(" ");

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-gray-100 selection:bg-[#FFD700] selection:text-black">
      {/* Fixed header */}
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Top Header Section: Profile, Contact, and Name */}
        <header className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div className="flex items-center gap-6">
            <div className="relative w-24 h-24 md:w-32 md:h-32">
              <div className="absolute inset-0 bg-[#FFD700] rounded-full opacity-50 blur-md"></div>
              <Image
                src="https://yourcdn.com/your_profile_pic.jpg" // Replace with your actual URL
                alt={contactInfo.name}
                width={128}
                height={128}
                className="rounded-full object-cover relative z-10"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-2">
                <span className="text-[#FFD700] transition-colors duration-300">
                  {firstName}
                </span>{" "}
                <span className="text-white transition-colors duration-300">
                  {lastName}
                </span>
              </h1>
              <h2 className="text-xl text-gray-400">Full-Stack Developer</h2>
            </div>
          </div>
          <div className="text-right mt-6 md:mt-0">
            <div className="flex flex-col items-end space-y-2">
              <a
                href={`tel:${contactInfo.phone}`}
                className="text-gray-300 hover:text-[#FFD700] transition-colors duration-300"
              >
                {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-gray-300 hover:text-[#FFD700] transition-colors duration-300"
              >
                {contactInfo.email}
              </a>
              <span className="text-gray-300">Vancouver, BC, Canada</span>
              <div className="flex gap-4 mt-2">
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#FFD700] transition-transform hover:scale-110 duration-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#FFD700] transition-transform hover:scale-110 duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#FFD700] transition-transform hover:scale-110 duration-300"
                >
                  <Globe size={20} />
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Summary Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#FFD700]">Professional Summary</h2>
          <p className="text-gray-200 text-lg leading-relaxed">{cv.summary}</p>
        </section>

        {/* Work Experience Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#FFD700]">Work Experience</h2>
          <div className="space-y-8">
            {cv.professionalExperience.map((job, idx) => (
              <div
                key={idx}
                className="backdrop-blur-sm bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-[#FFD700]">{job.role}</h3>
                <p className="text-gray-300 mb-2">
                  {job.company} | {job.location} | {job.dates}
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
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
          <h2 className="text-3xl font-bold mb-4 text-[#FFD700]">Education</h2>
          <div className="space-y-8">
            {cv.education.map((edu, idx) => (
              <div
                key={idx}
                className="backdrop-blur-sm bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-[#FFD700]">{edu.degree}</h3>
                <p className="text-gray-300 mb-2">
                  {edu.institution} | {edu.dates}
                </p>
                {edu.courses && (
                  <>
                    <p className="text-gray-400 font-semibold mt-2">Relevant Coursework:</p>
                    <p className="text-gray-400">{edu.courses.join(", ")}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#FFD700]">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(cv.skills).map(([category, skills], idx) => (
              <div
                key={idx}
                className="backdrop-blur-sm bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-[#FFD700] capitalize mb-2">
                  {category}
                </h3>
                <ul className="text-gray-300 text-sm">
                  {Array.isArray(skills)
                    ? skills.map((skill, i) => (
                        <li key={i} className="mb-1 flex items-center">
                          <div className="w-1 h-1 bg-[#FFD700] rounded-full mr-2"></div>
                          {skill}
                        </li>
                      ))
                    : null}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#FFD700]">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="backdrop-blur-sm bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-[#FFD700] mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.summary}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack?.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#FFD700]/20 text-[#FFD700] text-xs rounded-full px-2 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link || "#"}
                  className="text-[#FFD700] hover:text-white transition-colors duration-300 flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Download CV Button */}
        <section className="text-center mb-12">
          <Link
            href="/api/cv/download"
            className="inline-block bg-[#FFD700] text-black px-6 py-3 rounded-full hover:bg-white transition-colors duration-300"
          >
            Download CV
          </Link>
        </section>
      </div>
    </div>
  );
}
