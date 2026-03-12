"use client";
import HeroSection from "@/components/sections/recursion-2026/HeroSection";
import MiddleDescentWrapper from "@/components/ui/MiddleDescentWrapper";
import SkillsMarquee from "@/components/sections/recursion-2026/SkillsMarquee";
import AboutSection from "@/components/sections/recursion-2026/AboutSection";
import PrizeSection from "@/components/sections/recursion-2026/PrizeSection";
import RulesSection from "@/components/sections/recursion-2026/RulesSection";
import { Recursion2026Timeline } from "@/components/sections/recursion-2026/Recursion2026Timeline";
import FAQSection from "@/components/sections/recursion-2026/FAQSection";
import Sponsers from "@/components/sections/recursion-2026/Sponsers";
import ContactSection from "@/components/sections/recursion-2026/ContactSection";
import CursorGlow from "@/components/sections/recursion-2026/CursorGlow";

export default function RecursionPage() {
    return (
        <main className="min-h-screen bg-[#050505] overflow-hidden selection:bg-[#8B0000] selection:text-white">
            <CursorGlow />
            
            {/* STAGE 1: The Surface & The Fall */}
            <HeroSection />
            
            {/* STAGE 2: The Deep Well (Dirt & Darkness) */}
            <MiddleDescentWrapper>
                <SkillsMarquee />
                <AboutSection />
                <PrizeSection />
                <RulesSection />
                <Recursion2026Timeline />
                <FAQSection />
                <Sponsers />
            </MiddleDescentWrapper>

            {/* STAGE 3: The Womb (The Core) */}
            {/* We will build this final component to house the Hastar image and the Keepers */}
            <ContactSection />
            
        </main>
    );
}
