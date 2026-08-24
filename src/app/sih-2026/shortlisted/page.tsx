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
  Clock,
  Sparkles,
} from "lucide-react";

import shortlistedTeams from "@/data/sih-2026-shortlisted-teams.json";

export default function SihShortlistedPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Separate shortlisted (1-45) and waiting list (46-50) teams
  const shortlistedList = useMemo(() => {
    return shortlistedTeams.filter((t) => t.status === "shortlisted" || !t.status || t.srNo <= 45);
  }, []);

  const waitingList = useMemo(() => {
    return shortlistedTeams.filter((t) => t.status === "waiting" || t.srNo > 45);
  }, []);

  const totalShortlisted = shortlistedList.length;
  const totalWaiting = waitingList.length;

  const softwareTeams = shortlistedList.filter(
    (team) => team.category === "Software"
  ).length;

  const hardwareTeams = shortlistedList.filter(
    (team) => team.category === "Hardware"
  ).length;

  // Filter helper
  const filterTeams = (teamsList: typeof shortlistedTeams) => {
    return teamsList.filter((team) => {
      const search = searchTerm.toLowerCase();

      const matchesSearch =
        team.teamName.toLowerCase().includes(search) ||
        team.leaderName.toLowerCase().includes(search) ||
        team.psId.toLowerCase().includes(search) ||
        team.department.toLowerCase().includes(search);

      const matchesCategory =
        selectedCategory === "All" || team.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  };

  const filteredShortlisted = useMemo(
    () => filterTeams(shortlistedList),
    [shortlistedList, searchTerm, selectedCategory]
  );

  const filteredWaiting = useMemo(
    () => filterTeams(waitingList),
    [waitingList, searchTerm, selectedCategory]
  );

  // Top winners: 4x 1st place, 1x 2nd place, 1x 3rd place
  const firstPlaceTeams = useMemo(
    () => shortlistedTeams.filter((t) => t.rank === "1st"),
    []
  );

  const secondPlaceTeam = useMemo(
    () => shortlistedTeams.find((t) => t.rank === "2nd"),
    []
  );

  const thirdPlaceTeam = useMemo(
    () => shortlistedTeams.find((t) => t.rank === "3rd"),
    []
  );

  // Top 10 position teams (13 teams total due to 4-way 1st place tie)
  const top10Teams = useMemo(
    () => shortlistedTeams.slice(0, 13),
    []
  );

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
  };

  return (
    <main className="min-h-screen bg-[#030303] text-white overflow-hidden selection:bg-[#00A651] selection:text-white">
      {/* Background effects */}
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

      {/* Hero Section */}
      <section className="relative min-h-[580px] flex items-center justify-center px-6 md:px-12 pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/recursion-bg.jpg"
            alt="SIH Background"
            className="w-full h-full object-cover opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-[#030303]/80" />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-[#00A651]/15 animate-[spin_30s_linear_infinite]" />
          <div className="absolute inset-[50px] rounded-full border border-white/10 border-dashed animate-[spin_20s_linear_infinite_reverse]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
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
              <span className="block text-white">SHORTLISTED</span>
              <span className="block mt-2 text-[#00A651]">TEAMS</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="max-w-2xl mx-auto mt-8 text-gray-300 text-sm md:text-lg leading-relaxed"
          >
            Congratulations to all the innovators who have been shortlisted
            for the <span className="text-white font-semibold">SIH 2026 Internal Round</span> at RGIT.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 max-w-3xl mx-auto border border-zinc-800 bg-black/60 backdrop-blur-xl rounded-2xl overflow-hidden"
          >
            <Stat
              icon={<Trophy className="w-4 h-4 text-[#F26522]" />}
              value={totalShortlisted}
              label="Shortlisted"
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
            <Stat
              icon={<Clock className="w-4 h-4 text-amber-400" />}
              value={totalWaiting}
              label="Waiting List"
            />
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-10 pb-24">

        {/* =========================================================
            1. INTERNAL ROUND WINNERS SECTION (Top 3 Teams - 100vh height)
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="min-h-screen w-full flex flex-col justify-center my-12 py-12 px-6 md:px-10 rounded-3xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-xl"
        >
          {/* Header */}
          <div className="mb-10 border-b border-zinc-800/80 pb-6">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Internal Round Winners
            </h2>
            <p className="text-gray-400 text-sm md:text-base mt-2">
              Highest scoring teams evaluated during the RGIT Internal Hackathon.
            </p>
          </div>

          {/* 1st Place (4 Tied Teams) */}
          <div className="mb-10">
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                1st Place — Tied Teams
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">
                All 4 teams secured equal top evaluation scores in the internal round
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {firstPlaceTeams.map((team, idx) => (
                <WinnerCard key={team.srNo} team={team} index={idx} rankType="1st" />
              ))}
            </div>
          </div>

          {/* 2nd & 3rd Place (Same card sizing in 2-column grid) */}
          <div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                Runner-up Positions
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">
                2nd Place and 3rd Place evaluation awardees
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {secondPlaceTeam && (
                <WinnerCard team={secondPlaceTeam} index={0} rankType="2nd" />
              )}
              {thirdPlaceTeam && (
                <WinnerCard team={thirdPlaceTeam} index={1} rankType="3rd" />
              )}
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            2. TOP 10 INTERNAL ROUND TEAMS SECTION (3-Col Grid, Orange/White/Green)
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full my-12 py-12 px-6 md:px-10 rounded-3xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-xl"
        >
          {/* Header */}
          <div className="mb-10 border-b border-zinc-800/80 pb-6">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Top 10 Internal Round Teams
            </h2>
            <p className="text-gray-400 text-sm md:text-base mt-2">
              Top 10 position holders evaluated during the RGIT Internal Hackathon.
            </p>
          </div>

          {/* 3-Column Grid for Top 10 Teams */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {top10Teams.map((team, idx) => (
              <Top10TeamCard key={team.srNo} team={team} index={idx} />
            ))}
          </div>
        </motion.div>

        {/* Section Heading & Search/Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                All Shortlisted & Waiting Teams
              </h2>
              <p className="text-gray-400 mt-2 text-sm md:text-base">
                Explore the complete selection list advancing from the RGIT internal round.
              </p>
            </div>

            <div className="hidden md:flex items-center gap-2 text-xs text-gray-400">
              <Award className="w-4 h-4 text-[#00A651]" />
              SIH 2026 Results
            </div>
          </div>
        </motion.div>

        {/* SEARCH + FILTERS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-3 md:p-4 rounded-2xl border border-zinc-800 bg-zinc-950/90 backdrop-blur-xl"
        >
          <div className="flex flex-col lg:flex-row gap-3">
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
                      ${active
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

        {/* Filter Clear Indicator */}
        {(searchTerm || selectedCategory !== "All") && (
          <div className="mt-4 flex items-center justify-between px-1">
            <p className="text-xs md:text-sm text-gray-400">
              Showing matching results for filters
            </p>
            <button
              onClick={clearFilters}
              className="flex items-center gap-1.5 text-[#00A651] hover:text-white text-xs font-semibold transition-colors"
            >
              <X className="w-3.5 h-3.5" />
              Clear filters
            </button>
          </div>
        )}

        {/* =========================================================
            SHORTLISTED TEAMS GRID (45 TEAMS)
        ========================================================= */}
        <div className="mt-12">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="px-3 py-1 rounded-full bg-[#00A651]/15 text-[#00A651] border border-[#00A651]/30 text-xs font-bold uppercase tracking-wider">
                Official Selection
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Shortlisted Teams ({filteredShortlisted.length})
              </h3>
            </div>
            <span className="text-xs text-gray-400 hidden sm:inline">
              Top 45 Teams
            </span>
          </div>

          <AnimatePresence mode="popLayout">
            {filteredShortlisted.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {filteredShortlisted.map((team, index) => (
                  <TeamCard key={team.srNo} team={team} index={index} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-12 text-center rounded-2xl border border-zinc-800 bg-zinc-950 text-gray-400 text-sm"
              >
                No shortlisted team matches your search filter.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* =========================================================
            WAITING LIST TEAMS GRID (5 TEAMS)
        ========================================================= */}
        <div className="mt-16">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                Waitlist
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Waiting Teams ({filteredWaiting.length})
              </h3>
            </div>
            <span className="text-xs text-amber-400/80 font-medium hidden sm:inline">
              Next in line for nomination
            </span>
          </div>

          <AnimatePresence mode="popLayout">
            {filteredWaiting.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {filteredWaiting.map((team, index) => (
                  <TeamCard
                    key={team.srNo}
                    team={team}
                    index={index}
                    isWaiting
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-12 text-center rounded-2xl border border-zinc-800 bg-zinc-950 text-gray-400 text-sm"
              >
                No waiting list team matches your search filter.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Motivational Banner for All Participating Teams */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-12 overflow-hidden rounded-2xl border border-[#F26522]/30 bg-gradient-to-r from-[#F26522]/10 via-black to-[#00A651]/10 p-6 md:p-8 text-center backdrop-blur-xl"
        >
          <div className="flex items-center justify-center gap-2 text-[#F26522] text-xs uppercase tracking-[0.25em] font-bold mb-2">
            {/* <Sparkles className="w-4 h-4 text-[#F26522]" /> */}
            A Note to All Participants
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
            "Your journey doesn't end here — every line of code built is a stepping stone to your next breakthrough."
          </h3>
          <p className="mt-2 text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            To every team that participated: hackathons are about growth, resilience, and turning ideas into reality. Keep innovating, keep building, and come back stronger than ever! 🚀
          </p>
          <div className="mt-4 text-xs font-bold uppercase tracking-[0.25em] text-[#00A651]">
            — From CESS & CodeCell —
          </div>
        </motion.div>

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
                Every shortlisted and waiting team has earned its place. Best wishes to
                all teams representing RGIT at SIH 2026.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3 px-5 py-3 rounded-xl bg-black/60 border border-zinc-800">
              <span className="text-3xl font-black text-[#F26522]">
                {totalShortlisted}
              </span>
              <div className="text-left">
                <p className="text-xs font-bold text-white">SHORTLISTED</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                  + {totalWaiting} Waiting
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
    <div className="relative px-4 py-4 md:px-6 md:py-5 border-r last:border-r-0 border-zinc-800 text-center">
      <div className="flex justify-center mb-1">{icon}</div>
      <div className="text-2xl md:text-3xl font-black text-white">{value}</div>
      <div className="mt-0.5 text-[10px] md:text-xs uppercase tracking-[0.15em] text-gray-400 font-medium">
        {label}
      </div>
    </div>
  );
}

/* =============================================================
   WINNER CARD COMPONENT (Minimal & Professional, Identical Dimensions)
============================================================= */

function WinnerCard({
  team,
  index,
  rankType,
}: {
  team: (typeof shortlistedTeams)[number];
  index: number;
  rankType: "1st" | "2nd" | "3rd";
}) {
  const isSoftware = team.category === "Software";

  let rankBadgeText = "1st Place";
  let rankBadgeStyle = "bg-amber-400/10 text-amber-300 border-amber-400/40";
  let borderColor = "border-amber-500/60";
  let titleHover = "group-hover:text-amber-300";

  if (rankType === "2nd") {
    rankBadgeText = "2nd Place";
    rankBadgeStyle = "bg-slate-300/10 text-slate-200 border-slate-300/40";
    borderColor = "border-slate-300/60";
    titleHover = "group-hover:text-slate-200";
  } else if (rankType === "3rd") {
    rankBadgeText = "3rd Place";
    rankBadgeStyle = "bg-amber-700/10 text-amber-400 border-amber-700/40";
    borderColor = "border-amber-700/60";
    titleHover = "group-hover:text-amber-400";
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="group relative h-full"
    >
      <div
        className={`
          relative h-full rounded-xl border-2 ${borderColor} bg-[#0a0a0a]
          p-5 flex flex-col justify-between transition-all duration-300
        `}
      >
        <div>
          {/* Top Line: Rank Badge on Left, Category on Right */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border ${rankBadgeStyle}`}>
              {rankBadgeText}
            </span>

            <span
              className={`
                text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border
                ${isSoftware
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

/* =============================================================
   TOP 10 TEAM CARD COMPONENT (3-Col Grid, Orange/White/Green)
============================================================= */

function Top10TeamCard({
  team,
  index,
}: {
  team: (typeof shortlistedTeams)[number];
  index: number;
}) {
  const isSoftware = team.category === "Software";
  const columnIndex = index % 3;

  // Determine card border & accent colors based on column (Orange, White, Green)
  let borderColor = "border-[#F26522]";
  let rankBadgeStyle = "bg-[#F26522]/15 text-[#F26522] border-[#F26522]/40";
  let titleHover = "group-hover:text-[#F26522]";

  if (columnIndex === 1) {
    // Column 2: White Border
    borderColor = "border-white/80";
    rankBadgeStyle = "bg-white/10 text-white border-white/40";
    titleHover = "group-hover:text-white";
  } else if (columnIndex === 2) {
    // Column 3: Green Border
    borderColor = "border-[#00A651]";
    rankBadgeStyle = "bg-[#00A651]/15 text-[#00A651] border-[#00A651]/40";
    titleHover = "group-hover:text-[#00A651]";
  }

  // Last team (13th team, index 12) centered in 3-column layout
  const isLastCentered = index === 12;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.3) }}
      whileHover={{ y: -4 }}
      className={`group relative h-full ${isLastCentered ? "md:col-start-2" : ""}`}
    >
      <div
        className={`
          relative h-full rounded-xl border-2 ${borderColor} bg-[#0a0a0a]
          p-5 flex flex-col justify-between transition-all duration-300
        `}
      >
        <div>
          {/* Top Line: Rank Badge on Left, Category on Right */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border ${rankBadgeStyle}`}>
              {team.rank ? `${team.rank} Place` : "Top 10"}
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

/* =============================================================
   MINIMAL LANDSCAPE TEAM CARD
============================================================= */

function TeamCard({
  team,
  index,
  isWaiting = false,
}: {
  team: (typeof shortlistedTeams)[number];
  index: number;
  isWaiting?: boolean;
}) {
  const isSoftware = team.category === "Software";
  const columnIndex = index % 3;

  // Determine card border & accent colors based on column
  // Default for Col 1 (index % 3 === 0): Orange Border
  let borderColor = "border-[#F26522]";
  let hoverShadow = "hover:shadow-[0_8px_25px_rgba(242,101,34,0.15)]";
  let srNoColor = "text-[#F26522]";
  let titleHover = "group-hover:text-[#F26522]";

  if (isWaiting) {
    borderColor = "border-amber-500/70";
    hoverShadow = "hover:shadow-[0_8px_25px_rgba(245,158,11,0.15)]";
    srNoColor = "text-amber-400";
    titleHover = "group-hover:text-amber-400";
  } else if (columnIndex === 1) {
    // Column 2: White Border
    borderColor = "border-white/80";
    hoverShadow = "hover:shadow-[0_8px_25px_rgba(255,255,255,0.15)]";
    srNoColor = "text-white";
    titleHover = "group-hover:text-white";
  } else if (columnIndex === 2) {
    // Column 3: Green Border
    borderColor = "border-[#00A651]";
    hoverShadow = "hover:shadow-[0_8px_25px_rgba(0,166,81,0.15)]";
    srNoColor = "text-[#00A651]";
    titleHover = "group-hover:text-[#00A651]";
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
            <div className="flex items-center gap-1.5">
              <span className={`font-mono text-xs font-bold ${srNoColor}`}>
                #{String(team.srNo).padStart(2, "0")}
              </span>
              {isWaiting && (
                <span className="text-[10px] font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/30 px-1.5 py-0.5 rounded">
                  WAITLIST
                </span>
              )}
            </div>

            <span
              className={`
                text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border
                ${isSoftware
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
