"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { eventsData } from "@/lib/events";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Event {
  id: number;
  title: string;
  year: number;
  paragraph: string;
  img: string;
  report?: string | null;
}

export default function EventsPage() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 400], ["80%", "10%"]);

  const eventsByYear = eventsData.reduce((acc, event) => {
    acc[event.year] = acc[event.year] || [];
    acc[event.year].push(event);
    return acc;
  }, {} as Record<number, Event[]>);

  const sortedYears = Object.keys(eventsByYear).sort((a, b) => +b - +a);

  return (
    <div className="relative overflow-x-hidden">
      {/* Scroll-Linked Background Title */}
      <motion.h1
        style={{ opacity: backgroundY }}
        className="fixed text-[18vw] font-extrabold text-white/80 top-16 md:top-0 left-0 w-full z-0 text-center pointer-events-none select-none"
      >
        EVENTS
      </motion.h1>

      <div className="relative z-10 px-4 md:px-12 pt-[22vh] md:pt-[14vw] pb-16">
        {sortedYears.map((year) => (
          <section key={year} className="mb-24">
            <h2 className="text-4xl font-bold mb-8 text-white/80">{year}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {eventsByYear[+year].map((event) => (
                <div
                  key={event.id}
                  className="overflow-hidden shadow-xl transition transform hover:scale-[1.02]"
                >
                  <img
                    src={event.img}
                    alt={event.title}
                    className="w-full h-52 object-cover object-top"
                  />
                  <div className="text-left p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-white/70 text-sm text-justify">
                      {event.paragraph}
                    </p>
                    {event.report && (
                      <a
                        href={event.report}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4"
                      >
                        <Button size="lg">
                          View Report
                          <ArrowRight className="-rotate-[35deg]" />
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
