import { Zap, ExternalLink, Users, Mail, School, Shield } from 'lucide-react';
import React, { FormEvent, ReactNode, useEffect, type MouseEvent as RMouseEvent, useRef, useState } from 'react';

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
                style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)`, transition: 'transform 0.1s ease-out' }}
                className="magnetic-wrap"
            >
                {children}
            </div>
        );
    }

    const [done, setDone] = useState(false);
    const submit = (e: FormEvent) => { 
        e.preventDefault(); 
        setDone(true); 
    };

    return (
        <section id="register" className="py-24 px-6 md:px-12 bg-black relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

            <Fade className="text-center mb-16 md:mb-20">
                <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter">
                    {done ? "ENLISTED" : "RECURSION 2026"}
                </h2>
                <p className="mt-4 text-[10px] tracking-[0.5em] font-black text-purple-500 uppercase">Secure Your Spot in the Grid</p>
            </Fade>

            <div className="max-w-4xl mx-auto flex justify-center align-middle items-start">
                
                {/* Left Side: Unstop Direct Action */}
                <Fade className="space-y-8 order-2 lg:order-1">
                    <div className="p-8 bg-neutral-900/50 border border-white/5 rounded-3xl backdrop-blur-xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center border border-blue-500/30">
                                <ExternalLink className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold uppercase tracking-widest text-sm">Official Registration</h4>
                                <p className="text-white/40 text-[10px] uppercase font-bold tracking-tighter">Powered by Unstop</p>
                            </div>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed mb-8 font-medium">
                            For a faster experience and to access the official problem statements directly, register via the Unstop platform.
                        </p>
                        <Magnetic>
                            <a 
                                href="https://unstop.com/hackathons/recursion-70-rajiv-gandhi-institute-of-technology-mumbai-1656541" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 w-full h-14 bg-white text-black text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-blue-50 transition-colors p-2"
                            >
                                Register on Unstop <ExternalLink className="w-4 h-4" />
                            </a>
                        </Magnetic>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                            <p className="text-white font-bold text-2xl mb-1">10 Mar</p>
                            <p className="text-white/30 text-[9px] uppercase font-black tracking-widest">Starts </p>
                        </div>
                        <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                            <p className="text-white font-bold text-2xl mb-1">RGIT</p>
                            <p className="text-white/30 text-[9px] uppercase font-black tracking-widest">Venue Location</p>
                        </div>
                    </div>
                </Fade>

                {/* Right Side: Internal Inquiry Form */}
              
            </div>
        </section>
    );
};

export default RegistrationSection;