// Offline-friendly UI behavior: no trackers, cookies, external requests or dependencies.
(()=>{
 const menu=document.getElementById('mobileMenu');const links=document.getElementById('topLinks');
 if(menu&&links){menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu.setAttribute('aria-expanded','false');}));}
 const dlg=document.getElementById('referenceDialog');const img=document.getElementById('referenceLarge');
 document.querySelectorAll('[data-image]').forEach(button=>button.addEventListener('click',()=>{if(dlg&&img){img.src=button.dataset.image;img.alt=button.dataset.alt||'Візуальний зразок';if(typeof dlg.showModal==='function')dlg.showModal();else window.open(img.src,'_blank');}}));
 if(dlg){dlg.querySelectorAll('[data-close-dialog]').forEach(btn=>btn.addEventListener('click',()=>dlg.close()));dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close();});}
 document.querySelectorAll('video').forEach(v=>v.addEventListener('play',()=>document.querySelectorAll('video').forEach(other=>{if(v!==other)other.pause();})));
})();
