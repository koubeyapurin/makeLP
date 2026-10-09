(function () {
  var root = document.documentElement;
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('gnav');
  if (toggle && nav) {
    var setOpen = function (open) {
      nav.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
    };
    toggle.addEventListener('click', function () { setOpen(!nav.classList.contains('open')); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
  }

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var targets = document.querySelectorAll('.sec-head, .card, .num-grid li, .point, .pillars li, .risks li, .phases li, .diagram, .why-now, .sources, .callout, .cmp, .statement');
  if (reduce || !('IntersectionObserver' in window)) return;
  root.classList.add('js');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  targets.forEach(function (el) { el.classList.add('reveal'); io.observe(el); });
})();
