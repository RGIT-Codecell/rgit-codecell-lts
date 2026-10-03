"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CodertineModule, REGISTRATION_FORM_URL, CODERTINE_MODULES } from "@/data/codertine-2026";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Laptop,
  Award,
  Sparkles,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  Phone,
  UserCheck,
} from "lucide-react";

interface Props {
  event: CodertineModule;
  initialTab?: "overview" | "guide";
}

export default function EventDetailView({ event, initialTab = "overview" }: Props) {
  const [activeTab, setActiveTab] = useState<"overview" | "guide">(initialTab);

  const currentIndex = CODERTINE_MODULES.findIndex((m) => m.slug === event.slug);
  const prevEvent = currentIndex > 0 ? CODERTINE_MODULES[currentIndex - 1] : null;
  const nextEvent =
    currentIndex < CODERTINE_MODULES.length - 1 ? CODERTINE_MODULES[currentIndex + 1] : null;

  const isWorkshop = event.type === "workshop";

  return (
    <div
      className="min-h-screen text-slate-100 pb-24 transition-colors duration-300 relative overflow-hidden pt-28 sm:pt-32 md:pt-36"
      style={{ backgroundColor: event.bgDark }}
    >
      {/* Dynamic Ambient Background Glows matching Poster Palette */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 right-1/4 w-[600px] h-[600px] rounded-full blur-[160px] opacity-30"
          style={{ backgroundColor: event.glowColor }}
        />
        <div
          className="absolute top-1/2 -left-32 w-[500px] h-[500px] rounded-full blur-[150px] opacity-20"
          style={{ backgroundColor: event.glowColor }}
        />
        <div
          className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full blur-[140px] opacity-25"
          style={{ backgroundColor: event.glowColor }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Breadcrumb & Navigation Bar - Positioned cleanly below Header */}
        <div
          className={`rounded-2xl px-5 py-3.5 backdrop-blur-xl border flex items-center justify-between shadow-md mb-8 ${event.cardBg} ${event.cardBorder}`}
        >
          <Link
            href="/codertine-26#arc-roadmap"
            className={`inline-flex items-center text-xs sm:text-sm font-semibold transition-colors group ${event.accentColor} hover:brightness-125`}
          >
            <ArrowLeft className="w-4 h-4 mr-1.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to CoderTine 7.0 Arc</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-mono opacity-80">
            <span>Module #{event.number} of 05</span>
          </div>
        </div>

        {/* Event Hero Banner styled directly with poster gradients & glow */}
        <div
          className={`relative rounded-3xl p-6 sm:p-10 bg-gradient-to-br ${event.toneGradient} border ${event.borderColor} shadow-2xl overflow-hidden mb-10`}
          style={{
            boxShadow: `0 20px 50px -10px ${event.glowColor}`,
          }}
        >
          {/* Subtle Ambient Halo */}
          <div
            className="absolute -top-10 -right-10 w-96 h-96 rounded-full blur-[110px] pointer-events-none opacity-30"
            style={{ backgroundColor: event.glowColor }}
          />

          <div className="relative z-10 space-y-4">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <span className={`px-3.5 py-1 rounded-full text-xs font-mono font-bold border ${event.badgeBg}`}>
                MODULE #{event.number} · {event.day.toUpperCase()}
              </span>

              <span
                className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-mono ${
                  isWorkshop
                    ? "bg-[#00f5a0]/15 text-[#38ef7d] border border-[#38ef7d]/35"
                    : "bg-white/10 text-white border border-white/20"
                }`}
              >
                {event.type.toUpperCase()}: {event.price}
              </span>

              {event.partner && (
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-black/40 text-white/90 border border-white/15">
                  Platform Partner: {event.partner}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase">
              {event.title}
            </h1>

            <p className={`text-base sm:text-xl font-bold italic max-w-3xl ${event.accentColor}`}>
              "{event.tagline}"
            </p>

            <p className="text-sm sm:text-base text-slate-200 max-w-3xl leading-relaxed">
              {event.subtitle}
            </p>

            {/* Poster Date & Venue Pill Badge */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <div
                className={`inline-flex flex-wrap items-center gap-2 sm:gap-3 px-4 py-2 rounded-full font-mono text-xs sm:text-sm font-bold shadow-md ${event.pillBadgeBg} ${event.pillBadgeText}`}
              >
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{event.date.toUpperCase()}</span>
                </span>
                <span className="opacity-40">|</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{event.time.toUpperCase()}</span>
                </span>
                <span className="opacity-40">|</span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{event.venue.toUpperCase()}</span>
                </span>
              </div>

              <span className="inline-flex items-center text-xs font-mono text-slate-200 bg-black/40 px-3 py-2 rounded-full border border-white/10">
                <Laptop className="w-3.5 h-3.5 mr-1.5 opacity-80" />
                {event.laptopRequirement}
              </span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/15 mb-8">
          <button
            type="button"
            onClick={() => setActiveTab("overview")}
            className={`pb-4 px-6 text-sm font-bold flex items-center gap-2 border-b-2 transition-all ${
              activeTab === "overview"
                ? `border-current ${event.accentColor} font-black`
                : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Event Overview &amp; Details</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("guide")}
            className={`pb-4 px-6 text-sm font-bold flex items-center gap-2 border-b-2 transition-all ${
              activeTab === "guide"
                ? `border-current ${event.accentColor} font-black`
                : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Full Syllabus &amp; Guide</span>
          </button>
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Core Purpose & Takeaway */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-6 sm:p-7 rounded-2xl ${event.cardBg} border ${event.cardBorder} shadow-lg`}>
                <span className={`text-xs font-mono uppercase tracking-wider block mb-2 font-bold ${event.accentColor}`}>
                  // Event Purpose
                </span>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  {event.purpose}
                </p>
              </div>

              <div className={`p-6 sm:p-7 rounded-2xl ${event.cardBg} border ${event.cardBorder} shadow-lg flex flex-col justify-between`}>
                <div>
                  <span className={`text-xs font-mono uppercase tracking-wider block mb-2 font-bold ${event.accentColor}`}>
                    // Key Takeaway
                  </span>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                    {event.keyTakeaway}
                  </p>
                </div>
                {event.quote && (
                  <blockquote className="mt-4 pt-3 border-t border-white/10 text-xs sm:text-sm text-slate-300 italic">
                    "{event.quote}"
                  </blockquote>
                )}
              </div>
            </div>

            {/* Stepped Journey / Ladder (if available) */}
            {event.journeySteps && (
              <div className={`p-6 sm:p-7 rounded-2xl ${event.cardBg} border ${event.cardBorder} shadow-lg`}>
                <span className={`text-xs font-mono uppercase tracking-wider block mb-4 font-bold ${event.accentColor}`}>
                  // Participant Journey
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {event.journeySteps.map((step, idx) => (
                    <div
                      key={step}
                      className={`p-3.5 rounded-xl ${event.surfaceSubtle} border ${event.cardBorder} text-center`}
                    >
                      <span className={`text-xs font-mono block mb-1 font-bold ${event.accentColor}`}>
                        STEP 0{idx + 1}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-white">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {event.ladderSteps && (
              <div className={`p-6 sm:p-7 rounded-2xl ${event.cardBg} border ${event.cardBorder} shadow-lg`}>
                <span className={`text-xs font-mono uppercase tracking-wider block mb-4 font-bold ${event.accentColor}`}>
                  // Progressive Challenge Ladder
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {event.ladderSteps.map((step, idx) => (
                    <div
                      key={step}
                      className={`p-3.5 rounded-xl ${event.surfaceSubtle} border ${event.cardBorder}`}
                    >
                      <span className={`text-xs font-mono block mb-1 font-bold ${event.accentColor}`}>
                        ROUND {idx + 1}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-200">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* What it Covers & People Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* What It Covers */}
              <div className={`lg:col-span-7 p-6 sm:p-7 rounded-2xl ${event.cardBg} border ${event.cardBorder} shadow-lg`}>
                <span className={`text-xs font-mono uppercase tracking-wider block mb-4 font-bold ${event.accentColor}`}>
                  // Core Modules &amp; Coverage
                </span>
                <ul className="space-y-3">
                  {event.whatItCovers.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${event.accentColor}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* People & Logistics */}
              <div className={`lg:col-span-5 p-6 sm:p-7 rounded-2xl ${event.cardBg} border ${event.cardBorder} shadow-lg space-y-4`}>
                <span className={`text-xs font-mono uppercase tracking-wider block font-bold ${event.accentColor}`}>
                  // Event Details &amp; Logistics
                </span>

                <div className="space-y-3 text-sm">
                  {event.speaker && (
                    <div className="pb-3 border-b border-white/10">
                      <span className="text-xs text-slate-400 block font-mono">Speaker</span>
                      <span className="text-white font-bold block text-base">{event.speaker}</span>
                      {event.speakerTitle && (
                        <span className={`text-xs ${event.accentColor}`}>{event.speakerTitle}</span>
                      )}
                    </div>
                  )}

                  <div className="pb-3 border-b border-white/10">
                    <span className="text-xs text-slate-400 block font-mono">Organizing Committee</span>
                    <span className="text-white font-semibold">{event.team}</span>
                  </div>

                  <div className="pb-3 border-b border-white/10">
                    <span className="text-xs text-slate-400 block font-mono">Capacity &amp; Eligibility</span>
                    <span className="text-slate-200">{event.capacity}</span>
                  </div>

                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Certification</span>
                    <span className="text-emerald-400 font-semibold">{event.certificate}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Poster Event Leads & Queries Section */}
            {event.queryContacts && event.queryContacts.length > 0 && (
              <div className={`p-6 sm:p-8 rounded-2xl ${event.cardBg} border ${event.cardBorder} shadow-lg`}>
                <div className="flex items-center gap-2 mb-6">
                  <UserCheck className={`w-5 h-5 ${event.accentColor}`} />
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider">
                      For Queries · Event Leads
                    </h3>
                    <p className="text-xs text-slate-400">
                      Reach out directly to the event leads listed on the official poster.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
                  {event.queryContacts.map((contact, idx) => (
                    <a
                      key={idx}
                      href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                      className={`group p-3.5 rounded-xl ${event.surfaceSubtle} border ${event.cardBorder} hover:border-white/40 transition-all flex flex-col justify-between`}
                    >
                      <div>
                        <span className="text-xs font-mono font-bold text-slate-400 block uppercase tracking-wider mb-1">
                          {contact.role || "EVENT LEAD"}
                        </span>
                        <span className="text-sm font-extrabold text-white block group-hover:underline">
                          {contact.name}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 mt-3 pt-2 border-t border-white/10 text-xs font-mono text-slate-300">
                        <Phone className={`w-3 h-3 ${event.accentColor} shrink-0`} />
                        <span className="text-[11px] truncate">{contact.phone}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Direct Register Callout */}
            <div
              className={`rounded-2xl p-6 sm:p-8 bg-gradient-to-r ${event.toneGradient} border ${event.borderColor} flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl`}
              style={{
                boxShadow: `0 15px 35px -10px ${event.glowColor}`,
              }}
            >
              <div>
                <span className={`text-xs font-mono font-bold uppercase tracking-wider block mb-1 ${event.accentColor}`}>
                  Ready to participate?
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Reserve Your Spot for {event.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {isWorkshop
                    ? "Workshops are 100% free! Pre-registration is recommended to secure entry."
                    : `Entry pass: ${event.price}. Official certificates and tournament cash prizes.`}
                </p>
              </div>

              <a
                href={REGISTRATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`shrink-0 inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-black text-sm uppercase tracking-wider transition-all ${event.btnStyle}`}
              >
                <span>{isWorkshop ? "RSVP FREE WORKSHOP" : `REGISTER NOW (${event.price})`}</span>
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        )}

        {/* TAB 2: GUIDE & SYLLABUS */}
        {activeTab === "guide" && (
          <div className="space-y-8">
            <div className={`p-6 sm:p-8 rounded-2xl ${event.cardBg} border ${event.cardBorder} shadow-lg`}>
              <span className={`text-xs font-mono uppercase tracking-wider block mb-2 font-bold ${event.accentColor}`}>
                // Official Curriculum
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                Detailed Syllabus
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6">{event.guide.subtitle}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {event.guide.syllabus.map((topic, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl ${event.surfaceSubtle} border ${event.cardBorder} flex items-start gap-3`}
                  >
                    <span className={`font-mono text-xs font-bold shrink-0 mt-0.5 ${event.accentColor}`}>
                      {String(idx + 1).padStart(2, "0")}.
                    </span>
                    <span className="text-sm text-slate-200">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Student Gains */}
            <div className={`p-6 sm:p-8 rounded-2xl ${event.cardBg} border ${event.cardBorder} shadow-lg`}>
              <span className={`text-xs font-mono uppercase tracking-wider block mb-2 font-bold ${event.accentColor}`}>
                // Learning Outcomes
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-4">
                What You Gain from this Session
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {event.guide.studentGains.map((gain, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl ${event.surfaceSubtle} border ${event.cardBorder} flex items-start gap-3`}
                  >
                    <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${event.accentColor}`} />
                    <span className="text-sm text-slate-200 leading-relaxed">{gain}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Suggested Event Flow */}
            <div className={`p-6 sm:p-8 rounded-2xl ${event.cardBg} border ${event.cardBorder} shadow-lg`}>
              <span className={`text-xs font-mono uppercase tracking-wider block mb-2 font-bold ${event.accentColor}`}>
                // Schedule Flow
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-6">
                Suggested Event Breakdown
              </h3>

              <div className="space-y-3">
                {event.guide.eventFlow.map((step, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 sm:p-4 rounded-xl ${event.surfaceSubtle} border ${event.cardBorder} flex items-center gap-4`}
                  >
                    <span
                      className={`w-8 h-8 rounded-lg font-mono text-xs font-bold flex items-center justify-center shrink-0 border ${event.badgeBg}`}
                    >
                      0{idx + 1}
                    </span>
                    <span className="text-sm font-semibold text-slate-200">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Participant Note */}
            <div
              className={`p-6 rounded-2xl border flex items-start gap-4 ${event.cardBg} ${event.cardBorder}`}
            >
              <div className={`p-2.5 rounded-xl ${event.surfaceSubtle} ${event.accentColor} shrink-0 mt-0.5`}>
                <Laptop className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className={`text-sm font-bold uppercase tracking-wider ${event.accentColor}`}>
                  Important Participant Note
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {event.guide.participantNote}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Arc Pagination (Previous / Next Module) */}
        <div className="pt-12 mt-12 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          {prevEvent ? (
            <Link
              href={`/codertine-26/events/${prevEvent.slug}`}
              className={`w-full sm:w-auto p-4 rounded-xl ${event.cardBg} hover:brightness-125 border ${event.cardBorder} flex items-center gap-3 transition-all text-left`}
            >
              <ArrowLeft className={`w-5 h-5 shrink-0 ${event.accentColor}`} />
              <div>
                <span className="text-[11px] font-mono text-slate-400 block">
                  ← Previous Module #{prevEvent.number}
                </span>
                <span className="text-sm font-bold text-white">{prevEvent.shortTitle}</span>
              </div>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}

          {nextEvent && (
            <Link
              href={`/codertine-26/events/${nextEvent.slug}`}
              className={`w-full sm:w-auto p-4 rounded-xl ${event.cardBg} hover:brightness-125 border ${event.cardBorder} flex items-center justify-end gap-3 transition-all text-right`}
            >
              <div>
                <span className="text-[11px] font-mono text-slate-400 block">
                  Next Module #{nextEvent.number} →
                </span>
                <span className="text-sm font-bold text-white">{nextEvent.shortTitle}</span>
              </div>
              <ArrowRight className={`w-5 h-5 shrink-0 ${event.accentColor}`} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
