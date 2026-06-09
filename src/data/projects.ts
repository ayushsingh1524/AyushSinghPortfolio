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
  {
    slug: "tasknest",
    title: "TASKNEST",
    shortTitle: "TASKNEST",
    category: "FULL-STACK TASK MANAGEMENT",
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
    slug: "ml-inference",
    title: "ML INFERENCE PLATFORM",
    shortTitle: "ML INFERENCE",
    category: "FILE #892 - K8S/AWS",
    description: "Containerized model serving platform. K8s autoscaling. Sub-200ms latency. 100+ concurrent requests. Prometheus integration.",
    image: "/projects/ml_inference_platform_1780908107415.png",
    bannerImage: "/projects/ml_inference_banner.png",
    bgColor: "#0047ff",
    overview: "A scalable async ML inference API platform with dual authentication (JWT + API Key), Redis caching, real-time health monitoring, and a full CI/CD pipeline. Supports high-concurrency model serving with Grafana-level telemetry.",
    techStack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "Kubernetes", "JWT", "OAuth 2.0", "GitHub Actions", "Pytest", "Scikit-Learn"],
    whyItIsMade: "I wanted to understand how ML models are actually served in production — not just trained. Building the full inference pipeline with caching, auth, monitoring, and CI/CD taught me what separates a hobby project from enterprise-grade software.",
    githubUrl: "https://github.com/ayushsingh1524/ml-inference-platform",
    liveUrl: ""
  },
  {
    slug: "online-compiler",
    title: "ONLINE COMPILER",
    shortTitle: "COMPILER",
    category: "BROWSER IDE",
    description: "Browser-based code editor for Python, Java, and C++. Features auto-save, device locking, and shareable links with zero login required.",
    image: "/projects/concurrent_exec_engine_1780908121308.png",
    bannerImage: "/projects/exec_engine_banner.png",
    bgColor: "#ff3b00",
    overview: "A browser-based code editor and compiler supporting multiple languages including Python, Java, and C++. Codes auto-save in real time, are device-locked for security, and shareable via unique links — no login required.",
    techStack: ["React", "JavaScript", "HTML", "CSS", "REST API"],
    whyItIsMade: "As a student constantly switching between machines, I needed a simple, zero-friction place to write and run code without setting up an environment. Building it myself was the fastest way to get exactly what I needed.",
    githubUrl: "https://github.com/ayushsingh1524/Online_compiler_by_ayush",
    liveUrl: ""
  },
  {
    slug: "packet-analyzer",
    title: "PACKET ANALYZER",
    shortTitle: "PACKET ANALYZER",
    category: "FILE #105 - NET/SEC",
    description: "C++ intrusion detection engine using libpcap. Detects SYN floods, port scans, and ICMP floods with MITRE ATT&CK mapping.",
    image: "/projects/packet_analyzer_1780908132723.png",
    bannerImage: "/projects/packet_analyzer_banner.png",
    bgColor: "#00c94a",
    overview: "A real-time C++ intrusion detection engine using libpcap and POSIX sockets. Detects SYN floods, port scans, and ICMP floods with MITRE ATT&CK mapping, a live ncurses CLI dashboard, and structured JSON alert logging for SIEM integration.",
    techStack: ["C++", "libpcap", "POSIX Sockets", "pthreads", "ncurses", "CMake", "Valgrind", "AddressSanitizer", "MITRE ATT&CK"],
    whyItIsMade: "I wanted to go deep into how networks actually work at the packet level. Building a real IDS from scratch in C++ — with no frameworks, just raw sockets and memory-safe tooling — pushed me to understand TCP/IP, multithreading, and systems programming in a way no tutorial ever could.",
    githubUrl: "https://github.com/ayushsingh1524/network-packet-analyzer",
    liveUrl: ""
  },
  {
    slug: "cloud-threat-detection",
    title: "CLOUD THREAT DETECTION",
    shortTitle: "THREAT DETECT",
    category: "FILE #774 - PYTHON/TF",
    description: "End-to-end cloud security pipeline. Ingests AWS CloudTrail into Snowflake. SQL-based detections deployed via Terraform & CI/CD.",
    image: "/projects/cloud_threat_detection_1780908146526.png",
    bannerImage: "/projects/cloud_threat_banner.png",
    bgColor: "#9000ff",
    overview: "An end-to-end cloud security pipeline ingesting AWS CloudTrail and IAM logs into Snowflake, with SQL-based detections for privilege escalation, data exfiltration, and account compromise — all mapped to MITRE ATT&CK and deployed via Terraform and GitHub Actions CI/CD.",
    techStack: ["Python", "AWS CloudTrail", "Snowflake", "Terraform", "SQL", "YAML", "GitHub Actions", "Pytest", "MITRE ATT&CK", "AWS IAM", "SNS"],
    whyItIsMade: "Cloud security is one of the most critical and underbuilt areas in modern engineering. I built this to understand how threat detection works at scale — from raw log ingestion to automated alerting — and to show I can work across infrastructure, data engineering, and security simultaneously.",
    githubUrl: "https://github.com/ayushsingh1524/cloud-threat-detection",
    liveUrl: ""
  }
];
