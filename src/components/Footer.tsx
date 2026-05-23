"use client";

import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-[#050505] text-[#8b949e] overflow-hidden">
      
      {/* Top gradient fade from storm */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 z-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, #0d1117 0%, #050505 100%)"
        }}
      />

      {/* Film grain for continuity */}
      <div className="film-grain" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-20 pt-32 pb-12">
        
        {/* Top Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#fcf7e1]/15 to-transparent mb-16" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          
          {/* Left: Name & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-bold font-mythic tracking-widest uppercase text-[#fcf7e1]/80 mb-2">
              Ayush Singh
            </h3>
            <p className="text-sm tracking-widest uppercase text-[#8b949e]/60 font-sans">
              Software & Systems Engineer
            </p>
          </motion.div>

          {/* Center: Quick Links */}
          <motion.div
            className="flex gap-8 text-sm font-sans tracking-widest uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <a href="https://github.com/ayushsingh1524" className="text-[#8b949e]/60 hover:text-[#fcf7e1] transition-colors duration-300">
              GitHub
            </a>
            <a href="https://linkedin.com/in/ayush1015" className="text-[#8b949e]/60 hover:text-[#fcf7e1] transition-colors duration-300">
              LinkedIn
            </a>
            <a href="mailto:singhayush9179@gmail.com" className="text-[#8b949e]/60 hover:text-[#fcf7e1] transition-colors duration-300">
              Email
            </a>
          </motion.div>

          {/* Right: Back to Top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-3 text-sm font-sans tracking-widest uppercase text-[#8b949e]/60 hover:text-[#fcf7e1] transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span>Back to Top</span>
            <motion.span
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-lg"
            >
              ↑
            </motion.span>
          </motion.button>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#fcf7e1]/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#8b949e]/40 font-sans tracking-wider">
            © {currentYear} Ayush Singh. All rights reserved.
          </p>
          <p className="text-xs text-[#8b949e]/30 font-sans tracking-wider">
            Built with Next.js · Framer Motion · Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}
