export default function HeroIllustration(props) {
  return (
    <svg viewBox="0 0 960 720" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="960" height="720" fill="#0E1A2B"/>
      <g fill="#EEF3F8" opacity="0.6">
        <circle cx="80" cy="90" r="2"/><circle cx="160" cy="150" r="1.5"/><circle cx="120" cy="220" r="1.5"/>
        <circle cx="250" cy="80" r="1.5"/><circle cx="320" cy="170" r="2"/><circle cx="60" cy="300" r="1.5"/>
      </g>
      <circle cx="730" cy="180" r="98" fill="#F4B740" opacity="0.13"/>
      <circle cx="730" cy="180" r="62" fill="#F4B740"/>
      <polygon points="0,480 140,360 250,450 380,330 520,440 640,350 780,450 900,370 960,440 960,720 0,720" fill="#35506F"/>
      <polygon points="380,330 430,400 350,400" fill="#E2E8F0" opacity="0.85"/>
      <polygon points="640,350 685,415 595,415" fill="#E2E8F0" opacity="0.85"/>
      <polygon points="660,300 880,650 460,650" fill="#1B2D45"/>
      <polygon points="660,300 705,375 620,375" fill="#E2E8F0" opacity="0.9"/>
      <polygon points="400,120 770,650 50,650" fill="#16263B"/>
      <polygon points="400,120 500,312 444,292 400,332 356,300 300,322 400,120" fill="#F7F5F1"/>
      <path d="M300,632 L470,566 L300,500 L470,432 L325,366 L445,300 L362,238 L400,168" fill="none" stroke="#FF6B35" strokeWidth="6" strokeLinecap="round" strokeDasharray="1 16"/>
      <circle cx="470" cy="566" r="7" fill="#FF6B35"/>
      <circle cx="325" cy="366" r="11" fill="#FF6B35" stroke="#0E1A2B" strokeWidth="3"/>
      <circle cx="325" cy="366" r="3.5" fill="#fff"/>
      <path d="M400 100 a20 20 0 0 1 20 20 c0 15 -20 40 -20 40 c0 0 -20 -25 -20 -40 a20 20 0 0 1 20 -20 Z" fill="#FF6B35"/>
      <circle cx="400" cy="120" r="8" fill="#fff"/>
      <polygon points="0,648 220,612 440,656 660,616 960,652 960,720 0,720" fill="#E2E8F0"/>
      <polygon points="0,672 260,648 520,680 760,652 960,676 960,720 0,720" fill="#F7F5F1"/>
    </svg>
  )
}
