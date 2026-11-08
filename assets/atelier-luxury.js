/* Atelier enhancement — optional progressive UX. Existing legacy functions remain untouched. */
(() => {
  'use strict';
  const bar = document.querySelector('.hamburger-container');
  const scrollButton = document.querySelector('.lux-to-top');
  const updateScrollState = () => {
    const moving = window.scrollY > 12;
    if (bar) bar.classList.toggle('is-scrolled', moving);
    if (scrollButton) scrollButton.classList.toggle('is-visible', window.scrollY > 650);
  };
  window.addEventListener('scroll', updateScrollState, { passive: true });
  updateScrollState();
  scrollButton?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  });
  let page = location.pathname.split('/').filter(Boolean).pop() || 'index.html';
  if (!page.endsWith('.html')) page = 'index.html';
  document.querySelectorAll('.horizontal-nav-links a').forEach(link => {
    const target = (link.getAttribute('href') || '').split('#')[0].split('/').pop();
    if (target === page) link.setAttribute('aria-current', 'page');
  });
  document.querySelectorAll('.gallery-item[onclick]').forEach(item => {
    item.tabIndex = 0;
    item.setAttribute('role', 'button');
    const title = item.querySelector('.gallery-info h3')?.textContent?.trim() || item.querySelector('img')?.alt || 'Gallery image';
    item.setAttribute('aria-label', title);
    item.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        item.click();
      }
    });
  });
  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    img.setAttribute('decoding', 'async');
  });
})();
