"use client";

import React from 'react';
import Motif from '@/components/Motif';
import CTA from '@/components/CTA';
import { Star, Download, ArrowRight, BookOpen, ListChecks, LayoutTemplate, Rocket, Radar, Bot, CreditCard, ChevronRight } from 'lucide-react';

const RES_TYPES = ["All", "Guides", "Cheat sheets", "Templates"];

const FEATURED_RES = {
  type: "Guide", fmt: "PDF · 28 pages", palette: "ice",
  title: "The bootstrapped founder's guide to getting found by AI",
  desc: "Our complete playbook for GEO/AEO on a zero budget — the same one we hand every founder on day one. Structure, schema, answer-shaped copy, and a 30-day checklist.",
  action: "download",
};

const RESOURCES = [
  { type: "Guide", icon: "book-open", tone: "", fmt: "PDF · 14 pages", title: "Agentic marketing for a team of one", desc: "Set up four AI agents to research, write, launch, and optimize — before your coffee's cold.", action: "download" },
  { type: "Cheat sheet", icon: "list-checks", tone: "ice", fmt: "PDF · 1 page", title: "The 6-point AI visibility audit", desc: "Print it, run it on your homepage, fix what fails. The fastest way to spot where AI skips you.", action: "download" },
  { type: "Template", icon: "layout-template", tone: "gold", fmt: "Notion · copy", title: "The $0 content engine board", desc: "A ready-to-clone Notion board for planning, drafting, and shipping 12 posts a month.", action: "read" },
  { type: "Cheat sheet", icon: "list-checks", tone: "ice", fmt: "PDF · 2 pages", title: "Answer-engine keyword starter list", desc: "50 question-shaped prompts buyers actually ask AI — sorted by intent and difficulty.", action: "download" },
  { type: "Template", icon: "layout-template", tone: "gold", fmt: "Google Doc", title: "Lifecycle email sequence kit", desc: "Onboarding, nudge, and winback flows written for indie SaaS — swap in your product and ship.", action: "read" },
  { type: "Guide", icon: "book-open", tone: "", fmt: "PDF · 9 pages", title: "Campaigns that pay for themselves", desc: "How to spend your first $500 in ads so it returns — budgeting, targeting, and the kill switch.", action: "download" },
];

const HELP_DOCS = [
  { icon: "rocket", t: "Getting started", d: "Set up your workspace, connect your site, and map your first route.", n: "8 articles" },
  { icon: "radar", t: "Get found by AI", d: "GEO/AEO setup, schema, and tracking your answer-engine rank.", n: "12 articles" },
  { icon: "bot", t: "Working with agents", d: "Brief, run, and review your AI marketing team.", n: "10 articles" },
  { icon: "credit-card", t: "Billing & plans", d: "Basecamp, Climber, Summit — upgrades, invoices, and cancellation.", n: "6 articles" },
];

function IconMap({ name }) {
  if (name === 'book-open') return <BookOpen size={20} />;
  if (name === 'list-checks') return <ListChecks size={20} />;
  if (name === 'layout-template') return <LayoutTemplate size={20} />;
  if (name === 'rocket') return <Rocket size={20} />;
  if (name === 'radar') return <Radar size={20} />;
  if (name === 'bot') return <Bot size={20} />;
  if (name === 'credit-card') return <CreditCard size={20} />;
  return <Star size={20} />;
}

function FeaturedRes() {
  const r = FEATURED_RES;
  return (
    <article className="featured">
      <div className="feat-art"><Motif palette={r.palette} h={340} /></div>
      <div className="feat-body">
        <span className="feat-cat" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Star size={14} /> Featured {r.type.toLowerCase()}
        </span>
        <h2 className="feat-title">{r.title}</h2>
        <p className="feat-ex">{r.desc}</p>
        <div className="feat-meta" style={{ marginBottom: 4 }}>
          <span style={{ fontFamily: "var(--font-mono)" }}>{r.fmt}</span>
        </div>
        <div style={{ marginTop: 18 }}>
          <a className="btn btn-primary" href="#" style={{ height: 46 }}>
            Download free <Download size={14} style={{ marginLeft: 6 }} />
          </a>
        </div>
      </div>
    </article>
  );
}

function ResCard({ type, icon, tone, fmt, title, desc, action }) {
  const download = action === "download";
  return (
    <article className="res">
      <div className="res-top">
        <div className={"res-ico" + (tone ? " " + tone : "")}>
          <IconMap name={icon} />
        </div>
        <div>
          <div className="res-type">{type}</div>
          <div className="res-fmt">{fmt}</div>
        </div>
      </div>
      <h3 className="res-title">{title}</h3>
      <p className="res-desc">{desc}</p>
      <div className="res-action">
        <a className={"btn " + (download ? "btn-soft" : "btn-ghost")} href="#" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {download ? <>Download <Download size={14} /></> : <>Read &amp; copy <ArrowRight size={14} /></>}
        </a>
      </div>
    </article>
  );
}

function HelpRow({ icon, t, d, n }) {
  return (
    <div className="help-row">
      <div className="help-ico"><IconMap name={icon} /></div>
      <div className="help-txt"><div className="ht">{t}</div><div className="hd">{d}</div></div>
      <span className="hcount">{n}</span>
      <span className="harrow"><ChevronRight size={16} /></span>
    </div>
  );
}

export default function ResourcesIndex() {
  const [type, setType] = React.useState("All");
  const shown = type === "All" ? RESOURCES : RESOURCES.filter(r => r.type === type.replace(/s$/, "") || r.type === type);

  return (
    <>
      <section className="page-head">
        <div className="wrap ph-inner">
          <span className="kick">Resources</span>
          <h1 className="ph-title">Gear up for the climb</h1>
          <p className="ph-lead">Guides, cheat sheets, and templates for bootstrapped founders — free to read and download. Plus a help center when you're in the product and need a hand.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <FeaturedRes />
          <div className="filters">
            {RES_TYPES.map(t => (
              <button key={t} className={"filter" + (type === t ? " on" : "")} onClick={() => setType(t)}>{t}</button>
            ))}
          </div>
          <div className="res-grid">
            {shown.map(r => <ResCard key={r.title} {...r} />)}
          </div>

          <div className="block-head" style={{ marginTop: '120px' }}>
            <h3 style={{ fontSize: '24px', color: 'var(--fg1)', fontWeight: 600, marginBottom: '24px' }}>Help center</h3>
            <span className="all" style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', color: 'var(--brand-fg)', fontSize: '14px', fontWeight: 500, marginBottom: '16px' }}>
              Visit the help center <ArrowRight size={14} />
            </span>
          </div>
          <div className="help">
            {HELP_DOCS.map(h => <HelpRow key={h.t} {...h} />)}
          </div>
        </div>
      </section>
      
      <CTA 
        title="Need more than just a template?" 
        subtitle="Let's build a custom route map tailored to your exact terrain."
      />
    </>
  );
}
