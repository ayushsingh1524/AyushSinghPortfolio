"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { 
  SiDocker, SiReact, SiNextdotjs, SiFastapi, SiKubernetes, 
  SiPython, SiPostgresql, SiTailwindcss, SiJavascript, 
  SiTypescript, SiRedis, SiGit, SiLinux 
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

function ScrollRevealText({ text }: { text: string }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.8", "start 0.25"]
  });

  const words = text.split(" ");
  return (
    <h4 ref={container} className="text-3xl md:text-5xl lg:text-7xl font-medium leading-[1.1] text-[#4a3b32] tracking-tight flex flex-wrap gap-x-2 md:gap-x-4">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
        return (
          <motion.span key={i} style={{ opacity }} className="mt-2">
            {word}
          </motion.span>
        );
      })}
    </h4>
  );
}

const ICONS = [
  { Icon: FaAws, color: "#232F3E" },
  { Icon: SiDocker, color: "#2496ED" },
  { Icon: SiKubernetes, color: "#326CE5" },
  { Icon: SiPython, color: "#3776AB" },
  { Icon: SiReact, color: "#61DAFB" },
  { Icon: SiNextdotjs, color: "#000000" },
  { Icon: SiFastapi, color: "#009688" },
  { Icon: SiPostgresql, color: "#4169E1" },
  { Icon: SiTailwindcss, color: "#06B6D4" },
  { Icon: SiJavascript, color: "#F7DF1E" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: SiRedis, color: "#DC382D" },
  { Icon: SiGit, color: "#F05032" },
  { Icon: SiLinux, color: "#000000" },
];

