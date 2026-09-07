(function () {
  'use strict';

  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector('.nav__toggle');
  var links = document.querySelector('.nav__links');
  var scrim = document.querySelector('.nav-scrim');

  function closeNav() {
    if (!links) return;
    links.setAttribute('data-open', 'false');
    if (scrim) scrim.setAttribute('data-open', 'false');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
    document.body.removeAttribute('data-nav-open');
  }

  function openNav() {
    if (!links) return;
    links.setAttribute('data-open', 'true');
    if (scrim) scrim.setAttribute('data-open', 'true');
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
    document.body.setAttribute('data-nav-open', 'true');
  }

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.getAttribute('data-open') === 'true';
      if (isOpen) {
        closeNav();
      } else {
        openNav();
      }
    });

    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeNav);
    });

    if (scrim) {
      scrim.addEventListener('click', closeNav);
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeNav();
    });
  }

  /* ---- Scroll reveal ---- */
  var revealEls = document.querySelectorAll('[data-reveal]');
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (revealEls.length) {
    if (prefersReduced || !('IntersectionObserver' in window)) {
      revealEls.forEach(function (el) {
        el.classList.add('is-visible');
      });
    } else {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      );

      revealEls.forEach(function (el) {
        observer.observe(el);
      });
    }
  }

  /* ---- Lightbox ---- */
  var lightboxTargets = document.querySelectorAll(
    '.hero__portrait img, .edu-card__media img, .timeline-card__gallery img, .pillar-gallery__media img, .feature-project__media img'
  );

  if (lightboxTargets.length) {
    var lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.setAttribute('data-open', 'false');
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-hidden', 'true');
    lightbox.innerHTML =
      '<button type="button" class="lightbox__close" aria-label="Close image">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg>' +
      '</button>' +
      '<img class="lightbox__img" src="" alt="">' +
      '<p class="lightbox__caption"></p>';
    document.body.appendChild(lightbox);

    var lightboxImg = lightbox.querySelector('.lightbox__img');
    var lightboxCaption = lightbox.querySelector('.lightbox__caption');
    var lightboxClose = lightbox.querySelector('.lightbox__close');
    var lastFocused = null;

    function openLightbox(img) {
      lastFocused = document.activeElement;
      lightboxImg.src = img.currentSrc || img.src;
      lightboxImg.alt = img.alt || '';
      lightboxCaption.textContent = img.alt || '';
      lightbox.setAttribute('data-open', 'true');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.setAttribute('data-lightbox-open', 'true');
      lightboxClose.focus();
    }

    function closeLightbox() {
      lightbox.setAttribute('data-open', 'false');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.removeAttribute('data-lightbox-open');
      lightboxImg.src = '';
      if (lastFocused) lastFocused.focus();
    }

    lightboxTargets.forEach(function (img) {
      img.classList.add('lightbox-trigger');
      img.setAttribute('tabindex', '0');
      img.setAttribute('role', 'button');
      img.setAttribute('aria-label', 'Expand image: ' + (img.alt || ''));
      img.addEventListener('click', function () {
        openLightbox(img);
      });
      img.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(img);
        }
      });
    });

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lightbox.getAttribute('data-open') === 'true') {
        closeLightbox();
      }
    });
  }

  /* ---- Footer year ---- */
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
