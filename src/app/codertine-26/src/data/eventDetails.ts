import type { Module } from "./modules";
import { modules, moduleMeta, moduleShortTitle } from "./modules";

export const TBD = "To be confirmed";

export type PeopleTeamItem = {
  label: string;
  value: string;
};

export type EventGuide = {
  subtitle: string;
  syllabus: string[];
  studentGains: string[];
  eventFlow: string[];
  participantNote: string;
};

export type EventDetail = {
  slug: string;
  title: string;
  day: string;
  date: string;
  tagline: string;
time: string;
  venue?: string;
  mode?: string;
  format: string;
  speaker?: string;
  speakerLabel?: string;
  registration?: string;
  certificate: string;
  partner?: string;
  expected?: string;
  duration?: string;
  challenge?: string;
  peopleAndTeam: PeopleTeamItem[];
  whatItCovers: string[];
  purpose: string;
  keyTakeaway?: string;
  coreQuestion?: string;
  coreMeta?: string;
  journey?: { label: string; steps: string[] };
  quote?: string;
  guide: EventGuide;
};

function plainDate(date: string): string {
  return date.replace(/(\d+)(st|nd|rd|th)/, "$1");
}

/** Approved guide content, shared by every CoderTine event. */
const sharedGuide: EventGuide = {
  subtitle: "A clean one-page guide for participants and the organizing team.",
  syllabus: [
    "AI-assisted website development",
    "Writing clear instructions for AI tools",
    "Working with generated components and code",
    "Connecting features and APIs",
    "Testing, refining and improving an AI-built site",
    "Basic deployment workflow",
  ],
  studentGains: [
    "Use AI as a building partner, not only a question-answer tool.",
    "Understand a practical AI-assisted development workflow.",
    "Move from an idea to a working build faster.",
    "Gain hands-on experience during the session.",
  ],
  eventFlow: [
    "Introduction to the workflow",
    "Live build / guided implementation",
    "Hands-on participant work",
    "Testing and improvement",
    "Wrap-up and key takeaways",
  ],
  participantNote:
    "Participants should bring laptops. The session is intended to be hands-on.",
};

/** Approved guide content for the Reverse Engineering Workshop. */
const reverseEngineeringGuide: EventGuide = {
  subtitle: "A clean one-page guide for participants and the organizing team.",
  syllabus: [
    "Inspecting the structure of an AI-generated website",
    "Identifying pages, components and assets",
    "Understanding how technologies connect",
    "Tracing basic logic and user interactions",
    "Testing generated patterns and implementations",
    "Moving from “AI made it” to “I understand it”",
  ],
  studentGains: [
    "Look beyond the final interface.",
    "Understand the role of structure, components and logic.",
    "Ask better questions about AI-generated code.",
    "Build confidence in reading an unfamiliar web project.",
  ],
  eventFlow: [
    "What sits behind the interface",
    "Guided walkthrough of a generated site",
    "Structure and component inspection",
    "Logic and technology discussion",
    "Questions and recap",
  ],
  participantNote: "Laptop is not required for this session.",
};

/** Approved guide content for Debug the Bug. */
const debugTheBugGuide: EventGuide = {
  subtitle: "A clean one-page guide for participants and the organizing team.",
  syllabus: [
    "Syntax errors",
    "Logical errors",
    "Algorithmic flaws",
    "Structural failures",
    "Code reading and debugging",
    "Core Computer Science fundamentals",
  ],
  studentGains: [
    "Debug instead of only writing code from scratch.",
    "Trace errors from symptoms to root causes.",
    "Use structured problem-solving under pressure.",
    "Improve code reading, logic and execution speed.",
  ],
  eventFlow: [
    "Round / task briefing",
    "Syntax and basic debugging",
    "Logic and algorithmic debugging",
    "Advanced structural failures",
    "Final evaluation and results",
  ],
  participantNote:
    "Detailed rounds and competition rules will be finalized separately. The event is mainly for undergraduate students from CSE, IT and allied technical branches.",
};

/** Approved guide content for The Data Hunt. */
const dataHuntGuide: EventGuide = {
  subtitle: "A clean one-page guide for participants and the organizing team.",
  syllabus: [
    "Market basics and simulated trading",
    "Using market information for decisions",
    "Reading data and identifying signals",
    "Technology and API exposure",
    "Risk, timing and trade decisions",
    "Performance tracking on a live leaderboard",
  ],
  studentGains: [
    "Make decisions with data instead of guesswork.",
    "Understand the technology behind a trading platform.",
    "Explore platform features and APIs.",
    "Build a personal market approach and test it.",
  ],
  eventFlow: [
    "Platform orientation",
    "Virtual capital and market setup",
    "Data / API exploration",
    "Trading challenge",
    "Leaderboard and performance review",
  ],
  participantNote:
    "Nostocx is expected to provide trading accounts, a dedicated contest, common virtual capital, leaderboard, Principal Portal, market data/API access and technical support. Final rules are to be confirmed.",
};

