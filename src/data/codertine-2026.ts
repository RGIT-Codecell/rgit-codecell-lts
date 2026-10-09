export interface PeopleTeamItem {
  label: string;
  value: string;
}

export interface EventGuide {
  subtitle: string;
  syllabus: string[];
  studentGains: string[];
  eventFlow: string[];
  participantNote: string;
}

export interface QueryContact {
  name: string;
  role?: string;
  phone: string;
}

export interface CodertineModule {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  subtitle: string;
  day: string;
  date: string;
  dateBadge: string;
  time: string;
  venue: string;
  mode: string;
  format: string;
  type: "workshop" | "competition";
  price: string;
  partner?: string;
  partnerUrl?: string;
  speaker?: string;
  speakerTitle?: string;
  leads: string;
  queryContacts: QueryContact[];
  team: string;
  capacity: string;
  laptopRequirement: string;
  certificate: string;
  duration?: string;
  challenge?: string;
  purpose: string;
  keyTakeaway: string;
  coreQuestion?: string;
  coreMeta?: string;
  journeySteps?: string[];
  ladderSteps?: string[];
  quote?: string;
  glyph: string;
  themeKey: "pine" | "cobalt" | "teal" | "charcoal" | "orange";
  bgDark: string;
  toneGradient: string;
  accentColor: string;
  glowColor: string;
  borderColor: string;
  badgeBg: string;
  btnStyle: string;
  cardBg: string;
  cardBorder: string;
  surfaceSubtle: string;
  pillBadgeBg: string;
  pillBadgeText: string;
  whatItCovers: string[];
  guide: EventGuide;
}

export const REGISTRATION_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd4zNSflWRYTtaSMug4V5MiBrkLB2YNEAerJ8mJ0GuJUHkMgQ/viewform?usp=header";

export const EVENT_START_DATE = "October 5, 2026 10:30:00 GMT+0530";

