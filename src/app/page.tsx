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
          <img src="/recursion-bg.jpg" alt="background" className="rounded-[2rem] inset-0 object-cover w-full h-full" />
        </div>

        <h1 className="text-center md:text-5xl text-2xl font-bold md:w-[60%]">
          "Platform Where We Collaborate To Bring Out The Best Coder In Us"
        </h1>

        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-4 mt-10 w-full">
          <Button variant="outline" size="lg" className="w-full md:w-auto">
            Explore
          </Button>
          <Link href="/codertine-25" className="w-full md:w-auto">
            <Button size="lg" className="w-full md:w-auto">
              Checkout Codertine 6.0
              <ArrowRight className="-rotate-[35deg]" />
            </Button>
          </Link>
        </div>
      </section>

      <AboutUs />

      <UpcomingEvent />

      <WannaSponsor />
    </main>
  );
}
