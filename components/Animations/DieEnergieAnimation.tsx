'use client';

interface Props {
  size?: number;
  className?: string;
}

export default function DieEnergieAnimation({ size = 72, className = '' }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      aria-label="Morphogenetisches Energiefeld"
      className={className}
      style={{ overflow: 'visible', display: 'block' }}
    >
      {/* Core dot — pulses */}
      <circle cx="36" cy="36" r="4" fill="#6A0BCF">
        <animate attributeName="r" values="4;5.5;4" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Ring 1 — tight, violet, faster */}
      <circle cx="36" cy="36" r="12" fill="none" stroke="#6A0BCF" strokeWidth="1.2">
        <animate attributeName="r" values="12;18;12" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1" keyTimes="0;0.5;1" />
        <animate attributeName="opacity" values="0.9;0.2;0.9" dur="2.2s" repeatCount="indefinite" />
      </circle>

      {/* Ring 2 — mid, red, medium */}
      <circle cx="36" cy="36" r="20" fill="none" stroke="#D40000" strokeWidth="0.9">
        <animate attributeName="r" values="20;28;20" dur="2.8s" begin="0.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1" keyTimes="0;0.5;1" />
        <animate attributeName="opacity" values="0.65;0.1;0.65" dur="2.8s" begin="0.4s" repeatCount="indefinite" />
      </circle>

      {/* Ring 3 — outer, violet faint, slowest */}
      <circle cx="36" cy="36" r="30" fill="none" stroke="#6A0BCF" strokeWidth="0.6">
        <animate attributeName="r" values="30;36;30" dur="3.4s" begin="0.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1" keyTimes="0;0.5;1" />
        <animate attributeName="opacity" values="0.35;0.05;0.35" dur="3.4s" begin="0.8s" repeatCount="indefinite" />
      </circle>

      {/* 4 orbiting nodes at cardinal points — rotate slowly */}
      <g style={{ transformOrigin: '36px 36px' }}>
        <animateTransform attributeName="transform" type="rotate" from="0 36 36" to="360 36 36" dur="8s" repeatCount="indefinite" />
        <circle cx="36" cy="18" r="2.5" fill="#D40000" opacity=".75" />
        <circle cx="54" cy="36" r="2" fill="#6A0BCF" opacity=".6" />
        <circle cx="36" cy="54" r="2.5" fill="#D40000" opacity=".75" />
        <circle cx="18" cy="36" r="2" fill="#6A0BCF" opacity=".6" />
      </g>

      {/* Counter-rotating 4 nodes */}
      <g style={{ transformOrigin: '36px 36px' }}>
        <animateTransform attributeName="transform" type="rotate" from="45 36 36" to="-315 36 36" dur="12s" repeatCount="indefinite" />
        <circle cx="48" cy="22" r="1.5" fill="#6A0BCF" opacity=".4" />
        <circle cx="50" cy="50" r="1.5" fill="#D40000" opacity=".4" />
        <circle cx="22" cy="50" r="1.5" fill="#6A0BCF" opacity=".4" />
        <circle cx="22" cy="22" r="1.5" fill="#D40000" opacity=".4" />
      </g>
    </svg>
  );
}
