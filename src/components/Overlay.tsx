"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CircularNav } from "./CircularNav";
import gsap from "gsap";

interface OverlayProps {
  progress: MotionValue<number>;
}

export function Overlay({ progress }: OverlayProps) {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const navWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  // CircularNav entrance animation — triggered by preloader
  useEffect(() => {
    const el = navWrapperRef.current;
    if (!el) return;

    // Start hidden: pushed down and invisible
    gsap.set(el, { y: 40, autoAlpha: 0, scale: 0.6 });

    const handlePreloaderComplete = () => {
      gsap.to(el, {
        y: 0,
        autoAlpha: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.1,
      });
    };

    window.addEventListener("preloader-complete", handlePreloaderComplete);
    return () => window.removeEventListener("preloader-complete", handlePreloaderComplete);
  }, []);

  // Section 1: Name and Title
  const opacity1 = useTransform(progress, [0, 0.2, 0.25], [1, 1, 0]);
  const y1 = useTransform(progress, [0, 0.25], [0, -100]);

  // Section 2: About snippet 1
  const opacity2 = useTransform(progress, [0.25, 0.35, 0.45], [0, 1, 0]);
  const y2 = useTransform(progress, [0.25, 0.45], [100, -100]);

  // Section 3: About snippet 2
  const opacity3 = useTransform(progress, [0.55, 0.65, 0.8], [0, 1, 0]);
  const y3 = useTransform(progress, [0.55, 0.8], [100, -100]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      
      {/* Flashlight Overlay for the Hero Section */}
      <div 
        className="absolute inset-0 pointer-events-none z-50 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 350px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, rgba(0,0,0,0.85) 100%)`
        }}
      />

      {/* Sections Wrapper */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 z-10 pointer-events-none">
        
        {/* Section 1 */}
        <motion.div 
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex items-end justify-start pb-32 pl-12 md:pl-24 text-left pointer-events-auto"
        >
          <div className="w-full">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-2xl">
              Ayush Singh.<br />
              <span className="text-white/80 text-2xl md:text-4xl mt-4 block font-medium tracking-tight">
                Software & Systems Engineer
              </span>
              <span className="text-white/50 text-lg md:text-2xl mt-2 block font-normal tracking-wide">
                AI/ML Infrastructure | Cloud & Security Enthusiast
              </span>
            </h1>
          </div>
        </motion.div>

        {/* Circular Nav (Bottom Center) — animated in by preloader */}
        <motion.div 
          style={{ opacity: opacity1 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-auto z-50 flex justify-center"
        >
          <div ref={navWrapperRef} className="will-change-transform">
            <CircularNav />
          </div>
        </motion.div>

        {/* Section 2 */}
        <motion.div 
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex items-center justify-start text-left px-6 md:px-24"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-xl leading-tight max-w-4xl">
            Building scalable <br />
            <span className="italic text-white/70">distributed systems</span> <br />
            and cloud infrastructure.
          </h2>
        </motion.div>

        {/* Section 3 */}
        <motion.div 
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex items-center justify-end text-right px-6 md:px-24"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-xl leading-tight max-w-4xl">
            Passionate about <br />
            <span className="text-indigo-400">AI platforms</span> & <br />
            security engineering.
          </h2>
        </motion.div>

      </div>
    </div>
  );
}
