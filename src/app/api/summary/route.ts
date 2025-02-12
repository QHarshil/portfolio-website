// app/api/summary/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const summary = "Software Development Engineer with an MSc in Computer Science, skilled in designing scalable, fault‑tolerant systems, distributed computing, and cloud automation (AWS, Kubernetes). Proficient in machine learning (NLP, Computer Vision), event‑driven architectures, and optimizing large‑scale data pipelines for low‑latency, compute‑intensive workflows. I excel at solving complex technical challenges, leading cross‑functional teams in agile environments, and bridging the gap between engineering and business.";
    return NextResponse.json({ summary });
  } catch (error) {
    console.error("Error fetching summary:", error);
    return NextResponse.json({ error: "Failed to fetch summary" }, { status: 500 });
  }
}
