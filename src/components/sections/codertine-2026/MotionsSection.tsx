"use client";

import React from "react";
import { motion } from "framer-motion";
import { ENGINEERING_MOTIONS } from "@/data/codertine-2026";
import { Cpu, Search, Bug, Code2 } from "lucide-react";

const MOTION_ICONS = [Cpu, Search, Bug, Code2];

export default function MotionsSection() {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 border-y border-[#00363f] bg-[#000f13]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-[#00f5ff] uppercase">
            // The 4 Core Motions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            A Week of Doing, Not Just Watching
          </h2>
          <p className="text-[#76cdd8] text-sm sm:text-base mt-3">
            Every day introduces a practical engineering motion that builds upon the last —
            until building, auditing, debugging, and shipping feel second nature.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ENGINEERING_MOTIONS.map((motionItem, idx) => {
            const Icon = MOTION_ICONS[idx % MOTION_ICONS.length];
            return (
              <motion.div
                key={motionItem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group rounded-2xl p-6 bg-gradient-to-b from-[#01262d] to-[#00181d] border border-[#00e5ff]/25 hover:border-[#00f5ff] backdrop-blur-md hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(0,245,255,0.18)]"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-[#00191f] border border-[#00e5ff]/30 text-[#00f5ff]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-[#64a9b3] tracking-wider font-semibold">
                    STEP 0{idx + 1}
                  </span>
                </div>

                <div className="font-mono text-sm font-bold text-[#00f5ff] mb-1">
                  {motionItem.glyph}
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {motionItem.title}
                </h3>

                <p className="text-xs font-semibold text-[#80f7ff] uppercase tracking-wider mb-3">
                  {motionItem.tagline}
                </p>

                <p className="text-xs sm:text-sm text-[#76cdd8] leading-relaxed">
                  {motionItem.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
