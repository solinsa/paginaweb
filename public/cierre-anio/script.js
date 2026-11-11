(() => {
  'use strict';

  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'utm_id'];
  const storageKey = 'solinsa_cierre_anio_utm';
  const query = new URLSearchParams(window.location.search);
  const isLocal = ['localhost', '127.0.0.1', '::1', '[::1]'].includes(window.location.hostname);
  let attribution = {};

  // New campaign visits replace the previous campaign in this tab.
  // Storage can be unavailable in private mode; the current URL still works.
  try {
    attribution = JSON.parse(sessionStorage.getItem(storageKey) || '{}');
    if (!attribution || typeof attribution !== 'object' || Array.isArray(attribution)) attribution = {};
  } catch {
    attribution = {};
  }
  if (utmKeys.some(key => query.has(key))) {
    attribution = {};
    utmKeys.forEach(key => {
      if (query.get(key)) attribution[key] = query.get(key).slice(0, 100);
    });
    try {
      sessionStorage.setItem(storageKey, JSON.stringify(attribution));
    } catch { /* Attribution remains available for the current page. */ }
  }
  attribution = Object.fromEntries(utmKeys
    .filter(key => typeof attribution[key] === 'string')
    .map(key => [key, attribution[key].slice(0, 100)]));

  // Leave empty until Solinsa has a GA4 web stream. Never load GA4 in preview.
  const measurementId = document.querySelector('meta[name="ga4-measurement-id"]')?.content.trim();
  window.dataLayer = window.dataLayer || [];
  if (!isLocal && /^G-[A-Z0-9]+$/.test(measurementId || '') && typeof window.gtag !== 'function') {
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      page_location: window.location.href,
      ...Object.fromEntries(Object.entries(attribution).map(([key, value]) => [key.replace('utm_', 'campaign_'), value])),
    });
    const tag = document.createElement('script');
    tag.async = true;
    tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(measurementId);
    document.head.appendChild(tag);
  }

  // Build only the checklist CTA from the currently selected equipment details.
  const equipmentCard = document.querySelector('.equipment-checklist');
  if (equipmentCard) {
    const boxes = [...equipmentCard.querySelectorAll('input[type="checkbox"]')];
    const link = equipmentCard.querySelector('[data-equipment-wa]');
    const status = equipmentCard.querySelector('.equipment-status');
    const introduction = link.dataset.wa.trim();
    const updateEquipmentMessage = () => {
      const selected = boxes.filter(box => box.checked).map(box => box.value);
      const details = selected.length ? '\n\nDetalles de mi equipo:\n' + selected.map(value => '- ' + value).join('\n') : '';
      const message = introduction + details;
      link.dataset.wa = message;
      link.href = 'https://wa.me/522201432743?text=' + encodeURIComponent(message);
      status.textContent = selected.length === 0 ? 'Sin detalles seleccionados' : selected.length + (selected.length === 1 ? ' detalle seleccionado' : ' detalles seleccionados');
    };
    boxes.forEach(box => box.addEventListener('change', updateEquipmentMessage));
    window.addEventListener('pageshow', updateEquipmentMessage);
    updateEquipmentMessage();
  }

  document.querySelectorAll('[data-wa]').forEach(link => {
    link.href = 'https://wa.me/522201432743?text=' + encodeURIComponent(link.dataset.wa);
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.addEventListener('click', () => {
      const parameters = {
        button_id: link.dataset.buttonId,
        cta_code: link.dataset.ctaCode,
        link_url: link.href,
        ...attribution,
      };
      // Compatible with an existing Google tag OR a future GTM custom-event trigger.
      // Without either integration this is a browser-only queue, not collected analytics.
      if (!isLocal && typeof window.gtag === 'function') {
        window.gtag('event', 'whatsapp_click', { ...parameters, transport_type: 'beacon' });
      } else {
        window.dataLayer.push({ event: 'whatsapp_click', ...parameters });
      }
    });
  });

  // Keep campaign attribution when following links to the main Solinsa site.
  // Fragment navigation retains the original URL query without modification.
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!/^https?:/.test(href)) return;
    const destination = new URL(href);
    if (!['solinsa.mx', 'www.solinsa.mx'].includes(destination.hostname)) return;
    Object.entries(attribution).forEach(([key, value]) => {
      if (!destination.searchParams.has(key)) destination.searchParams.set(key, value);
    });
    link.href = destination.href;
  });

})();

(() => {
  const carousel = document.querySelector('.hero-carousel');
  if (!carousel) return;
  const slides = [...carousel.querySelectorAll('.carousel-slide')];
  const dots = [...carousel.querySelectorAll('[data-slide]')];
  const title = carousel.querySelector('#carousel-title');
  const count = carousel.querySelector('.carousel-count');
  const stage = carousel.querySelector('.carousel-stage');
  const dialog = document.querySelector('.image-dialog');
  let index = 0;

  function show(next) {
    index = (next + slides.length) % slides.length;
    slides.forEach((slide, i) => { slide.hidden = i !== index; });
    const equipment = slides[index].querySelector('.equipment-image image');
    if (equipment && !equipment.hasAttribute('href')) equipment.setAttribute('href', equipment.dataset.src);
    carousel.querySelector('.carousel-reading-hint').hidden = !slides[index].classList.contains('product-slide');
    dots.forEach((dot, i) => dot.setAttribute('aria-pressed', String(i === index)));
    title.textContent = slides[index].dataset.title;
    carousel.querySelector('.carousel-expand').textContent = slides[index].classList.contains('product-slide') ? 'Ver ficha completa ↗' : 'Ampliar imagen ↗';
    count.textContent = `${String(index + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
  }
  carousel.querySelectorAll('[data-direction]').forEach(button => {
    button.addEventListener('click', () => show(index + Number(button.dataset.direction)));
  });
  dots.forEach(dot => dot.addEventListener('click', () => show(Number(dot.dataset.slide))));
  carousel.addEventListener('keydown', event => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    show(index + (event.key === 'ArrowRight' ? 1 : -1));
  });
  let pointerStart = null;
  stage.addEventListener('pointerdown', event => {
    if (event.target.closest('button') || !event.isPrimary) return;
    pointerStart = { x: event.clientX, y: event.clientY };
  });
  stage.addEventListener('pointerup', event => {
    if (!pointerStart) return;
    const dx = event.clientX - pointerStart.x;
    const dy = event.clientY - pointerStart.y;
    pointerStart = null;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.5) show(index + (dx < 0 ? 1 : -1));
  });
  stage.addEventListener('pointercancel', () => { pointerStart = null; });
  stage.addEventListener('pointerleave', () => { pointerStart = null; });
  carousel.querySelector('.carousel-expand').addEventListener('click', () => {
    const source = slides[index].querySelector('.slide-source') || slides[index].querySelector('img');
    const image = dialog.querySelector('.expanded-image');
    image.src = source.src;
    image.alt = source.alt;
    dialog.querySelector('#expanded-title').textContent = slides[index].dataset.title;
    dialog.showModal();
  });
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  // Manual navigation lets visitors read each application at their own pace.
  show(0);
})();
