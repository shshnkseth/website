const EXTRA = {
  nvidia: {
    need: "Display server settings within NVIDIA's Control Panel software needed a modernized experience for gaming and enterprise users without losing granular technical depth or power-user functionality.",
    done: "Extracted workflow insights, built user stories and flows, and delivered validated wireframes and UI designs adhering to NVIDIA Human Interface Guidelines (HIG) alongside the RTX Voice interaction model.",
    impact: "Modernized mission-critical GPU controls while preserving 100% functional depth, and launched RTX Voice into the flagship NVIDIA Broadcast suite.",
    vision: "Modernize mission-critical GPU utilities with new-age desktop ergonomics, eliminating hardware safety risks while retaining expert-level parameter control.",
    projects: [
      ["NVIDIA Control Panel & Display Settings", "Experience design of display server settings for gaming and enterprise users adhering to NVIDIA HIG.", "Desktop UI"],
      ["RTX Voice (AI Noise Removal)", "Directing the interaction model, audio routing, and decibel visualizer for real-time AI background noise suppression.", "AI Audio"],
      ["GeForce Client Harmonization", "Unifying interaction patterns and safety guards across internal engineering and consumer-facing tools.", "Systems"]
    ],
    flow: ["Extract workflow insights", "Construct user stories & flows", "3x wireframe iterations & user tests", "Deliver HIG-aligned interface"],
    problems: [
      {
        num: "01",
        title: "Tier-1 Brief: Display Server Settings Redesign",
        problem: "Legacy Control Panel software had an aging interface that created cognitive friction for gamers and enterprise power users managing complex multi-monitor display servers.",
        solution: "Conducted user interviews, competitor benchmarks, and mapped task flows to deliver 3 iterations of low and high-fidelity wireframes following NVIDIA Human Interface Guidelines.",
        metric: "100% Functional Depth Retained"
      },
      {
        num: "02",
        title: "Tier-2 Brief: RTX Voice AI Audio Tooling",
        problem: "Emerging neural-network audio processing needed an intuitive, zero-latency desktop control interface for gamers, streamers, and remote workers battling ambient background noise.",
        solution: "Architected straightforward audio routing, live noise-suppression visualizers, and lightweight background processing controls.",
        metric: "Integrated in NVIDIA Broadcast"
      }
    ],
    press: [
      {
        outlet: "The Verge",
        quote: "Nvidia's RTX Voice app was great, and its Broadcast successor is now available... made the sound of clacking mechanical keyboards completely disappear.",
        url: "https://www.theverge.com/2020/9/17/21444508/nvidia-broadcast-download-rtx-voice-noise-app"
      },
      {
        outlet: "Hardware Canucks",
        quote: "NVIDIA RTX Voice Review: This Is A GAME CHANGER For Streaming! Ambient noise from noisy neighbors is completely eliminated.",
        url: "https://hardwarecanucks.com/audio/rtx-voice-review/"
      },
      {
        outlet: "TechRadar",
        quote: "Nvidia RTX Voice is great for improving sound quality on video calls and transforming PC audio clarity.",
        url: "https://www.techradar.com/in/news/nvidia-rtx-voice-is-great-for-improving-sound-quality-on-video-calls-and-doesnt-actually-need-an-rtx-gpu"
      }
    ],
    takeaways: [
      "Hardware-Software Safety: When system software changes hardware registers directly, minimizing error risk through clear UX safeguards is paramount.",
      "Preserving Expert Depth: Power users embrace modern UI only when granular advanced parameters remain readily accessible.",
      "Cross-Functional Alignment: Securing buy-in between UX, software engineers, and leadership early accelerates technical delivery."
    ],
    media: [
      ["nvidia-1.png", "NVIDIA Control Panel display settings and interface redesign exploration"],
      ["nvidia-2.png", "RTX Voice AI noise removal desktop interface and audio visualizer"]
    ]
  },
  quizizz: {
    need: "Classroom realities varied widely: device-free schools required hybrid access, teachers demanded rapid authoring, and students needed deeper retention loops.",
    done: "Spearheaded three flagship product initiatives across Growth, AI, and Student Engagement: Paper Mode, Quizizz AI, and Avatars.",
    impact: "Over 3,000 classrooms adopted Paper Mode, quiz creation time dropped 60%, and student re-engagement surged 18%.",
    award: "GESS Education Awards Winner 2024 · Best Digital Education Product",
    vision: "Empower every teacher and motivate every student worldwide, regardless of device access, technical literacy, or classroom constraints.",
    video: "https://www.youtube-nocookie.com/embed/rDGXjvXCdbI",
    videoTitle: "Paper Mode Live Classroom Testing in Action",
    projects: [
      ["Paper Mode (Growth)", "Democratized hybrid classrooms with low-tech printable Q-cards scanned via teacher smartphone camera.", "Growth · 0→1"],
      ["Quizizz AI (AI & Content)", "Guided prompt scaffolding and edit-first review architecture reducing authoring time by 60%.", "AI Authoring"],
      ["Avatars & Qbits (Engagement)", "Pitched at internal hackathon and scaled into the core gamified student identity system.", "Retention Engine"]
    ],
    flow: ["Identify classroom barrier", "Prototype on-site with educators", "Ship with safety guardrails", "Iterate from live behavioral metrics"],
    problems: [
      {
        num: "01",
        title: "Paper Mode: Bringing Offline Classrooms into Quizizz",
        problem: "Millions of classrooms lacked 1:1 student devices. Teachers relied on paper quizzes and spent hours manually grading.",
        solution: "Engineered printable orientation-encoded Q-cards scanned via a single teacher smartphone with real-time score sync.",
        metric: "3,000+ Classrooms Adopted"
      },
      {
        num: "02",
        title: "Quizizz AI: Speeding Up Quiz Creation",
        problem: "Creating standards-aligned quizzes from scratch took hours, leading to teacher burnout and stale material reuse.",
        solution: "Designed prompt scaffolding, curriculum selectors, and confidence scoring so teachers prompt less and guide more.",
        metric: "60% Faster Authoring"
      },
      {
        num: "03",
        title: "Avatars & Qbits: Personalization for Motivation",
        problem: "Students enjoyed playing during live sessions but lacked long-term motivation to return and practice outside class.",
        solution: "Created an avatar builder with unlockable gear, participation XP, and lightweight assets running on low-end school devices.",
        metric: "+18% Session Re-joins"
      }
    ],
    takeaways: [
      "Speed & Reliability over Flash: Teachers need frictionless tools with zero learning curve during live class chaos.",
      "Physical First: Solving physical classroom limitations before adding digital layers unlocks unreachable markets.",
      "Emotional Resonance: Playful micro-touches like avatar animations transform utilitarian software into a beloved classroom ritual."
    ],
    highlight: [
      "0 to 1 Product Bet",
      "Avatars: From Internal Hackathon to Core Engagement Engine",
      "Pitched the concept during a company hackathon, built the 48-hour prototype with engineering and illustration, and directed the product strategy through global rollout. Customisable avatars, XP milestones, and unlockable items elevated participation into identity: session re-joins rose 18% and completion climbed 9%."
    ],
    media: [
      ["quizizz-1.gif", "Quizizz Paper Mode in-class scanning and real-time computer vision grading"],
      ["quizizz-2.gif", "Quizizz AI guided authoring flow and curriculum alignment selector"]
    ]
  },
  "quizizz-ai": {
    need: "Educators needed standards-aligned classroom content in seconds, demanding pedagogical control, verified accuracy, and zero generic prompt fatigue.",
    done: "Engineered structured prompt scaffolding, source-grounding signals, curriculum mapping, and an edit-first review architecture.",
    impact: "3–4x increase in quiz generation adoption, 38% reduction in cost per generation, and 87% on-curriculum teacher rating.",
    vision: "Help teachers generate high-quality, standards-aligned quizzes instantly with the help of AI, without sacrificing control, accuracy, or cost-efficiency.",
    video: "https://www.youtube-nocookie.com/embed/nxVTd6pCsb0",
    videoTitle: "Quizizz AI Assisted Authoring Walkthrough",
    projects: [
      ["Prompt Scaffolding", "Subject → grade → standard parameter engine replacing empty text boxes.", "UX Architecture"],
      ["Source Verification & Citations", "Trust badges, citation links, and fact-checking safeguards against hallucinations.", "Trust & Quality"],
      ["Curriculum Selector", "Auto-mapping Common Core, NGSS, and TEKS state standards into prompt logic.", "Curriculum"],
      ["Cost & Quality Controls", "Pre-generation parameters, lightweight LLM validation filters, and credit usage bars.", "Efficiency"]
    ],
    flow: ["Select curriculum context", "Generate structured draft", "Verify sources & standards", "Edit, refine & publish"],
    problems: [
      {
        num: "01",
        title: "Prompting AI Efficiently: Prompt Scaffolding",
        problem: "Teachers struggled to formulate effective prompt engineering queries, and blank input boxes burned costly tokens on vague queries.",
        solution: "Built a structured taxonomy selector (Subject → Grade → Topic → Standards) plus one-click Prompt Presets.",
        metric: "~62% Less Bad Prompts"
      },
      {
        num: "02",
        title: "Reducing Cost from Retries",
        problem: "Teachers repeatedly regenerated quizzes when outputs were uncalibrated, multiplying LLM token spend.",
        solution: "Added lightweight pre-validation filters, custom parameter sliders (question count, difficulty), and credit usage bars.",
        metric: "38% Lower Cost / Gen"
      },
      {
        num: "03",
        title: "Verifying Source Quality & Eliminating Hallucinations",
        problem: "Teachers required verified, trusted sources and resisted ungrounded AI text generation.",
        solution: "Embedded public-domain citations, Quizizz Verified AI badges, and side-by-side comparisons with teacher content.",
        metric: "+42% Edit-Free Usage"
      },
      {
        num: "04",
        title: "Aligning to State Curriculum Standards",
        problem: "Assessments had to align with state requirements (Common Core, NGSS, TEKS) without manual cross-referencing.",
        solution: "Built a curriculum selector that auto-maps curriculum taxonomy directly into prompt logic.",
        metric: "87% On-Curriculum Rating"
      }
    ],
    takeaways: [
      "Prompt Less, Guide More: Replacing free-form prompt boxes with structured pedagogical dropdowns eliminates user anxiety and token waste.",
      "Draft, Don't Publish: Presenting AI outputs as editable drafts reinforces teacher agency and builds long-term trust.",
      "Freemium Hook: Delivering trustworthy first-pass results converted free-tier teachers into enthusiastic paid subscribers."
    ],
    media: [
      ["quizizz-2.gif", "Guided AI content creation workflow showing taxonomy parameters and instant preview"]
    ]
  },
  "paper-mode": {
    need: "Millions of classrooms lacked student devices, forcing teachers to spend hours manually grading printed paper quizzes.",
    done: "Architected the end-to-end Paper Mode experience, pairing low-cost printable Q-cards with instant smartphone computer vision scanning.",
    impact: "Enabled over 3,000 device-constrained classrooms to access interactive assessments with scan times under 2 seconds.",
    vision: "Democratize interactive learning by bringing digital quiz power to every pen-and-paper classroom with zero hardware cost.",
    video: "https://www.youtube-nocookie.com/embed/rDGXjvXCdbI",
    videoTitle: "Paper Mode Live Classroom Testing Demo",
    projects: [
      ["Printable Q-Cards", "Durable, orientation-based physical response cards (A/B/C/D) for students.", "Physical UX"],
      ["Camera Vision Scanning", "Multi-card computer vision recognition optimized for uneven lighting and classroom tilt.", "Mobile UX"],
      ["Real-Time Classroom Sync", "Instant score reconciliation, performance analytics, and live leaderboard sync.", "Data Architecture"]
    ],
    flow: ["Print free response cards", "Project question to class", "Students raise cards", "Scan & sync in < 2 seconds"],
    problems: [
      {
        num: "01",
        title: "Bridging the Hardware Divide",
        problem: "Over 70% of classrooms globally do not have 1:1 student computers or tablets, excluding them from modern EdTech tools.",
        solution: "Designed durable printable QR cards where rotating the card selects answer choices A, B, C, or D.",
        metric: "Zero Student Logins"
      },
      {
        num: "02",
        title: "Variable Classroom Ergonomics & Lighting",
        problem: "On-site testing in Lucknow schools revealed diverse classroom lighting, tilted angles, and glare that degraded scan speed.",
        solution: "Iterated mobile camera UX with edge-detection feedback, audio ticks on card recognition, and high-contrast pattern borders.",
        metric: "< 2s Full Class Scan"
      }
    ],
    takeaways: [
      "On-Site Field Testing: Visiting real classrooms at City International School and City Montessori School revealed edge cases no lab could simulate.",
      "Frugal Innovation: High-tech software paired with low-tech physical paper delivers maximum accessibility and viral classroom adoption.",
      "Teacher Ergonomics: One-handed mobile scanning allows teachers to roam freely without being tied to a desk."
    ],
    media: [
      ["paper-1.png", "Paper Mode end-to-end physical-to-digital scanning workflow and student Q-cards"]
    ]
  },
  getmega: {
    need: "Onboarding drop-offs, financial anxiety around real-money transactions, fraud vulnerabilities, and fragmented UI hindered platform scale.",
    done: "Directed product design for GetMega Fantasy and unified the platform through an end-to-end design system, tiered KYC, and transparent wallet states.",
    impact: "KYC completion doubled from 42% to 83%, fraudulent withdrawals dropped 40%+, and game abandonment decreased 15%.",
    vision: "Transform real-money gaming into a transparent, secure, and intuitive entertainment platform built on absolute trust.",
    projects: [
      ["GetMega Fantasy", "Flagship fantasy sports and contest product experience with intuitive team building.", "Flagship Game"],
      ["Scalable Design System", "Responsive component library, design tokens, and gaming conventions across web & app.", "Design System"],
      ["Interactive Learning System", "Guided practice rounds, rules walkthroughs, and live tutorial overlays.", "User Confidence"],
      ["Wallet & Tiered KYC", "Transparent deposit/withdrawal states, multi-lingual support, and fraud safeguards.", "Fintech Trust"],
      ["Modular Game HUDs", "Live match interfaces, score tickers, dynamic leaderboards, and celebratory win states.", "Gameplay UX"]
    ],
    flow: ["Interactive tutorial", "Tiered KYC verification", "Enter Fantasy contest", "Track live match & withdraw"],
    problems: [
      {
        num: "01",
        title: "Financial Anxiety & Onboarding Friction",
        problem: "Users were hesitant to deposit real money due to confusing KYC steps and ambiguous withdrawal timelines.",
        solution: "Introduced tiered KYC verification, transparent fee breakdowns, and real-time transaction state progress bars.",
        metric: "42% → 83% KYC Completion"
      },
      {
        num: "02",
        title: "UI Fragmentation Across Fast-Paced Games",
        problem: "Rapidly shipping games without centralized standards created jarring UX inconsistencies and developer handoff delays.",
        solution: "Architected a unified design system with shared game HUD components, typography rules, and sound/motion tokens.",
        metric: "25% Faster Dev Handoff"
      }
    ],
    highlight: [
      "Flagship Feature",
      "End-to-end UX Architecture for GetMega Fantasy",
      "Spearheaded the UX strategy for GetMega Fantasy, crafting an intuitive end-to-end journey within a complex real-money ecosystem while establishing platform-wide trust, KYC, and transaction patterns."
    ],
    takeaways: [
      "Trust is the Primary Currency: In real-money gaming, radical transparency around balances and fees directly drives retention.",
      "Practice Before Play: Giving users risk-free simulated matches builds confidence and turns casual visitors into skilled players.",
      "Systemic Scalability: Investing in robust design tokens allows small teams to launch multiple game titles seamlessly."
    ],
    media: [
      ["getmega-1.webp", "GetMega product experience showcasing Fantasy team builder and match centers"],
      ["getmega-2.png", "System component library and modular interface exploration"]
    ]
  },
  flytbase: {
    need: "Manual inventory counting in large distribution facilities required thousands of labor hours, remaining slow, expensive, and error-prone.",
    done: "Designed FlytWare interaction models, autonomous mission planning, and mission-critical cloud ground-control interfaces.",
    impact: "Established a commercially viable, scalable autonomous drone counting system integrated into enterprise WMS platforms.",
    vision: "Automate heavy enterprise warehouse audits through seamless aerial robotics orchestration.",
    projects: [
      ["FlytWare Interaction Architecture", "Autonomous aerial barcoding, visual shelf inspection, and real-time WMS reconciliation.", "Robotics UX"],
      ["Ground Control Station", "Cloud dashboard for multi-drone fleet monitoring, battery telemetries, and emergency overrides.", "Mission Control"],
      ["Enterprise WMS Integration", "Discrepancy resolution flows matching drone barcode telemetry with existing warehouse databases.", "Data Systems"]
    ],
    flow: ["Map warehouse aisles", "Deploy autonomous flight", "Capture aerial barcode data", "Reconcile WMS discrepancies"],
    problems: [
      {
        num: "01",
        title: "High-Risk Flight Parameter Management",
        problem: "Warehouse managers lacked drone piloting experience and were intimidated by complex aerodynamic and safety configurations.",
        solution: "Abstracted complex flight physics into single-click mission templates with automated obstacle clearance zones.",
        metric: "Zero-Incident Mission UX"
      },
      {
        num: "02",
        title: "Real-Time WMS Telemetry Sync",
        problem: "Scanned barcodes had to instantly match thousands of warehouse database entries without lagging the cloud console.",
        solution: "Designed high-density live telemetry views with color-coded shelf heatmaps and instant discrepancy alerts.",
        metric: "Enterprise Scale"
      }
    ],
    takeaways: [
      "Safety-First Interaction: In autonomous robotics, clear visual feedback and instant override switches are non-negotiable.",
      "Bridging Physical & Cloud: Translating 3D spatial flight paths into clear 2D monitoring dashboards reduces operator cognitive load.",
      "Enterprise Empathy: Designing for warehouse shift workers requires large touch targets and high-contrast ambient visibility."
    ],
    media: [
      ["flytbase-1.png", "FlytBase autonomous drone fleet mission planning and live warehouse telemetry"],
      ["flytbase-2.png", "Ground-control operation centre dashboard and inventory reconciliation module"]
    ]
  },
  toast: {
    need: "High-pressure restaurant teams required split-second operational clarity in chaotic service environments, not complex multi-layered software.",
    done: "Architected the POS ecosystem, operational kitchen modules, brand identity, and table-side contactless mobile guest experience.",
    impact: "Cut staff onboarding to under 30 minutes, accelerated table turnover by 22%, and slashed out-of-stock menu errors by 40%.",
    vision: "Unify restaurant operations into a lightning-fast, resilient ecosystem that empowers servers and delights dining guests.",
    projects: [
      ["High-Velocity POS", "Table layout management, kitchen ticket routing, and split billing designed for speed under pressure.", "POS System"],
      ["Live Inventory & Recipe Tracking", "Automated stock deductions, real-time 86'd alerts, and supplier reordering triggers.", "Inventory"],
      ["Contactless Guest App", "Table-side QR code ordering, shared group tabs, and instant digital payments.", "Consumer Mobile"],
      ["Restaurant Brand & System", "Editorial brand identity, typography, and hardware-resilient dark mode design system.", "Brand System"]
    ],
    flow: ["Discover or seat", "Order together via QR / POS", "Kitchen ticket routing", "Instant split & checkout"],
    problems: [
      {
        num: "01",
        title: "Fast-Turnover Staff Onboarding",
        problem: "Restaurants frequently hire temporary or new staff who struggled with legacy POS terminals that took weeks to learn.",
        solution: "Built a task-oriented interface with muscle-memory shortcuts, achieving sub-30-minute training times.",
        metric: "< 30 Min Onboarding"
      },
      {
        num: "02",
        title: "Peak-Hour Kitchen Bottlenecks",
        problem: "Modifications, allergies, and split bills created kitchen chaos and elongated customer wait times.",
        solution: "Designed smart ticket coloring, table-status heatmaps, and dynamic kitchen display station routing.",
        metric: "22% Faster Table Turnover"
      }
    ],
    takeaways: [
      "The 3-Tap Rule: Critical frontline service actions must be achievable in fewer than three taps.",
      "Offline Resilience: In hospitality, internet drops cannot halt food service; offline-first synchronization is essential.",
      "Dual-Sided Empathy: Balancing the frenetic needs of line cooks with the relaxed expectations of restaurant diners."
    ],
    media: [
      ["toast-1.png", "Toast / Summer integrated restaurant POS and contactless mobile ordering ecosystem"],
      ["toast-2.png", "Comprehensive brand identity system, color tokens, and typographic hierarchy"]
    ]
  },
  earnnest: {
    need: "Demystify high-yield alternative debt investing for individual investors and HNIs by establishing immediate institutional credibility and regulatory trust.",
    done: "Defined the 0-to-1 product strategy, visual brand system, investor education journey, streamlined KYC, and real-time portfolio management.",
    impact: "Acquired 8,000+ active investors in six weeks, increased deal conversion by 32%, and reduced KYC drop-off by 38%.",
    vision: "Democratize secured private credit investments through transparent risk modeling, elegant education, and institutional rigor.",
    projects: [
      ["Institutional Brand Identity", "Trust-anchored visual system, refined typography, and editorial financial voice.", "Brand Strategy"],
      ["Education-Led Conversion Funnel", "Interactive deal transparency: Understand the asset → Evaluate risk → One-click invest.", "Growth UX"],
      ["Mobile & Web App Platform", "Transparent deal catalogs, 5-minute automated KYC, and live yield tracking dashboard.", "0→1 Product"]
    ],
    flow: ["Understand the asset class", "Evaluate collateral & deal", "5-minute automated KYC", "Invest & track live yield"],
    problems: [
      {
        num: "01",
        title: "Overcoming Investor Jargon & Risk Hesitancy",
        problem: "Retail investors found alternative debt intimidating and were skeptical of double-digit asset-backed returns.",
        solution: "Replaced financial jargon with transparent collateral breakdowns, interactive return calculators, and risk ratings.",
        metric: "32% Higher Deal Conversion"
      },
      {
        num: "02",
        title: "Lengthy Regulatory KYC Drop-Off",
        problem: "Manual accreditation and document verification took days, causing high funnel abandonment.",
        solution: "Designed a streamlined 4-step digital KYC flow with instant OCR document verification.",
        metric: "38% Less KYC Drop-off"
      }
    ],
    takeaways: [
      "Clarity Over Hype: High-yield fintech succeeds by reassuring users of downside protection rather than shouting return numbers.",
      "Progressive Disclosure: Presenting complex balance sheets in bite-sized interactive cards keeps investors informed without fatigue.",
      "Craft as Trust Signal: Pixel-perfect typography and swift micro-interactions directly signal institutional security."
    ],
    media: [
      ["earnnest-1.png", "Earnnest investment discovery platform and real-time asset tracking dashboard"],
      ["earnnest-2.jpg", "Trust-led color palette, typography hierarchy, and institutional brand tokens"]
    ]
  }
};

