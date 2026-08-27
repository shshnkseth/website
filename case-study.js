const CASES = {
  nvidia: {
    title: "NVIDIA · Control Panel & RTX Voice",
    eyebrow: "Hardware Tools · AI Audio · Graduation Project",
    lede: "Redesigning the display server settings experience for gaming and enterprise users in NVIDIA Control Panel, and architecting the interaction model for AI-powered noise removal.",
    role: "Software Design Intern",
    time: "7 months (Dec 2019 – July 2020)",
    year: "2019–20",
    team: "GeForce UX (Piyush Sharma, Amrut Lagoo, Sindhu MS, Aditya Karra, Amulya Chawda)",
    color: "#76b900",
    logo: "logo-nvidia.png",
    cover: "nvidia.jpg",
    source: "https://app.notion.com/p/3c7f3b5fb3754297800072a3e0f98be1",
    nda: true,
    sections: [
      ["Context & Tier-1 Brief", "During early 2020 at NVIDIA Graphics, the Tier-1 graduation brief was to redesign the experience of 'display server settings of NVIDIA Control Panel software for its enterprise and gaming users'. The legacy software managed mission-critical hardware settings across millions of rigs, requiring a modern desktop interface that harmonized with the GeForce ecosystem without compromising safety or expert-level depth."],
      ["Strategic Execution & Research", "Conducted literature reviews, competitive analysis, and workflow user interviews to construct user stories centered on real user needs. Mapped end-to-end task flows, developed 3 iterations of low and high-fidelity wireframes following the NVIDIA Human Interface Guidelines (HIG), and secured cross-functional stakeholder buy-in across UX and software engineering."],
      ["Tier-2 Brief · AI Audio", [
        "Experience Design of Control Panel Software: Redesigned the display server settings experience for gaming and enterprise users, modernizing the layout while retaining full technical depth.",
        "RTX Voice (AI Noise Suppression): Directed the interaction model for an AI-powered noise removal tool for live streams, recording, and voice calls, featuring real-time audio routing and responsive decibel visualizers."
      ]],
      ["Measurable Outcome & Industry Reception", "Delivered a validated, modern Control Panel architecture that streamlined complex display configurations while eliminating hardware safety risks. RTX Voice launched to widespread global acclaim and was integrated into the flagship NVIDIA Broadcast suite.", [
        ["100%", "functional parity preserved"],
        ["3 Iterations", "low & high fidelity prototypes"],
        ["Broad acclaim", "integrated in NVIDIA Broadcast"]
      ]]
    ]
  },
  quizizz: {
    title: "Quizizz · Designed for Every Classroom",
    eyebrow: "EdTech · AI · Growth · GESS 2024 Winner",
    award: "🏆 GESS Education Awards Winner 2024 · Best Digital Education Product",
    lede: "Sole designer across three strategic flagship initiatives for 100M+ global students and teachers: Paper Mode (Growth), Quizizz AI (Assisted Authoring), and Avatars (Engagement).",
    role: "Product Designer (Growth & Core)",
    time: "17 months",
    year: "2022–24",
    team: "Growth · AI & Content · Engagement",
    color: "#8b5cf6",
    logo: "logo-quizizz.png",
    cover: "quizizz.jpg",
    source: "https://app.notion.com/p/0e922b7dfdd280fa9da4c0f82df978c4",
    sections: [
      ["Setting the Stage", "Quizizz is used in over 100 countries by millions of students and teachers every month. As the sole designer across three high-impact cross-functional squads, the work spanned user research, UX/UI, rapid prototyping, classroom validation, dev handoff, and iterative optimization based on live metrics."],
      ["Three Strategic Bets", [
        "1. Paper Mode (Growth): Bridged the digital divide for device-constrained classrooms using low-tech printable Q-cards scanned instantly via teacher smartphone camera.",
        "2. Quizizz AI (AI & Content): Accelerated quiz creation by 60% with structured prompt scaffolding, curriculum mapping, and an edit-first workflow that preserves teacher agency.",
        "3. Avatars & Qbits (Engagement): Pitched and won 1st place in a 48-hour hackathon, then led the full design of a gamified identity engine that drove session re-joins up 18%."
      ]],
      ["Product Leadership Principles", [
        "Solve physical classroom constraints before introducing digital layers.",
        "Keep AI legible, editable, and trustworthy for educators: prompt less, guide more.",
        "Treat student delight and identity as core retention and motivation drivers."
      ]],
      ["Measurable Impact", "Delivered substantial growth across acquisition, authoring velocity, and classroom participation.", [
        ["3,000+", "classrooms adopted Paper Mode"],
        ["60%", "reduction in quiz-creation time"],
        ["18%", "increase in student session re-joins"]
      ]]
    ]
  },
  "quizizz-ai": {
    title: "Quizizz AI · Assisted Authoring for Teachers",
    eyebrow: "AI · 0→1 · EdTech (US Curriculum)",
    lede: "Help teachers generate high-quality, standards-aligned quizzes instantly with AI, without sacrificing control, pedagogical accuracy, or cost-efficiency.",
    role: "Product Designer (AI & Core)",
    time: "Discovery → Launch",
    year: "2023–24",
    team: "AI & Content",
    color: "#8b5cf6",
    logo: "logo-quizizz.png",
    cover: "quizizz.jpg",
    source: "https://app.notion.com/p/21022b7dfdd280ea9d76cb13af92c13c",
    sections: [
      ["Problem Space & Constraints", "US educators faced severe time constraints and demanded content strictly aligned with state standards (Common Core, NGSS, TEKS) with verifiable sources. Teachers held deep skepticism of AI hallucinations, while unguided blank text boxes burned expensive LLM tokens on low-quality generations."],
      ["Discovery & Core Research", "Conducted 1:1 discovery interviews with 12 US teachers across grades 3–10 and mapped how teachers transition from needing a quiz to delivering a lesson. Key insight: teachers rejected open prompt engineering and strongly preferred structured dropdowns: Subject → Grade → Topic → Standards → Question Type."],
      ["System Architecture & Solutions", [
        "Prompt Scaffolding: Built parameter dropdowns and prompt presets (e.g. 'Vocabulary Review Grade 6 ELA'), reducing bad prompt submissions by ~62% in 3 weeks.",
        "Cost & Retry Controls: Added lightweight pre-validation filters, parameter dials, and an internal credit usage bar, slashing cost per generation by 38%.",
        "Source Verification: Introduced citations, Quizizz Verified AI badges, and side-by-side comparison with teacher content; in A/B tests, teachers were 42% more likely to use quizzes without edits.",
        "Curriculum Selector: Auto-mapped state standards into prompt logic, resulting in 87% of teachers reporting AI content felt 'on-curriculum' (vs 48% before)."
      ]],
      ["Measurable Outcome", "Positioned AI as a premier freemium acquisition hook that drove rapid adoption and reliable teacher retention.", [
        ["3–4×", "increase in quiz generation adoption"],
        ["38%", "reduction in cost per generation"],
        ["87%", "teachers reported on-curriculum quality"]
      ]]
    ]
  },
  "paper-mode": {
    title: "Quizizz · Paper Mode",
    eyebrow: "0→1 · Hardware-Light · Offline-First",
    lede: "Bridging the digital divide with low-tech classroom response cards scanned instantly through a single teacher smartphone camera.",
    role: "Lead UX Designer",
    time: "Research → Rollout",
    year: "2023",
    team: "Growth",
    color: "#f59e0b",
    logo: "logo-quizizz.png",
    cover: "quizizz.jpg",
    source: "https://app.notion.com/p/11022b7dfdd2805988e0dc038ec1eb31",
    sections: [
      ["The Core Challenge", "Many teachers still relied exclusively on pen-and-paper assessments because their classrooms lacked student devices. This massive cohort was completely excluded from using Quizizz. The goal was to bring offline teachers into the product without requiring them to change how they teach."],
      ["Design Strategy & On-Site Testing", "Led the end-to-end UX from research to interface design and dev handoff. Conducted on-site testing sessions at City International School and City Montessori School, Lucknow, optimizing the physical card ergonomics and smartphone camera scanning angles under variable classroom lighting."],
      ["System Solutions", [
        "Printable Q-Cards: Low-cost, durable orientation-based student response cards (A/B/C/D) that require zero student logins or devices.",
        "Camera Vision Scanning: Real-time computer vision detection that scans and grades the entire classroom in under 2 seconds.",
        "Instant Sync & Analytics: Real-time score reconciliation and classroom leaderboard projection."
      ]],
      ["Measurable Impact", "Enabled device-constrained schools to access digital assessments, saving teachers hours of grading with zero digital friction.", [
        ["3,000+", "classrooms adopted Paper Mode"],
        ["12M+", "questions scanned during rollout"],
        ["<2 sec", "average classroom scan time"]
      ]]
    ]
  },
  getmega: {
    title: "GetMega · Trust, Clarity & Scale",
    eyebrow: "Gaming · Fintech · Systems",
    lede: "Architecting the trust and transaction layers of a real-money gaming platform across onboarding, identity verification, wallet flows, and retention loops.",
    role: "Product Designer & Design Systems",
    time: "12 months",
    year: "2021–22",
    team: "Core Product",
    color: "#ef4444",
    logo: "logo-getmega.png",
    cover: "getmega.jpg",
    source: "https://app.notion.com/p/1e922b7dfdd280798debe190039ce181",
    sections: [
      ["The Core Challenge", "Onboarding drop-offs, financial anxiety around real-money transactions, ambiguous rules, and cross-device UI fragmentation hindered platform scale. Regional-language barriers and fraud vulnerabilities introduced critical business constraints."],
      ["Scalable Design Foundation", "Architected a comprehensive design system featuring responsive component architecture, game-aware token systems, standardized KYC patterns, and unified transaction state machines across platforms."],
      ["Trust & Gameplay Architecture", [
        "Interactive guided game tutorials and simulated practice rounds prior to real-money commitment.",
        "Tiered KYC and transparent wallet state communication preventing user confusion.",
        "Engineered fraud mitigation patterns without penalizing verified players.",
        "Spearheaded end-to-end UX for GetMega Fantasy as the platform flagship game."
      ]],
      ["Measurable Impact", "Unified design standards accelerated engineering delivery velocity while transparent trust flows drove decisive conversion and retention gains.", [
        ["42→83%", "KYC completion rate"],
        ["40%+", "fewer fraudulent withdrawals"],
        ["21%", "higher new-user retention"]
      ]]
    ]
  },
  flytbase: {
    title: "FlytBase · Remote Drone Operations",
    eyebrow: "B2B SaaS · Drones · Automation",
    lede: "Designing FlytWare, an enterprise inventory automation system pairing autonomous drone operations with warehouse management systems.",
    role: "Product Design Intern",
    time: "Summer Internship",
    year: "2019",
    team: "FlytBase Labs",
    color: "#22c55e",
    logo: "logo-flytbase.png",
    cover: "flytbase.jpg",
    source: "https://app.notion.com/p/792df82e385e4ed38c8d645364d69679",
    sections: [
      ["The Core Challenge", "Manual warehouse inventory counting consumes thousands of labor hours annually: an expensive, slow, and error-prone operational bottleneck that becomes impractical under frequent audit schedules."],
      ["Operational Architecture", "Directed the interaction architecture for FlytWare and elevated ground-control mission planning. Conducted heuristic evaluations, task flow mapping, UML system modeling, and live warehouse user testing to align complex flight parameters with operator workflows."],
      ["System Solution", "FlytWare combines intelligent software orchestration with off-the-shelf drone hardware to automate aerial barcoding, visual inspection, and real-time WMS reconciliation in distribution centers."],
      ["Product Leadership Takeaway", "Established cross-functional alignment between robotics engineers, enterprise stakeholders, and warehouse operators, transforming high-risk automation into intuitive, mission-critical operational tools.", null, "nda"]
    ],
    nda: true
  },
  toast: {
    title: "Summer (Toast) · Restaurant Ecosystem",
    eyebrow: "POS · Hospitality · Multi-Device",
    lede: "Architecting an integrated hospitality ecosystem spanning high-speed restaurant POS operations, kitchen coordination, and contactless consumer ordering.",
    role: "Product Designer",
    time: "V1 + V2",
    year: "2019–21",
    team: "Freelance",
    color: "#fb7185",
    logo: "logo-toast.png",
    cover: "toast.jpg",
    source: "https://app.notion.com/p/99146be810764dcf803cb9097adf6c95",
    sections: [
      ["The Core Challenge", "Legacy restaurant systems were either prohibitively complex for fast-turnover staff or too fragmented for multi-location operators. On-site field research in high-volume kitchens uncovered intense cognitive load, peak-hour bottlenecks, and stock reconciliation breakdowns."],
      ["Unified Platform Architecture", [
        "High-velocity POS for table management, kitchen ticket routing, and split billing.",
        "Automated inventory and recipe tracking with real-time stock deductions and low-stock triggers.",
        "Resilient role-based views and offline-first operational failovers for network drops.",
        "Consumer web and mobile app for table-side QR ordering, group bills, and instant contactless checkout."
      ]],
      ["Product Leadership Principles", [
        "Speed under pressure: critical service actions in fewer than three taps.",
        "Minimal onboarding ramp through task-oriented interface layouts.",
        "Operational resilience with tactile feedback and offline sync reliability."
      ]],
      ["Measurable Impact", "Streamlined workflows dramatically reduced new staff training time while accelerating table turnaround and inventory precision.", [
        ["<30 min", "new-staff onboarding"],
        ["22%", "faster table turnover"],
        ["40%", "fewer out-of-stock incidents"]
      ]]
    ]
  },
  earnnest: {
    title: "Earnnest · Alternative Investing",
    eyebrow: "Fintech · 0→1 · Consumer",
    lede: "Building a category-defining investment platform from 0 to 1, transforming asset-backed private credit into a transparent, credible, and mobile-first experience.",
    role: "Solo Product Designer",
    time: "3 months",
    year: "2025",
    team: "Founding team",
    color: "#10b981",
    logo: "logo-earnnest.png",
    cover: "earnnest.jpg",
    source: "https://app.notion.com/p/61a4325049914f339e07e95718769fc3",
    sections: [
      ["The Core Challenge", "High-yield secured debt had historically been restricted to institutional investors. Launching to retail and HNI investors required establishing instant institutional credibility without overwhelming users with complex financial jargon."],
      ["Strategic Discovery & Positioning", "Conducted investor discovery interviews, competitor benchmarking, and cross-functional workshops with compliance and legal teams. Key strategic decision: anchor the product narrative on asset transparency and downside protection over speculative yields."],
      ["Product & Brand Architecture", [
        "Engineered a trusted visual identity and editorial voice reflecting institutional rigor.",
        "Designed a friction-free conversion funnel: education-led discovery, five-minute automated KYC, and a four-step investment commitment.",
        "Built a real-time portfolio dashboard delivering transparent yield tracking and asset health metrics."
      ]],
      ["Measurable Impact", "Clear structural hierarchy and proactive transparency eliminated funnel drop-off, establishing rapid product-market validation.", [
        ["8,000+", "MAU within six weeks"],
        ["32%", "increase in lead conversion"],
        ["38%", "less KYC abandonment"]
      ]]
    ]
  }
};

