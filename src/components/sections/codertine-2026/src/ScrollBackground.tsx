import { useEffect, useRef } from "react";
import "./scrollBackground.css";

export default function ScrollBackground() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    let frame = 0;

    const update = () => {
      frame = 0;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;

      rootRef.current?.style.setProperty(
        "--scroll-progress",
        progress.toString()
      );
      rootRef.current?.style.setProperty("--scroll-y", `${window.scrollY}px`);
    };

    const onScroll = () => {
      if (mediaQuery.matches) return;
      if (!frame) frame = requestAnimationFrame(update);
    };

    const onResize = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const onMotionChange = () => {
      if (mediaQuery.matches && frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
      update();
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    mediaQuery.addEventListener("change", onMotionChange);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      mediaQuery.removeEventListener("change", onMotionChange);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={rootRef} className="scroll-background" aria-hidden="true">
      <div className="scroll-background__drift">
        <div className="scroll-background__glow scroll-background__glow--one" />
        <div className="scroll-background__glow scroll-background__glow--two" />
      </div>
      <div className="scroll-background__orb scroll-background__orb--one" />
      <div className="scroll-background__orb scroll-background__orb--two" />
      <div className="scroll-background__grid" />
      <div className="scroll-background__grain" />
    </div>
  );
}