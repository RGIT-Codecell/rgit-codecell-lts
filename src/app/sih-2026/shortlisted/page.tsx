"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Trophy, User, Hash, Tag, Building2, Layers } from "lucide-react";
import shortlistedTeams from "@/data/sih-2026-shortlisted-teams.json";

export default function SihShortlistedPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTeams = shortlistedTeams.filter((team) => {
    const matchesSearch =
      team.teamName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.leaderName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.psId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.department.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || team.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#8B0000] selection:text-white">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[60vh] py-20 px-6 md:px-12 text-center overflow-hidden border-b border-[#8B0000]/20">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="/recursion-bg.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover filter brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#8B0000] bg-[#8B0000]/20 text-[#D4AF37] text-xs md:text-sm font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(139,0,0,0.4)]"
          >
            <Trophy className="w-4 h-4 text-[#D4AF37]" />
            Official Internal Round Results
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-6xl font-bold tracking-tight text-white leading-tight"
          >
            SIH 2026 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF8DC] via-[#D4AF37] to-[#8B0000]">Shortlisted Teams</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Congratulations to all <span className="text-[#D4AF37] font-semibold">50 teams</span> shortlisted for the Smart India Hackathon 2026 Internal Round at RGIT.
          </motion.p>
        </div>
      </section>

      {/* Controls & Search Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-zinc-900/60 p-4 md:p-6 rounded-2xl border border-zinc-800 backdrop-blur-md">
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search team, leader, PS ID, or department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-black/60 border border-zinc-800 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] transition-all"
            />
          </div>

          {/* Category Filter Buttons */}
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            {["All", "Software", "Hardware"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  selectedCategory === category
                    ? "bg-[#8B0000] text-white border border-red-900 shadow-[0_0_12px_rgba(139,0,0,0.5)]"
                    : "bg-black/40 text-gray-400 border border-zinc-800 hover:text-white hover:border-zinc-700"
                }`}
              >
                {category === "All" && <Layers className="w-3.5 h-3.5" />}
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Counter Bar */}
        <div className="mt-6 flex items-center justify-between text-xs md:text-sm text-gray-400 px-2">
          <span>
            Showing <strong className="text-white">{filteredTeams.length}</strong> of 50 teams
          </span>
          {searchTerm && (
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="text-[#D4AF37] hover:underline text-xs"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Shortlisted Teams Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeams.map((team, index) => (
            <motion.div
              key={team.srNo}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.02 }}
              className="group relative bg-zinc-950 border border-zinc-800/80 hover:border-[#8B0000]/60 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(139,0,0,0.25)] flex flex-col justify-between"
            >
              {/* Card Accent Top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#8B0000]/40 to-transparent rounded-t-2xl group-hover:via-[#8B0000] transition-all" />

              <div>
                {/* Header: Sr No & Category */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-zinc-900 text-[#D4AF37] font-mono text-xs font-bold border border-zinc-800">
                    <Hash className="w-3 h-3 text-[#D4AF37]" />
                    {String(team.srNo).padStart(2, "0")}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${
                      team.category === "Software"
                        ? "bg-blue-950/40 text-blue-400 border-blue-800/40"
                        : "bg-amber-950/40 text-amber-400 border-amber-800/40"
                    }`}
                  >
                    {team.category}
                  </span>
                </div>

                {/* Team Name */}
                <h3 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-4 line-clamp-1">
                  {team.teamName}
                </h3>

                {/* Details */}
                <div className="space-y-2.5 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-[#8B0000] shrink-0" />
                    <span className="text-gray-300">
                      Leader: <strong className="text-white font-medium">{team.leaderName}</strong>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-[#8B0000] shrink-0" />
                    <span className="text-gray-300">
                      PS ID: <strong className="text-[#D4AF37] font-mono">{team.psId}</strong>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#8B0000] shrink-0" />
                    <span className="text-gray-300 truncate">
                      Dept: <span className="text-gray-300">{team.department}</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty state when search returns 0 items */}
        {filteredTeams.length === 0 && (
          <div className="text-center py-16 bg-zinc-900/30 rounded-2xl border border-zinc-800 mt-6">
            <p className="text-gray-400 text-base">No shortlisted teams found matching "{searchTerm}".</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="mt-4 px-6 py-2 bg-[#8B0000] text-white text-xs uppercase font-bold tracking-wider rounded-lg"
            >
              Reset Search
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
