import { Zap } from 'lucide-react';
import React, { FormEvent, ReactNode, useEffect, type MouseEvent as RMouseEvent, useRef, useState } from 'react'

const RegistrationSection = () => {


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


    /**
     * Magnetic element interaction wrapper
     */
    function Magnetic({ children }: { children: ReactNode }) {
        const ref = useRef<HTMLDivElement>(null);
        const [position, setPosition] = useState({ x: 0, y: 0 });



        const handleMouse = (e: RMouseEvent) => {
            const el = ref.current;
            if (!el) return;
            const { clientX, clientY } = e;
            const { height, width, left, top } = el.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            setPosition({ x: x * 0.25, y: y * 0.25 });
        };

        const reset = () => setPosition({ x: 0, y: 0 });

        return (
            <div
                ref={ref}
                onMouseMove={handleMouse}
                onMouseLeave={reset}
                style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
                className="magnetic-wrap"
            >
                {children}
            </div>
        );
    }


    const [done, setDone] = useState(false);
    const submit = (e: FormEvent) => { e.preventDefault(); setDone(true); };

    return (
        <div>
            <section id="register" className="py-24 px-6 md:px-12 bg-black relative">
                <Fade className="text-center mb-16 md:mb-20">
                    <h2 className="text-5xl md:text-8xl font-black text-white uppercase font-porticoRough">
                        {done ? "COMPLETE" : "JOIN US"}
                    </h2>
                    <p className="mt-4 text-[9px] tracking-[0.4em] font-black text-white/20 uppercase">Registration Terminal</p>
                </Fade>

                <div className="max-w-2xl mx-auto">
                    {done ? (
                        <Fade className="text-center p-12 glass-card rounded-3xl border-white/5">
                            <Zap className="w-12 h-12 mx-auto mb-8 text-emerald-500" />
                            <h3 className="text-2xl font-black mb-4 uppercase tracking-[0.2em] text-white">Application Received</h3>
                            <p className="text-white/40 mb-8 font-medium">Credential validation in progress. Watch your mailbox.</p>
                            <button className="px-8 py-3 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full" onClick={() => setDone(false)}>Register Another</button>
                        </Fade>
                    ) : (
                        <Fade>
                            <div className="glass-card p-8 md:p-12 border-white/5 rounded-3xl">
                                <form onSubmit={submit} className="space-y-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ring-0">
                                        {[
                                            { label: "Lead Catalyst", placeholder: "Full Legal Name", type: "text" },
                                            { label: "Email Address", placeholder: "your@edu.com", type: "email" },
                                            { label: "Institution", placeholder: "Official Campus", type: "text" },
                                            { label: "Battalion", placeholder: "Team Designation", type: "text" },
                                        ].map((f) => (
                                            <div key={f.label}>
                                                <label className="block text-[9px] font-black text-white/20 mb-2.5 uppercase tracking-[0.3em]">{f.label}</label>
                                                <input required type={f.type} placeholder={f.placeholder} className="w-full bg-transparent border-b border-white/5 py-2.5 text-sm text-white placeholder:text-white/10 focus:outline-none focus:border-purple-600 transition-all font-bold tracking-wider" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="pt-4">
                                        <Magnetic>
                                            <button type="submit" className="btn-register w-full h-12 text-[11px] font-black uppercase tracking-[0.3em] rounded-full">INITIALIZE PARTICIPATION</button>
                                        </Magnetic>
                                    </div>
                                </form>
                            </div>
                        </Fade>
                    )}
                </div>
            </section>

        </div>
    )
}

export default RegistrationSection
