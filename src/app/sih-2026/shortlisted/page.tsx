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

      <section className="relative min-h-[680px] flex items-center justify-center px-6 md:px-12 pt-20 pb-28 overflow-hidden">

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
              {/* <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F26522] opacity-75" /> */}
              {/* <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F26522]" /> */}
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
            <p className="text-[#F26522] uppercase tracking-[0.35em] text-3xl md:text-4xl font-bold mb-4">
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
            TEAM GRID (Strict 3 columns on tablet/desktop)
        ===================================================== */}

        <AnimatePresence mode="popLayout">
          {filteredTeams.length > 0 ? (
            <motion.div
              layout
              className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6"
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
              <div className="mx-auto w-16 h-16 rounded-2xl bg-[#00A651]/10 border border-[#00A651]/30 flex items-center justify-center">
                <Search className="w-7 h-7 text-[#00A651]" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-white">
                No teams found
              </h3>

              <p className="mt-2 text-gray-400 text-sm">
                No shortlisted team matches your current search or filter.
              </p>

              <button
                onClick={clearFilters}
                className="mt-6 px-6 py-3 rounded-xl bg-[#00A651] hover:bg-[#008744] text-white text-xs font-bold uppercase tracking-wider transition-all"
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
          className="relative mt-16 overflow-hidden rounded-3xl border border-[#00A651]/30 bg-zinc-950 p-8 md:p-10"
        >
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-[#00A651] text-xs uppercase tracking-[0.25em] font-bold">
                <Trophy className="w-4 h-4 text-[#00A651]" />
                Congratulations
              </div>

              <h3 className="mt-3 text-2xl md:text-3xl font-bold text-white">
                The journey starts here.
              </h3>

              <p className="mt-2 text-gray-400 text-sm max-w-xl">
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
    <div className="relative px-4 py-5 md:px-8 md:py-6 border-r last:border-r-0 border-zinc-800 text-center">
      <div className="flex justify-center mb-2">
        {icon}
      </div>

      <div className="text-2xl md:text-3xl font-black text-white">
        {value}
      </div>

      <div className="mt-1 text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">
        {label}
      </div>
    </div>
  );
}

/* =============================================================
   TEAM CARD
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
  let hoverShadow = "hover:shadow-[0_10px_30px_rgba(0,166,81,0.15)]";
  let badgeBorder = "border-[#00A651]/40 bg-[#00A651]/10 text-[#00A651]";
  let hashIconColor = "text-[#00A651]";
  let psIdColor = "text-[#00A651]";
  let titleHover = "group-hover:text-[#00A651]";
  let iconBoxStyle = "bg-[#00A651]/10 border-[#00A651]/30 text-[#00A651]";
  let chevronHover = "group-hover:text-[#00A651]";

  if (columnIndex === 1) {
    // Column 2: White Border
    borderColor = "border-white";
    hoverShadow = "hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)]";
    badgeBorder = "border-white/40 bg-white/10 text-white";
    hashIconColor = "text-white";
    psIdColor = "text-white";
    titleHover = "group-hover:text-white";
    iconBoxStyle = "bg-white/10 border-white/30 text-white";
    chevronHover = "group-hover:text-white";
  } else if (columnIndex === 2) {
    // Column 3: Orange Border
    borderColor = "border-[#F26522]";
    hoverShadow = "hover:shadow-[0_10px_30px_rgba(242,101,34,0.15)]";
    badgeBorder = "border-[#F26522]/40 bg-[#F26522]/10 text-[#F26522]";
    hashIconColor = "text-[#F26522]";
    psIdColor = "text-[#F26522]";
    titleHover = "group-hover:text-[#F26522]";
    iconBoxStyle = "bg-[#F26522]/10 border-[#F26522]/30 text-[#F26522]";
    chevronHover = "group-hover:text-[#F26522]";
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.4,
        delay: Math.min(index * 0.03, 0.4),
      }}
      whileHover={{ y: -6 }}
      className="group relative h-full"
    >
      <div
        className={`
          relative h-full rounded-2xl border-2 ${borderColor} bg-[#080808]
          overflow-hidden transition-all duration-300 ${hoverShadow}
        `}
      >
        <div className="p-6 flex flex-col h-full justify-between">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between">

              {/* Number */}
              <div className="relative">
                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${badgeBorder}`}>
                  <Hash className={`w-3.5 h-3.5 ${hashIconColor}`} />

                  <span className="font-mono text-xs font-bold">
                    {String(team.srNo).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Category */}
              <div
                className={`
                  flex items-center gap-1.5 px-3 py-1.5 rounded-full
                  text-[10px] font-bold uppercase tracking-wider border
                  ${
                    isSoftware
                      ? "bg-[#00A651]/15 text-[#00A651] border-[#00A651]/40"
                      : "bg-[#F26522]/15 text-[#F26522] border-[#F26522]/40"
                  }
                `}
              >
                {isSoftware ? (
                  <Cpu className="w-3 h-3" />
                ) : (
                  <Target className="w-3 h-3" />
                )}

                {team.category}
              </div>
            </div>

            {/* Team name */}
            <div className="mt-6 min-h-[60px]">
              <h3 className={`text-xl font-bold text-white leading-tight ${titleHover} transition-colors duration-300`}>
                {team.teamName}
              </h3>
            </div>

            {/* Divider */}
            <div className="h-px bg-zinc-800 my-5" />

            {/* Details */}
            <div className="space-y-4">

              {/* Leader */}
              <div className="flex gap-3 items-center">
                <div className={`shrink-0 w-9 h-9 rounded-lg border flex items-center justify-center ${iconBoxStyle}`}>
                  <User className="w-4 h-4" />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                    Team Leader
                  </p>

                  <p className="mt-0.5 text-sm text-gray-200 font-medium truncate">
                    {team.leaderName}
                  </p>
                </div>
              </div>

              {/* PS ID */}
              <div className="flex gap-3 items-center">
                <div className={`shrink-0 w-9 h-9 rounded-lg border flex items-center justify-center ${iconBoxStyle}`}>
                  <Tag className="w-4 h-4" />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                    Problem Statement
                  </p>

                  <p className={`mt-0.5 text-sm ${psIdColor} font-mono font-semibold truncate`}>
                    {team.psId}
                  </p>
                </div>
              </div>

              {/* Department */}
              <div className="flex gap-3 items-center">
                <div className={`shrink-0 w-9 h-9 rounded-lg border flex items-center justify-center ${iconBoxStyle}`}>
                  <Building2 className="w-4 h-4" />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                    Department
                  </p>

                  <p className="mt-0.5 text-sm text-gray-300 truncate">
                    {team.department}
                  </p>
                </div>
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

          {/* Card Footer */}
          <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-between">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-gray-400">
              <span className={`w-2 h-2 rounded-full ${columnIndex === 0 ? "bg-[#00A651]" : columnIndex === 1 ? "bg-white" : "bg-[#F26522]"}`} />
              Shortlisted
            </div>

            <ChevronRight
              className={`w-4 h-4 text-zinc-600 ${chevronHover} group-hover:translate-x-1 transition-all`}
            />
          </div>

        </div>
      </div>
    </motion.div>
  );
}
