const header = document.querySelector('[data-header]');
const nav = document.querySelector('[data-nav]');
const navToggle = document.querySelector('[data-nav-toggle]');
const megaItems = document.querySelectorAll('.mega-item');

function updateHeader() {
  header?.classList.toggle('is-scrolled', window.scrollY > 24);
}
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

navToggle?.addEventListener('click', () => {
  const isOpen = nav?.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(Boolean(isOpen)));
  if (!isOpen) {
    megaItems.forEach((item) => item.classList.remove('is-active'));
    document.querySelectorAll('.mega-trigger').forEach((trigger) => trigger.setAttribute('aria-expanded', 'false'));
  }
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
    megaItems.forEach((item) => item.classList.remove('is-active'));
    document.querySelectorAll('.mega-trigger').forEach((trigger) => trigger.setAttribute('aria-expanded', 'false'));
  });
});

document.querySelectorAll('.mega-trigger').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const item = trigger.closest('.mega-item');
    const willOpen = !item?.classList.contains('is-active');

    megaItems.forEach((entry) => {
      entry.classList.remove('is-active');
      entry.querySelector('.mega-trigger')?.setAttribute('aria-expanded', 'false');
    });

    if (item && willOpen) {
      item.classList.add('is-active');
      trigger.setAttribute('aria-expanded', 'true');
    }
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.site-header')) {
    megaItems.forEach((item) => item.classList.remove('is-active'));
    document.querySelectorAll('.mega-trigger').forEach((trigger) => trigger.setAttribute('aria-expanded', 'false'));
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
