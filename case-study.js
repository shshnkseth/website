const CASES = {
  nvidia: {
    title: "NVIDIA · Native GPU Tools",
    eyebrow: "Hardware Tools · AI Audio",
    lede: "Modernizing mission-critical GPU software for gamers and creators, and architecting the interaction model for AI-powered noise removal.",
    role: "Software Design Intern",
    time: "7 months",
    year: "2019–20",
    team: "GeForce UX",
    color: "#76b900",
    logo: "logo-nvidia.png",
    cover: "nvidia.jpg",
    source: "https://app.notion.com/p/3c7f3b5fb3754297800072a3e0f98be1",
    sections: [
      ["Context", "GeForce Experience supported driver updates, graphics tuning, and game capture across millions of active rigs, but accumulated feature density created navigational friction. In parallel, a separate initiative explored neural-network audio processing for real-time streaming."],
      ["Strategic Execution", "Led UX research, interaction architecture, and iterative prototyping across literature reviews, telemetry analysis, and technical user evaluations. Partnered closely with AI and GPU engineering to translate complex model parameters into responsive, zero-latency desktop controls."],
      ["Core Solutions", [
        "Experience Design of Control Panel Software for Gaming & Enterprise Users",
        "Designed RTX Voice, establishing intuitive audio routing, live noise-suppression visualizers, and lightweight background processing controls."
      ]],
      ["Outcome", "Delivered a streamlined control-panel architecture that retained deep technical customization while dramatically reducing interaction friction. RTX Voice launched to critical acclaim and was integrated into NVIDIA Broadcast."]
    ]
  },
  quizizz: {
    title: "Quizizz · Designed for Every Learner",
    eyebrow: "EdTech · AI · Growth",
    lede: "Three strategic product initiatives: Paper Mode, Quizizz AI, and Avatars, architected to expand classroom access, accelerate teacher authoring, and deepen student engagement.",
    role: "Product Designer (Growth & Core)",
    time: "17 months",
    year: "2022–24",
    team: "Growth · AI · Engagement",
    color: "#8b5cf6",
    logo: "logo-quizizz.png",
    cover: "quizizz.jpg",
    source: "https://app.notion.com/p/0e922b7dfdd280fa9da4c0f82df978c4",
    sections: [
      ["Strategic Scope", "Directed product design across three high-impact growth bets, driving user research, product strategy, interaction models, validation, and design systems for millions of global educators and students."],
      ["Three Strategic Bets", [
        "Paper Mode: Democratized hybrid classrooms by turning printed cards into instant digital scorecards using a single teacher device.",
        "Quizizz AI: Accelerated quiz creation with structured prompt scaffolds, curriculum mapping, and an edit-first workflow that preserves teacher agency.",
        "Avatars: Drove student engagement and retention through customizable, classroom-safe identity systems."
      ]],
      ["Product Leadership Principles", [
        "Solve physical classroom constraints before introducing digital layers.",
        "Keep AI legible, editable, and trustworthy for educators.",
        "Treat student delight and agency as core retention drivers."
      ]],
      ["Measurable Impact", "Delivered substantial growth across acquisition, authoring velocity, and classroom participation.", [
        ["3,000+", "classrooms adopted Paper Mode"],
        ["60%", "reduction in quiz-creation time"],
        ["18%", "increase in student session re-joins"]
      ]]
    ]
  },
  "quizizz-ai": {
    title: "Quizizz AI · Assisted Authoring",
    eyebrow: "AI · 0→1 · EdTech",
    lede: "Empowering teachers to generate standards-aligned classroom content in seconds, maintaining educator control, pedagogical accuracy, and high cost efficiency.",
    role: "Product Designer (AI & Core)",
    time: "Discovery → launch",
    year: "2023–24",
    team: "AI & Content",
    color: "#8b5cf6",
    logo: "logo-quizizz.png",
    cover: "quizizz.jpg",
    source: "https://app.notion.com/p/21022b7dfdd280ea9d76cb13af92c13c",
    sections: [
      ["The Core Challenge", "Teachers operated under severe time constraints, required state-aligned curriculum standards, and demanded verifiable sources. They held strong skepticism toward hallucinated, generic AI outputs, while blank prompt fields produced low-quality generations and costly API retries."],
      ["Research & Insights", "Field research with US educators across grades 3 to 10 identified a definitive workflow pattern: teachers strongly favored structured pedagogical parameters (subject, grade, topic, standard) over unstructured prompt writing. Over 20 educators participated in iterative usability testing."],
      ["Product Architecture", [
        "Designed prompt scaffolding presets enabling teachers to parameterize content without open prompt engineering.",
        "Built curriculum selectors mapping subject, grade, topic, and state standards directly into prompt logic.",
        "Implemented verifiable source citations, trust badges, pre-generation token controls, and edit-first regeneration flows."
      ]],
      ["Measurable Impact", "The guided workflow elevated first-pass generation utility, reduced inference costs, and established AI as a primary freemium acquisition hook.", [
        ["3–4×", "increase in generation adoption"],
        ["38%", "lower API cost per generation"],
        ["87%", "reported content felt on-curriculum"]
      ]]
    ]
  },
  "paper-mode": {
    title: "Quizizz · Paper Mode",
    eyebrow: "0→1 · Hardware-Light · Offline-First",
    lede: "Bridging the digital divide with low-tech classroom response cards scanned instantly through a single teacher smartphone.",
    role: "Lead UX Designer",
    time: "Research → rollout",
    year: "2023",
    team: "Growth",
    color: "#f59e0b",
    logo: "logo-quizizz.png",
    cover: "quizizz.jpg",
    source: "https://app.notion.com/p/11022b7dfdd2805988e0dc038ec1eb31",
    sections: [
      ["The Core Challenge", "Over 70% of global classrooms operate in device-constrained environments. Educators relied heavily on printed paper assessments and lost hours manually grading and entering marks into digital systems."],
      ["Design Strategy", "Architected an offline-first hybrid workflow: students hold orientation-encoded paper Q-cards (A/B/C/D), while the teacher smartphone camera batches and grades responses in real time using computer vision."],
      ["System Solutions", [
        "Printable QR-coded student response sheets engineered for durability and fold resilience.",
        "Camera vision scanning UX optimized for fast batch detection across uneven classroom lighting and angles.",
        "Instant score aggregation and live classroom leaderboard sync."
      ]],
      ["Measurable Impact", "Live classroom pilots proved that meaningful digital interactivity does not require 1:1 hardware, unlocking adoption in previously unreachable markets.", [
        ["3,000+", "pilot classrooms adopted Paper Mode"],
        ["12M+", "questions scanned during rollout"],
        ["<2 sec", "average full-class scan time"]
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
      ["The Core Challenge", "Funnel drop-offs during onboarding and wallet setup, ambiguous gameplay rules, and cross-device interface inconsistencies caused significant user friction. Regional-language barriers and fraud vulnerabilities introduced critical business constraints."],
      ["Scalable Design Foundation", "Architected a comprehensive design system featuring responsive component architecture, game-aware token systems, standardized KYC patterns, and unified transaction state machines across platforms."],
      ["Trust & Gameplay Architecture", [
        "Interactive guided game tutorials and simulated practice rounds prior to real-money commitment.",
        "Tiered KYC and transparent wallet state communication preventing user confusion.",
        "Engineered fraud mitigation patterns without penalizing verified players.",
        "Spearheaded end-to-end UX for GetMega Fantasy as the platform flagship game."
      ]],
      ["Measurable Impact", "Unified design standards accelerated engineering delivery velocity while transparent trust flows drove decisive conversion and retention gains.", [
        ["25%", "less design handoff time"],
        ["60%+", "increase in daily task engagement"],
        ["₹5 Cr+", "rewards disbursed in two months"]
      ]]
    ]
  },
  flytbase: {
    title: "FlytBase · Remote Drone Operations",
    eyebrow: "B2B SaaS · Drones · Automation",
    lede: "Designing FlytWare, an enterprise inventory automation system pairing autonomous drone operations with warehouse management systems.",
    role: "Product Design Intern",
    time: "Summer internship",
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
  const sections = d.sections.map((s, i) => {
    let body = Array.isArray(s[1]) ? `<ul>${s[1].map(x => `<li>${x}</li>`).join("")}</ul>` : `<p>${s[1]}</p>`;
    if (s[2]) body += `<div class="metrics">${s[2].map(m => `<div class="metric"><strong>${m[0]}</strong><span>${m[1]}</span></div>`).join("")}</div>`;
    if (s[3] === "nda") body += `<div class="nda">Some details remain private under NDA. Get in touch for an in-depth walkthrough.</div>`;
    return `<section class="story"><div class="story-label">0${i + 1} / ${s[0]}</div><div><h2>${s[0]}</h2>${body}</div></section>`;
  }).join("");
  document.querySelector("#case").innerHTML = `<header class="hero"><div class="eyebrow">${d.eyebrow}</div><h1>${d.title}</h1><p class="lede">${d.lede}</p></header><div class="meta-grid"><div class="meta"><div class="meta-label">Role</div><div class="meta-value">${d.role}</div></div><div class="meta"><div class="meta-label">Timeline</div><div class="meta-value">${d.time}</div></div><div class="meta"><div class="meta-label">Year</div><div class="meta-value">${d.year}</div></div><div class="meta"><div class="meta-label">Team</div><div class="meta-value">${d.team}</div></div></div><div class="cover"><img src="shashank_files/${d.logo}" alt="${d.title} logo"></div>${sections}<div class="source">Adapted from the original <a href="${d.source}" target="_blank" rel="noopener">Notion case study ↗</a></div>`;
}
