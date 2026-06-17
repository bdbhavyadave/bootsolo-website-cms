"use client";

import { useState } from 'react'
import { Plus } from 'lucide-react'

const QS = [
  { q: "I'm a team of one. Is this overkill?", a: "That's exactly who we built this for. Basecamp is free and gets you a route map plus your first wins — no commitment. You add the AI team when you're ready, not before." },
  { q: "What does 'get found by AI' actually mean?", a: "When someone asks ChatGPT or Perplexity for a tool like yours, you want to be in the answer. We set up your site and content so the AI engines recommend you — it's the new word of mouth." },
  { q: "How fast will I see something?", a: "Your route map lands in days. Real movement in signups and cost usually shows in the first 60–90 days. We won't promise overnight — but every step compounds." },
  { q: "Am I locked into a contract?", a: "Never. Everything's month to month, and Basecamp is free for as long as you want. If it ever stops being worth it, you walk — no hard feelings." },
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
