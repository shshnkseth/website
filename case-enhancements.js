// Micro-interactions & Motion Enhancements

function initEnhancements() {
  // 1. Reading Progress Bar
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

  // 2. Mouse-Tracking Spotlight Glow
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

  // 3. Kinetic Number Animation
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        animateNumber(el);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

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
}

// Run safely after render
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initEnhancements);
} else {
  // Give case-study.js synchronous render a tick
  setTimeout(initEnhancements, 50);
}
