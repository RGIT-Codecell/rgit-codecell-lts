import React from "react";
import { GlareCard } from "@/components/ui/glare-card";

export default function Prizes() {
  return (
    <section className="bg-black py-12 px-4 ">
      <h2 className="text-3xl md:text-5xl font-porticoRough mb-8 lg:mb-12 text-center text-white">
        Prize Pool
      </h2>

      <div className="flex flex-col lg:flex-row flex-wrap items-center lg:items-end justify-center gap-4 lg:gap-8">
        <GlareCard
          className="w-full max-w-xs h-48 lg:h-auto lg:aspect-[17/21] lg:w-[300px]"
          glareColor="rgba(220, 220, 230, 0.6)" 
        >
          <h3 className="text-lg lg:text-2xl font-bold text-white mb-1">
            2nd Place
          </h3>
          <p className="text-4xl lg:text-5xl font-extrabold text-white">
            ₹5,000
          </p>
          <p className="text-sm lg:text-lg text-white/80 mt-1">
            CASH PRIZE + VOUCHERS
          </p>
        </GlareCard>

        <GlareCard
          className="w-full max-w-xs h-48 lg:h-auto lg:aspect-[17/21] lg:w-[380px]"
          glareColor="rgba(255, 215, 0, 0.6)" 
        >
          <h3 className="text-xl lg:text-3xl font-bold text-white mb-1">
            1st Place
          </h3>
          <p className="text-5xl lg:text-7xl font-extrabold text-white">
            ₹7,000
          </p>
          <p className="text-base lg:text-xl text-white/80 mt-1">
            CASH PRIZE + VOUCHERS
          </p>
        </GlareCard>

        <GlareCard
          className="w-full max-w-xs h-48 lg:h-auto lg:aspect-[17/21] lg:w-[280px]"
          glareColor="rgba(205, 127, 50, 0.6)"
        >
          <h3 className="text-base lg:text-xl font-bold text-white mb-1">
            3rd Place
          </h3>
          <p className="text-3xl lg:text-4xl font-extrabold text-white">
            ₹3,000
          </p>
          <p className="text-xs lg:text-base text-white/80 mt-1">
            CASH PRIZE + VOUCHERS
          </p>
        </GlareCard>
      </div>
    </section>
  );
}
