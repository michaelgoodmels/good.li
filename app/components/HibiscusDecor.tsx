import type { CSSProperties } from "react";

// Hibiscus petal (pointing upward from centre 80,80)
const PETAL = "M 80,80 C 58,70 48,40 67,18 C 72,10 80,7 88,12 C 98,18 112,42 80,80 Z";
// Central vein running up the petal
const VEIN  = "M 80,78 C 80,65 79,50 79,27";

function Hibiscus({
  color,
  size,
  filterId,
  style,
}: {
  color: string;
  size: number;
  filterId: string;
  style: CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      style={{ ...style, position: "fixed", pointerEvents: "none" }}
      aria-hidden="true"
    >
      <defs>
        {/* Subtle turbulence displacement for a pencil-sketch feel */}
        <filter id={filterId} x="-15%" y="-15%" width="130%" height="130%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.04"
            numOctaves="3"
            seed="5"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="1.8"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>

      <g filter={`url(#${filterId})`}>
        {/* 5 petals at 72° intervals */}
        {[0, 72, 144, 216, 288].map((r) => (
          <g key={r} transform={`rotate(${r}, 80, 80)`}>
            <path
              d={PETAL}
              fill="none"
              stroke={color}
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Central vein */}
            <path
              d={VEIN}
              fill="none"
              stroke={color}
              strokeWidth="0.7"
              strokeLinecap="round"
              opacity={0.6}
            />
          </g>
        ))}

        {/* Stamen column */}
        <line
          x1="80" y1="80" x2="80" y2="50"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        {/* Anthers */}
        <circle cx="77" cy="48" r="2"   fill={color} />
        <circle cx="80" cy="46" r="2.2" fill={color} />
        <circle cx="83" cy="48" r="2"   fill={color} />
      </g>
    </svg>
  );
}

export default function HibiscusDecor() {
  return (
    <>
      {/* Flower 1 – lightest blue, bottom-right */}
      <Hibiscus
        filterId="hib-1"
        color="#b8dff0"
        size={172}
        style={{
          bottom: "-10px",
          right: "-10px",
          opacity: 0.6,
          zIndex: 20,
          transform: "rotate(-15deg)",
        }}
      />
      {/* Flower 2 – medium blue, bottom-left */}
      <Hibiscus
        filterId="hib-2"
        color="#3db0e2"
        size={154}
        style={{
          bottom: "60px",
          left: "-12px",
          opacity: 0.52,
          zIndex: 20,
          transform: "rotate(22deg)",
        }}
      />
      {/* Flower 3 – saturated blue, upper-right */}
      <Hibiscus
        filterId="hib-3"
        color="#1478c0"
        size={138}
        style={{
          top: "100px",
          right: "20px",
          opacity: 0.4,
          zIndex: 20,
          transform: "rotate(38deg)",
        }}
      />
    </>
  );
}
