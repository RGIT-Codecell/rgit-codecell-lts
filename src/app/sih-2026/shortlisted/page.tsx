"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Trophy,
  User,
  Hash,
  Tag,
  Building2,
  Layers,
  Sparkles,
  Cpu,
  X,
  ChevronRight,
  Award,
  Target,
} from "lucide-react";

import shortlistedTeams from "@/data/sih-2026-shortlisted-teams.json";

export default function SihShortlistedPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const totalTeams = shortlistedTeams.length;

  const softwareTeams = shortlistedTeams.filter(
    (team) => team.category === "Software"
  ).length;

  const hardwareTeams = shortlistedTeams.filter(
    (team) => team.category === "Hardware"
  ).length;

  const filteredTeams = useMemo(() => {
    return shortlistedTeams.filter((team) => {
      const search = searchTerm.toLowerCase();

      const matchesSearch =
        team.teamName.toLowerCase().includes(search) ||
        team.leaderName.toLowerCase().includes(search) ||
        team.psId.toLowerCase().includes(search) ||
        team.department.toLowerCase().includes(search);

      const matchesCategory =
        selectedCategory === "All" ||
        team.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
  };

  return (
    <main className="min-h-screen bg-[#030303] text-white overflow-hidden selection:bg-[#8B0000] selection:text-white">

      {/* =========================================================
          BACKGROUND EFFECTS
      ========================================================= */}

      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#8B0000]/10 blur-[140px]" />

        <div className="absolute top-[45%] right-[-15%] w-[500px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-[150px]" />

        <div className="absolute bottom-[5%] left-[30%] w-[400px] h-[400px] rounded-full bg-[#8B0000]/5 blur-[150px]" />
      </div>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative min-h-[680px] flex items-center justify-center px-6 md:px-12 pt-20 pb-28 overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/recursion-bg.jpg"
            alt="SIH Background"
            className="w-full h-full object-cover opacity-20 scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/70 via-[#030303]/70 to-[#030303]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#030303_80%)]" />
        </div>

        {/* Decorative rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-[#8B0000]/10 animate-[spin_30s_linear_infinite]" />
          <div className="absolute inset-[50px] rounded-full border border-[#D4AF37]/5 border-dashed animate-[spin_20s_linear_infinite_reverse]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">

          {/* Official Badge */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#8B0000]/70 bg-[#8B0000]/10 backdrop-blur-xl text-[#D4AF37] text-xs md:text-sm font-bold uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(139,0,0,0.2)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]" />
            </span>

            <Trophy className="w-4 h-4" />

            Official Internal Round Results
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-8"
          >
            <p className="text-[#D4AF37] uppercase tracking-[0.35em] text-xs md:text-sm font-semibold mb-4">
              Smart India Hackathon 2026
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-[-0.04em] leading-[0.95]">
              <span className="block text-white">
                SHORTLISTED
              </span>

              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#FFF8DC] via-[#D4AF37] to-[#8B0000]">
                TEAMS
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="max-w-2xl mx-auto mt-8 text-gray-400 text-sm md:text-lg leading-relaxed"
          >
            Congratulations to all the innovators who have been shortlisted
            for the <span className="text-white font-semibold">SIH 2026 Internal Round</span>{" "}
            at RGIT.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 grid grid-cols-3 max-w-2xl mx-auto border border-zinc-800/80 bg-black/40 backdrop-blur-xl rounded-2xl overflow-hidden"
          >
            <Stat
              icon={<Trophy className="w-4 h-4" />}
              value={totalTeams}
              label="Teams"
            />

            <Stat
              icon={<Cpu className="w-4 h-4" />}
              value={softwareTeams}
              label="Software"
            />

            <Stat
              icon={<Target className="w-4 h-4" />}
              value={hardwareTeams}
              label="Hardware"
            />
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#030303] to-transparent" />
      </section>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <section className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 pb-24">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-bold mb-3">
                <Sparkles className="w-4 h-4" />
                The Shortlist
              </div>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Meet the shortlisted teams
              </h2>

              <p className="text-gray-500 mt-2 text-sm md:text-base">
                Explore the teams advancing from the RGIT internal round.
              </p>
            </div>

            <div className="hidden md:flex items-center gap-2 text-xs text-gray-500">
              <Award className="w-4 h-4 text-[#D4AF37]" />
              SIH 2026
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            SEARCH + FILTERS
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-3 md:p-4 rounded-2xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
        >
          <div className="flex flex-col lg:flex-row gap-3">

            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />

              <input
                type="text"
                placeholder="Search team, leader, PS ID, or department..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-12 pl-12 pr-12 rounded-xl bg-black border border-zinc-800 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#8B0000] focus:ring-2 focus:ring-[#8B0000]/10 transition-all"
              />

              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-gray-500 hover:text-white hover:bg-zinc-800 transition"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category */}
            <div className="flex items-center gap-2 overflow-x-auto">
              {["All", "Software", "Hardware"].map((category) => {
                const active = selectedCategory === category;

                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`
                      relative h-12 px-5 rounded-xl text-xs md:text-sm font-semibold
                      whitespace-nowrap transition-all duration-300
                      flex items-center gap-2 border
                      ${
                        active
                          ? "bg-[#8B0000] text-white border-[#8B0000] shadow-[0_0_25px_rgba(139,0,0,0.3)]"
                          : "bg-black text-gray-500 border-zinc-800 hover:text-white hover:border-zinc-700"
                      }
                    `}
                  >
                    {category === "All" ? (
                      <Layers className="w-4 h-4" />
                    ) : category === "Software" ? (
                      <Cpu className="w-4 h-4" />
                    ) : (
                      <Target className="w-4 h-4" />
                    )}

                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            RESULT COUNT
        ===================================================== */}

        <div className="mt-6 flex items-center justify-between px-1">
          <p className="text-xs md:text-sm text-gray-500">
            Showing{" "}
            <span className="text-white font-semibold">
              {filteredTeams.length}
            </span>{" "}
            of{" "}
            <span className="text-white font-semibold">
              {totalTeams}
            </span>{" "}
            shortlisted teams
          </p>

          {(searchTerm || selectedCategory !== "All") && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1.5 text-[#D4AF37] hover:text-white text-xs font-semibold transition-colors"
            >
              <X className="w-3.5 h-3.5" />
              Clear filters
            </button>
          )}
        </div>

        {/* =====================================================
            TEAM GRID
        ===================================================== */}

        <AnimatePresence mode="popLayout">
          {filteredTeams.length > 0 ? (
            <motion.div
              layout
              className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
            >
              {filteredTeams.map((team, index) => (
                <TeamCard
                  key={team.srNo}
                  team={team}
                  index={index}
                />
              ))}
            </motion.div>
          ) : (
            /* Empty state */
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 py-24 rounded-3xl border border-zinc-800 bg-zinc-950 text-center"
            >
              <div className="mx-auto w-16 h-16 rounded-2xl bg-[#8B0000]/10 border border-[#8B0000]/20 flex items-center justify-center">
                <Search className="w-7 h-7 text-[#8B0000]" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-white">
                No teams found
              </h3>

              <p className="mt-2 text-gray-500 text-sm">
                No shortlisted team matches your current search or filter.
              </p>

              <button
                onClick={clearFilters}
                className="mt-6 px-6 py-3 rounded-xl bg-[#8B0000] hover:bg-[#a00000] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(139,0,0,0.25)]"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom achievement banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-16 overflow-hidden rounded-3xl border border-[#8B0000]/30 bg-gradient-to-r from-[#8B0000]/10 via-zinc-950 to-[#D4AF37]/5 p-8 md:p-10"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B0000]/10 blur-[100px] rounded-full" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-bold">
                <Trophy className="w-4 h-4" />
                Congratulations
              </div>

              <h3 className="mt-3 text-2xl md:text-3xl font-bold">
                The journey starts here.
              </h3>

              <p className="mt-2 text-gray-500 text-sm max-w-xl">
                Every shortlisted team has earned its place. Best wishes to
                all teams representing RGIT at SIH 2026.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3 px-5 py-3 rounded-xl bg-black/50 border border-zinc-800">
              <span className="text-3xl font-black text-[#D4AF37]">
                {totalTeams}
              </span>

              <div className="text-left">
                <p className="text-xs font-bold text-white">
                  SHORTLISTED
                </p>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider">
                  Teams
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

/* =============================================================
   STAT COMPONENT
============================================================= */

function TeamCard({
  team,
  index,
}: {
  team: (typeof shortlistedTeams)[number];
  index: number;
}) {
  const isSoftware = team.category === "Software";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.45,
        delay: Math.min(index * 0.035, 0.5),
      }}
      whileHover={{ y: -7 }}
      className="group relative"
    >
      {/* Outer Glow */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[#8B0000]/0 via-[#8B0000]/0 to-[#D4AF37]/0 group-hover:from-[#8B0000]/40 group-hover:via-[#8B0000]/10 group-hover:to-[#D4AF37]/20 transition-all duration-500 blur-sm" />

      <div className="relative min-h-[330px] rounded-2xl border border-zinc-800 bg-[#080808] overflow-hidden transition-all duration-500 group-hover:border-[#8B0000]/50 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">

        {/* Top Accent */}
        <div
          className={`absolute top-0 left-0 right-0 h-[2px] ${
            isSoftware
              ? "bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              : "bg-gradient-to-r from-transparent via-amber-500 to-transparent"
          }`}
        />

        {/* Subtle Background Glow */}
        <div
          className={`absolute top-[-100px] left-1/2 -translate-x-1/2 w-48 h-48 rounded-full blur-[100px] opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${
            isSoftware ? "bg-blue-500" : "bg-amber-500"
          }`}
        />

        <div className="relative h-full p-6 flex flex-col">

          {/* =====================================================
              TOP ROW
          ===================================================== */}

          <div className="flex items-center justify-between">

            {/* Team Number */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
                <Hash className="w-3.5 h-3.5 text-[#D4AF37]" />

                <span className="font-mono text-xs font-bold text-[#D4AF37]">
                  {String(team.srNo).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Category */}
            <div
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                isSoftware
                  ? "bg-blue-950/30 text-blue-400 border-blue-900/50"
                  : "bg-amber-950/30 text-amber-400 border-amber-900/50"
              }`}
            >
              {isSoftware ? (
                <Cpu className="w-3 h-3" />
              ) : (
                <Target className="w-3 h-3" />
              )}

              {team.category}
            </div>
          </div>

          {/* =====================================================
              TEAM NAME
          ===================================================== */}

          <div className="flex-1 flex flex-col items-center justify-center text-center py-8">

            <p className="text-[9px] uppercase tracking-[0.3em] text-gray-600 font-bold mb-3">
              Team
            </p>

            <h3 className="text-2xl md:text-[27px] font-black tracking-tight leading-tight text-white group-hover:text-[#D4AF37] transition-colors duration-300 max-w-[90%]">
              {team.teamName}
            </h3>

            {/* Decorative line */}
            <div className="flex items-center gap-2 mt-5">
              <div className="w-8 h-px bg-zinc-800" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#8B0000] shadow-[0_0_8px_rgba(139,0,0,0.8)]" />
              <div className="w-8 h-px bg-zinc-800" />
            </div>

            {/* =================================================
                TEAM DETAILS
            ================================================= */}

            <div className="mt-6 w-full grid grid-cols-3 gap-2">

              {/* Leader */}
              <div className="rounded-xl bg-zinc-950 border border-zinc-900 px-2.5 py-3 hover:border-[#8B0000]/30 transition-colors">
                <User className="w-3.5 h-3.5 mx-auto text-[#8B0000] mb-1.5" />

                <p className="text-[8px] uppercase tracking-wider text-gray-600 font-bold">
                  Leader
                </p>

                <p
                  className="mt-1 text-[11px] text-gray-200 font-medium truncate"
                  title={team.leaderName}
                >
                  {team.leaderName}
                </p>
              </div>

              {/* Department */}
              <div className="rounded-xl bg-zinc-950 border border-zinc-900 px-2.5 py-3 hover:border-[#8B0000]/30 transition-colors">
                <Building2 className="w-3.5 h-3.5 mx-auto text-[#8B0000] mb-1.5" />

                <p className="text-[8px] uppercase tracking-wider text-gray-600 font-bold">
                  Department
                </p>

                <p
                  className="mt-1 text-[11px] text-gray-300 font-medium truncate"
                  title={team.department}
                >
                  {team.department}
                </p>
              </div>

              {/* PS ID */}
              <div className="rounded-xl bg-zinc-950 border border-zinc-900 px-2.5 py-3 hover:border-[#D4AF37]/30 transition-colors">
                <Tag className="w-3.5 h-3.5 mx-auto text-[#D4AF37] mb-1.5" />

                <p className="text-[8px] uppercase tracking-wider text-gray-600 font-bold">
                  PS ID
                </p>

                <p
                  className="mt-1 text-[11px] text-[#D4AF37] font-mono font-semibold truncate"
                  title={team.psId}
                >
                  {team.psId}
                </p>
              </div>

            </div>
          </div>

          {/* =====================================================
              BOTTOM
          ===================================================== */}

          <div className="pt-4 border-t border-zinc-900 flex items-center justify-between">

            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-50 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>

              <span className="text-[9px] uppercase tracking-[0.2em] text-gray-600 font-bold">
                Shortlisted
              </span>
            </div>

            <div className="flex items-center gap-1 text-[9px] uppercase tracking-wider text-gray-700 group-hover:text-[#D4AF37] transition-colors">
              SIH 2026
              <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>

          </div>

        </div>
      </div>
    </motion.div>
  );
}