/** Approved guide content for the DSA Verse DSA Challenge. */
const dsaVerseGuide: EventGuide = {
  subtitle: "A clean one-page guide for participants and the organizing team.",
  syllabus: [
    "Arrays and strings",
    "Searching and sorting",
    "Data structures",
    "Algorithms and problem-solving",
    "Time and space complexity",
    "Implementation and optimization",
  ],
  studentGains: [
    "Apply DSA concepts under time pressure.",
    "Choose efficient approaches quickly.",
    "Improve coding speed and accuracy.",
    "Manage time across five problems.",
  ],
  eventFlow: [
    "Contest login and instructions",
    "5 coding problems",
    "Live submission and evaluation",
    "Time management across difficulty levels",
    "Final leaderboard and results",
  ],
  participantNote:
    "Online individual contest. Certificate will be provided.",
};

/**
 * Base detail for a module where only the roadmap facts are confirmed.
 * Everything else defaults to "To be confirmed" instead of inventing data.
 */
function baseDetail(module: Module): EventDetail {
  const [date, , venue] = moduleMeta(module);

  return {
    slug: module.interestId,
    title: moduleShortTitle(module),
    day: TBD,
    date: plainDate(date),
    tagline: module.tagline,
    time: module.time ?? TBD,
    venue: venue ?? TBD,
    format: module.detail ?? TBD,
    speaker: TBD,
    registration: TBD,
    certificate: TBD,
    peopleAndTeam: [
      { label: "Speaker", value: TBD },
      { label: "Event Lead", value: TBD },
      { label: "Organizing team", value: TBD },
      { label: "Capacity", value: TBD },
    ],
    whatItCovers: [TBD],
    purpose: module.description,
    keyTakeaway: TBD,
    guide: sharedGuide,
  };
}

