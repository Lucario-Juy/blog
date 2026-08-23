const header = document.querySelector('.site-header');
const links = [...document.querySelectorAll('.nav a')];
const sections = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);

const updateNav = () => {
  const marker = window.scrollY + 130;
  let current = sections[0];
  sections.forEach(section => { if (section.offsetTop <= marker) current = section; });
  links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${current.id}`));
  header.classList.toggle('scrolled', window.scrollY > 18);
};

window.addEventListener('scroll', updateNav, { passive: true });
updateNav();
