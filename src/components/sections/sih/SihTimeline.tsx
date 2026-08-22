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
                        Teams participate in the Internal Hackathon, develop innovative solutions, and submit their ideas for evaluation. 💻🚀
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
                        Official SIH Problem Statements are released, giving teams an opportunity to understand the challenges and align their solutions with the selected problem statements.
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
                        The results of the Internal Hackathon are announced, and the best-performing teams are identified for the next stage of the SIH selection process. 🎉
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
                        Top teams are nominated by the institute, and their selected ideas are prepared and submitted through the official SIH portal for further evaluation. 📤🏅
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
                        Submitted ideas undergo screening and evaluation by the concerned authorities to identify innovative and promising solutions for the next stage. 🔍💡
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
                        The results of the screening process are published, revealing the teams and ideas that advance further in the SIH selection journey. 📢🏆
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
                        Selected teams receive expert mentoring and training to refine their solutions, strengthen their prototypes, and prepare for the Grand Finale. 🧑‍🏫
                    </p>
                </div>
            ),
        },
        {
            title: "📣 Announcement of shortlisted students or teams for SIH Grand Finale",
            content: (
                <div>
                    <p className="text-foreground/70 text-sm md:text-base font-semibold mb-4">
                        November 2026
                    </p>
                    <p className="text-neutral-200 text-lg md:text-xl font-bold">
                        The shortlisted students and teams for the SIH Grand Finale are officially announced. The selected teams move forward to compete at the national level. 🎉🇮🇳
                    </p>
                </div>
            ),
        },
        {
            title: "🥇🏆🥈🎖️🥉  SIH Grand Finale",
            content: (
                <div>
                    <p className="text-foreground/70 text-sm md:text-base font-semibold mb-4">
                        December 2026
                    </p>
                    <p className="text-neutral-200 text-lg md:text-xl font-bold">
                        The selected teams present their solutions at the SIH Grand Finale, competing with the best teams from across India to showcase innovation and win the competition. 🏆🚀🇮🇳
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
