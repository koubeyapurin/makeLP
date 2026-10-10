(function () {
  var btn = document.querySelector('.menu');
  var nav = document.getElementById('gnav');
  if (btn && nav) {
    var set = function (open) {
      nav.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
    };
    btn.addEventListener('click', function () { set(!nav.classList.contains('open')); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) set(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
  }

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('js');
  var els = document.querySelectorAll('.sec .h2, .sec .lead, .define, .stat, .q, .voice-empty, .fig, .tbl-wrap, .defbox, .pts li, .flow li, .hands li, .layers li, .scenes li, .phases li, .risks li, .srcs, .ecard');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(function (el, i) {
    el.classList.add('rv');
    el.style.transitionDelay = (i % 3) * 80 + 'ms';
    io.observe(el);
  });
})();
