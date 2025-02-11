// app/api/projects/route.ts
import { NextResponse } from "next/server";

// Sample summarized project data
const projectsSummary = [
  {
    id: "trading",
    title: "High‑Frequency Algorithmic Trading Engine for IMC Trading Propserity 2",
    techStack: "Python, Pandas, NumPy, SciPy, Matplotlib",
    summary:
      "A high-frequency trading engine leveraging advanced quantitative techniques and vectorized operations to reduce simulation runtimes by ~40%. Future enhancements include custom C/C++ modules and WebSocket integration.",
  },
  {
    id: "cloud-platform",
    title: "Cloud‑Native Distributed Service Platform for Scalable Applications",
    techStack: "Node.js (Nest.js), Spring Boot, Docker, Kubernetes, AWS, Terraform, PostgreSQL, Redis",
    summary:
      "A microservices-based platform designed for high transaction volumes with fault tolerance. Containerized services orchestrated via Kubernetes on AWS, with a streamlined CI/CD pipeline.",
  },
  {
    id: "data-pipeline",
    title: "Robust Data Processing Pipeline for Scientific Research",
    techStack: "Python, Apache Spark, Kafka, PostgreSQL, Docker, Airflow",
    summary:
      "An efficient ETL pipeline for high-volume scientific data streams that reduces manual intervention by ~20% using Apache Spark and Kafka.",
  },
  {
    id: "route-optimization",
    title: "Scalable Route Optimization Simulator for Urban Logistics",
    techStack: "Python, NetworkX, NumPy, SciPy, concurrent.futures, Matplotlib",
    summary:
      "A simulation tool that models urban logistics as a weighted graph, optimizing multi‑stop delivery routes for networks with over 100,000 nodes.",
  },
  {
    id: "donor-app",
    title: "Donor Management Application for the BC Cancer Foundation",
    techStack: "TypeScript, React, Node.js, Express, PostgreSQL, Docker, Socket.IO, AWS, Microservices",
    summary:
      "A full-stack application that automates donor workflows, reduces manual data entry by 40%, and features real-time notifications with containerized microservices.",
  },
  {
    id: "facefit",
    title: "FaceFit – AR‑Based Virtual Accessory Try‑On Application",
    techStack: "Java, Spring Boot, Mediapipe.js, PostgreSQL, React.js",
    summary:
      "An augmented reality application that enables virtual accessory try-ons by integrating robust computer vision with scalable backend engineering.",
  },
  {
    id: "portfolio",
    title: "Personal Portfolio Website & Frontend Showcase",
    techStack: "React, Next.js, TypeScript, HTML5, CSS3/SCSS, Node.js, Vercel",
    summary:
      "A digital portfolio showcasing advanced frontend development skills through a modular, component-based architecture optimized for SEO and performance.",
  },
];

export async function GET() {
  return NextResponse.json(projectsSummary);
}
