import ScrollReveal from "../components/ScrollReveal";
import { getEventDetail } from "../data/eventDetails";
import "./EventGuidePage.css";

type Props = {
  eventId: string;
};

export default function EventGuidePage({ eventId }: Props) {
  const event = getEventDetail(eventId);

  if (!event) {
    return (
      <div className="guide-page">
        <section className="guide-hero">
          <div className="guide-hero__inner">
            <div className="guide-hero__top">
              <a className="reserve-back" href="#/">
                ← Back to CoderTine
              </a>
            </div>
            <div className="roadmap-kicker">// GUIDE NOT FOUND</div>
            <h1>This event’s guide doesn’t exist yet.</h1>
            <p>
              Head back to the CoderTine 7.0 roadmap and explore the modules
              that are live.
            </p>
            <a className="module-button" href="#/">
              Explore the Arc
            </a>
          </div>
        </section>
      </div>
    );
  }

  const guide = event.guide;

  return (
    <div className="guide-page">
      <section className="guide-hero">
        <div className="guide-hero__inner">
          <ScrollReveal>
            <div className="guide-hero__top">
              <a className="reserve-back" href={`#/events/${event.slug}`}>
                ← Back to Event Details
              </a>
            </div>
            <div className="guide-hero__meta">
              {event.day.toUpperCase()} | {event.date.toUpperCase()}
            </div>
            <h1>
              {event.title}
              <span className="guide-hero__title-suffix"> — Guide</span>
            </h1>
            <p className="guide-hero__tagline">{guide.subtitle}</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="event-divider" aria-hidden="true" />

      <section className="guide-section">
        <div className="guide-grid">
          <ScrollReveal>
            <div className="guide-card">
              <div className="roadmap-kicker">// Syllabus</div>
              <ul className="guide-card__list">
                {guide.syllabus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={90}>
            <div className="guide-card">
              <div className="roadmap-kicker">// What Students Gain</div>
              <ul className="guide-card__list">
                {guide.studentGains.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="guide-section">
        <ScrollReveal>
          <div className="guide-card">
            <div className="roadmap-kicker">// Suggested Event Flow</div>
            <div className="guide-flow">
              {guide.eventFlow.map((step, index) => (
                <div className="guide-flow__row" key={step}>
                  <span className="guide-flow__num" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="guide-flow__label">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="guide-section">
        <ScrollReveal>
          <div className="guide-note">
            <div className="roadmap-kicker">// Participant Note</div>
            <p className="guide-note__body">{guide.participantNote}</p>
          </div>
        </ScrollReveal>
      </section>

      <div className="guide-footer">
        <a className="module-button" href={`#/events/${event.slug}`}>
          View Event Details
        </a>
        <a className="reserve-back" href={`#/events/${event.slug}`}>
          ← Back to Event Details
        </a>
      </div>
    </div>
  );
}