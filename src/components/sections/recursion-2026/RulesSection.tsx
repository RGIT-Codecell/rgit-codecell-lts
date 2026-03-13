"use client";
import React from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function RulesSection() {
  const groups = [
    { title: "Registration", rules: ["Valid College Credentials required.", "Strict registration deadlines.", "One identity per participant."] },
    { title: "Fair Play", rules: ["Zero tolerance for plagiarism.", "Bring personal hardware (Laptops).", "Professional ethics expected."] },
    { title: "Judicial", rules: ["Jury decisions are final.", "Submission latency is the tie-breaker.", "Presence required at ceremony."] },
  ];

  return (
    <section id="rules" className="relative w-full py-24 px-4 bg-transparent flex flex-col items-center">
      {/* Subtle Background Lighting */}
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-[#8B0000]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-cinzel)] text-4xl md:text-6xl font-black tracking-wider uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-b from-[#FFF8DC] to-[#8B6508]">
            Event Rules
          </h2>
          <p className="text-gray-400 font-light tracking-widest text-sm uppercase">
            The Framework
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {groups.map((g, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-full bg-[#120e0a]/40 backdrop-blur-md border border-[#3a2a18]/40 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] p-10 rounded-lg transition-colors hover:border-[#D4AF37]/50"
            >
              <h4 className="text-lg font-bold text-[#E5B80B] mb-6 uppercase tracking-[0.2em] font-serif">{g.title}</h4>
              <ul className="space-y-4">
                {g.rules.map((r, i) => (
                  <li key={i} className="flex items-start text-sm md:text-base text-gray-300 leading-relaxed font-medium">
                    <Zap className="w-5 h-5 mr-3 shrink-0 text-[#8B0000] drop-shadow-[0_0_5px_rgba(139,0,0,0.8)]" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
