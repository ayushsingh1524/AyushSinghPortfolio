export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  image: string;
  bannerImage: string;
  bgColor: string;
  overview: string;
  techStack: string[];
  whyItIsMade: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const PROJECTS: Project[] = [
  // --- FULL-STACK APPLICATIONS ---
  {
    slug: "tasknest",
    title: "TASKNEST",
    shortTitle: "TASKNEST",
    category: "FULL-STACK",
    description: "Production-grade Kanban app. Next.js frontend, FastAPI backend. Real-time updates, JWT auth, normalized PostgreSQL, Redis caching, Docker containerized.",
    image: "/projects/tasknest.png",
    bannerImage: "/projects/tasknest.png",
    bgColor: "#ff6a00",
    overview: "A full-stack task management app with Kanban boards, real-time updates, and dual frontend/backend architecture. Features JWT-authenticated REST and GraphQL APIs, normalized database schemas, and scalable containerized deployment.",
    techStack: ["React", "Next.js", "Angular", "Spring Boot", "FastAPI", "PostgreSQL", "Redis", "GraphQL", "REST API", "Docker", "Kubernetes", "JWT", "Tailwind CSS"],
    whyItIsMade: "I wanted to go beyond tutorials and build something production-grade from scratch — a real app with dual frontends, multiple backends, and a proper deployment pipeline. It's my proof that I can own an entire stack end-to-end.",
    githubUrl: "https://github.com/ayushsingh1524",
    liveUrl: "https://tasknest.site"
  },
  {
    slug: "mini-buyer",
    title: "MINI BUYER",
    shortTitle: "MINI BUYER",
    category: "FULL-STACK",
    description: "Buyer Lead Intake App built with Next.js & TypeScript for managing real estate leads.",
    image: "/projects/ml_inference_platform_1780908107415.png", // Using placeholder image from existing
    bannerImage: "/projects/ml_inference_banner.png",
    bgColor: "#0f172a",
    overview: "Buyer Lead Intake App built with Next.js & TypeScript for managing real estate leads. Features include lead capture, validation, CSV import/export, search with filters, pagination, history tracking, and secure user-based editing.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    whyItIsMade: "Built to streamline the lead intake process for real estate professionals, minimizing manual data entry and ensuring data integrity.",
    githubUrl: "https://github.com/ayushsingh1524/Mini_Buyer",
  },
  {
    slug: "devtrack",
    title: "DEVTRACK",
    shortTitle: "DEVTRACK",
    category: "FULL-STACK",
    description: "Development tracking and analytics platform for engineering teams.",
    image: "/projects/cloud_threat_detection_1780908146526.png",
    bannerImage: "/projects/cloud_threat_banner.png",
    bgColor: "#1e1b4b",
    overview: "A comprehensive developer productivity tracker designed to integrate with standard version control systems and provide actionable metrics on engineering velocity.",
    techStack: ["TypeScript", "Node.js", "React", "PostgreSQL"],
    whyItIsMade: "To help engineering managers and developers quantify their productivity and identify bottlenecks in the development lifecycle.",
    githubUrl: "https://github.com/ayushsingh1524/DevTrack",
  },
  {
    slug: "online-compiler",
    title: "ONLINE COMPILER",
    shortTitle: "COMPILER",
    category: "FULL-STACK",
    description: "Browser-based code editor for Python, Java, and C++. Features auto-save, device locking, and shareable links with zero login required.",
    image: "/projects/concurrent_exec_engine_1780908121308.png",
    bannerImage: "/projects/exec_engine_banner.png",
    bgColor: "#ff3b00",
    overview: "A browser-based code editor and compiler supporting multiple languages including Python, Java, and C++. Codes auto-save in real time, are device-locked for security, and shareable via unique links — no login required.",
    techStack: ["React", "JavaScript", "HTML", "CSS", "REST API"],
    whyItIsMade: "As a student constantly switching between machines, I needed a simple, zero-friction place to write and run code without setting up an environment. Building it myself was the fastest way to get exactly what I needed.",
    githubUrl: "https://github.com/ayushsingh1524/Online_compiler_by_ayush",
  },
  
  // --- DATA & AI/ML ---
  {
    slug: "ml-inference",
    title: "ML INFERENCE PLATFORM",
    shortTitle: "ML INFERENCE",
    category: "DATA & AI/ML",
    description: "Containerized model serving platform. K8s autoscaling. Sub-200ms latency. 100+ concurrent requests. Prometheus integration.",
    image: "/projects/ml_inference_platform_1780908107415.png",
    bannerImage: "/projects/ml_inference_banner.png",
    bgColor: "#0047ff",
    overview: "A scalable async ML inference API platform with dual authentication (JWT + API Key), Redis caching, real-time health monitoring, and a full CI/CD pipeline. Supports high-concurrency model serving with Grafana-level telemetry.",
    techStack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "Kubernetes", "JWT", "OAuth 2.0", "GitHub Actions", "Pytest", "Scikit-Learn"],
    whyItIsMade: "I wanted to understand how ML models are actually served in production — not just trained. Building the full inference pipeline with caching, auth, monitoring, and CI/CD taught me what separates a hobby project from enterprise-grade software.",
    githubUrl: "https://github.com/ayushsingh1524/ml-inference-platform",
  },
  {
    slug: "datapilot-ai",
    title: "DATAPILOT AI",
    shortTitle: "DATAPILOT",
    category: "DATA & AI/ML",
    description: "Intelligent data analysis and piloting platform utilizing machine learning for predictive insights.",
    image: "/projects/packet_analyzer_1780908132723.png",
    bannerImage: "/projects/packet_analyzer_banner.png",
    bgColor: "#065f46",
    overview: "Datapilot AI leverages advanced machine learning models to analyze complex datasets, providing predictive insights and automated reporting for business intelligence.",
    techStack: ["Python", "Pandas", "Scikit-Learn", "FastAPI", "React"],
    whyItIsMade: "To democratize data analysis by providing an intuitive, AI-driven interface that non-technical users can leverage to make data-backed decisions.",
    githubUrl: "https://github.com/ayushsingh1524/Datapilot-Ai",
  },
  {
    slug: "shopflow-data",
    title: "SHOPFLOW DATA",
    shortTitle: "SHOPFLOW",
    category: "DATA & AI/ML",
    description: "Data engineering pipeline for processing and analyzing e-commerce transactions at scale.",
    image: "/projects/cloud_threat_detection_1780908146526.png",
    bannerImage: "/projects/cloud_threat_banner.png",
    bgColor: "#831843",
    overview: "A robust data engineering pipeline built to ingest, transform, and load high-volume e-commerce transaction data into a centralized data warehouse for downstream analytics.",
    techStack: ["Python", "Apache Spark", "Airflow", "AWS", "SQL"],
    whyItIsMade: "To tackle the challenges of big data processing and build a reliable, fault-tolerant ETL pipeline suitable for enterprise e-commerce platforms.",
    githubUrl: "https://github.com/ayushsingh1524/shopflow-data-engineering",
  },

  // --- SECURITY & NETWORKING ---
  {
    slug: "cloud-threat-detection",
    title: "CLOUD THREAT DETECTION",
    shortTitle: "THREAT DETECT",
    category: "SECURITY & NETWORKING",
    description: "End-to-end cloud security pipeline. Ingests AWS CloudTrail into Snowflake. SQL-based detections deployed via Terraform & CI/CD.",
    image: "/projects/cloud_threat_detection_1780908146526.png",
    bannerImage: "/projects/cloud_threat_banner.png",
    bgColor: "#9000ff",
    overview: "An end-to-end cloud security pipeline ingesting AWS CloudTrail and IAM logs into Snowflake, with SQL-based detections for privilege escalation, data exfiltration, and account compromise — all mapped to MITRE ATT&CK and deployed via Terraform and GitHub Actions CI/CD.",
    techStack: ["Python", "AWS CloudTrail", "Snowflake", "Terraform", "SQL", "YAML", "GitHub Actions", "Pytest", "MITRE ATT&CK", "AWS IAM", "SNS"],
    whyItIsMade: "Cloud security is one of the most critical and underbuilt areas in modern engineering. I built this to understand how threat detection works at scale — from raw log ingestion to automated alerting — and to show I can work across infrastructure, data engineering, and security simultaneously.",
    githubUrl: "https://github.com/ayushsingh1524/cloud-threat-detection",
  },
  {
    slug: "packet-analyzer",
    title: "PACKET ANALYZER",
    shortTitle: "PACKET ANALYZER",
    category: "SECURITY & NETWORKING",
    description: "C++ intrusion detection engine using libpcap. Detects SYN floods, port scans, and ICMP floods with MITRE ATT&CK mapping.",
    image: "/projects/packet_analyzer_1780908132723.png",
    bannerImage: "/projects/packet_analyzer_banner.png",
    bgColor: "#00c94a",
    overview: "A real-time C++ intrusion detection engine using libpcap and POSIX sockets. Detects SYN floods, port scans, and ICMP floods with MITRE ATT&CK mapping, a live ncurses CLI dashboard, and structured JSON alert logging for SIEM integration.",
    techStack: ["C++", "libpcap", "POSIX Sockets", "pthreads", "ncurses", "CMake", "Valgrind", "AddressSanitizer", "MITRE ATT&CK"],
    whyItIsMade: "I wanted to go deep into how networks actually work at the packet level. Building a real IDS from scratch in C++ — with no frameworks, just raw sockets and memory-safe tooling — pushed me to understand TCP/IP, multithreading, and systems programming in a way no tutorial ever could.",
    githubUrl: "https://github.com/ayushsingh1524/network-packet-analyzer",
  },

  // --- SYSTEMS & APPS ---
  {
    slug: "onenotify",
    title: "ONENOTIFY",
    shortTitle: "ONENOTIFY",
    category: "SYSTEMS & APPS",
    description: "Cross-platform notification synchronization system built with Java.",
    image: "/projects/onenotify_new.jpg",
    bannerImage: "/projects/onenotify_new.jpg",
    bgColor: "#1e0b3b",
    overview: "A Java-based application designed to bridge the gap between desktop and mobile devices by synchronizing notifications in real-time.",
    techStack: ["Java", "Android SDK", "WebSockets"],
    whyItIsMade: "To solve the personal annoyance of missing important mobile notifications while deeply focused on coding on a desktop environment.",
    githubUrl: "https://github.com/ayushsingh1524/OneNotify",
  },
  {
    slug: "battery-monitor",
    title: "BATTERY MONITOR",
    shortTitle: "BATTERY MON",
    category: "SYSTEMS & APPS",
    description: "System utility for advanced battery telemetry and health tracking.",
    image: "/projects/battery_mon_new.jpg",
    bannerImage: "/projects/battery_mon_new.jpg",
    bgColor: "#0f3b2d",
    overview: "A lightweight desktop application that monitors battery health, charge cycles, and power consumption patterns to help extend hardware lifespan.",
    techStack: ["Java", "System APIs"],
    whyItIsMade: "I needed a better way to monitor my laptop's battery degradation over time and prevent overcharging.",
    githubUrl: "https://github.com/ayushsingh1524/battery-monitor",
  },

  // --- CREATIVE & WEB ---
  {
    slug: "roycemotors",
    title: "ROYCEMOTORS",
    shortTitle: "ROYCEMOTORS",
    category: "CREATIVE & WEB",
    description: "Premium automotive showcase website featuring smooth animations and high-end aesthetics.",
    image: "/projects/roycemotors_new.jpg",
    bannerImage: "/projects/roycemotors_new.jpg",
    bgColor: "#171717",
    overview: "A purely visual, highly animated frontend showcase designed for luxury automotive brands. Focuses heavily on GSAP animations, scroll-triggered reveals, and a premium dark-mode aesthetic.",
    techStack: ["HTML", "CSS", "JavaScript", "GSAP"],
    whyItIsMade: "To push my frontend animation skills to the limit and create an experience that feels truly premium and interactive.",
    githubUrl: "https://github.com/ayushsingh1524/Roycemotors",
  },
  {
    slug: "medconnect",
    title: "MEDCONNECT",
    shortTitle: "MEDCONNECT",
    category: "CREATIVE & WEB",
    description: "Healthcare portal interface for patient-doctor interactions.",
    image: "/projects/medconnect_new.jpg",
    bannerImage: "/projects/medconnect_new.jpg",
    bgColor: "#0ea5e9",
    overview: "A clean, accessible web interface for a healthcare application that connects patients with medical professionals for consultations and record management.",
    techStack: ["Python", "Django", "HTML", "CSS"],
    whyItIsMade: "To design a user-friendly interface for a critical sector where accessibility and clarity are paramount.",
    githubUrl: "https://github.com/ayushsingh1524/MedConnect",
  }
];
