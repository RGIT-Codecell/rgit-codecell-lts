import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen md:px-12">
      <div className="absolute w-[100vw] h-[100vh] z-[-1]">
        <img
          src="/recursion-bg.jpg"
          alt="background"
          className="rounded-[2rem] inset-0 object-cover w-full h-full"
        />
      </div>

      <h1 className="text-center md:text-5xl text-2xl font-bold md:w-[60%]">
        "Platform Where We Collaborate To Bring Out The Best Coder In Us"
      </h1>

      <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-4 mt-10 w-full">
        <Button variant="outline" size="lg" className="w-full md:w-auto">
          Explore
        </Button>
        <Link href="/sih-2026" className="w-full md:w-auto">
          <Button size="lg" className="w-full md:w-auto">
            Checkout SIH 2026
            <ArrowRight className="-rotate-[35deg]" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