export const CODERTINE_MODULES: CodertineModule[] = [
  {
    slug: "ai-build-lab",
    number: "01",
    title: "AI Build Lab",
    shortTitle: "AI Build Lab",
    tagline: "Build Websites & Applications with AI — 2 Hours Hands-on Workshop",
    subtitle:
      "A hands-on AI building workshop where you turn ideas into working applications with modern AI tools, prompt engineering, and rapid deployment.",
    day: "Monday",
    date: "October 5, 2026",
    dateBadge: "5th Oct",
    time: "10:30 AM onwards",
    venue: "Lab B-11",
    mode: "In-Person Hands-on Workshop",
    format: "2-Hour Interactive Workshop",
    type: "workshop",
    price: "FREE",
    speaker: " Mohammed Razeen Sayyed",
    speakerTitle: "GTM Strategist | AI Entrepreneur · AI • Automation • Digital Growth",
    leads: "Tanish, Vishal, Krutika, Yug & Janvi",
    queryContacts: [
      { name: "Tanish", role: "Event Lead", phone: "+91 83694 54971" },
      { name: "Vishal", role: "Ass. Lead", phone: "+91 77096 92329" },
      { name: "Krutika", role: "Lead", phone: "+91 85910 17771" },
      { name: "Yug", role: "Lead", phone: "+91 93248 27015" },
      { name: "Janvi", role: "Event Lead", phone: "+91 88283 69788" },
    ],
    team: "CESS × Codecell",
    capacity: "Open to all branches",
    laptopRequirement: "Recommended — bring your laptop for live hands-on builds",
    certificate: "Yes — Official Participant Certificate",
    duration: "2 Hours",
    purpose:
      "A practical introduction to AI-assisted website and application development, with a focus on building faster and learning a repeatable workflow.",
    keyTakeaway:
      "Don't just use the tool as a chatbot. Understand the engineering skill behind the tool.",
    quote: "Move from an idea to a deployed build faster than ever before.",
    glyph: ".build()",
    themeKey: "pine",
    bgDark: "#021814",
    toneGradient: "from-[#032b23] via-[#021f1a] to-[#011613]",
    accentColor: "text-[#00f0d4]",
    glowColor: "rgba(0, 240, 212, 0.45)",
    borderColor: "border-[#00f0d4]/35",
    badgeBg: "bg-[#0d9488]/20 text-[#5eead4] border-[#14b8a6]/40",
    btnStyle: "bg-[#00f0d4] text-[#021a16] hover:bg-[#2dd4bf] shadow-[0_0_25px_rgba(0,240,212,0.4)]",
    cardBg: "bg-[#03231d]",
    cardBorder: "border-[#00f0d4]/20",
    surfaceSubtle: "bg-[#011c17]",
    pillBadgeBg: "bg-[#00f0d4]",
    pillBadgeText: "text-[#021814]",
    whatItCovers: [
      "Build websites & applications with AI from scratch",
      "Write effective prompts and structured instructions",
      "Work with AI-generated code, components and layouts",
      "Connect dynamic features and third-party APIs",
      "Testing, refining and hardening generated systems",
      "Zero-to-production deployment workflow",
    ],
    guide: {
      subtitle:
        "Comprehensive one-page event syllabus and guide for participants and organizing team.",
      syllabus: [
        "AI-assisted website development fundamentals",
        "Writing clear, deterministic instructions for AI tools",
        "Refactoring generated code and managing modular components",
        "Connecting REST APIs, databases and state stores",
        "Testing, refining and hardening an AI-built site",
        "Basic deployment workflow to Vercel/Netlify",
      ],
      studentGains: [
        "Use AI as an active building partner, not only a passive question-answer tool.",
        "Understand a practical, repeatable AI-assisted development workflow.",
        "Move from an abstract idea to a working build 10x faster.",
        "Gain real hands-on experience and a project build during the session.",
      ],
      eventFlow: [
        "Welcome & Modern AI Workflow Introduction (20 mins)",
        "Live Build: Guided Prototype Implementation (45 mins)",
        "Hands-on Participant Work & Experimentation (35 mins)",
        "Live Testing, Debugging & Performance Tuning (15 mins)",
        "Project Showcase, Wrap-up & Key Takeaways (15 mins)",
      ],
      participantNote:
        "Participants are strongly encouraged to bring laptops. The session is interactive and hands-on in Lab B-11.",
    },
  },
  {
    slug: "reverse-engineering",
    number: "02",
    title: "Reverse Engineering Workshop",
    shortTitle: "Reverse Engineering",
    tagline: "»»» REVERSE ««« ENGINEERING — Break It to Understand It",
    subtitle:
      "Explore the structure of an AI-generated website. See how different technologies connect, trace basic logic and user interactions, and learn to understand what AI has built.",
    day: "Tuesday",
    date: "October 6, 2026",
    dateBadge: "6th Oct",
    time: "2:15 PM onwards",
    venue: "Lab B-33",
    mode: "In-Person Guided Seminar",
    format: "2-Hour Deep-Dive Seminar",
    type: "workshop",
    price: "FREE",
    speaker: "Pratik Dave",
    speakerTitle: "Systems & Security Lead",
    leads: "Ansh, Yug, Krutika & Chhavi",
    queryContacts: [
      { name: "Ansh", role: "Event Lead", phone: "+91 86928 88692" },
      { name: "Yug", role: "Lead", phone: "+91 93248 27015" },
      { name: "Krutika", role: "Lead", phone: "+91 85910 17771" },
      { name: "Chhavi", role: "Event Lead", phone: "+91 98192 00188" },
    ],
    team: "CESS × Codecell",
    capacity: "Open to all branches",
    laptopRequirement: "Not mandatory (guided live teardowns on projector)",
    certificate: "Yes — Official Participant Certificate",
    duration: "2 Hours",
    purpose:
      "A guided session on understanding the hidden structure, runtime technologies, network calls, and logic behind modern AI-generated and web software.",
    keyTakeaway: "Don't just build with AI — understand what AI built.",
    quote: "To master building systems, you must first master dissecting them.",
    glyph: ".understand()",
    themeKey: "cobalt",
    bgDark: "#030e26",
    toneGradient: "from-[#081e55] via-[#05153e] to-[#020b1f]",
    accentColor: "text-[#00d4ff]",
    glowColor: "rgba(0, 212, 255, 0.45)",
    borderColor: "border-[#00d4ff]/35",
    badgeBg: "bg-[#0284c7]/20 text-[#7dd3fc] border-[#0284c7]/40",
    btnStyle: "bg-[#00d4ff] text-[#040f28] hover:bg-[#38bdf8] shadow-[0_0_25px_rgba(0,212,255,0.4)]",
    cardBg: "bg-[#06173d]",
    cardBorder: "border-[#00d4ff]/20",
    surfaceSubtle: "bg-[#030f2b]",
    pillBadgeBg: "bg-[#00d4ff]",
    pillBadgeText: "text-[#030e26]",
    whatItCovers: [
      "Explore the structure of an AI-generated website",
      "See how different technologies connect across the stack",
      "Trace basic logic, network requests, and user interactions",
      "Learn to understand and audit what AI has built",
      "Deconstruct bundled assets, source maps, and client state",
      "Moving from 'AI made it' to 'I understand every line'",
    ],
    guide: {
      subtitle:
        "Comprehensive one-page event syllabus and guide for participants and organizing team.",
      syllabus: [
        "Inspecting the structure of an AI-generated web app",
        "Identifying pages, components, bundles and static assets",
        "Understanding how technologies connect across the stack",
        "Tracing basic logic, state transformations and user interactions",
        "Auditing generated patterns, vulnerabilities and bad practices",
        "Moving from 'AI made it' to 'I can rebuild it from first principles'",
      ],
      studentGains: [
        "Look far beyond the superficial user interface.",
        "Understand the crucial role of architecture, components and logic.",
        "Ask smarter questions about AI-generated code and dependencies.",
        "Build genuine confidence in reading and evaluating unfamiliar codebases.",
      ],
      eventFlow: [
        "Introduction: What sits behind the interface (20 mins)",
        "Guided Walkthrough of a Generated Production Site (40 mins)",
        "Structure, Component & Bundle Inspection (30 mins)",
        "Logic, Security & Technology Dissection (20 mins)",
        "Audience Q&A and Key Insights Recap (10 mins)",
      ],
      participantNote:
        "Laptops are optional for this session in Lab B-33. All teardowns will be projected live with interactive audience participation.",
    },
  },
  {
    slug: "debug-the-bug",
    number: "03",
    title: "Debug the Bug",
    shortTitle: "Debug the Bug",
    tagline: "Find the problem. Understand it. Fix it.",
    subtitle:
      "Spot syntax and logical errors, find flaws in algorithms and code structure, and trace bugs to their root cause in this high-stakes multi-round tournament.",
    day: "Wednesday",
    date: "October 7, 2026",
    dateBadge: "7th Oct",
    time: "10:00 AM – 3:30 PM",
    venue: "Seminar Hall",
    mode: "In-Person Tournament",
    format: "Multi-Round Competitive Debugging Tournament",
    type: "competition",
    price: "₹30",
    leads: "Vivek, Adit, Krutika, Yug, Pranav & Chaitali",
    queryContacts: [
      { name: "Vivek", role: "Event Lead", phone: "+91 81697 96374" },
      { name: "Adit", role: "Event Lead", phone: "+91 84509 98899" },
      { name: "Krutika", role: "Lead", phone: "+91 85910 17771" },
      { name: "Yug", role: "Lead", phone: "+91 93248 27015" },
      { name: "Pranav", role: "Event Lead", phone: "+91 87670 19282" },
      { name: "Chaitali", role: "Event Lead", phone: "+91 92219 38415" },
    ],
    team: "Codecell Technical Wing",
    capacity: "~50 Seats (Pre-registration recommended)",
    laptopRequirement: "Required — bring your laptop with your favorite IDE",
    certificate: "Yes — Official Participant & Winner Certificates",
    duration: "Full-Day Multi-Round Event",
    challenge: "4 Progressive Tiers of Broken Systems",
    purpose:
      "A multi-round debugging arena where participants hunt down errors from syntax level to deeper logical and structural failures under time pressure.",
    keyTakeaway: "Great engineers are defined by their ability to debug what others can't.",
    coreQuestion: "Can you understand broken code and restore it to perfection?",
    ladderSteps: [
      "Tier 1: Syntax & Compiler Glitches",
      "Tier 2: Subtle Edge Cases & Logic Errors",
      "Tier 3: Algorithmic Flaws & Infinite Traps",
      "Tier 4: Deep Structural & State Collapses",
    ],
    glyph: ".debug()",
    themeKey: "teal",
    bgDark: "#001417",
    toneGradient: "from-[#012f38] via-[#012228] to-[#001417]",
    accentColor: "text-[#00f5ff]",
    glowColor: "rgba(0, 245, 255, 0.5)",
    borderColor: "border-[#00f5ff]/40",
    badgeBg: "bg-[#00c2cb] text-[#001417] font-bold border-[#00c2cb]",
    btnStyle: "bg-[#00171b] text-[#00f5ff] border-2 border-[#00f5ff] hover:bg-[#00f5ff] hover:text-[#001417] shadow-[0_0_25px_rgba(0,245,255,0.4)]",
    cardBg: "bg-[#01252d]",
    cardBorder: "border-[#00f5ff]/20",
    surfaceSubtle: "bg-[#00181e]",
    pillBadgeBg: "bg-[#00c2cb]",
    pillBadgeText: "text-[#001417]",
    whatItCovers: [
      "Spot syntax and logical errors under strict timer constraints",
      "Find flaws in algorithms, recursion depths, and data structures",
      "Trace bugs to their exact root cause using stack traces",
      "Edge cases, memory leaks, and concurrency hazards",
      "Open to students in CSE, IT, AI-DS and allied branches",
    ],
    guide: {
      subtitle:
        "Comprehensive one-page competition guide for participants and organizing team.",
      syllabus: [
        "Syntax and typing errors in C++, Python, Java & JS",
        "Logical errors and subtle off-by-one boundary bugs",
        "Algorithmic flaws, time-limit-exceeded traps and recursion depth",
        "Structural failures, race conditions and memory hazards",
        "Fast code reading, static analysis and debugging techniques",
        "Core Computer Science and Data Structures fundamentals",
      ],
      studentGains: [
        "Debug complex existing systems instead of only writing from scratch.",
        "Trace errors methodically from symptoms to root causes.",
        "Sharpen structured problem-solving under strict time constraints.",
        "Drastically improve code reading, logic analysis and interview readiness.",
      ],
      eventFlow: [
        "Round Briefing & Contest Rules Orientation (20 mins)",
        "Round 1: Rapid-fire Syntax & Basic Glitches (45 mins)",
        "Round 2: Logic & Algorithmic Traps (60 mins)",
        "Lunch Break & Mid-point Leaderboard Reveal (45 mins)",
        "Round 3: Advanced Structural & Architecture Failures (60 mins)",
        "Final Evaluation, Winner Felicitation & Prizes (30 mins)",
      ],
      participantNote:
        "Participants must bring their own laptops. The event is hosted in the Seminar Hall.",
    },
  },
  {
    slug: "the-data-hunt",
    number: "04",
    title: "The Data Hunt",
    shortTitle: "Data Hunt",
    tagline: "DECODE. ANALYZE. BUILD.",
    subtitle:
      "A hands-on data analysis and application-building challenge where participants uncover insights hidden inside a real-world dataset.",
    day: "Thursday",
    date: "October 8, 2026",
    dateBadge: "8th Oct",
    time: "10:00 AM – 3:30 PM",
    venue: "Seminar Hall",
    mode: "In-Person Data Challenge",
    format: "Data Analysis & Application-Building Challenge",
    type: "competition",
    price: "₹50",
    partner: "Nostocx",
    leads: "Zenna, Gargi, Rudra & Swaleha",
    queryContacts: [
      { name: "Zenna", role: "Event Lead", phone: "+91 88504 82482" },
      { name: "Gargi", role: "Event Lead", phone: "+91 77458 42287" },
      { name: "Rudra", role: "Event Lead", phone: "+91 84339 75103" },
      { name: "Swaleha", role: "Event Lead", phone: "+91 98194 60017" },
    ],
    team: "Codecell Data Wing",
    capacity: "~60 Participants",
    laptopRequirement: "Required — with active browser and Python/Node/Data tooling",
    certificate: "Yes — Official Nostocx & RGIT Codecell Certificate",
    duration: "Full-Day Challenge",
    purpose:
      "A hands-on data analysis and application-building challenge where participants uncover insights hidden inside a real-world dataset.",
    keyTakeaway: "Turn messy raw data into powerful algorithms, predictive signals, and working builds.",
    coreQuestion: "Can you decode complex real-world data and build solutions that matter?",
    journeySteps: ["Ingest Dataset", "Decode Patterns", "Run Analytics", "Build Solution"],
    glyph: ".analyze & build()",
    themeKey: "charcoal",
    bgDark: "#061017",
    toneGradient: "from-[#0c2331] via-[#091924] to-[#050f16]",
    accentColor: "text-[#38bdf8]",
    glowColor: "rgba(56, 189, 248, 0.45)",
    borderColor: "border-[#38bdf8]/35",
    badgeBg: "bg-[#0369a1]/20 text-[#7dd3fc] border-[#0284c7]/40",
    btnStyle: "bg-[#001720] text-[#38bdf8] border-2 border-[#38bdf8] hover:bg-[#38bdf8] hover:text-[#061017] shadow-[0_0_25px_rgba(56,189,248,0.4)]",
    cardBg: "bg-[#0c1f2b]",
    cardBorder: "border-[#38bdf8]/20",
    surfaceSubtle: "bg-[#071520]",
    pillBadgeBg: "bg-[#38bdf8]",
    pillBadgeText: "text-[#061017]",
    whatItCovers: [
      "Decode hidden patterns inside real-world unstructured datasets",
      "Run exploratory data analysis, visualizations and feature extraction",
      "Build interactive dashboard prototypes and data-driven solutions",
      "Utilize modern data platforms, APIs and analytics tools",
      "Present actionable insights to judges on a live leaderboard",
    ],
    guide: {
      subtitle:
        "Comprehensive one-page data challenge guide for participants and organizing team.",
      syllabus: [
        "Data ingestion, cleaning, normalization and EDA",
        "Feature engineering and signal detection in noisy datasets",
        "Predictive modeling and analytical heuristics",
        "Rapid application building to display data insights",
        "Presentation of technical findings and metrics evaluation",
      ],
      studentGains: [
        "Work on real-world datasets rather than toy synthetic examples.",
        "Move end-to-end from raw data to a deployed interactive build.",
        "Collaborate in a competitive environment simulating real industry workflows.",
        "Earn official co-branded certificates and cash awards.",
      ],
      eventFlow: [
        "Dataset Release & Problem Statement Briefing (30 mins)",
        "Phase 1: Exploratory Analysis & Pattern Hunting (90 mins)",
        "Lunch & Mid-day Dataset Evolution / Catalyst (45 mins)",
        "Phase 2: Solution Architecture & Application Build (90 mins)",
        "Final Demos, Leaderboard Evaluation & Felicitation (30 mins)",
      ],
      participantNote:
        "Bring your laptop with your preferred data stack installed (Python/Pandas/Jupyter or JavaScript/Node). Held in the Seminar Hall.",
    },
  },
  {
    slug: "dsa-verse",
    number: "05",
    title: "DSA Verse",
    shortTitle: "DSA Verse",
    tagline: "Learn, solve, and master Data Structures & Algorithms · #ANTICIPATE",
    subtitle:
      "The flagship competitive programming challenge — 5 algorithmic problems in 2 hours on CodeChef testing computational thinking, optimization and speed.",
    day: "Friday",
    date: "October 9, 2026",
    dateBadge: "9th Oct",
    time: "12:00 PM – 2:00 PM",
    venue: "Online via CodeChef",
    mode: "Online Individual Contest",
    format: "Solo Competitive Programming Contest",
    type: "competition",
    partner: "CodeChef",
    partnerUrl: "https://codechef.com",
    price: "₹60",
    leads: "Bhumi, Ananya, Yashika & Shobhan",
    queryContacts: [
      { name: "Bhumi", role: "Event Lead", phone: "+91 85918 09908" },
      { name: "Ananya", role: "Event Lead", phone: "+91 90299 02090" },
      { name: "Yashika", role: "Event Lead", phone: "+91 81045 31435" },
      { name: "Shobhan", role: "Event Lead", phone: "+91 88289 14940" },
    ],
    team: "CP Wing — RGIT Codecell",
    capacity: "Open to students across all colleges nationally",
    laptopRequirement: "Required — Laptop/Desktop with internet access",
    certificate: "Yes — Official CodeChef Contest Certificate",
    duration: "2 Hours Solo",
    challenge: "5 Algorithmic Problems (Easy → Medium → Hard)",
    purpose:
      "A 5-question DSA contest benchmarked on CodeChef that tests algorithmic problem solving, time-space efficiency, and speed under pressure.",
    keyTakeaway: "Everything you've learned through the week. Now put it to the test.",
    coreQuestion: "Can you solve under pressure and claim the top spot on the leaderboard?",
    coreMeta: "5 Problems · 2 Hours · Easy → Hard · CodeChef Platform",
    glyph: ".code()",
    themeKey: "orange",
    bgDark: "#160600",
    toneGradient: "from-[#3a1300] via-[#260c00] to-[#150500]",
    accentColor: "text-[#ff7800]",
    glowColor: "rgba(255, 120, 0, 0.55)",
    borderColor: "border-[#ff6b00]/40",
    badgeBg: "bg-[#ea580c] text-white font-bold border-[#ff7800]",
    btnStyle: "bg-[#ff6b00] text-white font-black hover:bg-[#ea580c] shadow-[0_0_30px_rgba(255,107,0,0.55)]",
    cardBg: "bg-[#270d01]",
    cardBorder: "border-[#ff6b00]/25",
    surfaceSubtle: "bg-[#1c0800]",
    pillBadgeBg: "bg-[#ff6b00]",
    pillBadgeText: "text-white",
    whatItCovers: [
      "Learn, solve, and master Data Structures & Algorithms",
      "Arrays, strings, sliding window, and two-pointer optimizations",
      "Trees, graphs, and shortest path graph algorithms",
      "Dynamic programming, memoization, and greedy heuristics",
      "National benchmark on the official CodeChef platform",
    ],
    guide: {
      subtitle:
        "Comprehensive one-page contest guide for participants and organizing team.",
      syllabus: [
        "Arrays, strings, math and number theory",
        "Searching, sorting and prefix sum algorithms",
        "Core data structures: hash maps, heaps, trees and graphs",
        "Algorithmic paradigms: greedy, divide & conquer, DP",
        "Strict time and space complexity constraints",
        "Clean, optimized implementation and corner-case handling",
      ],
      studentGains: [
        "Apply complex DSA concepts under real contest pressure.",
        "Evaluate and pick optimal algorithmic approaches rapidly.",
        "Sharpen coding speed, precision, and edge-case prevention.",
        "Manage time effectively across five graded problems.",
      ],
      eventFlow: [
        "Contest Portal Login & Instructions (11:45 AM)",
        "Contest Starts: 5 Coding Problems Live (12:00 PM)",
        "Live Submissions, Penalty Time & Dynamic Leaderboard",
        "Contest Concludes & Submissions Locked (02:00 PM)",
        "Plagiarism Check, Leaderboard Finalization & Winner Announcement",
      ],
      participantNote:
        "Individual online contest hosted on CodeChef. Participants will receive contest links upon confirmed registration.",
    },
  },
];

