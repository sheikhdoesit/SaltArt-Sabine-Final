'use client';

interface Props {
  size?: number;
  className?: string;
}

export default function DieWirkungAnimation({ size = 72, className = '' }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      aria-label="Tägliche Wirkung auf das Unterbewusstsein"
      className={className}
      style={{ overflow: 'visible', display: 'block' }}
    >
      {/* Eye outline — represents daily seeing / Unterbewusstsein */}
      <path d="M12 36 Q36 14 60 36 Q36 58 12 36 Z" fill="none" stroke="#6A0BCF" strokeWidth="1" strokeOpacity=".25" />

      {/* Iris outer */}
      <circle cx="36" cy="36" r="11" fill="none" stroke="#6A0BCF" strokeWidth=".8" strokeOpacity=".4" />

      {/* Pupil — pulses like a heartbeat */}
      <circle cx="36" cy="36" r="5" fill="#6A0BCF" opacity=".8">
        <animate attributeName="r" values="5;7;5;5" keyTimes="0;0.15;0.35;1" dur="1.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0 0 1 1" />
        <animate attributeName="opacity" values=".8;1;.8;.8" keyTimes="0;0.15;0.35;1" dur="1.8s" repeatCount="indefinite" />
      </circle>

      {/* Shockwave ripple 1 — emits from eye every beat */}
      <circle cx="36" cy="36" r="5" fill="none" stroke="#6A0BCF" strokeWidth="1.2">
        <animate attributeName="r" values="5;34" dur="1.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.2 0 0.6 1" />
        <animate attributeName="opacity" values="0.7;0" dur="1.8s" repeatCount="indefinite" />
        <animate attributeName="stroke-width" values="1.2;0.3" dur="1.8s" repeatCount="indefinite" />
      </circle>

      {/* Shockwave ripple 2 — offset */}
      <circle cx="36" cy="36" r="5" fill="none" stroke="#D40000" strokeWidth="1">
        <animate attributeName="r" values="5;34" dur="1.8s" begin="0.22s" repeatCount="indefinite" calcMode="spline" keySplines="0.2 0 0.6 1" />
        <animate attributeName="opacity" values="0.5;0" dur="1.8s" begin="0.22s" repeatCount="indefinite" />
        <animate attributeName="stroke-width" values="1;0.2" dur="1.8s" begin="0.22s" repeatCount="indefinite" />
      </circle>

      {/* Ripple 3 faint */}
      <circle cx="36" cy="36" r="5" fill="none" stroke="#6A0BCF" strokeWidth=".6">
        <animate attributeName="r" values="5;34" dur="1.8s" begin="0.44s" repeatCount="indefinite" calcMode="spline" keySplines="0.2 0 0.6 1" />
        <animate attributeName="opacity" values="0.3;0" dur="1.8s" begin="0.44s" repeatCount="indefinite" />
      </circle>

      {/* Left spark */}
      <line x1="4" y1="36" x2="18" y2="36" stroke="#6A0BCF" strokeWidth=".8" strokeLinecap="round">
        <animate attributeName="opacity" values="0;0.6;0" dur="1.8s" begin="0.6s" repeatCount="indefinite" />
      </line>
      {/* Right spark */}
      <line x1="54" y1="36" x2="68" y2="36" stroke="#D40000" strokeWidth=".8" strokeLinecap="round">
        <animate attributeName="opacity" values="0;0.5;0" dur="1.8s" begin="0.75s" repeatCount="indefinite" />
      </line>
      {/* Top spark */}
      <line x1="36" y1="4" x2="36" y2="20" stroke="#6A0BCF" strokeWidth=".8" strokeLinecap="round">
        <animate attributeName="opacity" values="0;0.4;0" dur="1.8s" begin="0.65s" repeatCount="indefinite" />
      </line>
    </svg>
  );
}
