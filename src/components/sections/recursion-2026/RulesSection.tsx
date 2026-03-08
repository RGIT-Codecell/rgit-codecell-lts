import { Zap } from 'lucide-react';
import React, { ReactNode, useEffect, useRef } from 'react'

const RulesSection = () => {

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

    
    const groups = [
        { title: "Registration", rules: ["Valid College Credentials required.", "Strict registration deadlines.", "One identity per participant."] },
        { title: "Fair Play", rules: ["Zero tolerance for plagiarism.", "Bring personal hardware (Laptops).", "Professional ethics expected."] },
        { title: "Judicial", rules: ["Jury decisions are final.", "Submission latency is the tie-breaker.", "Presence required at ceremony."] },
    ];

    return (
        <div>

            <section id="rules" className="py-24 px-6 md:px-12 bg-black border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <Fade className="text-center mb-16 lg:mb-20">
                        <h3 className="text-[10px] tracking-[0.5em] uppercase text-white/30 font-black mb-4">The Framework</h3>
                        <h2 className="text-3xl md:text-5xl font-black text-white  font-porticoRough" >EVENT RULES</h2>
                    </Fade>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                        {groups.map((g) => (
                            <div key={g.title} className="glass-card p-10 border-white/5 hover:bg-white/[0.02] transition-colors rounded-2xl group">
                                <h4 className="text-lg font-black text-white mb-6 uppercase tracking-[0.2em]">{g.title}</h4>
                                <ul className="space-y-4">
                                    {g.rules.map((r, i) => (
                                        <li key={i} className="flex items-start text-sm text-white/40 leading-relaxed font-medium">
                                            <Zap className="w-3.5 h-3.5 mr-3 mt-1 text-purple-600/70" />
                                            <span>{r}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default RulesSection