export const PRIZE_TIERS = [
  {
    place: "1st Place",
    amount: "₹5,000",
    tier: "Gold",
    color: "#d9b451",
    bgColor: "from-amber-500/20 to-yellow-600/10",
    borderColor: "border-amber-400/50",
    glowColor: "shadow-amber-500/20",
    width: "100%",
  },
  {
    place: "2nd Place",
    amount: "₹3,000",
    tier: "Silver",
    color: "#c2ccdb",
    bgColor: "from-slate-400/20 to-slate-600/10",
    borderColor: "border-slate-300/40",
    glowColor: "shadow-slate-400/20",
    width: "70%",
  },
  {
    place: "3rd Place",
    amount: "₹2,000",
    tier: "Bronze",
    color: "#b4794a",
    bgColor: "from-orange-700/20 to-amber-900/10",
    borderColor: "border-orange-500/40",
    glowColor: "shadow-orange-600/20",
    width: "50%",
  },
];

export const ENGINEERING_MOTIONS = [
  {
    glyph: ".build()",
    title: "Build",
    tagline: "Ship from Zero",
    description:
      "Turn conceptual ideas into practical, functioning software with modern AI workflows and tools.",
    gradient: "from-teal-500/20 to-emerald-600/10",
    border: "border-teal-500/30",
    textColor: "text-teal-400",
  },
  {
    glyph: ".understand()",
    title: "Break",
    tagline: "Reverse Engineer",
    description:
      "Tear down existing architectures, inspect bundled assets, and discover how software really works.",
    gradient: "from-blue-600/20 to-sky-600/10",
    border: "border-blue-500/30",
    textColor: "text-sky-400",
  },
  {
    glyph: ".debug()",
    title: "Debug",
    tagline: "Fix the Impossible",
    description:
      "Diagnose hidden faults, track memory/logic traps, and restore broken code under intense pressure.",
    gradient: "from-cyan-500/20 to-teal-600/10",
    border: "border-cyan-500/30",
    textColor: "text-cyan-400",
  },
  {
    glyph: ".code()",
    title: "Ship",
    tagline: "Compete & Triumph",
    description:
      "Synthesize your full technical toolkit in algorithmic battles and high-frequency market simulations.",
    gradient: "from-orange-500/20 to-amber-600/10",
    border: "border-orange-500/30",
    textColor: "text-orange-400",
  },
];

