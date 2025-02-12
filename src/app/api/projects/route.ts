// app/api/projects/route.ts
import { NextResponse } from "next/server";

// Updated sample summarized project data
const projectsSummary = [
  {
    id: "trading",
    title: "High‑Frequency Algorithmic Trading Engine for IMC Trading Propserity 2",
    technologies: ["Python", "Pandas", "NumPy", "SciPy", "Matplotlib"],
    summary:
      "Engineered a low‑latency trading system that integrates quantitative finance models and rigorous backtesting to drive profit generation in a real‑time simulated market, achieving top 1% performance.",
  },
  {
    id: "cloud-platform",
    title: "Cloud‑Native Distributed Service Platform for Scalable Applications",
    technologies: ["Node.js (Nest.js)", "Spring Boot", "Docker", "Kubernetes", "AWS", "Terraform", "PostgreSQL", "Redis"],
    summary:
      "Developed a robust microservices architecture that leverages containerization and CI/CD automation to ensure high‑throughput, fault‑tolerant backend transactions in a production‑grade cloud environment.",
  },
  {
    id: "data-pipeline",
    title: "Robust Data Processing Pipeline for Scientific Research",
    technologies: ["Python", "Apache Spark", "Kafka", "PostgreSQL", "Docker", "Airflow"],
    summary:
      "Designed an automated, distributed ETL framework that ingests and transforms high‑volume scientific data with exceptional accuracy and scalability, ensuring data integrity across large datasets.",
  },
  {
    id: "route-optimization",
    title: "Scalable Route Optimization Simulator for Urban Logistics",
    technologies: ["Python", "NetworkX", "NumPy", "SciPy", "concurrent.futures", "Matplotlib"],
    summary:
      "Created an advanced simulation tool using algorithmic optimizations and parallel processing to compute efficient multi‑stop delivery routes, thereby reducing operational costs in complex urban environments.",
  },
  {
    id: "donor-app",
    title: "Donor Management Application for the BC Cancer Foundation",
    technologies: ["TypeScript", "React", "Node.js", "Express", "PostgreSQL", "Docker", "Socket.IO", "AWS", "Microservices"],
    summary:
      "Built an end‑to‑end donor management system that streamlines fundraising operations through real‑time data synchronization and high availability, significantly reducing manual processing and errors.",
  },
  {
    id: "facefit",
    title: "FaceFit – AR‑Based Virtual Accessory Try‑On Application",
    technologies: ["Java", "Spring Boot", "Mediapipe.js", "PostgreSQL", "React.js"],
    summary:
      "Developed a real‑time augmented reality experience that blends precise facial recognition with dynamic overlay techniques to deliver immersive user interactions and drive engagement.",
  },
  {
    id: "portfolio",
    title: "Personal Portfolio Website & Frontend Showcase",
    technologies: ["React", "Next.js", "TypeScript", "HTML5", "CSS3/SCSS", "Node.js", "Vercel"],
    summary:
      "Constructed a high‑performance, responsive portfolio that effectively demonstrates technical projects and professional achievements while embodying modern software design and usability principles.",
  },
];

export async function GET() {
  return NextResponse.json(projectsSummary);
}
