"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// ─── EMBER PARTICLES (Alan Wake fire/dark residue) ──────────────────────
function Embers() {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    setParticles(Array.from({ length: 25 }).map(() => ({
      left: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 6 + 5,
      delay: Math.random() * 4,
      xDrift: Math.random() * 60 - 30,
    })));
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            bottom: -20,
            width: p.size,
            height: p.size,
            background: i % 3 === 0 
              ? "radial-gradient(circle, #dc2626 0%, #991b1b 60%, transparent 100%)" 
              : "radial-gradient(circle, #f59e0b 0%, #d97706 60%, transparent 100%)",
            boxShadow: i % 3 === 0 
              ? "0 0 8px #dc2626, 0 0 15px rgba(220,38,38,0.4)" 
              : "0 0 8px #f59e0b, 0 0 15px rgba(245,158,11,0.4)",
          }}
          animate={{
            y: [0, -(Math.random() * 400 + 300)],
            x: [0, p.xDrift],
            opacity: [0, 0.9, 0.7, 0],
            scale: [1, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

// ─── RAIN DROPS (Uncharted storm bleeding in) ──────────────────────────
function TransitionRain() {
  const [drops, setDrops] = useState<any[]>([]);

  useEffect(() => {
    setDrops(Array.from({ length: 30 }).map(() => ({
      left: Math.random() * 130 - 15,
      height: Math.random() * 50 + 30,
      duration: Math.random() * 0.5 + 0.4,
      delay: Math.random() * 4,
      opacity: Math.random() * 0.15 + 0.03,
    })));
  }, []);

  if (drops.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {drops.map((d, i) => (
        <motion.div
          key={i}
          className="absolute w-[1px] bg-gradient-to-b from-transparent to-[#94a3b8]"
          style={{
            left: `${d.left}%`,
            height: d.height,
            top: -80,
            rotate: 12,
            opacity: d.opacity,
          }}
          animate={{
            y: ["0vh", "115vh"],
            x: ["0vw", "-6vw"],
          }}
          transition={{
            duration: d.duration,
            repeat: Infinity,
            ease: "linear",
            delay: d.delay,
          }}
        />
      ))}
    </div>
  );
}

export function RealmBridge() {
  return (
    <section id="journey" className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#050505]">
      
      {/* ── BACKGROUND LAYERS ── */}

      {/* Base gradient blending both palettes */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(180deg, #050505 0%, #0a0810 15%, #0c0a12 30%, #0d0e18 50%, #0d1020 70%, #0d1117 100%)"
        }}
      />

      {/* Alan Wake film grain */}
      <div className="film-grain" />

      {/* Alan Wake red mist — fading out as you scroll */}
      <motion.div 
        className="absolute inset-0 z-1 pointer-events-none mix-blend-screen"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(153, 27, 27, 0.2) 0%, transparent 70%)"
        }}
        animate={{ 
          opacity: [0.4, 0.15, 0.4],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Uncharted storm cloud creeping in from below */}
      <motion.div 
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 100% 50% at 70% 80%, rgba(30, 41, 59, 0.35) 0%, transparent 60%)"
        }}
        animate={{ 
          opacity: [0.15, 0.45, 0.15],
          x: [0, -50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Secondary storm cloud */}
      <motion.div 
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 40% 70%, rgba(51, 65, 85, 0.2) 0%, transparent 50%)"
        }}
        animate={{ 
          x: [0, 80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Lightning flash — distant, deep inside clouds */}
      <motion.div 
        className="absolute inset-0 z-2 pointer-events-none bg-white/50 mix-blend-overlay"
        animate={{
          opacity: [0, 0, 0, 0, 0.4, 0, 0, 0, 0, 0.25, 0, 0]
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.3, 0.5, 0.55, 0.56, 0.58, 0.7, 0.85, 0.87, 0.88, 0.9, 1]
        }}
      />

      {/* Vignette */}
      <div 
        className="absolute inset-0 z-3 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, transparent 0%, rgba(5, 5, 5, 0.6) 100%)"
        }}
      />

      {/* Top fade from Alan Wake black */}
      <div 
        className="absolute top-0 left-0 right-0 h-1/4 z-5 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, #050505 0%, transparent 100%)"
        }}
      />

      {/* Bottom fade into Uncharted storm */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1/4 z-5 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #0d1117 0%, transparent 100%)"
        }}
      />

      {/* ── PARTICLE SYSTEMS ── */}
      <Embers />
      <TransitionRain />

      {/* ── CONTENT ── */}
      <div className="relative z-20 text-center px-6 max-w-3xl">
        
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="text-xs md:text-sm tracking-[0.5em] uppercase text-[#fcf7e1]/40 font-sans">
            Beyond the darkness
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-mythic tracking-wider uppercase text-[#fcf7e1]/90 drop-shadow-[0_0_20px_rgba(252,247,225,0.1)] leading-tight"
        >
          The Full<br />
          <span className="text-[#fcf7e1]/60">Journey</span>
        </motion.h2>

        {/* Sub-info */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="mt-8 text-sm md:text-base text-[#8b949e] tracking-widest uppercase font-sans"
        >
          Experience · Certifications · Connect
        </motion.p>

        {/* Divider line */}
        <motion.div 
          className="mx-auto mt-10 h-[1px] bg-gradient-to-r from-transparent via-[#fcf7e1]/25 to-transparent"
          initial={{ width: 0 }}
          whileInView={{ width: "80%" }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
        />

        {/* Animated scroll hint */}
        <motion.div
          className="mt-12 flex flex-col items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <motion.div
            className="w-[1px] h-12 bg-gradient-to-b from-[#fcf7e1]/30 to-transparent"
            animate={{ y: [0, 14, 0], opacity: [0.5, 0.15, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

      </div>
    </section>
  );
}