function buildDetails(): EventDetail[] {
  const details: EventDetail[] = [];

  for (const module of modules) {
    if (module.interestId === "ai-build-lab") {
      details.push({
        slug: "ai-build-lab",
        title: "AI Build Lab",
        day: "Monday",
        date: "5 October",
        tagline:
          "Build with AI — use modern AI tools to move from idea to working website or application faster.",
        time: "2:15 PM onwards",
        venue: "B-34",
        format: "2-hour workshop / seminar",
        speaker: "Mohammed Razeen Sayyed",
        registration: "Free",
        certificate: "Yes — CESS × CodeCell",
        peopleAndTeam: [
          { label: "Speaker", value: "Mohammed Razeen Sayyed" },
          {
            label: "Event Lead",
            value: "Janvi & Tanish",
          },
          { label: "Organizing team", value: "CESS × CodeCell" },
          { label: "Capacity", value: "No limit" },
        ],
        whatItCovers: [
          "AI-assisted website development",
          "Writing clear instructions for AI tools",
          "Working with generated components and code",
          "Connecting features and APIs",
        ],
        purpose:
          "A practical introduction to AI-assisted website and application development, with a focus on building faster and learning a repeatable workflow.",
        keyTakeaway:
          "Participants should bring laptops. The session is intended to be hands-on.",
        quote:
          "Don’t just use the tool. Understand the skill behind the tool.",
        guide: sharedGuide,
      });
    } else if (module.interestId === "reverse-engineering") {
      details.push({
        slug: "reverse-engineering",
        title: "Reverse Engineering Workshop",
        day: "Tuesday",
        date: "6 October",
        tagline:
          "Break It to Understand It — look behind an AI-generated website and understand what makes it work.",
        time: "2:15 PM onwards",
        venue: "B-33",
        format: "2-hour seminar",
        speaker: "Pratik Dave",
        registration: "Free",
        certificate: "No",
        peopleAndTeam: [
          { label: "Speaker", value: "Pratik Dave" },
          { label: "Event Lead", value: "Chhavi & Ansh" },
          { label: "Organizing Team", value: "CESS × CodeCell" },
          { label: "Laptop", value: "Not required" },
        ],
        whatItCovers: [
          "Inspecting the structure of an AI-generated website",
          "Identifying pages, components and assets",
          "Understanding how technologies connect",
          "Tracing basic logic and user interactions",
        ],
        purpose:
          "A guided session on understanding the hidden structure, technologies and logic behind AI-generated websites.",
        keyTakeaway: "Laptop is not required for this session.",
        quote: "Don't just build with AI — understand what AI built.",
        guide: reverseEngineeringGuide,
      });
    } else if (module.interestId === "debug-the-bug") {
      details.push({
        slug: "debug-the-bug",
        title: "Debug the Bug",
        day: "Wednesday",
        date: "7 October",
        tagline: "Find the problem. Understand it. Fix it.",
        time: "10:00 AM – 3:30 PM",
        venue: "Seminar Hall",
        format: "Competitive debugging event",
        speaker: "Pranav, Adit, Vivek & Chaitrali",
        speakerLabel: "Event Lead / Speaker",
        registration: "₹30",
        certificate: "Yes",
        peopleAndTeam: [
          {
            label: "Event Leads",
            value: "Pranav, Adit, Vivek & Chaitrali",
          },
          { label: "Supporting team", value: "To be finalized" },
          { label: "Format", value: "Competitive debugging" },
          { label: "Expected participants", value: "~50" },
        ],
        whatItCovers: [
          "Syntax errors",
          "Logical errors",
          "Algorithmic flaws",
          "Structural failures",
        ],
        purpose:
          "A multi-layered debugging challenge where participants hunt down errors from syntax level to deeper logical and structural failures.",
        coreQuestion: "Can you understand broken code and fix it?",
        journey: {
          label: "Debugging ladder:",
          steps: ["Syntax", "Logic", "Algorithms", "Structure"],
        },
        guide: debugTheBugGuide,
      });
    } else if (module.interestId === "the-data-hunt") {
      details.push({
        slug: "the-data-hunt",
        title: "The Data Hunt",
        day: "Thursday",
        date: "8 October",
        tagline:
          "Code. Analyze. Trade. — combine technology, data analysis and financial decision-making in a simulated market.",
        time: "10:00 AM – 3:30 PM",
        venue: "Seminar Hall",
        format: "Technology + virtual stock-market challenge",
        partner: "Nostocx",
        registration: "₹50",
        certificate: "Yes",
        peopleAndTeam: [
          { label: "Platform Partner", value: "Nostocx" },
          {
            label: "Event Lead",
            value: "Zenna, Gargi, Rudra & Swaleha",
          },
          { label: "Technical / organizer support", value: TBD },
          { label: "Participant accounts and contest support", value: "Nostocx" },
        ],
        whatItCovers: [
          "Market basics and simulated trading",
          "Using market information for decisions",
          "Reading data and identifying signals",
          "Technology and API exposure",
        ],
        purpose:
          "A technology-led market simulation where participants use virtual capital, data and platform tools to make trading decisions.",
        coreQuestion:
          "Can you use technology and data to make better market decisions?",
        journey: {
          label: "Journey:",
          steps: ["Build", "Analyze", "Decide", "Trade"],
        },
        guide: dataHuntGuide,
      });
    } else if (module.interestId === "dsa-verse") {
      details.push({
        slug: "dsa-verse",
        title: "DSA Verse",
        day: "Friday",
        date: "9 October",
        tagline:
          "The flagship DSA Challenge — the week ends with a focused two-hour competitive programming contest.",
        time: "12:00 PM – 2:00 PM",
        mode: "Online",
        format: "Individual competitive programming",
        partner: "CodeChef",
        duration: "2 hours",
        challenge: "5 — Easy to Hard",
        registration: "₹60",
        certificate: "Yes",
        peopleAndTeam: [
          { label: "Platform Partner", value: "CodeChef" },
          {
            label: "Event Lead",
            value: "Shobhan, Ananya, Yashika & Bhumi",
          },
          { label: "Problem-setting / support team", value: TBD },
          {
            label: "Expected participants",
            value: "~50; open to students from all colleges",
          },
        ],
        whatItCovers: [
          "Arrays and strings",
          "Searching and sorting",
          "Data structures",
          "Algorithms and problem-solving",
        ],
        purpose:
          "A five-question DSA contest that tests logical thinking, algorithms, coding efficiency and time management.",
        coreQuestion: "Everything you have learned. Now solve.",
        coreMeta: "5 problems · 2 hours · Easy → Hard",
        guide: dsaVerseGuide,
      });
    } else {
      details.push(baseDetail(module));
    }
  }

  return details;
}

export const eventDetails: EventDetail[] = buildDetails();

/**
 * Old slugs kept resolving after the 2026 rename (CodeTrade -> The Data Hunt,
 * CoderTrine -> DSA Verse) so previously shared links still open the right page
 * instead of the not-found screen. Remove an entry once no old links are in
 * circulation.
 */
const legacySlugAliases: Record<string, string> = {
  codetrade: "the-data-hunt",
  codertrine: "dsa-verse",
};

export function getEventDetail(slug: string): EventDetail | undefined {
  const resolved = legacySlugAliases[slug] ?? slug;
  return eventDetails.find((event) => event.slug === resolved);
}