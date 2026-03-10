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
import { Recursion2026Timeline } from "@/components/sections/recursion-2026/Recursion2026Timeline";
import Sponsers from "@/components/sections/recursion-2026/Sponsers";


export default function RecursionPage() {
    return (
        <main className="min-h-screen bg-black">
            <CursorGlow />
            <HeroSection />
            <SkillsMarquee />
            <AboutSection />
            <PrizeSection />
            <RulesSection />
            <Recursion2026Timeline />
            <RegistrationSection />
            <FAQSection />
            <Sponsers />
            <ContactSection />
        </main>
    );
}
