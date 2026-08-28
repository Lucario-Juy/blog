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

const videoModal = document.querySelector('#videoModal');
const workVideo = document.querySelector('#workVideo');
const blenderWork = document.querySelector('.blender-work');
const closeVideo = () => { videoModal.classList.remove('open'); videoModal.setAttribute('aria-hidden','true'); workVideo.pause(); workVideo.removeAttribute('src'); workVideo.load(); document.body.style.overflow = ''; };
const openVideo = () => { workVideo.src = blenderWork.dataset.video; videoModal.classList.add('open'); videoModal.setAttribute('aria-hidden','false'); document.body.style.overflow = 'hidden'; };
blenderWork?.addEventListener('click', openVideo);
blenderWork?.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openVideo(); } });
videoModal?.querySelectorAll('[data-close-video]').forEach(el => el.addEventListener('click', closeVideo));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && videoModal?.classList.contains('open')) closeVideo(); });
