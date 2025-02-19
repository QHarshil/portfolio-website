// app/api/summary/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const summary = "Software Development Engineer with an MSc in Computer Science, specializing in building scalable, fault-tolerant backend services, distributed computing, and cloud automation (AWS, Kubernetes, Docker). Experienced in designing event-driven architectures, optimizing large-scale data pipelines, and deploying AI/ML models into production systems (NLP, Computer Vision). Proficient in backend frameworks (Spring Boot, Nest.js) and database optimizations (PostgreSQL, Redis) for high-performance, low-latency applications. Passionate about solving complex technical challenges and collaborating in agile, cross-functional teams to drive innovation.";
    return NextResponse.json({ summary });
  } catch (error) {
    console.error("Error fetching summary:", error);
    return NextResponse.json({ error: "Failed to fetch summary" }, { status: 500 });
  }
}
