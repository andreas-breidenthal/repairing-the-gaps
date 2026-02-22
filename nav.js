// nav.js — Repairing the Gaps
// Injects site nav and handles section nav active state

document.addEventListener('DOMContentLoaded', function () {

  // ── SITE NAV ──────────────────────────────────────────
  const siteNav = document.getElementById('site-nav');
  if (siteNav) {
    siteNav.innerHTML = `
      <nav class="site-nav">
        <a href="/../andreas-breidenthal/index.html" class="home">Andreas Breidenthal</a>
        <div class="site-nav-links">
          <a href="https://andreas-breidenthal.github.io/operation-seamless/">Operation Seamless</a>
        </div>
      </nav>
    `;
  }

  // ── SECTION NAV ACTIVE STATE ───────────────────────────
  const sections = document.querySelectorAll('.essay-section, .final-question-block');
  const navLinks = document.querySelectorAll('.section-nav a');

  if (sections.length && navLinks.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.remove('active'));
          const id = entry.target.id;
          const active = document.querySelector(`.section-nav a[href="#${id}"]`);
          if (active) {
            active.classList.add('active');
            active.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'center'
            });
          }
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });

    sections.forEach(s => observer.observe(s));
  }

});
