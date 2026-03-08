import React, { useRef } from "react";
import { cn } from "@/lib/utils";

export const GlareCard = ({
  children,
  className,
  glareColor = "rgba(255, 255, 255, 0.1)", // Default glare is a subtle white
}: {
  children: React.ReactNode;
  className?: string;
  glareColor?: string;
}) => {
  const refElement = useRef<HTMLDivElement>(null);

  const containerStyle = {
    "--glare-color": glareColor,
    "--r-x": "0deg",
    "--r-y": "0deg",
    "--m-x": "50%",
    "--m-y": "50%",
    "--duration": "300ms",
    "--easing": "ease",
  } as React.CSSProperties;

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const percentage = {
      x: (100 / rect.width) * (event.clientX - rect.left),
      y: (100 / rect.height) * (event.clientY - rect.top),
    };
    const delta = {
      x: percentage.x - 50,
      y: percentage.y - 50,
    };
    const rotate = {
      x: delta.y / 2,
      y: -delta.x / 4,
    };

    if (refElement.current) {
      refElement.current.style.setProperty("--m-x", `${percentage.x}%`);
      refElement.current.style.setProperty("--m-y", `${percentage.y}%`);
      refElement.current.style.setProperty("--r-x", `${rotate.x}deg`);
      refElement.current.style.setProperty("--r-y", `${rotate.y}deg`);
    }
  };

  const handlePointerEnter = () => {
    if (refElement.current) {
      refElement.current.style.setProperty("--duration", "0s");
    }
  };

  const handlePointerLeave = () => {
    if (refElement.current) {
      refElement.current.style.removeProperty("--duration");
      refElement.current.style.setProperty("--m-x", `50%`);
      refElement.current.style.setProperty("--m-y", `50%`);
      refElement.current.style.setProperty("--r-x", `0deg`);
      refElement.current.style.setProperty("--r-y", `0deg`);
    }
  };

  return (
    <div
      style={containerStyle}
      ref={refElement}
      className={cn(
        "group relative w-[320px] [aspect-ratio:17/21] rounded-2xl [perspective:800px] transition-transform duration-[var(--duration)] ease-[var(--easing)]",
        className
      )}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <div className="h-full w-full grid origin-center transition-transform duration-[var(--duration)] ease-[var(--easing)] [transform:rotateY(var(--r-y))_rotateX(var(--r-x))]">
        {/* Layer 1: Black Background */}
        <div className="absolute inset-0 rounded-3xl bg-black" />

        {/* Layer 2: The Glare Effect */}
        <div className="absolute inset-0 pointer-events-none rounded-3xl [background:radial-gradient(circle_farthest-corner_at_var(--m-x)_var(--m-y),var(--glare-color)_0%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Layer 3: Subtle Inner Border */}
        <div className="absolute inset-0 rounded-3xl border border-white/10" />

        {/* Layer 4: Your Content */}
        <div className="relative z-10 h-full w-full flex flex-col items-center justify-center p-4 lg:p-8">
            {children}
        </div>
      </div>
    </div>
  );
};