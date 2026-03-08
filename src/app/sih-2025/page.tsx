"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SihTimeline } from "@/components/sections/sih/SihTimeline";

export default function SIH2025Section() {
  const [time, setTime] = useState<any>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const { scrollY } = useScroll();
  const landingRef = useRef(null);

  // Animation for background hue
  const landingHue = useTransform(scrollY, [0, 200], [0, 360]);

  useEffect(() => {
    const target = new Date("September 15, 2025 13:15:00").getTime(); // <-- updated date
    const addZeroPrefix = (value: number) => (value < 10 ? "0" + value : value);

    const updateTime: any = () => {
      const remaining = target - Date.now();
      if (remaining > 0) {
        setTime({
          days: addZeroPrefix(Math.floor(remaining / (1000 * 60 * 60 * 24))),
          hours: addZeroPrefix(
            Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          ),
          minutes: addZeroPrefix(
            Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60))
          ),
          seconds: addZeroPrefix(Math.floor((remaining % (1000 * 60)) / 1000)),
        });
        setTimeout(updateTime, 1000);
      } else {
        setTime({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
      }
    };

    updateTime();
    return () => clearTimeout(updateTime);
  }, []);

  return (
    <main id="sih2025-page">
      {/* Landing Section */}
      <motion.section
        ref={landingRef}
        className="w-full min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-8 md:p-12"
        style={{
          filter: `hue-rotate(${landingHue}deg)`,
        }}
      >
        <div className="flex flex-col items-center justify-center w-full">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="hidden md:block text-4xl md:text-7xl font-porticoRough mt-8 md:mt-0 max-w-md text-center md:text-left leading-tight md:leading-[3.5rem] md:absolute md:left-12 md:bottom-[11rem]"
          >
            UNLEASH YOUR POTENTIAL <br />{" "}
            <small className="text-2xl md:text-5xl text-foreground/60 tracking-wide">
              OPPORTUNITY AWAITS
            </small>
          </motion.h1>
          <motion.img
            className="w-[250px] md:w-[600px] h-auto object-contain mx-auto md:static mt-8 md:mt-56 absolute top-[11rem]"
            src="/data/SIH Poster 2.png"
            alt="SIH 2025 Poster"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="md:mt-0 max-w-md text-center md:text-left md:absolute md:right-[1rem] md:bottom-[11.5rem] mt-[22rem] md:mt-0 md:px-12"
          >
            <p className="text-sm md:text-lg text-justify">
              The Smart India Hackathon is a nationwide initiative to solve
              pressing problems through innovation.
              <br />{" "}
              <span className="font-bold">
                Team leaders, register your teams now!
              </span>
            </p>
            <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0 mt-4 justify-center md:justify-start">
              <Link
                href={"https://forms.gle/4BJ9BQsZY94GJ3qA9"}
                target="_blank"
              >
                <Button className="w-full md:w-auto" size={"lg"}>
                  REGISTER NOW
                </Button>
              </Link>
              <Link href={"https://sih.gov.in/"} target="_blank">
                <Button
                  className="md:w-auto w-full md:max-w-full md:px-3 md:py-1.5 md:text-sm"
                  size={"lg"}
                  variant={"outline"}
                >
                  Learn More about SIH
                  <ArrowRight className="-rotate-[35deg]" />
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="tracking-wide text-5xl md:text-[6rem] font-porticoRough leading-2 md:leading-[4.5rem] text-center absolute md:top-[6rem] top-[5rem]"
          >
            SIH 2025 <br />{" "}
            <small className="text-4xl md:text-7xl">INTERNAL ROUND</small>
          </motion.h1>
        </div>
      </motion.section>

      {/* About Section with Background */}
      <section className="relative bg-transparent mt-8">
        <div className="absolute inset-0 bg-neutral-950 backdrop-blur-md"></div>
        {/* About Content */}
        <section className="relative z-10 h-min-screen py-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-porticoRough mb-8">
              About SIH 2025
            </h2>
            <p className="text-sm md:text-lg text-foreground/80">
              Smart India Hackathon is a nationwide initiative to provide
              students with a platform to solve pressing problems of society,
              organizations, and government. SIH 2025 brings together the
              brightest minds to innovate and create impactful solutions.
            </p>
          </div>
        </section>
      </section>

      {/* Timer Section */}
      <section className="relative z-10 px-4 md:px-10 py-6 border-t-[0.5px] border-b-[0.5px] border-slate-500 flex flex-col md:flex-row justify-between items-center bg-neutral-950/80">
        <span className="mb-4 text-2xl md:text-6xl tracking-wide font-porticoRough font-black text-center md:text-left">
          SIH 2025 Internal Round Starts In
        </span>
        <div className="flex items-center justify-center space-x-4 md:space-x-8">
          {["days", "hours", "minutes", "seconds"].map((key, index) => (
            <div key={index} className="text-center">
              <h1 className="text-2xl md:text-5xl font-bold">{time[key]}</h1>
              <p className="mt-2 tracking-wide text-xs md:text-base text-foreground/70">
                {key.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-neutral-950/80 py-8 px-4 md:px-10">
        <h2 className="text-3xl md:text-5xl text-center font-porticoRough">
          SIH 2025 Timeline
        </h2>
        <SihTimeline />
      </section>
    </main>
  );
}
