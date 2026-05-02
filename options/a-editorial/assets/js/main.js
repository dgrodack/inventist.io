/* Editorial Atlas — minimal motion + niceties */
(function () {
  'use strict';

  // Reveal on scroll
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  // Live "today" date in mast strip if present
  var today = document.querySelectorAll('[data-today]');
  if (today.length) {
    var d = new Date();
    var fmt = d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
    today.forEach(function (n) { n.textContent = fmt; });
  }

  // Issue / volume number from year
  var vol = document.querySelectorAll('[data-vol]');
  if (vol.length) {
    var y = new Date().getFullYear();
    vol.forEach(function (n) { n.textContent = (y - 2023).toString().padStart(2, '0'); });
  }
})();
