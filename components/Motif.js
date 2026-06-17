export default function Motif({ palette = "dawn", h = 200, className = "motif" }) {
  const MOTIF_PALETTES = {
    dawn: { bg: "#0E1A2B", far: "#35506F", mid: "#1B2D45", peak: "#16263B", cap: "#F7F5F1", route: "#FF6B35", sun: "#F4B740" },
    ice:  { bg: "#102A43", far: "#2C6E9C", mid: "#1B4868", peak: "#15314A", cap: "#EAF6FF", route: "#38B6F5", sun: "#8FD6FA" },
    gold: { bg: "#1A1206", far: "#6B4E1A", mid: "#4A360F", peak: "#2E2207", cap: "#FBF3E0", route: "#FF6B35", sun: "#F4B740" },
    snow: { bg: "#16263B", far: "#4E6B8A", mid: "#34516F", peak: "#1B2D45", cap: "#FFFFFF", route: "#FF6B35", sun: "#F4B740" },
  };

  const p = MOTIF_PALETTES[palette] || MOTIF_PALETTES.dawn;
  const H = h;
  return (
    <svg className={className} viewBox="0 0 480 270" preserveAspectRatio="xMidYMid slice"
      style={{ height: H, width: "100%", display: "block" }} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="480" height="270" fill={p.bg} />
      <g fill="#FFFFFF" opacity="0.5">
        <circle cx="48" cy="40" r="1.4" /><circle cx="110" cy="70" r="1" /><circle cx="80" cy="110" r="1" />
        <circle cx="150" cy="34" r="1" /><circle cx="200" cy="64" r="1.3" />
      </g>
      <circle cx="372" cy="80" r="46" fill={p.sun} opacity="0.16" />
      <circle cx="372" cy="80" r="28" fill={p.sun} />
      <polygon points="0,196 70,150 128,186 196,140 268,184 332,146 400,186 480,150 480,270 0,270" fill={p.far} />
      <polygon points="324,120 446,256 202,256" fill={p.mid} />
      <polygon points="324,120 348,160 300,160" fill={p.cap} opacity="0.92" />
      <polygon points="170,56 360,256 -20,256" fill={p.peak} />
      <polygon points="170,56 224,170 196,158 170,180 144,162 116,176 170,56" fill={p.cap} />
      <path d="M120,242 L210,206 L120,170 L210,134 L138,98" fill="none" stroke={p.route} strokeWidth="3.5"
        strokeLinecap="round" strokeDasharray="0.5 9" />
      <circle cx="210" cy="206" r="4" fill={p.route} />
      <circle cx="138" cy="98" r="6" fill={p.route} stroke={p.bg} strokeWidth="2" />
      <circle cx="138" cy="98" r="2" fill="#fff" />
    </svg>
  );
}