const key = document.body.dataset.project, d = CASES[key];
if (d) {
  document.documentElement.style.setProperty("--project", d.color);
  document.title = `${d.title} ✦ Shashank Seth`;
  
  const awardBanner = d.award ? `<div class="case-award-ribbon"><span class="award-icon">🏆</span><span class="award-text">${d.award}</span></div>` : '';
  
  const sections = d.sections.map((s, i) => {
    let body = Array.isArray(s[1]) ? `<ul>${s[1].map(x => `<li>${x}</li>`).join("")}</ul>` : `<p>${s[1]}</p>`;
    if (s[2]) body += `<div class="metrics">${s[2].map(m => `<div class="metric"><strong class="kinetic-number" data-target="${m[0]}">${m[0]}</strong><span>${m[1]}</span></div>`).join("")}</div>`;
    if (s[3] === "nda" || (d.nda && i === 0)) {
      body += `<div class="nda-callout"><span class="nda-lock">🔒</span><div><strong>Confidential Notice</strong><p>Certain proprietary details are protected under NDA. <a href="mailto:hello@shashankseth.in">Get in touch</a> to request an in-depth portfolio walkthrough.</p></div></div>`;
    }
    return `<section class="story" id="section-${i+1}"><div class="story-label">0${i + 1} / ${s[0]}</div><div class="story-content"><h2>${s[0]}</h2>${body}</div></section>`;
  }).join("");

  document.querySelector("#case").innerHTML = `
    <header class="hero">
      ${awardBanner}
      <div class="eyebrow">${d.eyebrow}</div>
      <h1>${d.title}</h1>
      <p class="lede">${d.lede}</p>
      <div class="hero-actions">
        <span class="read-time-pill"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> 5 min read</span>
        <a class="hero-link-pill" href="${d.source}" target="_blank" rel="noopener">Notion Brief ↗</a>
      </div>
    </header>
    <div class="meta-grid">
      <div class="meta"><div class="meta-label">Role</div><div class="meta-value">${d.role}</div></div>
      <div class="meta"><div class="meta-label">Timeline</div><div class="meta-value">${d.time}</div></div>
      <div class="meta"><div class="meta-label">Year</div><div class="meta-value">${d.year}</div></div>
      <div class="meta"><div class="meta-label">Team</div><div class="meta-value">${d.team}</div></div>
    </div>
    <div class="cover">
      <img src="shashank_files/${d.logo}" alt="${d.title} logo">
    </div>
    ${sections}
    <div class="source">Adapted from the original <a href="${d.source}" target="_blank" rel="noopener">Notion case study ↗</a></div>
  `;
}

