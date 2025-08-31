// Mobile nav toggle
const toggle = document.querySelector('.nav__toggle');
const list = document.querySelector('.nav__list');
if (toggle && list) {
  toggle.addEventListener('click', () => {
    const open = list.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Active section highlighting
const links = Array.from(document.querySelectorAll('.nav__list a'));
const sections = links
  .map(a => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

const activate = (id) => {
  links.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === `#${id}`));
};

const obs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) activate(entry.target.id);
  });
}, { rootMargin: '-50% 0px -45% 0px', threshold: 0.01 });

sections.forEach(s => obs.observe(s));

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Close nav on link click (mobile)
links.forEach(a => a.addEventListener('click', () => {
  list.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', 'false');
}));
