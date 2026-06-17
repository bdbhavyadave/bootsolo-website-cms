import Link from 'next/link'

export function Bolt({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <path d="M26 12 L46 52 H6 L26 12 Z" fill="#FF6B35" />
      <path d="M26 12 L34 30 L26 26 L18 30 L26 12 Z" fill="#F7F5F1" />
      <circle cx="47" cy="20" r="6" fill="#F4B740" />
    </svg>
  );
}

export default function Brand() {
  return (
    <Link className="brand" href="/">
      <span className="tile"><Bolt /></span>
      bootsolo
    </Link>
  );
}
