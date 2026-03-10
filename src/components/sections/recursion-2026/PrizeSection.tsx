import { Award, Briefcase, Code, Lightbulb, Presentation, Trophy, Medal } from 'lucide-react';
import React, { ReactNode, useCallback, useEffect, useRef } from 'react';

const PrizeSection = () => {

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

    const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = e.currentTarget;
        const r = el.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width) * 100;
        const y = ((e.clientY - r.top) / r.height) * 100;
        el.style.transform = `perspective(1000px) rotateY(${(x - 50) * 0.04}deg) rotateX(${(y - 50) * -0.04}deg)`;
    };

    const onLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)";
    };

    // Sub-component for the Top 3 Podium Cards
    const PodiumCard = ({ rank, amount, sub, icon, color1, heightClass }: any) => (
        <div 
            onMouseMove={onMove} onMouseLeave={onLeave}
            className={`relative flex-1 w-full max-w-sm ${heightClass} transition-all duration-300 ease-out group`}
        >
            <div className="absolute -inset-[1px] rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity" style={{ background: color1 }} />
            <div className="h-full flex flex-col items-center justify-center p-8 text-center bg-neutral-900/40 backdrop-blur-md ring-1 ring-white/10 rounded-2xl">
                <div className="mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-500">{icon}</div>
                <p className="text-[10px] font-black tracking-[0.3em] uppercase text-white/40 mb-2">{rank}</p>
                <p className="text-4xl md:text-5xl font-black text-white leading-none mb-3 tracking-tighter">{amount}</p>
                <p className="text-[10px] tracking-widest uppercase font-bold text-white/20">{sub}</p>
            </div>
        </div>
    );

    // Sub-component for Category List Rows
    const CategoryRow = ({ title, amount, icon: Icon }: any) => (
        <div 
            onMouseMove={onMove} onMouseLeave={onLeave}
            className="group relative w-full transition-all duration-300 ease-out mb-3"
        >
            <div className="relative bg-neutral-900/30 flex flex-col md:flex-row items-center p-5 rounded-xl border border-white/5 hover:border-white/20 transition-all">
                <div className="flex items-center justify-between w-full md:w-auto md:min-w-[140px] md:border-r border-white/5 md:pr-6">
                    <span className="text-white font-black text-xl">{amount}</span>
                    <span className="text-[10px] font-black text-emerald-500 tracking-tighter ml-2">Voucher</span>
                </div>
                <div className="flex-1 md:pl-6 mt-3 md:mt-0 flex items-center gap-4 w-full">
                    <Icon className="w-4 h-4 text-white/40" />
                    <span className="text-sm font-bold text-white/80">{title}</span>
                </div>
            </div>
        </div>
    );

    return (
        <section id="prizes" className="bg-neutral-950 py-24 px-6 md:px-12 relative overflow-hidden">
             {/* Background glow */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[400px] bg-amber-500/5 blur-[120px] rounded-full" />

            <div className="max-w-6xl mx-auto relative z-10">
                <Fade className="text-center mb-16">
                    <h3 className="text-[10px] tracking-[0.5em] uppercase text-amber-500/60 font-black mb-4">Elite Rewards</h3>
                    <h2 className="text-4xl md:text-7xl font-black text-white mb-6">PRIZE POOL</h2>
                </Fade>

                {/* THE PODIUM (Top 3) */}
                <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center gap-6 mb-16">
                    <PodiumCard
                        rank="First Runner Up"
                        amount="₹1,00,000"
                        sub="Cash + Vouchers"
                        icon={<Medal className="w-10 h-10 text-slate-300" />}
                        color1="rgba(200,200,210,0.5)"
                        heightClass="lg:h-[300px]"
                    />
                    <PodiumCard
                        rank="Champions"
                        amount="₹1,20,000"
                        sub="Cash + Ultimate Pack"
                        icon={<Trophy className="w-14 h-14 text-amber-400" />}
                        color1="rgba(255,215,0,0.6)"
                        heightClass="lg:h-[360px]"
                    />
                    <PodiumCard
                        rank="Second Runner-Up"
                        amount="₹80,000"
                        sub="Cash + Tech Kit"
                        icon={<Award className="w-10 h-10 text-amber-700" />}
                        color1="rgba(205,127,50,0.5)"
                        heightClass="lg:h-[280px]"
                    />
                </div>

                {/* THE CATEGORIES (List) */}
                <div className="max-w-3xl mx-auto">
                    <Fade className="mb-6">
                        <h4 className="text-[10px] tracking-widest uppercase font-black text-white/30 border-b border-white/5 pb-2">Special Categories</h4>
                    </Fade>
                    <Fade>
                        <CategoryRow title="Best Innovation" amount="₹10,000" icon={Lightbulb} />
                        <CategoryRow title="Best Presentation" amount="₹10,000" icon={Presentation} />
                        <CategoryRow title="Best Technical Implementation" amount="₹10,000" icon={Code} />
                        <CategoryRow title="Best Real-World Impact" amount="₹10,000" icon={Briefcase} />
                        <CategoryRow title="Best Use of Technology" amount="₹10,000" icon={Lightbulb} />
                    </Fade>
                </div>

            </div>
        </section>
    );
};

export default PrizeSection;