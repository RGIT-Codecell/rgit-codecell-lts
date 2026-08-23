"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Trophy,
  Layers,
  Cpu,
  X,
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
    <main className="min-h-screen bg-[#030303] text-white overflow-hidden selection:bg-[#00A651] selection:text-white">

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

        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#00A651]/10 blur-[140px]" />

        <div className="absolute top-[45%] right-[-15%] w-[500px] h-[500px] rounded-full bg-[#F26522]/5 blur-[150px]" />

        <div className="absolute bottom-[5%] left-[30%] w-[400px] h-[400px] rounded-full bg-[#00A651]/5 blur-[150px]" />
      </div>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative min-h-[600px] flex items-center justify-center px-6 md:px-12 pt-20 pb-20 overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/recursion-bg.jpg"
            alt="SIH Background"
            className="w-full h-full object-cover opacity-20 scale-105"
          />

          <div className="absolute inset-0 bg-[#030303]/80" />
        </div>

        {/* Decorative rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-[#00A651]/15 animate-[spin_30s_linear_infinite]" />
          <div className="absolute inset-[50px] rounded-full border border-white/10 border-dashed animate-[spin_20s_linear_infinite_reverse]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">

          {/* Official Badge */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#F26522]/50 bg-[#F26522]/10 backdrop-blur-xl text-[#F26522] text-xs md:text-sm font-bold uppercase tracking-[0.2em]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F26522] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F26522]" />
            </span>

            <Trophy className="w-4 h-4 text-[#F26522]" />

            Official Internal Round Results
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-8"
          >
            <p className="text-[#F26522] uppercase tracking-[0.35em] text-2xl md:text-4xl font-bold mb-4">
              Smart India Hackathon 2026
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-[-0.04em] leading-[0.95]">
              <span className="block text-white">
                SHORTLISTED
              </span>

              <span className="block mt-2 text-[#00A651]">
                TEAMS
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="max-w-2xl mx-auto mt-8 text-gray-300 text-sm md:text-lg leading-relaxed"
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
            className="mt-12 grid grid-cols-3 max-w-2xl mx-auto border border-zinc-800 bg-black/60 backdrop-blur-xl rounded-2xl overflow-hidden"
          >
            <Stat
              icon={<Trophy className="w-4 h-4 text-[#F26522]" />}
              value={totalTeams}
              label="Teams"
            />

            <Stat
              icon={<Cpu className="w-4 h-4 text-white" />}
              value={softwareTeams}
              label="Software"
            />

            <Stat
              icon={<Target className="w-4 h-4 text-[#00A651]" />}
              value={hardwareTeams}
              label="Hardware"
            />
          </motion.div>
        </div>
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
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Meet the shortlisted teams
              </h2>

              <p className="text-gray-400 mt-2 text-sm md:text-base">
                Explore the teams advancing from the RGIT internal round.
              </p>
            </div>

            <div className="hidden md:flex items-center gap-2 text-xs text-gray-400">
              <Award className="w-4 h-4 text-[#00A651]" />
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
          className="relative p-3 md:p-4 rounded-2xl border border-zinc-800 bg-zinc-950/90 backdrop-blur-xl"
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
                className="w-full h-12 pl-12 pr-12 rounded-xl bg-black border border-zinc-800 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00A651] focus:ring-2 focus:ring-[#00A651]/20 transition-all"
              />

              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-zinc-800 transition"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category */}
            <div className="flex items-center gap-2 overflow-x-auto">
              {["All", "Software", "Hardware"].map((category) => {
                const active = selectedCategory === category;

                let activeClass = "bg-[#00A651] text-white border-[#00A651]";
                if (category === "Hardware") {
                  activeClass = "bg-[#F26522] text-white border-[#F26522]";
                }

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
                          ? `${activeClass} shadow-md`
                          : "bg-black text-gray-400 border-zinc-800 hover:text-white hover:border-zinc-700"
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
          <p className="text-xs md:text-sm text-gray-400">
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
              className="flex items-center gap-1.5 text-[#00A651] hover:text-white text-xs font-semibold transition-colors"
            >
              <X className="w-3.5 h-3.5" />
              Clear filters
            </button>
          )}
        </div>

        {/* =====================================================
            TEAM GRID (3 columns landscape ratio)
        ===================================================== */}

        <AnimatePresence mode="popLayout">
          {filteredTeams.length > 0 ? (
            <motion.div
              layout
              className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
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
              className="mt-8 py-20 rounded-2xl border border-zinc-800 bg-zinc-950 text-center"
            >
              <div className="mx-auto w-14 h-14 rounded-2xl bg-[#00A651]/10 border border-[#00A651]/30 flex items-center justify-center">
                <Search className="w-6 h-6 text-[#00A651]" />
              </div>

              <h3 className="mt-5 text-lg font-bold text-white">
                No teams found
              </h3>

              <p className="mt-1 text-gray-400 text-sm">
                No shortlisted team matches your current search or filter.
              </p>

              <button
                onClick={clearFilters}
                className="mt-5 px-5 py-2.5 rounded-xl bg-[#00A651] hover:bg-[#008744] text-white text-xs font-bold uppercase tracking-wider transition-all"
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
          className="relative mt-16 overflow-hidden rounded-2xl border border-[#00A651]/30 bg-zinc-950 p-6 md:p-8"
        >
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-[#00A651] text-xs uppercase tracking-[0.25em] font-bold">
                <Trophy className="w-4 h-4 text-[#00A651]" />
                Congratulations
              </div>

              <h3 className="mt-2 text-xl md:text-2xl font-bold text-white">
                The journey starts here.
              </h3>

              <p className="mt-1 text-gray-400 text-sm max-w-xl">
                Every shortlisted team has earned its place. Best wishes to
                all teams representing RGIT at SIH 2026.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3 px-5 py-3 rounded-xl bg-black/60 border border-zinc-800">
              <span className="text-3xl font-black text-[#F26522]">
                {totalTeams}
              </span>

              <div className="text-left">
                <p className="text-xs font-bold text-white">
                  SHORTLISTED
                </p>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">
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

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: number;
  label: string;
}) {
  return (
    <div className="relative px-4 py-4 md:px-8 md:py-5 border-r last:border-r-0 border-zinc-800 text-center">
      <div className="flex justify-center mb-1">
        {icon}
      </div>

      <div className="text-2xl md:text-3xl font-black text-white">
        {value}
      </div>

      <div className="mt-0.5 text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">
        {label}
      </div>
    </div>
  );
}

/* =============================================================
   MINIMAL LANDSCAPE TEAM CARD
   - Aspect ratio: Width > Height
   - Top-left: #SR_NO, Top-right: SOFTWARE / HARDWARE Category
   - Column 1 (index % 3 === 0): Border Green (#00A651)
   - Column 2 (index % 3 === 1): Border White (#FFFFFF)
   - Column 3 (index % 3 === 2): Border Orange (#F26522)
============================================================= */

function TeamCard({
  team,
  index,
}: {
  team: (typeof shortlistedTeams)[number];
  index: number;
}) {
  const isSoftware = team.category === "Software";
  const columnIndex = index % 3;

  // Determine card border & accent colors based on column
  let borderColor = "border-[#00A651]";
  let hoverShadow = "hover:shadow-[0_8px_25px_rgba(0,166,81,0.15)]";
  let srNoColor = "text-[#00A651]";
  let titleHover = "group-hover:text-[#00A651]";

  if (columnIndex === 1) {
    // Column 2: White Border
    borderColor = "border-white/80";
    hoverShadow = "hover:shadow-[0_8px_25px_rgba(255,255,255,0.15)]";
    srNoColor = "text-white";
    titleHover = "group-hover:text-white";
  } else if (columnIndex === 2) {
    // Column 3: Orange Border
    borderColor = "border-[#F26522]";
    hoverShadow = "hover:shadow-[0_8px_25px_rgba(242,101,34,0.15)]";
    srNoColor = "text-[#F26522]";
    titleHover = "group-hover:text-[#F26522]";
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.35,
        delay: Math.min(index * 0.025, 0.3),
      }}
      whileHover={{ y: -4 }}
      className="group relative h-full"
    >
      <div
        className={`
          relative h-full rounded-xl border-2 ${borderColor} bg-[#0a0a0a]
          p-5 flex flex-col justify-between transition-all duration-300 ${hoverShadow}
        `}
      >
        {/* Top Line: #SR_NO on Left, Software/Hardware Badge on Right */}
        <div>
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className={`font-mono text-xs font-bold ${srNoColor}`}>
              #{String(team.srNo).padStart(2, "0")}
            </span>

            <span
              className={`
                text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border
                ${
                  isSoftware
                    ? "bg-[#00A651]/15 text-[#00A651] border-[#00A651]/40"
                    : "bg-[#F26522]/15 text-[#F26522] border-[#F26522]/40"
                }
              `}
            >
              {team.category}
            </span>
          </div>

          {/* Team Name */}
          <h3 className={`text-base md:text-lg font-bold text-white tracking-tight leading-snug ${titleHover} transition-colors line-clamp-1`}>
            {team.teamName}
          </h3>
        </div>

        {/* Bottom Metadata: Leader on Left, Department on Right */}
        <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between gap-4 text-xs">
          <div className="min-w-0">
            <span className="text-gray-500 text-[10px] uppercase font-bold tracking-wider block">Leader</span>
            <span className="text-gray-200 font-medium truncate block">{team.leaderName}</span>
          </div>

          <div className="min-w-0 text-right">
            <span className="text-gray-500 text-[10px] uppercase font-bold tracking-wider block">Dept</span>
            <span className="text-gray-300 font-medium truncate block">{team.department}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
