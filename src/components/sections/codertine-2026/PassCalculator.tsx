"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { REGISTRATION_FORM_URL } from "@/data/codertine-2026";
import {
  Check,
  Sparkles,
  Calculator,
  ArrowRight,
  ShieldCheck,
  Gift,
  Award,
  Zap,
} from "lucide-react";

interface CompetitionOption {
  id: string;
  name: string;
  day: string;
  date: string;
  tagline: string;
  standalonePrice: number;
  highlight: string;
}

const COMPETITIONS: CompetitionOption[] = [
  {
    id: "debug-the-bug",
    name: "Debug the Bug",
    day: "Wednesday",
    date: "7th October",
    tagline: "Competitive Debugging Arena",
    standalonePrice: 30,
    highlight: "4 progressive tiers of broken code",
  },
  {
    id: "the-data-hunt",
    name: "The Data Hunt",
    day: "Thursday",
    date: "8th October",
    tagline: "Technology & Virtual Market Simulation",
    standalonePrice: 50,
    highlight: "Powered by Nostocx with virtual capital",
  },
  {
    id: "dsa-verse",
    name: "DSA Verse",
    day: "Friday",
    date: "9th October",
    tagline: "Flagship Competitive Programming",
    standalonePrice: 60,
    highlight: "5 questions on CodeChef",
  },
];

