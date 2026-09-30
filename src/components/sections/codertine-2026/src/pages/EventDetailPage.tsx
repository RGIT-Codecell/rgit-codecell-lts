import ScrollReveal from "../components/ScrollReveal";
import { getEventDetail } from "../data/eventDetails";
import "./EventDetailPage.css";

/** Opens the shared registration form in a new tab from every event page. */
const REGISTRATION_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd4zNSflWRYTtaSMug4V5MiBrkLB2YNEAerJ8mJ0GuJUHkMgQ/viewform?usp=header";

type Props = {
  eventId: string;
};

export default function EventDetailPage({ eventId }: Props) {
  const event = getEventDetail(eventId);

  if (!event) {
    return (
      <div className="event-page">
        <section className="event-hero event-hero--missing">
          <div className="event-hero__inner">
            <a className="reserve-back" href="#/">
              ← Back to CoderTine
            </a>
            <div className="roadmap-kicker">// EVENT NOT FOUND</div>
            <h1>This event doesn’t exist yet.</h1>
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

  const infoGrid = [
    { label: "Time", value: event.time },
    ...(event.venue
      ? [{ label: "Venue", value: event.venue }]
      : event.mode
        ? [{ label: "Mode", value: event.mode }]
        : []),
    { label: "Format", value: event.format },
    ...(event.partner ? [{ label: "Partner", value: event.partner }] : []),
    ...(event.expected ? [{ label: "Expected", value: event.expected }] : []),
    ...(event.duration ? [{ label: "Duration", value: event.duration }] : []),
    ...(event.challenge
      ? [{ label: "Challenge", value: event.challenge }]
      : []),
    ...(event.speaker
      ? [{ label: event.speakerLabel ?? "Speaker", value: event.speaker }]
      : []),
    ...(event.registration
      ? [{ label: "Registration", value: event.registration }]
      : []),
    { label: "Certificate", value: event.certificate },
  ];

  return (
    <div className="event-page">
      <section className="event-hero">
        <div className="event-hero__inner">
          <ScrollReveal>
            <div className="event-hero__top">
              <a className="reserve-back" href="#/">
                ← Back to CoderTine
              </a>
            </div>
            <div className="roadmap-kicker event-hero__kicker">
              {event.day.toUpperCase()} | {event.date.toUpperCase()}
            </div>
            <h1>{event.title}</h1>
            <p className="event-hero__tagline">{event.tagline}</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="event-divider" aria-hidden="true" />

      <section className="event-section">
        <div className="event-info-grid">
          {infoGrid.map((item, index) => (
            <ScrollReveal key={item.label} delay={(index % 3) * 70}>
              <div className="event-info-card">
                <span className="event-info-card__label">{item.label}</span>
                <strong className="event-info-card__value">{item.value}</strong>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="event-section">
        <div className="event-split">
          <ScrollReveal>
            <div className="event-block">
              <div className="roadmap-kicker">// PEOPLE &amp; TEAM</div>
              <ul className="event-list">
                {event.peopleAndTeam.map((item) => (
                  <li className="event-list__item" key={item.label}>
                    <span className="event-list__label">{item.label}</span>
                    <span className="event-list__value">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={90}>
            <div className="event-block">
              <div className="roadmap-kicker">// WHAT IT COVERS</div>
              <ul className="event-bullets">
                {event.whatItCovers.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="event-section">
        <ScrollReveal>
          <div className="event-block event-block--wide">
            <div className="roadmap-kicker">// EVENT PURPOSE</div>
            <p className="event-purpose">{event.purpose}</p>
          </div>
        </ScrollReveal>
      </section>

      {(event.keyTakeaway || event.coreQuestion) && (
        <section className="event-section">
          <ScrollReveal>
            <div className="event-takeaway">
              {event.coreQuestion ? (
                <>
                  <div className="roadmap-kicker">// CORE QUESTION</div>
                  <p className="event-takeaway__body">{event.coreQuestion}</p>
                  {event.coreMeta && (
                    <p className="event-takeaway__core-meta">
                      {event.coreMeta}
                    </p>
                  )}
                  {event.journey && (
                    <div className="event-ladder">
                      <span className="event-ladder__label">
                        {event.journey.label}
                      </span>
                      <div className="event-ladder__steps">
                        {event.journey.steps.map((step, index) => (
                          <span className="event-ladder__step" key={step}>
                            {index > 0 && (
                              <span
                                className="event-ladder__arrow"
                                aria-hidden="true"
                              >
                                →
                              </span>
                            )}
                            <span className="event-ladder__chip">{step}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <div className="roadmap-kicker">// KEY TAKEAWAY</div>
                  <p className="event-takeaway__body">{event.keyTakeaway}</p>
                  {event.quote && (
                    <blockquote className="event-takeaway__quote">
                      “{event.quote}”
                    </blockquote>
                  )}
                </>
              )}
            </div>
          </ScrollReveal>
        </section>
      )}

      <section className="event-register">
        <a
          className="event-register__button"
          href={REGISTRATION_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Register Now
        </a>
      </section>

      <div className="event-footer">
        <a className="module-button" href={`#/events/${event.slug}/guide`}>
          View Guide
        </a>
        <a className="reserve-back" href="#/">
          ← Back to CoderTine
        </a>
      </div>
    </div>
  );
}