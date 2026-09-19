"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/data/projects";

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const filteredProjects = PROJECTS.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase()) ||
    project.category.toLowerCase().includes(search.toLowerCase())
  );

  const actions = [
    { name: "Home", action: () => router.push("/") },
    { name: "Works", action: () => router.push("/works") },
    { name: "About", action: () => router.push("/about") },
    { name: "Email Me", action: () => window.location.href = "mailto:singhayush9179@gmail.com" },
    { name: "GitHub", action: () => window.open("https://github.com/ayushsingh1524", "_blank") },
    { name: "LinkedIn", action: () => window.open("https://linkedin.com/in/ayush1015", "_blank") },
  ].filter(a => a.name.toLowerCase().includes(search.toLowerCase()));

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 pt-[20vh]">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="relative w-full max-w-lg bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden font-sans"
        >
          <div className="p-4 border-b border-white/10">
            <input
              autoFocus
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search projects, pages, or actions..."
              className="w-full bg-transparent text-white placeholder-white/40 outline-none text-lg"
            />
          </div>

          <div className="max-h-[60vh] overflow-y-auto p-2">
            {actions.length > 0 && (
              <div className="mb-4">
                <div className="px-3 py-1 text-xs font-bold tracking-widest uppercase text-white/40">
                  Actions
                </div>
                {actions.map((action) => (
                  <button
                    key={action.name}
                    onClick={() => {
                      action.action();
                      setIsOpen(false);
                    }}
                    className="w-full text-left px-3 py-3 text-white hover:bg-white/10 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <span>{action.name}</span>
                  </button>
                ))}
              </div>
            )}

            {filteredProjects.length > 0 && (
              <div>
                <div className="px-3 py-1 text-xs font-bold tracking-widest uppercase text-white/40">
                  Projects
                </div>
                {filteredProjects.map((project) => (
                  <button
                    key={project.slug}
                    onClick={() => {
                      router.push(`/works/${project.slug}`);
                      setIsOpen(false);
                    }}
                    className="w-full text-left px-3 py-3 hover:bg-white/10 rounded-lg transition-colors flex items-center justify-between"
                  >
                    <span className="text-white">{project.title}</span>
                    <span className="text-white/40 text-xs uppercase tracking-widest">{project.category}</span>
                  </button>
                ))}
              </div>
            )}

            {actions.length === 0 && filteredProjects.length === 0 && (
              <div className="px-3 py-8 text-center text-white/50">
                No results found.
              </div>
            )}
          </div>
          
          <div className="p-3 border-t border-white/10 flex justify-end">
             <div className="text-[10px] uppercase tracking-widest text-white/30 flex gap-2">
                <span><kbd className="font-sans px-1.5 py-0.5 rounded bg-white/10">ESC</kbd> to close</span>
             </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
