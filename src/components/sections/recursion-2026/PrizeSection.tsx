import { Medal, Trophy, Award } from 'lucide-react'
import React, {
    ReactNode, useCallback, useEffect, type MouseEvent as RMouseEvent,
    useRef
} from 'react'

const PrizeSection = () => {

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

    function PrizeCard({
        rank,
        amount,
        sub,
        icon,
        color1,
        color2,
        color1Alpha,
        heightClass,
    }: {
        rank: string;
        amount: string;
        sub: string;
        icon: ReactNode;
        color1: string;
        color2: string;
        color1Alpha: string;
        heightClass: string;
    }) {
        const ref = useRef<HTMLDivElement>(null);
        const onMove = useCallback((e: RMouseEvent<HTMLDivElement>) => {
            const el = ref.current;
            if (!el) return;
            const r = el.getBoundingClientRect();
            const x = ((e.clientX - r.left) / r.width) * 100;
            const y = ((e.clientY - r.top) / r.height) * 100;
            const inner = el.querySelector(".prize-card-inner") as HTMLElement;
            if (inner) {
                inner.style.setProperty("--shine-x", `${x}%`);
                inner.style.setProperty("--shine-y", `${y}%`);
            }
            el.style.transform = `perspective(800px) rotateY(${(x - 50) * 0.05}deg) rotateX(${(y - 50) * -0.05}deg)`;
        }, []);

        const onLeave = useCallback(() => {
            if (ref.current) ref.current.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg)";
        }, []);

        return (
            <div
                ref={ref}
                className={`prize-card-wrapper w-full max-w-sm ${heightClass} transition-transform duration-300 ease-out cursor-default`}
                style={{
                    "--card-color-1": color1,
                    "--card-color-2": color2,
                    "--card-color-1-alpha": color1Alpha,
                } as any}
                onMouseMove={onMove}
                onMouseLeave={onLeave}
            >
                <div className="prize-card-inner flex flex-col items-center justify-center p-8 text-center ring-1 ring-white/10 rounded-2xl">
                    <div className="mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">{icon}</div>
                    <p className="text-[10px] font-black tracking-[0.3em] uppercase text-white/40 mb-2">{rank}</p>
                    <p className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-none mb-3 tracking-tighter">{amount}</p>
                    <p className="text-[10px] tracking-widest uppercase font-bold text-white/20">{sub}</p>
                </div>
            </div>
        );
    }

    return (
        <section id="prizes" className="bg-neutral-950 py-24 px-6 md:px-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <Fade className="text-center mb-16 lg:mb-20">
                    <h3 className="text-[10px] tracking-[0.5em] uppercase text-amber-500/60 font-black mb-4">Elite Rewards</h3>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 font-porticoRough" >PRIZE POOL</h2>
                    <p className="max-w-xl mx-auto text-white/20 text-xs md:text-sm uppercase tracking-widest font-bold">Industry standard recognition for top performers.</p>
                </Fade>

                <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center gap-6 lg:gap-8">
                    <PrizeCard
                        rank="2nd Place"
                        amount="₹1.25L"
                        sub="Cash Prize + Vouchers"
                        icon={<Medal className="w-10 h-10 text-slate-300" />}
                        color1="rgba(200,200,210,0.7)"
                        color2="rgba(148,163,184,0.4)"
                        color1Alpha="rgba(200,200,210,0.06)"
                        heightClass="lg:h-[300px]"
                    />
                    <PrizeCard
                        rank="Champions"
                        amount="₹2.00L"
                        sub="Cash Prize + Ultimate Pack"
                        icon={<Trophy className="w-14 h-14 text-amber-400" />}
                        color1="rgba(255,215,0,0.8)"
                        color2="rgba(234,179,8,0.5)"
                        color1Alpha="rgba(255,215,0,0.08)"
                        heightClass="lg:h-[360px]"
                    />
                    <PrizeCard
                        rank="3rd Place"
                        amount="₹75K"
                        sub="Cash Prize + Tech Kit"
                        icon={<Award className="w-10 h-10 text-amber-700" />}
                        color1="rgba(205,127,50,0.7)"
                        color2="rgba(180,83,9,0.4)"
                        color1Alpha="rgba(205,127,50,0.06)"
                        heightClass="lg:h-[280px]"
                    />
                </div>
            </div>
        </section>
    )
}

export default PrizeSection
