import CoderTineLogo from "../components/CoderTineLogo";
import EventCard from "../components/EventCard";
import RegistrationPrizes from "../components/RegistrationPrizes";
import ScrollReveal from "../components/ScrollReveal";
import { modules } from "../data/modules";
import { scrollToId } from "../lib/motion";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">WELCOME TO</div>

          <h1 className="ct-sr-only">CoderTine 7.0</h1>
          <div className="hero-logo">
            <div className="hero-logo__halo" aria-hidden="true" />
            <CoderTineLogo />
          </div>

          <p className="hero-subtitle">
            Your journey to becoming a <strong>better developer.</strong>
          </p>

          <p className="hero-lead">
            A hands-on coding experience — five days of building, breaking,
            debugging and shipping real software, together.
          </p>

          <div className="stats">
            <div className="stat">
              <strong>{String(modules.length).padStart(2, "0")}</strong>
              <span>Modules</span>
            </div>

            <div className="stat">
              <strong>∞</strong>
              <span>Skills</span>
            </div>

            <div className="stat">
              <strong>01</strong>
              <span>Arc</span>
            </div>
          </div>

          <div className="hero-cta">
            <a className="hero-cta__primary" href="#/reserve">
              Reserve My Spot
            </a>
            <button
              className="hero-cta__ghost"
              onClick={() => scrollToId("roadmap")}
            >
              Explore the Arc
            </button>
          </div>

          <div className="scroll-text">
            SCROLL
            <span className="scroll-text__chevron" aria-hidden="true">
              ↓
            </span>
          </div>
        </div>
      </section>

      <section className="roadmap" id="roadmap">
        <ScrollReveal>
          <header className="roadmap-header">
            <div className="roadmap-kicker">// CoderTine 7.0 — THE ROADMAP</div>
            <h2>Your Journey Begins Here</h2>
            <p>
              {modules.length} modules. 1 destination. Every skill you need to
              build, solve and ship.
            </p>
          </header>
        </ScrollReveal>

        <div className="timeline">
          {modules.map((module, index) => (
            <ScrollReveal
              key={module.title}
              className={`module-row ${module.side}`}
              delay={index * 80}
            >
              <div className="timeline-dot" />
              <EventCard module={module} index={index} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <RegistrationPrizes />
    </>
  );
}