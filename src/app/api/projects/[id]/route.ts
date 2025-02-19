// app/api/projects/[id]/route.ts
import { NextResponse } from "next/server";

interface CodeSnippet {
  caption: string;
  code: string;
}

interface ProjectDetails {
  id: string;
  title: string;
  techStack: string;
  summary: string;
  fullDescription: string;
  codeSnippets: CodeSnippet[];
}

const projectsFull: Record<string, ProjectDetails> = {
  trading: {
    id: "trading",
    title: "High‑Frequency Algorithmic Trading Engine for IMC Trading Propserity 2",
    techStack: "Python, Pandas, NumPy, SciPy, Matplotlib",
    summary:
      "Built a high-frequency trading engine using advanced quantitative techniques—implementing strategies such as mean reversion, momentum triggers, and Monte Carlo simulations. The engine reduced simulation runtimes by nearly 40% through optimized vectorized operations. Future enhancements include custom C/C++ modules and WebSocket integration.",
    fullDescription:
      "In this project, I built a high-frequency trading engine exclusively in Python for the IMC Trading Propserity 2 competition. The engine integrates advanced quantitative finance techniques with robust software development to generate profit in a simulated, real‑time market environment. I implemented a suite of strategies—including mean reversion using statistical signals, momentum-based triggers, and Monte Carlo simulations for risk and position sizing. Technical indicators such as Bollinger Bands, SMA, and EMA were incorporated to dynamically capture market volatility and trend reversals. The engine processed large datasets using vectorized operations in Pandas and NumPy, reducing simulation runtimes by approximately 40% during rigorous backtesting against historical data. This backtesting framework was critical for fine-tuning model parameters and validating profitability under varied market scenarios. Although the current system is entirely Python-based, future iterations may leverage C/C++ modules and WebSocket integration to further minimize latency. This project demonstrates my ability to blend quantitative analysis, mathematical modeling, and real-world software engineering to build a scalable, profit-oriented trading system.",
    codeSnippets: [
      {
        caption: "Mean Reversion Strategy Implementation",
        code: `def mean_reversion(data):
    # Calculate moving averages and identify reversion points
    pass`,
      },
    ],
  },
  "ecommerce-platform": {
    id: "ecommerce-platform",
    title: "Distributed Microservices E-Commerce Platform",
    techStack:
      "Spring Boot (Java), Nest.js (Node.js), PostgreSQL, Redis, Kubernetes, Docker, AWS",
    summary:
      "A high-performance e-commerce platform leveraging distributed microservices to optimize order processing, ensure scalability, and enable zero-downtime deployments through CI/CD automation.",
    fullDescription:
      "As part of my Master’s coursework in scalable and distributed systems, I developed a distributed microservices e-commerce platform capable of handling high transaction loads while maintaining fault tolerance and seamless scalability. The system was designed with a modular architecture where Spring Boot (Java) powered transaction-heavy services, and Nest.js (Node.js) handled dynamic request processing. PostgreSQL was optimized using database sharding and read replicas to efficiently manage concurrent transactions, while Redis caching reduced query response times by up to 30%. Kubernetes orchestrated the containerized services, ensuring high availability and auto-scaling, while AWS provided cloud-based infrastructure for compute, storage, and networking. The CI/CD pipeline, implemented with Docker and GitHub Actions, automated deployments with zero downtime, reducing development iteration cycles by 25%. This project enhanced my expertise in backend scalability, API optimization, and cloud-native infrastructure design.",
    codeSnippets: [
      {
        caption: "Kubernetes Deployment YAML for Order Service",
        code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: order-service-deployment
spec:
  replicas: 3
  template:
    spec:
      containers:
      - name: order-service
        image: order-service-image:latest`,
      },
    ],
  },
  "data-pipeline": {
    id: "data-pipeline",
    title: "Robust Data Processing Pipeline for Scientific Research",
    techStack: "Python, Apache Spark, Kafka, PostgreSQL, Docker, Airflow",
    summary:
      "A scalable ETL pipeline designed to process high-volume scientific data streams in real time, reducing manual intervention by approximately 20%.",
    fullDescription:
      "This project addressed the challenges of managing and processing high‑volume scientific data by building a robust ETL pipeline in Python. Utilizing Apache Spark for distributed processing and Kafka for real‑time ingestion, the pipeline efficiently handled massive data streams from various scientific instruments. The goal was to automate data extraction, transformation, and loading while reducing manual intervention by approximately 20%. The system streams data via Kafka, applies complex parallel transformations with Spark, and stores processed data in a PostgreSQL database—optimized through indexing and query tuning. Docker containers ensure consistency across deployments, and Apache Airflow orchestrates job scheduling and monitoring, providing robust error handling and performance tracking.",
    codeSnippets: [
      {
        caption: "Spark Data Transformation",
        code: `from pyspark.sql import SparkSession

spark = SparkSession.builder.appName('ETL').getOrCreate()
# Example transformation logic here`,
      },
    ],
  },
  "route-optimization": {
    id: "route-optimization",
    title: "Scalable Route Optimization Simulator for Urban Logistics",
    techStack: "Python, NetworkX, NumPy, SciPy, concurrent.futures, Matplotlib",
    summary:
      "A simulation tool that models urban logistics as a weighted graph to compute optimal multi‑stop delivery routes, even for networks with over 100,000 nodes.",
    fullDescription:
      "Focusing on urban logistics, this project developed a route optimization simulator that models a city’s transportation network as a weighted graph. I implemented classical algorithms such as Dijkstra’s and A* with heuristic enhancements to compute the most efficient multi‑stop delivery routes. The simulator processes graphs with over 100,000 nodes by leveraging optimized data structures and Python’s concurrent.futures for parallel computation, significantly reducing runtime while maintaining high accuracy. Real‑world constraints—such as traffic conditions, delivery windows, and vehicle capacities—were incorporated into the simulation. Visualization via Matplotlib provided actionable insights into route efficiencies and potential bottlenecks.",
    codeSnippets: [
      {
        caption: "A* Algorithm Implementation",
        code: `def a_star(graph, start, goal):
    # Implement A* search algorithm here
    pass`,
      },
    ],
  },
  "donor-app": {
    id: "donor-app",
    title: "Donor Management Application for the BC Cancer Foundation",
    techStack:
      "TypeScript, React, Node.js, Express, PostgreSQL, Docker, Socket.IO, AWS, Microservices",
    summary:
      "A full-stack application that automates donor tracking and data management, reducing manual data entry by 40% and integrating real-time notifications for enhanced operational efficiency.",
    fullDescription:
      "This project streamlines donor tracking, communication, and data management for the BC Cancer Foundation. The frontend, built with React and TypeScript, offers an intuitive interface with dynamic dashboards and real‑time reporting. The backend, constructed with Node.js and Express in a microservices architecture, ensures scalability and maintainability. PostgreSQL is used for robust data storage, while Socket.IO powers real‑time notifications with sub‑200ms response times. Docker containerization and AWS deployment guarantee high availability, and a CI/CD pipeline further enhances deployment efficiency. This project not only improved operational efficiency by reducing manual data entry by 40% but also showcased my ability to integrate modern web technologies into a cohesive, mission‑critical application.",
    codeSnippets: [
      {
        caption: "Express API Route",
        code: `app.get('/donors', (req, res) => {
  // Fetch donor data from database
  res.json({ donors: [] });
});`,
      },
    ],
  },
  "facefit": {
    id: "facefit",
    title: "FaceFit – AR‑Based Virtual Accessory Try‑On Application",
    techStack: "Java, Spring Boot, Mediapipe.js, PostgreSQL, React.js",
    summary:
      "An innovative augmented reality application that allows users to virtually try on accessories. It combines robust computer vision techniques with scalable backend engineering to deliver a responsive, real‑time experience.",
    fullDescription:
      "FaceFit is an innovative augmented reality application that allows users to virtually try on accessories like glasses and hats directly from their web browser. The frontend is developed using React.js, delivering a responsive and interactive user interface, while Mediapipe.js powers robust real‑time facial detection. The backend is implemented with Java and Spring Boot, providing a scalable and secure framework to manage user sessions, accessory data, and image processing. PostgreSQL is used for persistent storage, ensuring reliable management of accessory metadata and user preferences. Extensive testing across devices optimized the AR experience under various lighting and motion conditions. FaceFit demonstrates my ability to blend cutting‑edge computer vision techniques with robust backend engineering to create engaging, real‑time applications.",
    codeSnippets: [
      {
        caption: "Sample React Component",
        code: `const FaceFit = () => {
  return <div>AR Try-On Experience</div>;
};`,
      },
    ],
  },
  "portfolio": {
    id: "portfolio",
    title: "Personal Portfolio Website & Frontend Showcase",
    techStack: "React, Next.js, TypeScript, HTML5, CSS3/SCSS, Node.js, Vercel",
    summary:
      "A digital portfolio that showcases my projects and demonstrates my proficiency in frontend development and modern web design. It features a modular, component-based architecture optimized for SEO and performance.",
    fullDescription:
      "Serving as my professional online presence, this portfolio website is both a showcase of my technical projects and a demonstration of my frontend development skills. Built with React and Next.js, the site employs a modular, component-based architecture that supports server-side rendering and excellent SEO performance. TypeScript is utilized for robust type safety, while HTML5 and CSS3/SCSS ensure a modern, responsive design. Key features include an interactive project gallery, a detailed resume, a technical blog, and a contact form linked to a backend API. Advanced styling techniques such as lazy loading and code splitting optimize performance, ensuring fast page loads across devices. Deployed on Vercel, the site benefits from continuous integration and global content delivery.",
    codeSnippets: [
      {
        caption: "Dynamic Routing in Next.js",
        code: `export async function getStaticPaths() {
  // Define project paths
}

export async function getStaticProps({ params }) {
  // Fetch project details using params.id
}`,
      },
    ],
  },
};

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectsFull[id];

  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  return NextResponse.json(project);
}