export default function PassCalculator() {
  const [selectedIds, setSelectedIds] = useState<string[]>([
    "debug-the-bug",
    "the-data-hunt",
    "dsa-verse",
  ]);

  const toggleCompetition = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectAll = () => {
    setSelectedIds(COMPETITIONS.map((c) => c.id));
  };

  const selectCount = selectedIds.length;

  let calculatedPrice = 0;
  let savings = 0;
  const standaloneSum = selectedIds.reduce((sum, id) => {
    const comp = COMPETITIONS.find((c) => c.id === id);
    return sum + (comp ? comp.standalonePrice : 0);
  }, 0);

  if (selectCount === 1) {
    calculatedPrice = 30;
    savings = Math.max(0, standaloneSum - 30);
  } else if (selectCount === 2) {
    calculatedPrice = 50;
    savings = Math.max(0, standaloneSum - 50);
  } else if (selectCount === 3) {
    calculatedPrice = 60;
    savings = Math.max(0, standaloneSum - 60);
  }

  return (
    <section id="pass-calculator" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#000f13] border-t border-[#00363f]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#002830] border border-[#00f5ff]/40 text-[#00f5ff] text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#00f5ff]" />
            <span>Interactive Multi-Event Pass Builder</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Build Your CoderTine Pass
          </h2>
          <p className="text-[#76cdd8] text-sm sm:text-base mt-3">
            Select the competitions you want to participate in. Our dynamic bundle pricing gives you
            maximum flexibility with massive multi-event savings!
          </p>
        </div>

        {/* Pricing Tiers Quick Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-[#00191f] border border-[#003842] text-center">
            <span className="text-xs font-mono text-[#64a9b3] uppercase block">1 Competition</span>
            <span className="text-2xl font-black font-mono text-white mt-1 block">₹30</span>
            <span className="text-xs text-[#76cdd8]">Single event entry</span>
          </div>

          <div className="p-4 rounded-xl bg-[#00252d] border border-[#00e5ff]/35 text-center relative overflow-hidden">
            <span className="text-xs font-mono text-[#00e5ff] uppercase block font-semibold">2 Competitions</span>
            <span className="text-2xl font-black font-mono text-[#00f5ff] mt-1 block">₹50</span>
            <span className="text-xs text-[#38ef7d] font-semibold">Save ₹10 off standalone</span>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-r from-[#01353e] via-[#01414c] to-[#01353e] border-2 border-[#00f5ff] text-center relative shadow-[0_0_25px_rgba(0,245,255,0.2)]">
            <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-[#00f5ff] text-[10px] font-black uppercase text-[#001417] tracking-wider">
              BEST VALUE
            </span>
            <span className="text-xs font-mono text-[#80f7ff] uppercase block font-semibold">All 3 Competitions</span>
            <span className="text-2xl font-black font-mono text-white mt-1 block">₹60</span>
            <span className="text-xs text-[#00f5ff] font-bold">Save ₹80 (57% OFF)</span>
          </div>
        </div>

        {/* Calculator Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Selectable Competitions */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2">
              <span className="text-xs font-mono font-semibold text-[#80f7ff] uppercase tracking-wider">
                Select Competitions ({selectCount} of 3 selected):
              </span>
              <button
                type="button"
                onClick={selectAll}
                className="text-xs font-mono text-[#00f5ff] hover:text-white underline underline-offset-4 font-bold"
              >
                Select All 3 (₹60)
              </button>
            </div>

            {COMPETITIONS.map((comp) => {
              const isSelected = selectedIds.includes(comp.id);
              return (
                <div
                  key={comp.id}
                  onClick={() => toggleCompetition(comp.id)}
                  className={`cursor-pointer rounded-2xl p-4 sm:p-5 border transition-all duration-200 flex items-center justify-between gap-4 ${
                    isSelected
                      ? "bg-[#012830] border-[#00f5ff] shadow-[0_0_20px_rgba(0,245,255,0.18)]"
                      : "bg-[#00181d] border-[#00343d] hover:border-[#00e5ff]/40 opacity-80"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-6 h-6 rounded-lg flex items-center justify-center border transition-colors ${
                        isSelected
                          ? "bg-[#00f5ff] border-[#00f5ff] text-[#001417] font-black"
                          : "border-[#004e5a] bg-[#001317]"
                      }`}
                    >
                      {isSelected && <Check className="w-4 h-4 stroke-[3]" />}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base sm:text-lg font-bold text-white">
                          {comp.name}
                        </h4>
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#002730] text-[#80f7ff] border border-[#00e5ff]/20">
                          {comp.date}
                        </span>
                      </div>
                      <p className="text-xs text-[#76cdd8] mt-0.5">
                        {comp.tagline} · <span className="text-[#00f5ff] font-semibold">{comp.highlight}</span>
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-xs line-through text-[#4a848c] block font-mono">
                      ₹{comp.standalonePrice}
                    </span>
                    <span className="text-xs font-mono font-semibold text-[#80f7ff]">
                      Standalone
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Included Free Workshops Note */}
            <div className="p-4 rounded-xl bg-[#002b28]/60 border border-[#38ef7d]/40 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#38ef7d]/20 text-[#38ef7d] shrink-0">
                <Check className="w-4 h-4 stroke-[2.5]" />
              </div>
              <div className="text-xs text-[#b2f5ea] leading-relaxed">
                <strong className="text-[#38ef7d] block font-semibold mb-0.5">
                  Both Workshops Are Automatically Free!
                </strong>
                AI Build Lab (Oct 5) and Reverse Engineering (Oct 6) are 100% free for all students.
              </div>
            </div>
          </div>

          {/* Right Column: Pass Summary Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl p-6 sm:p-7 bg-gradient-to-b from-[#012830]/95 via-[#011d24]/95 to-[#001317]/95 border border-[#00e5ff]/40 shadow-[0_0_35px_rgba(0,245,255,0.15)] backdrop-blur-xl">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00f5ff] block mb-1">
                Pass Summary
              </span>
              <h3 className="text-2xl font-black text-white">
                {selectCount === 3
                  ? "All-Access Triple Pass"
                  : selectCount === 2
                  ? "Double Threat Pass"
                  : selectCount === 1
                  ? "Single Event Pass"
                  : "No Event Selected"}
              </h3>

              <div className="my-6 pt-4 border-t border-[#003842] space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-[#76cdd8]">Selected Competitions</span>
                  <span className="font-mono text-white font-semibold">{selectCount} of 3</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-[#76cdd8]">Included Workshops</span>
                  <span className="font-mono text-[#38ef7d] font-semibold">2 (Free)</span>
                </div>

                {savings > 0 && (
                  <div className="flex justify-between text-sm text-[#38ef7d] font-semibold">
                    <span>Bundle Discount</span>
                    <span>- ₹{savings}</span>
                  </div>
                )}

                <div className="pt-3 border-t border-[#004754] flex items-baseline justify-between">
                  <span className="text-base font-bold text-white">Total Amount</span>
                  <div className="text-right">
                    <span className="text-3xl font-black font-mono text-[#00f5ff]" style={{ textShadow: "0 0 15px rgba(0, 245, 255, 0.45)" }}>
                      ₹{calculatedPrice}
                    </span>
                    {selectCount === 3 && (
                      <span className="block text-[11px] font-semibold text-[#38ef7d]">
                        Max savings applied!
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Benefits list */}
              <div className="space-y-2 mb-6 text-xs text-[#b2ebf2]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#00f5ff] shrink-0" />
                  <span>Official co-branded Certificates for all competitions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#38ef7d] shrink-0" />
                  <span>Access to CodeChef contest &amp; Nostocx trading simulator</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#00f5ff] shrink-0" />
                  <span>Eligible for ₹10,000 prize pool per competition</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gift className="w-4 h-4 text-[#80f7ff] shrink-0" />
                  <span>Exclusive developer goodies and vouchers</span>
                </div>
              </div>

              {/* Action Button Styled like Poster */}
              <a
                href={REGISTRATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl bg-[#00171b] text-[#00f5ff] border-2 border-[#00f5ff] font-black text-base shadow-[0_0_25px_rgba(0,245,255,0.4)] hover:bg-[#00f5ff] hover:text-[#001417] transition-all duration-300 group uppercase tracking-wider"
              >
                <Sparkles className="w-4 h-4 mr-2 text-[#00f5ff] group-hover:text-[#001417]" />
                <span>
                  {selectCount > 0 ? `REGISTER NOW! (₹${calculatedPrice})` : "REGISTER ON GOOGLE FORM"}
                </span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="text-[11px] text-center text-[#64a9b3] mt-3">
                Redirects to the official RGIT Codecell registration form.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
