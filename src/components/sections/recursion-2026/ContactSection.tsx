"use client";

import React, { ReactNode, useEffect, useRef } from 'react'

const ContactSection = () => {


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


    const contacts = [
        { role: "Event Lead", name: "Sahil", phone: "+91 98765 43210", email: "rahul@rgitcodecell.in" },
        { role: "Tech Bridge", name: "Yashraj", phone: "+91 87654 32109", email: "priya@rgitcodecell.in" },
        { role: "Admin Desk", name: "Dhirendra", phone: "+91 76543 21098", email: "pr@rgitcodecell.in" },
    ];
    return (
        <section id="contact" className="bg-neutral-950 py-24 px-6 md:px-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <Fade className="text-center mb-16 md:mb-20">
                    <h3 className="text-[10px] tracking-[0.5em] uppercase text-purple-500 font-bold mb-4">The Bridge</h3>
                    <h2 className="text-4xl md:text-6xl font-black text-white font-porticoRough" >COMMUNICATION.</h2>
                </Fade>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {contacts.map((c) => (
                        <div key={c.role} className="glass-card p-10 border-white/5 hover:border-white/10 transition-all rounded-3xl group">
                            <p className="text-[10px] font-black tracking-[0.3em] text-white/20 uppercase mb-3">{c.role}</p>
                            <h4 className="text-xl font-black text-white mb-8 group-hover:text-purple-400 transition-colors uppercase">{c.name}</h4>
                            <div className="space-y-4">
                                <a href={`tel:${c.phone}`} className="flex items-center gap-3 text-white/40 hover:text-white transition-colors text-xs font-bold tracking-widest bg-white/5 p-4 rounded-xl border border-white/5">{c.phone}</a>
                                <a href={`mailto:${c.email}`} className="flex items-center gap-3 text-white/40 hover:text-white transition-colors text-xs font-bold tracking-widest bg-white/5 p-4 rounded-xl border border-white/5 lowercase truncate">{c.email}</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ContactSection
