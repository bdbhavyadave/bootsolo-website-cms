"use client";

import React from 'react';
import Motif from '@/components/Motif';
import { Sparkles, ArrowRight } from 'lucide-react';

const CATEGORIES = ["All", "Get found by AI", "Playbooks", "Automation", "Founder stories"];

const FEATURED = {
  cat: "Playbooks", palette: "dawn",
  title: "The solo founder's GEO starter kit: get cited by AI in 30 days",
  ex: "A no-budget, step-by-step route to showing up when buyers ask ChatGPT and Perplexity for a tool like yours. The exact checklist we run for every founder on day one.",
  author: "Mara", date: "Jun 14, 2026", read: "9 min read",
};

const POSTS = [
  { cat: "Get found by AI", palette: "ice", title: "Answer-engine optimization, explained without the jargon", ex: "What GEO/AEO actually is, why it's the new word of mouth, and the three things to fix first.", who: "Mara", date: "Jun 11", read: "6 min" },
  { cat: "Automation", palette: "gold", title: "Build a one-person marketing team with 4 AI agents", ex: "Research, write, launch, optimize — the stack a solo founder can run before coffee.", who: "Theo", date: "Jun 7", read: "8 min" },
  { cat: "Founder stories", palette: "snow", title: "How I went from 0 to 1,200 signups with no ad budget", ex: "A bootstrapped SaaS founder shares the exact route — and the dead ends to skip.", who: "Priya", date: "Jun 3", read: "11 min" },
  { cat: "Playbooks", palette: "dawn", title: "The $0 content engine: 12 posts a month, mostly automated", ex: "A repeatable system for founders who'd rather build product than write all day.", who: "Theo", date: "May 28", read: "7 min" },
  { cat: "Get found by AI", palette: "ice", title: "Why your homepage is invisible to AI (and the 6 fixes)", ex: "Structure, schema, and the answer-shaped copy that gets you into the response.", who: "Mara", date: "May 22", read: "5 min" },
  { cat: "Automation", palette: "gold", title: "Lifecycle email on autopilot for indie SaaS", ex: "Onboarding, nudges, and winbacks that run themselves — set up in an afternoon.", who: "Priya", date: "May 16", read: "6 min" },
];

function FeaturedPost() {
  return (
    <article className="featured">
      <div className="feat-art"><Motif palette={FEATURED.palette} h={360} /></div>
      <div className="feat-body">
        <span className="feat-cat" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Sparkles size={14} /> {FEATURED.cat}
        </span>
        <h2 className="feat-title">{FEATURED.title}</h2>
        <p className="feat-ex">{FEATURED.ex}</p>
        <div className="feat-meta">
          <span className="who"><span className="av">MR</span> {FEATURED.author}</span>
          <span className="sep"></span><span>{FEATURED.date}</span>
          <span className="sep"></span><span>{FEATURED.read}</span>
        </div>
      </div>
    </article>
  );
}

function PostCard({ cat, palette, title, ex, who, date, read }) {
  return (
    <article className="post">
      <div className="pthumb"><Motif palette={palette} h={176} /></div>
      <div className="pbody">
        <span className="pcat">{cat}</span>
        <h3 className="ptitle">{title}</h3>
        <p className="pex">{ex}</p>
        <div className="pmeta">
          <span>{who}</span><span className="sep"></span><span>{date}</span>
          <span className="sep"></span><span>{read}</span>
        </div>
      </div>
    </article>
  );
}

function Subscribe() {
  return (
    <section className="section" style={{ paddingTop: 0, paddingBottom: 100 }}>
      <div className="wrap">
        <div className="subscribe">
          <div className="sg"></div>
          <div>
            <div className="st">Get the next route in your inbox</div>
            <div className="ss">One practical email a week for bootstrapped founders. No spam, unsubscribe in a click.</div>
          </div>
          <form className="sub-form" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="you@startup.com" />
            <button className="btn btn-primary" type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function BlogIndex() {
  const [active, setActive] = React.useState("All");
  const shown = active === "All" ? POSTS : POSTS.filter(p => p.cat === active);

  return (
    <>
      <section className="page-head">
        <div className="wrap ph-inner">
          <span className="kick">Blog</span>
          <h1 className="ph-title">Field notes from the climb</h1>
          <p className="ph-lead">Playbooks, teardowns, and founder stories on getting found by AI and growing on a backpack budget. Written by the team, no fluff.</p>
        </div>
      </section>
      
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <FeaturedPost />
          <div className="filters">
            {CATEGORIES.map(c => (
              <button key={c} className={"filter" + (active === c ? " on" : "")} onClick={() => setActive(c)}>{c}</button>
            ))}
          </div>
          <div className="post-grid">
            {shown.map(p => <PostCard key={p.title} {...p} />)}
          </div>
        </div>
      </section>
      <Subscribe />
    </>
  );
}
