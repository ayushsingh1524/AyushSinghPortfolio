"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

const PROJECTS = [
  {
    title: "ML Inference Platform",
    category: "Kubernetes & AWS",
    description: "Architected a containerized model serving platform with robust K8s autoscaling. Achieved consistent sub-200ms latency under 100+ concurrent requests.",
    link: "#",
  },
  {
    title: "Concurrent Execution Engine",
    category: "C++ & Linux",
    description: "Engineered a sandboxed Docker-based code execution engine utilizing Linux cgroups for strict resource isolation. Zero crash rate across 30+ requests.",
    link: "#",
  },
  {
    title: "TCP/IP Packet Analyzer",
    category: "Networking & Security",
    description: "Developed a real-time packet capture and threat monitoring tool using POSIX sockets and libpcap. Implemented MITRE ATT&CK mapping.",
    link: "#",
  },
  {
    title: "Cloud Threat Detection",
    category: "Python & Terraform",
    description: "Constructed a highly scalable cloud threat detection pipeline processing AWS CloudTrail logs via Snowflake. Automated CI/CD via GitHub Actions.",
    link: "#",
  }
];

const SKILLS = [
  "Python", "C", "C++", "SQL", "JavaScript", "Docker", "Kubernetes", "AWS", 
  "Terraform", "Linux", "Prometheus", "CI/CD", "RLHF", "LLM Fine-tuning", 
  "Threat Detection", "MITRE ATT&CK", "Snowflake", "POSIX Sockets", "TCP/IP", "libpcap"
];

const CERTS = [
  "OCI Generative AI Professional",
  "AWS Cloud Practitioner Essentials",
  "Google Cloud Generative AI Fundamentals"
];

