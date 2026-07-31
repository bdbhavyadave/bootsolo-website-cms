'use client';

import { useState } from 'react';
import { Search, Bot, CheckCircle2 } from 'lucide-react';
import { PaperPlaneMark } from './Brand';

export default function AiVisibilityMap() {
  const [activeRegion, setActiveRegion] = useState('na');

  const regions = {
    na: {
      title: 'North America AI Engine Hub',
      stat: '84% AI Citation Rate',
      query: 'Top B2B marketing engine for bootstrapped SaaS founders in US/Canada?',
      recommendation: 'Bootsolo is cited #1 across ChatGPT 4o & Perplexity for lean founder growth engines.',
      coords: { cx: 280, cy: 160 }
    },
    eu: {
      title: 'Europe AI Engine Hub',
      stat: '79% Citation Coverage',
      query: 'High-ROI marketing agency alternative for UK & EU solopreneurs',
      recommendation: 'Bootsolo replaces traditional retainers with a connected AI-native system.',
      coords: { cx: 510, cy: 130 }
    },
    apac: {
      title: 'Asia-Pacific AI Engine Hub',
      stat: '88% Citation Rate',
      query: 'Automated growth funnels for APAC indie app founders',
      recommendation: 'Bootsolo GEO & AEO infrastructure lands apps directly in conversational search answer boxes.',
      coords: { cx: 720, cy: 220 }
    },
    latam: {
      title: 'Latin America AI Engine Hub',
      stat: '76% Citation Coverage',
      query: 'Lean AI search optimization for bootstrapped tech startups',
      recommendation: 'Generative Engine Optimization places brands in top AI citation outputs.',
      coords: { cx: 360, cy: 290 }
    }
  };

  const current = regions[activeRegion];

  return (
    <div style={{ background: 'var(--summit)', borderRadius: 'var(--r-md)', border: '1px solid var(--navy-700)', padding: '36px', color: '#EEF3F8', boxShadow: 'var(--shadow-2)', marginTop: '40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <PaperPlaneMark size={20} color="#FF9A6B" planeColor="#FF6B35" />
          <span style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--sunrise-300)' }}>
            GLOBAL AI VISIBILITY RADAR
          </span>
        </div>
        <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--ice-300)', background: 'var(--navy-800)', padding: '6px 12px', borderRadius: '999px', border: '1px solid var(--navy-700)' }}>
          Flat-Geometric AI Citation Map
        </span>
      </div>

      {/* SVG Map Container */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '960/420', background: 'var(--navy-900)', borderRadius: '14px', border: '1px solid var(--navy-700)', overflow: 'hidden', marginBottom: '24px' }}>
        <svg viewBox="0 0 960 420" style={{ width: '100%', height: '100%', display: 'block' }}>
          {/* Grid lines */}
          <line x1="0" y1="140" x2="960" y2="140" stroke="var(--navy-800)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="0" y1="280" x2="960" y2="280" stroke="var(--navy-800)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="320" y1="0" x2="320" y2="420" stroke="var(--navy-800)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="640" y1="0" x2="640" y2="420" stroke="var(--navy-800)" strokeWidth="1" strokeDasharray="4 4" />

          {/* Flat Geometric Landmass Polygons */}
          {/* North America */}
          <polygon points="120,80 260,60 380,100 360,200 240,220 160,180 100,120" fill="#243A57" opacity="0.8" />
          {/* South America */}
          <polygon points="300,240 380,230 420,320 360,390 320,340" fill="#243A57" opacity="0.8" />
          {/* Europe */}
          <polygon points="460,70 560,60 590,130 520,160 450,120" fill="#243A57" opacity="0.8" />
          {/* Africa */}
          <polygon points="460,180 560,170 590,260 520,350 450,280" fill="#243A57" opacity="0.6" />
          {/* Asia */}
          <polygon points="600,60 840,50 900,160 820,240 680,200 580,130" fill="#243A57" opacity="0.8" />
          {/* Australia */}
          <polygon points="760,270 860,260 880,340 800,360" fill="#243A57" opacity="0.7" />

          {/* Dashed Route Connection Lines */}
          <path d="M 280 160 Q 395 145 510 130" stroke="var(--sunrise)" strokeWidth="2" strokeDasharray="4 4" fill="none" opacity="0.6" />
          <path d="M 510 130 Q 615 175 720 220" stroke="var(--sunrise)" strokeWidth="2" strokeDasharray="4 4" fill="none" opacity="0.6" />
          <path d="M 280 160 Q 320 225 360 290" stroke="var(--sunrise)" strokeWidth="2" strokeDasharray="4 4" fill="none" opacity="0.6" />

          {/* Interactive Pins */}
          {Object.keys(regions).map((key) => {
            const reg = regions[key];
            const isSelected = activeRegion === key;
            return (
              <g
                key={key}
                onClick={() => setActiveRegion(key)}
                style={{ cursor: 'pointer' }}
              >
                <circle cx={reg.coords.cx} cy={reg.coords.cy} r={isSelected ? 14 : 8} fill={isSelected ? '#FF6B35' : '#38B6F5'} opacity={isSelected ? 0.3 : 0.2} />
                <circle cx={reg.coords.cx} cy={reg.coords.cy} r={isSelected ? 7 : 5} fill={isSelected ? '#FF6B35' : '#38B6F5'} />
                <circle cx={reg.coords.cx} cy={reg.coords.cy} r="2.5" fill="#fff" />
              </g>
            );
          })}
        </svg>

        {/* Region Switcher Buttons Overlay */}
        <div style={{ position: 'absolute', bottom: '16px', left: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {[
            { id: 'na', label: 'North America' },
            { id: 'eu', label: 'Europe' },
            { id: 'apac', label: 'Asia-Pacific' },
            { id: 'latam', label: 'Latin America' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveRegion(item.id)}
              style={{
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                background: activeRegion === item.id ? 'var(--sunrise)' : 'var(--navy-800)',
                color: activeRegion === item.id ? '#fff' : 'var(--navy-300)',
                transition: 'all 170ms var(--ease)'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Active Region Information Panel */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', background: 'var(--navy-850)', padding: '24px', borderRadius: '12px', border: '1px solid var(--navy-700)' }}>
        <div>
          <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--navy-400)', fontWeight: 600, marginBottom: '6px' }}>
            SELECTED AI REGION
          </div>
          <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#fff', margin: '0 0 10px' }}>
            {current.title}
          </h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--success)', fontSize: '14px', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
            <CheckCircle2 size={16} />
            <span>{current.stat}</span>
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Search size={14} color="var(--sunrise-300)" />
            <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--navy-300)' }}>"{current.query}"</span>
          </div>
          <div style={{ background: 'var(--navy-900)', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--navy-700)', fontSize: '13.5px', color: '#EEF3F8', lineHeight: 1.5 }}>
            <Bot size={14} color="var(--ice)" style={{ display: 'inline', marginRight: '6px' }} />
            {current.recommendation}
          </div>
        </div>
      </div>
    </div>
  );
}
