"use client";

import { useState } from 'react'
import { Plus } from 'lucide-react'

const QS = [
  { q: "What makes Bootsolo different from a traditional agency?", a: "We combine strategy, AI-native execution, and lean operating models to help smaller teams move faster without paying for unnecessary layers." },
  { q: "Do you only work with startups?", a: "No. We work best with lean, growth-focused teams - especially startups, service businesses, and brands that want measurable marketing systems." },
  { q: "What does AI-ready marketing actually mean?", a: "It means your website, content, structure, and campaigns are built for both human buyers and the new discovery layer driven by AI search and answer engines." },
  { q: "Can you support one project instead of a monthly retainer?", a: "Yes. We can start with an audit, homepage rewrite, funnel review, campaign setup, or a focused growth sprint." },
];

function FAQItem({ q, a, open, onClick }) {
  return (
    <div className={"faq-item" + (open ? " open" : "")}>
      <button className="faq-q" onClick={onClick}>
        {q} <Plus size={18} />
      </button>
      <div className="faq-a">{a}</div>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section" id="faq">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">FAQ</span>
          <h2 className="sec-title">Real questions from real founders</h2>
        </div>
        <div className="faq">
          {QS.map((item, i) => (
            <FAQItem key={i} {...item} open={open === i} onClick={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
