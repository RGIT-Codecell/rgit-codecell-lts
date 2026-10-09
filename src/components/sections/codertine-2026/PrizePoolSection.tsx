"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Gift, Sparkles, CheckCircle2 } from "lucide-react";
import { PRIZE_TIERS } from "@/data/codertine-2026";

export default function PrizePoolSection() {
  return (
    <section id="prizes-section" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-[#003842] bg-gradient-to-b from-[#001317] via-[#001a21] to-[#001317]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#002730] border border-[#00f5ff]/40 text-[#00f5ff] text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5 text-[#00f5ff]" />
            <span>Prizes &amp; Accolades</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            ₹10,000 Prize Pool Per Competition
          </h2>
          <p className="text-[#76cdd8] text-sm sm:text-base mt-3">
            Compete across Debug the Bug, The Data Hunt, and DSA Verse to claim your share of the
            ₹30,000+ total tournament pool, certificates, and exclusive developer swag.
          </p>
        </div>

        {/* Podium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {PRIZE_TIERS.map((tier, idx) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-[#01262e] to-[#00171d] border border-[#00e5ff]/25 backdrop-blur-xl flex flex-col items-center text-center shadow-xl hover:-translate-y-1.5 transition-all duration-300 hover:border-[#00f5ff]/50"
            >
              {idx === 0 && (
                <div className="absolute -top-3.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md">
                  CHAMPION
                </div>
              )}

              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg"
                style={{
                  backgroundColor: `${tier.color}20`,
                  border: `1.5px solid ${tier.color}70`,
                }}
              >
                <Trophy className="w-8 h-8" style={{ color: tier.color }} />
              </div>

              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#76cdd8] mb-1">
                {tier.tier} Tier
              </span>
              <h3 className="text-2xl font-black text-white mb-2">{tier.place}</h3>

              <div
                className="text-4xl sm:text-5xl font-black font-mono my-2"
                style={{ color: tier.color }}
              >
                {tier.amount}
              </div>

              <span className="text-xs font-semibold text-[#80f7ff] mb-4">
                Cash + Voucher Award Per Event
              </span>

              <div className="w-full pt-4 border-t border-[#003842] text-xs text-[#b2ebf2] space-y-2 text-left">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#38ef7d] shrink-0" />
                  <span>Certificate of Merit</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00f5ff] shrink-0" />
                  <span>College-wide Announcement</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00f5d4] shrink-0" />
                  <span>Special Goodies &amp; Vouchers</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Perks Highlights Box */}
        <div className="rounded-2xl p-6 sm:p-8 bg-[#001a21] border border-[#003842] grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
            <Award className="w-8 h-8 text-[#00f5ff] mb-2" />
            <h4 className="text-base font-bold text-white mb-1">Official Certificates</h4>
            <p className="text-xs text-[#76cdd8]">
              Co-branded certificates from RGIT Codecell, RGIT CESS, CodeChef and Nostocx.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Gift className="w-8 h-8 text-[#00f5d4] mb-2" />
            <h4 className="text-base font-bold text-white mb-1">Tech Goodies &amp; Swag</h4>
            <p className="text-xs text-[#76cdd8]">
              Top performers receive exclusive developer merchandise, sticker packs and sponsor vouchers.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Sparkles className="w-8 h-8 text-[#38ef7d] mb-2" />
            <h4 className="text-base font-bold text-white mb-1">Resume &amp; Leaderboard</h4>
            <p className="text-xs text-[#76cdd8]">
              Showcase verified CodeChef and Nostocx contest rankings on your technical portfolio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
