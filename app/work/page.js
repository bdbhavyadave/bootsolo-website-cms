"use client";

import React from 'react';
import Motif from '@/components/Motif';
import CTA from '@/components/CTA';
import { Award, ArrowRight } from 'lucide-react';

const SECTORS = ["All", "Solo SaaS", "D2C", "Indie app", "Newsletter"];

const METRICS = [
  { mv: "120+", mk: "founders climbing with us" },
  { mv: "3.4×", mk: "median signup lift in 90 days" },
  { mv: "−54%", mk: "average cost per acquisition" },
];

const FEATURED_CASE = {
  metric: "+312%", unit: "signups in one quarter", sector: "Solo SaaS",
  company: "Northwind", logo: "N", palette: "dawn",
  quote: "I was the founder, the engineer, and the marketing department. Bootsolo became the marketing department — and it cost less than a part-time hire.",
  who: "Sam R., founder",
  tags: ["Get found by AI", "Content engine", "Lifecycle"],
};

const CASES = [
  { metric: "−58%", ice: true, label: "cost per sale", company: "Parallel", logo: "P", sector: "D2C", title: "A bootstrapped skincare brand halved its cost per sale", tags: ["Campaigns", "Automation"] },
  { metric: "4.1×", ice: false, label: "AI answer visibility", company: "Loomly", logo: "L", sector: "Indie app", title: "From invisible to the AI answer box in 60 days", tags: ["Get found by AI"] },
  { metric: "0→1.2k", ice: true, label: "signups, no ad spend", company: "Pier9", logo: "P9", sector: "Solo SaaS", title: "Zero to 1,200 signups on a $0 ad budget", tags: ["Content engine", "GEO"] },
  { metric: "+89%", ice: false, label: "open rate", company: "Cortex", logo: "C", sector: "Newsletter", title: "A solo writer doubled engagement with lifecycle automation", tags: ["Automation", "Lifecycle"] },
  { metric: "2.7×", ice: true, label: "qualified demos", company: "Vantage", logo: "V", sector: "Solo SaaS", title: "Tripled qualified demos without hiring a marketer", tags: ["Campaigns", "GEO"] },
  { metric: "−41%", ice: false, label: "time on marketing", company: "Indie Maker", logo: "IM", sector: "Indie app", title: "Got 6 hours a week back by handing off the busywork", tags: ["Automation"] },
];

function FeaturedCase() {
  const c = FEATURED_CASE;
  return (
    <article className="featured">
      <div className="feat-art"><Motif palette={c.palette} h={400} /></div>
      <div className="feat-body">
        <span className="feat-cat" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Award size={14} /> {c.sector} · case study
        </span>
        <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginTop: 18 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 56, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1, color: "var(--brand-fg)" }}>{c.metric}</span>
          <span style={{ fontSize: 16, color: "var(--fg2)" }}>{c.unit}</span>
        </div>
        <p className="feat-ex" style={{ fontSize: 18, fontStyle: "italic", color: "var(--fg1)" }}>“{c.quote}”</p>
        <div className="feat-meta">
          <span className="who"><span className="av">{c.logo}</span> {c.company}</span>
          <span className="sep"></span><span>{c.who}</span>
        </div>
        <div className="wtags" style={{ marginTop: 22 }}>
          {c.tags.map(t => <span className="wtag" key={t}>{t}</span>)}
        </div>
      </div>
    </article>
  );
}

function WCard({ metric, ice, label, company, logo, sector, title, tags }) {
  return (
    <article className="wcard">
      <div className="wthumb">
        <span className={"big" + (ice ? " ice" : "")}>{metric}</span>
        <span className="blbl">{label}</span>
      </div>
      <div className="wbody">
        <div className="wco">
          <span className="logo">{logo}</span>
          <span className="nm">{company}</span>
          <span className="sector">{sector}</span>
        </div>
        <h3 className="wtitle">{title}</h3>
        <div className="wtags">
          {tags.map(t => <span className="wtag" key={t}>{t}</span>)}
        </div>
        <div className="wlink" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          Read the story <ArrowRight size={14} />
        </div>
      </div>
    </article>
  );
}

export default function WorkIndex() {
  const [sector, setSector] = React.useState("All");
  const shown = sector === "All" ? CASES : CASES.filter(c => c.sector === sector);

  return (
    <>
      <section className="page-head">
        <div className="wrap ph-inner">
          <span className="kick">The work</span>
          <h1 className="ph-title">Founders who kept climbing</h1>
          <p className="ph-lead">Real routes, real numbers. No logos we can't back up with a story — every one of these started solo, on a budget that fit in a backpack.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="metrics" style={{ marginBottom: 56 }}>
            {METRICS.map(m => (
              <div className="metric" key={m.mk}><div className="mv">{m.mv}</div><div className="mk">{m.mk}</div></div>
            ))}
          </div>
          <FeaturedCase />
          <div className="filters">
            {SECTORS.map(s => (
              <button key={s} className={"filter" + (sector === s ? " on" : "")} onClick={() => setSector(s)}>{s}</button>
            ))}
          </div>
          <div className="work-grid">
            {shown.map(c => <WCard key={c.company} {...c} />)}
          </div>
        </div>
      </section>
      
      <CTA 
        title="Ready to add your logo?"
        subtitle="We're looking for the next 5 bootstrapped founders to partner with this quarter."
        href="/custom-quote"
        btnText="Build custom quote"
      />
    </>
  );
}
