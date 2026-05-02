/* Quiet Studio — minimal JS.
 * Single behavior: in the FAQ list, opening one entry collapses the others.
 * Everything else uses native HTML.
 */
(function () {
  const faqs = document.querySelectorAll('.faq');
  faqs.forEach((faq) => {
    const items = faq.querySelectorAll('details');
    items.forEach((d) => {
      d.addEventListener('toggle', () => {
        if (d.open) {
          items.forEach((other) => {
            if (other !== d && other.open) other.open = false;
          });
        }
      });
    });
  });
})();
