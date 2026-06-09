"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const PROJECTS = [
  {
    title: "TASKNEST",
    shortTitle: "TASKNEST",
    category: "FULL-STACK TASK MANAGEMENT",
    description: "Production-grade Kanban app. Next.js frontend, FastAPI backend. Real-time updates, JWT auth, normalized PostgreSQL, Redis caching, Docker containerized.",
    image: "/projects/tasknest.png",
    bgColor: "#ff6a00"
  },
  {
    title: "ML INFERENCE PLATFORM",
    shortTitle: "ML INFERENCE",
    category: "FILE #892 - K8S/AWS",
    description: "Containerized model serving platform. K8s autoscaling. Sub-200ms latency. 100+ concurrent requests. Prometheus integration.",
    image: "/projects/ml_inference_platform_1780908107415.png",
    bgColor: "#0047ff"
  },
  {
    title: "CONCURRENT EXEC ENGINE",
    shortTitle: "EXEC ENGINE",
    category: "FILE #441 - C++/LINUX",
    description: "Sandboxed Docker code execution. Linux cgroups isolation. Zero crash rate across 30+ requests. Race conditions resolved.",
    image: "/projects/concurrent_exec_engine_1780908121308.png",
    bgColor: "#ff3b00"
  },
  {
    title: "PACKET ANALYZER",
    shortTitle: "PACKET ANALYZER",
    category: "FILE #105 - NET/SEC",
    description: "Real-time capture via POSIX/libpcap. Threat monitoring. MITRE ATT&CK mapping. Live CLI dashboard.",
    image: "/projects/packet_analyzer_1780908132723.png",
    bgColor: "#00c94a"
  },
  {
    title: "CLOUD THREAT DETECTION",
    shortTitle: "THREAT DETECT",
    category: "FILE #774 - PYTHON/TF",
    description: "Scalable detection pipeline. AWS CloudTrail via Snowflake. Detections-as-code. CI/CD automated via GitHub Actions.",
    image: "/projects/cloud_threat_detection_1780908146526.png",
    bgColor: "#9000ff"
  }
];

export function ProjectShowcase({ canScroll, onComplete }: { canScroll: boolean, onComplete: () => void }) {
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
      <div className="absolute top-8 left-8 z-30 flex items-center gap-4">
        <h1 className="text-4xl font-black text-white tracking-tighter uppercase drop-shadow-lg">
          AYUSH
        </h1>
        <span className="text-white/80 font-medium tracking-widest text-sm uppercase hidden md:block">
          Software & System Designer
        </span>
      </div>

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
            className="relative w-full max-w-[80vw] md:max-w-[60vw] lg:max-w-[50vw] aspect-[4/3] md:aspect-[16/10] flex items-center justify-center mt-8"
          >
            {/* Project Image wrapped in a cinematic border/frame */}
            <div className="w-full h-full bg-[#111] border-[10px] border-[#e8e6df] shadow-2xl p-1 overflow-hidden relative z-10 group">
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
            <div className="inline-block bg-black/50 backdrop-blur-md border border-white/10 p-6 rounded-xl">
              <div className="text-cyan-400 text-xs font-bold uppercase tracking-[0.2em] mb-2">{activeProject.category}</div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase">{activeProject.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{activeProject.description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
