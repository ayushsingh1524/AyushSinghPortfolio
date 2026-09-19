"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
        <Link href="/" className="flex items-center gap-4 hover:opacity-70 transition-opacity cursor-pointer">
          <h1 className="text-2xl md:text-4xl font-black tracking-tighter uppercase">
            AYUSH
          </h1>
          <span className="font-medium tracking-widest text-xs md:text-sm uppercase hidden md:block">
            Software & Data Engineer
          </span>
        </Link>
        <div className="flex items-center gap-6 text-xs md:text-sm font-bold tracking-widest uppercase">
          <span className="hidden md:block">Available for hire</span>
          <a href="mailto:singhayush9179@gmail.com" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
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
              <h2 className="text-[clamp(4rem,15vw,12rem)] font-black uppercase tracking-tighter text-[#c25e30]">
                SOFTWARE
              </h2>
              <div className="flex items-center justify-center gap-4 md:gap-8 w-full">
                <h2 className="text-[clamp(4rem,15vw,12rem)] font-black uppercase tracking-tighter text-[#c25e30]">
                  ENGINEER
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
            <div className="w-full md:w-2/3 ml-auto">
              <ScrollRevealText text="A final-year CS engineer with a passion for building scalable, production-ready systems from async ML inference APIs and real-time intrusion detection engines to full-stack apps and LLM pipelines currently processing 15,000+ samples at Ethara AI." />

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

          {/* ── SECTION 2: CAPABILITIES ── */}
          <div className="w-full flex flex-col md:flex-row gap-12 md:gap-24">
            <div className="w-full md:w-1/4">
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-widest text-[#a68a7a]">
                CAPABILITIES
              </h3>
            </div>
            <div className="w-full md:w-3/4 flex flex-col border-t border-[#4a3b32]/20">
              {[
                { idx: '01', title: 'Backend Architecture', desc: 'Designing high-throughput, low-latency microservices with robust database schemas and caching layers.', tags: ['FastAPI', 'Spring Boot', 'PostgreSQL', 'Redis'] },
                { idx: '02', title: 'Frontend Engineering', desc: 'Building performant, highly animated, and deeply interactive client-side applications that feel premium.', tags: ['React', 'Next.js', 'Framer Motion', 'Tailwind CSS'] },
                { idx: '03', title: 'Cloud & DevOps', desc: 'Containerizing workloads and orchestrating deployments for scale, resilience, and zero downtime.', tags: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'] },
                { idx: '04', title: 'Data Pipelines', desc: 'Ingesting, transforming, and serving large-scale data reliably for machine learning and BI workloads.', tags: ['Python', 'Snowflake', 'Spark', 'Airflow'] },
                { idx: '05', title: 'Security & Networking', desc: 'Building intrusion detection systems, threat pipelines, and MITRE ATT&CK-mapped detection rules at scale.', tags: ['C++', 'libpcap', 'Snowflake', 'Terraform'] },
              ].map((cap, i) => (
                <motion.div
                  key={cap.idx}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ delay: i * 0.1, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                  className="py-8 md:py-10 border-b border-[#4a3b32]/20 group cursor-default"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                    {/* Index number */}
                    <span className="text-[#c25e30] text-sm font-bold tracking-widest shrink-0 mt-1">{cap.idx}</span>

                    {/* Title */}
                    <h4 className="text-2xl md:text-4xl font-black text-[#4a3b32] uppercase tracking-tight flex-1 group-hover:text-[#c25e30] transition-colors duration-500">
                      {cap.title}
                    </h4>

                    {/* Description + Tags */}
                    <div className="md:max-w-sm flex flex-col gap-4">
                      <p className="text-[#7a6b62] text-sm leading-relaxed">{cap.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {cap.tags.map(t => (
                          <span key={t} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-[#f5efe6] rounded-full text-[#4a3b32] group-hover:bg-[#c25e30]/10 group-hover:text-[#c25e30] transition-colors duration-300">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── SECTION 3: AWARDS & RECOGNITION ── */}
          <div className="w-full flex flex-col md:flex-row gap-12 md:gap-24">
            <div className="w-full md:w-1/4">
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-widest text-[#a68a7a]">
                CERTIFICATIONS
              </h3>
            </div>
            <div className="w-full md:w-3/4 flex flex-col border-t border-[#4a3b32]/20">
              {[
                { year: '2026', name: 'AI Upskilling', desc: 'Qualcomm Certificate', link: 'https://drive.google.com/file/d/1-Ma8vM7-BCN0YaIgrjMTj8z_h9m-kOt6/view?usp=sharing' },
                { year: '2025', name: 'OCI Gen AI Pro', desc: 'Oracle Certified Professional', link: 'https://drive.google.com/file/d/1xN2aDOBPup4hOGfb5IJzHY5r9C5rfS_u/view?usp=sharing' },
                { year: '2025', name: 'OCI AI Foundations', desc: 'Oracle Certified Associate', link: 'https://drive.google.com/file/d/1vt5LKKsPeEFvOOrmbXLg7Nr7CU2sEnVw/view?usp=sharing' },
                { year: '2023', name: 'Hackathon Winner', desc: 'Best Backend Architecture' },
                { year: '2022', name: 'Open Source', desc: 'Top Contributor Award' }
              ].map((award, i) => (
                <motion.a
                  href={award.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                  className="py-8 border-b border-[#4a3b32]/20 flex flex-col md:flex-row md:items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2 md:gap-4 text-2xl md:text-5xl text-[#4a3b32]">
                    <span className="font-light">{award.year}</span>
                    <span className="text-[#c25e30] opacity-50 group-hover:opacity-100 transition-opacity">•</span>
                    <span className="font-medium tracking-tight truncate">{award.name}</span>
                  </div>
                  <div className="mt-4 md:mt-0 text-xs md:text-sm text-[#7a6b62] uppercase tracking-widest md:text-right group-hover:text-[#c25e30] transition-colors">
                    {award.desc}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

        </div>

      </motion.section>

      {/* ── LET'S WORK TOGETHER SECTION (Curtain Reveal) ── */}
      <div style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }} className="relative h-[100vh] w-full">
        <div className="fixed bottom-0 h-[100vh] w-full z-0">
          <section className="w-full h-full bg-[#f5efe6] flex flex-col items-center justify-center pt-20 pb-12 px-4 relative z-10">

            {/* ROW 1: LET'S [IMG] WORK */}
            <div className="flex flex-row items-center justify-center gap-3 md:gap-8 w-full">
              <h2 className="text-[clamp(4rem,12vw,10rem)] font-black uppercase tracking-tighter text-[#4a3b32] leading-none">
                LET'S
              </h2>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                className="w-[20vw] h-[20vw] md:w-[15vw] md:h-[15vw] rounded-full overflow-hidden border-2 md:border-4 border-[#fffdfa] shadow-xl relative shrink-0"
              >
                <Image
                  src="/portrait.jpeg"
                  alt="Ayush Singh"
                  fill
                  className="object-cover"
                />
              </motion.div>

              <h2 className="text-[clamp(4rem,12vw,10rem)] font-black uppercase tracking-tighter text-[#4a3b32] leading-none">
                WORK
              </h2>
            </div>

            {/* Contact Info Subtitle */}
            <div className="mt-12 text-center flex flex-col items-center gap-6">
              <p className="text-[#7a6b62] text-lg md:text-xl font-medium max-w-2xl px-4">
                Let's build something extraordinary. I'm always open to discussing new projects and system architectures.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mt-8 w-full">
                <motion.a
                  href="mailto:singhayush9179@gmail.com"
                  className="relative group flex items-center justify-center font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase text-[10px] md:text-sm text-[#4a3b32] py-2"
                  whileHover="hover"
                >
                  <motion.span
                    className="text-[#4a3b32]/30 group-hover:text-[#c25e30] transition-colors duration-300"
                    variants={{ hover: { x: -8 } }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    [
                  </motion.span>

                  <motion.span
                    className="mx-2 group-hover:text-[#c25e30] transition-colors duration-300"
                    variants={{ hover: { scale: 1.05 } }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    singhayush9179@gmail.com
                  </motion.span>

                  <motion.span
                    className="text-[#4a3b32]/30 group-hover:text-[#c25e30] transition-colors duration-300"
                    variants={{ hover: { x: 8 } }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    ]
                  </motion.span>

                  <motion.div
                    className="absolute bottom-0 left-0 h-[1px] bg-[#c25e30] w-full origin-left"
                    initial={{ scaleX: 0 }}
                    variants={{ hover: { scaleX: 1 } }}
                    transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                  />
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/ayush1015"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group flex items-center justify-center font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase text-[10px] md:text-sm text-[#4a3b32] py-2"
                  whileHover="hover"
                >
                  <motion.span
                    className="text-[#4a3b32]/30 group-hover:text-[#c25e30] transition-colors duration-300"
                    variants={{ hover: { x: -8 } }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    [
                  </motion.span>

                  <motion.span
                    className="mx-2 group-hover:text-[#c25e30] transition-colors duration-300"
                    variants={{ hover: { scale: 1.05 } }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    LINKEDIN
                  </motion.span>

                  <motion.span
                    className="text-[#4a3b32]/30 group-hover:text-[#c25e30] transition-colors duration-300"
                    variants={{ hover: { x: 8 } }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    ]
                  </motion.span>

                  <motion.div
                    className="absolute bottom-0 left-0 h-[1px] bg-[#c25e30] w-full origin-left"
                    initial={{ scaleX: 0 }}
                    variants={{ hover: { scaleX: 1 } }}
                    transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                  />
                </motion.a>

                <motion.a
                  href="tel:+919453620790"
                  className="relative group flex items-center justify-center font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase text-[10px] md:text-sm text-[#4a3b32] py-2"
                  whileHover="hover"
                >
                  <motion.span
                    className="text-[#4a3b32]/30 group-hover:text-[#c25e30] transition-colors duration-300"
                    variants={{ hover: { x: -8 } }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    [
                  </motion.span>

                  <motion.span
                    className="mx-2 group-hover:text-[#c25e30] transition-colors duration-300"
                    variants={{ hover: { scale: 1.05 } }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    +91 9453620790
                  </motion.span>

                  <motion.span
                    className="text-[#4a3b32]/30 group-hover:text-[#c25e30] transition-colors duration-300"
                    variants={{ hover: { x: 8 } }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    ]
                  </motion.span>

                  <motion.div
                    className="absolute bottom-0 left-0 h-[1px] bg-[#c25e30] w-full origin-left"
                    initial={{ scaleX: 0 }}
                    variants={{ hover: { scaleX: 1 } }}
                    transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                  />
                </motion.a>

                <motion.a
                  href="https://github.com/ayushsingh1524"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group flex items-center justify-center font-bold tracking-[0.2em] uppercase text-xs md:text-sm text-[#4a3b32] py-2"
                  whileHover="hover"
                >
                  <motion.span
                    className="text-[#4a3b32]/30 group-hover:text-[#c25e30] transition-colors duration-300"
                    variants={{ hover: { x: -8 } }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    [
                  </motion.span>

                  <motion.span
                    className="mx-2 group-hover:text-[#c25e30] transition-colors duration-300"
                    variants={{ hover: { scale: 1.05 } }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    GITHUB
                  </motion.span>

                  <motion.span
                    className="text-[#4a3b32]/30 group-hover:text-[#c25e30] transition-colors duration-300"
                    variants={{ hover: { x: 8 } }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    ]
                  </motion.span>

                  <motion.div
                    className="absolute bottom-0 left-0 h-[1px] bg-[#c25e30] w-full origin-left"
                    initial={{ scaleX: 0 }}
                    variants={{ hover: { scaleX: 1 } }}
                    transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                  />
                </motion.a>
              </div>
            </div>

            {/* ROW 2: TOGETHER */}
            <div className="mt-12 w-full flex justify-center">
              <h2 className="text-[clamp(4rem,15vw,12rem)] font-black uppercase tracking-tighter text-[#4a3b32] leading-none">
                TOGETHER
              </h2>
            </div>

            {/* Footer */}
            <div className="mt-16 md:mt-32 w-full max-w-7xl mx-auto border-t border-[#4a3b32]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
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
