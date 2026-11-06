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

  const boxes = [...document.querySelectorAll('.checklist input[type="checkbox"]')];
  const progress = document.querySelector('.progress');
  const updateProgress = () => {
    if (progress) progress.textContent = `${boxes.filter(box => box.checked).length} de ${boxes.length} datos preparados`;
  };
  boxes.forEach(box => box.addEventListener('change', updateProgress));
  updateProgress();
})();
