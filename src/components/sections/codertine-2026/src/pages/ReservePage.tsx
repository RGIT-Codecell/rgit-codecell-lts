import ChapterNav from "../components/ChapterNav";
import CoderTineLogo from "../components/CoderTineLogo";
import ScrollReveal from "../components/ScrollReveal";
import {
  moduleShortTitle,
  modules,
} from "../data/modules";
import "./ReservePage.css";

const SECTIONS = [
  { id: "reserve-intro", label: "Intro" },
  ...modules.map((module) => ({
    id: `module-${module.interestId}`,
    label: moduleShortTitle(module),
  })),
  { id: "reserve-why", label: "Why Join" },
];

const MOTIONS = [
  {
    glyph: ".build()",
    title: "Build",
    body: "Create and ship something practical — turn an idea into a working prototype you can actually use.",
  },
  {
    glyph: ".understand()",
    title: "Break",
    body: "Understand how existing systems work by inspecting them and taking them apart.",
  },
  {
    glyph: ".debug()",
    title: "Debug",
    body: "Find problems, trace faults, and turn broken code into working solutions.",
  },
  {
    glyph: ".code()",
    title: "Ship",
    body: "Collaborate, exchange ideas, and complete the arc together.",
  },
];

const REASONS = [
  {
    title: "Learning by doing",
    body: "You will write, run and debug real code every single day — not just follow along.",
  },
  {
    title: "A safe place to break things",
    body: "Every failure is a lesson. CoderTine 7.0 is designed around experimentation.",
  },
  {
    title: "Collaboration at the core",
    body: "Exchange solutions, trade approaches, and grow with people who care about code.",
  },
  {
    title: "A finish line to aim for",
    body: "The arc closes with a grand finale challenge that ties everything together.",
  },
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function ReservePage() {
  return (
    <div className="reserve-page">
      <ChapterNav sections={SECTIONS} />

      <section className="reserve-chapter reserve-intro" id="reserve-intro">
        <span className="reserve-chapter__index" aria-hidden="true">
          01
        </span>

        <div className="reserve-intro__inner">
          <ScrollReveal>
            <div className="reserve-intro__brand">
              <CoderTineLogo compact />
              <a className="reserve-back" href="#/">
                ← Back to CoderTine 7.0
              </a>
            </div>
            <div className="roadmap-kicker reserve-intro__kicker">
              // RESERVE YOUR SPOT
            </div>
            <h1>Your CoderTine 7.0 journey starts here.</h1>
            <p className="reserve-intro__lead">
              CoderTine 7.0 is a hands-on coding experience that takes you through
              building, breaking, debugging and shipping real software — over
              five days, across five modules, with people who care about code.
            </p>
          </ScrollReveal>

          <div className="reserve-intro__grid">
            <ScrollReveal delay={90}>
              <div className="reserve-intro__copy">
                <p>
                  This is not a series of lectures. You will create something
                  practical, take existing systems apart to understand how they
                  work, hunt down bugs, and trade solutions with other
                  participants — then bring it all together in a final
                  challenge.
                </p>
                <p>
                  Scroll through this page to walk the arc before you reserve
                  your place.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={180}>
              <div
                className="terminal"
                role="img"
                aria-label="CoderTine 7.0 status preview"
              >
                <div className="terminal__bar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="terminal__body">
                  <div className="terminal__line">
                    <span className="terminal__prompt">$</span> codertine
                    --join
                  </div>
                  <div className="terminal__line">
                    ✓ bootstrapping your arc…
                  </div>
                  <div className="terminal__line">
                    ✓ loading module 01 — build
                  </div>
                  <div className="terminal__line">
                    ✓ loading module 02 — break
                  </div>
                  <div className="terminal__line">
                    ✓ loading module 03 — debug
                  </div>
                  <div className="terminal__line">
                    ✓ loading module 04 — trade
                  </div>
                  <div className="terminal__line">
                    ✓ finally, the grand finale…
                  </div>
                  <div className="terminal__line">
                    <span className="terminal__prompt">$</span>{" "}
                    ready_for_ship()<span className="terminal__cursor" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <p className="reserve-intro__scroll">
            SCROLL TO BEGIN THE ARC
            <span className="reserve-intro__chevron" aria-hidden="true">
              ↓
            </span>
          </p>
        </div>
      </section>

      <section className="reserve-chapter" id="reserve-motions">
        <span className="reserve-chapter__index" aria-hidden="true">
          02
        </span>

        <div className="reserve-heading">
          <ScrollReveal>
            <div className="roadmap-kicker">// THE EXPERIENCE</div>
            <h2>A week of doing, not watching.</h2>
            <p>
              Four motions run through every part of CoderTine 7.0 — from your
              first build to the final ship. You will move through them again
              and again until they feel second nature.
            </p>
          </ScrollReveal>
        </div>

        <div className="motion-grid">
          {MOTIONS.map((motion, index) => (
            <ScrollReveal key={motion.title} delay={index * 90}>
              <article className="motion-card">
                <div className="motion-card__glyph">{motion.glyph}</div>
                <h3>{motion.title}</h3>
                <p>{motion.body}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {modules.map((module, index) => (
        <section
          className="reserve-chapter reserve-module"
          id={`module-${module.interestId}`}
          key={module.interestId}
        >
          <span className="reserve-chapter__index" aria-hidden="true">
            {String(index + 3).padStart(2, "0")}
          </span>

          <div className="reserve-heading">
            <ScrollReveal>
              <div className="roadmap-kicker">
                // MODULE {String(index + 1).padStart(2, "0")}
              </div>

              <div className="module-detail">
                <div className="module-detail__glyph" aria-hidden="true">
                  {module.glyph}
                </div>
                <h2>{moduleShortTitle(module)}</h2>
                <div className="module-detail__tagline">{module.tagline}</div>

                {module.status && <div className="status">{module.status}</div>}

                <p className="module-detail__desc">{module.description}</p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      <section className="reserve-chapter" id="reserve-why">
        <span className="reserve-chapter__index" aria-hidden="true">
          {String(modules.length + 3).padStart(2, "0")}
        </span>

        <div className="reserve-heading">
          <ScrollReveal>
            <div className="roadmap-kicker">// THE WHY</div>
            <h2>Why join the arc?</h2>
            <p>
              CoderTine 7.0 is built for people who want to get their hands dirty —
              not for passive spectators.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={120}>
          <div className="reserve-why__card">
            <ul className="reserve-why__list">
              {REASONS.map((reason) => (
                <li className="reserve-why__item" key={reason.title}>
                  <CheckIcon />
                  <div>
                    <strong>{reason.title}</strong>
                    {reason.body}
                  </div>
                </li>
              ))}
            </ul>

            <div className="reserve-why__dates">
              <strong>5 – 9 October</strong> across campus. The arc runs across
              the week — join a single module or the full journey.
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}