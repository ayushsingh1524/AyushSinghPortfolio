"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";
import { ArrowRight } from "lucide-react";

/* ══════════════════════════════════════════════════════════════
   POOL OF FULL-SCREEN CLIP-PATH MASK TRANSITIONS
   Inspired by the home-to-works circular reveal, but with variations.
   The entering slide masks over the exiting slide.
   ══════════════════════════════════════════════════════════════ */
const SCREEN_TRANSITIONS = [
  {
    // 0 ─ Circle from bottom center (like home page)
    enter: () => ({ clipPath: "circle(0% at 50% 100%)", zIndex: 10 }),
    center: { clipPath: "circle(150% at 50% 100%)", zIndex: 10, transition: { duration: 2.0, ease: [0.76, 0, 0.24, 1] } },
  },
  {
    // 1 ─ Circular from bottom right corner
    enter: () => ({ clipPath: "circle(0% at 100% 100%)", zIndex: 10 }),
    center: { clipPath: "circle(150% at 100% 100%)", zIndex: 10, transition: { duration: 2.0, ease: [0.76, 0, 0.24, 1] } },
  },
  {
    // 2 ─ Circle from top right
    enter: () => ({ clipPath: "circle(0% at 100% 0%)", zIndex: 10 }),
    center: { clipPath: "circle(150% at 100% 0%)", zIndex: 10, transition: { duration: 2.0, ease: [0.76, 0, 0.24, 1] } },
  },
  {
    // 3 ─ Vertical wipe from bottom
    enter: () => ({ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", zIndex: 10 }),
    center: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", zIndex: 10, transition: { duration: 2.0, ease: [0.76, 0, 0.24, 1] } },
  },
  {
    // 4 ─ Smooth from start (left) to end (right) circular reveal
    enter: () => ({ clipPath: "circle(0% at 0% 50%)", zIndex: 10 }),
    center: { clipPath: "circle(150% at 0% 50%)", zIndex: 10, transition: { duration: 2.0, ease: [0.76, 0, 0.24, 1] } },
  },
];

/* ══════════════════════════════════════════════════════════════
   POOL OF CARD ENTRANCE ANIMATIONS
   ══════════════════════════════════════════════════════════════ */
const CARD_ENTRANCES = [
  { initial: { opacity: 0, y: 80, scale: 0.85 }, transition: { duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] as number[] } },
  { initial: { opacity: 0, x: 150, scale: 0.95 }, transition: { duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] as number[] } },
  { initial: { opacity: 0, scale: 0.4 }, transition: { duration: 0.85, delay: 0.4, ease: [0.22, 1, 0.36, 1] as number[] } },
  { initial: { opacity: 0, x: -150, scale: 0.95 }, transition: { duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] as number[] } },
  { initial: { opacity: 0, y: -100, scale: 0.9 }, transition: { duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] as number[] } },
];

/* ══════════════════════════════════════════════════════════════ */

type CustomValue = { dir: number; styleIdx: number };

