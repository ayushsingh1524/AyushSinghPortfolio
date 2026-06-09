"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ProjectShowcase } from "@/components/ProjectShowcase";

export default function WorksPage() {
  const router = useRouter();
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCanScroll(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.main 
      initial={{ clipPath: "circle(0px at 50% calc(100vh - 24px))" }}
      animate={{ clipPath: "circle(150vh at 50% calc(100vh - 24px))" }}
      transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }}
      className="bg-black min-h-screen selection:bg-white selection:text-black"
    >
      <ProjectShowcase 
        canScroll={canScroll} 
        onComplete={() => router.push("/about")} 
      />
    </motion.main>
  );
}
