import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function SihTimeline() {
    const data = [
        {
            title: "👩‍💻 Internal Hackathon & Idea Submission",
            content: (
                <div>
                    <p className="text-foreground/70 text-sm md:text-base font-semibold mb-4">
                        20-21st August 2026
                    </p>
                    <p className="text-neutral-200 text-base md:text-lg font-medium">
                        Time to code! Teams dive into the internal hackathon, crafting brilliant solutions and submitting their best ideas on the portal. 💻✨
                    </p>
                </div>
            ),
        },
        {
            title: "🔍 SIH Problem Statement Launch",
            content: (
                <div>
                    <p className="text-foreground/70 text-sm md:text-base font-semibold mb-4">
                        21st August 2026
                    </p>
                    <p className="text-neutral-200 text-base md:text-lg font-medium">
                        Ideas get a closer look! Our experts screen submissions, and teams compile and upload their detailed reports. 📊
                    </p>
                </div>
            ),
        },
        {
            title: "📝 Internal Hackthon Result",
            content: (
                <div>
                    <p className="text-foreground/70 text-sm md:text-base font-semibold mb-4">
                        August 2026
                    </p>
                    <p className="text-neutral-200 text-base md:text-lg font-medium">
                        Learn from the best! Shortlisted teams receive invaluable mentoring and training. Keep an eye out—finalist teams are announced! 🎉
                    </p>
                </div>
            ),
        },
        {
            title: "👥 Nominations of top teams and submission of ideas. ",
            content: (
                <div>
                    <p className="text-foreground/70 text-sm md:text-base font-semibold mb-4">
                        September 2026
                    </p>
                    <p className="text-neutral-200 text-base md:text-lg font-medium">
                        The suspense is over! The official list of students making it to the SIH Grand Finale is revealed. Did you make the cut? 👀
                    </p>
                </div>
            ),
        },
        {
            title: "🎬 Screening of ideas.",
            content: (
                <div>
                    <p className="text-foreground/70 text-sm md:text-base font-semibold mb-4">
                        September 2026
                    </p>
                    <p className="text-neutral-200 text-lg md:text-xl font-bold">
                        The ultimate showdown! Compete, innovate, and showcase your groundbreaking solutions at the SIH Grand Finale. Winners will be crowned! 🏅🥳
                    </p>
                </div>
            ),
        },
        {
            title: "🎯 Result publication.",
            content: (
                <div>
                    <p className="text-foreground/70 text-sm md:text-base font-semibold mb-4">
                       September 2026
                    </p>
                    <p className="text-neutral-200 text-lg md:text-xl font-bold">
                        The ultimate showdown! Compete, innovate, and showcase your groundbreaking solutions at the SIH Grand Finale. Winners will be crowned! 🏅🥳
                    </p>
                </div>
            ),
        },
        {
            title: "👨🏻‍🏫 Mentoring and training session ",
            content: (
                <div>
                    <p className="text-foreground/70 text-sm md:text-base font-semibold mb-4">
                        November 2026
                    </p>
                    <p className="text-neutral-200 text-lg md:text-xl font-bold">
                        The ultimate showdown! Compete, innovate, and showcase your groundbreaking solutions at the SIH Grand Finale. Winners will be crowned! 🏅🥳
                    </p>
                </div>
            ),
        },
        {
            title: "📣Announcement of shortlisted students or teams for SIH Grand Finale",
            content: (
                <div>
                    <p className="text-foreground/70 text-sm md:text-base font-semibold mb-4">
                        November 2026
                    </p>
                    <p className="text-neutral-200 text-lg md:text-xl font-bold">
                        The ultimate showdown! Compete, innovate, and showcase your groundbreaking solutions at the SIH Grand Finale. Winners will be crowned! 🏅🥳
                    </p>
                </div>
            ),
        },
        {
            title: "🥇🏆🥈🎖️🥉 SIH Grand Finale",
            content: (
                <div>
                    <p className="text-foreground/70 text-sm md:text-base font-semibold mb-4">
                        December 2026
                    </p>
                    <p className="text-neutral-200 text-lg md:text-xl font-bold">
                        The ultimate showdown! Compete, innovate, and showcase your groundbreaking solutions at the SIH Grand Finale. Winners will be crowned! 🏅🥳
                    </p>
                </div>
            ),
        },
    ];

    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}