export function ProjectShowcase({
  canScroll,
  onComplete,
}: {
  canScroll: boolean;
  onComplete: () => void;
}) {
  const router = useRouter();

  const categories = useMemo(
    () => Array.from(new Set(PROJECTS.map((p) => p.category))),
    []
  );
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredProjects = useMemo(
    () => PROJECTS.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const isTransitioning = useRef(false);
  const transitionCount = useRef(0);

  // Reset index when category changes
  useEffect(() => {
    setActiveIdx(0);
    setDirection(1);
  }, [activeCategory]);

  /* ── Scroll & Touch Handlers ── */
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!canScroll || document.getElementById("portfolio-preloader")) return;
      if (isTransitioning.current) return;
      if (Math.abs(e.deltaY) < 10) return;

      if (e.deltaY > 0) {
        if (activeIdx < filteredProjects.length - 1) {
          transitionCount.current++;
          isTransitioning.current = true;
          setDirection(1);
          setActiveIdx((prev) => prev + 1);
          setTimeout(() => (isTransitioning.current = false), 2200);
        } else {
          const ci = categories.indexOf(activeCategory);
          if (ci < categories.length - 1) {
            transitionCount.current++;
            isTransitioning.current = true;
            setDirection(1);
            setActiveCategory(categories[ci + 1]);
            setTimeout(() => (isTransitioning.current = false), 2200);
          } else {
            onComplete();
          }
        }
      } else if (e.deltaY < 0) {
        if (activeIdx > 0) {
          transitionCount.current++;
          isTransitioning.current = true;
          setDirection(-1);
          setActiveIdx((prev) => prev - 1);
          setTimeout(() => (isTransitioning.current = false), 2200);
        } else {
          const ci = categories.indexOf(activeCategory);
          if (ci > 0) {
            transitionCount.current++;
            isTransitioning.current = true;
            setDirection(-1);
            setActiveCategory(categories[ci - 1]);
            setTimeout(() => {
              setActiveIdx(
                PROJECTS.filter(
                  (p) => p.category === categories[ci - 1]
                ).length - 1
              );
              isTransitioning.current = false;
            }, 100);
          }
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

      const diff = touchStartY - e.touches[0].clientY;

      if (diff > 50) {
        if (activeIdx < filteredProjects.length - 1) {
          transitionCount.current++;
          isTransitioning.current = true;
          setDirection(1);
          setActiveIdx((prev) => prev + 1);
          setTimeout(() => (isTransitioning.current = false), 2200);
        } else {
          const ci = categories.indexOf(activeCategory);
          if (ci < categories.length - 1) {
            transitionCount.current++;
            isTransitioning.current = true;
            setDirection(1);
            setActiveCategory(categories[ci + 1]);
            setTimeout(() => (isTransitioning.current = false), 2200);
          } else {
            onComplete();
          }
        }
      } else if (diff < -50) {
        if (activeIdx > 0) {
          transitionCount.current++;
          isTransitioning.current = true;
          setDirection(-1);
          setActiveIdx((prev) => prev - 1);
          setTimeout(() => (isTransitioning.current = false), 2200);
        } else {
          const ci = categories.indexOf(activeCategory);
          if (ci > 0) {
            transitionCount.current++;
            isTransitioning.current = true;
            setDirection(-1);
            setActiveCategory(categories[ci - 1]);
            setTimeout(() => {
              setActiveIdx(
                PROJECTS.filter(
                  (p) => p.category === categories[ci - 1]
                ).length - 1
              );
              isTransitioning.current = false;
            }, 100);
          }
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
  }, [
    activeIdx,
    canScroll,
    onComplete,
    activeCategory,
    categories,
    filteredProjects.length,
  ]);

  const activeProject = filteredProjects[activeIdx];

  // Update theme-color meta tag dynamically
  useEffect(() => {
    if (activeProject?.bgColor) {
      const meta = document.querySelector("meta[name='theme-color']");
      if (meta) meta.setAttribute("content", activeProject.bgColor);
    }
  }, [activeProject?.bgColor]);

  if (!activeProject) return null;

  const catIdx = categories.indexOf(activeCategory);
  const styleIdx = transitionCount.current % SCREEN_TRANSITIONS.length;
  const cardIdx = transitionCount.current % CARD_ENTRANCES.length;

  /* ── Full-screen mask variant functions ── */
  const slideVariants = {
    enter: (c: CustomValue) => {
      const s = SCREEN_TRANSITIONS[c.styleIdx];
      return { ...s.enter(), x: 0, y: 0, scale: 1, opacity: 1, rotate: 0, skewX: 0 };
    },
    center: (c: CustomValue) => {
      const s = SCREEN_TRANSITIONS[c.styleIdx];
      return { ...s.center, x: 0, y: 0, scale: 1, opacity: 1, rotate: 0, skewX: 0 };
    },
    exit: (c: CustomValue) => {
      // The exiting slide stays completely still at zIndex 1 while the entering slide masks over it at zIndex 10.
      // We apply a dummy transition duration so Framer Motion waits before unmounting it.
      return { 
        zIndex: 1, 
        opacity: 1, 
        x: 0, y: 0, scale: 1, rotate: 0, skewX: 0, clipPath: "none",
        transition: { duration: 2.2 } 
      };
    },
  };

  const customValue: CustomValue = { dir: direction, styleIdx };
  const cardAnim = CARD_ENTRANCES[cardIdx];

  return (
    <div className="relative w-full h-screen overflow-hidden font-sans">
      {/* ══════════════════════════════════════════════════════
          FULL-SCREEN ANIMATED SLIDES
          The exiting slide has z-index 10 (on top, slides away).
          The entering slide has z-index 1 (behind, revealed).
          ══════════════════════════════════════════════════════ */}
      <AnimatePresence initial={false} custom={customValue}>
        <motion.div
          key={`fullslide-${activeCategory}-${activeIdx}`}
          custom={customValue}
          variants={slideVariants as any}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 will-change-transform"
          style={{ backgroundColor: activeProject.bgColor }}
        >
          {/* ── Slide Content ── */}
          <div className="relative w-full h-full flex items-center justify-center pb-10">
            {/* Project Card — unique entrance per transition */}
            <motion.div
              initial={cardAnim.initial}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                rotateY: 0,
                rotateZ: 0,
              }}
              transition={cardAnim.transition as any}
              className="relative w-full max-w-[85vw] md:max-w-[55vw] lg:max-w-[45vw] aspect-[4/3] md:aspect-[16/10] flex items-center justify-center mt-8 cursor-pointer group/main"
              onClick={() => router.push(`/works/${activeProject.slug}`)}
            >
              {/* Project Image */}
              <div className="w-full h-full bg-[#111] border-[4px] md:border-[10px] border-[#e8e6df] group-hover/main:border-white/80 shadow-2xl group-hover/main:shadow-[0_0_40px_rgba(255,255,255,0.15)] p-1 overflow-hidden relative z-10 group transition-all duration-700">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110"
                />
              </div>

              {/* Giant Overlaid Text */}
              <h2 className="absolute z-20 w-[90%] text-center text-[12vw] md:text-[6vw] lg:text-[5.5vw] font-black uppercase text-white leading-[0.9] tracking-tighter pointer-events-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] break-words">
                {activeProject.shortTitle.split(" ").map((word, i) => (
                  <span key={i} className="block">
                    {word}
                  </span>
                ))}
              </h2>
            </motion.div>

            {/* Project Meta Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute bottom-[10vh] right-[5vw] md:right-[8vw] max-w-[90vw] md:max-w-sm text-right z-20"
            >
              <div
                className="inline-block bg-black/50 backdrop-blur-md border border-white/10 hover:border-cyan-400/30 p-4 md:p-6 rounded-xl transition-colors duration-500 cursor-pointer text-left md:text-right"
                onClick={() => router.push(`/works/${activeProject.slug}`)}
              >
                <div className="text-cyan-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-2">
                  {activeProject.category} • {activeIdx + 1} OF{" "}
                  {filteredProjects.length}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 uppercase">
                  {activeProject.title}
                </h3>
                <p className="text-white/70 text-xs md:text-sm leading-relaxed mb-4 line-clamp-2 md:line-clamp-none">
                  {activeProject.description}
                </p>
                <div className="flex items-center justify-start md:justify-end gap-2 text-cyan-400 text-xs font-bold uppercase tracking-widest group/cta">
                  <span>Explore</span>
                  <ArrowRight
                    size={14}
                    className="group-hover/cta:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ══════════════════════════════════════════════════════
          FIXED UI ELEMENTS — z-50, always above transitions
          ══════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 z-50 pointer-events-none">
        {/* ── Vertical Left Nav (Desktop) ── */}
        <div className="hidden md:flex absolute left-0 top-0 h-screen w-32 flex-col items-start justify-center pl-8 gap-8 pointer-events-auto">
          {categories.map((cat, i) => {
            const isActive = activeCategory === cat;
            const idxStr = String(i + 1).padStart(2, "0");
            return (
              <button
                key={cat}
                onClick={() => {
                  if (
                    !isTransitioning.current &&
                    activeCategory !== cat
                  ) {
                    transitionCount.current++;
                    isTransitioning.current = true;
                    setDirection(i > catIdx ? 1 : -1);
                    setActiveCategory(cat);
                    setTimeout(
                      () => (isTransitioning.current = false),
                      1800
                    );
                  }
                }}
                className="group flex items-center relative cursor-pointer"
              >
                <motion.span
                  className={`font-bebas transition-all duration-700 tracking-wider ${
                    isActive
                      ? "text-4xl md:text-5xl text-white"
                      : "text-2xl md:text-3xl text-white/20 group-hover:text-white/50"
                  }`}
                >
                  {idxStr}
                </motion.span>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "auto", opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="overflow-hidden whitespace-nowrap flex items-center ml-3"
                    >
                      <div className="w-6 h-[2px] bg-white mr-3" />
                      <span className="text-white text-[10px] font-bold tracking-[0.3em] uppercase drop-shadow-md">
                        {cat}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </div>

        {/* ── Mobile Bottom Category Nav ── */}
        <div className="md:hidden absolute bottom-[16vh] left-1/2 -translate-x-1/2 flex items-center gap-6 pointer-events-auto">
          {categories.map((cat, i) => {
            const isActive = activeCategory === cat;
            const idxStr = String(i + 1).padStart(2, "0");
            return (
              <button
                key={cat}
                onClick={() => {
                  if (
                    !isTransitioning.current &&
                    activeCategory !== cat
                  ) {
                    transitionCount.current++;
                    isTransitioning.current = true;
                    setDirection(i > catIdx ? 1 : -1);
                    setActiveCategory(cat);
                    setTimeout(
                      () => (isTransitioning.current = false),
                      1800
                    );
                  }
                }}
                className="flex flex-col items-center gap-2 relative"
              >
                <span
                  className={`font-bebas text-2xl transition-colors duration-500 ${
                    isActive
                      ? "text-white scale-110"
                      : "text-white/30 scale-100"
                  }`}
                >
                  {idxStr}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="mobileActiveUnderline"
                    className="absolute -bottom-2 w-full h-[2px] bg-white"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* ── Logo (Top Left) ── */}
        <Link
          href="/"
          className="absolute top-8 left-8 md:left-12 flex items-center gap-4 hover:opacity-70 transition-opacity cursor-pointer pointer-events-auto"
        >
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase drop-shadow-lg">
            AYUSH
          </h1>
          <span className="text-white/80 font-medium tracking-widest text-sm uppercase hidden lg:block">
            Software & Data Engineer
          </span>
        </Link>

        {/* ── Active Category Label (Top Right) ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute top-8 right-8 hidden md:flex items-center gap-3 pointer-events-auto"
          >
            <span className="text-white/40 text-xs font-bold tracking-[0.2em] uppercase">
              {String(catIdx + 1).padStart(2, "0")} /{" "}
              {String(categories.length).padStart(2, "0")}
            </span>
            <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">
              {activeCategory}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* ── Mobile Project Progress Dots ── */}
        <div className="absolute bottom-[24vh] left-1/2 -translate-x-1/2 flex md:hidden gap-2">
          {filteredProjects.map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                activeIdx === i ? "bg-white scale-125" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
