"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const CERTS = [
  "OCI Generative AI Professional",
  "AWS Cloud Practitioner Essentials",
  "Google Cloud Generative AI Fundamentals"
];

// ─── RAIN ENGINE ────────────────────────────────────────────────────────
function Rain() {
  const [drops, setDrops] = useState<any[]>([]);

  useEffect(() => {
    setDrops(Array.from({ length: 80 }).map(() => ({
      left: Math.random() * 130 - 15,
      height: Math.random() * 60 + 40,
      duration: Math.random() * 0.5 + 0.3,
      delay: Math.random() * 3,
      opacity: Math.random() * 0.25 + 0.05
    })));
  }, []);

  if (drops.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
      {drops.map((drop, i) => (
        <motion.div
          key={i}
          className="absolute w-[1px] bg-gradient-to-b from-transparent via-[#94a3b8]/40 to-[#cbd5e1]"
          style={{
            left: `${drop.left}%`,
            height: drop.height,
            top: -100,
            rotate: 12,
            opacity: drop.opacity
          }}
          animate={{
            y: ["0vh", "115vh"],
            x: ["0vw", "-8vw"]
          }}
          transition={{
            duration: drop.duration,
            repeat: Infinity,
            ease: "linear",
            delay: drop.delay
          }}
        />
      ))}
    </div>
  );
}

// ─── FOG / MIST PARTICLES ──────────────────────────────────────────────
function FogLayer() {
  const [wisps, setWisps] = useState<any[]>([]);

  useEffect(() => {
    setWisps(Array.from({ length: 8 }).map(() => ({
      top: Math.random() * 100,
      width: Math.random() * 400 + 300,
      height: Math.random() * 80 + 40,
      opacity: Math.random() * 0.12 + 0.03,
      duration: Math.random() * 30 + 25,
      delay: Math.random() * 10,
    })));
  }, []);

  if (wisps.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
      {wisps.map((w, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            top: `${w.top}%`,
            width: w.width,
            height: w.height,
            background: "radial-gradient(ellipse, rgba(148,163,184,0.15) 0%, transparent 70%)",
            opacity: w.opacity,
            filter: "blur(30px)",
          }}
          animate={{
            x: ["-20vw", "120vw"],
          }}
          transition={{
            duration: w.duration,
            repeat: Infinity,
            ease: "linear",
            delay: w.delay,
          }}
        />
      ))}
    </div>
  );
}

