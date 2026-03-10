"use client";

import React from "react";
import { UPCOMING_EVENT } from "@/data/current";
import { Button } from "../ui/button";
import Link from "next/link";

export default function UpcomingEvent() {
    return (
        <section
            className="w-full flex flex-col md:flex-row items-center justify-start min-h-screen px-4 md:px-0"
            id="upcoming-events"
        >
            {/* Mobile Image */}
            <div className="w-[270px] mb-2 md:hidden flex items-center justify-center">
                <img
                    src={UPCOMING_EVENT.url}
                    alt="Upcoming event poster"
                    className="w-full object-cover object-top rounded-lg shadow-xl"
                />
            </div>

            {/* Left Side */}
            <aside className="w-full md:w-1/2 flex flex-col items-start justify-center ml-20 py-8 md:py-0">
                <span className="text-md font-semibold text-gray-500 mb-3">
                    UPCOMING EVENT
                </span>
                <h1 className="text-3xl md:text-4xl font-bold">
                    {UPCOMING_EVENT.title}
                </h1>

                <div className="w-full md:w-[80%] space-y-4 mt-8">
                    {UPCOMING_EVENT.description.map((item, index) => (
                        <p key={index} className="text-justify text-base md:text-lg">
                            {item}
                        </p>
                    ))}
                </div>

                <span className="border-l-2 border-gray-700 pl-4 my-6 text-lg md:text-xl">
                    {UPCOMING_EVENT.date}, {UPCOMING_EVENT.time}
                </span>

                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-6 w-full md:w-auto">
                    <Link href={UPCOMING_EVENT.register || "#"}>
                        <Button size={"lg"} className="w-full md:w-auto">
                            REGISTER NOW
                        </Button>
                    </Link>
                </div>
            </aside>

            {/* Desktop Image */}
            <aside className="w-full md:w-1/2 hidden md:flex items-center justify-center py-8 md:py-0">
                <img
                    src={UPCOMING_EVENT.url}
                    alt="Upcoming event poster"
                    className="h-[50rem] w-full object-contain object-top rounded-lg shadow-xl"
                />
            </aside>
        </section>
    );
}