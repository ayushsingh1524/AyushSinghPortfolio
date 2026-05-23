"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "PROJECTS", target: "projects" },
  { label: "EXPERIENCE", target: "experience" },
  { label: "TECH", target: "tech-stack" },
  { label: "CONTACT", target: "contact" },
];

export function CircularNav() {
  const [active, setActive] = useState("projects");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.target);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative mt-12 w-[220px] h-[110px] pointer-events-auto overflow-visible select-none">
      {/* 
        Semi-circle SVG 
        viewBox is set up so 0,0 to 220,110 covers the top half of a circle.
        Center is at 110, 110.
      */}
      <svg viewBox="0 0 220 110" className="w-full h-full overflow-visible drop-shadow-2xl">
        
        {/* The guide circle outline */}
        <circle 
          cx="110" cy="110" r="90" 
          fill="none" 
          stroke="rgba(255,255,255,0.15)" 
          strokeWidth="1" 
        />

        {/* 
          The text path. 
          A 95 95 = radius 95 (slightly outside the line so it sits cleanly)
          Start at X=15, Y=110 -> End at X=205, Y=110
        */}
        <path 
          id="nav-text-path" 
          d="M 15 110 A 95 95 0 0 1 205 110" 
          fill="none" 
          stroke="none"
        />

        {/* Center alignment dot */}
        <circle cx="110" cy="110" r="3" fill="#fcf7e1" />
        {/* Center decorative ring */}
        <circle cx="110" cy="110" r="8" fill="none" stroke="rgba(252,247,225,0.3)" strokeWidth="1" />

        <text className="text-[9.5px] font-sans font-extrabold tracking-[0.15em] uppercase fill-[#8b949e]">
          <textPath href="#nav-text-path" startOffset="50%" textAnchor="middle">
            {NAV_ITEMS.map((item, index) => (
              <tspan key={item.target}>
                {/* SVG <a> tag allows standard web linking/clicking inside SVG text */}
                <a 
                  href={`#${item.target}`}
                  onClick={(e) => { e.preventDefault(); scrollTo(item.target); }}
                  className="cursor-pointer transition-colors duration-300 hover:fill-[#dc2626]"
                  style={{ 
                    fill: active === item.target ? "#fcf7e1" : "inherit",
                    textShadow: active === item.target ? "0 0 8px rgba(252,247,225,0.4)" : "none"
                  }}
                >
                  {item.label}
                </a>
                {index < NAV_ITEMS.length - 1 && (
                  <tspan fill="rgba(255,255,255,0.15)">  •  </tspan>
                )}
              </tspan>
            ))}
          </textPath>
        </text>

      </svg>
    </div>
  );
}
