"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Sponsers from "@/components/sections/codertine/Sponsers";
import Prizes from "@/components/sections/codertine/Prizes";
import Rules from "@/components/sections/codertine/Rules";
import Faq from "@/components/sections/codertine/Faq";
import RegistrationForm from "@/components/sections/codertine/RegistrationForm";

export default function Codertine25() {
  const [time, setTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const { scrollY } = useScroll();
  const landingRef = useRef(null);

  const landingHue = useTransform(scrollY, [0, 200], [0, -30]);

  useEffect(() => {
    const target = new Date("October 10, 2025 22:00:00").getTime();    //change date to 11th oct
    const addZeroPrefix = (value: number) =>
      value < 10 ? `0${value}` : value.toString();

    const interval = setInterval(() => {
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
      } else {
        setTime({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main id="codertine25-page">
      {/* Landing Section */}
      <motion.section
        ref={landingRef}
        className="w-full min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-8 md:p-12"
        style={{
          filter: `hue-rotate(${landingHue.get()}deg)`,
        }}
      >
        <div className="flex flex-col items-center justify-center w-full">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="hidden md:block text-4xl md:text-6xl font-porticoRough mt-8 md:mt-0 max-w-md text-center md:text-left leading-tight md:leading-[3.5rem] md:absolute md:left-12 md:bottom-[15rem]"
          >
            Participate Solo
            <br />{" "}
            <small className="text-2xl md:text-8xl text-foreground/60 tracking-wide">
              and Win Big
            </small>
          </motion.h1>
          <motion.img
            className="w-[12rem] md:w-[600px] h-auto object-contain mx-auto md:static mt-8 md:mt-56 absolute top-[11rem] z-[-1]"
            src="https://res.cloudinary.com/dbsohsdkz/image/upload/v1759581343/codertine6_tcst6x.jpg"
            alt="SIH 2025 Poster"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="md:mt-0 max-w-md text-center md:text-left md:absolute md:right-[1rem] md:bottom-[15rem] mt-[22rem] md:mt-0 md:px-12"
          >
            <div className="mt-[110px] md:mt-0 lg:mt-0 text-sm md:text-lg">
              <p className="text-sm  md:text-lg text-justify">
                Prove your DSA mastery in CODERTINE 6.0! Join our 2-hour solo
                coding battle on CodeChef, hosted by RGIT Codecell & RGIT CESS.
                Compete for exciting cash prizes and claim your spot at the top.
              </p>
              <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0 mt-4 justify-center md:justify-start">
                <Link href="#registration-form">
                  <Button className="w-full md:w-auto" size={"lg"}>
                    REGISTER NOW
                  </Button>
                </Link>
                <Link href="#about-us">
                  <Button
                    className="w-full md:w-auto"
                    size={"lg"}
                    variant={"outline"}
                  >
                    Learn More
                    <ArrowRight className="-rotate-[35deg]" />
                  </Button>
                </Link>
              </div>
            </div>

          </motion.div>
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="tracking-wide text-5xl md:text-[6rem] font-porticoRough leading-2 md:leading-[4.5rem] text-center absolute md:top-[10rem] top-[8rem]"
          >
            CODERTINE 6.0
          </motion.h1>
        </div>
      </motion.section>

      {/* About Section with Background */}
      <section className="relative bg-transparent mt-8" id="about-us">
        <div className="absolute inset-0 bg-neutral-950 backdrop-blur-md"></div>
        <section className="relative z-10 py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-porticoRough mb-10 text-center">
              About CODERTINE 6.0
            </h2>
            <div className="flex flex-col md:flex-row md:gap-32 md:items-start">
              <p className="text-sm md:text-lg text-foreground/80 md:w-[50rem]">
                CODERTINE 6.0 is the pinnacle of inter-college competitive
                programming, born from a collaboration between RGIT Codecell and
                RGIT CESS. Our mission is to provide a premier platform for
                students to showcase their mastery of Data Structures and
                Algorithms. In this intense 2 hour online contest, participants
                will face a series of challenging problems on the globally
                recognized CodeChef platform. This is your arena to benchmark
                your abilities, prove your mettle against top talent, and
                experience the thrill of a real-time competitive environment.
              </p>
              <div className="text-sm md:text-lg text-foreground/80 md:w-2/5 mt-6 md:mt-0">
                <p>🗓️ Date: October 11th, 2025</p>
                <p>⏰ Time: 12:00 PM to 02:00 PM (IST)</p>
                <p>⏳ Duration: 2 Hours</p>
                <p>💻 Platform: CodeChef</p>
                <p>👤 Format: Solo (Individual Participation)</p>
                <p>🎯 Focus: Data Structures & Algorithms</p>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Timer Section */}
      <section className="relative z-10 px-4 md:px-10 py-6 border-t-[0.5px] border-b-[0.5px] border-slate-500 flex flex-col md:flex-row justify-between items-center bg-neutral-950/80">
        <span className="mb-4 text-2xl md:text-6xl tracking-wide font-porticoRough font-black text-center md:text-left">
          REGISTRATION ENDS IN
        </span>
        <div className="flex items-center justify-center space-x-4 md:space-x-8">
          {["days", "hours", "minutes", "seconds"].map((key) => (
            <div key={key} className="text-center">
              <h1 className="text-2xl md:text-5xl font-bold">
                {time[key as keyof typeof time]}
              </h1>
              <p className="mt-2 tracking-wide text-xs md:text-base text-foreground/70">
                {key.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Sponsers />
      <Prizes />
      <Rules />
      <Faq />

      <div id="registration-form">
        <h1 className="mt-10 text-4xl md:text-8xl tracking-wide font-porticoRough font-black text-center ">Registration ended</h1>
        {/* <RegistrationForm /> */}
      </div>
    </main>
  );
}
