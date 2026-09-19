"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

export let preloaderFinished = false;

export function Preloader() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);
  const text3Ref = useRef<HTMLSpanElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);
  const circleWrapperRef = useRef<HTMLDivElement>(null);

  const [isComplete, setIsComplete] = useState(preloaderFinished);

  useGSAP(
    () => {
      if (preloaderFinished) return;

      if (window.location.pathname !== "/") {
        router.push("/");
      }

      if (!text1Ref.current || !text2Ref.current || !text3Ref.current) return;

      const split1 = new SplitType(text1Ref.current, { types: 'chars' });
      const split2 = new SplitType(text2Ref.current, { types: 'chars' });
      const split3 = new SplitType(text3Ref.current, { types: 'words,chars' });

      const tl = gsap.timeline({
        onComplete: () => {
          preloaderFinished = true;
          window.dispatchEvent(new CustomEvent("preloader-complete"));
          setIsComplete(true);
        },
      });

      // Initial states
      gsap.set([split1.chars, split2.chars], { yPercent: 100, autoAlpha: 0 });
      gsap.set(split3.chars, { yPercent: 100, autoAlpha: 0 });
      gsap.set(circleRef.current, { strokeDashoffset: 289 });
      gsap.set(dotRef.current, { scale: 0, autoAlpha: 0 });

      // ─── Phase 1: Reveal name + circle loader ───
      tl.to([split1.chars, split2.chars], {
        yPercent: 0,
        autoAlpha: 1,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.05,
      })
        .to(
          dotRef.current,
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=1.0"
        )
        .to(
          circleRef.current,
          {
            strokeDashoffset: 0,
            duration: 2,
            ease: "power2.inOut",
          },
          "-=0.8"
        )
        .to(
          split3.chars,
          {
            yPercent: 0,
            autoAlpha: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.02,
          },
          "-=1.5"
        )

        // ─── Phase 2: Fade text out, keep circle ───
        .to(
          [split1.chars, split2.chars, split3.chars],
          {
            yPercent: -50,
            autoAlpha: 0,
            duration: 0.8,
            ease: "power3.inOut",
            stagger: 0.01,
          },
          "+=0.4"
        )

        // ─── Phase 3: BG fades + circle drops — simultaneous ───
        .addLabel("drop")
        .to(
          bgRef.current,
          {
            autoAlpha: 0,
            duration: 1.2,
            ease: "power2.inOut",
          },
          "drop"
        )
        .to(
          circleWrapperRef.current,
          {
            y: () => {
              const el = circleWrapperRef.current;
              if (!el) return window.innerHeight / 2;
              const rect = el.getBoundingClientRect();
              const currentCenterY = rect.top + rect.height / 2;
              const targetY = window.innerHeight - 8;
              return targetY - currentCenterY;
            },
            scale: 0.35,
            duration: 2.2,
            ease: "power3.inOut",
          },
          "drop"
        )
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
      id="portfolio-preloader"
      ref={containerRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
    >
      <div ref={bgRef} className="absolute inset-0 bg-[#0c0c0c]" />

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-6 md:gap-10">
          <div className="flex items-center gap-4 md:gap-6">
            <div className="overflow-hidden" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
              <span
                ref={text1Ref}
                className="block text-white text-2xl md:text-4xl font-light tracking-[0.1em] font-sans uppercase"
              >
                Ayush
              </span>
            </div>

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

            <div className="overflow-hidden" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
              <span
                ref={text2Ref}
                className="block text-white text-2xl md:text-4xl font-light tracking-[0.1em] font-sans uppercase"
              >
                Singh
              </span>
            </div>
          </div>

          <div className="overflow-hidden" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
            <span
              ref={text3Ref}
              className="block text-white/40 text-xs md:text-sm font-light tracking-[0.2em] uppercase font-sans"
            >
              Software &amp; Data Engineer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
