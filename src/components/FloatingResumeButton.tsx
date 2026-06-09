"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Replace this URL with your Overleaf "View PDF" link, Google Drive link, or Notion public link.
// The button will always route to this external URL, meaning you never have to touch the codebase when you update your resume!
const RESUME_URL = "https://www.overleaf.com/read/bqtfvkwjwynn#67b4b2";

export function FloatingResumeButton() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on /works, /about, and project detail pages
    if (pathname && (pathname.startsWith("/works") || pathname === "/about")) {
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [pathname]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      className="fixed bottom-8 right-8 z-[9999] mix-blend-difference"
    >
      <motion.a
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 group shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FileText size={18} className="group-hover:scale-110 transition-transform duration-300" />
        <span className="font-bold tracking-widest text-xs uppercase hidden md:block">
          Resume
        </span>
      </motion.a>
    </motion.div>
  );
}
