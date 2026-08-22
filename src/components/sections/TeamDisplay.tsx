"use client";

import { Team } from "@/lib/teams/type";
import Image from "next/image";

export default function TeamDisplay({ team }: { team: Team }) {
    const leads = team.members.filter((member) => {
        const position = member.position.toLowerCase().trim();
        return position === "lead";
    });
    const assistantLeads = team.members.filter((member) => {
        const position = member.position.toLowerCase().trim();
        return (
            position === "asst. lead" ||
            position === "assistant lead" ||
            position === "assistant leader"
        );
    });
    const others = team.members.filter((member) => {
        const position = member.position.toLowerCase().trim();

        return (
            position !== "lead" &&
            position !== "asst. lead" &&
            position !== "assistant lead" &&
            position !== "assistant leader"
        );
    });
    return (
        <section className="px-6 md:px-20 py-16 w-full">

            {/* Title */}
            <h1 className="text-4xl font-extrabold mb-12 text-center">
                OUR TEAM ({team.year})
            </h1>
            {/* ================= LEADS ================= */}
            <div className="flex flex-wrap justify-center gap-10 mb-20">
                {leads.map((member, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center text-center max-w-6xl"
                    >
                        <div className="relative w-full min-w-[300px] h-[400px] rounded-md overflow-hidden bg-gray-200">
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover"
                                priority={idx < 2}
                            />
                        </div>
                        <p className="mt-4 text-lg font-semibold">
                            {member.name}
                        </p>

                        <p className="text-md text-gray-500">
                            {member.position}
                        </p>
                    </div>
                ))}
            </div>
            {/* ================= ASSISTANT LEADS ================= */}
            {assistantLeads.length > 0 && (
                <div className="flex flex-wrap justify-center gap-10 mb-20">
                    {assistantLeads.map((member, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center text-center max-w-6xl"
                        >
                            <div className="relative w-full min-w-[300px] h-[400px] rounded-md overflow-hidden bg-gray-200">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                    priority={idx < 2}
                                />
                            </div>

                            <p className="mt-4 text-lg font-semibold">
                                {member.name}
                            </p>

                            <p className="text-md text-gray-500">
                                {member.position}
                            </p>
                        </div>
                    ))}
                </div>
            )}
            {/* ================= OTHER MEMBERS ================= */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {others.map((member, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center text-center w-full"
                    >
                        <div className="relative w-full h-[400px] rounded-md overflow-hidden bg-gray-200">
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover object-top"
                                loading="lazy"
                            />
                        </div>
                        <p className="mt-4 text-lg font-semibold">
                            {member.name}
                        </p>
                        <p className="text-md text-gray-500">
                            {member.position}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
