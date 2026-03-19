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

    const cinzelText = "font-[family-name:var(--font-cinzel-decorative)] font-black tracking-wider uppercase";

    return (
        <main className="min-h-screen bg-[#050505] overflow-x-hidden selection:bg-[#8B0000] selection:text-white">
            <div className="relative">
                {/* Background glowing effects */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[80vh] bg-[#8B0000]/10 blur-[120px] rounded-full pointer-events-none" />

                <section className="h-screen flex flex-col items-center justify-center w-full px-4 relative z-10">
                    <div className="relative p-8 md:p-16 flex flex-col items-center justify-center border border-[#D4AF37]/10 bg-[#0a0a0a]/60 backdrop-blur-sm shadow-[0_0_30px_rgba(212,175,55,0.05)]">
                        {/* Corner Accents */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60" />
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60" />

                        <h1 className={`${cinzelText} text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-widest text-center leading-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FFF8DC] via-[#D4AF37] to-[#8B6508] drop-shadow-[0_0_25px_rgba(212,175,55,0.4)]`}>
                            SHORTLISTED TEAMS <br className="hidden md:block" /> FOR <span className="text-[#8B0000] drop-shadow-[0_0_15px_rgba(139,0,0,0.8)]">RECURSION 7.0</span>
                        </h1>
                    </div>
                </section>

                {["3", "2", "1"].map((num) => (
                    <section
                        key={num}
                        className="h-screen flex flex-col items-center justify-center w-full px-4 relative z-10"
                    >
                        <p className="font-[family-name:var(--font-cinzel)] text-transparent bg-clip-text bg-gradient-to-b from-[#ff3333] via-[#8B0000] to-[#3a0000] text-8xl sm:text-9xl md:text-[15rem] tracking-widest uppercase font-black drop-shadow-[0_0_40px_rgba(139,0,0,0.8)] hover:scale-110 transition-transform duration-500">
                            {num}
                        </p>
                    </section>
                ))}

                <section className="min-h-screen flex flex-col items-center justify-center w-full px-4 relative z-10">
                    <div className="relative p-8 md:p-14 w-full max-w-5xl flex flex-col items-center justify-center border border-[#8B0000]/30 bg-[#0a0a0a]/80 backdrop-blur-md shadow-[0_0_40px_rgba(139,0,0,0.2)] group hover:border-[#D4AF37]/40 transition-all duration-700">
                        {/* Corner Accents */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#8B0000]/60 group-hover:border-[#D4AF37]/80 transition-colors duration-500" />
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#8B0000]/60 group-hover:border-[#D4AF37]/80 transition-colors duration-500" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#8B0000]/60 group-hover:border-[#D4AF37]/80 transition-colors duration-500" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#8B0000]/60 group-hover:border-[#D4AF37]/80 transition-colors duration-500" />

                        <p className="font-[family-name:var(--font-cinzel)] text-[#FFF8DC] text-lg sm:text-2xl md:text-3xl tracking-widest uppercase font-bold mb-8 text-center opacity-90">
                            Due to <span className="text-[#D4AF37] text-2xl sm:text-4xl md:text-5xl font-black drop-shadow-[0_0_15px_rgba(212,175,55,0.6)] px-2">2000+</span> Registrations
                        </p>

                        <h2 className={`${cinzelText} text-[#8B0000] text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-widest text-center leading-snug drop-shadow-[0_0_20px_rgba(139,0,0,1)]`}>
                            WE WILL BE ANNOUNCING <br className="hidden md:block" /> THE RESULTS <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] block mt-4 text-4xl sm:text-6xl md:text-8xl">TOMORROW 🗿</span>
                        </h2>
                    </div>
                </section>

                <section className="h-screen flex flex-col items-center justify-center w-full px-4 relative z-10">
                    <h1 className={`${cinzelText} text-4xl md:text-5xl lg:text-7xl text-center text-[#D4AF37] drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]`}>
                        JUST KIDDING ... 😂
                    </h1>
                </section>

                {/* <section className="h-screen flex flex-col items-center justify-center w-full px-4 relative z-10">
                    <h1 className={`${cinzelText} text-4xl md:text-5xl lg:text-7xl text-center text-[#8B0000] drop-shadow-[0_0_15px_rgba(139,0,0,0.8)]`}>
                        BAS THODA AUR NICHE 😁
                    </h1>
                </section> */}
            </div>

            <section className="min-h-screen flex flex-col items-center pt-12 md:pt-24 px-4 pb-24 relative z-10 w-full">
                <h1 className={`${cinzelText} text-3xl md:text-5xl lg:text-6xl mb-8 md:mb-16 text-center text-transparent bg-clip-text bg-gradient-to-b from-[#FFF8DC] via-[#D4AF37] to-[#8B6508] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]`}>
                    SHORTLISTED TEAMS
                </h1>

                <Select onValueChange={setSelectedDomain} defaultValue="all">
                    <SelectTrigger className="w-[280px] md:w-[350px] mb-12 md:mb-16 bg-[#0a0a0a]/80 border border-[#D4AF37]/40 text-[#FFF8DC] font-[family-name:var(--font-cinzel)] font-bold tracking-widest uppercase hover:border-[#D4AF37] hover:bg-[#1a1a1a] transition-all focus:ring-1 focus:ring-[#8B0000] rounded-none py-6">
                        <SelectValue placeholder="Select Domain" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0a0a0a] border border-[#D4AF37]/30 text-[#FFF8DC] font-[family-name:var(--font-cinzel)] rounded-none">
                        <SelectItem value="all" className="focus:bg-[#8B0000]/60 focus:text-[#FFF8DC] cursor-pointer tracking-wider py-3 font-bold">ALL</SelectItem>
                        {/* <SelectItem value="all" className="focus:bg-[#8B0000]/60 focus:text-[#FFF8DC] cursor-pointer tracking-wider py-3 font-bold">AI / ML</SelectItem> */}
                        {/* <SelectItem value="all" className="focus:bg-[#8B0000]/60 focus:text-[#FFF8DC] cursor-pointer tracking-wider py-3 font-bold disabled:opacity-50">BLOCKCHAIN</SelectItem> */}
                    </SelectContent>
                </Select>

                <div className="w-full max-w-sm md:max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-6">
                    {shortlistedTeams[selectedDomain as keyof typeof shortlistedTeams]?.map((team, index) => (
                        <div
                            key={index}
                            className="group relative flex items-center justify-center p-5 md:p-6 bg-[#0a0a0a]/40 border border-[#D4AF37]/20 hover:border-[#8B0000] hover:bg-[#8B0000]/10 transition-all duration-300 backdrop-blur-sm"
                        >
                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#D4AF37]/50 group-hover:border-[#8B0000] transition-colors" />
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#D4AF37]/50 group-hover:border-[#8B0000] transition-colors" />
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#D4AF37]/50 group-hover:border-[#8B0000] transition-colors" />
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#D4AF37]/50 group-hover:border-[#8B0000] transition-colors" />

                            <span className="font-[family-name:var(--font-cinzel)] font-bold tracking-widest text-base md:text-lg text-[#FFF8DC] group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all uppercase text-center line-clamp-2">
                                {team}
                            </span>
                        </div>
                    ))}
                    {(!shortlistedTeams[selectedDomain as keyof typeof shortlistedTeams] || shortlistedTeams[selectedDomain as keyof typeof shortlistedTeams].length === 0) && (
                        <div className="col-span-full py-12 text-center text-[#D4AF37]/60 font-[family-name:var(--font-cinzel)] tracking-widest uppercase">
                            No teams listed yet for this domain.
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}