"use client";

import React from "react";

import AboutUs from "@/components/sections/AboutUs";
import Hero from "@/components/sections/Hero";
import UpcomingEvent from "@/components/sections/UpcomingEvent";
import WannaSponsor from "@/components/sections/WannaSponsor";

export default function Home() {
  return (
    <main className="md:px-12 px-10">
      
      <Hero />
      <AboutUs />
      <UpcomingEvent />
      <WannaSponsor />

    </main>
  );
}
