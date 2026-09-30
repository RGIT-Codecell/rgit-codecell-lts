import type { InterestId } from "../components/codetrineOptions";

export type Module = {
  title: string;
  tagline: string;
  date: string;
  time?: string;
  detail?: string;
  venue?: string;
  description: string;
  side: "left" | "right";
  interestId: InterestId;
  status?: "UPCOMING";
  glyph: string;
};

/** Structured date · time/type · venue parts, e.g. ["5th October","2:15 PM onwards","Book B-34"]. */
export function moduleMeta(module: Module): string[] {
  return [module.date, module.time ?? module.detail, module.venue].filter(
    (part): part is string => Boolean(part)
  );
}

/** The canonical meta line used everywhere an event appears. */
export function moduleSubtitle(module: Module): string {
  return moduleMeta(module).join(" · ");
}

/** Short name without the "— Tagline" suffix, useful for nav labels and headings. */
export function moduleShortTitle(module: Module): string {
  return module.title.split(" — ")[0];
}

export const modules: Module[] = [
  {
    title: "AI Build Lab — “Build with AI”",
    tagline: "Build with AI",
    date: "5th October",
    time: "2:15 PM onwards",
    venue: "B-34",
    description:
      "A hands-on AI building session where you turn ideas into working prototypes. Explore practical AI tools, prompt-driven development, and rapid prototyping while building something useful from scratch.",
    side: "left",
    interestId: "ai-build-lab",
    status: "UPCOMING",
    glyph: ".build()",
  },
  {
    title: "Reverse Engineering — “Break It to Understand It”",
    tagline: "Break It to Understand It",
    date: "6th October",
    time: "2:15 PM onwards",
    venue: "B-33",
    description:
      "Step inside the mindset of a reverse engineer. Learn how to inspect, understand, trace, and break down existing software systems to discover how they work under the hood.",
    side: "right",
    interestId: "reverse-engineering",
    glyph: ".understand()",
  },
  {
    title: "Debug the Bug",
    tagline: "Find the problem. Understand it. Fix it.",
    date: "7th October",
    detail: "Competitive debugging event",
    description:
      "A multi-layered debugging challenge where participants hunt down errors from syntax level to deeper logical and structural failures.",
    side: "left",
    interestId: "debug-the-bug",
    glyph: ".debug()",
  },
  {
    title: "The Data Hunt",
    tagline: "Code. Analyze. Trade.",
    date: "8th October",
    detail: "Technology + virtual stock-market challenge",
    description:
      "A technology-led market simulation where participants use virtual capital, data and platform tools to make trading decisions.",
    side: "right",
    interestId: "the-data-hunt",
    glyph: ".analyze & build()",
  },
  {
    title: "DSA Verse",
    tagline: "DSA Challenge",
    date: "9th October",
    time: "12:00 PM – 2:00 PM",
    detail: "Individual competitive programming",
    description:
      "The flagship DSA Challenge — the week ends with a focused two-hour competitive programming contest.",
    side: "left",
    interestId: "dsa-verse",
    glyph: ".code()",
  },
];