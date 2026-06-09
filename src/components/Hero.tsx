"use client";

import { motion, useMotionValue, useSpring, useTransform, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { preloaderFinished } from "@/components/Preloader";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const controls = useAnimation();

  // Mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the parallax movement
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Invert the movement slightly for the image to create a deep 3D effect
  const imageX = useTransform(smoothX, (v) => v * -0.3);
  const imageY = useTransform(smoothY, (v) => v * -0.3);

  useEffect(() => {
    setMounted(true);
    
    // Handle Intro Animation
    const playIntro = () => {
      controls.start("visible");
    };

    if (preloaderFinished) {
      // Small delay if instantly playing, or immediate
      setTimeout(playIntro, 100);
    } else {
      window.addEventListener("preloader-complete", playIntro);
    }
    
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position between -1 and 1
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseX.set(x * 40); // Max 40px movement
      mouseY.set(y * 40);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("preloader-complete", playIntro);
    };
  }, [mouseX, mouseY]);

  return (
    <section 
      id="hero" 
      className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center font-bebas"
    >
      {/* ── BACKGROUND PARALLAX TEXT ── */}
      {/* 
        This is the large, bold background text that moves slightly with the mouse.
        Using z-index 0 so it stays behind the portrait image.
      */}
      {mounted && (
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center select-none pointer-events-none z-0"
          style={{ x: smoothX, y: smoothY }}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
            visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 1.5, ease: "easeOut" } }
          }}
        >
          {/* Top text layer */}
          <div className="w-full max-w-[1150px] flex justify-start pl-4 md:pl-10 mt-[-10vh]">
            <h1 className="text-[15vw] md:text-[200px] leading-none text-white tracking-tighter">
              AYUSH
            </h1>
          </div>
          {/* Bottom text layer */}
          <div className="w-full max-w-[1150px] flex justify-end pr-4 md:pr-10 mt-4 md:mt-[-50px]">
            <h1 className="text-[15vw] md:text-[200px] leading-none text-white tracking-tighter">
              SINGH
            </h1>
          </div>
        </motion.div>
      )}

      {/* ── CENTRAL PORTRAIT IMAGE ── */}
      {/* 
        This is where your uploaded image will go. 
        It sits at z-index 10, in front of the text, remaining static.
      */}
      <motion.div 
        className="absolute inset-0 flex items-end justify-center pointer-events-none z-10 pb-[8vh] md:pb-[12vh]"
        style={{ x: imageX, y: imageY }}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut", delay: 0.3 } }
        }}
      >
        <div className="relative w-full max-w-[1000px] h-[95vh] flex justify-center items-end bg-transparent">
          <img src="/portrait.png" alt="Ayush Singh" className="w-auto h-full max-h-[95vh] object-contain object-bottom drop-shadow-2xl scale-[1.12] origin-bottom" />
          
          {/* Bottom Fade Gradient to blend the hard edge seamlessly into the black background */}
          <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>
      </motion.div>

      {/* ── FOREGROUND CONTENT (Static) ── */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        
        {/* Left Subtitle Block */}
        <div className="absolute left-8 md:left-24 top-[58%] -translate-y-1/2 max-w-[300px] md:max-w-[500px]">
          <h2 className="text-white text-xl md:text-3xl leading-[1.1] font-bebas tracking-wide whitespace-nowrap">
            SOFTWARE & SYSTEM DESIGNER
          </h2>
          <h3 className="text-white/60 text-lg md:text-2xl leading-[1.1] font-bebas tracking-wide mt-1 whitespace-nowrap">
            AI/ML INFRASTRUCTURE
          </h3>
        </div>

        {/* Bottom Right Indicator */}
        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-16 flex items-center gap-4">
          <span className="text-white text-xs md:text-sm tracking-[0.2em] uppercase font-bebas">
            SCROLL TO SEE MORE
          </span>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center pointer-events-auto cursor-pointer hover:bg-white/10 transition-colors">
            <ArrowDown className="w-4 h-4 text-white" />
          </div>
        </div>

      </div>
    </section>
  );
}
