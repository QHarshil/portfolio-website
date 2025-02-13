// app/api/cv/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const cv = {
      summary: "Software Development Engineer with an MSc in Computer Science. Experienced in designing scalable, fault-tolerant systems, distributed computing, and cloud automation (AWS, Kubernetes). Proficient in machine learning (NLP, Computer Vision), event-driven architectures, high-performance applications, and optimizing large-scale data pipelines for low-latency, compute-intensive workflows.",
      skills: {
        languages: ["Python", "Java", "SQL", "JavaScript", "TypeScript", "C++", "Go", "C", "HTML/CSS"],
        cloudPlatforms: ["AWS (S3, Lambda)", "Google Cloud", "Docker", "Kubernetes", "PostgreSQL", "Git", "CI/CD"],
        frameworks: ["Spring Boot", "React.js", "Node.js", "FastAPI/Flask", "Nest.js", "Next.js"],
        aI: ["PyTorch", "Scikit-Learn", "Transformers (BERT, GPT, Swin)", "OpenCV"],
        dataEngineering: ["YOLOv5", "Mask R-CNN", "XGBoost", "LSTM", "Mediapipe.js", "Pandas", "NumPy", "Matplotlib", "Databricks", "Apache Spark"]
      },
      professionalExperience: [
        {
          role: "Graduate Teaching Assistant",
          company: "Northeastern University",
          location: "Vancouver, BC, Canada",
          dates: "September 2024 - Present",
          responsibilities: [
            "Built Python scripts to automate grading, reducing evaluation time by 20+ hours weekly for 100+ assignments using pandas and regex.",
            "Reviewed code, debugged issues, and enhanced algorithms for 50 students during code reviews."
          ]
        },
        {
          role: "Software Engineer Intern",
          company: "Thermo Fisher Scientific",
          location: "Boston, MA",
          dates: "May 2024 – August 2024",
          responsibilities: [
            "Developed large-scale ETL pipelines in Python/Java, leveraging Apache Spark and event-driven messaging (Kafka) to process high-volume scientific data, improving efficiency by 10%.",
            "Designed AWS-based data workflows with S3, Lambda, and ECS/Fargate, implementing auto-scaling and parallel processing, reducing latency by 30%.",
            "Optimized SQL-based analytics by implementing indexing strategies and query parallelization, cutting processing time by 15% across 10,000+ datasets."
          ]
        },
        {
          role: "Technical Product Manager",
          company: "Felix Payment Systems",
          location: "Vancouver, BC, Canada",
          dates: "January 2023 – August 2023",
          responsibilities: [
            "Enhanced microservices architecture with Docker, Kubernetes, and API performance tuning, reducing latency by 15%.",
            "Automated CI/CD pipelines with Terraform, GitHub Actions, and testing workflows, cutting deployment time by 25%.",
            "Worked cross-functionally to resolve system bottlenecks using JIRA, Grafana, and Prometheus, increasing throughput by 20%."
          ]
        }
      ],
      education: [
        {
          degree: "Master of Science in COMPUTER SCIENCE (Focus: AI/ML)",
          institution: "Northeastern University",
          dates: "September 2023 – January 2025",
          coursework: [
            "Object Oriented Design", "Distributed Systems", "Machine Learning", "Natural Language Processing", "Computer Vision",
            "Algorithms", "Large-Scale Data Processing", "Cloud Computing", "Data Structures & Algorithms"
          ]
        },
        {
          degree: "Master of Business Administration (MBA)",
          institution: "university of San Francisco",
          dates: "September 2021 – April 2023",
          coursework: ["Financial Modelling", "Predictive Analytics", "Agile Project Management", "Consulting Practices", "Market Research Methods"]
        },
        {
          degree: "Bachelor of Science in LIFE SCIENCE (Focus: Chemistry)",
          institution: "McMaster University",
          dates: "September 2014 – April 2018"
        }
      ]
    };

    return NextResponse.json(cv);
  } catch (error) {
    console.error("Error fetching CV:", error);
    return NextResponse.json({ error: "Failed to fetch CV" }, { status: 500 });
  }
}
