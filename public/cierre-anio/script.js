document.querySelectorAll('[data-wa]').forEach(a=>{a.href='https://wa.me/522201432743?text='+encodeURIComponent(a.dataset.wa);a.target='_blank';a.rel='noopener';});
const boxes=[...document.querySelectorAll('.checklist input')];boxes.forEach(box=>box.addEventListener('change',()=>{document.querySelector('.progress').textContent=boxes.filter(x=>x.checked).length+' de 5 datos preparados';}));
