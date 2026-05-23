"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);
  const text3Ref = useRef<HTMLSpanElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);
  const circleWrapperRef = useRef<HTMLDivElement>(null);

  const [isComplete, setIsComplete] = useState(false);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: () => {
          window.dispatchEvent(new CustomEvent("preloader-complete"));
          setIsComplete(true);
        },
      });

      // Initial states
      gsap.set([text1Ref.current, text2Ref.current, text3Ref.current], {
        yPercent: 100,
        autoAlpha: 0,
      });
      gsap.set(circleRef.current, { strokeDashoffset: 289 });
      gsap.set(dotRef.current, { scale: 0, autoAlpha: 0 });

      // ─── Phase 1: Reveal name + circle loader ───
      tl.to([text1Ref.current, text2Ref.current], {
        yPercent: 0,
        autoAlpha: 1,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.1,
      })
        .to(
          dotRef.current,
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.6"
        )
        .to(
          circleRef.current,
          {
            strokeDashoffset: 0,
            duration: 2,
            ease: "power2.inOut",
          },
          "-=0.4"
        )
        .to(
          text3Ref.current,
          {
            yPercent: 0,
            autoAlpha: 1,
            duration: 1,
            ease: "power3.out",
          },
          "-=1.5"
        )

        // ─── Phase 2: Fade text out, keep circle ───
        .to(
          [text1Ref.current, text2Ref.current, text3Ref.current],
          {
            yPercent: -50,
            autoAlpha: 0,
            duration: 0.8,
            ease: "power3.inOut",
            stagger: 0.05,
          },
          "+=0.4"
        )

        // ─── Phase 3: BG fades + circle drops — simultaneous ───
        // Add a label so both tweens fire at the same time
        .addLabel("drop")

        // Background fades to reveal the hero underneath
        .to(
          bgRef.current,
          {
            autoAlpha: 0,
            duration: 1.2,
            ease: "power2.inOut",
          },
          "drop"
        )

        // Circle drops continuously to the CircularNav position at bottom-center
        .to(
          circleWrapperRef.current,
          {
            y: () => {
              const el = circleWrapperRef.current;
              if (!el) return window.innerHeight / 2;
              const rect = el.getBoundingClientRect();
              const currentCenterY = rect.top + rect.height / 2;
              // Target: bottom of viewport where CircularNav center dot sits
              const targetY = window.innerHeight - 8;
              return targetY - currentCenterY;
            },
            scale: 0.35,
            duration: 2.2,
            ease: "power3.inOut",
          },
          "drop"
        )

        // Add a subtle glow pulse as the circle drops
        .to(
          dotRef.current,
          {
            boxShadow: "0 0 20px 4px rgba(255,255,255,0.6)",
            duration: 1,
            ease: "power2.in",
          },
          "drop"
        )
        .to(
          dotRef.current,
          {
            boxShadow: "0 0 0px 0px rgba(255,255,255,0)",
            duration: 0.8,
            ease: "power2.out",
          },
          "drop+=1"
        )

        // ─── Phase 4: Circle shrinks into the nav dot and vanishes ───
        .to(circleWrapperRef.current, {
          autoAlpha: 0,
          scale: 0.15,
          duration: 0.5,
          ease: "power2.out",
        });
    },
    { scope: containerRef }
  );

  if (isComplete) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
    >
      {/* Layer 1: Solid background — fades to reveal hero */}
      <div ref={bgRef} className="absolute inset-0 bg-[#0c0c0c]" />

      {/* Layer 2: Content (text + circle) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-6 md:gap-10">
          {/* Name row — text clips individually, circle is free */}
          <div className="flex items-center gap-4 md:gap-6">
            <div className="overflow-hidden">
              <span
                ref={text1Ref}
                className="block text-white text-2xl md:text-4xl font-light tracking-[0.1em] font-sans uppercase"
              >
                Ayush
              </span>
            </div>

            {/* Circle — positioned between the name, drops to bottom */}
            <div
              ref={circleWrapperRef}
              className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center will-change-transform"
              style={{ zIndex: 10000 }}
            >
              <span
                ref={dotRef}
                className="absolute block w-1.5 h-1.5 bg-white rounded-full z-10"
              />
              <svg
                className="absolute inset-0 w-full h-full -rotate-90 z-0 origin-center"
                viewBox="0 0 100 100"
              >
                <circle
                  ref={circleRef}
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke="rgba(255,255,255,0.7)"
                  strokeWidth="1.5"
                  strokeDasharray="289"
                  strokeDashoffset="289"
                  className="will-change-[stroke-dashoffset,transform]"
                />
              </svg>
            </div>

            <div className="overflow-hidden">
              <span
                ref={text2Ref}
                className="block text-white text-2xl md:text-4xl font-light tracking-[0.1em] font-sans uppercase"
              >
                Singh
              </span>
            </div>
          </div>

          {/* Subtitle */}
          <div className="overflow-hidden">
            <span
              ref={text3Ref}
              className="block text-white/40 text-xs md:text-sm font-light tracking-[0.2em] uppercase font-sans"
            >
              Software &amp; Systems Engineer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
