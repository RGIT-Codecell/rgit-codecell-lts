"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CODERTINE_MODULES, REGISTRATION_FORM_URL } from "@/data/codertine-2026";
import {
  Calendar,
  Clock,
  MapPin,
  Laptop,
  Award,
  ArrowRight,
  ExternalLink,
  Sparkles,
  BookOpen,
} from "lucide-react";

export default function RoadmapTimeline() {
  return (
    <section id="arc-roadmap" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#001317] overflow-hidden">
      {/* Background glow in poster cyan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[#00e5ff]/10 blur-[170px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#002730] border border-[#00f5ff]/40 text-[#00f5ff] text-xs font-mono font-bold tracking-widest uppercase mb-3 shadow-[0_0_15px_rgba(0,245,255,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#00f5ff]" />
            <span>The 5-Day Master Arc Timeline</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Your Journey Begins Here
          </h2>
          <p className="text-[#76cdd8] text-sm sm:text-base mt-4 leading-relaxed">
            5 days. 5 distinct challenges. Follow the timeline through every module to inspect syllabus guides,
            event schedules, and format details.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative">
          {/* Central Vertical Timeline Spine */}
          <div
            className="absolute top-8 bottom-8 left-6 md:left-1/2 -translate-x-1/2 w-1 rounded-full pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, #00f0d4 0%, #00d4ff 25%, #00f5ff 50%, #38bdf8 75%, #ff7800 100%)",
              boxShadow: "0 0 20px rgba(0, 245, 255, 0.4)",
            }}
          />

          {/* Timeline Nodes & Cards */}
          <div className="space-y-16 sm:space-y-24">
            {CODERTINE_MODULES.map((module, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={module.slug}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Center Node Badge */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="w-12 h-12 rounded-2xl flex flex-col items-center justify-center font-mono font-black text-sm border-2 shadow-xl"
                      style={{
                        backgroundColor: module.bgDark,
                        borderColor: module.glowColor,
                        boxShadow: `0 0 25px ${module.glowColor}`,
                      }}
                    >
                      <span className={`text-[10px] font-bold ${module.accentColor}`}>DAY</span>
                      <span className="text-white text-base leading-none">0{idx + 1}</span>
                    </motion.div>
                  </div>

                  {/* Empty Spacer on Alternate Side (Desktop) */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card on Current Side */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={`w-full md:w-[calc(50%-40px)] pl-16 md:pl-0 ${
                      isEven ? "md:pr-10" : "md:pl-10"
                    }`}
                  >
                    <div
                      className={`relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br ${module.toneGradient} border ${module.borderColor} shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
                      style={{
                        boxShadow: `0 15px 35px -10px ${module.glowColor}`,
                      }}
                    >
                      {/* Top Meta Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-2.5 pb-4 mb-4 border-b border-white/10">
                        <div className="flex items-center gap-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${module.badgeBg}`}>
                            {module.day.toUpperCase()} · {module.dateBadge.toUpperCase()}
                          </span>

                          <span className="font-mono text-xs font-bold text-white/70">
                            {module.glyph}
                          </span>
                        </div>

                        {module.partner && (
                          <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-white/10 text-white/90">
                            Partner: {module.partner}
                          </span>
                        )}
                      </div>

                      {/* Main Titles */}
                      <div className="space-y-1.5 mb-4">
                        <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                          {module.title}
                        </h3>

                        <p className={`text-sm sm:text-base font-extrabold italic ${module.accentColor}`}>
                          "{module.tagline}"
                        </p>
                      </div>

                      <p className="text-slate-300 text-sm leading-relaxed mb-5">
                        {module.subtitle}
                      </p>

                      {/* Key Takeaways Checklist from Poster */}
                      <div className="space-y-2 mb-6 pt-2 border-t border-white/10">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block font-bold">
                          Key Coverage:
                        </span>
                        <ul className="space-y-1.5 text-xs text-slate-200">
                          {module.whatItCovers.slice(0, 4).map((pt, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2">
                              <span className={`font-bold ${module.accentColor}`}>✓</span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Schedule Chips */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="inline-flex items-center text-xs font-mono text-slate-300 bg-black/40 px-2.5 py-1 rounded-lg border border-white/10">
                          <Clock className="w-3.5 h-3.5 mr-1.5 opacity-80" />
                          {module.time}
                        </span>

                        <span className="inline-flex items-center text-xs font-mono text-slate-300 bg-black/40 px-2.5 py-1 rounded-lg border border-white/10">
                          <MapPin className="w-3.5 h-3.5 mr-1.5 opacity-80" />
                          {module.venue}
                        </span>

                        <span className="inline-flex items-center text-xs font-mono text-slate-300 bg-black/40 px-2.5 py-1 rounded-lg border border-white/10">
                          <Laptop className="w-3.5 h-3.5 mr-1.5 opacity-80" />
                          {module.laptopRequirement.includes("Required") ? "Laptop Needed" : "Guided"}
                        </span>
                      </div>

                      {/* Actions Row */}
                      <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-white/10">
                        <Link
                          href={`/codertine-26/events/${module.slug}`}
                          className={`inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all group tracking-wider uppercase ${module.btnStyle}`}
                        >
                          <BookOpen className="w-4 h-4 mr-2" />
                          <span>View Event Guide</span>
                          <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <a
                          href={REGISTRATION_FORM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-black/40 hover:bg-black/60 text-white/90 hover:text-white border border-white/20 text-xs sm:text-sm font-bold transition-all uppercase tracking-wider"
                        >
                          <ExternalLink className="w-3.5 h-3.5 mr-1.5 opacity-70" />
                          <span>Register</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
