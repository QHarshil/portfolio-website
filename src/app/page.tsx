"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import { FiMail, FiLinkedin, FiPhone, FiGithub } from "react-icons/fi";
import Header from "../components/Header";

/* =============================================================================
   ANIMATION VARIANTS & EFFECTS
============================================================================= */
const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, delay: 0.3 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const glitchEffect = {
  hover: { scale: 1.03, transition: { duration: 0.3 } },
};

/* =============================================================================
   CONTACT ICONS COMPONENT
============================================================================= */
const ContactIcons: React.FC = () => (
  <div className="flex space-x-4 mt-4">
    <Link href="mailto:Harshil_c@hotmail.com">
      <span className="cursor-pointer text-[var(--color-foreground)] hover:text-[var(--color-secondary)] transition-colors">
        <FiMail size={24} />
      </span>
    </Link>
    <Link href="https://github.com/QHarshil" target="_blank" rel="noopener noreferrer">
      <span className="cursor-pointer text-[var(--color-foreground)] hover:text-[var(--color-secondary)] transition-colors">
        <FiGithub size={24} />
      </span>
    </Link>
    <Link href="https://www.linkedin.com/in/harshil-c" target="_blank" rel="noopener noreferrer">
      <span className="cursor-pointer text-[var(--color-foreground)] hover:text-[var(--color-secondary)] transition-colors">
        <FiLinkedin size={24} />
      </span>
    </Link>
    <Link href="tel:6478985470">
      <span className="cursor-pointer text-[var(--color-foreground)] hover:text-[var(--color-secondary)] transition-colors">
        <FiPhone size={24} />
      </span>
    </Link>
  </div>
);

/* =============================================================================
   TRANSPARENT BUTTON COMPONENT
============================================================================= */
interface TransparentButtonProps {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}
const TransparentButton: React.FC<TransparentButtonProps> = ({ href, children, primary = false }) => (
  <Link href={href}>
    <span
      className={`uppercase tracking-wider px-8 py-3 rounded-md transition-transform active:translate-y-1 border cursor-pointer ${
        primary
          ? "border-[var(--color-primary)] text-[var(--color-primary)] hover:scale-105 hover:shadow-xl"
          : "border-gray-600 text-gray-600 hover:scale-105 hover:shadow-xl"
      }`}
    >
      {children}
    </span>
  </Link>
);

/* =============================================================================
   PROFILE IMAGE COMPONENT
============================================================================= */
const ProfileImage: React.FC = () => (
  <motion.img
    src="/profile_pic.jpg"
    alt="Harshil Chudasama"
    className="w-full max-w-xs rounded-lg border border-gray-600 shadow-2xl"
    initial={{ opacity: 0, x: 50, scale: 0.9 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    whileHover={{ rotateY: 10, scale: 1.05 }}
    transition={{ duration: 0.8, delay: 0.5 }}
  />
);

/* =============================================================================
   HERO SECTION COMPONENT
============================================================================= */
/**
 * HeroSection Component
 * -----------------------
 * Introduces your portfolio with a dynamic, futuristic layout:
 * - Your name and title with parallax and hover effects.
 * - A refined 250-word summary highlighting your expertise.
 * - Contact icons and transparent CTA buttons.
 * - A responsive split layout with text on the left and your profile image on the right.
 */
const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 300], [0, -20]);
  if (!mounted) return <div className="min-h-screen" />;

  const summaryText = `I am a visionary full‑stack engineer with a passion for crafting exceptional digital experiences. My journey spans diverse industries where I have built robust and scalable systems while leading cross‑functional teams to success. I specialize in blending innovative technical solutions with strategic product management to deliver projects that not only meet but exceed expectations. Through rigorous data analysis, creative problem-solving, and a commitment to continuous improvement, I have developed intuitive interfaces, resilient back‑end architectures, and efficient workflows that empower businesses to thrive. My approach is rooted in a deep understanding of both technology and business, ensuring that every project is engineered for performance, reliability, and scalability. I excel in fast‑paced environments where collaboration and strategic thinking are essential. I constantly explore emerging technologies and methodologies to push the boundaries of innovation. Whether designing a high‑frequency trading system, a cloud‑native platform, or an augmented reality application, I strive to transform complex challenges into elegant, efficient solutions that drive measurable impact and lasting value.`;

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-[var(--color-background)] px-4 pt-20 overflow-hidden">
      <Header />
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between pt-24">
        {/* Left Column: Text Content */}
        <div className="w-full md:w-1/2 space-y-6 text-left">
          <motion.h1
            style={{ y: parallaxY }}
            className="uppercase tracking-wider text-4xl md:text-6xl font-extrabold text-[var(--color-foreground)]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={titleVariants}
            whileHover={glitchEffect.hover}
          >
            Harshil Chudasama
          </motion.h1>
          <motion.h2
            className="uppercase text-xl md:text-2xl font-semibold text-[var(--color-foreground)] opacity-80"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.8 } }}
            viewport={{ once: true }}
          >
            Full-Stack Engineer & Ex-Product Manager
          </motion.h2>
          <motion.p
            className="max-w-xl text-base md:text-lg text-[var(--color-foreground)] leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
          >
            {summaryText}
          </motion.p>
          <ContactIcons />
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <TransparentButton href="/projects" primary>
              View Projects
            </TransparentButton>
            <TransparentButton href="/cv">
              Full CV
            </TransparentButton>
          </div>
        </div>
        {/* Right Column: Profile Image */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex items-center justify-center">
          <ProfileImage />
        </div>
      </div>
    </section>
  );
};

/* =============================================================================
   SKILLS SECTION COMPONENT
============================================================================= */
/**
 * SkillsSection Component
 * -------------------------
 * Displays key skills in a responsive grid with staggered animations.
 */
