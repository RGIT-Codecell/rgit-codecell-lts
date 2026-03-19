"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import RainOverlay from "@/components/ui/RainOverlay";
import Link from "next/link";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress through the 400vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  const fortY = useTransform(scrollYProgress, [0, 0.4], ["0%", "-50%"]);
  const fortOpacity = useTransform(scrollYProgress, [0.2, 0.4], [1, 0]);

  const pitchBlackOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0.4]);

  const wombY = useTransform(scrollYProgress, [0.4, 0.8], ["20%", "0%"]);
  const wombOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

  const breadcrumbY = useTransform(scrollYProgress, [0.35, 0.45], [20, 0]);
  const lineHeight = useTransform(scrollYProgress, [0.4, 0.45, 0.55, 0.6], ["0px", "150px", "150px", "0px"]);

  const cinzelText = "font-[family-name:var(--font-cinzel-decorative)] font-black tracking-wider uppercase";

  return (
    <section ref={containerRef} className="relative h-[320vh] w-full bg-black selection:bg-[#660000] selection:text-[#e6b800]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        <motion.div 
          style={{ y: wombY, opacity: wombOpacity }} 
          className="absolute inset-0 z-0"
        >
          <Image
            src="/tumbbad-roots.jpeg"
            alt="Core Background"
            fill
            quality={100}
            className="object-cover opacity-60"
          />
        </motion.div>

        <motion.div 
          style={{ opacity: pitchBlackOpacity }}
          className="absolute inset-0 z-10 bg-black pointer-events-none"
        />

        <motion.div 
          style={{ y: fortY, opacity: fortOpacity }} 
          className="absolute inset-0 z-20 pointer-events-none"
        >
          <Image
            src="/tumbbad_exterior.png"
            alt="Exterior Background"
            fill
            priority
            quality={100}
            className="object-cover"
          />
          <RainOverlay />
        </motion.div>
        
        <div className="absolute inset-0 z-30 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,#000000_90%)]" />
      </div>

      <div className="absolute inset-0 w-full flex flex-col z-40">
        
        <motion.div
          style={{ opacity: heroTextOpacity, y: heroTextY }}
          className="h-screen flex flex-col justify-center items-center px-3 sm:px-4 pt-16 sm:pt-20 text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 0.7, letterSpacing: "0.4em" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="text-gray-300 text-[10px] sm:text-xs md:text-xl uppercase mb-2 sm:mb-4 font-bold drop-shadow-md"
          >
            RGIT Codecell & CESS Present
          </motion.h2>

          <h1 className={`${cinzelText} text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-black tracking-wider mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-b from-[#FFF8DC] via-[#D4AF37] to-[#8B6508] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]`}>
            RECURSION 7.0
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="text-gray-200 max-w-2xl mx-auto text-sm sm:text-base md:text-xl mb-8 sm:mb-12 font-light tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] px-2"
          >
            Descend into Mumbai&apos;s Elite Technical Summit. Benchmark your abilities in an environment of high-stakes evolution.
          </motion.p>

          <motion.a
            href="/recursion-2026/shortlisted"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-[#660000] text-[#e6b800] font-bold uppercase tracking-widest overflow-hidden border border-[#4d0000] shadow-[0_0_30px_rgba(102,0,0,0.8)] transition-all hover:shadow-[0_0_50px_rgba(230,184,0,0.5)] hover:border-[#e6b800] hover:bg-[#800000] text-sm sm:text-base"
          >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e6b800]/20 to-transparent -translate-x-[150%] group-hover:animate-[shimmer_1.5s_infinite]" />
              <Link href="/recursion-2026/shortlisted">
              {/* <span className="relative z-10 font-medium tracking-widest block transition-transform group-hover:scale-105">Checkout Recursion 7.0 Shortlisted Teams</span> */}
                Checkout Recursion 7.0 Shortlisted Teams
              </Link>
          </motion.a>
        </motion.div>

        <div className="h-[80vh] sm:h-[120vh] w-full flex flex-col justify-center items-center relative">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: "blur(15px)" }}
              whileInView={{ opacity: 1, scale: 1.1, filter: "blur(0px)" }}
              viewport={{ amount: 0.4, margin: "-100px" }}
              transition={{ duration: 2.5, ease: "easeOut" }}
              className="text-center z-50 flex flex-col items-center"
            >
                <p className="font-[family-name:var(--font-cinzel)] text-[#8B0000] text-xl sm:text-3xl md:text-5xl lg:text-6xl tracking-widest uppercase font-black mb-4 sm:mb-6 drop-shadow-[0_0_20px_rgba(139,0,0,0.9)] px-4">
                  Do not fear the dark
                </p>
                <p className="text-gray-500 font-light tracking-[0.3em] sm:tracking-[0.5em] text-xs sm:text-sm md:text-base uppercase opacity-60">
                  Keep Descending
                </p>
            </motion.div>

            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              whileInView={{ height: "250px", opacity: 1 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute top-[65%] left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-[#8B0000] to-transparent animate-pulse"
            />
            
        </div>

        <div className="h-screen flex flex-col justify-center items-center text-center px-3 sm:px-4">
            <h2 className={`${cinzelText} text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-b from-[#FFF8DC] via-[#D4AF37] to-[#8B6508]`}>
                Unlock the Treasure
            </h2>
            <p className="text-[#d4af37] max-w-2xl mx-auto text-sm sm:text-lg md:text-2xl font-semibold tracking-[0.1em] sm:tracking-[0.2em] uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] px-2">
                Only the evolved escape the core.
            </p>
            <div className="mt-12 opacity-80 animate-bounce">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#e6b800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M19 12l-7 7-7-7"/>
              </svg>
            </div>
        </div>

      </div>
    </section>
  );
}
