"use client";
import React from "react";

export default function RainOverlay() {
  const [rainStyles, setRainStyles] = React.useState<React.CSSProperties[]>([]);

  React.useEffect(() => {
    // Generate 40 fixed drops to simulate active rain
    const styles = Array.from({ length: 40 }).map(() => ({
      left: `${Math.random() * 100}%`,
      animationDuration: `${0.4 + Math.random() * 0.4}s`,
      animationDelay: `${Math.random() * 2}s`,
      opacity: 0.2 + Math.random() * 0.3,
    }));
    setRainStyles(styles);
  }, []);

  if (rainStyles.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
      {rainStyles.map((style, i) => (
        <div
          key={i}
          className="absolute top-0 w-[1px] h-24 bg-gradient-to-b from-transparent via-white to-transparent animate-rain"
          style={style}
        />
      ))}
    </div>
  );
}
