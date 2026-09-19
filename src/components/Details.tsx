"use client";

import { motion } from "framer-motion";

export function Details() {
  const skills = [
    "Python", "C", "C++", "SQL", "JavaScript", "Docker", "Kubernetes", "AWS", 
    "Terraform", "Linux", "Prometheus", "CI/CD", "RLHF", "LLM Fine-tuning", 
    "Threat Detection", "MITRE ATT&CK", "Snowflake", "POSIX Sockets", "TCP/IP", "libpcap"
  ];

  const certs = [
    {
      name: "OCI 2025 Gen AI Professional",
      year: "2025",
      link: "/certs/oci-gen-ai-professional.pdf"
    },
    {
      name: "OCI 2025 AI Foundations Associate",
      year: "2025",
      link: "/certs/oci-ai-foundations.pdf"
    },
    {
      name: "AI Upskilling Certificate by Qualcomm",
      year: "2026",
      link: "/certs/qualcomm-ai-upskilling.pdf"
    }
  ];

  return (
    <section className="relative z-20 bg-[#121212] py-24 px-6 md:px-20 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: About & Experience */}
        <div className="lg:col-span-7 space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">About Me</h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Final year CS student with hands-on experience in distributed systems, cloud infrastructure, Kubernetes, Docker, AI/ML platforms, and security engineering. Passionate about architecting scalable backend systems, robust AI platforms, cloud security, and high-performance applications from the ground up.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">Experience</h2>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 transition-all hover:bg-white/10 hover:border-white/20">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h3 className="text-2xl font-semibold">Ethara AI</h3>
                <span className="text-white/50 text-sm tracking-wider uppercase mt-2 md:mt-0">Feb 2026 – Present</span>
              </div>
              <h4 className="text-indigo-400 font-medium mb-6">Security & AI Pipeline Engineer Intern</h4>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-500 mt-1.5">•</span>
                  Built sophisticated anomaly detection and continuous AI monitoring pipelines.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-500 mt-1.5">•</span>
                  Successfully reduced system false positive rate by 30%.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-500 mt-1.5">•</span>
                  Implemented RLHF workflows alongside comprehensive structured logging.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-500 mt-1.5">•</span>
                  Enhanced overall observability and internal monitoring architectures.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-500 mt-1.5">•</span>
                  Applied rigorous secure data handling and validation practices across endpoints.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Skills, Certs, Contact */}
        <div className="lg:col-span-5 space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">Certifications</h2>
            <ul className="space-y-4">
              {certs.map((cert, idx) => (
                <li key={idx}>
                  <a href={cert.link} target="_blank" rel="noreferrer" className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors group">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                      <span className="text-white/80 font-medium group-hover:text-white transition-colors">{cert.name}</span>
                    </div>
                    <span className="text-white/40 text-sm font-medium tracking-wider">{cert.year}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">Connect</h2>
            <div className="flex flex-col gap-4">
              <a href="https://github.com/ayushsingh1524" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors group">
                <span className="text-white/60 font-medium tracking-wide w-24">GITHUB</span>
                <span className="text-white/90 group-hover:text-indigo-400 transition-colors truncate">github.com/ayushsingh1524</span>
              </a>
              <a href="https://linkedin.com/in/ayush1015" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors group">
                <span className="text-white/60 font-medium tracking-wide w-24">LINKEDIN</span>
                <span className="text-white/90 group-hover:text-indigo-400 transition-colors truncate">linkedin.com/in/ayush1015</span>
              </a>
              <a href="mailto:singhayush9179@gmail.com" className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors group">
                <span className="text-white/60 font-medium tracking-wide w-24">EMAIL</span>
                <span className="text-white/90 group-hover:text-indigo-400 transition-colors truncate">singhayush9179@gmail.com</span>
              </a>
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">
                 <span className="text-white/60 font-medium tracking-wide w-24">LOCATION</span>
                 <span className="text-white/90 truncate">Kanpur, India</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
