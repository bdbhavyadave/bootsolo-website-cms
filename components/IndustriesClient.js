'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { 
  Laptop, 
  ShoppingBag, 
  Building2, 
  HeartPulse, 
  GraduationCap, 
  Coins, 
  ShieldCheck, 
  Smartphone, 
  Briefcase, 
  Compass, 
  UtensilsCrossed, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  Search, 
  TrendingUp, 
  FileText, 
  Video, 
  Layout, 
  Palette, 
  Layers, 
  HelpCircle,
  Download,
  Flame,
  Clock,
  Send
} from 'lucide-react';
import { PaperPlaneMark } from './Brand';
import { emitLeadSubmittedEvent } from '@/lib/events';

const INDUSTRIES_DATA = [
  {
    id: 'saas-tech',
    name: 'B2B SaaS & Technology',
    slugName: 'B2B SaaS & Technology',
    category: 'tech',
    categoryLabel: 'B2B & Tech',
    icon: Laptop,
    badge: 'High Consideration',
    challenge: 'Long sales cycles, crowded categories, and buyers who research everything before booking a demo.',
    howWeHelp: 'AI search visibility, demo-focused landing pages, LinkedIn and paid search campaigns, and founder thought leadership that builds trust before the first call.',
    keyResults: ['Trial signups', 'Demo bookings', 'High-intent pipeline'],
    accentColor: '#38B6F5',
  },
  {
    id: 'ecommerce-d2c',
    name: 'Ecommerce & D2C',
    slugName: 'Ecommerce & D2C',
    category: 'commerce',
    categoryLabel: 'Commerce',
    icon: ShoppingBag,
    badge: 'High Velocity',
    challenge: 'Rising ad costs, abandoned carts, and competing with big brands on a small budget.',
    howWeHelp: 'High-converting Shopify stores, checkout and product page optimization, creative-first paid social, and email flows that bring buyers back.',
    keyResults: ['Direct orders', 'Average order value (AOV)', 'Lower cost per sale'],
    accentColor: '#FF6B35',
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    slugName: 'Real Estate',
    category: 'services',
    categoryLabel: 'High Ticket',
    icon: Building2,
    badge: 'Local & High Ticket',
    challenge: 'Expensive leads from portals, slow follow-up, and buyers who browse for months before committing.',
    howWeHelp: 'Property landing pages, local SEO, targeted Meta and Google campaigns, and automated follow-up that keeps every enquiry warm.',
    keyResults: ['Qualified enquiries', 'Site visits', 'Booked viewings'],
    accentColor: '#F4B740',
  },
  {
    id: 'healthcare-wellness',
    name: 'Healthcare & Wellness',
    slugName: 'Healthcare & Wellness',
    category: 'regulated',
    categoryLabel: 'Regulated',
    icon: HeartPulse,
    badge: 'Trust & Compliance',
    challenge: 'Patients choose providers they trust, and advertising rules limit what you can say.',
    howWeHelp: 'Local and AI search visibility, trust-building content, appointment-focused websites, and compliance-aware campaigns.',
    keyResults: ['Appointment bookings', 'Patient enquiries', 'Local map visibility'],
    accentColor: '#1FBF75',
  },
  {
    id: 'education-edtech',
    name: 'Education & EdTech',
    slugName: 'Education & EdTech',
    category: 'tech',
    categoryLabel: 'Learning & EdTech',
    icon: GraduationCap,
    badge: 'Seasonal Cycles',
    challenge: 'Seasonal enrollment pressure, comparison-heavy decisions, and parents and students researching across many channels.',
    howWeHelp: 'Enrollment funnels, course launch campaigns, short-form video, webinar and lead magnet systems, and nurture sequences that convert enquiries into admissions.',
    keyResults: ['Student enquiries', 'Term enrollments', 'Course sales'],
    accentColor: '#38B6F5',
  },
  {
    id: 'web3-blockchain',
    name: 'Web3 & Blockchain',
    slugName: 'Web3 & Blockchain',
    category: 'tech',
    categoryLabel: 'Emerging Tech',
    icon: Coins,
    badge: 'Credibility First',
    challenge: 'Skeptical audiences, restricted ad platforms, and the need to build credibility fast.',
    howWeHelp: 'Clear positioning, community growth, founder thought leadership, PR, and SEO and AI visibility that builds trust without relying on paid ads.',
    keyResults: ['Community growth', 'Brand credibility', 'Waitlist & user signups'],
    accentColor: '#8FD6FA',
  },
  {
    id: 'fintech-financial',
    name: 'Fintech & Financial Services',
    slugName: 'Fintech & Financial Services',
    category: 'regulated',
    categoryLabel: 'Regulated',
    icon: ShieldCheck,
    badge: 'High Trust & Compliance',
    challenge: 'High-trust purchases, strict financial promotion rules, and costly customer acquisition.',
    howWeHelp: 'Trust-led content, compliance-aware ad campaigns, conversion-focused websites, and calculators that turn visitors into leads.',
    keyResults: ['App signups', 'Qualified sales leads', 'Lower CAC'],
    accentColor: '#1E97DB',
  },
  {
    id: 'mobile-apps-startups',
    name: 'Mobile Apps & Startups',
    slugName: 'Mobile Apps & Startups',
    category: 'tech',
    categoryLabel: 'B2B & Tech',
    icon: Smartphone,
    badge: 'Growth & Retention',
    challenge: 'Getting noticed in crowded app stores and turning installs into active users.',
    howWeHelp: 'Launch campaigns, app store and AI answer visibility, short-form video, and onboarding and retention flows.',
    keyResults: ['App installs', 'Active daily users (DAU)', 'Day-30 retention'],
    accentColor: '#FF9A6B',
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    slugName: 'Professional Services',
    category: 'services',
    categoryLabel: 'B2B & Services',
    icon: Briefcase,
    badge: 'Expertise Driven',
    challenge: 'Winning clients on expertise rather than price, with little time for marketing.',
    howWeHelp: 'Founder and partner thought leadership, local and AI search visibility, professional websites, and lead magnets that attract the right clients.',
    keyResults: ['Consultation bookings', 'Client referrals', 'Inbound enquiries'],
    accentColor: '#4E6B8A',
  },
  {
    id: 'hospitality-travel',
    name: 'Hospitality & Travel',
    slugName: 'Hospitality & Travel',
    category: 'commerce',
    categoryLabel: 'Direct Booking',
    icon: Compass,
    badge: 'Direct Bookings',
    challenge: 'High commissions to booking platforms and seasonal demand swings.',
    howWeHelp: 'Direct booking websites, local SEO, visual social content, and retargeting that brings lookers back to book.',
    keyResults: ['Direct guest bookings', 'Lower OTA commissions', 'Repeat stays'],
    accentColor: '#FF6B35',
  },
  {
    id: 'food-beverage',
    name: 'Food & Beverage',
    slugName: 'Food & Beverage',
    category: 'commerce',
    categoryLabel: 'Local & CPG',
    icon: UtensilsCrossed,
    badge: 'Visual & Local',
    challenge: 'Fierce local competition and staying top of mind in a scroll-heavy world.',
    howWeHelp: 'Social-first brand building, short-form video, local search, and online ordering and ecommerce growth for packaged brands.',
    keyResults: ['Online orders', 'Physical footfall', 'Repeat customer loyalty'],
    accentColor: '#E8551F',
  },
  {
    id: 'fitness-beauty-lifestyle',
    name: 'Fitness, Beauty & Lifestyle',
    slugName: 'Fitness, Beauty & Lifestyle',
    category: 'commerce',
    categoryLabel: 'Lifestyle & Community',
    icon: Sparkles,
    badge: 'Vibe & Creator',
    challenge: 'Standing out in trend-driven markets and turning followers into paying members or customers.',
    howWeHelp: 'Creator-style video content, vibe marketing, local ads, and booking and membership funnels.',
    keyResults: ['Member signups', 'Studio bookings', 'Product sales volume'],
    accentColor: '#F4B740',
  },
];

