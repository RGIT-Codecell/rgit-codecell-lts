"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Terminal, Calendar, MapPin, Trophy, Clock } from "lucide-react";
import Link from "next/link";
import { EVENT_START_DATE, REGISTRATION_FORM_URL } from "@/data/codertine-2026";

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const target = new Date(EVENT_START_DATE).getTime();
    const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);

    const updateTimer = () => {
      const now = Date.now();
      const diff = target - now;

      if (diff > 0) {
        setTimeLeft({
          days: pad(Math.floor(diff / (1000 * 60 * 60 * 24))),
          hours: pad(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
          minutes: pad(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))),
          seconds: pad(Math.floor((diff % (1000 * 60)) / 1000)),
        });
      } else {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-20 overflow-hidden bg-[#001317]">
      {/* Dynamic Background Atmosphere - Styled exactly like the Poster */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Ctext x='10' y='24' fill='%2300f5ff' font-family='monospace' font-size='12'%3E0 1 0 0 1 1 0 1%3C/text%3E%3Ctext x='10' y='54' fill='%2300f5ff' font-family='monospace' font-size='12'%3E1 1 0 1 0 0 1 0%3C/text%3E%3Ctext x='10' y='84' fill='%2300f5ff' font-family='monospace' font-size='12'%3E0 0 1 1 1 0 0 1%3C/text%3E%3Ctext x='10' y='114' fill='%2300f5ff' font-family='monospace' font-size='12'%3E1 0 1 0 0 1 1 0%3C/text%3E%3Ctext x='10' y='144' fill='%2300f5ff' font-family='monospace' font-size='12'%3E0 1 1 0 1 0 0 1%3C/text%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        />  
          {/* Bottom Gear Watermarks from Poster */}
        <div className="absolute -bottom-16 -left-16 w-64 h-64 border-8 border-dashed border-[#00f5ff]/10 rounded-full" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 border-8 border-dashed border-[#00f5ff]/10 rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Main Title Styled with Poster's Cyan Glow */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-6 sm:mb-8">
          <h1
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-[#00f5ff] font-mono uppercase"
            style={{
              textShadow:
                "0 0 20px rgba(0, 245, 255, 0.7), 0 0 45px rgba(0, 245, 255, 0.35)",
            }}
          >
            CoderTine 7.0
          </h1>
        </div>

        {/* Core Tagline in Poster Style */}
        <div className="mb-6 sm:mb-8">
          <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#00e5ff] tracking-wide font-sans">
            Find the problem. Understand it. Fix it.
          </p>
        </div>

        {/* Date & Venue Pill Badge - Exactly like the Poster */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-6 py-2.5 rounded-full bg-[#00c2cb] text-[#00181d] font-bold text-xs sm:text-sm font-mono shadow-[0_0_25px_rgba(0,194,203,0.5)] mb-8 sm:mb-10"
        >
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="w-4 h-4 stroke-[2.5]" />
            <span>5TH – 9TH OCTOBER</span>
          </span>
          <span className="opacity-40">|</span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-4 h-4 stroke-[2.5]" />
            <span>10:00 AM ONWARDS</span>
          </span>
          <span className="opacity-40">|</span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-4 h-4 stroke-[2.5]" />
            <span>SEMINAR HALL &amp; CODECHEF</span>
          </span>
        </motion.div>

        {/* Hero Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-sm sm:text-lg text-[#b2ebf2] max-w-2xl mx-auto leading-relaxed mb-10 sm:mb-12"
        >
          A 5-day hands-on engineering arc taking you through AI development, under-the-hood reverse engineering,
          competitive debugging battles, fintech market trading, and the flagship CodeChef DSA tournament.
        </motion.p>

        {/* Hero CTA Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          {/* REGISTER NOW Button - Styled directly like the Poster badge */}
          <a
            href={REGISTRATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-black tracking-wider uppercase transition-all duration-300 rounded-xl bg-[#00161a] text-[#00f5ff] border-2 border-[#00f5ff] shadow-[0_0_25px_rgba(0,245,255,0.4)] hover:bg-[#00f5ff] hover:text-[#001417] hover:shadow-[0_0_40px_rgba(0,245,255,0.7)] hover:-translate-y-0.5 active:translate-y-0"
          >
            {/* <Sparkles className="w-5 h-5 mr-2 text-[#00f5ff] group-hover:text-[#001417] group-hover:rotate-12 transition-transform" /> */}
            <span>REGISTER NOW!</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>

          <Link
            href="#arc-roadmap"
            className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-[#e0f7fa] bg-[#01252c]/80 hover:bg-[#023842] border border-[#00e5ff]/35 hover:border-[#00f5ff] rounded-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4 mr-2 text-[#00f5ff]" />
            <span>Explore 5-Day Arc</span>
          </Link>

          <Link
            href="#prizes-section"
            className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-[#e0f7fa] bg-[#012228]/60 hover:bg-[#02313a] border border-[#008f9c]/40 hover:border-[#00e5ff]/60 rounded-xl backdrop-blur-md transition-all duration-300"
          >
            <Trophy className="w-4 h-4 mr-2 text-[#00f5ff]" />
            <span>Prizes &amp; Awards</span>
          </Link>
        </motion.div>

        {/* Live Countdown Timer Section */}
        {isMounted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="w-full max-w-xl mx-auto p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#01272f]/95 via-[#001d23]/95 to-[#001317]/95 border border-[#00e5ff]/35 shadow-[0_0_35px_rgba(0,245,255,0.15)] backdrop-blur-xl mb-12"
          >
            <div className="flex items-center justify-between border-b border-[#00e5ff]/20 pb-3 mb-4 px-2">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#00f5ff]" />
                <span className="text-xs font-mono tracking-wider uppercase text-[#00f5ff] font-bold">
                  Arc Commences In
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#76cdd8]">
                <MapPin className="w-3.5 h-3.5 text-[#00c2cb]" />
                <span>RGIT Campus + CodeChef</span>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
              {[
                { label: "DAYS", value: timeLeft.days },
                { label: "HOURS", value: timeLeft.hours },
                { label: "MINUTES", value: timeLeft.minutes },
                { label: "SECONDS", value: timeLeft.seconds },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-xl bg-[#00181d] border border-[#00e5ff]/20"
                >
                  <span
                    className="text-2xl sm:text-4xl font-extrabold font-mono text-[#00f5ff]"
                    style={{
                      textShadow: "0 0 15px rgba(0, 245, 255, 0.5)",
                    }}
                  >
                    {item.value}
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-[#64a9b3] mt-1 font-mono">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Quick Highlights Counters in Poster Teal Palette */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 pt-6 border-t border-[#003842] w-full max-w-3xl"
        >
          <div className="text-center">
            <span className="block text-2xl sm:text-3xl font-extrabold font-mono text-[#00f5ff]">
              05
            </span>
            <span className="text-xs text-[#76cdd8] tracking-wider uppercase font-semibold">
              Days of Code
            </span>
          </div>

          <div className="text-center">
            <span className="block text-2xl sm:text-3xl font-extrabold font-mono text-[#38ef7d]">
              02
            </span>
            <span className="text-xs text-[#76cdd8] tracking-wider uppercase font-semibold">
              Hands-on Workshops
            </span>
          </div>

          <div className="text-center">
            <span className="block text-2xl sm:text-3xl font-extrabold font-mono text-[#00e5ff]">
              03
            </span>
            <span className="text-xs text-[#76cdd8] tracking-wider uppercase font-semibold">
              Flagship Challenges
            </span>
          </div>

          <div className="text-center">
            <span className="block text-2xl sm:text-3xl font-extrabold font-mono text-[#00f5d4]">
              01
            </span>
            <span className="text-xs text-[#76cdd8] tracking-wider uppercase font-semibold">
              Master Arc
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
