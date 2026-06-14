export default function Logo({ height = 44 }) {
  return (
    <svg
      viewBox="0 0 215 52"
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', flexShrink: 0 }}
      aria-label="SOMA Consultoria Fiscal"
    >
      <defs>
        <linearGradient id="lg-blue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5BAAE0" />
          <stop offset="55%" stopColor="#2F6FB3" />
          <stop offset="100%" stopColor="#1D3F6E" />
        </linearGradient>
        <linearGradient id="lg-gray" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C8D8E8" />
          <stop offset="100%" stopColor="#6880A0" />
        </linearGradient>
        <linearGradient id="lg-text" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#A8BECC" />
        </linearGradient>
      </defs>

      {/* Plus 1 — light gray, far left */}
      <rect x="3"    y="13"  width="5"  height="22" rx="1.5" fill="url(#lg-gray)" opacity="0.6" />
      <rect x="-2"   y="21"  width="17" height="4.5" rx="1.5" fill="url(#lg-gray)" opacity="0.6" />

      {/* Plus 2 — gray, medium */}
      <rect x="13"   y="9"   width="6"  height="28" rx="1.5" fill="url(#lg-gray)" />
      <rect x="6"    y="19"  width="22" height="5.5" rx="1.5" fill="url(#lg-gray)" />

      {/* Plus 3 — blue, tallest (dominant) */}
      <rect x="25"   y="4"   width="7"  height="38" rx="2"   fill="url(#lg-blue)" />
      <rect x="16"   y="17"  width="28" height="7"   rx="2"   fill="url(#lg-blue)" />

      {/* Plus 4 — blue, far right */}
      <rect x="40"   y="11"  width="5"  height="24" rx="1.5" fill="url(#lg-blue)" opacity="0.75" />
      <rect x="35"   y="20"  width="17" height="5"   rx="1.5" fill="url(#lg-blue)" opacity="0.75" />

      {/* SOMA */}
      <text
        x="60" y="35"
        fontFamily="Montserrat, 'Arial Black', sans-serif"
        fontWeight="900"
        fontSize="29"
        fill="url(#lg-text)"
        letterSpacing="-0.5"
      >
        SOMA
      </text>

      {/* CONSULTORIA FISCAL */}
      <text
        x="61" y="47"
        fontFamily="Montserrat, Arial, sans-serif"
        fontWeight="700"
        fontSize="7.5"
        fill="#7A96AC"
        letterSpacing="2.5"
      >
        CONSULTORIA FISCAL
      </text>
    </svg>
  )
}
