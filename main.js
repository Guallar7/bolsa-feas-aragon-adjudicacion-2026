const progressBar = document.querySelector(".scroll-progress span");
const railLinks = Array.from(document.querySelectorAll("[data-section-target]"));
const sections = railLinks
  .map((link) => document.getElementById(link.dataset.sectionTarget))
  .filter(Boolean);

function updateScrollProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  progressBar.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
}

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    railLinks.forEach((link) => {
      link.classList.toggle("is-active", link.dataset.sectionTarget === visible.target.id);
    });
  },
  {
    rootMargin: "-25% 0px -55% 0px",
    threshold: [0.12, 0.24, 0.4],
  },
);

sections.forEach((section) => sectionObserver.observe(section));
updateScrollProgress();
window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);
