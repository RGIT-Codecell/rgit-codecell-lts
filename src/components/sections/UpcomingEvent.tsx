"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function UpcomingEvent() {
  return (
    <section className="relative w-full py-24 px-4 bg-[#050505] overflow-hidden border-y border-[#8B0000]/20 -mx-10 md:-mx-12">
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#050505] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8B0000]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#8B0000] bg-[#8B0000]/10 text-[#FFDF00] text-xs font-bold uppercase tracking-[0.2em]">
            Next Challenge
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight uppercase">
            SIH Internal Rounds{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFF8DC] to-[#D4AF37]">
              2026
            </span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl">
            Smart India Hackathon is a nationwide initiative to solve pressing
            problems through innovation. Team leaders, register your teams now!
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="border-l-2 border-[#8B0000] pl-3 text-gray-300">
              20th - 21st August, 2026
            </span>
            <span className="text-[#D4AF37]">•</span>
            <span className="text-gray-400">10:00 AM Onwards</span>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/sih-2026">
              <button className="px-8 py-3 bg-[#8B0000] text-white font-bold uppercase tracking-widest border border-red-900 shadow-[0_0_15px_rgba(139,0,0,0.5)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all flex items-center gap-2 group overflow-hidden relative cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-[150%] group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative z-10 flex items-center gap-2">
                  Explore SIH 2026
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#8B0000] via-[#D4AF37] to-[#8B0000] rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000" />

          <div className="relative bg-black rounded-lg overflow-hidden border border-zinc-800 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
            <Image
              src="https://res.cloudinary.com/dbsohsdkz/image/upload/v1787382801/WhatsApp_Image_2026-08-15_at_23.40.31_bvotun.jpg"
              alt="SIH 2026 Poster"
              width={600}
              height={800}
              className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
            />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}