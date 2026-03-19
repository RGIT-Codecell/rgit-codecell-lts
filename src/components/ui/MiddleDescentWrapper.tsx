"use client";
import React from "react";

export default function MiddleDescentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full overflow-hidden">
      
      {/* Base Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0806] to-[#120202] z-0" />
      
      {/* Transitional Underglow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-[#8B0000]/20 to-transparent z-0 pointer-events-none blur-3xl" />

      {/* Main Content Wrapper */}
      <div className="relative z-10 flex flex-col w-full">
        {children}
      </div>
      
    </div>
  );
}
