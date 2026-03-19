import React from 'react'

const SkillsMarquee = () => {
    const items = ["Web & App Development", "AI / Machine Learning", "Blockchain", "Web & App Development", "AI / Machine Learning", "Blockchain", "Web & App Development", "AI / Machine Learning", "Blockchain"];
    return (
        <div className="py-6 sm:py-10 bg-transparent overflow-hidden">
            <h1 className=' font-porticoRough text-3xl sm:text-5xl font-bold text-center pb-6 sm:pb-10 text-tumbbad-gold drop-shadow-md'>Domains</h1>
            <div className="marquee-track">
                {[...items, ...items].map((item, i) => (
                    <span key={i} className="px-6 sm:px-10 text-[10px] sm:text-xs md:text-base font-black text-tumbbad-gold/40 hover:text-tumbbad-gold/80 transition-colors uppercase tracking-[0.15em] sm:tracking-[0.25em]" style={{ fontFamily: "var(--font-cinzel-decorative)" }}>
                        {item} <span className="ml-10 text-tumbbad-blood">✦</span>
                    </span>
                ))}
            </div>
        </div>
    );
}

export default SkillsMarquee;