export function Notebook() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 4;

  const next = () => setCurrentPage((p) => Math.min(p + 1, totalPages - 1));
  const prev = () => setCurrentPage((p) => Math.max(p - 1, 0));

  const pageVariants = {
    initial: (direction: number) => ({
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0,
      z: -100,
    }),
    active: {
      rotateY: 0,
      opacity: 1,
      z: 0,
      transition: { duration: 0.8, ease: [0.64, 0.04, 0.35, 1] as const }
    },
    exit: (direction: number) => ({
      rotateY: direction < 0 ? 90 : -90,
      opacity: 0,
      z: -100,
      transition: { duration: 0.8, ease: [0.64, 0.04, 0.35, 1] as const }
    })
  };

  return (
    <section className="relative min-h-screen bg-[#121212] py-32 px-6 md:px-20 text-white overflow-hidden flex items-center justify-center">
      
      {/* 3D Floating Artifacts */}
      <motion.div 
        animate={{ rotate: 360, y: [0, -30, 0] }} 
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute top-20 left-10 md:left-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div 
        animate={{ rotate: -360, x: [0, 50, 0] }} 
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        className="absolute bottom-20 right-10 md:right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
      />
      
      <div className="relative w-full max-w-5xl" style={{ perspective: 1500 }}>
        
        {/* Notebook Container */}
        <div className="relative w-full h-[600px] md:h-[650px] bg-[#1a1a1a]/80 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden preserve-3d">
          
          <AnimatePresence mode="wait" custom={currentPage}>
            <motion.div
              key={currentPage}
              custom={currentPage}
              variants={pageVariants}
              initial="initial"
              animate="active"
              exit="exit"
              className="absolute inset-0 p-8 md:p-16 flex flex-col origin-left"
            >
              {/* PAGE CONTENT SWITCH */}
              {currentPage === 0 && (
                <div className="flex-1 flex flex-col justify-center items-center text-center">
                  <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent drop-shadow-lg">
                    Learn More About Me
                  </h2>
                  <p className="text-lg md:text-xl text-white/60 max-w-2xl">
                    Flip through to explore my engineering projects, experience, skills, and certifications.
                  </p>
                </div>
              )}

              {currentPage === 1 && (
                <div className="flex-1 h-full flex flex-col">
                  <h3 className="text-3xl font-bold mb-8 tracking-tight">Selected Engineering Work</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 overflow-y-auto pr-4 custom-scrollbar pb-16">
                    {PROJECTS.map((p, i) => (
                      <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                        <div className="text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2">{p.category}</div>
                        <h4 className="text-xl font-bold mb-2">{p.title}</h4>
                        <p className="text-white/60 text-sm leading-relaxed">{p.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentPage === 2 && (
                <div className="flex-1 flex flex-col md:flex-row gap-12 overflow-y-auto pb-16 custom-scrollbar">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-6 tracking-tight">About Me</h3>
                    <p className="text-white/70 leading-relaxed text-lg">
                      Final year CS student with hands-on experience in distributed systems, cloud infrastructure, Kubernetes, Docker, AI/ML platforms, and security engineering. Passionate about architecting scalable backend systems, robust AI platforms, cloud security, and high-performance applications from the ground up.
                    </p>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-6 tracking-tight">Experience</h3>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-inner shadow-white/5">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-bold">Ethara AI</h4>
                        <span className="text-white/50 text-xs tracking-wider uppercase">Feb 2026 – Present</span>
                      </div>
                      <div className="text-indigo-400 font-medium mb-4 text-sm">Security & AI Pipeline Engineer Intern</div>
                      <ul className="space-y-2 text-white/70 text-sm">
                        <li>• Built anomaly detection and AI monitoring pipelines</li>
                        <li>• Reduced false positive rate by 30%</li>
                        <li>• Worked with RLHF workflows and structured logging</li>
                        <li>• Improved observability and monitoring systems</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {currentPage === 3 && (
                <div className="flex-1 flex flex-col md:flex-row gap-12 overflow-y-auto pb-16 custom-scrollbar">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-6 tracking-tight">Skills & Tech</h3>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {SKILLS.map(skill => (
                         <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-sm text-white/80 shadow-sm">
                           {skill}
                         </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 tracking-tight">Certifications</h3>
                    <ul className="space-y-3 text-white/70 text-sm">
                      {CERTS.map(c => <li key={c} className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"/> {c}</li>)}
                    </ul>
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-8 tracking-tight">Let's Connect</h3>
                    <div className="space-y-4">
                      <a href="https://github.com/ayushsingh1524" className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all shadow-md">
                        <span className="text-white/90 font-medium">github.com/ayushsingh1524</span>
                      </a>
                      <a href="https://linkedin.com/in/ayush1015" className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all shadow-md">
                        <span className="text-white/90 font-medium">linkedin.com/in/ayush1015</span>
                      </a>
                      <a href="mailto:singhayush9179@gmail.com" className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all shadow-md">
                        <span className="text-white/90 font-medium truncate">singhayush9179@gmail.com</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center gap-8 z-50">
            <button 
              onClick={() => setCurrentPage(p => p - 1)}
              disabled={currentPage === 0}
              className="p-3 rounded-full bg-black/40 hover:bg-black/60 disabled:opacity-30 disabled:cursor-not-allowed transition-colors border border-white/10 backdrop-blur-md"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="text-white/50 text-sm font-medium tracking-widest bg-black/40 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
              PAGE {currentPage + 1} OF {totalPages}
            </div>
            <button 
              onClick={() => setCurrentPage(p => p + 1)}
              disabled={currentPage === totalPages - 1}
              className="p-3 rounded-full bg-black/40 hover:bg-black/60 disabled:opacity-30 disabled:cursor-not-allowed transition-colors border border-white/10 backdrop-blur-md"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* 3D Notebook Binding effect */}
        <div className="absolute top-0 bottom-0 left-0 w-2 bg-gradient-to-r from-white/20 to-transparent z-40 rounded-l-3xl pointer-events-none" />
      </div>
    </section>
  );
}
