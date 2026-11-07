(() => {
  'use strict';
  const menuBtn = document.querySelector('[data-menu-button]');
  const menu = document.querySelector('[data-menu]');
  if (menuBtn && menu) {
    const close = () => { menu.classList.remove('is-open'); menuBtn.setAttribute('aria-expanded', 'false'); };
    menuBtn.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
    document.addEventListener('click', e => { if (!menu.contains(e.target) && !menuBtn.contains(e.target)) close(); });
  }
  const filters = document.querySelectorAll('[data-product-filter]');
  const cards = document.querySelectorAll('[data-product-category]');
  const empty = document.querySelector('[data-empty-results]');
  filters.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.dataset.productFilter;
      filters.forEach(b => { const selected = b === button; b.classList.toggle('active', selected); b.setAttribute('aria-pressed', String(selected)); });
      let shown = 0;
      cards.forEach(card => { const visible = category === 'all' || card.dataset.productCategory === category; card.hidden = !visible; if (visible) shown++; });
      if (empty) empty.hidden = shown !== 0;
    });
  });
  document.querySelectorAll('[data-quote-form]').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const english = document.documentElement.lang === 'en';
      const lines = english
        ? ['Hello Desert Sand Est., I would like a supply quotation:', 'Material: ' + (data.get('material') || 'Not specified'), 'Quantity: ' + (data.get('quantity') || 'Not specified'), 'Delivery area: ' + (data.get('area') || 'Not specified'), 'Name: ' + (data.get('customer') || 'Not specified'), 'Notes: ' + (data.get('notes') || 'None')]
        : ['السلام عليكم، أرغب في عرض سعر لتوريد مواد البناء:', 'المادة: ' + (data.get('material') || 'غير محدد'), 'الكمية: ' + (data.get('quantity') || 'غير محدد'), 'حي التوصيل: ' + (data.get('area') || 'غير محدد'), 'الاسم: ' + (data.get('customer') || 'غير محدد'), 'ملاحظات: ' + (data.get('notes') || 'لا توجد')];
      window.open('https://wa.me/966537216061?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener,noreferrer');
    });
  });
  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = String(new Date().getFullYear()); });
})();