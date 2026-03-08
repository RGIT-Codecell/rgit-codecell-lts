"use client";

import { useState } from "react";
import TeamDisplay from "@/components/sections/TeamDisplay";
import { Team20_21 } from "@/lib/teams/20_21";
import { Team21_22 } from "@/lib/teams/21_22";
import { Team22_23 } from "@/lib/teams/22_23";
import { Team23_24 } from "@/lib/teams/23_24";
import { Team24_25 } from "@/lib/teams/24_25";

import { FACULTY } from "@/lib/teams/type";
import Image from "next/image";

const TEAMS = [
    Team20_21,
    Team21_22,
    Team22_23,
    Team23_24,
    Team24_25,
];

export default function OurTeam() {
    const [selectedYear, setSelectedYear] = useState(TEAMS.length - 1); // latest by default
    const selectedTeam = TEAMS[selectedYear];

    return (
        <section className="px-4 sm:px-8 md:px-20 py-12 sm:py-16 mt-10 w-full">
            {/* Faculty Title */}
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-12 text-center">
                OUR FACULTY
            </h1>

            {/* Faculty Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex justify-center items-start gap-10 mb-12">
                {FACULTY.map((faculty, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center w-full sm:w-[240px]">
                        <div className="relative w-full h-[300px] sm:h-[320px] rounded-md overflow-hidden bg-gray-200 shadow-md">
                            <Image
                                src={faculty.image}
                                alt={faculty.name}
                                fill
                                className="object-cover"
                                loading="lazy"
                            />
                        </div>
                        <p className="mt-4 text-base sm:text-lg font-semibold">{faculty.name}</p>
                        <p className="text-sm sm:text-md text-gray-500">{faculty.position}</p>
                    </div>
                ))}
            </div>

            {/* Year Pills */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
                {TEAMS.map((team, index) => (
                    <button
                        key={team.year}
                        onClick={() => setSelectedYear(index)}
                        className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium border transition-all ${selectedYear === index
                                ? "bg-black text-white"
                                : "bg-white text-black border-gray-300 hover:bg-gray-100"
                            }`}
                    >
                        {team.year}
                    </button>
                ))}
            </div>

            {/* Team Section */}
            <TeamDisplay team={selectedTeam} />
        </section>
    );
}