export const FAQS = [
  {
    question: "What is CoderTine 7.0?",
    answer:
      "CoderTine 7.0 is the premier 5-day hands-on technical festival organized collaboratively by RGIT Codecell and RGIT CESS. Taking place from October 5th to October 9th, 2026, it covers AI development, reverse engineering, competitive debugging, data analysis challenge, and competitive programming.",
  },
  {
    question: "Are the workshops free to attend?",
    answer:
      "Yes! Both the 'AI Build Lab' (Oct 5) and the 'Reverse Engineering Workshop' (Oct 6) are 100% free and open to all students across all years and departments.",
  },
  {
    question: "Do I need to be an expert in DSA or coding to participate?",
    answer:
      "Not at all! CoderTine 7.0 is designed as a progressive learning arc. Beginners will learn practical skills in the workshops and can test their mettle in progressive difficulty tiers during competitions.",
  },
  {
    question: "Do I need to bring my own laptop?",
    answer:
      "Yes, laptops are strongly recommended for the AI Build Lab, Debug the Bug, and The Data Hunt. For the Reverse Engineering Workshop, laptops are optional as live teardowns are projected. For DSA Verse, the contest is held online via CodeChef.",
  },
  {
    question: "Will I get a certificate?",
    answer:
      "Yes! All registered participants will receive official participation certificates co-issued by RGIT Codecell, RGIT CESS, and platform partners (CodeChef, Nostocx). Winners will receive special Merit Certificates and cash awards.",
  },
  {
    question: "Can students from other colleges participate?",
    answer:
      "Yes! The flagship online contest 'DSA Verse' on CodeChef is open nationally to undergraduate students from all engineering colleges. In-person workshops and competitions at the RGIT campus are open to all registered collegiate students.",
  },
];

export function getCodertineModuleBySlug(slug: string): CodertineModule | undefined {
  const normalized = slug.toLowerCase().trim();
  const legacyAliases: Record<string, string> = {
    codetrade: "the-data-hunt",
    codertrine: "dsa-verse",
  };
  const resolvedSlug = legacyAliases[normalized] ?? normalized;
  return CODERTINE_MODULES.find((m) => m.slug === resolvedSlug);
}
