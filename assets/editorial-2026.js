(() => {
'use strict';
const menu=document.querySelector('[data-menu]'),nav=document.querySelector('.mobile-drawer');
if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');menu.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('is-open');menu.setAttribute('aria-expanded','false')}));document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('is-open');menu.setAttribute('aria-expanded','false')}});}

const langLink=document.querySelector('.mast-actions .lang');
if(langLink){
 const segments=location.pathname.split('/').filter(Boolean);
 let page=segments[segments.length-1]||'index.html';
 if(!page.endsWith('.html'))page='index.html';
 const english=document.documentElement.lang==='en';
 const target=english?'../'+page:'en/'+page;
 langLink.setAttribute('href',target);
}
document.querySelectorAll('.mast-nav a').forEach(link=>{
 const last=location.pathname.split('/').pop()||'index.html';
 if(link.getAttribute('href')===last)link.setAttribute('aria-current','page');
});

document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());
document.querySelectorAll('.gallery-item[onclick]').forEach(x=>{x.tabIndex=0;x.setAttribute('role','button');x.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();x.click()}});});
})();
