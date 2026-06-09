"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { preloaderFinished } from "@/components/Preloader";

const NAV_ITEMS = [
  { label: "HOME", target: "/" },
  { label: "WORK", target: "/works" },
  { label: "ABOUT", target: "/about" },
];

export function CircularNav() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [rotation, setRotation] = useState(0);

  // Check preloader finish on mount and listen to events
  useEffect(() => {
    const isPreloaderGone = !document.getElementById("portfolio-preloader");
    if (preloaderFinished || isPreloaderGone) {
      setIsVisible(true);
    }

    const handlePreloaderComplete = () => {
      setIsVisible(true);
    };

    window.addEventListener("preloader-complete", handlePreloaderComplete);
    return () => window.removeEventListener("preloader-complete", handlePreloaderComplete);
  }, []);

  // Trigger 360 spin when pathname changes
  useEffect(() => {
    // Only spin if we're actually visible/mounted fully
    if (isVisible) {
      setRotation(prev => prev + 360);
    }
  }, [pathname, isVisible]);

  // Determine active item index
  const activeIndex = NAV_ITEMS.findIndex(
    item => pathname === item.target || (item.target !== "/" && pathname?.startsWith(item.target))
  );
  const safeActiveIndex = activeIndex >= 0 ? activeIndex : 0;

  // Rearrange items so the active item is always first
  // Rearrange items so the active item is always first
  const rearrangedItems = [
    ...NAV_ITEMS.slice(safeActiveIndex),
    ...NAV_ITEMS.slice(0, safeActiveIndex)
  ];

  const isLightMode = pathname === "/about";

  // Dynamic colors
  const centerDotColor = isLightMode ? "#c25e30" : "#ffffff";
  const innerRingColor = isLightMode ? "rgba(74,59,50,0.5)" : "rgba(255,255,255,0.5)";
  const outerRingColor = isLightMode ? "rgba(74,59,50,0.6)" : "rgba(255,255,255,0.6)";
  const activeTextColor = isLightMode ? "#4a3b32" : "#ffffff";
  const inactiveTextColor = isLightMode ? "rgba(74,59,50,0.4)" : "rgba(255,255,255,0.4)";
  const activeTextShadow = isLightMode ? "none" : "0 0 10px rgba(255,255,255,0.5)";
  const separatorColor = isLightMode ? "rgba(74,59,50,0.3)" : "rgba(255,255,255,0.3)";

  return (
    <div 
      className="relative mt-12 w-[180px] h-[90px] pointer-events-auto overflow-visible select-none md:w-[220px] md:h-[110px] transition-opacity duration-1000 delay-300"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <svg viewBox="0 0 220 110" className={`w-full h-full overflow-visible ${isLightMode ? '' : 'drop-shadow-2xl'}`}>
        <path 
          id="nav-text-path" 
          d="M 28 110 A 82 82 0 0 1 192 110 A 82 82 0 0 1 28 110" 
          fill="none" 
          stroke="none"
        />
        
        <circle cx="110" cy="110" r="6" fill={centerDotColor} className="transition-colors duration-1000" />
        <circle cx="110" cy="110" r="14" fill="none" stroke={innerRingColor} strokeWidth="2" className="transition-colors duration-1000" />

        <motion.g
          animate={{ rotate: rotation }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          style={{ transformOrigin: "center center" }}
        >
          {/* Invisible circle to perfectly center the group's bounding box at 110,110 */}
          <circle cx="110" cy="110" r="110" fill="transparent" />

          {/* The visible line completing the circle, with a gap at the top for the words */}
          <circle 
            cx="110" cy="110" r="82" 
            fill="none" 
            stroke={outerRingColor} 
            strokeWidth="3" 
            transform="rotate(-90 110 110)"
            strokeDasharray="0 105 305 105" 
            className="transition-colors duration-1000"
          />
          
          <text 
            className="text-[12px] font-sans font-extrabold tracking-[0.2em] uppercase transition-colors duration-1000"
            alignmentBaseline="middle"
            dominantBaseline="middle"
          >
            <textPath href="#nav-text-path" startOffset="25%" textAnchor="middle">
              {rearrangedItems.map((item, index) => {
                const isActive = index === 0;
                
                return (
                  <tspan key={item.target}>
                    <Link 
                      href={item.target}
                      className="cursor-pointer transition-colors duration-300 hover:opacity-70"
                      style={{ 
                        fill: isActive ? activeTextColor : inactiveTextColor,
                        textShadow: isActive ? activeTextShadow : "none"
                      }}
                    >
                      {item.label}
                    </Link>
                    {index < rearrangedItems.length - 1 && (
                      <tspan fill={separatorColor} className="transition-colors duration-1000">  •  </tspan>
                    )}
                  </tspan>
                );
              })}
            </textPath>
          </text>
        </motion.g>
      </svg>
    </div>
  );
}
