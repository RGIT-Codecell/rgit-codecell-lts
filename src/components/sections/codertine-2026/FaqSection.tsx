"use client";

import React, { useState } from "react";
import { FAQS } from "@/data/codertine-2026";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#001317] border-t border-[#003842]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#002730] border border-[#00f5ff]/40 text-[#00f5ff] text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#00f5ff]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[#76cdd8] text-sm sm:text-base mt-2">
            Everything you need to know about event formats, laptops, registration combos, and certificates.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-[#003842] bg-[#001c23] overflow-hidden transition-colors hover:border-[#00e5ff]/40"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-5 sm:px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00f5ff]"
                >
                  <span className="text-sm sm:text-base font-bold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#00f5ff] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#b2ebf2] leading-relaxed border-t border-[#002d35]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
