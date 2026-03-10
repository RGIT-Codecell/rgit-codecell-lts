import { Sparkles, ArrowRight } from 'lucide-react';
import React, { useEffect, useRef, type MouseEvent as RMouseEvent, useState, ReactNode } from 'react'
import Image from 'next/image';

const HeroSection = () => {
    const [loaded, setLoaded] = useState(false);
    const posterRef = useRef<HTMLDivElement>(null);


    /**
     * Background particles component
     */
    function FloatingParticles({ count = 20 }: { count?: number }) {
        const [isClient, setIsClient] = useState(false);
        useEffect(() => setIsClient(true), []);
        if (!isClient) return <div className="particles-container" />;

        return (
            <div className="particles-container">
                {Array.from({ length: count }).map((_, i) => (
                    <div
                        key={i}
                        className="particle"
                        style={{
                            left: `${(i * 137) % 100}%`,
                            width: `${(i % 3) + 1}px`,
                            height: `${(i % 3) + 1}px`,
                            animationDuration: `${10 + (i % 10)}s`,
                            animationDelay: `${i % 5}s`,
                            opacity: 0.1 + (i % 5) * 0.05,
                        }}
                    />
                ))}
            </div>
        );
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


    useEffect(() => {
        const t = setTimeout(() => setLoaded(true), 100);
        return () => clearTimeout(t);
    }, []);

    const handleParallax = (e: RMouseEvent) => {
        const el = posterRef.current;
        if (!el) return;
        const { clientX, clientY } = e;
        const { width, height, left, top } = el.getBoundingClientRect();
        const x = (clientX - (left + width / 2)) / 40;
        const y = (clientY - (top + height / 2)) / 40;
        el.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
    };

    const resetParallax = () => {
        if (posterRef.current) posterRef.current.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)";
    };

    return (
        <section className="relative min-h-screen py-24 flex flex-col items-center justify-center px-6 md:px-12 overflow-hidden bg-black">
            <div className="hero-gradient-mesh opacity-40" />
            <div className="grid-bg opacity-30" />
            <FloatingParticles count={15} />

            <div className="hero-orb hero-orb-1 !bg-purple-600/10" />
            <div className="hero-orb hero-orb-2 !bg-blue-600/10" />

            <div className={`relative z-10 mb-8 transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-xl text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/40 font-bold">
                    <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                    RGIT Codecell & CESS Present
                </span>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
                {/* <h1 className="hero-title-shimmer text-center tracking-tight text-5xl sm:text-7xl md:text-[6.5rem] lg:text-[8rem] font-black leading-none" style={{ fontFamily: "var(--font-cinzel)" }}>
                 */}
                <h1 className="hero-title-shimmer text-center tracking-tight text-9xl sm:text-7xl md:text-[6.5rem] lg:text-[8rem] font-black leading-none font-porticoRough" >

                    RECURSION 7.0
                </h1>

                <p className="text-[10px] md:text-xs text-white/20 tracking-[0.5em] uppercase font-bold mt-4 text-center" style={{ fontFamily: "var(--font-cinzel)" }}>
                    Mumbai&apos;s Elite Technical Summit
                </p>

                <div className="mt-12 md:mt-20 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 w-full">
                    <div className="hidden lg:block lg:w-[260px] text-left">
                        <h2 className="text-7xl font-porticoRough leading-none text-white/70" >
                            CREATE. <br />
                            CODE. <br />
                            CONQUER.
                        </h2>
                        <div className="w-10 h-1 bg-purple-600/60 mt-4 rounded-full" />
                        <p className="mt-6 text-[10px] text-white/20 uppercase tracking-[0.3em] font-black">Step into the Core</p>
                    </div>

                    <div
                        ref={posterRef}
                        onMouseMove={handleParallax}
                        onMouseLeave={resetParallax}
                        className="relative flex-shrink-0 transition-transform duration-500 ease-out will-change-transform"
                    >
                        <div className="absolute -inset-10 bg-gradient-to-b from-purple-600/10 via-blue-600/5 to-transparent rounded-[50%] blur-3xl pointer-events-none" />
                        <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
                            <Image
                                src="/recursion/recursion-poster.PNG"
                                alt="Recursion 7.0"
                                width={500}
                                height={700}
                                className="w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] h-auto object-contain"
                                priority
                            />
                        </div>
                    </div>

                    <div className="lg:w-[260px] flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="glass-card p-6 md:p-8 border-white/5 bg-white/[0.01] ring-1 ring-white/5">
                            <p className="text-[13px] md:text-sm text-white/40 leading-relaxed font-medium">
                                Benchmark your abilities in one day of high-stakes technical evolution.
                                Massive <span className="text-white font-bold block mt-1 glow-text-purple">₹5,00,000</span> prize pool awaits.
                            </p>
                            <div className="mt-6 flex flex-col gap-3">
                                <Magnetic>
                                    <a href="#register" className="w-full">
                                        <button className="btn-register w-full h-10 text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg flex items-center justify-center gap-2">
                                            Join Arena
                                            <ArrowRight className="w-3.5 h-3.5" />
                                        </button>
                                    </a>
                                </Magnetic>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20 w-full max-w-5xl mx-auto flex flex-col items-center gap-4">
                <div className="w-[1px] h-12 bg-gradient-to-b from-purple-600/40 to-transparent" />
                <span className="text-[8px] tracking-[0.4em] uppercase text-white/15 font-black">Scroll</span>
            </div>
        </section>
    );
}

export default HeroSection
