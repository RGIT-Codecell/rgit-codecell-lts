import { useEffect, useRef, useState } from "react";
import { scrollToId } from "../lib/motion";
import "./ChapterNav.css";

type Section = { id: string; label: string };

type Props = { sections: Section[] };

export default function ChapterNav({ sections }: Props) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");
  const frame = useRef(0);

  useEffect(() => {
    const compute = () => {
      const probe = window.innerHeight * 0.4;
      let current = sections[0]?.id ?? "";
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= probe) {
          current = section.id;
        }
      }
      setActiveId(current);
    };

    const onScroll = () => {
      if (frame.current) return;
      frame.current = requestAnimationFrame(() => {
        frame.current = 0;
        compute();
      });
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [sections]);

  if (sections.length === 0) return null;

  return (
    <nav className="chapter-nav" aria-label="Reserve page sections">
      <ol>
        {sections.map((section) => (
          <li key={section.id}>
            <button
              type="button"
              className="chapter-nav__dot"
              aria-label={`Go to ${section.label}`}
              aria-current={activeId === section.id ? "true" : undefined}
              onClick={() => scrollToId(section.id)}
            >
              <span className="chapter-nav__label">{section.label}</span>
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
}