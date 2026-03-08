"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import RecursionAboutBento from "@/components/sections/recursion/AboutBento";
import Link from "next/link";
import { RecursionTimeline } from "@/components/sections/recursion/RecursionTimeline";
import { RecursionDomains } from "@/components/sections/recursion/RecursionDomains";

export default function RecursionSection() {
    const [time, setTime] = useState<any>({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00"
    });

    const { scrollY } = useScroll();
    const landingRef = useRef(null);
    const aboutRef = useRef(null);

    // Transform values for animations
    const landingHue = useTransform(scrollY, [0, 200], [0, 360]);

    useEffect(() => {
        const target = new Date("March 21, 2025").getTime();
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
                    seconds: "00"
                });
            }
        };

        updateTime();
        return () => clearTimeout(updateTime);
    }, []);

    return (
        <main id="recursion-page">
            {/* Landing Section */}
            <motion.section
                ref={landingRef}
                className="w-full h-screen relative overflow-hidden"
                style={{
                    filter: `hue-rotate(${landingHue}deg)`,
                }}
            >
                <div className="flex flex-col items-center justify-center pt-[2rem]">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-8xl font-porticoRough absolute left-12 bottom-12 max-w-md text-justify leading-[3.5rem]"
                    >
                        2,00,000 <br /> <small className="text-5xl text-foreground/60 tracking-wide">PRIZE POOL</small> 
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="absolute right-12 bottom-12 max-w-md"
                    >
                        <p className="text-justify">
                            Recursion 6.0 is the annual hackathon organized by RGIT CodeCell and CESS, Rajiv Gandhi Institute of Technology, Mumbai.
                            It is an in-person 24-hr event for innovatively fostering real-world problem-solving skills.
                        </p>

                        <Link href={"https://vision.hack2skill.com/event/recursion"}>
                            <Button className="mt-4" size={"lg"} variant={"outline"}>REGISTER NOW</Button>
                        </Link>
                    </motion.div>
                    
                    <motion.h1
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="tracking-wide text-[12rem] font-porticoRough"
                    >
                        RECURSION 6.0
                    </motion.h1>
                    <motion.img
                        className="absolute bottom-[-10rem]"
                        width={400}
                        src="/recursion-bot.png"
                        alt="Cartoon Girl with VR headset"
                    />
                </div>
            </motion.section>

            {/* About Section with Background */}
            <section className="relative bg-transparent">
                <div className="absolute inset-0 bg-neutral-950 backdrop-blur-md"></div>

                {/* About Content */}
                <section
                    ref={aboutRef}
                    className="relative z-10 h-min-screen py-12"
                >
                    <RecursionAboutBento />
                </section>

                {/* Timer Section */}
                <div className="relative z-10 px-2 py-6 border-t-[1px] border-b-[1px] border-slate-500 flex flex-col md:flex-row justify-around items-center">
                    <span className="mb-4 md:mb-0 text-6xl tracking-wide font-porticoRough font-black">RECURSION 6.0 IN</span>
                    <div className="flex items-center justify-center space-x-12">
                        {["days", "hours", "minutes", "seconds"].map((key, index) => (
                            <div key={index} className="text-center">
                                <h1 className="text-3xl md:text-5xl font-bold">{time[key]}</h1>
                                <p className="mt-3 tracking-wide text-foreground/70">{key.toUpperCase()}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <RecursionTimeline />

            <RecursionDomains />

            {/* Rules Section */}
            <section className="flex flex-col md:flex-row min-h-screen bg-neutral-950/50 backdrop-blur-sm p-12">
                {/* Left Image Section */}
                <div className="w-full md:w-1/2 relative">
                    <img 
                        src="/recursion-brochure.jpg" 
                        alt="Recursion Rules" 
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Right Rules Section */}
                <div className="w-full md:w-1/2 p-8 md:p-12">
                    <h2 className="text-4xl md:text-5xl font-porticoRough mb-8">RULES & GUIDELINES</h2>
                    
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">📝 During Registration</h3>
                            <ul className="space-y-2 text-foreground/70">
                                <li>⚠️ Registrations beyond the registration date will not be entertained.</li>
                                <li>ℹ️ Participants are encouraged to give valid information about themselves.</li>
                                <li>🔄 Changes to the team after registration won't be entertained, but some exceptions may be made (Contact the organizers)</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-4">✅ After Selection</h3>
                            <ul className="space-y-2 text-foreground/70">
                                <li>📢 Selected teams need to confirm participation. Not doing so may lead to their spot being given to another team.</li>
                                <li>⛔ Any sort of bribery to the staff will not be entertained and can also lead to disqualification.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-4">🎯 During the Event</h3>
                            <ul className="space-y-2 text-foreground/70">
                                <li>🔒 Requests to change the domain will not be entertained.</li>
                                <li>🚫 Usage of expressions that are vulgar, obscene or derogatory in any manner is highly discouraged.</li>
                                <li>💡 Try to develop applications that do not deviate too much from the actual topic.</li>
                                <li>©️ Violation of copyrights, trademarks, or other such rights can lead to disqualification.</li>
                                <li>🤝 Receiving assistance from an external party (those who aren't part of the event) is prohibited.</li>
                                <li>⏰ Teams are expected to stop coding when the allotted time is over.</li>
                                <li>📦 Every team should upload and host their project as a public git repository.</li>
                                <li>💻 The project should also be submitted on Devfolio before the deadline.</li>
                                <li>⚠️ Anyone involved in malpractice will be disqualified.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-4">🏆 After the Results</h3>
                            <ul className="space-y-2 text-foreground/70">
                                <li>⚖️ The decision made by the judges is considered final, no arguments will be entertained.</li>
                                <li>🤝 In case of a tie, decisions will be made accordingly.</li>
                                <li>📋 Prizes are subject to change in extreme situations. Members of CESS and CodeCell and the college staff cannot be held responsible.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}