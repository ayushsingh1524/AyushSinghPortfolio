"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import { Overlay } from "./Overlay";

const FRAME_COUNT = 89;

export function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    // 1. Load the first frame immediately so the user sees something instantly
    const firstImg = new window.Image();
    firstImg.src = "/sequence/frame_00_delay-0.055s.webp";
    
    firstImg.onload = () => {
      setImages([firstImg]);
      drawFrame(firstImg);
      
      // 2. Once the first frame is loaded, kick off loading the rest in the background
      const loadedImages: HTMLImageElement[] = [firstImg];
      let loadedCount = 1;
      
      for (let i = 1; i < FRAME_COUNT; i++) {
        const img = new window.Image();
        const frameNum = i.toString().padStart(2, "0");
        img.src = `/sequence/frame_${frameNum}_delay-0.055s.webp`;
        
        img.onload = () => {
          loadedImages[i] = img;
          loadedCount++;
          // Update the full array once all frames are loaded
          if (loadedCount === FRAME_COUNT) {
            setImages([...loadedImages]);
          }
        };
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const drawFrame = (image: HTMLImageElement | undefined) => {
    if (!image) return;
    const canvas = canvasRef.current;
    if (!canvas || !image) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const hRatio = canvas.width / image.width;
    const vRatio = canvas.height / image.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - image.width * ratio) / 2;
    const centerShift_y = (canvas.height - image.height * ratio) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      image,
      0,
      0,
      image.width,
      image.height,
      centerShift_x,
      centerShift_y,
      image.width * ratio,
      image.height * ratio
    );
  };

  useEffect(() => {
    if (images.length === 0) return;

    const handleResize = () => {
      drawFrame(images[Math.round(frameIndex.get())]);
    };
    window.addEventListener("resize", handleResize);

    const unsubscribe = frameIndex.on("change", (latest) => {
      const index = Math.round(latest);
      if (images[index]) {
        requestAnimationFrame(() => drawFrame(images[index]));
      }
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      unsubscribe();
    };
  }, [images, frameIndex]);

  return (
    <div id="hero" ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-full" />
        <Overlay progress={scrollYProgress} />
      </div>
    </div>
  );
}
