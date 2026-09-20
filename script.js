(function(){'use strict';
const nav=document.getElementById('nav'), toggle=document.getElementById('menuToggle');
if(toggle){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open);});}
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle&&toggle.setAttribute('aria-expanded','false');}));
const sections=[...document.querySelectorAll('section[id]')], links=[...nav.querySelectorAll('a')];
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id));}}),{rootMargin:'-45% 0px -50% 0px'}); sections.forEach(s=>observer.observe(s));
const top=document.getElementById('toTop');window.addEventListener('scroll',()=>top.classList.toggle('show',scrollY>600),{passive:true});top.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
document.querySelectorAll('[data-placeholder]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();alert('Add your '+a.dataset.placeholder+' profile URL to activate this link.');}));
})();
