'use client';

interface Props {
  size?: number;
  className?: string;
}

export default function DasBildAnimation({ size = 72, className = '' }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      aria-label="Handgemaltes Energie-Bild"
      className={className}
      style={{ overflow: 'visible', display: 'block' }}
    >
      {/* Canvas frame */}
      <rect x="8" y="10" width="46" height="52" rx="2" fill="none" stroke="#6A0BCF" strokeWidth="1.2" strokeOpacity=".3" />
      <rect x="11" y="13" width="40" height="46" rx="1" fill="none" stroke="#6A0BCF" strokeWidth=".5" strokeOpacity=".15" />

      {/* Stroke 1 */}
      <path d="M16 48 Q22 38 32 40" fill="none" stroke="#D40000" strokeWidth="3" strokeLinecap="round" strokeDasharray="24" strokeDashoffset="24">
        <animate attributeName="stroke-dashoffset" from="24" to="0" dur="0.5s" begin="0s" fill="freeze" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" keyTimes="0;1" />
      </path>

      {/* Stroke 2 */}
      <path d="M18 34 Q28 24 38 28" fill="none" stroke="#6A0BCF" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="26" strokeDashoffset="26">
        <animate attributeName="stroke-dashoffset" from="26" to="0" dur="0.5s" begin="0.55s" fill="freeze" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" keyTimes="0;1" />
      </path>

      {/* Stroke 3 */}
      <path d="M22 55 Q30 44 44 46" fill="none" stroke="#6A0BCF" strokeWidth="2" strokeLinecap="round" strokeOpacity=".5" strokeDasharray="28" strokeDashoffset="28">
        <animate attributeName="stroke-dashoffset" from="28" to="0" dur="0.55s" begin="1.1s" fill="freeze" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" keyTimes="0;1" />
      </path>

      {/* Stroke 4 – short accent */}
      <path d="M36 20 Q40 25 42 32" fill="none" stroke="#D40000" strokeWidth="1.8" strokeLinecap="round" strokeOpacity=".6" strokeDasharray="16" strokeDashoffset="16">
        <animate attributeName="stroke-dashoffset" from="16" to="0" dur="0.4s" begin="1.7s" fill="freeze" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" keyTimes="0;1" />
      </path>

      {/* Brush tool */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; 16,-10; 20,-6; 26,8; 4,0; 0,0" keyTimes="0; 0.28; 0.55; 0.78; 0.92; 1" dur="2.4s" repeatCount="indefinite" />
        <line x1="44" y1="16" x2="54" y2="6" stroke="#6A0BCF" strokeWidth="1.5" strokeLinecap="round" strokeOpacity=".5" />
        <ellipse cx="43" cy="17" rx="3" ry="2" transform="rotate(-45,43,17)" fill="#6A0BCF" opacity=".7" />
      </g>

      {/* Reset overlay */}
      <rect x="11" y="13" width="40" height="46" rx="1" fill="#fff" fillOpacity="0">
        <animate attributeName="fill-opacity" values="0;0;0;0;0.92;0" keyTimes="0;0.82;0.86;0.9;0.93;0.96;1" dur="2.4s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
}
