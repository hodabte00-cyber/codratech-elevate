export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="codra-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--primary)" />
          <stop offset="100%" stopColor="var(--primary-glow)" />
        </linearGradient>
      </defs>
      <rect
        x="2"
        y="2"
        width="44"
        height="44"
        rx="14"
        fill="url(#codra-g)"
        opacity="0.16"
        stroke="url(#codra-g)"
        strokeWidth="1.5"
      />
      <path
        d="M31 16.5a10 10 0 1 0 0 15"
        fill="none"
        stroke="url(#codra-g)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="33" cy="24" r="3.2" fill="url(#codra-g)" />
    </svg>
  );
}