const SERVICE_TILES = [
  {
    title: 'SEO, AEO & GEO',
    desc: 'Be found on Google and recommended by ChatGPT, Perplexity, and Gemini.',
    link: '/seo-aeo-geo',
    icon: Search,
    pill: 'Search & LLMs'
  },
  {
    title: 'AI-Powered Marketing',
    desc: 'Automated campaigns, audience insights, and nurture flows.',
    link: '/ai-powered-marketing',
    icon: Sparkles,
    pill: 'Next-Gen Workflows'
  },
  {
    title: 'Performance & Lead Gen',
    desc: 'Paid search, paid social, CRO, and outbound pipelines.',
    link: '/performance-lead-generation',
    icon: TrendingUp,
    pill: 'Revenue Engine'
  },
  {
    title: 'Content, Video & Authority',
    desc: 'Content that ranks, video that converts, and founder thought leadership.',
    link: '/content-video-thought-leadership',
    icon: Video,
    pill: 'Brand Authority'
  },
  {
    title: 'Web & Ecommerce',
    desc: 'Fast, high-converting websites and Shopify stores.',
    link: '/web-ecommerce-experience',
    icon: Layout,
    pill: 'Speed & Conversion'
  },
  {
    title: 'Branding',
    desc: 'Positioning, visual identity, and pitch-ready brand assets.',
    link: '/branding',
    icon: Palette,
    pill: 'Visual Identity'
  },
];

const WHY_BOOTSOLO_PILLARS = [
  {
    title: 'Industry-aware strategy',
    desc: 'We plan around how your buyers decide and the rules your industry follows.',
    badge: 'Tailored'
  },
  {
    title: 'Compliance-aware campaigns',
    desc: 'For regulated industries like healthcare and financial services, we build campaigns with advertising rules in mind.',
    badge: 'Safe & Compliant'
  },
  {
    title: 'Built for lean teams',
    desc: 'Senior strategy and AI-powered execution without enterprise retainers.',
    badge: 'Cost Efficient'
  },
  {
    title: 'One team, every channel',
    desc: 'Search, ads, content, web, and branding working together, not across five vendors.',
    badge: 'Full Stack'
  },
  {
    title: 'You own everything',
    desc: 'Accounts, content, data, and designs stay yours 100%. No hostage IP.',
    badge: 'Total Ownership'
  },
  {
    title: 'No long-term contracts',
    desc: 'Stay because it is working. Zero lock-in, zero fine print.',
    badge: 'Zero Lock-in'
  },
];

const FAQS_DATA = [
  {
    q: 'Do you have experience in my industry?',
    a: "We've worked with businesses across SaaS, ecommerce, apps, and services. For every client, we start with dedicated research into your market, competitors, and buyers, so strategy is built on your industry's realities, not assumptions."
  },
  {
    q: 'Can you market businesses in regulated industries?',
    a: 'Yes. For healthcare, financial services, and Web3, we plan campaigns around the relevant advertising rules and platform policies, and focus on channels that build trust safely.'
  },
  {
    q: 'Do you only work with startups?',
    a: "No. We're built for lean teams, which includes startups, growing businesses, and established brands that want senior strategy without agency bloat."
  },
  {
    q: 'Which marketing channels work best for my industry?',
    a: 'It depends on how your buyers decide. Your free roadmap will recommend the channels most likely to work for your industry and stage.'
  },
  {
    q: 'How quickly can we start?',
    a: 'Most engagements begin within 1–2 weeks of your growth call.'
  },
  {
    q: 'Am I locked into a contract?',
    a: 'No. Bootsolo has no long-term contracts. Stay because it is driving measurable growth.'
  }
];

