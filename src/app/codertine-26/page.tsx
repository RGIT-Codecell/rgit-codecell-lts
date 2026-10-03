import type { Metadata } from "next";
import HeroSection from "@/components/sections/codertine-2026/HeroSection";
import MotionsSection from "@/components/sections/codertine-2026/MotionsSection";
import RoadmapTimeline from "@/components/sections/codertine-2026/RoadmapTimeline";
import PrizePoolSection from "@/components/sections/codertine-2026/PrizePoolSection";
import FaqSection from "@/components/sections/codertine-2026/FaqSection";
import PartnerBanner from "@/components/sections/codertine-2026/PartnerBanner";

export const metadata: Metadata = {
  title: "CoderTine 7.0 | Build · Break · Debug · Ship",
  description:
    "Join CoderTine 7.0 — a 5-day engineering arc organized by RGIT Codecell & RGIT CESS. Free AI & Reverse Engineering workshops, Competitive Debugging, The Data Hunt trading simulation, and flagship CodeChef DSA Verse contest.",
  keywords: [
    "CoderTine",
    "CoderTine 7.0",
    "RGIT Codecell",
    "RGIT CESS",
    "DSA Verse",
    "CodeChef",
    "Nostocx",
    "Competitive Programming",
    "Hackathon",
    "Engineering Workshops",
    "Mumbai Tech Events",
  ],
  openGraph: {
    title: "CoderTine 7.0 — Build · Break · Debug · Ship",
    description:
      "A 5-day hands-on engineering arc from Oct 5 to Oct 9, 2026. Workshops, high-stakes debugging tournament, virtual market simulation, and flagship CodeChef DSA challenge.",
    url: "https://rgitcodecell.tech/codertine-26",
    siteName: "RGIT Codecell",
    images: [
      {
        url: "/images/codertine/college-look.webp",
        width: 1200,
        height: 630,
        alt: "CoderTine 7.0 at RGIT",
      },
    ],
  },
};

export default function Codertine26Page() {
  return (
    <main className="min-h-screen bg-[#001317] text-[#e0f7fa] selection:bg-[#00e5ff] selection:text-[#001317]">
      {/* Hero Section */}
      <HeroSection />

      {/* The 4 Core Engineering Motions */}
      <MotionsSection />

      {/* 5-Day Master Arc Timeline ("Your Journey Begins Here") */}
      <RoadmapTimeline />

      {/* Prize Pool & Awards Showcase */}
      <PrizePoolSection />

      {/* Partners & Host Committees */}
      <PartnerBanner />

      {/* Frequently Asked Questions */}
      <FaqSection />
    </main>
  );
}
