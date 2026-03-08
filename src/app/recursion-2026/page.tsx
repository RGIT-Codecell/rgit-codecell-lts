"use client";
import ContactSection from "@/components/sections/recursion-2026/ContactSection";
import RegistrationSection from "@/components/sections/recursion-2026/RegistrationSection";
import FAQSection from "@/components/sections/recursion-2026/FAQSection";
import RulesSection from "@/components/sections/recursion-2026/RulesSection";
import PrizeSection from "@/components/sections/recursion-2026/PrizeSection";
import AboutSection from "@/components/sections/recursion-2026/AboutSection";
import SkillsMarquee from "@/components/sections/recursion-2026/SkillsMarquee";
import HeroSection from "@/components/sections/recursion-2026/HeroSection";
import CursorGlow from "@/components/sections/recursion-2026/CursorGlow";
import { RecursionTimeline } from "@/components/sections/recursion/RecursionTimeline";


export default function RecursionPage() {
    return (
        <main className="min-h-screen bg-black">
            <CursorGlow />
            <HeroSection />
            <SkillsMarquee />
            <AboutSection />
            <PrizeSection />
            <RulesSection />
            <RecursionTimeline />
            <FAQSection />
            <RegistrationSection />
            <ContactSection />
        </main>
    );
}
