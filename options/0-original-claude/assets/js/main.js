// Inventist — minimal site script
// 1) Year stamp in footer
// 2) Logo picker: swap header mark + remember choice across pages

(function () {
  'use strict';

  // Footer year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Logo picker
  var STORAGE_KEY = 'inventist:logo';
  var DEFAULT_LOGO = '01-compass-star';
  var LOGO_NAMES = {
    '01-compass-star': 'Compass Star',
    '02-spark':        'Spark',
    '03-stack':        'App Stack',
    '04-monogram':     'iN Monogram',
    '05-aperture':     'Aperture'
  };

  function logoPath(slug) {
    // Resolve relative to site root regardless of current page depth
    var path = window.location.pathname;
    var depth = (path.match(/\//g) || []).length - 1;
    if (path.endsWith('/')) depth -= 1;
    var prefix = depth > 0 ? '../'.repeat(depth) : '';
    return prefix + 'assets/img/logos/' + slug + '.svg';
  }

  function applyHeaderMark(slug) {
    var holder = document.querySelector('[data-brand-mark]');
    if (!holder) return;
    fetch(logoPath(slug)).then(function (r) { return r.text(); }).then(function (svg) {
      // Strip XML decl + ensure currentColor inheritance
      holder.innerHTML = svg
        .replace(/<\?xml[^?]*\?>/, '')
        .replace(/<!--[\s\S]*?-->/g, '');
      var s = holder.querySelector('svg');
      if (s) {
        s.setAttribute('width', '28');
        s.setAttribute('height', '28');
        s.setAttribute('aria-hidden', 'true');
      }
    }).catch(function () { /* leave existing default */ });
  }

  function setSelected(slug) {
    var grid = document.getElementById('logoGrid');
    if (!grid) return;
    var cards = grid.querySelectorAll('.logo-card');
    cards.forEach(function (c) {
      var on = c.getAttribute('data-logo') === slug;
      c.classList.toggle('is-selected', on);
      c.setAttribute('aria-checked', on ? 'true' : 'false');
    });
  }

  var stored = null;
  try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) {}
  var current = stored && LOGO_NAMES[stored] ? stored : DEFAULT_LOGO;

  applyHeaderMark(current);
  setSelected(current);

  var grid = document.getElementById('logoGrid');
  if (grid) {
    grid.addEventListener('click', function (e) {
      var btn = e.target.closest('.logo-card');
      if (!btn) return;
      var slug = btn.getAttribute('data-logo');
      if (!slug || !LOGO_NAMES[slug]) return;
      try { localStorage.setItem(STORAGE_KEY, slug); } catch (err) {}
      applyHeaderMark(slug);
      setSelected(slug);
    });
  }
})();
