"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function GlobalThemeColor() {
  const pathname = usePathname();

  useEffect(() => {
    let color = "#000000"; // Default for home / preloader

    if (pathname === "/about") {
      color = "#f5efe6";
    } else if (pathname === "/works") {
      // Set a default; ProjectShowcase will override per-project
      color = "#ff6a00";
    } else if (pathname?.startsWith("/works/")) {
      // Project detail pages — let ProjectDetailClient handle if needed,
      // but set black as a sensible default
      color = "#000000";
    }

    const metaThemeColor = document.querySelector("meta[name='theme-color']");
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", color);
    }
  }, [pathname]);

  return null;
}
