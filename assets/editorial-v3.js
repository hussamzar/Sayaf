(() => {
'use strict';
const navButton=document.querySelector('[data-menu-toggle]');
const nav=document.querySelector('[data-primary-nav]');
if(navButton&&nav){
const close=()=>{nav.classList.remove('is-open');navButton.setAttribute('aria-expanded','false')};
navButton.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');navButton.setAttribute('aria-expanded',String(open))});
document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
document.addEventListener('click',e=>{if(!nav.contains(e.target)&&!navButton.contains(e.target))close()});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close))
}
const viewer=document.getElementById('photo-viewer');
if(viewer){
const photo=viewer.querySelector('[data-view-photo]'),caption=viewer.querySelector('[data-view-caption]');
document.querySelectorAll('[data-lightbox]').forEach(button=>button.addEventListener('click',()=>{
const url=button.getAttribute('data-lightbox')||button.querySelector('img')?.getAttribute('src');if(!url)return;
photo.src=url;photo.alt=button.querySelector('img')?.alt||'';caption.textContent=button.getAttribute('data-caption')||photo.alt;
if(typeof viewer.showModal==='function')viewer.showModal();
}));
viewer.querySelector('[data-modal-close]')?.addEventListener('click',()=>viewer.close());
viewer.addEventListener('click',e=>{if(e.target===viewer)viewer.close()})
}
document.querySelectorAll('.accordion-item').forEach(item=>{
const header=item.querySelector('.accordion-header'),body=item.querySelector('.accordion-content');
if(header&&body&&!item.closest('details')){
const details=document.createElement('details'),summary=document.createElement('summary');
summary.innerHTML=header.innerHTML;details.className='faq-details';summary.style.cursor='pointer';details.append(summary,body);item.replaceWith(details)
}
});
document.querySelectorAll('[data-quote-form]').forEach(form=>form.addEventListener('submit',e=>{
e.preventDefault();if(!form.reportValidity())return;
const d=new FormData(form),english=document.documentElement.lang==='en';
const lines=english?[
'Construction material quotation enquiry','Material: '+(d.get('material')||'-'),'Quantity: '+(d.get('quantity')||'-'),
'Delivery area: '+(d.get('area')||'-'),'Name: '+(d.get('customer')||'-'),'Notes: '+(d.get('notes')||'-')]
:['السلام عليكم، أرجو عرض سعر لتوريد مواد البناء','المادة: '+(d.get('material')||'-'),
'الكمية: '+(d.get('quantity')||'-'),'حي التوصيل: '+(d.get('area')||'-'),
'الاسم: '+(d.get('customer')||'-'),'ملاحظات: '+(d.get('notes')||'-')];
window.open('https://wa.me/966537216061?text='+encodeURIComponent(lines.join('\n')),'_blank','noopener,noreferrer')
}));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=String(new Date().getFullYear()));
})();