"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const PROJECTS = [
  {
    title: "ML INFERENCE PLATFORM",
    category: "FILE #892 - K8S/AWS",
    description: "Containerized model serving platform. K8s autoscaling. Sub-200ms latency. 100+ concurrent requests. Prometheus integration.",
    rotation: -2,
    x: 10,
    y: 20
  },
  {
    title: "CONCURRENT EXEC. ENGINE",
    category: "FILE #441 - C++/LINUX",
    description: "Sandboxed Docker code execution. Linux cgroups isolation. Zero crash rate across 30+ requests. Race conditions resolved.",
    rotation: 3,
    x: -20,
    y: 40
  },
  {
    title: "PACKET ANALYZER",
    category: "FILE #105 - NET/SEC",
    description: "Real-time capture via POSIX/libpcap. Threat monitoring. MITRE ATT&CK mapping. Live CLI dashboard.",
    rotation: -4,
    x: 30,
    y: -10
  },
  {
    title: "CLOUD THREAT DETECTION",
    category: "FILE #774 - PYTHON/TF",
    description: "Scalable detection pipeline. AWS CloudTrail via Snowflake. Detections-as-code. CI/CD automated via GitHub Actions.",
    rotation: 2,
    x: -15,
    y: 10
  }
];

const SKILLS = [
  "PYTHON", "C", "C++", "SQL", "JS", "DOCKER", "KUBERNETES", "AWS",
  "TERRAFORM", "LINUX", "PROMETHEUS", "CI/CD", "RLHF", "LLM",
  "THREAT DET.", "MITRE", "SNOWFLAKE", "POSIX", "TCP/IP"
];

export function MindPlace() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const containerRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseLeave = () => {
    // Move the flashlight off-screen when the mouse leaves the section
    setMousePosition({ x: -1000, y: -1000 });
  };

  return (
    <section
      id="projects"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen bg-[#050505] text-white overflow-hidden py-32 px-6 md:px-20 font-typewriter selection:bg-red-900 selection:text-white"
    >
      {/* Film Grain */}
      <div className="film-grain" />

      {/* Flashlight Overlay - scoped to absolute inset-0 of this section only */}
      <div
        className="absolute inset-0 pointer-events-none z-40 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 350px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, rgba(0,0,0,0.85) 100%)`
        }}
      />

      <div className="relative z-20 max-w-7xl mx-auto flex flex-col items-center">

        {/* Board Title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="mb-24 flex flex-col items-center"
        >
          <div className="text-red-700 text-sm tracking-[0.5em] font-bold mb-2">EVIDENCE BOARD</div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase text-[#ddd] opacity-80 border-b-2 border-red-900/50 pb-4">
            SELECTED PROJECTS
          </h2>
        </motion.div>

        {/* Case Files (Projects) */}
        <div className="relative w-full">

          {/* Red String overlay (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-10 hidden md:block">
            <line x1="20%" y1="10%" x2="50%" y2="50%" stroke="#8b0000" strokeWidth="2" />
            <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#8b0000" strokeWidth="2" />
            <line x1="50%" y1="50%" x2="50%" y2="80%" stroke="#8b0000" strokeWidth="2" />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-20 max-w-6xl mx-auto">
            {PROJECTS.map((p, i) => (
              <motion.div
                key={i}
                initial={{ rotate: p.rotation * 2, opacity: 0, y: 30 }}
                whileInView={{ rotate: p.rotation, opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ transform: `translate(${p.x}px, ${p.y}px)` }}
                className="bg-[#e8e6df] text-[#1a1a1a] p-6 shadow-xl relative border border-[#ccc]"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-yellow-900/30 -rotate-2" />
                <div className="text-red-800 text-xs font-bold uppercase tracking-widest mb-2 border-b border-red-900/20 pb-1">{p.category}</div>
                <h4 className="text-xl font-bold mb-4 uppercase">{p.title}</h4>
                <p className="text-sm leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Soft fade out at bottom to transition to Wukong */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent z-50 pointer-events-none" />
    </section>
  );
}
