"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const TECH_CATEGORIES = [
  {
    name: "Languages",
    color: "#dc2626",
    glow: "rgba(220, 38, 38, 0.3)",
    items: [
      { name: "Python", level: 95 },
      { name: "C++", level: 85 },
      { name: "C", level: 80 },
      { name: "JavaScript", level: 75 },
      { name: "SQL", level: 80 },
    ]
  },
  {
    name: "Cloud & DevOps",
    color: "#fcf7e1",
    glow: "rgba(252, 247, 225, 0.3)",
    items: [
      { name: "AWS", level: 85 },
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 85 },
      { name: "Terraform", level: 75 },
      { name: "CI/CD", level: 80 },
    ]
  },
  {
    name: "AI / ML",
    color: "#94a3b8",
    glow: "rgba(148, 163, 184, 0.3)",
    items: [
      { name: "RLHF", level: 80 },
      { name: "LLM Ops", level: 75 },
      { name: "Model Serving", level: 85 },
      { name: "Prometheus", level: 80 },
      { name: "Observability", level: 85 },
    ]
  },
  {
    name: "Security & Net",
    color: "#dc2626",
    glow: "rgba(220, 38, 38, 0.3)",
    items: [
      { name: "Threat Det.", level: 85 },
      { name: "MITRE ATT&CK", level: 80 },
      { name: "POSIX", level: 75 },
      { name: "TCP/IP", level: 80 },
      { name: "Linux", level: 90 },
    ]
  }
];

// ─── FLOATING EMBERS (Alan Wake residue) ────────────────────────────────
function TechEmbers() {
  const [sparks, setSparks] = useState<any[]>([]);

  useEffect(() => {
    setSparks(Array.from({ length: 12 }).map(() => ({
      left: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 5,
      xDrift: Math.random() * 40 - 20,
    })));
  }, []);

  if (sparks.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
      {sparks.map((s, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${s.left}%`,
            bottom: -10,
            width: s.size,
            height: s.size,
            background: i % 2 === 0 
              ? "radial-gradient(circle, #dc2626, transparent)" 
              : "radial-gradient(circle, #f59e0b, transparent)",
            boxShadow: i % 2 === 0 
              ? "0 0 6px #dc2626" 
              : "0 0 6px #f59e0b",
          }}
          animate={{
            y: [0, -(Math.random() * 500 + 200)],
            x: [0, s.xDrift],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            ease: "easeOut",
            delay: s.delay,
          }}
        />
      ))}
    </div>
  );
}

// ─── SKILL BAR ──────────────────────────────────────────────────────────
function SkillBar({ name, level, color, glow, delay }: { name: string; level: number; color: string; glow: string; delay: number }) {
  return (
    <motion.div
      className="mb-4 last:mb-0"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-typewriter text-[#c9d1d9] tracking-wide">{name}</span>
        <span className="text-xs font-sans text-[#8b949e]">{level}%</span>
      </div>
      <div className="w-full h-1.5 bg-[#111] rounded-full overflow-hidden border border-[#222]">
        <motion.div
          className="h-full rounded-full"
          style={{ 
            background: `linear-gradient(90deg, ${color}66, ${color})`,
            boxShadow: `0 0 12px ${glow}`,
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2, duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <section id="tech-stack" className="relative min-h-screen bg-[#080808] text-[#c9d1d9] py-32 px-6 md:px-20 overflow-hidden">

      {/* ── ATMOSPHERE: Blend of both worlds ── */}

      {/* Film grain from Alan Wake */}
      <div className="film-grain" />

      {/* Dark sky gradient from Uncharted */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, #0d1117 0%, #080808 30%, #0a0810 60%, #080808 100%)"
        }}
      />

      {/* Alan Wake red mist — subtle top left */}
      <motion.div 
        className="absolute inset-0 z-1 pointer-events-none mix-blend-screen"
        style={{
          background: "radial-gradient(ellipse 50% 40% at 15% 20%, rgba(127, 29, 29, 0.12) 0%, transparent 70%)"
        }}
        animate={{ opacity: [0.3, 0.15, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Uncharted storm cloud — subtle bottom right */}
      <motion.div 
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 80% 80%, rgba(30, 41, 59, 0.2) 0%, transparent 60%)"
        }}
        animate={{ x: [0, -40, 0], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid lines — tactical HUD */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(252,247,225,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(252,247,225,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Lightning flash */}
      <motion.div 
        className="absolute inset-0 z-2 pointer-events-none bg-white/50 mix-blend-overlay"
        animate={{
          opacity: [0, 0, 0, 0.3, 0, 0, 0, 0, 0.2, 0, 0, 0]
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.4, 0.55, 0.56, 0.58, 0.7, 0.85, 0.88, 0.89, 0.91, 0.95, 1]
        }}
      />

      <TechEmbers />

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-[0.5em] uppercase text-red-800/60 font-typewriter block mb-4">
            // CLASSIFIED ARSENAL
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-mythic tracking-wider uppercase text-[#fcf7e1] drop-shadow-[0_0_15px_rgba(252,247,225,0.1)]">
            Tech Stack
          </h2>
          <div className="mt-6 mx-auto h-[1px] w-32 bg-gradient-to-r from-transparent via-red-800/40 to-transparent" />
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {TECH_CATEGORIES.map((cat, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActiveCategory(activeCategory === idx ? null : idx)}
              className="relative px-5 py-2.5 text-xs font-typewriter font-medium tracking-widest uppercase border transition-all duration-300"
              style={{
                borderColor: activeCategory === idx ? cat.color : "rgba(255,255,255,0.08)",
                color: activeCategory === idx ? cat.color : "#8b949e",
                background: activeCategory === idx ? `${cat.color}10` : "#0f0f0f",
                boxShadow: activeCategory === idx ? `0 0 15px ${cat.glow}` : "none",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_CATEGORIES.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              className="relative p-6 border bg-[#0f0f0f]/80 backdrop-blur-sm overflow-hidden group"
              style={{
                borderColor: activeCategory === catIdx ? `${cat.color}50` : "rgba(255,255,255,0.05)",
                boxShadow: activeCategory === catIdx ? `0 0 20px ${cat.glow}` : "none",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.15, duration: 0.8 }}
              whileHover={{ 
                borderColor: `${cat.color}60`,
                y: -4,
              }}
            >
              {/* Glow line at top */}
              <div 
                className="absolute top-0 left-0 right-0 h-[2px] opacity-40 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(90deg, transparent, ${cat.color}, transparent)` }}
              />

              {/* Corner accent */}
              <div 
                className="absolute top-0 right-0 w-6 h-6 opacity-15 group-hover:opacity-30 transition-opacity"
                style={{
                  background: `linear-gradient(135deg, transparent 50%, ${cat.color} 50%)`,
                }}
              />

              {/* Category Name */}
              <h3 
                className="text-base font-bold font-typewriter tracking-widest uppercase mb-6"
                style={{ color: cat.color }}
              >
                {cat.name}
              </h3>

              {/* Skill Bars */}
              {cat.items.map((item, itemIdx) => (
                <SkillBar
                  key={itemIdx}
                  name={item.name}
                  level={item.level}
                  color={cat.color}
                  glow={cat.glow}
                  delay={catIdx * 0.15 + itemIdx * 0.08}
                />
              ))}

              {/* Hover glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${cat.glow} 0%, transparent 70%)`,
                  opacity: 0.05,
                }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
