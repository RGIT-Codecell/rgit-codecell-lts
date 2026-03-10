import React, { ReactNode, useEffect, useRef } from 'react'

const AboutSection = () => {


    /**
     * Scroll-triggered entrance animations
     */
    function Fade({ children, className = "" }: { children: ReactNode; className?: string }) {
        const ref = useRef<HTMLDivElement>(null);
        useEffect(() => {
            const el = ref.current;
            if (!el) return;
            el.style.opacity = "0";
            el.style.transform = "translateY(20px)";
            el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
            const io = new IntersectionObserver(([e]) => {
                if (e.isIntersecting) {
                    el.style.opacity = "1";
                    el.style.transform = "translateY(0)";
                    io.unobserve(el);
                }
            }, { threshold: 0.1 });
            io.observe(el);
            return () => io.disconnect();
        }, []);
        return <div ref={ref} className={className}>{children}</div>;
    }



    return (
        <section id="about-us" className="relative py-24 px-6 md:px-12 bg-black overflow-hidden">
            <div className="dots-pattern opacity-30" />
            <div className="max-w-7xl mx-auto relative z-10">
                <Fade>
                    <div className="flex flex-col md:flex-row md:gap-12 lg:gap-20 items-stretch">
                        <div className="md:flex-[1.5]">
                            <h3 className="text-[10px] tracking-[0.5em] uppercase text-purple-400 font-bold mb-4">The Benchmark</h3>
                            <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.9] mb-8 font-porticoRough" >
                                ABOUT <br />RECURSION 7.0
                            </h2>
                            <div className="h-0.5 w-24 bg-gradient-to-r from-purple-500 to-transparent mb-8" />
                            <p className="text-sm md:text-base lg:text-lg text-white/50 leading-relaxed max-w-2xl font-medium">
                                Recursion 7.0 is a 24-hour hackathon designed for developers, designers, and tech enthusiasts who want to build innovative solutions using modern technologies. This year’s focus is on AI-powered innovation, encouraging participants to integrate Artificial Intelligence into their projects.                            </p>
                        </div>

                        <div className="md:flex-1 grid grid-cols-1 gap-4 mt-12 md:mt-0">
                            {[
                                { l: "Timeline", v: "March 23rd, 2026", i: "🗓️" },
                                { l: "Venue", v: "RGIT Campus, Mumbai", i: "📍" },
                                { l: "Format", v: "Full Day Offline", i: "⏰" },
                            ].map((item) => (
                                <div key={item.l} className="glass-card p-6 border-white/5 bg-white/[0.01] hover:border-white/20 transition-all flex items-center gap-4">
                                    <span className="text-xl md:text-2xl">{item.i}</span>
                                    <div>
                                        <p className="text-[8px] tracking-[0.3em] font-black uppercase text-white/30 mb-0.5">{item.l}</p>
                                        <p className="text-sm md:text-base font-bold text-white uppercase tracking-wider">{item.v}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    );
}

export default AboutSection
