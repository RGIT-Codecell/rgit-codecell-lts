"use client";

import React from "react";

export default function PartnerBanner() {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#000d11] border-t border-[#00363f]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-xs font-mono text-[#64a9b3] uppercase tracking-widest block font-bold">
            Organized &amp; Powered By
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-4 sm:p-5 rounded-xl bg-[#001920] border border-[#003842] text-center flex flex-col items-center justify-center hover:border-[#00e5ff]/40 transition-colors">
            <span className="text-sm font-extrabold text-white block">RGIT CODECELL</span>
            <span className="text-[11px] text-[#00f5ff] font-mono mt-0.5 font-bold">Host Committee</span>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-[#001920] border border-[#003842] text-center flex flex-col items-center justify-center hover:border-[#00e5ff]/40 transition-colors">
            <span className="text-sm font-extrabold text-white block">RGIT CESS</span>
            <span className="text-[11px] text-[#00c2cb] font-mono mt-0.5 font-bold">Co-Host Committee</span>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-[#001920] border border-[#003842] text-center flex flex-col items-center justify-center hover:border-[#00e5ff]/40 transition-colors">
            <span className="text-sm font-extrabold text-white block">CODECHEF</span>
            <span className="text-[11px] text-[#38ef7d] font-mono mt-0.5 font-bold">DSA Contest Partner</span>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-[#001920] border border-[#003842] text-center flex flex-col items-center justify-center hover:border-[#00e5ff]/40 transition-colors">
            <span className="text-sm font-extrabold text-white block">NOSTOCX</span>
            <span className="text-[11px] text-[#00f5d4] font-mono mt-0.5 font-bold">Fintech Trading Partner</span>
          </div>
        </div>
      </div>
    </section>
  );
}
