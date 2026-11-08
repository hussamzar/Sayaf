(() => {
'use strict';
const menu=document.querySelector('[data-menu]'),nav=document.querySelector('.mobile-drawer');
if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');menu.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('is-open');menu.setAttribute('aria-expanded','false')}));document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('is-open');menu.setAttribute('aria-expanded','false')}});}
document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());
document.querySelectorAll('.gallery-item[onclick]').forEach(x=>{x.tabIndex=0;x.setAttribute('role','button');x.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();x.click()}});});
})();
