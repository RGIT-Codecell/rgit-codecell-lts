"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

import AboutUs from "@/components/sections/AboutUs";
import UpcomingEvent from "@/components/sections/UpcomingEvent";
import WannaSponsor from "@/components/sections/WannaSponsor";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {

  return (
    <main className="md:px-12 px-10">
      <section className="relative flex flex-col items-center justify-center h-screen md:px-12">

        <div className="absolute w-[100vw] h-[100vh] z-[-1]">
          <video src="https://res.cloudinary.com/dbsohsdkz/video/upload/v1773161767/bg-hero_uqgugx.mp4" autoPlay muted loop playsInline className="rounded-[2rem] inset-0 object-cover w-full h-full" />
        </div>

        <h1 className="text-center md:text-5xl text-2xl font-bold md:w-[60%]">
          &quot;Platform Where We Collaborate To Bring Out The Best Coder In Us&quot;
        </h1>

        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-4 mt-10 w-full">
          <Link href="/events" className="w-full md:w-auto">
            <Button variant="outline" size="lg" className="w-full md:w-auto">
              Explore
            </Button>
          </Link>
          <Link href="/recursion-2026" className="w-full md:w-auto">
            <button className="relative w-full md:w-auto px-6 py-3 bg-[#8B0000] text-white font-bold uppercase tracking-widest border border-red-900 overflow-hidden group shadow-[0_0_15px_rgba(139,0,0,0.5)] transition-all hover:shadow-[0_0_25px_rgba(212,175,55,0.7)] hover:border-[#D4AF37] cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                Checkout Recursion 7.0{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </Link>
        </div>
      </section>

      <AboutUs />

      <UpcomingEvent />

      <WannaSponsor />
    </main>
  );
}
