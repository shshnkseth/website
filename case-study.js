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
    vision: "Modernize mission-critical GPU utilities with new-age desktop ergonomics, eliminating hardware safety risks while retaining expert-level parameter control.",
    stickers: [
      { icon: "⚡", label: "RTX Voice", sub: "AI Audio Suppression", rot: "-2.5deg", href: "https://www.theverge.com/2020/9/17/21444508/nvidia-broadcast-download-rtx-voice-noise-app" },
      { icon: "🎮", label: "NVIDIA HIG", sub: "Display Server Settings", rot: "2deg", href: "projects.html" },
      { icon: "🎙️", label: "Broadcast App", sub: "Global Press Acclaim", rot: "-1.5deg", href: "https://www.nvidia.com/en-us/geforce/broadcasting/broadcast-app/" }
    ],
    quotes: {
      need: "Display server settings within NVIDIA's Control Panel software needed a modernized experience for gaming and enterprise users without losing granular technical depth or power-user functionality.",
      done: "Extracted workflow insights, built user stories and flows, and delivered validated wireframes and UI designs adhering to NVIDIA Human Interface Guidelines (HIG) alongside the RTX Voice interaction model.",
      impact: "Modernized mission-critical GPU controls while preserving 100% functional depth, and launched RTX Voice into the flagship NVIDIA Broadcast suite."
    },
    problems: [
      {
        num: "01",
        title: "Tier-1 Brief: Display Server Settings Redesign",
        problem: "Legacy Control Panel software had an aging interface that created cognitive friction for gamers and enterprise power users managing complex multi-monitor display servers.",
        solution: "Conducted user interviews, competitor benchmarks, and mapped task flows to deliver 3 iterations of low and high-fidelity wireframes following NVIDIA Human Interface Guidelines.",
        metric: "100% Functional Depth"
      },
      {
        num: "02",
        title: "Tier-2 Brief: RTX Voice AI Audio Tooling",
        problem: "Emerging neural-network audio processing needed an intuitive, zero-latency desktop control interface for gamers, streamers, and remote workers battling ambient background noise.",
        solution: "Architected straightforward audio routing, live noise-suppression visualizers, and lightweight background processing controls.",
        metric: "Integrated in NVIDIA Broadcast"
      }
    ],
    projects: [
      ["NVIDIA Control Panel & Display Settings", "Experience design of display server settings for gaming and enterprise users adhering to NVIDIA HIG.", "Desktop UI"],
      ["RTX Voice (AI Noise Removal)", "Directing the interaction model, audio routing, and decibel visualizer for real-time AI background noise suppression.", "AI Audio"],
      ["GeForce Client Harmonization", "Unifying interaction patterns and safety guards across internal engineering and consumer-facing tools.", "Systems"]
    ],
    flow: ["Extract workflow insights", "Construct user stories & flows", "3x wireframe iterations & user tests", "Deliver HIG-aligned interface"],
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
    title: "Wayground (formerly Quizizz) · Designed for Every Classroom",
    eyebrow: "EdTech · AI · Growth · GESS 2024 Winner",
    award: "🏆 GESS Education Awards Winner 2024 · Best Digital Education Product",
    lede: "Sole designer across three strategic flagship initiatives for 100M+ global students and teachers: Paper Mode (Growth), Wayground AI (Assisted Authoring), and Avatars (Engagement).",
    role: "Product Designer (Growth & Core)",
    time: "17 months",
    year: "2022–24",
    team: "Growth · AI & Content · Engagement",
    color: "#8b5cf6",
    logo: "logo-quizizz.png",
    cover: "quizizz.jpg",
    source: "https://wayground.com/?lng=en",
    vision: "Empower every teacher and motivate every student worldwide, regardless of device access, technical literacy, or classroom constraints.",
    video: "https://www.youtube-nocookie.com/embed/rDGXjvXCdbI",
    videoTitle: "Paper Mode Live Classroom Testing in Action",
    stickers: [
      { icon: "🏆", label: "GESS 2024 Winner", sub: "Best Digital Product", rot: "-3deg", href: "https://wayground.com/?lng=en" },
      { icon: "✨", label: "Wayground AI", sub: "Pedagogical Scaffolding", rot: "2.5deg", href: "wayground-ai.html" },
      { icon: "📄", label: "Paper Mode", sub: "Printable Q-Cards", rot: "-1.5deg", href: "wayground-paper-mode.html" },
      { img: "qbit-skater.png", label: "Student Qbits", sub: "+18% Session Re-joins", rot: "2deg", href: "wayground-qbits.html" }
    ],
    quotes: {
      need: "Classroom realities varied widely: device-free schools required hybrid access, teachers demanded rapid authoring, and students needed deeper retention loops.",
      done: "Spearheaded three flagship product initiatives across Growth, AI, and Student Engagement: Paper Mode, Wayground AI, and Avatars.",
      impact: "Over 3,000 classrooms adopted Paper Mode, quiz creation time dropped 60%, and student re-engagement surged 18%."
    },
    problems: [
      {
        num: "01",
        title: "Paper Mode: Bringing Offline Classrooms into Wayground",
        problem: "Millions of classrooms lacked 1:1 student devices. Teachers relied on paper quizzes and spent hours manually grading.",
        solution: "Engineered printable orientation-encoded Q-cards scanned via a single teacher smartphone with real-time score sync.",
        metric: "3,000+ Classrooms Adopted"
      },
      {
        num: "02",
        title: "Wayground AI: Speeding Up Quiz Creation",
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
    projects: [
      ["Paper Mode (Growth)", "Democratized hybrid classrooms with low-tech printable Q-cards scanned via teacher smartphone camera.", "Growth · 0→1", "wayground-paper-mode.html"],
      ["Wayground AI (AI & Content)", "Guided prompt scaffolding and edit-first review architecture reducing authoring time by 60%.", "AI Authoring", "wayground-ai.html"],
      ["Avatars & Qbits (Engagement)", "Pitched at internal hackathon and scaled into the core gamified student identity system.", "Retention Engine", "wayground-qbits.html"]
    ],
    flow: ["Identify classroom barrier", "Prototype on-site with educators", "Ship with safety guardrails", "Iterate from live behavioral metrics"],
    sections: [
      ["Setting the Stage", "Wayground (formerly Quizizz) is used in over 100 countries by millions of students and teachers every month. As the sole designer across three high-impact cross-functional squads, the work spanned user research, UX/UI, rapid prototyping, classroom validation, dev handoff, and iterative optimization based on live metrics."],
      ["Three Strategic Bets", [
        "1. <a href='wayground-paper-mode.html' class='inline-sub-link'>Paper Mode (Growth) →</a>: Bridged the digital divide for device-constrained classrooms using low-tech printable Q-cards scanned instantly via teacher smartphone camera.",
        "2. <a href='wayground-ai.html' class='inline-sub-link'>Wayground AI (AI & Content) →</a>: Accelerated quiz creation by 60% with structured prompt scaffolding, curriculum mapping, and an edit-first workflow that preserves teacher agency.",
        "3. <a href='wayground-qbits.html' class='inline-sub-link'>Avatars & Qbits (Engagement) →</a>: Pitched and won 1st place in a 48-hour hackathon, then led the full design of a gamified identity engine that drove session re-joins up 18%."
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
    ],
    highlight: [
      "0 to 1 Product Bet",
      "Avatars & Qbits: From Internal Hackathon to Core Engagement Engine",
      "Pitched the concept during a company hackathon, built the 48-hour prototype with engineering and illustration, and directed the product strategy through global rollout. Customisable avatars, XP milestones, and unlockable items elevated participation into identity: session re-joins rose 18% and completion climbed 9%.<br><br><div class='highlight-cta-group'><a class='highlight-link-pill' href='wayground-qbits.html'>View Full Qbits Case Study →</a><a class='highlight-link-pill highlight-link-pill--secondary' href='https://wayground.com/join/avatar-shop' target='_blank' rel='noopener'>Try Avatar Shop Live ↗</a></div>",
      "qbit-skater.png"
    ],
    takeaways: [
      "Speed & Reliability over Flash: Teachers need frictionless tools with zero learning curve during live class chaos.",
      "Physical First: Solving physical classroom limitations before adding digital layers unlocks unreachable markets.",
      "Emotional Resonance: Playful micro-touches like avatar animations transform utilitarian software into a beloved classroom ritual."
    ],
    media: [
      ["quizizz-1.gif", "Paper Mode in-class scanning and real-time computer vision grading"],
      ["quizizz-2.gif", "Wayground AI guided authoring flow and curriculum alignment selector"]
    ]
  },

  "quizizz-ai": {
    title: "Wayground AI · Assisted Authoring for Teachers",
    eyebrow: "AI · 0→1 · EdTech (US Curriculum)",
    lede: "Help teachers generate high-quality, standards-aligned quizzes instantly with AI, without sacrificing control, pedagogical accuracy, or cost-efficiency.",
    role: "Product Designer (AI & Core)",
    time: "Discovery → Launch",
    year: "2023–24",
    team: "AI & Content",
    color: "#8b5cf6",
    logo: "logo-quizizz.png",
    cover: "quizizz.jpg",
    source: "https://wayground.com/?lng=en",
    vision: "Help teachers generate high-quality, standards-aligned quizzes instantly with the help of AI, without sacrificing control, accuracy, or cost-efficiency.",
    video: "https://www.youtube-nocookie.com/embed/nxVTd6pCsb0",
    videoTitle: "Wayground AI Assisted Authoring Walkthrough",
    stickers: [
      { icon: "✨", label: "Prompt Presets", sub: "~62% Less Bad Prompts", rot: "-2deg", href: "https://wayground.com/?lng=en" },
      { icon: "🎯", label: "Curriculum Map", sub: "87% On-Standard Rating", rot: "2.5deg", href: "wayground.html" },
      { icon: "💰", label: "38% Lower Cost", sub: "Pre-validation Filters", rot: "-1.5deg", href: "wayground.html" }
    ],
    quotes: {
      need: "Educators needed standards-aligned classroom content in seconds, demanding pedagogical control, verified accuracy, and zero generic prompt fatigue.",
      done: "Engineered structured prompt scaffolding, source-grounding signals, curriculum mapping, and an edit-first review architecture.",
      impact: "3–4x increase in quiz generation adoption, 38% reduction in cost per generation, and 87% on-curriculum teacher rating."
    },
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
        solution: "Embedded public-domain citations, Verified AI badges, and side-by-side comparisons with teacher content.",
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
    projects: [
      ["Prompt Scaffolding", "Subject → grade → standard parameter engine replacing empty text boxes.", "UX Architecture", "https://wayground.com/?lng=en"],
      ["Source Verification & Citations", "Trust badges, citation links, and fact-checking safeguards against hallucinations.", "Trust & Quality", "https://wayground.com/?lng=en"],
      ["Curriculum Selector", "Auto-mapping Common Core, NGSS, and TEKS state standards into prompt logic.", "Curriculum", "https://wayground.com/?lng=en"],
      ["Cost & Quality Controls", "Pre-generation parameters, lightweight LLM validation filters, and credit usage bars.", "Efficiency", "https://wayground.com/?lng=en"]
    ],
    flow: ["Select curriculum context", "Generate structured draft", "Verify sources & standards", "Edit, refine & publish"],
    sections: [
      ["Problem Space & Constraints", "US educators faced severe time constraints and demanded content strictly aligned with state standards (Common Core, NGSS, TEKS) with verifiable sources. Teachers held deep skepticism of AI hallucinations, while unguided blank text boxes burned expensive LLM tokens on low-quality generations."],
      ["Discovery & Core Research", "Conducted 1:1 discovery interviews with 12 US teachers across grades 3–10 and mapped how teachers transition from needing a quiz to delivering a lesson. Key insight: teachers rejected open prompt engineering and strongly preferred structured dropdowns: Subject → Grade → Topic → Standards → Question Type."],
      ["System Architecture & Solutions", [
        "Prompt Scaffolding: Built parameter dropdowns and prompt presets (e.g. 'Vocabulary Review Grade 6 ELA'), reducing bad prompt submissions by ~62% in 3 weeks.",
        "Cost & Retry Controls: Added lightweight pre-validation filters, parameter dials, and an internal credit usage bar, slashing cost per generation by 38%.",
        "Source Verification: Introduced citations, Verified AI badges, and side-by-side comparison with teacher content; in A/B tests, teachers were 42% more likely to use quizzes without edits.",
        "Curriculum Selector: Auto-mapped state standards into prompt logic, resulting in 87% of teachers reporting AI content felt 'on-curriculum' (vs 48% before)."
      ]],
      ["Measurable Outcome", "Positioned AI as a premier freemium acquisition hook that drove rapid adoption and reliable teacher retention.", [
        ["3–4×", "increase in quiz generation adoption"],
        ["38%", "reduction in cost per generation"],
        ["87%", "teachers reported on-curriculum quality"]
      ]]
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
    title: "Wayground (Quizizz) · Paper Mode",
    eyebrow: "0→1 · Hardware-Light · Offline-First",
    lede: "Bridging the digital divide with low-tech classroom response cards scanned instantly through a single teacher smartphone camera.",
    role: "Lead UX Designer",
    time: "Research → Rollout",
    year: "2023",
    team: "Growth",
    color: "#f59e0b",
    logo: "logo-quizizz.png",
    cover: "quizizz.jpg",
    source: "https://wayground.com/home/solutions/paper-mode-on-quizizz?lng=en",
    vision: "Democratize interactive learning by bringing digital quiz power to every pen-and-paper classroom with zero hardware cost.",
    video: "https://www.youtube-nocookie.com/embed/rDGXjvXCdbI",
    videoTitle: "Paper Mode Live Classroom Testing Demo",
    stickers: [
      { icon: "📄", label: "Printable Q-Cards", sub: "Orientation A/B/C/D", rot: "-2.5deg", href: "https://wayground.com/home/solutions/paper-mode-on-quizizz?lng=en" },
      { icon: "⚡", label: "< 2s Full Scan", sub: "Computer Vision Camera", rot: "2deg", href: "wayground.html" },
      { icon: "🏫", label: "3,000+ Schools", sub: "Zero Student Logins", rot: "-1deg", href: "wayground.html" }
    ],
    quotes: {
      need: "Millions of classrooms lacked student devices, forcing teachers to spend hours manually grading printed paper quizzes.",
      done: "Architected the end-to-end Paper Mode experience, pairing low-cost printable Q-cards with instant smartphone computer vision scanning.",
      impact: "Enabled over 3,000 device-constrained classrooms to access interactive assessments with scan times under 2 seconds."
    },
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
    projects: [
      ["Printable Q-Cards", "Durable, orientation-based physical response cards (A/B/C/D) for students.", "Physical UX", "https://wayground.com/home/solutions/paper-mode-on-quizizz?lng=en"],
      ["Camera Vision Scanning", "Multi-card computer vision recognition optimized for uneven lighting and classroom tilt.", "Mobile UX", "https://wayground.com/home/solutions/paper-mode-on-quizizz?lng=en"],
      ["Real-Time Classroom Sync", "Instant score reconciliation, performance analytics, and live leaderboard sync.", "Data Architecture", "https://wayground.com/home/solutions/paper-mode-on-quizizz?lng=en"]
    ],
    flow: ["Print free response cards", "Project question to class", "Students raise cards", "Scan & sync in < 2 seconds"],
    sections: [
      ["The Core Challenge", "Many teachers still relied exclusively on pen-and-paper assessments because their classrooms lacked student devices. This massive cohort was completely excluded from using digital interactive learning. The goal was to bring offline teachers into Wayground without requiring them to change how they teach."],
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

  qbits: {
    title: "Qbits · Customizable Student Avatars & Engagement",
    eyebrow: "EdTech · Gamification · Retention · 0→1",
    lede: "Enhancing student retention and intrinsic motivation on Wayground through gender-neutral customizable avatars, a virtual coin economy, and consistent effort reward loops.",
    role: "Product Designer & Engagement Lead",
    time: "4 months (Nov 2023 – Feb 2024)",
    year: "2023–24",
    team: "Engagement Squad (1 PM, 1 Designer, 2 Comms Designers, 1 EM, 3 Engineers)",
    color: "#ec4899",
    logo: "logo-quizizz.png",
    cover: "quizizz.jpg",
    source: "https://help.wayground.com/support/solutions/articles/158000404950-introducing-qbits-customizable-avatars-for-students-on-wayground-",
    vision: "Transform transient gamification into lasting emotional investment by rewarding consistent practice, self-expression, and student agency.",
    stickers: [
      { img: "qbit-skater.png", label: "Skater Qbit", sub: "Modular 3D Identity", rot: "-2.5deg", href: "wayground.html" },
      { icon: "🪙", label: "Virtual Currency", sub: "Effort & Streak Economy", rot: "2deg", href: "https://wayground.com/join/avatar-shop" },
      { icon: "🛍️", label: "The Shop", sub: "Common, Rare, Legendary Gear", rot: "-1.5deg", href: "https://wayground.com/join/avatar-shop" },
      { icon: "📈", label: "2X Return Rate", sub: "65% Shop Visit Rate", rot: "3deg", href: "https://help.wayground.com/support/solutions/articles/158000404950-introducing-qbits-customizable-avatars-for-students-on-wayground-" }
    ],
    quotes: {
      need: "Students lacked long-term emotional connection to the platform once live quiz sessions ended, with drop-offs occurring because only immediate speed was rewarded rather than consistent learning effort.",
      done: "Conducted 5-week research with US middle schoolers, conceptualized the modular gender-neutral Qbit structure, and built the end-to-end virtual currency streak rewards and closet Shop.",
      impact: "65% of active quiz players visited the Shop, weekly return visits doubled (2X), and average student accuracy increased from 75% to 82%."
    },
    problems: [
      {
        num: "01",
        title: "Short-Term Novelty Drop-Off",
        problem: "While live quizzes were fun, students had zero personal investment once the game ended, leading to steep retention drop-offs between homework sessions.",
        solution: "Engineered a persistent digital identity (Qbits) that students own, personalize, and carry across all classroom games and solo practice sessions.",
        metric: "2X Weekly Retention"
      },
      {
        num: "02",
        title: "Speed-Biased Rewards Demotivating Slower Learners",
        problem: "Existing game mechanics only rewarded rapid answer speeds, penalizing thoughtful learners and neglecting effort or consistency.",
        solution: "Introduced daily streak coin multipliers and effort-based reward loops where consistency earns exclusive accessories.",
        metric: "+7% Accuracy Boost"
      },
      {
        num: "03",
        title: "Designing Inclusive, Relatable Characters for Kids",
        problem: "Students rejected generic caricatures or heavily gendered tropes; avatars needed to be cool, expressive, and globally relatable.",
        solution: "Designed a modular, gender-neutral base character with layered streetwear, hats, scarves, and accessories categorized by rarity (Common, Rare, Legendary).",
        metric: "75% Day-1 Adoption"
      }
    ],
    projects: [
      ["Qbit Character Engine", "Modular, gender-neutral avatar builder with hundreds of layered outfit permutations.", "Identity Engine", "https://wayground.com/join/avatar-shop"],
      ["The Qbit Shop", "Immersive dark UI personal closet where students browse, try on, and unlock rare gear with earned coins.", "Virtual Economy", "https://wayground.com/join/avatar-shop"],
      ["Streak & Effort Currency", "Algorithmically scaling coin rewards tied to daily study streaks and mastery accuracy.", "Retention Systems", "https://wayground.com/join/avatar-shop"]
    ],
    flow: ["Complete daily quiz", "Earn effort & streak coins", "Visit the Qbit Shop", "Equip rare gear & flex in live game"],
    sections: [
      ["The Engagement Gap", "While Quizizz was highly effective at delivering in-class gamification during live games, we identified a critical disconnect: students lacked reasons to return on their own or feel personally connected beyond a single session. Effort and consistency weren't visibly rewarded—only rapid speed mattered, which caused novelty to fade."],
      ["Research with US Middle Schoolers", "Conducted a 5-week research program with 8 U.S. middle schoolers combining user interviews, diary studies, and co-creation sessions. Key insight: students are deeply motivated by self-representation, rarity, and rewards earned through consistent participation over time, but disengage quickly when systems reward speed over learning."],
      ["The Solution: Qbit Identity & Virtual Economy", [
        "1. Modular Gender-Neutral Identity: Collaborated closely with illustration and engineering to build a relatable, inclusive character format that works across low-end Chromebooks.",
        "2. Effort-Based Coin Rewards: Introduced daily streaks and variable performance coins to incentivize regular learning routines without speed anxiety.",
        "3. The Qbit Shop: Built an immersive dark-mode closet interface where students spend earned currency on Common, Rare, and Legendary outfits.",
        "4. In-Game Visibility: Featured customized Qbits on live leaderboards, waiting lobbies, and podium win states to spark social delight."
      ]],
      ["Measurable Business & Pedagogical Impact", "Qbits transformed student perception from a utilitarian test tool into a beloved digital space, delivering transformative retention and learning improvements.", [
        ["65%", "of active students visited the Shop"],
        ["2X", "increase in weekly active student returns"],
        ["75→82%", "average student quiz accuracy improvement"],
        ["+18%", "lift in live session re-joins"]
      ]]
    ],
    highlight: [
      "Student Agency",
      "Why 'Qbits' Became a Classroom Phenomenon",
      "We named the character to embody the brand spirit—curious, bold, and quirky, subtly hinting at being 'a bit of Quizizz'. Within weeks of rollout, student adoption soared to 75%, organic student fan art flooded social channels, and teachers reported significant enthusiasm during morning warm-up quizzes.<br><br><div class='highlight-cta-group'><a class='highlight-link-pill' href='https://wayground.com/join/avatar-shop' target='_blank' rel='noopener'>Try Avatar Shop Live ↗</a><a class='highlight-link-pill highlight-link-pill--secondary' href='https://help.wayground.com/support/solutions/articles/158000404950-introducing-qbits-customizable-avatars-for-students-on-wayground-' target='_blank' rel='noopener'>Help Center Article ↗</a></div>",
      "qbit-skater.png"
    ],
    takeaways: [
      "Reward Effort, Not Just Speed: Gamification that prioritizes accuracy and consistency creates sustainable intrinsic motivation.",
      "Agency Fuels Retention: When learners have ownership over their digital identity, they return proactively without teacher prompting.",
      "Inclusive by Design: Gender-neutral, modular avatar foundations maximize global student resonance across diverse cultures."
    ],
    media: [
      ["qbit-skater.png", "Customizable Skater Qbit student avatar character with layered streetwear and skateboard accessories"],
      ["quizizz-2.gif", "In-game avatar customization and real-time live match integration"]
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
    vision: "Transform real-money gaming into a transparent, secure, and intuitive entertainment platform built on absolute trust.",
    stickers: [
      { icon: "🛡️", label: "FairPlay 100%", sub: "Tier-1 KYC Security", rot: "-3deg", href: "https://www.getmega.com" },
      { icon: "🏏", label: "Fantasy Sports", sub: "Live Match HUDs", rot: "2deg", href: "https://www.getmega.com" },
      { icon: "💳", label: "42%→83% KYC", sub: "Transparent Wallet", rot: "-1deg", href: "projects.html" }
    ],
    quotes: {
      need: "Onboarding drop-offs, financial anxiety around real-money transactions, ambiguous rules, and cross-device UI fragmentation hindered platform scale.",
      done: "Directed product design for GetMega Fantasy and unified the platform through an end-to-end design system, tiered KYC, and transparent wallet states.",
      impact: "KYC completion doubled from 42% to 83%, fraudulent withdrawals dropped 40%+, and game abandonment decreased 15%."
    },
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
    projects: [
      ["GetMega Fantasy", "Flagship fantasy sports and contest product experience with intuitive team building.", "Flagship Game", "https://www.getmega.com"],
      ["Scalable Design System", "Responsive component library, design tokens, and gaming conventions across web & app.", "Design System", "https://www.getmega.com"],
      ["Interactive Learning System", "Guided practice rounds, rules walkthroughs, and live tutorial overlays.", "User Confidence", "https://www.getmega.com"],
      ["Wallet & Tiered KYC", "Transparent deposit/withdrawal states, multi-lingual support, and fraud safeguards.", "Fintech Trust", "https://www.getmega.com"],
      ["Modular Game HUDs", "Live match interfaces, score tickers, dynamic leaderboards, and celebratory win states.", "Gameplay UX", "https://www.getmega.com"]
    ],
    flow: ["Interactive tutorial", "Tiered KYC verification", "Enter Fantasy contest", "Track live match & withdraw"],
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
    nda: true,
    vision: "Automate heavy enterprise warehouse audits through seamless aerial robotics orchestration.",
    stickers: [
      { icon: "🚁", label: "FlytWare", sub: "Autonomous Drone Fleet", rot: "-2deg", href: "https://www.flytbase.com" },
      { icon: "📦", label: "WMS Cloud Sync", sub: "Real-time Telemetry", rot: "2.5deg", href: "projects.html" }
    ],
    quotes: {
      need: "Manual warehouse inventory counting in large distribution facilities required thousands of labor hours, remaining slow, expensive, and error-prone.",
      done: "Designed FlytWare interaction models, autonomous mission planning, and mission-critical cloud ground-control interfaces.",
      impact: "Established a commercially viable, scalable autonomous drone counting system integrated into enterprise WMS platforms."
    },
    problems: [
      {
        num: "01",
        title: "High-Risk Flight Parameter Management",
        problem: "Warehouse managers lacked drone piloting experience and were intimidated by complex aerodynamic and safety configurations.",
        solution: "Abstracted complex flight physics into single-click mission templates with automated obstacle clearance zones.",
        metric: "Zero-Incident UX"
      },
      {
        num: "02",
        title: "Real-Time WMS Telemetry Sync",
        problem: "Scanned barcodes had to instantly match thousands of warehouse database entries without lagging the cloud console.",
        solution: "Designed high-density live telemetry views with color-coded shelf heatmaps and instant discrepancy alerts.",
        metric: "Enterprise Scale"
      }
    ],
    projects: [
      ["FlytWare Interaction Architecture", "Autonomous aerial barcoding, visual shelf inspection, and real-time WMS reconciliation.", "Robotics UX", "https://www.flytbase.com"],
      ["Ground Control Station", "Cloud dashboard for multi-drone fleet monitoring, battery telemetries, and emergency overrides.", "Mission Control", "https://www.flytbase.com"],
      ["Enterprise WMS Integration", "Discrepancy resolution flows matching drone barcode telemetry with existing warehouse databases.", "Data Systems", "https://www.flytbase.com"]
    ],
    flow: ["Map warehouse aisles", "Deploy autonomous flight", "Capture aerial barcode data", "Reconcile WMS discrepancies"],
    sections: [
      ["The Core Challenge", "Manual warehouse inventory counting consumes thousands of labor hours annually: an expensive, slow, and error-prone operational bottleneck that becomes impractical under frequent audit schedules."],
      ["Operational Architecture", "Directed the interaction architecture for FlytWare and elevated ground-control mission planning. Conducted heuristic evaluations, task flow mapping, UML system modeling, and live warehouse user testing to align complex flight parameters with operator workflows."],
      ["System Solution", "FlytWare combines intelligent software orchestration with off-the-shelf drone hardware to automate aerial barcoding, visual inspection, and real-time WMS reconciliation in distribution centers."],
      ["Product Leadership Takeaway", "Established cross-functional alignment between robotics engineers, enterprise stakeholders, and warehouse operators, transforming high-risk automation into intuitive, mission-critical operational tools.", null, "nda"]
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
    vision: "Unify restaurant operations into a lightning-fast, resilient ecosystem that empowers servers and delights dining guests.",
    stickers: [
      { icon: "⚡", label: "< 3 Taps", sub: "High-Velocity POS Flow", rot: "-2deg", href: "https://joinsummer.app" },
      { icon: "📱", label: "QR Ordering", sub: "Contactless Tabs", rot: "2.5deg", href: "https://joinsummer.app" }
    ],
    quotes: {
      need: "High-pressure restaurant teams required split-second operational clarity in chaotic service environments, not complex multi-layered software.",
      done: "Architected the POS ecosystem, operational kitchen modules, brand identity, and table-side contactless mobile guest experience.",
      impact: "Cut staff onboarding to under 30 minutes, accelerated table turnover by 22%, and slashed out-of-stock menu errors by 40%."
    },
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
    projects: [
      ["High-Velocity POS", "Table layout management, kitchen ticket routing, and split billing designed for speed under pressure.", "POS System", "https://joinsummer.app"],
      ["Live Inventory & Recipe Tracking", "Automated stock deductions, real-time 86'd alerts, and supplier reordering triggers.", "Inventory", "https://joinsummer.app"],
      ["Contactless Guest App", "Table-side QR code ordering, shared group tabs, and instant digital payments.", "Consumer Mobile", "https://joinsummer.app"],
      ["Restaurant Brand & System", "Editorial brand identity, typography, and hardware-resilient dark mode design system.", "Brand System", "https://joinsummer.app"]
    ],
    flow: ["Discover or seat", "Order together via QR / POS", "Kitchen ticket routing", "Instant split & checkout"],
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
    vision: "Democratize secured private credit investments through transparent risk modeling, elegant education, and institutional rigor.",
    stickers: [
      { icon: "📈", label: "Asset-Backed", sub: "Private Credit", rot: "-2.5deg", href: "https://www.earnnest.me" },
      { icon: "⚡", label: "5-Min KYC", sub: "38% Less Drop-Off", rot: "2deg", href: "https://www.earnnest.me" }
    ],
    quotes: {
      need: "Demystify high-yield alternative debt investing for individual investors and HNIs by establishing immediate institutional credibility and regulatory trust.",
      done: "Defined the 0-to-1 product strategy, visual brand system, investor education journey, streamlined KYC, and real-time portfolio management.",
      impact: "Acquired 8,000+ active investors in six weeks, increased deal conversion by 32%, and reduced KYC drop-off by 38%."
    },
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
    projects: [
      ["Institutional Brand Identity", "Trust-anchored visual system, refined typography, and editorial financial voice.", "Brand Strategy", "https://www.earnnest.me"],
      ["Education-Led Conversion Funnel", "Interactive deal transparency: Understand the asset → Evaluate risk → One-click invest.", "Growth UX", "https://www.earnnest.me"],
      ["Mobile & Web App Platform", "Transparent deal catalogs, 5-minute automated KYC, and live yield tracking dashboard.", "0→1 Product", "https://www.earnnest.me"]
    ],
    flow: ["Understand the asset class", "Evaluate collateral & deal", "5-minute automated KYC", "Invest & track live yield"],
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

// Aliases for wayground and qbits URLs
CASES.wayground = CASES.quizizz;
CASES["wayground-ai"] = CASES["quizizz-ai"];
CASES["wayground-paper-mode"] = CASES["paper-mode"];
CASES["wayground-qbits"] = CASES.qbits;

// Render function executed immediately or on ready
function renderCaseStudy() {
  const key = document.body.dataset.project;
  const d = CASES[key];
  if (!d) return;

  document.documentElement.style.setProperty("--project", d.color);
  document.title = `${d.title} ✦ Shashank Seth`;

  const awardBanner = d.award ? `
    <div class="case-award-ribbon">
      <span class="award-icon">🏆</span>
      <span class="award-text">${d.award}</span>
    </div>
  ` : '';

  const visionBlock = d.vision ? `
    <div class="vision-banner spotlight-card">
      <div class="vision-icon">💡</div>
      <div class="vision-body">
        <div class="vision-label">North Star & Vision</div>
        <p class="vision-text">${d.vision}</p>
      </div>
    </div>
  ` : '';

  const quotesBlock = d.quotes ? `
    <div class="case-summary-quotes">
      <div class="summary-quote summary-quote--challenge spotlight-card">
        <div class="quote-header">
          <span class="quote-badge">The Core Challenge</span>
          <span class="quote-mark">“</span>
        </div>
        <blockquote class="quote-text">${d.quotes.need}</blockquote>
        <div class="quote-footer">Problem Space</div>
      </div>
      <div class="summary-quote summary-quote--execution spotlight-card">
        <div class="quote-header">
          <span class="quote-badge">Strategic Execution</span>
          <span class="quote-mark">“</span>
        </div>
        <blockquote class="quote-text">${d.quotes.done}</blockquote>
        <div class="quote-footer">Product Leadership</div>
      </div>
      <div class="summary-quote summary-quote--impact spotlight-card">
        <div class="quote-header">
          <span class="quote-badge">Measurable Impact</span>
          <span class="quote-mark">“</span>
        </div>
        <blockquote class="quote-text">${d.quotes.impact}</blockquote>
        <div class="quote-footer">Business Outcome</div>
      </div>
    </div>
  ` : '';

  const stickersBlock = d.stickers && d.stickers.length > 0 ? `
    <div class="case-stickers-wrap">
      <div class="case-stickers-row">
        ${d.stickers.map(st => {
          const isLinked = !!st.href;
          const tag = isLinked ? 'a' : 'div';
          const hrefAttr = isLinked ? `href="${st.href}" ${st.href.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}` : '';
          return `
            <${tag} class="brand-sticker spotlight-card ${isLinked ? 'brand-sticker--clickable' : ''}" style="--sticker-rot:${st.rot || '0deg'};" ${hrefAttr}>
              ${st.img ? `<img src="shashank_files/${st.img}" class="sticker-img" alt="${st.label}">` : `<span class="sticker-icon">${st.icon}</span>`}
              <div class="sticker-content">
                <span class="sticker-label">${st.label} ${isLinked ? `<span class="sticker-arrow">${st.href.startsWith('http') ? '↗' : '→'}</span>` : ''}</span>
                <span class="sticker-sub">${st.sub}</span>
              </div>
            </${tag}>
          `;
        }).join("")}
      </div>
    </div>
  ` : '';

  const problemsBlock = d.problems && d.problems.length > 0 ? `
    <section class="problem-deep-dive">
      <div class="block-title">Key Problems & Design Solutions</div>
      <div class="problem-cards-grid">
        ${d.problems.map(prob => `
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
  ` : '';

  const projectsBlock = d.projects && d.projects.length > 0 ? `
    <section class="project-stack">
      <div class="block-title">Initiative Architecture</div>
      <div class="project-cards-container">
        ${d.projects.map((p, i) => {
          const isLinked = !!p[3];
          const tag = isLinked ? 'a' : 'div';
          const hrefAttr = isLinked ? `href="${p[3]}" ${p[3].startsWith('http') ? 'target="_blank" rel="noopener"' : ''}` : '';
          return `
            <${tag} class="project-card spotlight-card ${isLinked ? 'project-card--clickable' : ''}" ${hrefAttr}>
              <div class="project-index">0${i + 1}</div>
              <div class="project-info">
                <h3>${p[0]} ${isLinked ? `<span class="project-arrow-badge">${p[3].startsWith('http') ? '↗' : '→'}</span>` : ''}</h3>
                <p>${p[1]}</p>
              </div>
              <span class="project-tag">${p[2]}</span>
            </${tag}>
          `;
        }).join("")}
      </div>
    </section>
  ` : '';

  const highlightBlock = d.highlight ? `
    <aside class="highlight-box spotlight-card ${d.highlight[3] ? 'highlight-box--character' : ''}">
      <div class="highlight-inner">
        <div class="highlight-text-col">
          <div class="highlight-kicker">${d.highlight[0]}</div>
          <h2>${d.highlight[1]}</h2>
          <div class="highlight-body">${d.highlight[2]}</div>
        </div>
        ${d.highlight[3] ? `
          <div class="highlight-avatar-col">
            <div class="avatar-glow-ring"></div>
            <img src="shashank_files/${d.highlight[3]}" alt="Wayground Qbit Avatar Character" class="avatar-qbit-character">
            <div class="avatar-pill-badge">Student Qbit ✦ 3D Engine</div>
          </div>
        ` : ''}
      </div>
    </aside>
  ` : '';

  const flowBlock = d.flow && d.flow.length > 0 ? `
    <div class="flow-viz">
      ${d.flow.map((f, i) => `
        <div class="flow-step">
          <strong>Step 0${i + 1}</strong>
          <span>${f}</span>
        </div>
        ${i < d.flow.length - 1 ? '<span class="flow-arrow">→</span>' : ''}
      `).join("")}
    </div>
  ` : '';

  const sectionsHtml = d.sections.map((s, i) => {
    let body = Array.isArray(s[1]) ? `<ul>${s[1].map(x => `<li>${x}</li>`).join("")}</ul>` : `<p>${s[1]}</p>`;
    
    // Inject flow visualization on second story section
    if (i === 1 && flowBlock) {
      body += flowBlock;
    }

    // Embed inline section image (blog style) if available for this step
    if (d.media && d.media[i]) {
      const imgData = d.media[i];
      body += `
        <figure class="story-inline-figure spotlight-card">
          <div class="story-inline-img-wrap">
            <img src="shashank_files/case-studies/${imgData[0]}" alt="${imgData[1]}" loading="lazy" onerror="this.src='shashank_files/${imgData[0]}'">
          </div>
          <figcaption>${imgData[1]}</figcaption>
        </figure>
      `;
    }

    if (s[2]) {
      body += `<div class="metrics">${s[2].map(m => `<div class="metric"><strong class="kinetic-number" data-target="${m[0]}">${m[0]}</strong><span>${m[1]}</span></div>`).join("")}</div>`;
    }
    if (s[3] === "nda" || (d.nda && i === 0)) {
      body += `<div class="nda-callout"><span class="nda-lock">🔒</span><div><strong>Confidential Notice</strong><p>Certain proprietary details are protected under NDA. <a href="mailto:hello@shashankseth.in">Get in touch</a> to request an in-depth walkthrough.</p></div></div>`;
    }
    return `
      <section class="story" id="section-${i + 1}">
        <div class="story-label">0${i + 1} / ${s[0]}</div>
        <div class="story-content">
          <h2>${s[0]}</h2>
          ${body}
        </div>
      </section>
    `;
  }).join("");

  const pressBlock = d.press && d.press.length > 0 ? `
    <section class="press-section">
      <div class="block-title">Industry Reception & Community Reviews</div>
      <div class="press-grid">
        ${d.press.map(pr => `
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
  ` : '';

  const videoBlock = d.video ? `
    <section class="video-showcase-section">
      <div class="block-title">Interactive Video Walkthrough</div>
      <div class="mockup-browser">
        <div class="mockup-header">
          <div class="traffic-lights">
            <span></span><span></span><span></span>
          </div>
          <div class="mockup-url-bar">
            <span class="url-protocol">https://</span>demo.${key}.internal/interactive-preview
          </div>
          <div class="mockup-actions">
            <span class="badge live">LIVE DEMO</span>
          </div>
        </div>
        <div class="mockup-viewport">
          <iframe 
            src="${d.video}" 
            title="${d.videoTitle || 'Demo Video'}" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
            loading="lazy">
          </iframe>
        </div>
      </div>
      <div class="mockup-caption">${d.videoTitle || 'Classroom recording & prototype walkthrough'}</div>
    </section>
  ` : '';

  const mediaBlock = d.media && d.media.length > 0 ? `
    <section id="project-media" class="media-section">
      <div class="block-title">Selected Design Artifacts & Media</div>
      <div class="media-grid">
        ${d.media.map(m => `
          <figure class="media-card spotlight-card">
            <div class="media-img-wrap">
              <img src="shashank_files/case-studies/${m[0]}" alt="${m[1]}" loading="lazy" onerror="this.src='shashank_files/${m[0]}'">
            </div>
            <figcaption>${m[1]} · High-resolution design artifact</figcaption>
          </figure>
        `).join("")}
      </div>
    </section>
  ` : '';

  const takeawaysBlock = d.takeaways && d.takeaways.length > 0 ? `
    <section class="takeaways-section spotlight-card">
      <div class="takeaways-header">
        <span class="takeaways-badge">Reflection</span>
        <h2>Product Leadership Takeaways</h2>
      </div>
      <ul class="takeaways-list">
        ${d.takeaways.map(t => `<li><span class="takeaway-bullet">✦</span><p>${t}</p></li>`).join("")}
      </ul>
    </section>
  ` : '';

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

    ${stickersBlock}
    ${visionBlock}
    ${quotesBlock}
    ${problemsBlock}
    ${projectsBlock}
    ${highlightBlock}
    ${sectionsHtml}
    ${pressBlock}
    ${videoBlock}
    ${mediaBlock}
    ${takeawaysBlock}

    <div class="source">Adapted from the original <a href="${d.source}" target="_blank" rel="noopener">Notion case study ↗</a></div>
  `;
}

// Execute immediately upon load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderCaseStudy);
} else {
  renderCaseStudy();
}
