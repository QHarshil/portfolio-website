// app/api/summary/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const summary = "Software Development Engineer with an MSc in Computer Science. Experienced in designing scalable, fault-tolerant systems, distributed computing, and cloud automation (AWS, Kubernetes). Proficient in machine learning (NLP, Computer Vision), event-driven architectures, high-performance applications, and optimizing large-scale data pipelines for low-latency, compute-intensive workflows.";
    return NextResponse.json({ summary });
  } catch (error) {
    console.error("Error fetching summary:", error);
    return NextResponse.json({ error: "Failed to fetch summary" }, { status: 500 });
  }
}
