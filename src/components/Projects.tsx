"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    title: "ML Inference Platform",
    category: "Kubernetes & AWS",
    description: "Architected a containerized model serving platform with robust K8s autoscaling. Achieved consistent sub-200ms latency under 100+ concurrent requests, integrating Prometheus for deep observability.",
    link: "#",
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Concurrent Execution Engine",
    category: "C++ & Linux",
    description: "Engineered a sandboxed Docker-based code execution engine utilizing Linux cgroups for strict resource isolation. Resolved complex race conditions to maintain a zero crash rate across 30+ concurrent requests.",
    link: "#",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "TCP/IP Packet Analyzer",
    category: "Networking & Security",
    description: "Developed a real-time packet capture and threat monitoring tool using POSIX sockets and libpcap. Implemented anomaly detection mapped to MITRE ATT&CK, monitored via a live CLI dashboard.",
    link: "#",
    color: "from-orange-500/20 to-rose-500/20"
  },
  {
    title: "Cloud Threat Detection",
    category: "Python & Terraform",
    description: "Constructed a highly scalable cloud threat detection pipeline processing AWS CloudTrail logs via Snowflake. Automated CI/CD via GitHub Actions to systematically improve precision and recall metrics.",
    link: "#",
    color: "from-indigo-500/20 to-blue-500/20"
  }
];

export function Projects() {
  return (
    <section className="relative z-20 bg-[#121212] py-24 px-6 md:px-20 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Selected Engineering Work</h2>
          <p className="text-white/60 mt-4 text-lg md:text-xl max-w-2xl">
            A showcase of high-performance backend systems, AI infrastructure, and rigorous security tooling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {PROJECTS.map((project, i) => (
            <motion.a
              key={i}
              href={project.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col justify-end overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-8 h-[400px] transition-all hover:bg-white/10 hover:border-white/20"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm font-medium tracking-wider text-white/50 uppercase">
                    {project.category}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-3">{project.title}</h3>
                <p className="text-white/70 line-clamp-3">{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
