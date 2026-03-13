"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactSection() {
  const contacts = [
    { role: "Event Lead", name: "Sahil", phone: "9607055655" },
    { role: "Tech Bridge", name: "Dhruv", phone: "9321781063" },
    { role: "Admin Desk", name: "Harsh", phone: "7400100862" },
  ];

  return (
    <section className="relative w-full min-h-screen py-32 px-4 flex flex-col justify-center items-center overflow-hidden bg-black">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/tumbbad-roots.jpeg" 
          alt="Core Background" 
          fill 
          className="object-cover opacity-60 mix-blend-luminosity" 
          quality={85}
        />
      </div>

      {/* Overlay Gradients */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#120202] to-transparent z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#000000_90%)] z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[#8b0000]/20 mix-blend-overlay animate-pulse z-10 pointer-events-none" />

      {/* Main Content Content */}
      <div className="relative z-20 w-full max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Call to Action Wrapper */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full text-center mb-24"
        >
          <h2 className="font-[family-name:var(--font-cinzel)] text-5xl md:text-8xl font-black tracking-wider uppercase mb-6 text-transparent bg-clip-text bg-gradient-to-b from-[#FFF8DC] via-[#D4AF37] to-[#8B6508] drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">
            Seal Your Fate
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            You have reached the core. The prize is waiting, but Hastar demands a sacrifice of sweat and code. Register before the gates close.
          </p>
          
          <a 
            href="https://rgitcodecell.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block group relative px-12 py-5 bg-[#8B0000] text-white font-bold text-lg uppercase tracking-widest overflow-hidden border border-red-900 shadow-[0_0_30px_rgba(139,0,0,0.6)] transition-all hover:shadow-[0_0_50px_rgba(212,175,55,0.8)] hover:border-[#D4AF37]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:animate-[shimmer_1.5s_infinite]" />
            <span className="relative z-10">Enter Recursion 7.0</span>
          </a>
        </motion.div>

        {/* Contact Grid List */}
        <div className="w-full">
          <div className="text-center mb-12">
            <h3 className="font-[family-name:var(--font-cinzel)] text-3xl font-bold tracking-widest uppercase text-gray-300 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
              The Keepers
            </h3>
            <p className="text-[#D4AF37] text-xs uppercase tracking-widest mt-2 font-bold">Seek guidance if you lose your way</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contacts.map((contact, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-black/60 backdrop-blur-md border border-[#8B0000]/40 p-5 text-center rounded hover:border-[#D4AF37]/60 hover:bg-black/80 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
              >
                <h4 className="text-gray-100 font-bold mb-1 tracking-wide">{contact.name}</h4>
                <p className="text-[#8B6508] text-xs uppercase tracking-widest mb-3 font-semibold">{contact.role}</p>
                <a href={`tel:+91${contact.phone}`} className="text-gray-400 hover:text-[#D4AF37] font-mono tracking-widest transition-colors block">
                  {contact.phone}
                </a>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
