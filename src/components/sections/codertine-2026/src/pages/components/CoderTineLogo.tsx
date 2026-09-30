import { useId } from "react";
import "./CodeTrineLogo.css";

type Props = {
  compact?: boolean;
  className?: string;
};

export default function CoderTineLogo({
  compact = false,
  className = "",
}: Props) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const shadowId = `${uid}-shadow`;
  const bloomId = `${uid}-bloom`;

  const classes = ["ct-logo", compact ? "ct-logo--compact" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <svg
      className={classes}
      viewBox="0 0 760 160"
      role="img"
      aria-label="CoderTine 7.0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id={bloomId} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
        <filter
          id={shadowId}
          x="-30%"
          y="-40%"
          width="160%"
          height="200%"
        >
          <feDropShadow
            dx="0"
            dy="3"
            stdDeviation="2"
            floodColor="#000000"
            floodOpacity="0.55"
          />
          <feDropShadow
            dx="0"
            dy="9"
            stdDeviation="9"
            floodColor="#000000"
            floodOpacity="0.45"
          />
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="18"
            floodColor="#1d4ed8"
            floodOpacity="0.3"
          />
        </filter>
      </defs>

      <text
        className="ct-logo__bloom"
        x="380"
        y="124"
        textAnchor="middle"
        fontFamily="Lobster, 'Brush Script MT', cursive"
        fontSize="108"
        fill="#3d8bff"
        opacity="0.45"
        filter={`url(#${bloomId})`}
      >
        CoderTine 7.0
      </text>

      <g filter={`url(#${shadowId})`}>
        <text
          x="380"
          y="131"
          textAnchor="middle"
          fontFamily="Lobster, 'Brush Script MT', cursive"
          fontSize="108"
          fill="#0a1b45"
        >
          CoderTine 7.0
        </text>
        <text
          x="380"
          y="124"
          textAnchor="middle"
          fontFamily="Lobster, 'Brush Script MT', cursive"
          fontSize="108"
          fill="#7fb2ff"
          stroke="#3d8bff"
          strokeWidth="1.6"
          paintOrder="stroke"
          strokeLinejoin="round"
          strokeLinecap="round"
        >
          CoderTine 7.0
        </text>
      </g>

      <path
        d="M78 128 C 200 146, 330 124, 470 134 C 532 139, 566 133, 588 124 C 596 120, 599 116, 596 112"
        fill="none"
        stroke="#3d8bff"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.85"
        transform="translate(-63 0) scale(1.33 1)"
      />
      <circle cx="41" cy="128" r="3.5" fill="#3d8bff" opacity="0.9" />
      <circle cx="629" cy="150" r="2.6" fill="#1d4ed8" opacity="0.7" />
    </svg>
  );
}
