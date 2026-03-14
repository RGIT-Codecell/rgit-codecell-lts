"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Sponsers() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (    <section className="relative w-full py-16 sm:py-24 px-3 sm:px-4 bg-transparent">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#8B0000]/50 to-transparent" />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-cinzel)] text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest uppercase mb-10 sm:mb-16 text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-600 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
        >
          Our Allies
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-12"
        >
          {/* Associate Partner */}
          <motion.div variants={itemVariants} className="flex flex-col items-center order-2 md:order-1 w-full md:w-1/3">
            <p className="text-[#D4AF37] text-xs tracking-widest uppercase mb-4 font-bold">Associate Partner</p>
            <div className="w-full h-24 sm:h-32 relative bg-[#120e0a]/40 backdrop-blur-md border border-[#3a2a18]/30 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] rounded-xl flex items-center justify-center p-4 sm:p-6 transition-all hover:border-zinc-600 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] group">
              <Image 
                src="/recursion/itvedant.png" 
                alt="I.T. Vedant" 
                fill 
                className="object-contain p-4 opacity-80 group-hover:opacity-100 transition-opacity" 
              />
            </div>
          </motion.div>

          {/* Title Sponsor */}
          <motion.div variants={itemVariants} className="flex flex-col items-center order-1 md:order-2 w-full md:w-5/12 z-10">
            <p className="text-[#8B0000] text-sm tracking-widest uppercase mb-4 font-black drop-shadow-[0_0_5px_rgba(139,0,0,0.8)]">Title Sponsor</p>
            <div className="w-full h-28 sm:h-40 relative bg-[#120e0a]/40 backdrop-blur-md border border-[#3a2a18]/30 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] rounded-xl flex items-center justify-center p-6 sm:p-8 transition-all hover:-translate-y-2 hover:border-[#8B0000] hover:shadow-[0_0_30px_rgba(139,0,0,0.3)]">
              <div className="absolute inset-0 bg-white/5 rounded-xl pointer-events-none" />
              <Image 
                src="/recursion/veefly.png" 
                alt="VeeFly" 
                fill 
                className="object-contain p-6" 
              />
            </div>
          </motion.div>

          {/* Platform Partner */}
          <motion.div variants={itemVariants} className="flex flex-col items-center order-3 md:order-3 w-full md:w-1/3">
            <p className="text-[#D4AF37] text-xs tracking-widest uppercase mb-4 font-bold">Platform Partner</p>
            <div className="w-full h-24 sm:h-32 relative bg-[#120e0a]/40 backdrop-blur-md border border-[#3a2a18]/30 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] rounded-xl flex items-center justify-center p-4 sm:p-6 transition-all hover:border-zinc-600 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] group">
              <Image 
                src="/recursion/unstop.png" 
                alt="Unstop" 
                fill 
                className="object-contain p-4 opacity-80 group-hover:opacity-100 transition-opacity" 
              />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}