// ─── WIND DEBRIS PARTICLES ─────────────────────────────────────────────
function WindDebris() {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    setParticles(Array.from({ length: 15 }).map(() => ({
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.4 + 0.1,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 6,
      yDrift: Math.random() * 80 - 40,
    })));
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#94a3b8]"
          style={{
            top: `${p.top}%`,
            left: "-5%",
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{
            x: ["0vw", "110vw"],
            y: [0, p.yDrift],
            opacity: [0, p.opacity, p.opacity, 0],
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

// ─── SPOTLIGHT SWEEP TEXT REVEAL ────────────────────────────────────────
function SpotlightText({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block text-[#fcf7e1]">
      {children}
      <motion.span
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%)",
          backgroundSize: "200% 100%",
        }}
        initial={{ backgroundPosition: "200% 0" }}
        whileInView={{ backgroundPosition: "-100% 0" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </span>
  );
}

// ─── LIGHTNING FLASH WITH SCREEN SHAKE ──────────────────────────────────
function Lightning() {
  return (
    <>
      {/* Primary flash */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none bg-white/80 mix-blend-overlay"
        animate={{
          opacity: [0, 0, 0, 0, 0.7, 0.2, 0, 0, 0, 0.5, 0.1, 0, 0, 0, 0, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.2, 0.35, 0.37, 0.38, 0.39, 0.41, 0.6, 0.75, 0.76, 0.77, 0.79, 0.85, 0.9, 0.95, 1]
        }}
      />
      {/* Secondary deep cloud glow */}
      <motion.div
        className="absolute inset-0 z-5 pointer-events-none mix-blend-screen"
        style={{
          background: "radial-gradient(circle at 70% 20%, rgba(148, 163, 184, 0.3) 0%, transparent 50%)"
        }}
        animate={{
          opacity: [0, 0, 0, 0.6, 0, 0, 0, 0, 0.4, 0, 0, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.3, 0.35, 0.36, 0.38, 0.5, 0.7, 0.75, 0.76, 0.78, 0.9, 1]
        }}
      />
    </>
  );
}

// ─── MAIN COMPONENT ─────────────────────────────────────────────────────
export function UnchartedStorm() {
  return (
    <section
      id="experience"
      className="relative min-h-screen bg-[#0d1117] text-[#8b949e] py-32 px-6 md:px-20 font-mythic overflow-hidden border-t border-[#1a1e24] selection:bg-[#fcf7e1] selection:text-black"
    >
      {/* ── ATMOSPHERE LAYERS ── */}

      {/* Base storm sky gradient */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, #0a0e14 0%, #111a27 25%, #162032 50%, #1a2740 70%, #0d1117 100%)"
        }}
      />

      {/* Rolling cloud layer 1 — slow heavy clouds */}
      <motion.div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 120% 60% at 30% 15%, rgba(30, 41, 59, 0.8) 0%, transparent 70%)"
        }}
        animate={{
          x: [0, 150, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Rolling cloud layer 2 — faster mid clouds */}
      <motion.div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 100% 50% at 70% 25%, rgba(51, 65, 85, 0.5) 0%, transparent 60%)"
        }}
        animate={{
          x: [0, -120, 0],
          y: [0, 20, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Rolling cloud layer 3 — low brooding clouds */}
      <motion.div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 40% at 50% 60%, rgba(15, 23, 42, 0.7) 0%, transparent 70%)"
        }}
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -20, 10, 0],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Cliff edge vignette — dark edges like looking over a precipice */}
      <div
        className="absolute inset-0 z-2 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, rgba(10, 14, 20, 0.7) 100%)"
        }}
      />

      {/* Bottom fog bank — the abyss below the cliff */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 z-3 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(10, 14, 20, 0.95) 0%, transparent 100%)"
        }}
      />

      <Lightning />
      <FogLayer />
      <WindDebris />
      <Rain />

      {/* ── CONTENT ── */}
      <div className="relative z-40 max-w-7xl mx-auto flex flex-col md:flex-row gap-20">

        {/* Left Column */}
        <div className="flex-1 space-y-24">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-widest mb-8 uppercase border-b border-[#fcf7e1]/20 pb-4 inline-block drop-shadow-[0_2px_10px_rgba(252,247,225,0.15)]">
              <SpotlightText>The Origin</SpotlightText>
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-[#c9d1d9] tracking-wide font-sans font-light border-l-2 border-[#fcf7e1]/30 pl-6 drop-shadow-md">
              Final year CS student with hands-on experience in distributed systems, cloud infrastructure, Kubernetes, Docker, AI/ML platforms, and security engineering. Passionate about architecting scalable backend systems, robust AI platforms, cloud security, and high-performance applications from the ground up.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-widest mb-12 uppercase border-b border-[#fcf7e1]/20 pb-4 inline-block drop-shadow-[0_2px_10px_rgba(252,247,225,0.15)]">
              <SpotlightText>The Expedition</SpotlightText>
            </h2>
            <div className="relative pl-8 border-l border-[#fcf7e1]/30 group">
              <div className="absolute top-0 -left-[5px] w-[9px] h-[9px] bg-[#fcf7e1] rotate-45 shadow-[0_0_10px_#fcf7e1] group-hover:scale-125 transition-transform duration-500 ease-out" />

              <h3 className="text-3xl font-bold text-[#fcf7e1] tracking-wider mb-2 drop-shadow-lg">Ethara AI</h3>
              <div className="text-[#c9d1d9] text-base uppercase tracking-widest mb-6 font-bold">Security & AI Pipeline Engineer Intern</div>
              <p className="text-xs tracking-widest opacity-50 uppercase mb-8 font-sans text-white">Feb 2026 – Present</p>

              <ul className="space-y-3 text-base text-[#c9d1d9] font-sans font-light">
                <li className="flex items-start gap-4">
                  <span className="text-[#fcf7e1] mt-1 text-sm font-bold">✧</span>
                  Built anomaly detection and AI monitoring pipelines.
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#fcf7e1] mt-1 text-sm font-bold">✧</span>
                  Reduced false positive rate by <span className="text-white font-bold">30%</span>.
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#fcf7e1] mt-1 text-sm font-bold">✧</span>
                  Worked with RLHF workflows and structured logging.
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#fcf7e1] mt-1 text-sm font-bold">✧</span>
                  Improved observability and monitoring systems.
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#fcf7e1] mt-1 text-sm font-bold">✧</span>
                  Applied secure data handling and validation practices.
                </li>
              </ul>
            </div>
          </motion.div>

        </div>

        {/* Right Column */}
        <div className="flex-1 space-y-24">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-widest mb-12 uppercase border-b border-[#fcf7e1]/20 pb-4 inline-block drop-shadow-[0_2px_10px_rgba(252,247,225,0.15)]">
              <SpotlightText>The Certificates</SpotlightText>
            </h2>
            <ul className="space-y-6">
              {CERTS.map((cert, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-center gap-6 p-6 border border-[#fcf7e1]/10 bg-[#161b22]/80 backdrop-blur-sm hover:bg-[#1f242c] transition-all relative group overflow-hidden shadow-lg"
                  whileHover={{ x: 8, borderColor: "rgba(252,247,225,0.3)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#fcf7e1] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-2 h-2 rounded-full bg-[#fcf7e1]/50 shadow-[0_0_8px_rgba(252,247,225,0.4)]" />
                  <span className="text-xl tracking-wide text-[#c9d1d9] relative z-10">{cert}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-widest mb-12 uppercase border-b border-[#fcf7e1]/20 pb-4 inline-block drop-shadow-[0_2px_10px_rgba(252,247,225,0.15)]">
              <SpotlightText>The Map</SpotlightText>
            </h2>
            <div className="space-y-6 font-sans">
              <motion.a
                href="https://github.com/ayushsingh1524"
                className="block p-6 border border-[#fcf7e1]/10 bg-[#161b22]/80 backdrop-blur-sm group relative overflow-hidden shadow-lg"
                whileHover={{ x: 8, borderColor: "rgba(252,247,225,0.3)" }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#fcf7e1]/5 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out" />
                <div className="relative z-10 text-xs tracking-widest uppercase text-[#fcf7e1]/70 mb-2 font-mythic">Archive</div>
                <div className="relative z-10 text-xl tracking-wide text-[#c9d1d9] group-hover:text-[#fcf7e1] transition-colors">github.com/ayushsingh1524</div>
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/ayush1015"
                className="block p-6 border border-[#fcf7e1]/10 bg-[#161b22]/80 backdrop-blur-sm group relative overflow-hidden shadow-lg"
                whileHover={{ x: 8, borderColor: "rgba(252,247,225,0.3)" }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#fcf7e1]/5 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out" />
                <div className="relative z-10 text-xs tracking-widest uppercase text-[#fcf7e1]/70 mb-2 font-mythic">Network</div>
                <div className="relative z-10 text-xl tracking-wide text-[#c9d1d9] group-hover:text-[#fcf7e1] transition-colors">linkedin.com/in/ayush1015</div>
              </motion.a>
              <motion.a
                href="mailto:singhayush9179@gmail.com"
                className="block p-6 border border-[#fcf7e1]/10 bg-[#161b22]/80 backdrop-blur-sm group relative overflow-hidden shadow-lg"
                whileHover={{ x: 8, borderColor: "rgba(252,247,225,0.3)" }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#fcf7e1]/5 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out" />
                <div className="relative z-10 text-xs tracking-widest uppercase text-[#fcf7e1]/70 mb-2 font-mythic">Dispatch</div>
                <div className="relative z-10 text-xl tracking-wide text-[#c9d1d9] group-hover:text-[#fcf7e1] transition-colors">singhayush9179@gmail.com</div>
              </motion.a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
