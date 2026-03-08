import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function RecursionTimeline() {
    const data = [
        {
            title: "Registration & Team Formation",
            content: (
                <div>
                    <p className="text-foreground/70 text-sm md:text-base font-semibold mb-4">
                        10 Mar 25, 10:00 AM IST - 18 Mar 25, 11:59 PM IST
                    </p>
                    <p className="text-neutral-200 text-base md:text-lg font-medium mb-6">
                        <strong>📌 Registration:</strong> Sign up and secure your spot in the competition.
                    </p>
                    <p className="text-foreground/70 text-sm md:text-base font-semibold mb-4">
                        10 Mar 25, 11:00 AM IST - 18 Mar 25, 11:59 PM IST
                    </p>
                    <p className="text-neutral-200 text-base md:text-lg font-medium">
                        <strong>👥 Team Formation:</strong> Connect with participants and form your dream team.
                    </p>
                </div>
            ),
        },
        {
            title: "Announcement of Shortlisted Teams",
            content: (
                <div>
                    <p className="text-foreground/70 text-sm md:text-base font-semibold mb-4">
                        19 Mar 25, 08:00 PM IST - 19 Mar 25, 09:00 PM IST
                    </p>
                    <p className="text-neutral-200 text-base md:text-lg font-medium">
                        🎉 The shortlisted teams will be revealed! Stay tuned to see if you made it to the next round.
                    </p>
                </div>
            ),
        },
        {
            title: "RSVP Confirmation",
            content: (
                <div>
                    <p className="text-foreground/70 text-sm md:text-base font-semibold mb-4">
                        20 Mar 25, 10:00 AM IST - 20 Mar 25, 12:00 PM IST
                    </p>
                    <p className="text-neutral-200 text-base md:text-lg font-medium">
                        ✅ Confirm your participation and get ready for the competition ahead.
                    </p>
                </div>
            ),
        },
        {
            title: "Finale",
            content: (
                <div>
                    <p className="text-foreground/70 text-sm md:text-base font-semibold mb-4">
                        21 Mar 25, 08:00 AM IST - 22 Mar 25, 10:00 AM IST
                    </p>
                    <p className="text-neutral-200 text-lg md:text-xl font-bold">
                        🏆 The ultimate showdown! Compete, innovate, and showcase your skills in the grand finale.
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
