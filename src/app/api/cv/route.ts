// app/api/cv/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const cv = {
      summary:
        "Backend & Cloud Software Engineer with an MSc in Computer Science. Experienced in designing highly scalable, fault-tolerant distributed systems and backend microservices using Spring Boot, Node.js, and AWS. Skilled in building RESTful APIs, real-time event-driven architectures (Kafka, Redis, WebSockets), and cloud automation. Strong foundation in databases (PostgreSQL, SQL, NoSQL), API performance optimization, and CI/CD pipelines. Expertise in integrating AI/ML into production systems, focusing on AI-driven automation, MLOps, and intelligent backend services. Applied optimization techniques in trading algorithms, AI model inference, and database query tuning.",

      skills: {
        languages: [
          "Java",
          "Python",
          "C/C++",
          "JavaScript",
          "TypeScript",
          "Go",
          "SQL",
        ],
        "frameworks & cloud": [
          "Spring Boot",
          "Nest.js (Node.js)",
          "Express.js",
          "FastAPI",
          "Flask",
          "React.js",
          "Next.js",
          "AWS (Lambda, S3, ECS, DynamoDB)",
          "GCP",
          "Kubernetes",
          "Docker",
        ],
        "AI/ML & data engineering": [
          "Transformers (BERT, GPT, Swin)",
          "PyTorch",
          "Scikit-learn",
          "YOLOv5",
          "Mask R-CNN",
          "OpenCV",
          "XGBoost",
          "LSTM",
          "Mediapipe.js",
          "HuggingFace",
          "TensorFlow Serving",
          "ONNX",
          "Pandas",
          "NumPy",
          "Matplotlib",
          "Apache Spark",
          "Databricks",
        ],
        "API development & DevOps": [
          "RESTful APIs",
          "GraphQL",
          "WebSockets",
          "PostgreSQL",
          "MySQL",
          "Redis",
          "MongoDB",
          "CI/CD Pipelines (Terraform, GitHub Actions, Jenkins)",
          "Cloud Infrastructure Optimization",
          "Monitoring & Logging (Grafana, Prometheus)",
        ],
      },

      professionalExperience: [
        {
          role: "Software Engineer Intern",
          company: "BC Cancer Foundation – POC Project",
          location: "Vancouver, BC, Canada",
          dates: "September 2024 – December 2024",
          responsibilities: [
            "Developed & deployed a full-stack donor management system, reducing manual workflows by 40% and improving data accuracy.",
            "Built RESTful APIs (Nest.js, PostgreSQL) to streamline donor data processing, reducing sync time by 30%.",
            "Integrated WebSockets (Socket.IO) for real-time notifications, improving response time for fundraising by 25%.",
            "Deployed scalable microservices on AWS (Docker, Kubernetes), achieving 99.9% system uptime.",
          ],
        },
        {
          role: "Software Engineer Intern",
          company: "Thermo Fisher Scientific",
          location: "Boston, MA",
          dates: "May 2024 – August 2024",
          responsibilities: [
            "Developed cloud-native microservices (Spring Boot, AWS Lambda), reducing API latency by 30%.",
            "Implemented event-driven architecture (Kafka, RabbitMQ), improving system throughput by 40% for large-scale research data.",
            "Optimized PostgreSQL queries (indexing, partitioning), reducing data processing time by 15% for 10,000+ daily records.",
          ],
        },
        {
          role: "Technical Product Manager",
          company: "Felix Payment Systems",
          location: "Vancouver, BC, Canada",
          dates: "January 2023 – August 2023",
          responsibilities: [
            "Architected a microservices backend (Nest.js, Spring Boot, Redis), reducing API response times by 15%.",
            "Automated CI/CD pipelines (Terraform, GitHub Actions), cutting deployment time by 25% and reducing manual overhead.",
            "Enhanced system observability (Grafana, Prometheus), reducing troubleshooting time by 20%.",
          ],
        },
        {
          role: "Graduate Teaching Assistant",
          company: "Northeastern University",
          location: "Vancouver, BC, Canada",
          dates: "September 2024 – Present",
          responsibilities: [
            "Automated grading scripts using Python, saving 20+ hours per week for faculty.",
          ],
        },
      ],

      education: [
        {
          degree: "Master of Science in Computer Science (Focus: AI/ML)",
          institution: "Northeastern University",
          location: "Vancouver, BC, Canada",
          dates: "September 2023 – January 2025",
          coursework: [
            "Distributed Systems",
            "Machine Learning",
            "Natural Language Processing",
            "Computer Vision",
            "Algorithms",
            "Large-Scale Data Processing",
            "Cloud Computing",
            "Databases",
            "Software Engineering (System Design, Object-Oriented Design)",
          ],
        },
        {
          degree: "Bachelor of Science in Life Science (Focus: Chemistry)",
          institution: "McMaster University",
          location: "Hamilton, ON, Canada",
          dates: "September 2014 – April 2018",
        },
      ],
    };

    return NextResponse.json(cv);
  } catch (error) {
    console.error("Error fetching CV:", error);
    return NextResponse.json({ error: "Failed to fetch CV" }, { status: 500 });
  }
}