// Render Enhancements when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const prjKey = document.body.dataset.project;
  const extra = EXTRA[prjKey];
  if (!extra) return;

  const article = document.querySelector("#case");
  const hero = article.querySelector(".hero");
  const cover = article.querySelector(".cover");

  // 1. Insert Reading Progress Bar
  if (!document.querySelector("#reading-progress")) {
    const bar = document.createElement("div");
    bar.id = "reading-progress";
    bar.setAttribute("aria-hidden", "true");
    document.body.prepend(bar);

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollY / docHeight) * 100)) : 0;
      bar.style.width = `${pct}%`;
    }, { passive: true });
  }

  // 2. Insert Sticky Reading Navigation Spine
  const storySections = article.querySelectorAll(".story");
  if (storySections.length > 0) {
    const spine = document.createElement("aside");
    spine.className = "reading-spine";
    spine.innerHTML = `
      <div class="spine-title">Outline</div>
      <ul class="spine-list">
        ${Array.from(storySections).map((s, idx) => {
          const heading = s.querySelector("h2") ? s.querySelector("h2").textContent : `Section ${idx + 1}`;
          const cleanHeading = heading.replace(/^[0-9\.\s]+/, '');
          return `<li><a href="#section-${idx + 1}" class="spine-link" data-target="section-${idx + 1}"><span class="spine-num">0${idx + 1}</span><span class="spine-label">${cleanHeading}</span></a></li>`;
        }).join("")}
        ${extra.media ? `<li><a href="#project-media" class="spine-link" data-target="project-media"><span class="spine-num">0${storySections.length + 1}</span><span class="spine-label">Media & Artifacts</span></a></li>` : ''}
      </ul>
    `;
    document.querySelector(".case-wrap").prepend(spine);

    // Track active section in spine
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          document.querySelectorAll(".spine-link").forEach(link => {
            link.classList.toggle("active", link.dataset.target === id);
          });
        }
      });
    }, { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" });

    storySections.forEach(s => observer.observe(s));
  }

  // 3. Vision Callout Card (if present)
  if (extra.vision) {
    const visionHtml = `
      <div class="vision-banner spotlight-card">
        <div class="vision-icon">💡</div>
        <div class="vision-body">
          <div class="vision-label">North Star & Vision</div>
          <p class="vision-text">${extra.vision}</p>
        </div>
      </div>
    `;
    hero.insertAdjacentHTML("afterend", visionHtml);
  }

  // 4. Executive Summary Quotes
  const quotesHtml = `
    <div class="case-summary-quotes">
      <div class="summary-quote summary-quote--challenge spotlight-card">
        <div class="quote-header">
          <span class="quote-badge">The Core Challenge</span>
          <span class="quote-mark">“</span>
        </div>
        <blockquote class="quote-text">${extra.need}</blockquote>
        <div class="quote-footer">Problem Definition</div>
      </div>
      <div class="summary-quote summary-quote--execution spotlight-card">
        <div class="quote-header">
          <span class="quote-badge">Strategic Execution</span>
          <span class="quote-mark">“</span>
        </div>
        <blockquote class="quote-text">${extra.done}</blockquote>
        <div class="quote-footer">Product Ownership</div>
      </div>
      <div class="summary-quote summary-quote--impact spotlight-card">
        <div class="quote-header">
          <span class="quote-badge">Measurable Impact</span>
          <span class="quote-mark">“</span>
        </div>
        <blockquote class="quote-text">${extra.impact}</blockquote>
        <div class="quote-footer">Business Outcome</div>
      </div>
    </div>
  `;
  cover.insertAdjacentHTML("afterend", quotesHtml);

  // 5. Interactive Problem & Solution Breakdown Grid (from PDFs)
  if (extra.problems && extra.problems.length > 0) {
    const problemGridHtml = `
      <section class="problem-deep-dive">
        <div class="block-title">Key Problems & Design Solutions</div>
        <div class="problem-cards-grid">
          ${extra.problems.map(prob => `
            <div class="problem-card spotlight-card">
              <div class="problem-card-top">
                <span class="problem-card-num">${prob.num}</span>
                <span class="problem-card-metric">${prob.metric}</span>
              </div>
              <h3 class="problem-card-title">${prob.title}</h3>
              <div class="problem-card-row">
                <div class="problem-label">Challenge:</div>
                <div class="problem-desc">${prob.problem}</div>
              </div>
              <div class="problem-card-row solution-row">
                <div class="problem-label">Solution:</div>
                <div class="problem-desc">${prob.solution}</div>
              </div>
            </div>
          `).join("")}
        </div>
      </section>
    `;
    const quotesEl = article.querySelector(".case-summary-quotes");
    quotesEl.insertAdjacentHTML("afterend", problemGridHtml);
  }

  // 6. Sub-Projects Breakdown & Highlight Box
  if (extra.projects && extra.projects.length > 0) {
    const projHtml = `
      <section class="project-stack">
        <div class="block-title">Initiative Architecture</div>
        <div class="project-cards-container">
          ${extra.projects.map((p, i) => `
            <div class="project-card spotlight-card">
              <div class="project-index">0${i + 1}</div>
              <div class="project-info">
                <h3>${p[0]}</h3>
                <p>${p[1]}</p>
              </div>
              <span class="project-tag">${p[2]}</span>
            </div>
          `).join("")}
        </div>
      </section>
      ${extra.highlight ? `
        <aside class="highlight-box spotlight-card">
          <div class="highlight-kicker">${extra.highlight[0]}</div>
          <h2>${extra.highlight[1]}</h2>
          <p>${extra.highlight[2]}</p>
        </aside>
      ` : ''}
    `;
    const targetNode = article.querySelector(".problem-deep-dive") || article.querySelector(".case-summary-quotes");
    targetNode.insertAdjacentHTML("afterend", projHtml);
  }

  // 7. Execution Flow Visualization
  if (extra.flow && extra.flow.length > 0 && storySections[1]) {
    const flowHtml = `
      <div class="flow-viz">
        ${extra.flow.map((f, i) => `
          <div class="flow-step">
            <strong>Step 0${i + 1}</strong>
            <span>${f}</span>
          </div>
          ${i < extra.flow.length - 1 ? '<span class="flow-arrow">→</span>' : ''}
        `).join("")}
      </div>
    `;
    const storyTarget = storySections[1].querySelector(".story-content") || storySections[1].querySelector("div:last-child");
    if (storyTarget) storyTarget.insertAdjacentHTML("beforeend", flowHtml);
  }

  // 8. Press & Industry Reception Grid (NVIDIA / Quizizz)
  if (extra.press && extra.press.length > 0) {
    const pressHtml = `
      <section class="press-section">
        <div class="block-title">Industry Reception & Community Reviews</div>
        <div class="press-grid">
          ${extra.press.map(pr => `
            <a class="press-card spotlight-card" href="${pr.url}" target="_blank" rel="noopener">
              <div class="press-card-header">
                <span class="press-outlet">${pr.outlet}</span>
                <span class="press-link-icon">↗</span>
              </div>
              <blockquote class="press-quote">“${pr.quote}”</blockquote>
            </a>
          `).join("")}
        </div>
      </section>
    `;
    const lastStory = storySections[storySections.length - 1];
    if (lastStory) lastStory.insertAdjacentHTML("afterend", pressHtml);
  }

  // 9. Interactive Video Prototype Embed (if available)
  if (extra.video) {
    const videoHtml = `
      <section class="video-showcase-section">
        <div class="block-title">Interactive Video Walkthrough</div>
        <div class="mockup-browser">
          <div class="mockup-header">
            <div class="traffic-lights">
              <span></span><span></span><span></span>
            </div>
            <div class="mockup-url-bar">
              <span class="url-protocol">https://</span>demo.quizizz.internal/classroom-view
            </div>
            <div class="mockup-actions">
              <span class="badge live">LIVE DEMO</span>
            </div>
          </div>
          <div class="mockup-viewport">
            <iframe 
              src="${extra.video}" 
              title="${extra.videoTitle || 'Demo Video'}" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
              loading="lazy">
            </iframe>
          </div>
        </div>
        <div class="mockup-caption">${extra.videoTitle || 'Classroom recording & prototype walkthrough'}</div>
      </section>
    `;
    const sourceNode = article.querySelector(".source");
    sourceNode.insertAdjacentHTML("beforebegin", videoHtml);
  }

  // 10. Selected Project Media Gallery
  if (extra.media && extra.media.length > 0) {
    const mediaHtml = `
      <section id="project-media" class="media-section">
        <div class="block-title">Selected Design Artifacts & Media</div>
        <div class="media-grid">
          ${extra.media.map(m => `
            <figure class="media-card spotlight-card">
              <div class="media-img-wrap">
                <img src="shashank_files/case-studies/${m[0]}" alt="${m[1]}" loading="lazy" onerror="this.src='shashank_files/${m[0]}'">
              </div>
              <figcaption>${m[1]} · High-resolution design artifact</figcaption>
            </figure>
          `).join("")}
        </div>
      </section>
    `;
    const sourceNode = article.querySelector(".source");
    sourceNode.insertAdjacentHTML("beforebegin", mediaHtml);
  }

  // 11. Key Takeaways & Product Leadership Principles Box
  if (extra.takeaways && extra.takeaways.length > 0) {
    const takeawaysHtml = `
      <section class="takeaways-section spotlight-card">
        <div class="takeaways-header">
          <span class="takeaways-badge">Reflection</span>
          <h2>Product Leadership Takeaways</h2>
        </div>
        <ul class="takeaways-list">
          ${extra.takeaways.map(t => `<li><span class="takeaway-bullet">✦</span><p>${t}</p></li>`).join("")}
        </ul>
      </section>
    `;
    const sourceNode = article.querySelector(".source");
    sourceNode.insertAdjacentHTML("beforebegin", takeawaysHtml);
  }

  // 12. Micro-Interactions: Mouse-Tracking Spotlight Glow
  document.querySelectorAll(".spotlight-card").forEach(card => {
    let raf = null;
    card.addEventListener("mousemove", (e) => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    });
  });

  // 13. Micro-Interactions: Kinetic Metric Counters
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        animateNumber(el);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.6 });

  document.querySelectorAll(".kinetic-number").forEach(el => counterObserver.observe(el));

  function animateNumber(element) {
    const raw = element.getAttribute("data-target") || element.textContent;
    const match = raw.match(/([\d\.,]+)/);
    if (!match) return;

    const numStr = match[0].replace(/,/g, '');
    const target = parseFloat(numStr);
    if (isNaN(target)) return;

    const prefix = raw.slice(0, raw.indexOf(match[0]));
    const suffix = raw.slice(raw.indexOf(match[0]) + match[0].length);
    const duration = 1400;
    const startTime = performance.now();

    const easeOutExpo = (x) => (x === 1 ? 1 : 1 - Math.pow(2, -10 * x));

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = target * easeOutExpo(progress);

      const formatted = Number.isInteger(target)
        ? Math.round(current).toLocaleString()
        : current.toFixed(1);

      element.textContent = `${prefix}${formatted}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
    requestAnimationFrame(step);
  }
});
