"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CERTS = [
  "OCI Generative AI Professional",
  "AWS Cloud Practitioner Essentials",
  "Google Cloud Generative AI Fundamentals"
];

// Reusable component for floating gold particles
function GoldDust() {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: 20 }).map(() => ({
      size: Math.random() * 4 + 1,
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      xOffset: [0, Math.random() * 50 - 25, Math.random() * 50 - 25]
    }));
    setParticles(generatedParticles);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#d4af37] opacity-60 shadow-[0_0_10px_#d4af37]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.initialX}%`,
            top: `${p.initialY}%`,
          }}
          animate={{
            y: [0, -100, -200],
            x: p.xOffset,
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

export function WukongJourney() {
  return (
    <section className="relative min-h-screen bg-[#080C0B] text-[#e0e0e0] py-32 px-6 md:px-20 font-mythic overflow-hidden border-t border-[#1a211e]">
      
      {/* Background Mist Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#11241a] via-[#080C0B] to-[#080C0B] opacity-50 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#1a1c0d] via-transparent to-transparent opacity-40 z-0 pointer-events-none" />
      
      <GoldDust />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
        
        {/* Left Column: About & Experience (The Journey) */}
        <div className="flex-1 space-y-24">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-widest text-[#d4af37] mb-8 uppercase drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              The Origin
            </h2>
            <p className="text-lg md:text-xl leading-relaxed opacity-80 tracking-wide font-sans font-light">
              Final year CS student with hands-on experience in distributed systems, cloud infrastructure, Kubernetes, Docker, AI/ML platforms, and security engineering. Passionate about architecting scalable backend systems, robust AI platforms, cloud security, and high-performance applications from the ground up.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-widest text-[#d4af37] mb-12 uppercase drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              The Path
            </h2>
            <div className="relative pl-8 border-l border-[#d4af37]/30">
              {/* Timeline dot */}
              <div className="absolute top-0 -left-[5px] w-[11px] h-[11px] rounded-full bg-[#d4af37] shadow-[0_0_10px_#d4af37]" />
              
              <h3 className="text-3xl font-bold text-[#f5f5f5] tracking-wider mb-2">Ethara AI</h3>
              <div className="text-[#d4af37] text-lg uppercase tracking-widest mb-6">Security & AI Pipeline Engineer Intern</div>
              <p className="text-sm tracking-widest opacity-50 uppercase mb-8 font-sans">Feb 2026 – Present</p>
              
              <ul className="space-y-4 text-lg opacity-80 font-sans font-light">
                <li className="flex items-start gap-4">
                  <span className="text-[#d4af37] mt-1 text-sm">✧</span>
                  Built anomaly detection and AI monitoring pipelines.
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#d4af37] mt-1 text-sm">✧</span>
                  Reduced false positive rate by 30%.
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#d4af37] mt-1 text-sm">✧</span>
                  Worked with RLHF workflows and structured logging.
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#d4af37] mt-1 text-sm">✧</span>
                  Improved observability and monitoring systems.
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#d4af37] mt-1 text-sm">✧</span>
                  Applied secure data handling and validation practices.
                </li>
              </ul>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Certifications & Contact (The Relics) */}
        <div className="flex-1 space-y-24">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-widest text-[#d4af37] mb-12 uppercase drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              The Relics
            </h2>
            <ul className="space-y-6">
              {CERTS.map((cert, idx) => (
                <li key={idx} className="flex items-center gap-6 p-6 border border-[#d4af37]/20 bg-[#d4af37]/5 backdrop-blur-sm hover:bg-[#d4af37]/10 transition-colors">
                  <div className="w-8 h-8 rounded-full border border-[#d4af37] flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                    <div className="w-3 h-3 bg-[#d4af37] rounded-full" />
                  </div>
                  <span className="text-xl tracking-wide opacity-90">{cert}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-widest text-[#d4af37] mb-12 uppercase drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              Summon
            </h2>
            <div className="space-y-6 font-sans">
              <a href="https://github.com/ayushsingh1524" className="block p-6 border border-white/10 hover:border-[#d4af37]/50 transition-colors bg-white/5 backdrop-blur-sm group">
                <div className="text-xs tracking-widest uppercase text-[#d4af37] mb-2 font-mythic">Archive</div>
                <div className="text-xl tracking-wide group-hover:text-[#d4af37] transition-colors">github.com/ayushsingh1524</div>
              </a>
              <a href="https://linkedin.com/in/ayush1015" className="block p-6 border border-white/10 hover:border-[#d4af37]/50 transition-colors bg-white/5 backdrop-blur-sm group">
                <div className="text-xs tracking-widest uppercase text-[#d4af37] mb-2 font-mythic">Network</div>
                <div className="text-xl tracking-wide group-hover:text-[#d4af37] transition-colors">linkedin.com/in/ayush1015</div>
              </a>
              <a href="mailto:singhayush9179@gmail.com" className="block p-6 border border-white/10 hover:border-[#d4af37]/50 transition-colors bg-white/5 backdrop-blur-sm group">
                <div className="text-xs tracking-widest uppercase text-[#d4af37] mb-2 font-mythic">Message</div>
                <div className="text-xl tracking-wide group-hover:text-[#d4af37] transition-colors">singhayush9179@gmail.com</div>
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
