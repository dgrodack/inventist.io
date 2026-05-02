/* Tactile Workshop — Inventist
 * Minimal JS. The site works without it.
 * Only enhancement: smooth-close on FAQ details siblings.
 */
(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    // Optional: when one FAQ opens, gently close the others (only if close to it).
    var faq = document.querySelector('.faq');
    if (faq) {
      var items = faq.querySelectorAll('details');
      items.forEach(function (d) {
        d.addEventListener('toggle', function () {
          if (d.open) {
            items.forEach(function (other) {
              if (other !== d && other.open) other.open = false;
            });
          }
        });
      });
    }
  });
})();
