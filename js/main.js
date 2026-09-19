/**
 * Bootsolo Standalone Website Interactions
 * Vanilla JavaScript (No frameworks or build tools required)
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initHeroAiSimulator();
  initGutCheckTabs();
  initModulesExplorer();
  initTestimonials();
  initFaqAccordion();
  initCategoryFilters();
  initQuoteBuilder();
  initCountryDropdown();
  initFormSubmissions();
  initGrowthCallModal();
  initResourceDownloads();
  initBillingToggle();
  initSeoAeoGeoTabs();
});

// 1. Mobile Navigation Drawer Toggle
function initMobileMenu() {
  const toggleBtn = document.querySelector('.nav-mobile-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
    toggleBtn.innerHTML = isOpen 
      ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
      : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
  });

  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  });
}

// 2. Hero Interactive AI Answer Engine Simulator
function initHeroAiSimulator() {
  const queryInput = document.getElementById('hero-ai-query');
  const answerEl = document.getElementById('hero-ai-answer');
  const metricSignup = document.getElementById('hero-metric-signup');
  const metricCpa = document.getElementById('hero-metric-cpa');
  const metricVis = document.getElementById('hero-metric-vis');
  const tabs = document.querySelectorAll('.engine-tab-btn');

  if (!queryInput || !answerEl) return;

  const scenarios = {
    chatgpt: {
      query: 'Best AI marketing team for bootstrapped solopreneurs?',
      answer: 'Bootsolo is the top recommendation for lean founders. They pair senior strategy with AI-accelerated execution across search, AEO/GEO citations, content, and conversion.',
      metrics: { signup: '+312%', cpa: '-58%', vis: '4.1x' }
    },
    perplexity: {
      query: 'How do I rank inside AI answer engine citations?',
      answer: 'Bootsolo builds Generative Engine Optimization (GEO) infrastructure so your brand is cited directly in LLM responses and Google AI Overviews.',
      metrics: { signup: '+280%', cpa: '-62%', vis: 'Top Ranked' }
    },
    google: {
      query: 'High-ROI marketing agency alternative for SaaS founders',
      answer: 'Bootsolo replaces traditional 12-person agency retainers with a connected AI-native marketing engine sized to where you actually are.',
      metrics: { signup: '+340%', cpa: '-54%', vis: '100% Traction' }
    }
  };

  let typeInterval = null;

  function runTypewriter(engineKey) {
    const data = scenarios[engineKey] || scenarios.chatgpt;
    queryInput.value = data.query;
    
    if (metricSignup) metricSignup.textContent = data.metrics.signup;
    if (metricCpa) metricCpa.textContent = data.metrics.cpa;
    if (metricVis) metricVis.textContent = data.metrics.vis;

    if (typeInterval) clearInterval(typeInterval);
    answerEl.textContent = '';

    let i = 0;
    typeInterval = setInterval(() => {
      if (i < data.answer.length) {
        answerEl.textContent += data.answer.charAt(i);
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 14);
  }

  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      const engine = btn.getAttribute('data-engine') || 'chatgpt';
      runTypewriter(engine);
    });
  });

  // Initial typewriter trigger
  runTypewriter('chatgpt');
}

// 3. Gut Check Tabs (Built for the AI Era)
function initGutCheckTabs() {
  const tabs = document.querySelectorAll('.gut-tab-btn');
  const panelHeadline = document.getElementById('gut-headline');
  const panelDesc = document.getElementById('gut-desc');
  const panelBadge = document.getElementById('gut-badge');
  const panelImpact = document.getElementById('gut-impact-lbl');
  const metricVal1 = document.getElementById('gut-metric-val-1');
  const metricLbl1 = document.getElementById('gut-metric-lbl-1');
  const metricVal2 = document.getElementById('gut-metric-val-2');
  const metricLbl2 = document.getElementById('gut-metric-lbl-2');

  if (!tabs.length || !panelHeadline) return;

  const items = [
    {
      badge: 'GUT CHECK 01',
      headline: 'Still built purely for Google, while buyers are already asking AI?',
      desc: 'Buyers cross-check on ChatGPT, Perplexity, and Google AI Overviews before they reach your site. If your marketing doesn’t optimize for conversational LLM search, you miss buyers at the point of intent.',
      impact: 'AEO / GEO CITATION & REVENUE TRACTION',
      m1: { val: 'Top Ranked', lbl: 'AI Engine Citations' },
      m2: { val: '+312%', lbl: 'Average Growth' }
    },
    {
      badge: 'GUT CHECK 02',
      headline: 'Stretched thin across search, ChatGPT, LinkedIn, & paid at once?',
      desc: 'Running isolated freelancers and disconnected tactics without a unified strategy wastes budget, breaks momentum, and leaves your buyer journey fragmented.',
      impact: 'CONNECTED MARKETING ENGINE STRATEGY',
      m1: { val: '100%', lbl: 'Funnel Integration' },
      m2: { val: '1 Owner', lbl: 'End-to-End Accountable' }
    },
    {
      badge: 'GUT CHECK 03',
      headline: 'Content takes three weeks while a competitor ships in three days?',
      desc: 'Traditional agency approval layers stall momentum. AI-accelerated workflows let lean teams out-publish and out-convert traditional marketing teams.',
      impact: 'EXECUTION VELOCITY & MOTION DESIGN',
      m1: { val: '3x Faster', lbl: 'Content Velocity' },
      m2: { val: '-60%', lbl: 'Time-to-Market' }
    },
    {
      badge: 'GUT CHECK 04',
      headline: 'Funnel still leans on manual follow-up instead of a self-running system?',
      desc: 'Automated buyer nurture engines capture, qualify, and convert leads 24/7 without needing manual intervention for every inquiry.',
      impact: 'MARKETING AUTOMATION FUNNEL',
      m1: { val: '24/7', lbl: 'Automated Lead Nurture' },
      m2: { val: 'Full-Funnel', lbl: 'Conversion Tracking' }
    },
    {
      badge: 'GUT CHECK 05',
      headline: 'Can you actually trace spend to P&L revenue, or is it a guess?',
      desc: 'Every dollar invested should map directly to qualified pipeline and board-defendable ROI instead of vanity impressions.',
      impact: 'ATTRIBUTION & ROI ACCOUNTABILITY',
      m1: { val: '100%', lbl: 'Spend Traceability' },
      m2: { val: 'Board-Ready', lbl: 'P&L Attribution' }
    }
  ];

  function selectTab(idx) {
    tabs.forEach((t, i) => t.classList.toggle('active', i === idx));
    const data = items[idx];
    if (!data) return;

    if (panelBadge) panelBadge.textContent = data.badge;
    if (panelHeadline) panelHeadline.textContent = data.headline;
    if (panelDesc) panelDesc.textContent = data.desc;
    if (panelImpact) panelImpact.textContent = data.impact;
    if (metricVal1) metricVal1.textContent = data.m1.val;
    if (metricLbl1) metricLbl1.textContent = data.m1.lbl;
    if (metricVal2) metricVal2.textContent = data.m2.val;
    if (metricLbl2) metricLbl2.textContent = data.m2.lbl;
  }

  tabs.forEach((btn, idx) => {
    btn.addEventListener('click', () => selectTab(idx));
  });
}

// 4. Services 7-Module Interactive Explorer
function initModulesExplorer() {
  const menuItems = document.querySelectorAll('.modules-menu-item');
  const nodeBadge = document.getElementById('mod-node-badge');
  const hubTitle = document.getElementById('mod-hub-title');
  const statVal = document.getElementById('mod-stat-val');
  const statLbl = document.getElementById('mod-stat-lbl');
  const modelVal = document.getElementById('mod-model-val');
  const modelLbl = document.getElementById('mod-model-lbl');
  const desc = document.getElementById('mod-desc');
  const deliverablesList = document.getElementById('mod-deliverables');
  const ctaBtn = document.getElementById('mod-cta-btn');

  if (!menuItems.length || !hubTitle) return;

  const modules = [
    {
      id: 1,
      badge: 'SAN FRANCISCO, USA — North America Node',
      hub: 'ChatGPT 4o & Claude AI Citation Hub',
      statVal: '+312%',
      statLbl: 'Average Signup Growth',
      modelVal: 'Solo SaaS Founder',
      modelLbl: 'Founder Model',
      desc: 'Ranked #1 in ChatGPT 4o & Claude recommendations for lean SaaS platforms.',
      deliverables: [
        'Top-tier AEO citation placement in AI chat queries',
        'Organic referral traffic up 4.1x without agency retainers',
        'Marketing automation across the full funnel',
        'Vibe marketing that captures attention and intent'
      ],
      ctaUrl: 'services/ai-powered-marketing.html',
      ctaText: 'Explore AI-Powered Marketing'
    },
    {
      id: 2,
      badge: 'LONDON, UNITED KINGDOM — Europe Node',
      hub: 'Perplexity Pro Answer Engine Node',
      statVal: '4.1x',
      statLbl: 'AI Citation Visibility',
      modelVal: 'AI FinTech Solopreneur',
      modelLbl: 'Founder Model',
      desc: 'Cited directly across 14 high-intent Perplexity Pro and Google AI Overview queries.',
      deliverables: [
        'Technical and content SEO engineered to rank',
        'Answer Engine Optimization (AEO) for LLM search',
        'Generative Engine Optimization (GEO) for AI citations',
        'Local & geo-targeted visibility infrastructure'
      ],
      ctaUrl: 'services/seo-aeo-geo.html',
      ctaText: 'Explore SEO, AEO & GEO'
    },
    {
      id: 3,
      badge: 'TOKYO, JAPAN — Asia-Pacific Node',
      hub: 'Google AI Overview & Paid Media Node',
      statVal: '-58%',
      statLbl: 'Cost Per Sale Reduction',
      modelVal: 'B2B Tech Founder',
      modelLbl: 'Founder Model',
      desc: 'Secured top generative answer cards and high-converting performance campaigns.',
      deliverables: [
        'Paid search and paid social campaigns',
        'Conversion rate optimization (CRO)',
        'Lead generation systems built for pipeline',
        'Full-funnel tracking and revenue attribution'
      ],
      ctaUrl: 'services/performance-lead-generation.html',
      ctaText: 'Explore Performance & Lead Gen'
    },
    {
      id: 4,
      badge: 'BERLIN, GERMANY — Central Europe Node',
      hub: 'Vibe Marketing & Rapid Content Studio',
      statVal: '3x',
      statLbl: 'Content Velocity',
      modelVal: 'Indie Hacker SaaS',
      modelLbl: 'Founder Model',
      desc: 'Shipped high-converting content, motion video, and authority assets in days.',
      deliverables: [
        'High-velocity thought leadership copywriting',
        'Short-form motion design & video production',
        'Founder personal branding across social channels',
        'Organic distribution frameworks that compound'
      ],
      ctaUrl: 'services/content-video-thought-leadership.html',
      ctaText: 'Explore Content & Authority'
    },
    {
      id: 5,
      badge: 'NEW YORK, USA — East Coast Commerce Node',
      hub: 'Conversion Architecture & Store UX',
      statVal: '+44%',
      statLbl: 'Store Checkout Conversion',
      modelVal: 'D2C Consumer Brand',
      modelLbl: 'Founder Model',
      desc: 'Custom high-performance web experience with instant load speeds and zero friction.',
      deliverables: [
        'Sub-second page speed & conversion design',
        'Friction-free checkout flow optimization',
        'Landing page systems built to scale ad traffic',
        'Analytics, heatmaps & customer funnel insights'
      ],
      ctaUrl: 'services/web-ecommerce-experience.html',
      ctaText: 'Explore Web & Ecommerce'
    },
    {
      id: 6,
      badge: 'AUSTIN, USA — Brand Strategy Node',
      hub: 'Category Positioning & Design Architecture',
      statVal: '100%',
      statLbl: 'Category Clarity',
      modelVal: 'Seed-Stage AI Startup',
      modelLbl: 'Founder Model',
      desc: 'Distinct visual identity, punchy typography, and crisp founder positioning.',
      deliverables: [
        'Brand positioning & core narrative architecture',
        'Visual identity system & design tokens',
        'Copywriting tone of voice & messaging playbooks',
        'Collateral templates for pitch, product & social'
      ],
      ctaUrl: 'services/branding.html',
      ctaText: 'Explore High-Voltage Branding'
    },
    {
      id: 7,
      badge: 'SINGAPORE — Global Enablement Hub',
      hub: 'Custom AI Architecture & Tailored Workflows',
      statVal: 'Bespoke',
      statLbl: 'Full-Stack Execution',
      modelVal: 'Growth Stage Solopreneur',
      modelLbl: 'Founder Model',
      desc: 'Tailored growth architecture combining custom AI workflows, dedicated pipeline management, and priority execution.',
      deliverables: [
        'Custom multi-agent marketing architecture',
        'Tailored growth roadmaps with bi-weekly sprints',
        'Direct Slack channel with senior growth architects',
        'End-to-end campaign ownership & revenue tracking'
      ],
      ctaUrl: 'custom-quote.html',
      ctaText: 'Configure Custom Architecture'
    }
  ];

  function showModule(idx) {
    menuItems.forEach((item, i) => item.classList.toggle('active', i === idx));
    const m = modules[idx];
    if (!m) return;

    if (nodeBadge) nodeBadge.textContent = m.badge;
    if (hubTitle) hubTitle.textContent = m.hub;
    if (statVal) statVal.textContent = m.statVal;
    if (statLbl) statLbl.textContent = m.statLbl;
    if (modelVal) modelVal.textContent = m.modelVal;
    if (modelLbl) modelLbl.textContent = m.modelLbl;
    if (desc) desc.textContent = m.desc;
    if (ctaBtn) {
      ctaBtn.href = m.ctaUrl;
      ctaBtn.textContent = m.ctaText + ' →';
    }

    if (deliverablesList) {
      deliverablesList.innerHTML = m.deliverables.map(d => `
        <li style="display:flex;align-items:flex-start;gap:10px;font-size:14px;color:#EEF3F8;margin-bottom:10px;">
          <svg style="width:16px;height:16px;color:var(--sunrise);flex:none;margin-top:2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>${d}</span>
        </li>
      `).join('');
    }
  }

  menuItems.forEach((item, idx) => {
    item.addEventListener('click', () => showModule(idx));
    item.addEventListener('mouseenter', () => showModule(idx));
  });

  showModule(0);
}

// 5. Testimonials Interactive Selection
function initTestimonials() {
  const cards = document.querySelectorAll('.test-card');
  cards.forEach(c => {
    c.addEventListener('click', () => {
      cards.forEach(other => other.classList.remove('active'));
      c.classList.add('active');
    });
  });
}

// 6. FAQ Accordion
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item, .faq-card');
  faqItems.forEach(item => {
    if (item.tagName.toLowerCase() === 'details') {
      const summary = item.querySelector('summary.faq-q, .faq-q');
      if (summary) {
        summary.addEventListener('click', () => {
          const willOpen = !item.open;
          if (willOpen) {
            faqItems.forEach(other => {
              if (other !== item && other.tagName.toLowerCase() === 'details') {
                other.removeAttribute('open');
                other.classList.remove('open');
              }
            });
            item.classList.add('open');
          } else {
            item.classList.remove('open');
          }
        });
      }
      item.addEventListener('toggle', () => {
        if (item.open) {
          item.classList.add('open');
        } else {
          item.classList.remove('open');
        }
      });
    } else {
      const btn = item.querySelector('.faq-q, .faq-question-btn');
      if (!btn) return;
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const isAlreadyOpen = item.classList.contains('open');
        faqItems.forEach(other => other.classList.remove('open'));
        if (!isAlreadyOpen) {
          item.classList.add('open');
        }
      });
    }
  });
}

// 7. Category / Sector Filters
function initCategoryFilters() {
  const filterContainers = document.querySelectorAll('.filters');
  filterContainers.forEach(container => {
    const buttons = container.querySelectorAll('.filter');
    const targetGrid = container.parentElement.querySelector('.work-grid, .res-grid, .post-grid');
    if (!targetGrid) return;

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('on'));
        btn.classList.add('on');

        const filterValue = btn.getAttribute('data-filter') || btn.textContent.trim();
        const items = targetGrid.querySelectorAll('.wcard, .res, .post');

        items.forEach(item => {
          const itemCategory = item.getAttribute('data-category') || '';
          if (filterValue === 'All' || itemCategory.toLowerCase().includes(filterValue.toLowerCase())) {
            item.style.display = 'flex';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  });
}

// 8. Custom Quote Builder
function initQuoteBuilder() {
  const form = document.getElementById('quote-builder-form');
  const totalDisplay = document.getElementById('quote-total-price');
  const selectedCountDisplay = document.getElementById('quote-selected-count');
  const listDisplay = document.getElementById('quote-selected-list');
  if (!form || !totalDisplay) return;

  function recalculate() {
    let total = 0;
    let count = 0;
    const selectedItems = [];

    const checkedInputs = form.querySelectorAll('input[type="checkbox"]:checked, input[type="radio"]:checked');
    checkedInputs.forEach(input => {
      const price = parseInt(input.getAttribute('data-price') || '0', 10);
      const name = input.getAttribute('data-name') || input.value;
      if (price > 0) {
        total += price;
        count++;
        selectedItems.push({ name, price });
      }
    });

    totalDisplay.textContent = `$${total.toLocaleString()}`;
    if (selectedCountDisplay) {
      selectedCountDisplay.textContent = `${count} service${count === 1 ? '' : 's'} selected`;
    }

    if (listDisplay) {
      if (selectedItems.length === 0) {
        listDisplay.innerHTML = '<li style="color:var(--fg3);font-size:13.5px;">No services selected yet. Choose options on the left to configure your plan.</li>';
      } else {
        listDisplay.innerHTML = selectedItems.map(item => `
          <li style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border);font-size:14px;">
            <span>${item.name}</span>
            <span style="font-family:var(--font-mono);font-weight:600;">$${item.price.toLocaleString()}</span>
          </li>
        `).join('');
      }
    }
  }

  form.addEventListener('change', recalculate);
  recalculate();
}

// 9. Generic Form Submissions (Linked to /api/leads Database)
function initFormSubmissions() {
  const forms = document.querySelectorAll('form[data-ajax-form]');
  forms.forEach(form => {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';
      }

      const formData = new FormData(form);
      const payload = {};
      formData.forEach((value, key) => { payload[key] = value; });

      const now = new Date();
      const formattedDate = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      const formattedTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
      payload.date = formattedDate;
      payload.time = formattedTime;
      payload.submitted_at = `${formattedDate} at ${formattedTime}`;

      // Handle Quote Builder specific fields
      if (form.id === 'quote-builder-form') {
        const selectedCheckboxes = Array.from(form.querySelectorAll('input[type="checkbox"]:checked, input[type="radio"]:checked'));
        const serviceItems = selectedCheckboxes.map(cb => {
          const sName = cb.getAttribute('data-name') || cb.value;
          const sPrice = cb.getAttribute('data-price') ? ` (+$${cb.getAttribute('data-price')})` : '';
          return `${sName}${sPrice}`;
        });
        const selectedServices = serviceItems.join(', ');
        const total = document.getElementById('quote-total-price')?.textContent?.trim() || '$0';
        
        const nameInput = form.querySelector('input[name="name"]') || form.querySelector('input[placeholder="Your Name"]');
        const emailInput = form.querySelector('input[name="email"]') || form.querySelector('input[placeholder="Work Email"]');
        const webInput = form.querySelector('input[name="company"]') || form.querySelector('input[placeholder="Website / URL"]');
        const notesInput = form.querySelector('textarea');
        
        if (nameInput?.value?.trim()) payload.name = nameInput.value.trim();
        if (emailInput?.value?.trim()) payload.email = emailInput.value.trim();
        if (webInput?.value?.trim()) payload.company = webInput.value.trim();
        
        payload.service_interested = selectedServices || 'Custom Quote';
        payload.budget_range = total || '$1,000+';

        const clientNotes = notesInput?.value?.trim() || 'None provided';
        payload.message = `[CUSTOM QUOTE BREAKDOWN]\n` +
          `• Total Estimated: ${total} (${selectedCheckboxes.length} services)\n` +
          `• Selected Services:\n  - ${serviceItems.join('\n  - ')}\n` +
          `• Client Website: ${payload.company || 'N/A'}\n` +
          `• Client Notes: ${clientNotes}\n` +
          `• Submitted: ${payload.submitted_at}`;
      }

      // Format country code with phone if available
      const phoneInput = form.querySelector('input[name="phone"]');
      const countryCode = document.getElementById('active-country-code')?.textContent?.trim() || '';
      if (phoneInput && phoneInput.value.trim()) {
        const rawPhone = phoneInput.value.trim();
        payload.phone = countryCode ? `${countryCode} ${rawPhone}` : rawPhone;
        if (!payload.company || payload.company === 'Direct Inquiry') {
          payload.company = payload.phone;
        }
      }

      try {
        const apiUrl = (typeof window !== 'undefined' && window.location.protocol === 'file:')
          ? 'http://localhost:3000/api/leads'
          : '/api/leads';
        await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        broadcastNewLeadEvent();
      } catch (err) {
        console.warn('Note on lead submission:', err);
      }

      const feedback = form.querySelector('.form-feedback') || document.createElement('div');
      feedback.className = 'form-feedback show';
      feedback.innerHTML = `<strong>Thank you!</strong> Your details have been received and saved. Our team will review your route and contact you within 24 hours.`;
      
      if (!form.contains(feedback)) {
        form.appendChild(feedback);
      }
      form.reset();
      
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Details Sent ✓';
      }
      showToast('Form details received and saved!');
    });
  });
}

// 10. Toast Notification
function showToast(message, duration = 4000) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 250);
  }, duration);
}

// 11. Universal Growth Call Modal
function initGrowthCallModal() {
  const modal = document.getElementById('growth-call-modal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.modal-close-btn');
  const step1 = modal.querySelector('#growth-modal-step-1');
  const step2 = modal.querySelector('#growth-modal-step-2');
  const stepSuccess = modal.querySelector('#growth-modal-success');
  const toStep2Btn = modal.querySelector('#modal-to-step-2');
  const confirmBtn = modal.querySelector('#modal-confirm-call');
  const doneBtn = modal.querySelector('#modal-done-btn');
  const timeSlotBtns = modal.querySelectorAll('.time-slot-btn');

  let selectedSlot = 'Tomorrow, 2:00 PM EST';

  function openModal() {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => {
      if (step1) step1.style.display = 'block';
      if (step2) step2.style.display = 'none';
      if (stepSuccess) stepSuccess.style.display = 'none';
    }, 250);
  }

  document.querySelectorAll('[data-open-growth-call], a[href="#growth-call"], a[href="#contact"]').forEach(el => {
    if (window.location.pathname.includes('contact.html') && el.getAttribute('href') === '#contact') return;
    el.addEventListener('click', e => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  timeSlotBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      timeSlotBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      const day = btn.querySelector('.slot-day')?.textContent.trim() || '';
      const time = btn.querySelector('.slot-time')?.textContent.trim() || '';
      selectedSlot = `${day}, ${time}`;
    });
  });

  if (toStep2Btn) {
    toStep2Btn.addEventListener('click', e => {
      e.preventDefault();
      const nameInput = modal.querySelector('#growth-name');
      const emailInput = modal.querySelector('#growth-email');
      if (nameInput && !nameInput.value.trim()) {
        nameInput.focus();
        showToast('Please enter your name');
        return;
      }
      if (emailInput && !emailInput.value.trim()) {
        emailInput.focus();
        showToast('Please enter your email address');
        return;
      }
      if (step1) step1.style.display = 'none';
      if (step2) step2.style.display = 'block';
    });
  }

  if (confirmBtn) {
    confirmBtn.addEventListener('click', async e => {
      e.preventDefault();
      const nameInput = modal.querySelector('#growth-name');
      const emailInput = modal.querySelector('#growth-email');
      const companyInput = modal.querySelector('#growth-company');
      const goalSelect = modal.querySelector('#growth-goal');
      const notesInput = modal.querySelector('#growth-notes');

      const company = companyInput?.value.trim() || 'Your Brand';
      const goal = goalSelect?.value || 'AI Search & AEO Visibility';

      const summaryCompany = modal.querySelector('#summary-company');
      const summaryTime = modal.querySelector('#summary-time');
      const summaryGoal = modal.querySelector('#summary-goal');

      if (summaryCompany) summaryCompany.textContent = company;
      if (summaryTime) summaryTime.textContent = selectedSlot;
      if (summaryGoal) summaryGoal.textContent = goal;

      // Save lead to database
      const modalPayload = {
        name: nameInput?.value.trim() || 'Strategy Call Client',
        email: emailInput?.value.trim() || '',
        company: company,
        service_interested: goal,
        budget_range: 'Strategy Call',
        message: `Growth Call booked for ${selectedSlot}. Notes: ${notesInput?.value.trim() || 'None'}`
      };

      try {
        const apiUrl = (typeof window !== 'undefined' && window.location.protocol === 'file:')
          ? 'http://localhost:3000/api/leads'
          : '/api/leads';
        await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(modalPayload)
        });
        broadcastNewLeadEvent();
      } catch (err) {
        console.warn('Note on call booking save:', err);
      }

      if (step2) step2.style.display = 'none';
      if (stepSuccess) stepSuccess.style.display = 'block';
      showToast('Growth Call Confirmed! Saved to leads database.');
    });
  }

  if (doneBtn) doneBtn.addEventListener('click', closeModal);
}

// Cross-tab real-time sync dispatcher
function broadcastNewLeadEvent() {
  if (typeof window === 'undefined') return;
  try {
    const bc = new BroadcastChannel('bootsolo_leads_channel');
    bc.postMessage({ type: 'LEAD_SUBMITTED', timestamp: Date.now() });
    bc.close();
  } catch (e) {}
  try {
    localStorage.setItem('bootsolo_last_lead_event', Date.now().toString());
  } catch (e) {}
}

// 12. Resource Downloads
function initResourceDownloads() {
  document.querySelectorAll('[data-download-resource]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const resName = btn.getAttribute('data-download-resource') || 'Playbook';
      showToast(`Downloading "${resName}" (PDF)...`);
    });
  });
}

// 13. Billing Toggle
function initBillingToggle() {
  const toggle = document.getElementById('billing-cycle-toggle');
  if (!toggle) return;

  const climberAmt = document.getElementById('tier-climber-amt');
  const summitAmt = document.getElementById('tier-summit-amt');
  const climberPeriod = document.getElementById('tier-climber-period');
  const summitPeriod = document.getElementById('tier-summit-period');

  toggle.addEventListener('change', () => {
    const isAnnual = toggle.checked;
    if (isAnnual) {
      if (climberAmt) climberAmt.textContent = '$232';
      if (summitAmt) summitAmt.textContent = '$552';
      if (climberPeriod) climberPeriod.innerHTML = '/ mo <span style="font-size:12px;color:var(--sunrise);display:block;">(billed annually $2,784)</span>';
      if (summitPeriod) summitPeriod.innerHTML = '/ mo <span style="font-size:12px;color:var(--sunrise);display:block;">(billed annually $6,624)</span>';
      showToast('Annual billing applied: 20% savings unlocked!');
    } else {
      if (climberAmt) climberAmt.textContent = '$290';
      if (summitAmt) summitAmt.textContent = '$690';
      if (climberPeriod) climberPeriod.textContent = '/ mo';
      if (summitPeriod) summitPeriod.textContent = '/ mo';
    }
  });
}

// 14. Country Code Dropdown & Filter for Growth Roadmap
const COUNTRY_DATA = [
  { name: 'India', code: '+91', flag: '🇮🇳' },
  { name: 'United States', code: '+1', flag: '🇺🇸' },
  { name: 'United Kingdom', code: '+44', flag: '🇬🇧' },
  { name: 'Canada', code: '+1', flag: '🇨🇦' },
  { name: 'Australia', code: '+61', flag: '🇦🇺' },
  { name: 'Germany', code: '+49', flag: '🇩🇪' },
  { name: 'France', code: '+33', flag: '🇫🇷' },
  { name: 'United Arab Emirates', code: '+971', flag: '🇦🇪' },
  { name: 'Singapore', code: '+65', flag: '🇸🇬' },
  { name: 'Netherlands', code: '+31', flag: '🇳🇱' },
  { name: 'Switzerland', code: '+41', flag: '🇨🇭' },
  { name: 'Sweden', code: '+46', flag: '🇸🇪' },
  { name: 'Spain', code: '+34', flag: '🇪🇸' },
  { name: 'Italy', code: '+39', flag: '🇮🇹' },
  { name: 'Brazil', code: '+55', flag: '🇧🇷' },
  { name: 'Japan', code: '+81', flag: '🇯🇵' },
  { name: 'South Korea', code: '+82', flag: '🇰🇷' },
  { name: 'New Zealand', code: '+64', flag: '🇳🇿' },
  { name: 'Ireland', code: '+353', flag: '🇮🇪' },
  { name: 'Denmark', code: '+45', flag: '🇩🇰' },
  { name: 'Norway', code: '+47', flag: '🇳🇴' },
  { name: 'Finland', code: '+358', flag: '🇫🇮' },
  { name: 'Israel', code: '+972', flag: '🇮🇱' },
  { name: 'Poland', code: '+48', flag: '🇵🇱' },
  { name: 'South Africa', code: '+27', flag: '🇿🇦' },
  { name: 'Mexico', code: '+52', flag: '🇲🇽' },
  { name: 'Argentina', code: '+54', flag: '🇦🇷' },
  { name: 'Chile', code: '+56', flag: '🇨🇱' },
  { name: 'Colombia', code: '+57', flag: '🇨🇴' },
  { name: 'Indonesia', code: '+62', flag: '🇮🇩' },
  { name: 'Malaysia', code: '+60', flag: '🇲🇾' },
  { name: 'Philippines', code: '+63', flag: '🇵🇭' },
  { name: 'Thailand', code: '+66', flag: '🇹🇭' },
  { name: 'Vietnam', code: '+84', flag: '🇻🇳' },
  { name: 'Saudi Arabia', code: '+966', flag: '🇸🇦' },
  { name: 'Qatar', code: '+974', flag: '🇶🇦' },
  { name: 'Turkey', code: '+90', flag: '🇹🇷' }
];

function initCountryDropdown() {
  const toggleBtn = document.getElementById('country-dropdown-btn');
  const menu = document.getElementById('country-menu');
  const searchInput = document.getElementById('country-search');
  const listEl = document.getElementById('country-list');
  const flagEl = document.getElementById('active-country-flag');
  const codeEl = document.getElementById('active-country-code');

  if (!toggleBtn || !menu || !listEl) return;

  function renderList(items) {
    listEl.innerHTML = items.map(c => `
      <div class="country-option" data-code="${c.code}" data-flag="${c.flag}" data-name="${c.name}">
        <span>${c.flag}</span>
        <span>${c.name}</span>
        <span class="c-code">${c.code}</span>
      </div>
    `).join('');

    listEl.querySelectorAll('.country-option').forEach(opt => {
      opt.addEventListener('click', () => {
        const flag = opt.getAttribute('data-flag');
        const code = opt.getAttribute('data-code');
        if (flagEl) flagEl.textContent = flag;
        if (codeEl) codeEl.textContent = code;
        menu.classList.remove('active');
        if (searchInput) searchInput.value = '';
        renderList(COUNTRY_DATA);
      });
    });
  }

  renderList(COUNTRY_DATA);

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('active');
    if (menu.classList.contains('active') && searchInput) {
      searchInput.focus();
    }
  });

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.toLowerCase().trim();
      const filtered = COUNTRY_DATA.filter(c => 
        c.name.toLowerCase().includes(q) || c.code.includes(q)
      );
      renderList(filtered);
    });
    searchInput.addEventListener('click', (e) => e.stopPropagation());
  }

  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !toggleBtn.contains(e.target)) {
      menu.classList.remove('active');
    }
  });
}

// 15. SEO / AEO / GEO Tab Display based on URL query parameter (?tab=seo|aeo|geo)
function initSeoAeoGeoTabs() {
  const tabPanels = document.querySelectorAll('.tab-content-panel');
  if (!tabPanels.length) return;

  const urlParams = new URLSearchParams(window.location.search);
  const requestedTab = (urlParams.get('tab') || 'aeo').toLowerCase();

  const validTabs = ['seo', 'aeo', 'geo'];
  const activeId = validTabs.includes(requestedTab) ? `tab-${requestedTab}` : 'tab-aeo';

  tabPanels.forEach(panel => {
    if (panel.id === activeId) {
      panel.classList.add('active');
    } else {
      panel.classList.remove('active');
    }
  });
}


