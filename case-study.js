const CASES = {
  nvidia: {
    title: "NVIDIA · Control Panel & RTX Voice",
    eyebrow: "Hardware Tools · AI Audio · Graduation Project",
    lede: "Redesigning display hierarchies for millions of gamers and artists in NVIDIA Control Panel, and shaping the zero-latency desktop interaction model for AI noise removal.",
    role: "Software Design Intern",
    time: "7 months (Dec 2019 – July 2020)",
    year: "2019–20",
    team: "GeForce UX (Piyush Sharma, Amrut Lagoo, Sindhu MS, Aditya Karra, Amulya Chawda)",
    color: "#76b900",
    logo: "logo-nvidia.png",
    cover: "nvidia.jpg",
    source: "https://app.notion.com/p/3c7f3b5fb3754297800072a3e0f98be1",
    nda: true,
    vision: "Like putting a soundproof recording studio inside your GPU: turn complex hardware controls and noisy background clutter into effortless clarity.",
    stickers: [
      { icon: "⚡", label: "RTX Voice", sub: "AI Audio Suppression", rot: "-2.5deg", href: "https://www.theverge.com/2020/9/17/21444508/nvidia-broadcast-download-rtx-voice-noise-app" },
      { icon: "🎮", label: "NVIDIA HIG", sub: "Display Server Settings", rot: "2deg", href: "projects.html" },
      { icon: "🎙️", label: "Broadcast App", sub: "Global Press Acclaim", rot: "-1.5deg", href: "https://www.nvidia.com/en-us/geforce/broadcasting/broadcast-app/" }
    ],
    quotes: {
      need: "“I have a $2,000 graphics card, but changing my display settings feels like editing the Windows registry.” Power users and gamers were fighting an intimidating legacy interface.",
      done: "Streamlined complex display hierarchies, protected against hardware misconfigurations, and shaped the zero-latency desktop interaction model for RTX Voice.",
      impact: "Modernized mission-critical GPU controls while preserving 100% functional depth, and launched RTX Voice into the flagship NVIDIA Broadcast suite."
    },
    problems: [
      {
        num: "01",
        title: "Display Settings: The Windows XP Cockpit Problem",
        problem: "Legacy Control Panel looked like a 2002 diagnostic utility. One wrong click in multi-monitor setups could blackout screens, causing immense user friction.",
        solution: "Conducted user workflows, benchmarked modern HIG patterns, and delivered 3 validated wireframe iterations with clear visual safeguards.",
        metric: "100% Parameter Depth"
      },
      {
        num: "02",
        title: "RTX Voice: AI Audio Magic with Zero Latency",
        problem: "Gamers, streamers, and remote workers were plagued by mechanical keyboard clatter, barking dogs, and fan noise during live audio.",
        solution: "Designed a lightweight audio routing architecture with a live decibel visualizer, letting users erase background noise with a single slider.",
        metric: "Integrated in NVIDIA Broadcast"
      }
    ],
    projects: [
      ["NVIDIA Control Panel & Display Settings", "Experience design of display server settings for gaming and enterprise users adhering to NVIDIA HIG.", "Desktop UI"],
      ["RTX Voice (AI Noise Removal)", "Directing the interaction model, audio routing, and decibel visualizer for real-time AI background noise suppression.", "AI Audio"],
      ["GeForce Client Harmonization", "Unifying interaction patterns and safety guards across internal engineering and consumer-facing tools.", "Systems"]
    ],
    flow: ["Map power-user workflows", "Design visual safeguards", "3x interactive wireframes", "Launch in NVIDIA Broadcast"],
    sections: [
      ["The Challenge: A Jet Engine in a 2002 Cockpit", `<p>NVIDIA graphics cards power millions of top-tier gaming rigs and creative workstations. But in early 2020, the software managing these displays felt like a relic from Windows XP—dense, intimidating, and unforgiving.</p><div class="story-analogy"><div class="story-analogy-header">💡 The Analogy</div><p class="story-analogy-body">Changing a monitor’s refresh rate or color depth should feel like tuning a high-performance sports car, not rewriting the car’s firmware by hand while driving.</p></div><div class="story-user-quote"><blockquote>“Every time I set up a second monitor, I pray the screen doesn't go black. The options are scattered everywhere.”</blockquote><cite>— Enterprise 3D Artist during User Discovery</cite></div>`],
      ["The Solution: Safety Guards & HIG Polish", `<p>We ran deep workflow interviews with gamers and 3D animators to map out why display configuration caused anxiety. The answer was clear: <strong>power users want full parameter control, but without the fear of breaking their rig.</strong></p><ul class="story-bullets"><li><strong>Visual Topology Map:</strong> Replaced obscure text lists with an interactive visual monitor layout.</li><li><strong>Fail-Safe Reverts:</strong> Added clear countdown timers and auto-recovery so users never get stranded on a black screen.</li><li><strong>NVIDIA HIG Alignment:</strong> Harmonized typography, dark surfaces, and toggle states with the modern GeForce design language.</li></ul>`],
      ["AI Audio Breakthrough: RTX Voice", `<p>Simultaneously, NVIDIA was pioneering neural-network background noise removal. Our mission: turn cutting-edge machine learning into a simple, reliable desktop tool that works seamlessly while gaming or streaming.</p><div class="story-analogy"><div class="story-analogy-header">🎙️ Like a Soundproof Booth</div><p class="story-analogy-body">Instead of spending $500 on acoustic wall foam and specialized microphones, RTX Voice uses AI on your GPU to filter out mechanical keyboard clicks, desk thumps, and fan whirrs in real time.</p></div><ul class="story-bullets"><li><strong>Simple Audio Routing:</strong> Replaced complex virtual cable routing with a single dropdown input.</li><li><strong>Live Decibel Meter:</strong> Gave users instant visual proof that typing noises were being eliminated before they went live.</li></ul>`],
      ["Impact & Global Reception", `<p>RTX Voice launched to viral acclaim from streamers, tech reviewers, and remote workers worldwide, quickly graduating into NVIDIA Broadcast. The Control Panel design set a new benchmark for power-user utilities.</p>`, [
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
      "Make AI Tangible: A live decibel visualizer gave users immediate proof that the neural model was actually working."
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
      need: "“My students don't have tablets, I don't have time to write 50 questions, and kids tune out after the quiz ends.” Real classrooms faced massive digital hurdles.",
      done: "Spearheaded three flagship product initiatives across Growth, AI, and Student Engagement: Paper Mode, Wayground AI, and Avatars.",
      impact: "Over 3,000 classrooms adopted Paper Mode, quiz creation time dropped 60%, and student re-engagement surged 18%."
    },
    problems: [
      {
        num: "01",
        title: "Paper Mode: No Devices? No Problem.",
        problem: "Over 70% of classrooms globally lack 1:1 student computers. Teachers spent entire weekends grading paper tests by hand.",
        solution: "Engineered printable orientation-encoded Q-cards scanned via a single teacher phone with instant computer-vision score sync.",
        metric: "3,000+ Classrooms Adopted"
      },
      {
        num: "02",
        title: "Wayground AI: Ending Blank-Page Teacher Burnout",
        problem: "Writing standards-aligned quizzes from scratch took hours of unpaid teacher time, causing burnout and stale repetition.",
        solution: "Built structured prompt scaffolding (Subject → Grade → Topic) and curriculum selectors so teachers prompt less and guide more.",
        metric: "60% Faster Authoring"
      },
      {
        num: "03",
        title: "Qbits: Turning Quiz Points into Student Identity",
        problem: "Students had fun during live sessions, but the moment the leaderboard vanished, all long-term motivation evaporated.",
        solution: "Designed an avatar builder with unlockable gear and streak XP that turns learning effort into personal self-expression.",
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
      ["The Real-World Classroom Reality", `<p>Wayground (formerly Quizizz) is used by millions of teachers across 100+ countries. But walk into an average school, and you won't find high-speed fiber or 1-to-1 iPads. You find spotty WiFi, overworked educators, and kids easily distracted by boring worksheets.</p><div class="story-analogy"><div class="story-analogy-header">🏫 The Core Philosophy</div><p class="story-analogy-body">Great EdTech shouldn't demand that schools buy expensive gadgets or learn complex tech. It should meet teachers exactly where they already are.</p></div>`],
      ["Three Strategic Flagship Bets", `<p>As the sole designer across three cross-functional squads, we attacked the teacher and student journey from three key angles:</p><ul class="story-bullets"><li><strong><a href='wayground-paper-mode.html' class='inline-sub-link'>Paper Mode (Growth) →</a>:</strong> Solved the device divide with $0 printable cards scanned in seconds via phone camera.</li><li><strong><a href='wayground-ai.html' class='inline-sub-link'>Wayground AI (Authoring) →</a>:</strong> Saved hours of prep with guided prompt scaffolding mapped to state standards.</li><li><strong><a href='wayground-qbits.html' class='inline-sub-link'>Avatars & Qbits (Engagement) →</a>:</strong> Pitched and won 1st place in a hackathon, scaling it into an engagement engine with +18% re-joins.</li></ul>`],
      ["Principles for Classroom Products", `<ul class="story-bullets"><li><strong>Frictionless Live Dynamics:</strong> In a chaotic room of 35 children, any software delay over 2 seconds causes total classroom disruption.</li><li><strong>Prompt Less, Guide More:</strong> Don't force teachers to do 'prompt engineering'; give them pedagogical building blocks.</li><li><strong>Intrinsic Student Delight:</strong> When kids care about their avatar character, practicing math feels like playing a favorite game.</li></ul>`],
      ["Measurable Impact", `<p>Delivered decisive gains across global growth, teacher workflow speed, and student retention.</p>`, [
        ["3,000+", "offline classrooms adopted"],
        ["60%", "reduction in quiz creation time"],
        ["18%", "higher student session re-joins"]
      ]]
    ],
    highlight: [
      "0 to 1 Product Bet",
      "Avatars & Qbits: From Internal Hackathon to Core Engagement Engine",
      "Pitched the concept during a company hackathon, built the 48-hour prototype with engineering and illustration, and defined the initial roadmap direction. Customisable avatars, XP milestones, and unlockable items elevated participation into identity, establishing the foundation for Wayground's live student engagement engine.<br><br><div class='highlight-cta-group'><a class='highlight-link-pill' href='https://wayground.com/join/avatar-shop' target='_blank' rel='noopener'>Try Now ↗</a><a class='highlight-link-pill highlight-link-pill--secondary' href='wayground-qbits.html'>View Incubation Story →</a></div>",
      "qbit-skater.png"
    ],
    takeaways: [
      "Solve Physical Constraints First: Bringing offline paper classrooms into the digital loop unlocked millions of unreachable users.",
      "Speed Over Flash: During live class chaos, instant 1-tap actions beat intricate animations every time.",
      "Identity Powers Motivation: When students can express themselves through customizable avatars, homework becomes a ritual."
    ],
    media: [
      ["quizizz-1.gif", "Paper Mode in-class scanning and real-time computer vision grading"],
      ["qbit-customizer-ui.png", "Wayground student avatar customizer and in-game character engine"]
    ]
  },

  "quizizz-ai": {
    title: "Wayground AI · Assisted Authoring for Teachers",
    eyebrow: "AI · 0→1 · EdTech (US Curriculum)",
    lede: "Help teachers generate high-quality, standards-aligned quizzes in seconds—without the blank-box anxiety, generic hallucinations, or token waste.",
    role: "Product Designer (AI & Core)",
    time: "Discovery → Launch",
    year: "2023–24",
    team: "AI & Content",
    color: "#8b5cf6",
    logo: "logo-quizizz.png",
    cover: "quizizz.jpg",
    source: "https://wayground.com/?lng=en",
    vision: "Help teachers generate high-quality, standards-aligned quizzes instantly with AI, without sacrificing pedagogical control, verified accuracy, or cost-efficiency.",
    video: "https://www.youtube-nocookie.com/embed/nxVTd6pCsb0",
    videoTitle: "Wayground AI Assisted Authoring Walkthrough",
    stickers: [
      { icon: "✨", label: "Prompt Presets", sub: "~62% Less Bad Prompts", rot: "-2deg", href: "https://wayground.com/?lng=en" },
      { icon: "🎯", label: "Curriculum Map", sub: "87% On-Standard Rating", rot: "2.5deg", href: "wayground.html" },
      { icon: "💰", label: "38% Lower Cost", sub: "Pre-validation Filters", rot: "-1.5deg", href: "wayground.html" }
    ],
    quotes: {
      need: "“I don't have 20 minutes to figure out how to talk to ChatGPT. I need 10 questions on 7th-grade cell biology that match state standards right now.”",
      done: "Replaced the intimidating blank text box with structured prompt scaffolding, state curriculum auto-mapping, and an edit-first review workflow.",
      impact: "Drove 3–4x adoption in quiz generation, cut generation costs by 38%, and earned an 87% on-curriculum teacher approval rating."
    },
    problems: [
      {
        num: "01",
        title: "The Blank Box Trap: Prompt Scaffolding",
        problem: "Teachers stared at empty prompt boxes, feeling anxious and submitting vague queries that generated irrelevant, low-grade questions.",
        solution: "Replaced the blank input with structured dropdowns (Subject → Grade → Topic → Question Type) and one-click Prompt Presets.",
        metric: "~62% Fewer Failed Prompts"
      },
      {
        num: "02",
        title: "Eliminating AI Hallucinations with Citations",
        problem: "Educators rightfully distrust ungrounded AI text and fear fabricated historical dates or scientific inaccuracies in classroom tests.",
        solution: "Built verified source badges, public-domain citation links, and side-by-side comparison with original curriculum texts.",
        metric: "+42% Edit-Free Usage"
      },
      {
        num: "03",
        title: "Aligning to State Standards (Common Core / TEKS)",
        problem: "Teachers have to justify every test against state standards. Manually matching AI output to state codes was tedious.",
        solution: "Built a curriculum selector that injects state taxonomies (Common Core, NGSS, TEKS) directly into the generation pipeline.",
        metric: "87% On-Standard Rating"
      },
      {
        num: "04",
        title: "Controlling LLM Token Costs",
        problem: "Repeated teacher retries and failed generations drove massive LLM API bills.",
        solution: "Added lightweight client-side pre-validation filters and question count sliders to optimize every API call.",
        metric: "38% Lower Cost / Generation"
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
      ["The Problem: The 'Blank Canvas' Panic", `<p>When generative AI took off, many tools simply threw an open text box at teachers: <em>'Type your prompt here.'</em> But a teacher planning Monday's class during a 15-minute lunch break doesn't want to learn prompt engineering.</p><div class="story-analogy"><div class="story-analogy-header">💡 The Recipe Analogy</div><p class="story-analogy-body">Asking a teacher to prompt an LLM from scratch is like asking a chef to write a recipe book before cooking dinner. They don’t want an empty page; they want a prep station with ingredients ready to slice and dice.</p></div><div class="story-user-quote"><blockquote>“If the AI gives me questions meant for high schoolers when I teach 4th grade, I can't trust it. I end up starting over from scratch.”</blockquote><cite>— 4th Grade Math Teacher during Discovery</cite></div>`],
      ["The Fix: Prompt Less, Guide More", `<p>We conducted 1-on-1 interviews with 12 US educators across grades 3–10. The breakthrough was simple: <strong>trade open-ended typing for structured pedagogical selectors.</strong></p><ul class="story-bullets"><li><strong>Dropdown Scaffolding:</strong> Select Subject → Grade → Standard → Difficulty, and the system constructs an expert prompt behind the scenes.</li><li><strong>One-Click Presets:</strong> Pre-built templates for common classroom rituals (e.g., 'Friday Vocabulary Review', 'Chapter 5 Reading Check').</li><li><strong>Curriculum Auto-Mapping:</strong> Seamless alignment with state standards (Common Core, NGSS, TEKS).</li></ul>`],
      ["Draft, Don't Publish: Building Teacher Trust", `<p>Teachers must always feel in command. We framed every AI generation not as a final assessment, but as a flexible first draft that can be edited in seconds.</p><ul class="story-bullets"><li><strong>Side-by-Side Review:</strong> Compare AI questions against the uploaded PDF or textbook source material.</li><li><strong>1-Click Regenerate Question:</strong> If question #4 is too easy, swap it out with a single click without re-running the entire quiz.</li><li><strong>Cost Optimization:</strong> Pre-validation guards prevented redundant token spend, slashing generation cost by 38%.</li></ul>`],
      ["Measurable Results", `<p>Transformed AI authoring from an intimidating novelty into the primary top-of-funnel acquisition hook for Wayground.</p>`, [
        ["3–4×", "boost in quiz generation adoption"],
        ["38%", "reduction in LLM cost per run"],
        ["87%", "teachers rated content 'on-curriculum'"]
      ]]
    ],
    takeaways: [
      "Structure Beats Openness: Replacing empty input boxes with pedagogical building blocks eliminates user anxiety and token waste.",
      "Teacher Agency is Non-Negotiable: Always present AI output as an editable draft—never force-publish.",
      "Trust Drives Conversion: Grounded citations and verified curriculum badges turned free-tier trial users into paid subscribers."
    ],
    media: [
      ["quizizz-ai-builder.png", "Wayground AI assisted authoring prompt input, document parsing and link generation interface"],
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
    vision: "Democratize interactive digital assessments for every pen-and-paper classroom worldwide with zero hardware costs.",
    video: "https://www.youtube-nocookie.com/embed/rDGXjvXCdbI",
    videoTitle: "Paper Mode Live Classroom Testing Demo",
    stickers: [
      { icon: "📄", label: "Printable Q-Cards", sub: "Orientation A/B/C/D", rot: "-2.5deg", href: "https://wayground.com/home/solutions/paper-mode-on-quizizz?lng=en" },
      { icon: "⚡", label: "< 2s Full Scan", sub: "Computer Vision Camera", rot: "2deg", href: "wayground.html" },
      { icon: "🏫", label: "3,000+ Schools", sub: "Zero Student Logins", rot: "-1deg", href: "wayground.html" }
    ],
    quotes: {
      need: "“Over 70% of schools don't have tablets or laptops. Millions of students were completely locked out of interactive digital learning.”",
      done: "Architected the end-to-end Paper Mode experience, turning simple orientation-coded cards into instant answers scanned via phone camera.",
      impact: "Adopted by 3,000+ device-constrained classrooms, scanning over 12M questions in under 2 seconds per room."
    },
    problems: [
      {
        num: "01",
        title: "The $0 Hardware Bridge",
        problem: "Most schools cannot afford 1:1 student computers. Students were restricted to static paper tests, and teachers drowned in manual grading.",
        solution: "Designed durable printable QR cards where rotating the paper selects answer A, B, C, or D—requiring zero student devices or logins.",
        metric: "Zero Student Logins Needed"
      },
      {
        num: "02",
        title: "Scanning Chaos in Real Classrooms",
        problem: "Dim tube lights, tilted paper cards, and glare in crowded rooms caused mobile cameras to misread answers.",
        solution: "Iterated mobile camera UX with edge-detection bounding boxes, haptic click feedback, and high-contrast pattern borders.",
        metric: "< 2s Full-Class Scan"
      }
    ],
    projects: [
      ["Printable Q-Cards", "Durable, orientation-based physical response cards (A/B/C/D) for students.", "Physical UX", "https://wayground.com/home/solutions/paper-mode-on-quizizz?lng=en"],
      ["Camera Vision Scanning", "Multi-card computer vision recognition optimized for uneven lighting and classroom tilt.", "Mobile UX", "https://wayground.com/home/solutions/paper-mode-on-quizizz?lng=en"],
      ["Real-Time Classroom Sync", "Instant score reconciliation, performance analytics, and live leaderboard sync.", "Data Architecture", "https://wayground.com/home/solutions/paper-mode-on-quizizz?lng=en"]
    ],
    flow: ["Print free response cards", "Project question to class", "Students raise cards", "Scan & sync in < 2 seconds"],
    sections: [
      ["The Digital Divide: Leaving No Classroom Behind", `<p>In Silicon Valley, EdTech assumes every child holds an iPad. In reality, over 70% of classrooms globally are purely pen-and-paper. Teachers loved Quizizz, but couldn't use it because their students had no devices.</p><div class="story-analogy"><div class="story-analogy-header">💡 The Optical Switch</div><p class="story-analogy-body">How do you transmit 40 student answers without 40 screens? We turned a piece of paper into a 4-way optical switch: rotate top edge for A, right edge for B, bottom for C, left for D.</p></div>`],
      ["Field Testing in Crowded Classrooms", `<p>We took the prototypes directly into real classrooms at City International School and City Montessori School in Lucknow. Lab testing could never prepare us for the real-world chaos:</p><ul class="story-bullets"><li><strong>Flickering Tube Lights & Shadows:</strong> Optimized vision contrast so cards scan reliably in dimly lit rooms.</li><li><strong>Crumpled Corners:</strong> Redesigned the card borders with error-correcting glyphs that survive bends and finger smudges.</li><li><strong>One-Handed Mobile Flow:</strong> Enabled teachers to scan while walking the aisles with one hand holding their phone.</li></ul><div class="story-user-quote"><blockquote>“I used to spend my entire Sunday grading 200 paper sheets with a red pen. Now I hold up my phone, sweep across the room, and the scores are on my screen in 2 seconds.”</blockquote><cite>— Middle School Science Teacher, Lucknow</cite></div>`],
      ["The 2-Second Magic Loop", `<p>The live in-class experience is pure magic for both teacher and students:</p><ul class="story-bullets"><li><strong>Step 1:</strong> Teacher prints free reusable Q-cards once at the start of the semester.</li><li><strong>Step 2:</strong> Question is projected on the blackboard or read aloud.</li><li><strong>Step 3:</strong> Students hold up their card with their chosen answer facing top.</li><li><strong>Step 4:</strong> Teacher sweeps phone camera across the room; scores sync and leaderboard updates live!</li></ul>`],
      ["Global Classroom Adoption", `<p>Paper Mode unlocked massive viral organic growth across developing markets, proving that frugal innovation can out-deliver expensive hardware.</p>`, [
        ["3,000+", "classrooms actively adopted"],
        ["12M+", "questions scanned at launch"],
        ["< 2 sec", "average room scan time"]
      ]]
    ],
    takeaways: [
      "Frugal Innovation Wins: Pairing high-tech computer vision with $0 printed paper unlocked millions of unreachable students.",
      "Test in the Trenches: Real classroom field visits exposed lighting and ergonomic edge cases no office mockup could reveal.",
      "Preserve Teacher Habits: Don't force teachers to reinvent how they run class; simply supercharge what they already do."
    ],
    media: [
      ["paper-1.png", "Paper Mode end-to-end physical-to-digital scanning workflow and student Q-cards"]
    ]
  },

  qbits: {
    title: "Qbits · Concept Incubation & Student Identity",
    eyebrow: "0→1 Concept · Hackathon Winner · Product Direction",
    lede: "Incubating the avatar concept from a 48-hour hackathon win into the strategic product roadmap for Wayground, proving that student self-expression and effort-based reward loops could transform long-term platform engagement.",
    role: "Product Designer (Concept & Incubation)",
    time: "Hackathon & Roadmap Direction (2023)",
    year: "2023",
    team: "Hackathon Squad",
    color: "#ec4899",
    logo: "logo-quizizz.png",
    cover: "quizizz.jpg",
    source: "https://help.wayground.com/support/solutions/articles/158000404950-introducing-qbits-customizable-avatars-for-students-on-wayground-",
    vision: "Prove that digital identity, personalization, and effort-based reward loops can transform transient quiz excitement into sustained learner agency.",
    stickers: [
      { img: "qbit-skater.png", label: "Skater Qbit", sub: "Modular 3D Identity", rot: "-2.5deg", href: "wayground.html" },
      { icon: "🪙", label: "Virtual Currency", sub: "Effort & Streak Economy", rot: "2deg", href: "https://wayground.com/join/avatar-shop" },
      { icon: "🛍️", label: "The Shop", sub: "Common, Rare, Legendary Gear", rot: "-1.5deg", href: "https://wayground.com/join/avatar-shop" },
      { icon: "🏆", label: "Hackathon Winner", sub: "0→1 Incubation to Roadmap", rot: "3deg", href: "https://help.wayground.com/support/solutions/articles/158000404950-introducing-qbits-customizable-avatars-for-students-on-wayground-" }
    ],
    quotes: {
      need: "“Students loved live quizzes, but once the winner was announced and the tab closed, all emotional connection evaporated.”",
      done: "Pitched the concept at an internal hackathon, built a 48-hour working prototype, and established the roadmap for modular avatars, streak coins, and customization gear.",
      impact: "Won 1st place in the hackathon, validated high student emotional resonance, and laid the foundations for Wayground's live Qbits engine (+18% session re-joins)."
    },
    problems: [
      {
        num: "01",
        title: "The Flash-in-the-Pan Engagement Drop",
        problem: "Live quizzes created intense 10-minute adrenaline spikes, but gave students zero persistent sense of progress or reason to return.",
        solution: "Created persistent digital student avatars (Qbits) that learners customize and carry with pride across every class.",
        metric: "0→1 Concept Validated"
      },
      {
        num: "02",
        title: "Speed Anxiety vs. Effort Rewards",
        problem: "Traditional leaderboard mechanics favored the fastest clickers, discouraging thoughtful and methodical learners.",
        solution: "Introduced streak coins and effort-based reward loops that celebrate daily practice, improvement, and consistency.",
        metric: "Intrinsic Motivation Engine"
      },
      {
        num: "03",
        title: "Inclusive, Low-Spec 3D Engine",
        problem: "Avatars had to avoid cultural/gender stereotypes while rendering smoothly on budget school Chromebooks.",
        solution: "Architected a modular, gender-neutral chassis with lightweight 2.5D layered SVG/canvas assets and fun streetwear accessories.",
        metric: "1st Place Hackathon Winner"
      }
    ],
    projects: [
      ["Hackathon MVP & Prototype", "48-hour working avatar generator and lobby test validating student enthusiasm.", "0→1 Prototype", "https://wayground.com/join/avatar-shop"],
      ["Concept Architecture & Roadmap", "Strategic proposal defining modular character layering, virtual coins, and shop progression.", "Product Direction", "https://wayground.com/join/avatar-shop"],
      ["Live Scaled Experience", "The full ecosystem expanded by the squad into daily streaks, wardrobe shops, and global classrooms.", "Scaled Product", "https://wayground.com/join/avatar-shop"]
    ],
    flow: ["Identify engagement drop-off", "Pitch at hackathon", "Build 48h working prototype", "Define strategic roadmap"],
    sections: [
      ["The Hackathon Spark: Why Do Games Hook Kids?", `<p>During a company hackathon, we asked a simple question: <em>Why do kids spend hundreds of hours in Minecraft and Roblox, but treat school quizzes like disposable worksheets?</em> In games, every hour of effort translates into personal identity—skins, gear, badges, and pride.</p><div class="story-analogy"><div class="story-analogy-header">🎮 The Gaming Analogy</div><p class="story-analogy-body">A quiz score is just a number that disappears in 5 seconds. A personalized skater avatar with a neon helmet earned through a 5-day math streak is an identity students want to show off in every lobby.</p></div>`],
      ["Building the 48-Hour Working MVP", `<p>Teaming up with an engineer and illustrator, we built an interactive prototype from scratch in 48 hours:</p><ul class="story-bullets"><li><strong>Modular Character Chassis:</strong> Gender-neutral, expressive base avatars with swappable hats, hairstyles, glasses, and gear.</li><li><strong>The Classroom Podium Lobby:</strong> When students join a live quiz, their unique avatars drop onto an animated 3D podium.</li><li><strong>Streak Currency & The Shop:</strong> Students earn practice coins to unlock Common, Rare, and Legendary accessories in the Avatar Closet.</li></ul><div class="story-user-quote"><blockquote>“I stayed up doing extra science quizzes just to get enough coins for the dragon hoodie before tomorrow's live class!”</blockquote><cite>— Student Tester Feedback</cite></div>`],
      ["From Hackathon Win to Strategic Pillar", `<p>The prototype won <strong>1st place</strong> across the entire company. The data was undeniable: student participation and voluntary practice sessions surged when identity was on the line. We packaged the design specs, economy models, and component guidelines to hand off to the dedicated squad that scaled Qbits globally.</p>`],
      ["Measurable Outcome", `<p>Proved that self-expression is not cosmetic fluff—it is the core engine of intrinsic learner retention.</p>`, [
        ["1st Place", "Internal Hackathon Winner"],
        ["+18%", "student session re-joins"],
        ["Scaled", "global live feature on Wayground"]
      ]]
    ],
    highlight: [
      "From Hackathon to Product Pillar",
      "Why Early Concept Prototyping Matters",
      "Building a tangible 48-hour working prototype proved that student agency and self-expression weren't just cosmetic flourishes, they were fundamental engagement mechanics. This initial incubation laid the groundwork for what is now the core Qbits experience.<br><br><div class='highlight-cta-group'><a class='highlight-link-pill' href='https://wayground.com/join/avatar-shop' target='_blank' rel='noopener'>Try Now ↗</a><a class='highlight-link-pill highlight-link-pill--secondary' href='https://help.wayground.com/support/solutions/articles/158000404950-introducing-qbits-customizable-avatars-for-students-on-wayground-' target='_blank' rel='noopener'>Help Center Article ↗</a></div>",
      "qbit-skater.png"
    ],
    takeaways: [
      "Prototypes Beat Pitch Decks: A tactile 48-hour working demo won company greenlight faster than 50 slides ever could.",
      "Reward Effort, Not Just Speed: Rewarding daily practice streaks empowers thoughtful learners who get demoralized by speed timers.",
      "Self-Expression Drives Retention: When students own their digital identity, homework transforms from a chore into a proud ritual."
    ],
    media: [
      ["qbit-customizer-ui.png", "Avatar Customization Engine: In-game pattern selection, helmet colorways, and real-time podium preview"],
      ["qbit-skater.png", "Skater Qbit avatar concept with modular streetwear, helmet, and skateboard accessories"]
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
    vision: "Turn real-money gaming into a transparent, secure, and intuitive entertainment platform built on radical financial clarity.",
    stickers: [
      { icon: "🛡️", label: "FairPlay 100%", sub: "Tier-1 KYC Security", rot: "-3deg", href: "https://www.getmega.com" },
      { icon: "🏏", label: "Fantasy Sports", sub: "Live Match HUDs", rot: "2deg", href: "https://www.getmega.com" },
      { icon: "💳", label: "42%→83% KYC", sub: "Transparent Wallet", rot: "-1deg", href: "projects.html" }
    ],
    quotes: {
      need: "“If I win ₹500, how do I get my money? Is this rigged?” Users were anxious about real-money deposits, confusing KYC, and hidden fees.",
      done: "Architected the flagship GetMega Fantasy experience, unified platform design systems, and designed transparent wallet & tiered KYC flows.",
      impact: "Doubled KYC completion from 42% to 83%, cut fraudulent withdrawals by 40%+, and reduced game abandonment by 15%."
    },
    problems: [
      {
        num: "01",
        title: "Deposit Anxiety & Shady KYC Walls",
        problem: "Demanding intrusive government ID uploads before users even played a match caused massive 58% onboarding drop-offs.",
        solution: "Introduced Tiered KYC (play casual games first, verify ID only upon high-value withdrawal) with plain-English safety badges.",
        metric: "42% → 83% KYC Completion"
      },
      {
        num: "02",
        title: "UI Fragmentation Across Fast-Paced Games",
        problem: "Shipping multiple game titles without a design system led to inconsistent controls, confusing rules, and bloated dev cycles.",
        solution: "Architected a unified gaming design system with reusable match HUDs, live leaderboards, and celebratory win states.",
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
      ["The Challenge: Trust is the Primary Currency", `<p>In real-money gaming, user psychology is fragile. Players are 10% excited and 90% skeptical. If a wallet screen looks confusing, or if withdrawal rules feel hidden, players immediately suspect fraud and delete the app.</p><div class="story-analogy"><div class="story-analogy-header">🎰 The Casino Cashier Analogy</div><p class="story-analogy-body">If you go to a casino cashier and they won't tell you the exchange rate or make you wait in an unmarked corridor, you walk out. The wallet and KYC experience must feel as transparent and secure as a modern Swiss bank app.</p></div><div class="story-user-quote"><blockquote>“I wanted to play Fantasy Cricket, but the app asked for my PAN card and bank details before I even saw a contest. It felt shady.”</blockquote><cite>— User Interview Insight</cite></div>`],
      ["The Strategy: Progressive Trust & Tiered KYC", `<p>We redesigned the entire player onboarding journey around <strong>progressive disclosure and risk-free discovery:</strong></p><ul class="story-bullets"><li><strong>Practice Before You Pay:</strong> Interactive tutorial rounds and simulated dummy matches so users build confidence before spending real money.</li><li><strong>Tiered KYC Verification:</strong> Allow low-stakes entry with basic phone verification, requiring full ID documents only when unlocking higher withdrawal tiers.</li><li><strong>Radical Fee Transparency:</strong> Crystal-clear breakdowns showing gross winnings, platform fee, and net payout in real time.</li></ul>`],
      ["GetMega Fantasy & Design System", `<p>Spearheaded the flagship GetMega Fantasy experience, making complex player selection, budget management, and live match scoring intuitive during fast-moving cricket matches. Built a unified design system of components, motion tokens, and dark-mode game HUDs across web and Android.</p>`],
      ["Measurable Business Growth", `<p>Radical transparency eliminated onboarding friction while strict verification rules protected the platform against financial fraud.</p>`, [
        ["42→83%", "KYC completion rate"],
        ["40%+", "reduction in fraud claims"],
        ["21%", "higher new-player retention"]
      ]]
    ],
    highlight: [
      "Flagship Feature",
      "End-to-end UX Architecture for GetMega Fantasy",
      "Spearheaded the UX strategy for GetMega Fantasy, crafting an intuitive end-to-end journey within a complex real-money ecosystem while establishing platform-wide trust, KYC, and transaction patterns."
    ],
    takeaways: [
      "Radical Transparency Builds Retention: Clear breakdowns of fees and withdrawal timelines directly eliminate user churn.",
      "Progressive Trust: Never demand high-friction documents (like ID scans) before users have experienced the core product value.",
      "Systemic Reusability: A shared game HUD component library let our engineering team launch new titles in half the time."
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
    vision: "Automate high-risk enterprise warehouse audits with intuitive, 1-click autonomous aerial drone orchestration.",
    stickers: [
      { icon: "🚁", label: "FlytWare", sub: "Autonomous Drone Fleet", rot: "-2deg", href: "https://www.flytbase.com" },
      { icon: "📦", label: "WMS Cloud Sync", sub: "Real-time Telemetry", rot: "2.5deg", href: "projects.html" }
    ],
    quotes: {
      need: "“Manual warehouse inventory counting takes thousands of hours on 40-foot scissor lifts: slow, dangerous, and error-prone.”",
      done: "Designed the interaction architecture for FlytWare: autonomous flight planning, obstacle clearance zones, and real-time WMS telemetry dashboards.",
      impact: "Transformed complex robotics flight controls into a commercial, zero-incident autonomous audit system for enterprise warehouses."
    },
    problems: [
      {
        num: "01",
        title: "The Pilot Problem: High-Risk Flight Controls",
        problem: "Warehouse floor managers are logistics experts, not licensed drone pilots. Complex 3D aerodynamic controls intimidated operators.",
        solution: "Abstracted 3D flight physics into 1-click aisle mission templates with automated geofenced collision avoidance.",
        metric: "Zero-Incident Safety UX"
      },
      {
        num: "02",
        title: "Live Data Deluge: 10,000 Barcodes vs. WMS",
        problem: "Drones scanning hundreds of pallets per minute threatened to overwhelm the cloud console with data lag and sync errors.",
        solution: "Designed visual shelf heatmaps with color-coded discrepancy highlights that instantly flag missing or misplaced inventory.",
        metric: "Real-Time Telemetry Sync"
      }
    ],
    projects: [
      ["FlytWare Interaction Architecture", "Autonomous aerial barcoding, visual shelf inspection, and real-time WMS reconciliation.", "Robotics UX", "https://www.flytbase.com"],
      ["Ground Control Station", "Cloud dashboard for multi-drone fleet monitoring, battery telemetries, and emergency overrides.", "Mission Control", "https://www.flytbase.com"],
      ["Enterprise WMS Integration", "Discrepancy resolution flows matching drone barcode telemetry with existing warehouse databases.", "Data Systems", "https://www.flytbase.com"]
    ],
    flow: ["Map warehouse aisles", "Deploy autonomous flight", "Capture aerial barcode data", "Reconcile WMS discrepancies"],
    sections: [
      ["The Problem: Auditing 500,000 Sq Ft with a Scissor Lift", `<p>Imagine a distribution center the size of 10 football fields with pallet racks reaching 40 feet into the air. Counting inventory meant workers riding high-reach lifts with barcode scanners—slow, expensive, and a major occupational safety hazard.</p><div class="story-analogy"><div class="story-analogy-header">🚁 Autonomous Flying Eyes</div><p class="story-analogy-body">Instead of putting human workers at risk on high machinery, autonomous drones fly down the aisles like automated warehouse bats, scanning 10,000 barcodes an hour while reconciling discrepancies with the cloud database in real time.</p></div>`],
      ["Ground Control: Making Robotics Feel Effortless", `<p>Our goal was to ensure any warehouse shift supervisor could deploy a fleet of drones with zero piloting training:</p><ul class="story-bullets"><li><strong>1-Click Mission Dispatch:</strong> Select 'Aisle 12 to 16 Audit' and click Launch. The drone plans its own ascent, waypoint path, and battery return.</li><li><strong>Spatial Safety Boundaries:</strong> Real-time visual geofencing alerts operators if a forklift enters the flight corridor.</li><li><strong>Live Shelf Heatmaps:</strong> Discrepancy reconciliation dashboard highlights missing boxes in red and scanned items in green directly on the 3D aisle view.</li></ul><div class="story-user-quote"><blockquote>“I don't have time to fiddle with joysticks. I just want to tell the drone which aisle to count and see the results on my tablet.”</blockquote><cite>— Warehouse Operations Supervisor</cite></div>`],
      ["System Architecture & Robotics Alignment", `<p>FlytWare combines intelligent cloud software with off-the-shelf drone hardware to automate aerial barcoding and real-time WMS reconciliation without proprietary hardware lock-in.</p>`],
      ["Impact & Enterprise Validation", `<p>By bridging complex robotics engineering with intuitive frontline ergonomics, FlytWare proved that autonomous drones could transition from experimental tech into a daily operational necessity.</p>`, [
        ["Zero", "flight safety incidents"],
        ["10x", "faster aisle audit velocity"],
        ["Enterprise", "WMS cloud integration"]
      ]]
    ],
    takeaways: [
      "Safety UX is Non-Negotiable: In physical robotics, instant emergency pause buttons and clear spatial boundaries prevent disasters.",
      "Translate 3D to 2D Simply: Translating complex 3D drone coordinates into 2D shelf heatmaps keeps operators focused on business data.",
      "Design for Shift Workers: High-contrast dashboards with oversized buttons survive the glare and dusty conditions of warehouse tablets."
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
    vision: "Unify chaotic restaurant operations into a lightning-fast, tactile ecosystem that empowers staff and delights dining guests.",
    stickers: [
      { icon: "⚡", label: "< 3 Taps", sub: "High-Velocity POS Flow", rot: "-2deg", href: "https://joinsummer.app" },
      { icon: "📱", label: "QR Ordering", sub: "Contactless Tabs", rot: "2.5deg", href: "https://joinsummer.app" }
    ],
    quotes: {
      need: "“During an 8 PM Friday rush, servers have 3 seconds to punch in orders. Legacy POS terminals were slow, bloated, and crashed constantly.”",
      done: "Architected the high-velocity POS interface, kitchen display system, table-side contactless QR ordering, and offline resilience protocols.",
      impact: "Cut new staff training time to under 30 minutes, accelerated table turnover by 22%, and slashed 86'd menu errors by 40%."
    },
    problems: [
      {
        num: "01",
        title: "The 3-Second Rush: Frontline POS Speed",
        problem: "High staff turnover meant servers constantly made ordering mistakes on outdated, 10-menu POS screens.",
        solution: "Designed a tactile, muscle-memory interface where every core action (modifier, seat swap, bill split) takes under 3 taps.",
        metric: "< 30 Min Staff Onboarding"
      },
      {
        num: "02",
        title: "Kitchen Communication Chaos & Out-of-Stock Meals",
        problem: "Special allergy notes and 86'd (sold-out) items got lost between waitstaff and the kitchen line, leading to angry guests.",
        solution: "Built real-time station ticket routing with color-coded allergy badges and instant automatic menu 86'ing across POS and QR menus.",
        metric: "40% Fewer Out-of-Stock Errors"
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
      ["The Challenge: The 8 PM Dinner Rush Pressure Cooker", `<p>A bustling restaurant on a Friday night is an absolute war room. Pots clattering, servers rushing, tickets printing, and customers waving for their checks. In this environment, software cannot afford a single split-second delay or confusing popup.</p><div class="story-analogy"><div class="story-analogy-header">🏎️ The F1 Pit Stop Rule</div><p class="story-analogy-body">A restaurant POS shouldn’t feel like complex accounting software; it should operate like an Formula 1 pit crew tool—tactile, blazing fast, and executable with one thumb in under 3 seconds.</p></div><div class="story-user-quote"><blockquote>“If splitting a table's bill across 4 cards takes more than two taps, a line forms at the bar and drinks get cold.”</blockquote><cite>— Lead Server during On-Site Research</cite></div>`],
      ["The Unified Hospitality Architecture", `<p>We designed an integrated ecosystem connecting every touchpoint of the dining experience:</p><ul class="story-bullets"><li><strong>The 3-Tap POS:</strong> Muscle-memory layout with instant modifier wheels and one-touch split checks.</li><li><strong>Live Kitchen Display (KDS):</strong> Dynamic ticket routing to cold, hot, and bar stations with priority urgency timers.</li><li><strong>Contactless Guest QR Ordering:</strong> Guests scan table QR codes to view live menus, add appetizers, and split tabs directly from their phones.</li><li><strong>Offline-First Resilience:</strong> If restaurant WiFi drops mid-service, transactions queue locally and sync automatically without dropping a single order.</li></ul>`],
      ["Principles for High-Pressure Environments", `<ul class="story-bullets"><li><strong>3 Taps Maximum:</strong> Any frequent operational task taking more than 3 taps is a failure.</li><li><strong>High-Contrast Legibility:</strong> Dark background surfaces with bright state colors survive moody restaurant lighting.</li><li><strong>Tactile Assurance:</strong> Audio chimes and haptic clicks give servers confidence that orders went through without looking twice.</li></ul>`],
      ["Measurable Operational Gains", `<p>Accelerated frontline service speed, eliminated communication friction between front-of-house and kitchen, and turned first-time servers into confident pros on day one.</p>`, [
        ["< 30 min", "training ramp for new servers"],
        ["22%", "faster table turnover"],
        ["40%", "fewer out-of-stock menu errors"]
      ]]
    ],
    takeaways: [
      "The 3-Tap Rule: In fast-paced frontline environments, any core action requiring more than 3 taps is a design failure.",
      "Offline-First is Critical: When restaurants lose internet, service cannot stop. Local caching and offline sync are non-negotiable.",
      "Dual-Sided Empathy: Balancing the lightning speed needed by line cooks with the relaxed, pleasant vibe expected by dining guests."
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
    vision: "Democratize secured private credit investments by replacing opaque financial jargon with radical collateral transparency.",
    stickers: [
      { icon: "📈", label: "Asset-Backed", sub: "Private Credit", rot: "-2.5deg", href: "https://www.earnnest.me" },
      { icon: "⚡", label: "5-Min KYC", sub: "38% Less Drop-Off", rot: "2deg", href: "https://www.earnnest.me" }
    ],
    quotes: {
      need: "“High-yield alternative investments were locked in institutional boardrooms, hidden behind 80-page legal PDFs nobody could understand.”",
      done: "Defined the 0-to-1 product strategy, institutional brand system, transparent asset breakdowns, automated 5-minute KYC, and live yield tracking.",
      impact: "Acquired 8,000+ active investors in six weeks, boosted deal conversion by 32%, and reduced KYC drop-off by 38%."
    },
    problems: [
      {
        num: "01",
        title: "Jargon Overload & Skepticism",
        problem: "Individual investors were intrigued by 12–14% asset-backed yields, but intimidated by complex legal prospectuses and feared hidden catches.",
        solution: "Replaced Wall Street jargon with visual collateral breakdowns, transparent downside protection cards, and interactive return simulators.",
        metric: "32% Higher Deal Conversion"
      },
      {
        num: "02",
        title: "The 3-Day KYC Abandonment Cliff",
        problem: "Traditional accredited investor onboarding took days of manual paperwork, resulting in heavy funnel abandonment.",
        solution: "Designed a seamless 4-step digital verification flow with instant OCR document matching in under 5 minutes.",
        metric: "38% Less KYC Drop-Off"
      }
    ],
    projects: [
      ["Institutional Brand Identity", "Trust-anchored visual system, refined typography, and editorial financial voice.", "Brand Strategy", "https://www.earnnest.me"],
      ["Education-Led Conversion Funnel", "Interactive deal transparency: Understand the asset → Evaluate risk → One-click invest.", "Growth UX", "https://www.earnnest.me"],
      ["Mobile & Web App Platform", "Transparent deal catalogs, 5-minute automated KYC, and live yield tracking dashboard.", "0→1 Product", "https://www.earnnest.me"]
    ],
    flow: ["Understand the asset class", "Evaluate collateral & deal", "5-minute automated KYC", "Invest & track live yield"],
    sections: [
      ["The Challenge: The Opaque Wall Street Black Box", `<p>Historically, senior secured debt and private credit were restricted to multi-millionaires and institutional funds. Deals were buried under 80-page prospectuses packed with dense legal jargon that made it impossible for everyday investors to evaluate real risk.</p><div class="story-analogy"><div class="story-analogy-header">🏢 The Glass Storefront Analogy</div><p class="story-analogy-body">Instead of hiding behind financial buzzwords, we turned alternative debt into an open glass storefront—where investors can clearly see what real-world assets (warehouses, equipment, receivables) protect their principal before investing a single rupee.</p></div><div class="story-user-quote"><blockquote>“I don't need marketing hype. Just show me what assets back the loan, who borrowed it, and what happens if they default.”</blockquote><cite>— Beta Retail Investor Feedback</cite></div>`],
      ["0→1 Product & Brand Architecture", `<p>We built the product foundation around <strong>education, transparency, and institutional trust:</strong></p><ul class="story-bullets"><li><strong>Visual Asset Breakdown:</strong> Interactive deal cards showing over-collateralization ratios, borrower financials, and repayment schedules in plain English.</li><li><strong>5-Minute Automated KYC:</strong> Friction-free digital identity check and accreditation that cut onboarding drop-off by 38%.</li><li><strong>Live Daily Yield Tracker:</strong> Real-time interest accumulation ticker that gives investors instant visual feedback on their growing returns.</li></ul>`],
      ["Strategic Positioning", `<ul class="story-bullets"><li><strong>Downside Protection First:</strong> We led with how borrower collateral secures investor capital, not with get-rich-quick yield claims.</li><li><strong>Bite-Sized Due Diligence:</strong> Replaced monolithic PDF prospectuses with progressive summary drawers.</li><li><strong>Institutional Aesthetic:</strong> Understated dark surfaces with crisp typography to immediately convey security.</li></ul>`],
      ["Measurable Market Validation", `<p>Rapidly established product-market fit, proving that radical transparency and premium craft turn skeptical retail investors into repeat lenders.</p>`, [
        ["8,000+", "investors onboarded in 6 weeks"],
        ["32%", "increase in deal conversion"],
        ["38%", "less KYC abandonment"]
      ]]
    ],
    takeaways: [
      "Downside Protection Over Hype: High-yield fintech succeeds by demonstrating security and collateral, not by shouting flashy numbers.",
      "Progressive Financial Disclosure: Breaking complex balance sheets into digestible, interactive cards keeps investors confident.",
      "Craft Equals Trust: In money apps, immaculate typography, clear numbers, and instant micro-interactions directly signal institutional safety."
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
    let body = "";
    if (Array.isArray(s[1])) {
      body = `<ul class="story-bullets">${s[1].map(x => `<li>${x}</li>`).join("")}</ul>`;
    } else if (typeof s[1] === "string" && s[1].trim().startsWith("<")) {
      body = s[1];
    } else if (typeof s[1] === "string") {
      const paragraphs = s[1].split(/\n\n+/).filter(Boolean);
      body = paragraphs.map(p => `<p>${p}</p>`).join("");
    }
    
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
        <span class="read-time-pill"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> 4 min story</span>
        <span class="llm-pill" title="Narrative text rephrased and polished with LLM assistance for clarity and language"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg> LLM Refined</span>
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

    <div class="case-disclosure spotlight-card">
      <div class="disclosure-header">
        <span class="disclosure-badge">✦ Note</span>
        <span class="disclosure-tag">AI-Assisted Copy</span>
      </div>
      <p class="disclosure-text">
        Polished with AI for conciseness and clarity. All designs, decisions, and metrics reflect authentic real-world work.
      </p>
      <div class="disclosure-source">
        <a href="${d.source}" target="_blank" rel="noopener">View original Notion brief ↗</a>
      </div>
    </div>
  `;
}

// Execute immediately upon load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderCaseStudy);
} else {
  renderCaseStudy();
}
