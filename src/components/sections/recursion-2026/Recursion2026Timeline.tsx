"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Recursion2026Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const bloodLineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const events = [
    { 
        time: "09 Mar - 18 Mar", 
        title: "Round 1: Online Submission", 
        desc: (
            <div className="space-y-2 mt-2">
                <p><strong>PPT Solution Phase:</strong> Teams work on and provide solutions for the given problem statements.</p>
                <p><strong>18 Mar Final Deadline:</strong> All solutions must be submitted by the end of the day.</p>
            </div>
        )
    },
    { 
        time: "19 Mar 26", 
        title: "Shortlist Announcement", 
        desc: (
            <div className="space-y-2 mt-2">
                <p><strong>Results:</strong> Shortlisted teams will be officially displayed on the hackathon website. Check your dashboard to see if you qualified for the offline round!</p>
            </div>
        )
    },
    { 
        time: "Day 1: 23 Mar 2026", 
        title: "Offline Hackathon Begins", 
        desc: (
            <ul className="space-y-2 mt-2 list-none">
                <li><strong>09:00 AM:</strong> Event Start & Registration</li>
                <li><strong>11:00 AM:</strong> Coding Round Begins</li>
                <li><strong>02:00 PM:</strong> Lunch Break</li>
                <li><strong>05:00 PM:</strong> Evening Snacks</li>
                <li><strong>08:00 PM:</strong> Dinner</li>
                <li><strong>10:00 PM:</strong> 1st Judging Round</li>
            </ul>
        )
    },
    { 
        time: "Day 2: 24 Mar 2026", 
        title: "The Finale", 
        desc: (
            <ul className="space-y-2 mt-2 list-none">
                <li><strong>07:00 AM:</strong> Breakfast</li>
                <li><strong>10:00 AM:</strong> Final Judging Round</li>
                <li><strong>12:00 PM:</strong> Closing Ceremony & Wrap-up</li>
            </ul>
        )
    },
  ];

  return (
    <section ref={containerRef} className="relative w-full py-16 sm:py-24 px-3 sm:px-4 bg-transparent">
      <div className="max-w-5xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-cinzel)] text-3xl sm:text-4xl md:text-6xl font-black tracking-wider uppercase mb-2 text-transparent bg-clip-text bg-gradient-to-b from-[#FFF8DC] to-[#8B6508]">
            The Descent Log
          </h2>
          <p className="text-gray-500 font-light tracking-widest text-sm uppercase">The Official Timeline</p>
        </div>

        <div className="relative pl-10 sm:pl-8 md:pl-0">
          <div className="absolute left-[18px] sm:left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-zinc-900 -translate-x-1/2" />
          
          <motion.div 
            style={{ height: bloodLineHeight }}
            className="absolute left-[18px] sm:left-8 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-[#8B0000] to-red-600 -translate-x-1/2 shadow-[0_0_10px_rgba(139,0,0,0.8)]" 
          />

          {events.map((event, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center justify-between mb-8 sm:mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
              
              <div className="absolute left-[-27px] sm:left-[-31px] md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#050505] border-2 border-[#D4AF37] -translate-x-1/2 z-10 shadow-[0_0_8px_rgba(212,175,55,0.6)] top-6 md:top-1/2 md:-translate-y-1/2" />

              <div className="hidden md:block md:w-5/12" />

              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full md:w-5/12 bg-[#120e0a]/40 backdrop-blur-md border border-[#3a2a18]/30 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] p-4 sm:p-6 rounded-lg hover:border-[#8B0000]/50 transition-colors"
               >
                <span className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase block mb-2">{event.time}</span>
                <h3 className="text-lg sm:text-xl font-bold text-gray-200 mb-2">{event.title}</h3>
                <div className="text-gray-400 text-xs sm:text-sm leading-relaxed">{event.desc}</div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}