const SkillsSection: React.FC = () => {
  const skills = [
    "Scalable Systems",
    "High-Performance Pipelines",
    "Backend & Frontend",
    "Cloud Infrastructure",
    "DevOps & CI/CD",
    "AI/ML & Computer Vision",
    "Cross-Functional Leadership",
    "Product Management",
  ];
  return (
    <section className="py-16 bg-[var(--color-panel)]">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-[var(--color-foreground)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          Key Skills & Expertise
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="p-6 bg-[var(--color-background)] rounded-lg shadow-xl"
              variants={fadeInVariants}
            >
              <p className="text-xl font-medium text-[var(--color-foreground)]">{skill}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* =============================================================================
   PROJECTS SECTION COMPONENT
============================================================================= */
/**
 * ProjectsSection Component
 * ---------------------------
 * Displays dynamic flashcards for projects. Each flashcard clearly separates:
 * - Project Title (bold heading)
 * - Tech Stack (labeled text)
 * - A concise project summary
 * Clicking a flashcard navigates to the detailed project page.
 */
const ProjectsSection: React.FC = () => {
  const projects = [
    {
      id: "trading",
      title: "High‑Frequency Algorithmic Trading Engine for IMC Trading Propserity 2",
      techStack: "Python, Pandas, NumPy, SciPy, Matplotlib",
      description:
        "Built a high-frequency trading engine using advanced quantitative techniques—implementing strategies such as mean reversion, momentum triggers, and Monte Carlo simulations. Reduced simulation runtimes by nearly 40% through optimized vectorized operations. Future enhancements include custom C/C++ modules and WebSocket integration to further minimize latency.",
    },
    {
      id: "cloud-platform",
      title: "Cloud‑Native Distributed Service Platform for Scalable Applications",
      techStack: "Node.js (Nest.js), Spring Boot, Docker, Kubernetes, AWS, Terraform, PostgreSQL, Redis",
      description:
        "Developed a microservices-based platform capable of handling high transaction volumes with fault tolerance and minimal downtime. The solution decomposed a monolithic architecture into containerized services orchestrated via Kubernetes on AWS. A CI/CD pipeline streamlined deployments and significantly improved performance while ensuring data integrity.",
    },
    {
      id: "data-pipeline",
      title: "Robust Data Processing Pipeline for Scientific Research",
      techStack: "Python, Apache Spark, Kafka, PostgreSQL, Docker, Airflow",
      description:
        "Engineered a scalable ETL pipeline to manage and process high-volume scientific data streams in real time. Leveraging Apache Spark and Kafka for distributed processing and real-time ingestion, the system reduced manual intervention by approximately 20% and enabled efficient data transformation.",
    },
    {
      id: "route-optimization",
      title: "Scalable Route Optimization Simulator for Urban Logistics",
      techStack: "Python, NetworkX, NumPy, SciPy, concurrent.futures, Matplotlib",
      description:
        "Designed a simulator to optimize multi-stop delivery routes in urban environments by modeling logistics as a weighted graph. Enhanced classical algorithms with heuristics to efficiently compute optimal routes even for networks exceeding 100,000 nodes.",
    },
    {
      id: "donor-app",
      title: "Donor Management Application for the BC Cancer Foundation",
      techStack: "TypeScript, React, Node.js, Express, PostgreSQL, Docker, Socket.IO, AWS, Microservices",
      description:
        "Developed a full-stack application to automate donor workflows, reducing manual data entry by 40%. The platform features real-time notifications, containerized microservices for scalability, and robust data storage with PostgreSQL, ensuring high availability and data integrity.",
    },
    {
      id: "facefit",
      title: "FaceFit – AR‑Based Virtual Accessory Try‑On Application",
      techStack: "Java, Spring Boot, Mediapipe.js, PostgreSQL, React.js",
      description:
        "Created an augmented reality application that enables users to virtually try on accessories. By integrating robust computer vision techniques with a scalable backend, the solution delivers a responsive, real-time try-on experience across multiple devices.",
    },
    {
      id: "portfolio",
      title: "Personal Portfolio Website & Frontend Showcase",
      techStack: "React, Next.js, TypeScript, HTML5, CSS3/SCSS, Node.js, Vercel",
      description:
        "A digital portfolio that not only showcases my projects but also demonstrates my expertise in frontend development and modern web design. Built with a modular, component-based architecture for optimal SEO and performance, the site features interactive elements and dynamic loading.",
    },
  ];

  return (
    <section className="py-16 bg-[var(--color-background)]">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-[var(--color-foreground)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          Featured Projects
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-[var(--color-panel)] rounded-lg shadow-2xl p-6 cursor-pointer hover:scale-105 transition-transform"
              variants={fadeInVariants}
            >
              <Link href={`/projects/${project.id}`}>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-[var(--color-foreground)]">{project.title}</h3>
                  <p className="text-sm text-[var(--color-foreground)]">
                    <span className="font-semibold">Tech Stack:</span> {project.techStack}
                  </p>
                  <p className="text-base text-[var(--color-foreground)]">{project.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* =============================================================================
   CTA SECTION COMPONENT
============================================================================= */
const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[var(--color-background)] to-[var(--color-panel)]">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-[var(--color-foreground)]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Explore More
        </motion.h2>
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <TransparentButton href="/projects" primary>
            View Projects
          </TransparentButton>
          <TransparentButton href="/cv">
            Full CV
          </TransparentButton>
        </motion.div>
      </div>
    </section>
  );
};

/* =============================================================================
   HOME PAGE COMPONENT
============================================================================= */
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <CTASection />
    </main>
  );
}
