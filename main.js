(function () {
  // theme toggle
  var root = document.documentElement;
  document.getElementById('theme').addEventListener('click', function () {
    var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
    draw(offset);
  });

  // oscilloscope: sine carrier with a slow-moving PWM-like square overlay
  var canvas = document.getElementById('scope');
  var ctx = canvas.getContext('2d');
  var offset = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  function size() {
    var r = canvas.getBoundingClientRect();
    canvas.width = r.width * dpr; canvas.height = r.height * dpr;
    draw(offset);
  }

  function draw(t) {
    var w = canvas.width, h = canvas.height;
    var accent = getComputedStyle(root).getPropertyValue('--accent').trim();
    ctx.clearRect(0, 0, w, h);
    ctx.lineWidth = 2 * dpr; ctx.lineJoin = 'round';
    ctx.strokeStyle = accent;
    ctx.beginPath();
    for (var x = 0; x <= w; x += 2) {
      var p = (x / w) * 8 * Math.PI + t;
      var duty = 0.5 + 0.3 * Math.sin(t * 0.4);
      var sq = ((p / (2 * Math.PI)) % 1 + 1) % 1 < duty ? 1 : -1;
      var y = h / 2 - (sq * 0.22 + Math.sin(p * 1.5) * 0.18) * h;
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  function tick() { offset += 0.03; draw(offset); requestAnimationFrame(tick); }

  window.addEventListener('resize', size);
  size();
  if (!reduce) requestAnimationFrame(tick);
})();
