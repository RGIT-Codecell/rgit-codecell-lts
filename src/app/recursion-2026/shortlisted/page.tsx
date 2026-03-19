"use client";


import { shortlistedTeams } from "@/lib/shortlisted";

export default function ShortlistedTeams() {


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

                <div className="w-full max-w-sm md:max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-6">
                    {shortlistedTeams["all"]?.map((team, index) => (
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
                    {(!shortlistedTeams["all"] || shortlistedTeams["all"].length === 0) && (
                        <div className="col-span-full py-12 text-center text-[#D4AF37]/60 font-[family-name:var(--font-cinzel)] tracking-widest uppercase">
                            No teams listed yet for this domain.
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}