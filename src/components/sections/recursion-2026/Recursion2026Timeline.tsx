import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Recursion2026Timeline() {
    const data = [
        {
            title: "Round 1: Online Submission",
            content: (
                <div>
                    <p className="text-foreground/70 text-sm md:text-base font-semibold mb-4">
                        09 Mar 26 - 18 Mar 26
                    </p>
                    <p className="text-neutral-200 text-base md:text-lg font-medium mb-4">
                        <strong>💻 PPT Solution Phase:</strong> Teams work on and provide solutions for the given problem statements.
                    </p>
                    <p className="text-foreground/70 text-sm md:text-base font-semibold mb-2">
                        19 Mar 26
                    </p>
                    <p className="text-neutral-200 text-base md:text-lg font-medium">
                        <strong>📩 Final Deadline:</strong> All solutions must be submitted by the end of the day.
                    </p>
                </div>
            ),
        },
        {
            title: "Shortlist Announcement",
            content: (
                <div>
                    <p className="text-foreground/70 text-sm md:text-base font-semibold mb-4">
                        21 Mar 26
                    </p>
                    <p className="text-neutral-200 text-base md:text-lg font-medium">
                        📢 <strong>Results:</strong> Shortlisted teams will be officially displayed on the hackathon website. Check your dashboard to see if you qualified for the offline round!
                    </p>
                </div>
            ),
        },
        {
            title: "Day 1: Offline Hackathon",
            content: (
                <div className="space-y-6">
                    <p className="text-foreground/70 text-sm md:text-base font-semibold">
                        23 March 2026 | RGIT Campus
                    </p>
                    <ul className="space-y-4 text-neutral-200 text-base md:text-lg">
                        <li><strong>09:00 AM:</strong> 🚀 Event Start & Registration</li>
                        <li><strong>11:00 AM:</strong> ⌨️ Coding Round Begins</li>
                        <li><strong>02:00 PM:</strong> 🍱 Lunch Break</li>
                        <li><strong>05:00 PM:</strong> ☕ Evening Snacks</li>
                        <li><strong>08:00 PM:</strong> 🍽️ Dinner</li>
                        <li><strong>10:00 PM:</strong> ⚖️ 1st Judging Round</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "Day 2: The Finale",
            content: (
                <div className="space-y-6">
                    <p className="text-foreground/70 text-sm md:text-base font-semibold">
                        24 March 2026 | RGIT Campus
                    </p>
                    <ul className="space-y-4 text-neutral-200 text-base md:text-lg">
                        <li><strong>07:00 AM:</strong> 🍳 Breakfast</li>
                        <li><strong>10:00 AM:</strong> 🏆 Final Judging Round</li>
                        <li><strong>12:00 PM - 01:00 PM:</strong> 🏁 Closing Ceremony & Wrap-up</li>
                    </ul>
                </div>
            ),
        },
    ];

    return (
        <div className="w-full bg-neutral-950 font-sans pt-10">
            <h1 className="text-5xl font-bold text-center font-porticoRough">Recursion 2026 Timeline</h1>
            <Timeline data={data} />
        </div>
    );
}