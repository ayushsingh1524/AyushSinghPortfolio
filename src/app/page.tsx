"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Hero } from "@/components/Hero";

export default function Home() {
  const router = useRouter();
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    // Prevent accidental scroll routing immediately after load
    const timer = setTimeout(() => setCanScroll(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (document.getElementById("portfolio-preloader") || !canScroll) return;
      if (e.deltaY > 0) {
        // Scroll down detected, go to works
        router.push("/works");
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (document.getElementById("portfolio-preloader") || !canScroll) return;
      const touchEndY = e.touches[0].clientY;
      if (touchStartY - touchEndY > 50) {
        // Swiped up (scrolling down)
        router.push("/works");
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
  }, [router, canScroll]);

  return (
    <main className="bg-black min-h-screen selection:bg-white selection:text-black overflow-hidden">
      <Hero />
    </main>
  );
}
