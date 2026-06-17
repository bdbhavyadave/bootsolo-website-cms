import Link from 'next/link'
import Brand from './Brand'

const FOOT = [
  { h: "What we do", links: ["Get found by AI", "AI marketing team", "Automation", "Campaigns"] },
  { h: "Company", links: ["The routes", "About", "Join us", "Contact"] },
  { h: "Resources", links: ["Founder guides", "Free route map", "Blog", "Changelog"] },
];

export default function Footer() {
  return (
    <footer className="footer dark">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-col">
            <Brand />
            <p className="foot-tag">The AI-native marketing team for bootstrapped founders. Start solo, climb fast — on a budget that fits in a backpack.</p>
          </div>
          {FOOT.map(c => (
            <div className="foot-col" key={c.h}>
              <h5>{c.h}</h5>
              {c.links.map(l => <Link href="#" key={l}>{l}</Link>)}
            </div>
          ))}
        </div>
        <div className="foot-bottom">
          <span>© 2026 Bootsolo, Inc.</span>
          <span>For the ones who started solo.</span>
        </div>
      </div>
    </footer>
  );
}
