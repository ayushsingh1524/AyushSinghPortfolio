"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export function ProjectShowcase({ canScroll, onComplete }: { canScroll: boolean, onComplete: () => void }) {
  const router = useRouter();
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const isTransitioning = useRef(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!canScroll || document.getElementById("portfolio-preloader")) return;
      if (isTransitioning.current) return;

      if (Math.abs(e.deltaY) < 10) return;

      if (e.deltaY > 0) {
        if (activeIdx < PROJECTS.length - 1) {
          isTransitioning.current = true;
          setDirection(1);
          setActiveIdx(prev => prev + 1);
          setTimeout(() => isTransitioning.current = false, 1500);
        } else {
          onComplete();
        }
      } else if (e.deltaY < 0) {
        if (activeIdx > 0) {
          isTransitioning.current = true;
          setDirection(-1);
          setActiveIdx(prev => prev - 1);
          setTimeout(() => isTransitioning.current = false, 1500);
        }
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (!canScroll || document.getElementById("portfolio-preloader")) return;
      if (isTransitioning.current) return;

      const touchEndY = e.touches[0].clientY;
      const diff = touchStartY - touchEndY;

      if (diff > 50) {
        if (activeIdx < PROJECTS.length - 1) {
          isTransitioning.current = true;
          setDirection(1);
          setActiveIdx(prev => prev + 1);
          setTimeout(() => isTransitioning.current = false, 1500);
        } else {
          onComplete();
        }
      } else if (diff < -50) {
        if (activeIdx > 0) {
          isTransitioning.current = true;
          setDirection(-1);
          setActiveIdx(prev => prev - 1);
          setTimeout(() => isTransitioning.current = false, 1500);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [activeIdx, canScroll, onComplete]);

  const activeProject = PROJECTS[activeIdx];

  const variants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 500 : -500,
      y: dir > 0 ? 300 : -300,
      opacity: 0,
      rotateZ: dir > 0 ? 25 : -25,
      scale: 0.7,
      transformOrigin: "bottom center"
    }),
    center: {
      x: 0,
      y: 0,
      opacity: 1,
      rotateZ: 0,
      scale: 1,
      transformOrigin: "center center",
      transition: {
        x: { type: "spring", stiffness: 40, damping: 14 },
        y: { type: "spring", stiffness: 70, damping: 18 }, // Mismatched stiffness creates the curved path
        opacity: { duration: 0.8 },
        rotateZ: { type: "spring", stiffness: 50, damping: 15 },
        scale: { duration: 1.2, ease: "easeOut" }
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 500 : -500,
      y: dir < 0 ? 300 : -300,
      opacity: 0,
      rotateZ: dir < 0 ? 25 : -25,
      scale: 0.7,
      transition: {
        x: { type: "spring", stiffness: 40, damping: 14 },
        y: { type: "spring", stiffness: 70, damping: 18 },
        opacity: { duration: 0.6 }
      }
    })
  };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden flex transition-colors duration-1000 ease-in-out font-sans"
      style={{ backgroundColor: activeProject.bgColor }}
    >
      {/* ── LOGO (Top Left) ── */}
      <Link href="/" className="absolute top-8 left-8 z-30 flex items-center gap-4 hover:opacity-70 transition-opacity cursor-pointer">
        <h1 className="text-4xl font-black text-white tracking-tighter uppercase drop-shadow-lg">
          AYUSH
        </h1>
        <span className="text-white/80 font-medium tracking-widest text-sm uppercase hidden md:block">
          Software & System Designer
        </span>
      </Link>

      {/* ── LEFT SIDEBAR THUMBNAILS ── */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4">
        {PROJECTS.map((p, i) => (
          <div key={i} className="relative flex items-center group">
            <button 
              onClick={() => {
                if (!isTransitioning.current && activeIdx !== i) {
                  isTransitioning.current = true;
                  setDirection(i > activeIdx ? 1 : -1);
                  setActiveIdx(i);
                  setTimeout(() => isTransitioning.current = false, 1500);
                }
              }}
              className={`w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 transition-all duration-500 hover:scale-110 shadow-lg ${activeIdx === i ? 'border-white' : 'border-transparent opacity-60'}`}
            >
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
            </button>
            {/* Active Indicator Dot */}
            {activeIdx === i && (
              <motion.div 
                layoutId="activeIndicator"
                className="absolute -right-6 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
              />
            )}
          </div>
        ))}
      </div>

      {/* ── MAIN CONTENT AREA ── */}
      <div className="flex-1 relative flex items-center justify-center pb-10">
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div 
            key={activeIdx}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="relative w-full max-w-[80vw] md:max-w-[60vw] lg:max-w-[50vw] aspect-[4/3] md:aspect-[16/10] flex items-center justify-center mt-8 cursor-pointer group/main"
            onClick={() => router.push(`/works/${activeProject.slug}`)}
          >
            {/* Project Image wrapped in a cinematic border/frame */}
            <div className="w-full h-full bg-[#111] border-[10px] border-[#e8e6df] group-hover/main:border-white/80 shadow-2xl group-hover/main:shadow-[0_0_40px_rgba(255,255,255,0.15)] p-1 overflow-hidden relative z-10 group transition-all duration-700">
              <img 
                src={activeProject.image} 
                alt={activeProject.title} 
                className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110"
              />
            </div>

            {/* Giant Overlaid Text */}
            <h2 className="absolute z-20 text-[12vw] md:text-[8vw] font-black uppercase text-white leading-[0.8] tracking-tighter text-center pointer-events-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
              {activeProject.shortTitle.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h2>
          </motion.div>
        </AnimatePresence>

        {/* Project Meta Info (Bottom Left of Main Area) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`meta-${activeIdx}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute bottom-[15vh] right-8 md:right-[10vw] max-w-sm text-right z-20"
          >
            <div className="inline-block bg-black/50 backdrop-blur-md border border-white/10 hover:border-cyan-400/30 p-6 rounded-xl transition-colors duration-500 cursor-pointer" onClick={() => router.push(`/works/${activeProject.slug}`)}>
              <div className="text-cyan-400 text-xs font-bold uppercase tracking-[0.2em] mb-2">{activeProject.category}</div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase">{activeProject.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">{activeProject.description}</p>
              <div className="flex items-center justify-end gap-2 text-cyan-400 text-xs font-bold uppercase tracking-widest group/cta">
                <span>Explore</span>
                <ArrowRight size={14} className="group-hover/cta:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