export default function IndustriesClient() {
  const formRef = useRef(null);
  const gridRef = useRef(null);
  
  // State for filters & search
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('B2B SaaS & Technology');
  
  // State for FAQ accordion
  const [openFaq, setOpenFaq] = useState(null);

  // State for Checklist Lead Magnet
  const [checklistForm, setChecklistForm] = useState({
    name: '',
    email: '',
    industry: 'B2B SaaS & Technology',
  });
  const [checklistLoading, setChecklistLoading] = useState(false);
  const [checklistSuccess, setChecklistSuccess] = useState(false);
  const [checklistError, setChecklistError] = useState('');

  // Scroll helpers
  const scrollToForm = (industryPreset) => {
    if (industryPreset) {
      setSelectedIndustry(industryPreset);
    }
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToGrid = () => {
    if (gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Filter industries
  const filteredIndustries = INDUSTRIES_DATA.filter((item) => {
    const matchesFilter = selectedFilter === 'all' || item.category === selectedFilter;
    const matchesSearch = searchQuery.trim() === '' || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.challenge.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.howWeHelp.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.keyResults.some(r => r.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  // Handle Checklist Lead Magnet Submission
  const handleChecklistSubmit = async (e) => {
    e.preventDefault();
    setChecklistLoading(true);
    setChecklistError('');
    setChecklistSuccess(false);

    try {
      const payload = {
        name: checklistForm.name,
        email: checklistForm.email,
        company: `${checklistForm.name} (${checklistForm.industry})`,
        service_interested: `Growth Checklist: ${checklistForm.industry}`,
        service: 'Industry Growth Checklist',
        form_type: 'lead_magnet_checklist',
        message: `Requested Industry Growth Checklist for: ${checklistForm.industry}`
      };

      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setChecklistSuccess(true);
        emitLeadSubmittedEvent();
      } else {
        const err = await res.json();
        setChecklistError(err.error || 'Failed to send checklist. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setChecklistError('Connection error. Please try again.');
    } finally {
      setChecklistLoading(false);
    }
  };

  return (
    <div className="industries-page" style={{ background: 'var(--snow)', color: 'var(--summit)', minHeight: '100vh' }}>
      
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '70px', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle decorative background gradient */}
        <div style={{ position: 'absolute', top: '-120px', right: '-120px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,107,53,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '180px', left: '-150px', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(56,182,245,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
            
            {/* Eyebrow */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: 'var(--r-pill)', background: 'rgba(255,107,53,0.10)', color: 'var(--sunrise-700)', border: '1px solid rgba(255,107,53,0.24)', marginBottom: '20px' }}>
              <PaperPlaneMark size={14} color="#E8551F" planeColor="#FF6B35" />
              <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                Industries We Serve
              </span>
            </div>

            {/* Headline */}
            <h1 style={{ fontSize: 'clamp(38px, 5.5vw, 64px)', fontWeight: 600, letterSpacing: 'var(--track-display)', lineHeight: 1.05, color: 'var(--summit)', margin: '0 0 24px' }}>
              Marketing that speaks your industry's <span style={{ color: 'var(--sunrise)' }}>language.</span>
            </h1>

            {/* Lead */}
            <p style={{ fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.55, color: 'var(--fg2)', maxWidth: '740px', margin: '0 auto 36px' }}>
              Every industry has different buyers, different rules, and different reasons people say yes. We combine industry-specific strategy with AI-powered execution to bring you more leads, more sales, and more visibility, wherever your customers are searching.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
              <button 
                type="button"
                onClick={() => scrollToForm()}
                className="btn btn-primary glow-sunrise"
                style={{ height: '52px', padding: '0 28px', fontSize: '16px', fontWeight: 600, borderRadius: 'var(--r-pill)' }}
              >
                Get My Free Industry Growth Roadmap <ArrowRight size={18} />
              </button>

              <button 
                type="button"
                onClick={scrollToGrid}
                className="btn btn-ghost"
                style={{ height: '52px', padding: '0 26px', fontSize: '15px', fontWeight: 600, borderRadius: 'var(--r-pill)', background: 'var(--bg-elevated)', borderColor: 'var(--border-strong)' }}
              >
                Find Your Industry ↓
              </button>
            </div>

            {/* Trust Line */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', fontSize: '14px', fontWeight: 500, color: 'var(--fg2)', padding: '10px 20px', borderRadius: 'var(--r-pill)', background: 'rgba(14,26,43,0.04)', border: '1px solid var(--border)' }}>
              <span>No long-term contracts</span>
              <span style={{ color: 'var(--sunrise)', opacity: 0.6 }}>·</span>
              <span>Strategy by humans, speed by AI</span>
              <span style={{ color: 'var(--sunrise)', opacity: 0.6 }}>·</span>
              <span>Plain-language reporting</span>
            </div>
          </div>

          {/* Proof Strip */}
          <div style={{ marginTop: '56px', background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 'var(--r-card)', padding: '24px 32px', boxShadow: 'var(--shadow-1)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', alignItems: 'center' }}>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '24px', fontWeight: 700, color: 'var(--brand-fg)', lineHeight: 1 }}>+312%</span>
                <span style={{ fontSize: '13.5px', color: 'var(--fg2)', lineHeight: 1.4 }}>signups for a solo SaaS founder in one quarter</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '24px', fontWeight: 700, color: 'var(--ice-700)', lineHeight: 1 }}>−58%</span>
                <span style={{ fontSize: '13.5px', color: 'var(--fg2)', lineHeight: 1.4 }}>cost per sale for a bootstrapped D2C brand</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '24px', fontWeight: 700, color: 'var(--brand-fg)', lineHeight: 1 }}>4.1×</span>
                <span style={{ fontSize: '13.5px', color: 'var(--fg2)', lineHeight: 1.4 }}>visibility for an indie app in 60 days</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '24px', fontWeight: 700, color: 'var(--summit)', lineHeight: 1 }}>4,000+</span>
                <span style={{ fontSize: '13.5px', color: 'var(--fg2)', lineHeight: 1.4 }}>solopreneurs in our community</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          THE PROBLEM SECTION
          ========================================================================= */}
      <section className="section" style={{ background: 'var(--white)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '88px 0' }}>
        <div className="wrap">
          <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--destructive)', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '14px' }}>
              The Problem
            </span>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 600, letterSpacing: 'var(--track-tight)', lineHeight: 1.15, color: 'var(--summit)', margin: '0 0 24px' }}>
              Generic marketing gets generic results.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginTop: '40px', maxWidth: '1000px', margin: '40px auto 0' }}>
            
            <div style={{ background: '#FFF6F2', border: '1px solid rgba(255,107,53,0.2)', borderRadius: 'var(--r-card)', padding: '36px 32px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,107,53,0.15)', color: 'var(--sunrise-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <span style={{ fontSize: '20px', fontWeight: 700 }}>✕</span>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--summit)', marginBottom: '14px' }}>
                The Agency Playbook Trap
              </h3>
              <p style={{ fontSize: '15.5px', color: 'var(--fg2)', lineHeight: 1.65, margin: 0 }}>
                A campaign that works for an online store won't work for a hospital. A message that sells software won't sell a property. Yet most agencies run the same playbook for everyone, and you pay for them to learn your industry on your budget.
              </p>
            </div>

            <div style={{ background: 'var(--frost)', border: '1px solid rgba(56,182,245,0.25)', borderRadius: 'var(--r-card)', padding: '36px 32px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(56,182,245,0.2)', color: 'var(--ice-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <CheckCircle2 size={22} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--summit)', marginBottom: '14px' }}>
                How Bootsolo Works
              </h3>
              <p style={{ fontSize: '15.5px', color: 'var(--fg2)', lineHeight: 1.65, margin: 0 }}>
                We start with how your buyers actually decide: what they search for, who they trust, what makes them hesitate, and what rules your industry has to follow. Then we build the marketing around that.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          FIND YOUR INDUSTRY (12 Grid Cards)
          ========================================================================= */}
      <section ref={gridRef} id="find-your-industry" className="section" style={{ padding: '96px 0', background: 'var(--snow)' }}>
        <div className="wrap">
          
          <div style={{ maxWidth: '780px', margin: '0 auto 48px', textAlign: 'center' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--sunrise-700)', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '12px' }}>
              Industry Expertise
            </span>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 600, letterSpacing: 'var(--track-tight)', lineHeight: 1.15, color: 'var(--summit)', margin: '0 0 16px' }}>
              Find Your Industry
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
              Tailored growth architecture engineered around your audience's unique buyer journey and regulatory landscape.
            </p>
          </div>

          {/* Interactive Filters & Search Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
            
            {/* Filter Pills */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {[
                { id: 'all', label: 'All Industries (12)' },
                { id: 'tech', label: 'B2B & Tech' },
                { id: 'commerce', label: 'Ecommerce & D2C' },
                { id: 'regulated', label: 'Regulated & Fintech' },
                { id: 'services', label: 'Services & Real Estate' },
              ].map(f => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setSelectedFilter(f.id)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 'var(--r-pill)',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 160ms var(--ease)',
                    background: selectedFilter === f.id ? 'var(--summit)' : 'var(--white)',
                    color: selectedFilter === f.id ? '#FFFFFF' : 'var(--fg2)',
                    border: `1px solid ${selectedFilter === f.id ? 'var(--summit)' : 'var(--border)'}`,
                    boxShadow: selectedFilter === f.id ? 'var(--shadow-1)' : 'none'
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Quick Search Input */}
            <div style={{ position: 'relative', width: '280px', maxWidth: '100%' }}>
              <Search size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--fg3)' }} />
              <input
                type="text"
                placeholder="Search your industry..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  height: '40px',
                  padding: '0 14px 0 38px',
                  borderRadius: 'var(--r-pill)',
                  border: '1px solid var(--border)',
                  background: 'var(--white)',
                  fontSize: '13.5px',
                  color: 'var(--summit)',
                  outline: 'none'
                }}
              />
            </div>

          </div>

          {/* 12 Industry Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '28px' }}>
            {filteredIndustries.map((item) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={item.id}
                  className="industry-card"
                  style={{
                    background: 'var(--white)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--r-card)',
                    padding: '32px 28px',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 200ms var(--ease), box-shadow 200ms var(--ease), border-color 200ms var(--ease)',
                    boxShadow: 'var(--shadow-1)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Accent Top Border */}
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: item.accentColor }} />

                  {/* Card Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--snow)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.accentColor }}>
                      <IconComp size={24} />
                    </div>
                    <span style={{ fontSize: '11.5px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 'var(--r-pill)', background: 'rgba(14,26,43,0.06)', color: 'var(--fg2)' }}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Industry Title */}
                  <h3 style={{ fontSize: '22px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 16px', letterSpacing: '-0.02em' }}>
                    {item.name}
                  </h3>

                  {/* The Challenge */}
                  <div style={{ marginBottom: '16px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--destructive)', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '4px' }}>
                      The challenge
                    </span>
                    <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.55, margin: 0 }}>
                      {item.challenge}
                    </p>
                  </div>

                  {/* How We Help */}
                  <div style={{ marginBottom: '20px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--sunrise-700)', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '4px' }}>
                      How we help
                    </span>
                    <p style={{ fontSize: '14.5px', color: 'var(--fg1)', lineHeight: 1.55, margin: 0 }}>
                      {item.howWeHelp}
                    </p>
                  </div>

                  {/* Key Results */}
                  <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border)', marginBottom: '22px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--fg3)', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '8px' }}>
                      Key results we drive
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {item.keyResults.map((kr, idx) => (
                        <span 
                          key={idx}
                          style={{
                            fontSize: '12.5px',
                            fontWeight: 500,
                            padding: '3px 8px',
                            borderRadius: 'var(--r-sm)',
                            background: 'var(--snow)',
                            color: 'var(--summit)',
                            border: '1px solid var(--border)'
                          }}
                        >
                          {kr}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Button */}
                  {item.id === 'saas-tech' ? (
                    <Link
                      href="/industries/b2b-saas-technology"
                      className="btn btn-ghost"
                      style={{
                        width: '100%',
                        justifyContent: 'center',
                        borderColor: 'var(--border-strong)',
                        color: 'var(--summit)',
                        fontWeight: 600,
                        fontSize: '14px',
                        padding: '10px 16px',
                        borderRadius: '10px',
                        cursor: 'pointer',
                        textDecoration: 'none'
                      }}
                    >
                      <span>Explore SaaS &amp; Tech</span>
                      <ArrowRight size={15} style={{ marginLeft: '6px', color: 'var(--sunrise)' }} />
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => scrollToForm(item.slugName)}
                      className="btn btn-ghost"
                      style={{
                        width: '100%',
                        justifyContent: 'center',
                        borderColor: 'var(--border-strong)',
                        color: 'var(--summit)',
                        fontWeight: 600,
                        fontSize: '14px',
                        padding: '10px 16px',
                        borderRadius: '10px',
                        cursor: 'pointer'
                      }}
                    >
                      <span>Explore {item.name.split('&')[0].trim()}</span>
                      <ArrowRight size={15} style={{ marginLeft: '6px', color: 'var(--sunrise)' }} />
                    </button>
                  )}

                </div>
              );
            })}
          </div>

          {filteredIndustries.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 20px', background: 'var(--white)', borderRadius: 'var(--r-card)', border: '1px solid var(--border)' }}>
              <p style={{ fontSize: '16px', color: 'var(--fg2)', marginBottom: '16px' }}>
                No industries found matching "{searchQuery}".
              </p>
              <button 
                type="button" 
                onClick={() => { setSearchQuery(''); setSelectedFilter('all'); }} 
                className="btn btn-ghost btn-sm"
              >
                Clear Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* =========================================================================
          RESULTS SECTION
          ========================================================================= */}
      <section className="section" style={{ background: 'var(--summit)', color: '#EEF3F8', padding: '96px 0' }}>
        <div className="wrap">
          <div style={{ maxWidth: '780px', margin: '0 auto 56px', textAlign: 'center' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--sunrise-300)', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '12px' }}>
              Results
            </span>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 600, letterSpacing: 'var(--track-tight)', lineHeight: 1.15, color: '#FFFFFF', margin: '0 0 16px' }}>
              Proof across industries
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--navy-300)', lineHeight: 1.6, margin: 0 }}>
              Real bootstrapped numbers from founders who stopped paying for agency bloat.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginBottom: '48px' }}>
            
            {/* Story 1: SaaS */}
            <div style={{ background: 'var(--navy-800)', border: '1px solid var(--navy-700)', borderRadius: 'var(--r-card)', padding: '36px 32px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '16px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '48px', fontWeight: 700, color: 'var(--sunrise-300)', lineHeight: 1 }}>+312%</span>
                <span style={{ fontSize: '12px', fontWeight: 600, padding: '4px 10px', borderRadius: 'var(--r-pill)', background: 'rgba(255,107,53,0.15)', color: 'var(--sunrise-300)' }}>Solo SaaS</span>
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 600, color: '#FFFFFF', marginBottom: '12px' }}>
                Solo SaaS Signups
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--navy-300)', lineHeight: 1.6, marginBottom: '24px' }}>
                How a solo SaaS founder grew signups in a single quarter by automating high-intent SEO and AI answer engine rankings.
              </p>
              <Link href="/work" style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--sunrise-300)', fontSize: '14.5px', fontWeight: 600, textDecoration: 'none' }}>
                Read the story <ArrowRight size={15} />
              </Link>
            </div>

            {/* Story 2: D2C */}
            <div style={{ background: 'var(--navy-800)', border: '1px solid var(--navy-700)', borderRadius: 'var(--r-card)', padding: '36px 32px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '16px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '48px', fontWeight: 700, color: 'var(--ice)', lineHeight: 1 }}>−58%</span>
                <span style={{ fontSize: '12px', fontWeight: 600, padding: '4px 10px', borderRadius: 'var(--r-pill)', background: 'rgba(56,182,245,0.15)', color: 'var(--ice)' }}>Bootstrapped D2C</span>
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 600, color: '#FFFFFF', marginBottom: '12px' }}>
                Cost Per Sale Reduction
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--navy-300)', lineHeight: 1.6, marginBottom: '24px' }}>
                How a bootstrapped skincare D2C brand cut what it paid for every sale while scaling Shopify checkout conversion rates.
              </p>
              <Link href="/work" style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--ice)', fontSize: '14.5px', fontWeight: 600, textDecoration: 'none' }}>
                Read the story <ArrowRight size={15} />
              </Link>
            </div>

            {/* Story 3: Indie App */}
            <div style={{ background: 'var(--navy-800)', border: '1px solid var(--navy-700)', borderRadius: 'var(--r-card)', padding: '36px 32px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '16px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '48px', fontWeight: 700, color: '#F4B740', lineHeight: 1 }}>4.1×</span>
                <span style={{ fontSize: '12px', fontWeight: 600, padding: '4px 10px', borderRadius: 'var(--r-pill)', background: 'rgba(244,183,64,0.15)', color: '#F4B740' }}>Indie App</span>
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 600, color: '#FFFFFF', marginBottom: '12px' }}>
                AI Answer Box Dominance
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--navy-300)', lineHeight: 1.6, marginBottom: '24px' }}>
                From invisible to the top recommended solution in ChatGPT, Perplexity, and Google AI Overviews in just 60 days.
              </p>
              <Link href="/work" style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#F4B740', fontSize: '14.5px', fontWeight: 600, textDecoration: 'none' }}>
                Read the story <ArrowRight size={15} />
              </Link>
            </div>

          </div>

          <div style={{ textAlign: 'center' }}>
            <Link 
              href="/work" 
              className="btn btn-ghost" 
              style={{ borderColor: 'var(--navy-600)', color: '#EEF3F8', padding: '12px 28px', fontSize: '15px' }}
            >
              See all work <ArrowRight size={16} style={{ marginLeft: '6px' }} />
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
          OUR APPROACH SECTION
          ========================================================================= */}
      <section className="section" style={{ padding: '96px 0', background: 'var(--white)' }}>
        <div className="wrap">
          
          <div style={{ maxWidth: '780px', margin: '0 auto 64px', textAlign: 'center' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--sunrise-700)', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '12px' }}>
              Our Approach
            </span>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 600, letterSpacing: 'var(--track-tight)', lineHeight: 1.15, color: 'var(--summit)', margin: '0 0 16px' }}>
              Industry insight first. AI speed second.
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
              AI doesn't replace domain strategy — it amplifies sharp positioning and accelerates deployment.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px' }}>
            
            {/* Step 1 */}
            <div style={{ background: 'var(--snow)', border: '1px solid var(--border)', borderRadius: 'var(--r-card)', padding: '32px 26px', position: 'relative' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 700, color: 'var(--sunrise-700)', letterSpacing: '0.08em', display: 'block', marginBottom: '16px' }}>
                STEP 01
              </span>
              <h3 style={{ fontSize: '19px', fontWeight: 600, color: 'var(--summit)', marginBottom: '12px' }}>
                Learn your market
              </h3>
              <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                We study your buyers, competitors, search behavior, and industry rules before recommending anything.
              </p>
            </div>

            {/* Step 2 */}
            <div style={{ background: 'var(--snow)', border: '1px solid var(--border)', borderRadius: 'var(--r-card)', padding: '32px 26px', position: 'relative' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 700, color: 'var(--sunrise-700)', letterSpacing: '0.08em', display: 'block', marginBottom: '16px' }}>
                STEP 02
              </span>
              <h3 style={{ fontSize: '19px', fontWeight: 600, color: 'var(--summit)', marginBottom: '12px' }}>
                Build your growth route
              </h3>
              <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                We choose the channels that fit your industry, whether that's search, ads, content, video, or outbound, rather than forcing a one-size-fits-all plan.
              </p>
            </div>

            {/* Step 3 */}
            <div style={{ background: 'var(--snow)', border: '1px solid var(--border)', borderRadius: 'var(--r-card)', padding: '32px 26px', position: 'relative' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 700, color: 'var(--sunrise-700)', letterSpacing: '0.08em', display: 'block', marginBottom: '16px' }}>
                STEP 03
              </span>
              <h3 style={{ fontSize: '19px', fontWeight: 600, color: 'var(--summit)', marginBottom: '12px' }}>
                Launch with AI speed
              </h3>
              <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                AI accelerates research, creative testing, and reporting, so you see results sooner with minimal lag.
              </p>
            </div>

            {/* Step 4 */}
            <div style={{ background: 'var(--snow)', border: '1px solid var(--border)', borderRadius: 'var(--r-card)', padding: '32px 26px', position: 'relative' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 700, color: 'var(--sunrise-700)', letterSpacing: '0.08em', display: 'block', marginBottom: '16px' }}>
                STEP 04
              </span>
              <h3 style={{ fontSize: '19px', fontWeight: 600, color: 'var(--summit)', marginBottom: '12px' }}>
                Scale what works
              </h3>
              <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                We track what brings in leads and revenue in your market, and put more behind it while cutting wasted ad spend.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          WHAT WE BRING TO EVERY INDUSTRY (6 Icon Tiles)
          ========================================================================= */}
      <section className="section" style={{ padding: '96px 0', background: 'var(--snow)', borderTop: '1px solid var(--border)' }}>
        <div className="wrap">
          
          <div style={{ maxWidth: '780px', margin: '0 auto 56px', textAlign: 'center' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--ice-700)', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '12px' }}>
              Core Capabilities
            </span>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 600, letterSpacing: 'var(--track-tight)', lineHeight: 1.15, color: 'var(--summit)', margin: '0 0 16px' }}>
              What We Bring To Every Industry
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
              Full-spectrum capabilities calibrated to your industry's customer journey.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {SERVICE_TILES.map((tile, idx) => {
              const IconTileComp = tile.icon;
              return (
                <Link
                  key={idx}
                  href={tile.link}
                  style={{
                    display: 'block',
                    textDecoration: 'none',
                    background: 'var(--white)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--r-card)',
                    padding: '30px 28px',
                    transition: 'transform 180ms var(--ease), box-shadow 180ms var(--ease), border-color 180ms var(--ease)',
                    boxShadow: 'var(--shadow-1)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'var(--frost)', color: 'var(--ice-700)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <IconTileComp size={22} />
                    </div>
                    <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--fg3)', fontFamily: 'var(--font-mono)' }}>
                      {tile.pill}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 10px', letterSpacing: '-0.01em' }}>
                    {tile.title}
                  </h3>

                  <p style={{ fontSize: '14.5px', color: 'var(--fg2)', lineHeight: 1.55, margin: '0 0 16px' }}>
                    {tile.desc}
                  </p>

                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13.5px', fontWeight: 600, color: 'var(--sunrise-700)' }}>
                    Explore Service <ArrowRight size={14} />
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          WHY BOOTSOLO SECTION
          ========================================================================= */}
      <section className="section" style={{ padding: '96px 0', background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div className="wrap">
          
          <div style={{ maxWidth: '780px', margin: '0 auto 60px', textAlign: 'center' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--sunrise-700)', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '12px' }}>
              The Bootsolo Advantage
            </span>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 600, letterSpacing: 'var(--track-tight)', lineHeight: 1.15, color: 'var(--summit)', margin: '0 0 16px' }}>
              Why Bootsolo
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
              Purpose-built for founders and lean operators who demand transparency, speed, and real revenue.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {WHY_BOOTSOLO_PILLARS.map((pillar, idx) => (
              <div 
                key={idx}
                style={{
                  background: 'var(--snow)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--r-card)',
                  padding: '32px 28px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--sunrise)' }} />
                  <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--sunrise-700)', fontFamily: 'var(--font-mono)' }}>
                    {pillar.badge}
                  </span>
                </div>
                <h3 style={{ fontSize: '19px', fontWeight: 600, color: 'var(--summit)', margin: '0 0 10px' }}>
                  {pillar.title}
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          NEW: DON'T SEE YOUR INDUSTRY?
          ========================================================================= */}
      <section className="section" style={{ padding: '80px 0', background: 'var(--frost)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap">
          <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center', background: 'var(--white)', border: '1px solid rgba(56,182,245,0.3)', borderRadius: 'var(--r-card)', padding: '54px 36px', boxShadow: 'var(--shadow-2)' }}>
            
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: 'var(--r-pill)', background: 'rgba(56,182,245,0.12)', color: 'var(--ice-700)', marginBottom: '20px' }}>
              <Sparkles size={16} />
              <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-mono)' }}>
                Tailored Engagements
              </span>
            </div>

            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', fontWeight: 600, color: 'var(--summit)', margin: '0 0 18px', letterSpacing: '-0.02em' }}>
              Don't see your industry?
            </h2>

            <p style={{ fontSize: '17px', color: 'var(--fg1)', fontWeight: 500, margin: '0 auto 12px', maxWidth: '680px' }}>
              If your customers search, scroll, or ask AI, we can help you reach them.
            </p>

            <p style={{ fontSize: '15.5px', color: 'var(--fg2)', lineHeight: 1.6, margin: '0 auto 32px', maxWidth: '640px' }}>
              Our approach works for any business that wants more leads, sales, or visibility. Tell us about your market, and we'll show you how we'd approach it, for free.
            </p>

            <button 
              type="button"
              onClick={() => scrollToForm('Other')}
              className="btn btn-primary glow-sunrise"
              style={{ height: '48px', padding: '0 28px', fontSize: '15px', fontWeight: 600, borderRadius: 'var(--r-pill)' }}
            >
              Tell Us About Your Business <ArrowRight size={16} />
            </button>

          </div>
        </div>
      </section>

      {/* =========================================================================
          FAQ SECTION
          ========================================================================= */}
      <section className="section" style={{ padding: '96px 0', background: 'var(--white)' }}>
        <div className="wrap">
          <div style={{ maxWidth: '780px', margin: '0 auto 56px', textAlign: 'center' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--sunrise-700)', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '12px' }}>
              FAQ
            </span>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 600, letterSpacing: 'var(--track-tight)', lineHeight: 1.15, color: 'var(--summit)', margin: '0 0 16px' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--fg2)', lineHeight: 1.6, margin: 0 }}>
              Clear answers regarding our domain workflows, contract structure, and timelines.
            </p>
          </div>

          <div style={{ maxWidth: '780px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  style={{
                    background: 'var(--snow)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--r-card)',
                    overflow: 'hidden',
                    transition: 'border-color 160ms var(--ease)'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '22px 24px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontSize: '17px',
                      fontWeight: 600,
                      color: 'var(--summit)'
                    }}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown size={18} style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 200ms', flexShrink: 0, marginLeft: '12px', color: 'var(--sunrise)' }} />
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 24px 22px', fontSize: '15.5px', color: 'var(--fg2)', lineHeight: 1.65 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          NEW: LEAD MAGNET (Checklist)
          ========================================================================= */}
      <section className="section" style={{ padding: '88px 0', background: 'var(--snow)', borderTop: '1px solid var(--border)' }}>
        <div className="wrap">
          <div style={{ maxWidth: '820px', margin: '0 auto', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-card)', padding: '48px 40px', boxShadow: 'var(--shadow-1)' }}>
            
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', borderRadius: 'var(--r-pill)', background: 'rgba(255,107,53,0.1)', color: 'var(--sunrise-700)', fontSize: '12px', fontWeight: 700, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', marginBottom: '16px' }}>
                <Download size={14} /> Free Resource
              </div>

              <h2 style={{ fontSize: 'clamp(26px, 3vw, 34px)', fontWeight: 600, color: 'var(--summit)', margin: '0 0 14px', letterSpacing: '-0.02em' }}>
                Not ready for a call? Get your industry growth checklist.
              </h2>

              <p style={{ fontSize: '15.5px', color: 'var(--fg2)', lineHeight: 1.6, maxWidth: '640px', margin: '0 auto' }}>
                The Industry Growth Checklist: the channels, content, and conversion basics that matter most in your industry, so you can see where you're strong and where you're leaving growth on the table.
              </p>
            </div>

            {checklistSuccess ? (
              <div style={{ textAlign: 'center', padding: '32px 20px', background: 'var(--frost)', borderRadius: 'var(--r-md)', border: '1px solid rgba(56,182,245,0.3)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--success)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <CheckCircle2 size={26} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--summit)', marginBottom: '8px' }}>
                  Checklist on the way!
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--fg2)', margin: 0 }}>
                  We've emailed the <strong>{checklistForm.industry}</strong> checklist to <strong>{checklistForm.email}</strong>. Check your inbox in 60 seconds!
                </p>
                <button
                  type="button"
                  onClick={() => setChecklistSuccess(false)}
                  className="btn btn-ghost btn-sm"
                  style={{ marginTop: '20px' }}
                >
                  Download Another Checklist
                </button>
              </div>
            ) : (
              <form onSubmit={handleChecklistSubmit}>
                
                {checklistError && (
                  <div style={{ padding: '10px 14px', background: '#FFE9DF', color: 'var(--destructive)', borderRadius: 'var(--r-sm)', fontSize: '13.5px', marginBottom: '18px' }}>
                    {checklistError}
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--summit)', marginBottom: '6px' }}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Chen"
                      value={checklistForm.name}
                      onChange={(e) => setChecklistForm(prev => ({ ...prev, name: e.target.value }))}
                      style={{
                        width: '100%',
                        height: '46px',
                        padding: '0 14px',
                        borderRadius: '10px',
                        border: '1px solid var(--border)',
                        background: 'var(--snow)',
                        fontSize: '14px',
                        color: 'var(--summit)',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--summit)', marginBottom: '6px' }}>
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={checklistForm.email}
                      onChange={(e) => setChecklistForm(prev => ({ ...prev, email: e.target.value }))}
                      style={{
                        width: '100%',
                        height: '46px',
                        padding: '0 14px',
                        borderRadius: '10px',
                        border: '1px solid var(--border)',
                        background: 'var(--snow)',
                        fontSize: '14px',
                        color: 'var(--summit)',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--summit)', marginBottom: '6px' }}>
                      Select Industry
                    </label>
                    <select
                      value={checklistForm.industry}
                      onChange={(e) => setChecklistForm(prev => ({ ...prev, industry: e.target.value }))}
                      style={{
                        width: '100%',
                        height: '46px',
                        padding: '0 12px',
                        borderRadius: '10px',
                        border: '1px solid var(--border)',
                        background: 'var(--snow)',
                        fontSize: '14px',
                        color: 'var(--summit)',
                        outline: 'none'
                      }}
                    >
                      {INDUSTRIES_DATA.map(ind => (
                        <option key={ind.id} value={ind.slugName}>{ind.name}</option>
                      ))}
                      <option value="Other">Other / General</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <button
                    type="submit"
                    disabled={checklistLoading}
                    className="btn btn-primary"
                    style={{
                      height: '48px',
                      padding: '0 36px',
                      justifyContent: 'center',
                      borderRadius: 'var(--r-pill)',
                      fontSize: '15px',
                      fontWeight: 600,
                      minWidth: '220px',
                      boxShadow: 'var(--glow-sunrise)'
                    }}
                  >
                    {checklistLoading ? 'Sending...' : 'Send My Checklist'}
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>
      </section>

      {/* =========================================================================
          FINAL CTA & MAIN ROADMAP FORM
          ========================================================================= */}
      <section ref={formRef} id="roadmap-form" className="section" style={{ padding: '100px 0', background: 'var(--summit)', color: '#EEF3F8', position: 'relative', overflow: 'hidden' }}>
        
        {/* Glow */}
        <div style={{ position: 'absolute', bottom: '-150px', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '400px', background: 'radial-gradient(ellipse at center, rgba(255,107,53,0.22) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          
          <div style={{ maxWidth: '780px', margin: '0 auto 56px', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: 'var(--r-pill)', background: 'rgba(255,107,53,0.15)', color: 'var(--sunrise-300)', border: '1px solid rgba(255,107,53,0.3)', marginBottom: '20px' }}>
              <PaperPlaneMark size={16} color="#FF9A6B" planeColor="#FF6B35" />
              <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                Start Your Route
              </span>
            </div>

            <h2 style={{ fontSize: 'clamp(34px, 4.5vw, 50px)', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.1, color: '#FFFFFF', margin: '0 0 18px' }}>
              Let's build a growth plan for your industry.
            </h2>

            <p style={{ fontSize: '17.5px', color: 'var(--navy-300)', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto' }}>
              Get a free industry growth roadmap: how your competitors are winning customers, where you're missing visibility, and the three moves most likely to bring in leads or sales for a business like yours. No pressure, no bloated proposal.
            </p>
          </div>

            {/* Action CTAs */}
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginTop: '36px', marginBottom: '32px' }}>
              <Link 
                href="/#growth-roadmap" 
                className="btn btn-primary glow-sunrise" 
                style={{ height: '54px', padding: '0 32px', fontSize: '16px', fontWeight: 600, borderRadius: 'var(--r-pill)' }}
              >
                Book a Growth Call <ArrowRight size={18} />
              </Link>

              <Link 
                href="/custom-quote" 
                className="btn btn-ghost" 
                style={{ height: '54px', padding: '0 28px', fontSize: '15px', fontWeight: 600, borderRadius: 'var(--r-pill)', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.06)' }}
              >
                Request Custom Quote
              </Link>
            </div>

            {/* Proof / Trust Markers */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', fontSize: '13.5px', color: 'var(--navy-300)', fontFamily: 'var(--font-mono)' }}>
              <span>✓ No long-term contracts</span>
              <span>✓ Strategy by humans, speed by AI</span>
              <span>✓ Plain-language reporting</span>
            </div>

        </div>
      </section>

    </div>
  );
}
