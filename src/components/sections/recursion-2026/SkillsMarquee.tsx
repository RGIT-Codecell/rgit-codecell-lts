import React from 'react'

const SkillsMarquee = () => {
    const items = ["Web Development", "AI / ML", "Data Structures", "Blockchain", "Cloud Computing", "IoT", "Cybersecurity", "App Dev", "System Design"];
    return (
        <div className="py-10 bg-neutral-950 border-y border-white/5 overflow-hidden">
            <div className="marquee-track">
                {[...items, ...items].map((item, i) => (
                    <span key={i} className="px-10 text-xs md:text-base font-black text-white/10 hover:text-white/30 transition-colors uppercase tracking-[0.25em]" style={{ fontFamily: "var(--font-cinzel)" }}>
                        {item} <span className="ml-10 text-purple-500/20">✦</span>
                    </span>
                ))}
            </div>
        </div>
    );
}

export default SkillsMarquee;
