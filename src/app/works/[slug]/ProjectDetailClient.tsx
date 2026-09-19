"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { type Project } from "@/data/projects";
import { useRef } from "react";
import { ExternalLink, Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function ProjectDetailClient({ project }: { project: Project }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scrollScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div ref={containerRef} className="w-full">
      
      {/* ── HERO SECTION ── */}
      <section 
        className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{ backgroundColor: project.bgColor }}
      >
        <motion.div 
          initial={{ clipPath: "inset(20% 15% 20% 15% round 20px)", filter: "blur(10px)", scale: 1.1 }}
          animate={{ clipPath: "inset(0% 0% 0% 0% round 0px)", filter: "blur(0px)", scale: 1 }}
          transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
          style={{ y, opacity, scale: scrollScale }}
          className="absolute inset-0"
        >
          {/* Full-cover banner image */}
          <img 
            src={project.bannerImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          
          {/* Dark gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </motion.div>
          
        {/* Massive Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="relative z-20 text-[14vw] md:text-[10vw] font-black tracking-tighter text-white uppercase text-center leading-[0.85] drop-shadow-2xl"
        >
          {project.title.split(' ').map((word, i) => (
            <span key={i} className="block">{word}</span>
          ))}
        </motion.h1>

        {/* Category badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative z-20 mt-8"
        >
          <span className="text-white/70 text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
            {project.category}
          </span>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-[1px] h-8 bg-white/30"
          />
        </motion.div>
      </section>

      {/* ── DETAILS SECTION ── */}
      <motion.section 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className="relative z-30 bg-[#fffdfa] rounded-t-[3rem] md:rounded-t-[5rem] -mt-16 md:-mt-24 w-full min-h-screen px-6 py-20 md:px-20 md:py-32 shadow-[0_-20px_50px_rgba(0,0,0,0.15)] flex flex-col gap-24 md:gap-32"
      >
        
        {/* Overview */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="w-full md:w-1/4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-sm font-bold tracking-widest text-[#c25e30] uppercase mb-4">
                {project.category}
              </h3>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-[#4a3b32] leading-none">
                OVERVIEW
              </h2>
            </motion.div>
          </div>
          <div className="w-full md:w-3/4">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-3xl font-medium leading-[1.4] text-[#4a3b32] tracking-tight"
            >
              {project.overview}
            </motion.p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="w-full md:w-1/4">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-[#4a3b32] leading-none"
            >
              TECH STACK
            </motion.h2>
          </div>
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {project.techStack.map((tech, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="py-4 px-5 border border-[#4a3b32]/10 rounded-xl text-[#4a3b32] text-base md:text-lg font-semibold hover:bg-[#4a3b32] hover:text-[#fffdfa] transition-colors duration-300 cursor-default"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Why It Is Made */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="w-full md:w-1/4">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-[#4a3b32] leading-none"
            >
              THE WHY
            </motion.h2>
          </div>
          <div className="w-full md:w-3/4">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl leading-relaxed text-[#7a6b62] max-w-4xl"
            >
              {project.whyItIsMade}
            </motion.p>
          </div>
        </div>

        {/* Links Section */}
        {(project.githubUrl || project.liveUrl) && (
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            <div className="w-full md:w-1/4">
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-[#4a3b32] leading-none"
              >
                LINKS
              </motion.h2>
            </div>
            <div className="w-full md:w-3/4 flex flex-wrap gap-6">
              {project.liveUrl ? (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-3 bg-[#c25e30] text-[#fffdfa] px-8 py-4 rounded-full font-bold tracking-widest text-sm uppercase hover:bg-[#4a3b32] transition-colors duration-500 group"
                >
                  <Globe size={20} />
                  <span>Live Demo</span>
                  <ExternalLink size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ) : project.githubUrl ? (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-3 bg-[#4a3b32] text-[#fffdfa] px-8 py-4 rounded-full font-bold tracking-widest text-sm uppercase hover:bg-[#c25e30] transition-colors duration-500 group"
                >
                  <FaGithub size={20} />
                  <span>View on GitHub</span>
                  <ExternalLink size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ) : null}
            </div>
          </div>
        )}

      </motion.section>

      {/* Footer */}
      <footer className="w-full bg-[#fffdfa] py-12 flex justify-center border-t border-[#4a3b32]/10">
        <p className="text-sm tracking-widest uppercase font-bold text-[#a68a7a]">
          Ayush Singh • Software Designer
        </p>
      </footer>

    </div>
  );
}
