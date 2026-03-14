"use client";
import React from "react";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

export default function PrizeSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-16 sm:py-24 px-3 sm:px-4 bg-transparent overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#8B0000] via-[#050505] to-[#050505]" />

      <div className="relative z-10 text-center mb-16 w-full max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-tumbbad-blood text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.4em] uppercase font-bold mb-3 sm:mb-4 drop-shadow-[0_0_8px_rgba(139,0,0,0.8)]"
        >
          The Reward for the Evolved
        </motion.h2>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-[family-name:var(--font-cinzel)] text-3xl sm:text-5xl md:text-7xl font-black tracking-wider uppercase mb-2 text-transparent bg-clip-text bg-gradient-to-b from-[#FFF8DC] via-[#D4AF37] to-[#8B6508] drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]"
        >
          Prize Pool
        </motion.h1>

        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.2, type: "spring" }}
           className="font-[family-name:var(--font-cinzel)] text-5xl sm:text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FFDF00] via-[#D4AF37] to-[#664d00] drop-shadow-[0_0_40px_rgba(255,223,0,0.4)] my-4 sm:my-6"
        >
          ₹3,50,000
        </motion.div>
        
        <p className="text-gray-400 font-light tracking-widest text-xs sm:text-sm uppercase">
          + 50k Vouchers Worth Special Prizes
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 items-center px-2 sm:px-4"
      >
        {/* Third Tier Option (Left) */}
        <motion.div variants={cardVariants} className="order-2 md:order-1 flex flex-col items-center">
          <div className="w-full relative group rounded-lg bg-[#120e0a]/40 backdrop-blur-md border border-[#3a2a18]/30 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] p-6 sm:p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/80 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]">
            <Trophy className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-gray-400 group-hover:text-gray-200 transition-colors" strokeWidth={1.5} />
            <h3 className="font-[family-name:var(--font-cinzel)] text-3xl sm:text-4xl font-bold text-gray-300 mb-2">1 LAKH</h3>
            <p className="text-gray-500 text-sm tracking-widest uppercase font-medium">Cash + Vouchers</p>
          </div>
        </motion.div>

        {/* First Tier Option (Center) */}
        <motion.div variants={cardVariants} className="order-1 md:order-2 flex flex-col items-center z-20">
          <div className="w-full relative group rounded-lg bg-[#120e0a]/40 backdrop-blur-md border border-[#3a2a18]/30 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] p-7 sm:p-10 text-center transition-all duration-500 hover:-translate-y-4 hover:border-[#FFDF00] hover:shadow-[0_0_60px_rgba(255,223,0,0.4)] md:scale-105">
            {/* Subtle glow behind the trophy */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#D4AF37]/20 blur-2xl rounded-full" />
            <Trophy className="relative w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 text-[#D4AF37] group-hover:text-[#FFDF00] transition-colors drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]" strokeWidth={1.5} />
            <h3 className="font-[family-name:var(--font-cinzel)] text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FFF8DC] to-[#D4AF37] mb-2">1.2 LAKH</h3>
            <p className="text-[#D4AF37] text-sm tracking-widest uppercase font-medium">Cash + Vouchers</p>
          </div>
        </motion.div>

        {/* Second Tier Option (Right) */}
        <motion.div variants={cardVariants} className="order-3 md:order-3 flex flex-col items-center">
          <div className="w-full relative group rounded-lg bg-[#120e0a]/40 backdrop-blur-md border border-[#3a2a18]/30 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] p-6 sm:p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/80 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]">
            <Trophy className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-[#8B6508] group-hover:text-[#D4AF37] transition-colors" strokeWidth={1.5} />
            <h3 className="font-[family-name:var(--font-cinzel)] text-3xl sm:text-4xl font-bold text-gray-400 mb-2">80K</h3>
            <p className="text-gray-500 text-sm tracking-widest uppercase font-medium">Cash + Vouchers</p>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}