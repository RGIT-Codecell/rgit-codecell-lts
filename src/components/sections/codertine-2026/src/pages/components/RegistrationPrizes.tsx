import ScrollReveal from "./ScrollReveal";
import "./RegistrationPrizes.css";

const registrationFees = [
  ["1 Competition", "₹30"],
  ["2 Competitions", "₹50"],
  ["3 Competitions", "₹60"],
];

const competitionChoices = [
  { name: "Debug the Bug", href: "#/events/debug-the-bug" },
  { name: "The Data Hunt", href: "#/events/the-data-hunt" },
  { name: "DSA Verse", href: "#/events/dsa-verse" },
];

const prizePool = [
  { position: "1st", amount: "₹5,000", width: "100%", tier: "gold" },
  { position: "2nd", amount: "₹3,000", width: "60%", tier: "silver" },
  { position: "3rd", amount: "₹2,000", width: "40%", tier: "bronze" },
];

/* Flat metallic tones — no gradients — chosen to sit on the site's dark navy
   cards without leaving the blue-and-metal palette. */
const trophyColors: Record<string, string> = {
  gold: "#d9b451",
  silver: "#c2ccdb",
  bronze: "#b4794a",
};

function TrophyIcon({ tier }: { tier: string }) {
  const color = trophyColors[tier];
  return (
    <svg
      className={`reg-prize-bar__trophy reg-prize-bar__trophy--${tier}`}
      viewBox="0 0 24 24"
      width="26"
      height="26"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 4h10v5.5a5 5 0 0 1-10 0V4Z"
        fill={color}
        stroke={color}
        strokeWidth="1.2"
      />
      <path
        d="M7 5.5H4.6C3 5.5 3 9 4.6 9H7"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M17 5.5h2.4C21 5.5 21 9 19.4 9H17"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M12 14.5v2.5"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M9.5 20h5"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function RegistrationPrizes() {
  return (
    <section className="reg-prizes" id="registration-prizes">
      <div className="reg-prizes__inner">
        <ScrollReveal>
          <header className="reg-prizes__header">
            <div className="roadmap-kicker">// REGISTRATION & PRIZES</div>
            <h2>REGISTRATION & PRIZES</h2>
            <p>
              Workshops are free. Competitions are paid, with flexible
              multi-event registration.
            </p>
          </header>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="reg-card">
            <h3>REGISTRATION</h3>
            <div className="reg-table">
              {registrationFees.map(([label, price]) => (
                <div className="reg-row" key={label}>
                  <span className="reg-row__label">{label}</span>
                  <span className="reg-row__value">{price}</span>
                </div>
              ))}
            </div>
            <p className="reg-card__note">Prices are for competitions.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={140}>
          <div className="reg-card">
            <h3>COMPETITION CHOICES</h3>
            <div className="reg-choices">
              {competitionChoices.map((choice, index) => (
                <span className="reg-choices__item" key={choice.name}>
                  {index > 0 && (
                    <span className="reg-choices__dot" aria-hidden="true">
                      •
                    </span>
                  )}
                  <a className="reg-choices__link" href={choice.href}>
                    {choice.name}
                  </a>
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="reg-prizes__divider" aria-hidden="true" />

        <ScrollReveal delay={120}>
          <div className="reg-card">
            <h3>PRIZE POOL</h3>
            <div className="reg-prize-bars">
              {prizePool.map((prize) => (
                <div className="reg-prize-bar" key={prize.position}>
                  <TrophyIcon tier={prize.tier} />
                  <span className="reg-prize-bar__pos">{prize.position}</span>
                  <div className="reg-prize-bar__track">
                    <div
                      className={`reg-prize-bar__fill reg-prize-bar__fill--${prize.tier}`}
                      style={{ width: prize.width }}
                    />
                  </div>
                  <span className="reg-prize-bar__amount">{prize.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={180}>
          <div className="reg-highlight">
            <h3>EVERY COMPETITION</h3>
            <ul className="reg-highlight__list">
              <li>₹10,000 prize pool</li>
              <li>Certificates for all three competitions</li>
              <li>Additional goodies and vouchers may also be provided.</li>
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}