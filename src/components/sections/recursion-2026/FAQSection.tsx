import { ChevronDown } from 'lucide-react';
import React, { ReactNode, useEffect, useRef, useState } from 'react'

const FAQSection = () => {

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

    const [openIdx, setOpenIdx] = useState(0);
    const faqs = [
        { q: "What is Recursion 7.0?", a: "Recursion 7.0 is an elite inter-college technical summit featuring hackathons and high-stakes coding challenges." },
        { q: "Who can participate?", a: "Open to all degree students from recognized colleges across India. Teams of 3-4 members are required." },
        { q: "Are code templates allowed?", a: "No. All code must be written within the official competition window. No pre-written templates." },
        { q: "Will certificates be provided?", a: "Yes, official digital certificates will be issued to all qualifying participants post-event." },
    ];

    return (
        <section id="faqs" className="bg-neutral-950 py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-20">
                <Fade>
                    <span className="text-[10px] tracking-[0.5em] uppercase text-purple-500 font-bold mb-4 block">Knowledge Base</span>
                    <h2 className="text-5xl md:text-7xl font-black text-white leading-tight font-porticoRough" >FAQS.</h2>
                    <p className="mt-6 text-white/30 text-xs md:text-sm font-medium tracking-widest uppercase">Answers for the Curious Mind.</p>
                </Fade>
                <div className="flex flex-col gap-3">
                    {faqs.map((f, i) => (
                        <div key={i} className={`glass-card p-6 border-white/5 transition-all duration-500 rounded-xl ${openIdx === i ? "bg-white/[0.03]" : ""}`}>
                            <button className="w-full flex justify-between items-center text-left gap-6 cursor-pointer" onClick={() => setOpenIdx(openIdx === i ? -1 : i)}>
                                <h3 className="text-sm md:text-lg font-bold text-white uppercase tracking-wider">{f.q}</h3>
                                <ChevronDown className={`w-5 h-5 text-white/20 transition-transform duration-500 ${openIdx === i ? "rotate-180 text-purple-500" : ""}`} />
                            </button>
                            <div className={`overflow-hidden transition-all duration-500 ${openIdx === i ? "max-h-40 mt-4" : "max-h-0"}`}>
                                <p className="text-sm md:text-base text-white/40 leading-relaxed font-medium">{f.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default FAQSection
