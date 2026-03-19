"use client";

import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { shortlistedTeams } from "@/lib/shortlisted";

export default function ShortlistedTeams() {
    const [selectedDomain, setSelectedDomain] = useState<string>("all");

    return (
        <main>
            <div className="min-h-screen">
                <section className="h-screen flex flex-col items-center justify-center w-full px-4">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-porticoRough text-center">
                        SHORTLISTED TEAMS FOR RECURSION 6.0
                    </h1>
                </section>

                {["3", "2", "1"].map((num) => (
                    <section
                        key={num}
                        className="h-screen flex flex-col items-center justify-center w-full px-4"
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-porticoRough">
                            {num}...
                        </h1>
                    </section>
                ))}
            </div>

            <section className="h-screen flex flex-col items-center justify-center w-full px-4">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-porticoRough text-center">
                    WE WILL BE ANNOUNCING THE RESULTS TOMORROW 🗿
                </h1>
            </section>

            <section className="h-screen flex flex-col items-center justify-center w-full px-4">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-porticoRough text-center">
                    JUST KIDDING ... 😂
                </h1>
            </section>

            <section className="h-screen flex flex-col items-center justify-center w-full px-4">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-porticoRough text-center">
                    BAS THODA AUR NICHE 😁
                </h1>
            </section>

            <section className="min-h-screen flex flex-col items-center pt-12 md:pt-24 px-4 bg-background">
                <h1 className="text-3xl md:text-4xl font-porticoRough mb-8 md:mb-12 text-center">
                    SHORTLISTED TEAMS
                </h1>

                <Select onValueChange={setSelectedDomain} defaultValue="all">
                    <SelectTrigger className="w-[280px] md:w-[320px] mb-6 md:mb-8">
                        <SelectValue placeholder="Select Domain" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Domains</SelectItem>
                        <SelectItem value="web">Web / App Development</SelectItem>
                        <SelectItem value="ai">AI / ML</SelectItem>
                    </SelectContent>
                </Select>

                <div className="w-full max-w-sm md:max-w-2xl space-y-3 md:space-y-4 px-4 md:px-0">
                    {shortlistedTeams[selectedDomain as keyof typeof shortlistedTeams]?.map((team, index) => (
                        <div
                            key={index}
                            className="p-3 md:p-4 border border-foreground/20 rounded-lg hover:bg-foreground/5 transition-colors text-sm md:text-base"
                        >
                            {team}
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}