export default function AboutPage() {
  return (
    <main className="bg-[#f5efe6] min-h-screen text-[#4a3b32] selection:bg-[#d35400] selection:text-white font-sans overflow-x-hidden">
      
      {/* ── TOP NAV / LOGO AREA ── */}
      <div className="absolute top-8 left-8 right-8 z-30 flex justify-between items-center text-[#c25e30]">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl md:text-4xl font-black tracking-tighter uppercase">
            AYUSH
          </h1>
          <span className="font-medium tracking-widest text-xs md:text-sm uppercase hidden md:block">
            Software & System Designer
          </span>
        </div>
        <div className="flex items-center gap-6 text-xs md:text-sm font-bold tracking-widest uppercase">
          <span className="hidden md:block">Available for hire</span>
          <a href="mailto:hello@example.com" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <span className="w-2 h-2 rounded-full bg-[#c25e30] animate-pulse" />
            Get in touch
          </a>
        </div>
      </div>

      {/* ── GIANT TYPOGRAPHY HERO (Curtain Reveal Parallax) ── */}
      <div style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }} className="relative h-[85vh] w-full">
        <div className="fixed top-0 h-[85vh] w-full z-0">
          <section className="w-full h-full flex flex-col items-center justify-center pt-20 px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
              className="w-full flex flex-col items-center justify-center leading-[0.8] text-center"
            >
          <h2 className="text-[15vw] font-black uppercase tracking-tighter text-[#c25e30]">
            SOFTWARE
          </h2>
          <div className="flex items-center justify-center gap-4 md:gap-8 w-full">
            <h2 className="text-[15vw] font-black uppercase tracking-tighter text-[#c25e30]">
              DESIGNER
            </h2>
            {/* Decorative Dot matching the reference image */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
              className="w-[3vw] h-[3vw] bg-[#c25e30] rounded-full self-end mb-[2vw]"
            />
          </div>
        </motion.div>
          </section>
        </div>
      </div>

      {/* ── OVERLAPPING WHITE CONTENT CARD ── */}
      <motion.section 
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className="relative z-20 bg-[#fffdfa] rounded-[3rem] md:rounded-[5rem] w-full px-6 py-20 md:px-20 md:py-32 shadow-[0_0_50px_rgba(194,94,48,0.05)] flex flex-col mb-0"
      >
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-32 mb-16">
          
          {/* ── SECTION 1: ABOUT & LOGOS ── */}
          <div className="w-full flex flex-col md:flex-row gap-12 md:gap-24">
            {/* Section Label */}
            <div className="w-full md:w-1/4">
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-widest text-[#a68a7a]">
                ABOUT
              </h3>
            </div>

            {/* Content & Logos */}
            <div className="w-full md:w-3/4">
              <ScrollRevealText text="I'm a freelance creative software designer and system architect with a passion for building scalable, high-performance web applications and beautiful digital experiences." />
              
              <div className="mt-16 flex flex-col md:flex-row gap-12 text-lg text-[#7a6b62] leading-relaxed max-w-4xl">
                <p className="flex-1">
                  With expertise in modern frontend frameworks like React and Next.js, combined with robust backend architectures using FastAPI, PostgreSQL, and Docker, I bridge the gap between stunning visual design and hardcore engineering.
                </p>
                <p className="flex-1">
                  From real-time containerized code execution engines to sleek, animated portfolio websites, my goal is always to push the boundaries of what's possible in the browser while maintaining rock-solid infrastructure under the hood.
                </p>
              </div>
            </div>
          </div>

          {/* ── LOGOS MARQUEE (Full-Bleed) ── */}
          <div className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden py-10">
            <motion.div 
              className="flex w-max items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            >
              {[...ICONS, ...ICONS].map((item, idx) => {
                const IconComp = item.Icon;
                return (
                  <div 
                    key={idx} 
                    className="flex-shrink-0 px-8 md:px-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    style={{ color: item.color }}
                  >
                    <IconComp className="text-4xl md:text-5xl" />
                  </div>
                )
              })}
            </motion.div>
          </div>

          {/* ── SECTION 2: TECHNIQUES ── */}
          <div className="w-full flex flex-col md:flex-row gap-12 md:gap-24">
            <div className="w-full md:w-1/4">
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-widest text-[#a68a7a]">
                TECHNIQUES
              </h3>
            </div>
            <div className="w-full md:w-3/4">
               <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-0">
                  {['Python', 'C++', 'JavaScript', 'SQL', 'AWS', 'Docker', 'Kubernetes', 'Terraform', 'React', 'Next.js', 'FastAPI', 'Tailwind CSS', 'Redux', 'PostgreSQL', 'Redis', 'CI/CD'].map((skill, i) => (
                    <div key={i} className="py-5 border-b border-[#4a3b32]/20 text-[#4a3b32] text-sm md:text-base font-medium hover:text-[#c25e30] transition-colors cursor-default">
                      {skill}
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* ── SECTION 3: AWARDS & RECOGNITION ── */}
          <div className="w-full flex flex-col md:flex-row gap-12 md:gap-24">
            <div className="w-full md:w-1/4">
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-widest text-[#a68a7a]">
                AWARDS
              </h3>
            </div>
            <div className="w-full md:w-3/4 flex flex-col border-t border-[#4a3b32]/20">
               {[
                 { year: '2024', name: 'AWS Certified', desc: 'Solutions Architect Professional' },
                 { year: '2023', name: 'Hackathon Winner', desc: 'Best Backend Architecture' },
                 { year: '2022', name: 'Open Source', desc: 'Top Contributor Award' },
                 { year: '2021', name: 'Design Excellence', desc: 'UI/UX Portfolio Recognition' }
               ].map((award, i) => (
                 <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                    className="py-8 border-b border-[#4a3b32]/20 flex flex-col md:flex-row md:items-center justify-between group cursor-default"
                  >
                    <div className="flex items-center gap-4 text-3xl md:text-5xl text-[#4a3b32]">
                       <span className="font-light">{award.year}</span>
                       <span className="text-[#c25e30] opacity-50 group-hover:opacity-100 transition-opacity">•</span>
                       <span className="font-medium tracking-tight">{award.name}</span>
                    </div>
                    <div className="mt-4 md:mt-0 text-xs md:text-sm text-[#7a6b62] uppercase tracking-widest md:text-right group-hover:text-[#c25e30] transition-colors">
                       {award.desc}
                    </div>
                 </motion.div>
               ))}
            </div>
          </div>

        </div>

      </motion.section>

      {/* ── LET'S WORK TOGETHER SECTION (Curtain Reveal) ── */}
      <div style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }} className="relative h-[80vh] md:h-[100vh] w-full">
        <div className="fixed bottom-0 h-[80vh] md:h-[100vh] w-full z-0">
          <section className="w-full h-full bg-[#f5efe6] flex flex-col items-center justify-center pt-20 pb-12 px-4 relative z-10">
        
        {/* ROW 1: LET'S [IMG] WORK */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 w-full">
          <h2 className="text-[15vw] md:text-[12vw] font-black uppercase tracking-tighter text-[#4a3b32] leading-none">
            LET'S
          </h2>
          
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            className="w-[30vw] h-[30vw] md:w-[15vw] md:h-[15vw] rounded-full overflow-hidden border-4 border-[#fffdfa] shadow-xl relative shrink-0"
          >
            <Image 
              src="/portrait.jpeg" 
              alt="Ayush Singh" 
              fill
              className="object-cover"
            />
          </motion.div>

          <h2 className="text-[15vw] md:text-[12vw] font-black uppercase tracking-tighter text-[#4a3b32] leading-none">
            WORK
          </h2>
        </div>

        {/* Contact Info Subtitle */}
        <div className="mt-12 text-center flex flex-col items-center gap-6">
          <p className="text-[#7a6b62] text-lg md:text-xl font-medium max-w-2xl px-4">
            Let's build something extraordinary. I'm always open to discussing new projects and system architectures.
          </p>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-[#4a3b32] font-semibold tracking-widest uppercase text-sm md:text-base">
            <a href="mailto:singhayush9179@gmail.com" className="hover:text-[#c25e30] transition-colors flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c25e30]" />
              singhayush9179@gmail.com
            </a>
            <a href="https://linkedin.com/in/ayush1015" className="hover:text-[#c25e30] transition-colors flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c25e30]" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* ROW 2: TOGETHER */}
        <div className="mt-12 w-full flex justify-center">
          <h2 className="text-[18vw] md:text-[15vw] font-black uppercase tracking-tighter text-[#4a3b32] leading-none">
            TOGETHER
          </h2>
        </div>

        {/* Footer */}
        <div className="mt-32 w-full max-w-7xl mx-auto border-t border-[#4a3b32]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm font-bold tracking-widest uppercase text-[#c25e30]">
            Ayush Singh
          </div>
          <div className="flex gap-8 text-xs font-bold tracking-widest uppercase text-[#a68a7a]">
            <a href="https://github.com/ayushsingh1524" className="hover:text-[#c25e30] transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/ayush1015" className="hover:text-[#c25e30] transition-colors">LinkedIn</a>
            <a href="mailto:singhayush9179@gmail.com" className="hover:text-[#c25e30] transition-colors">Email</a>
          </div>
          <div className="text-xs tracking-wider text-[#a68a7a]/60">
            © {new Date().getFullYear()} Ayush Singh
          </div>
        </div>

          </section>
        </div>
      </div>

    </main>
  );
}
