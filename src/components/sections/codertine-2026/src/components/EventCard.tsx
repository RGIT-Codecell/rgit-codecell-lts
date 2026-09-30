import { moduleShortTitle, type Module } from "../data/modules";

type Props = {
  module: Module;
  index: number;
};

export default function EventCard({ module, index }: Props) {
  const slug = module.interestId;
  const tone = index + 1;

  return (
    <div className={`module-card module-card--tone-${tone}`}>
      <div className="module-card__top">
        <span className="module-card__num" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="module-card__glyph" aria-hidden="true">
          {module.glyph}
        </span>
      </div>

      <h3>{moduleShortTitle(module)}</h3>
      <div className="module-card__tagline">{module.tagline}</div>

      <div className="module-subtitle" aria-label={module.date}>
        <span className="module-subtitle__part">{module.date}</span>
      </div>

      {module.status && <div className="status">{module.status}</div>}

      <p className="module-description">{module.description}</p>

      <div className="module-actions">
        <a className="module-button" href={`#/events/${slug}`}>
          View Event Details
        </a>
        <a
          className="module-button module-button--ghost"
          href={`#/events/${slug}/guide`}
        >
          View Guide
        </a>
      </div>
    </div>
  );
}