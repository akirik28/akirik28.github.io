/* ==========================================================================
   AP Çalışma Kiti · soru şekilleri (ortak)   window.APFig.render(fig) → DOM düğümü | null

   Bir sorunun isteğe bağlı  fig  alanı (kit.js ve bluebook.js bunu soru metni ile şıkların arasına koyar):
     { type:"table", head:["Class","Frequency"], rows:[["A",12],["B",8]], caption:"…" }
     { type:"dot",   values:[1,1,2,3,5], label:"Goals scored" }
     { type:"hist",  bins:[{from:0,to:10,n:3},…], label:"Commute (min)", ylabel:"Frequency" }
     { type:"box",   items:[{name:"A",min,q1,med,q3,max,outliers:[99]}], label:"Score" }
     { type:"bar",   cats:["Pizza","Burger"], series:[{name:"Grade 9",values:[40,35]}], ylabel:"Percent" }
     { type:"stem",  stems:[{s:"4",leaves:"0 2 5"}], key:"4|0 = 40 points" }
     { type:"graph", xlabel:"Quantity", ylabel:"Price", xmax:10, ymax:10,          (ekonomi; birimler 0…xmax / 0…ymax)
       lines:[{from:[1,9],to:[9,1],label:"D"},{from:[1,1],to:[9,9],label:"S",dash:true}],
       ppc:[{qmax:8,pmax:8,k:2,label:"PPC"}],  points:[{q:5,p:5,label:"E",guides:true}],
       hlines:[{p:3,label:"$3"}],  xticks:[{v:4,label:"40"}], yticks:[{v:5,label:"$5"}], caption:"…" }
   Bilinmeyen tür ya da bozuk veri → null (sayfa bozulmaz). Renkler sayfanın değişkenlerinden gelir
   (kit.css koyu, bluebook.css açık); değişken yoksa açık varsayılanlar kullanılır.
   ========================================================================== */
(function () {
  "use strict";
  var NS = "http://www.w3.org/2000/svg";
  var W = 440;                       /* SVG koordinat genişliği; dar ekranda render() 340 yapar, böylece telefonda yazı ~12 px kalır */

  /* ---------------- stil (bir kez eklenir) ---------------- */
  var CSS = [
    ".apfig{--fg:var(--ink,#1E1E1E);--fg2:var(--muted,#595959);--grid:var(--line-2,#CFCFCF);--axis:var(--muted,#595959);",
    "--c0:var(--accent,var(--blue,#324DC7));--c1:color-mix(in srgb,var(--fg) 62%,var(--surface,#fff));--c2:#3FB5A0;--c3:#B77AD9;",
    "margin:16px 0 0;padding:10px 12px;border:1px solid var(--line-2,#CFCFCF);border-radius:12px;background:var(--surface,#fff);",
    "color:var(--fg);max-width:100%;min-width:0;box-sizing:border-box;font-weight:400;letter-spacing:0;text-align:left}",
    ".apfig svg{display:block;width:100%;max-width:480px;height:auto;margin:0 auto;overflow:visible;font-family:inherit}",
    ".apfig svg text{fill:currentColor;font-size:13px}",
    ".apfig .af-t2{fill:var(--fg2)}",
    ".apfig .af-ax{stroke:var(--axis);stroke-width:1.4;fill:none}",
    ".apfig .af-gr{stroke:var(--grid);stroke-width:1;fill:none;stroke-dasharray:3 4}",
    ".apfig .af-tk{stroke:var(--axis);stroke-width:1.2}",
    ".apfig .af-lb{font-size:13.5px;font-weight:600}",
    ".apfig .af-c0{fill:var(--c0)}.apfig .af-c1{fill:var(--c1)}.apfig .af-c2{fill:var(--c2)}.apfig .af-c3{fill:var(--c3)}",
    ".apfig .af-bar{stroke:var(--surface,#fff);stroke-width:1}",
    ".apfig .af-hb{fill:var(--c0);fill-opacity:.55;stroke:var(--c0);stroke-width:1.5}",
    ".apfig .af-bx{fill:var(--c0);fill-opacity:.2;stroke:var(--c0);stroke-width:2}",
    ".apfig .af-wk{stroke:var(--c0);stroke-width:2;fill:none}",
    ".apfig .af-md{stroke:var(--fg);stroke-width:3.2}",
    ".apfig .af-ot{fill:none;stroke:var(--c0);stroke-width:2}",
    ".apfig .af-sc{overflow-x:auto;max-width:100%;-webkit-overflow-scrolling:touch}",
    ".apfig table{border-collapse:collapse;margin:0 auto;font-size:14.5px;font-variant-numeric:tabular-nums;max-width:none}",
    ".apfig caption{caption-side:top;text-align:left;font-weight:600;font-size:14px;padding:0 2px 8px;color:var(--fg)}",
    ".apfig th,.apfig td{border:1px solid var(--grid);padding:5px 12px;white-space:nowrap}",
    ".apfig th{font-weight:650;background:color-mix(in srgb,var(--fg) 7%,transparent)}",
    ".apfig .af-r{text-align:right}.apfig .af-l{text-align:left}",
    ".apfig .af-stem{font-family:var(--mono,ui-monospace,Menlo,Consolas,monospace);font-size:15px;line-height:1.55;display:inline-grid;grid-template-columns:auto auto;min-width:0}",
    ".apfig .af-stem span{white-space:pre;padding:0 10px}",
    ".apfig .af-sk{text-align:right;border-right:2px solid var(--axis)}",
    ".figslot .apfig{margin:0 0 20px}",
    ".apfig .af-key{margin:8px 0 0;font-size:13.5px;color:var(--fg2)}"
  ].join("");
  function injectCss() {
    if (document.getElementById("apfig-css")) return;
    var s = document.createElement("style");
    s.id = "apfig-css"; s.textContent = CSS;
    (document.head || document.documentElement).appendChild(s);
  }

  /* ---------------- küçük yardımcılar ---------------- */
  function S(tag, attrs, kids) {
    var n = document.createElementNS(NS, tag), k;
    if (attrs) for (k in attrs) if (attrs[k] != null) n.setAttribute(k, attrs[k]);
    if (kids != null) (Array.isArray(kids) ? kids : [kids]).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  }
  function T(x, y, str, cls, anchor, extra) {
    var t = S("text", { x: x, y: y, "text-anchor": anchor || "middle", "class": cls || null });
    if (extra) for (var k in extra) t.setAttribute(k, extra[k]);
    t.textContent = str;
    return t;
  }
  function H(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function num(v) { return typeof v === "number" && isFinite(v); }
  function clean(v) { return parseFloat(Number(v).toPrecision(12)); }
  function fmt(v) { return String(clean(v)).replace("-", "−"); }
  function nums(a) { return Array.isArray(a) ? a.filter(num) : []; }

  /* "güzel" eksen sayıları: lo ≤ min, hi ≥ max */
  function niceStep(span, target) {
    var raw = span / Math.max(1, target), p = Math.pow(10, Math.floor(Math.log10(raw))), f = raw / p;
    return (f <= 1 ? 1 : f <= 2 ? 2 : f <= 5 ? 5 : 10) * p;
  }
  function ticksFor(min, max, target, forceInt) {
    if (max < min) { var t = min; min = max; max = t; }
    if (max === min) { var c = Math.abs(max) < 1 ? 1 : Math.pow(10, Math.floor(Math.log10(Math.abs(max)))); min -= c; max += c; }
    var step = niceStep(max - min, target || 6);
    if (forceInt && step < 1) step = 1;
    var lo = Math.floor(clean(min / step)) * step, hi = Math.ceil(clean(max / step)) * step, out = [], v, i;
    for (i = 0; i <= 200; i++) { v = clean(lo + i * step); if (v > hi + step / 1e6) break; out.push(v); }
    return { ticks: out, lo: out[0], hi: out[out.length - 1], step: step };
  }
  function textW(str, px) { return String(str).length * (px || 13) * 0.6; }
  /* etiketler sıkışıyorsa her n.'yi göster */
  function thin(labels, room) {
    var w = 0, i;
    for (i = 0; i < labels.length; i++) w = Math.max(w, textW(labels[i], 13));
    var per = Math.max(1, Math.ceil((w + 8) / (room / Math.max(1, labels.length))));
    return per;
  }
  function wrap(str, max) {
    var words = String(str).split(/\s+/), lines = [], cur = "";
    words.forEach(function (w) {
      if (cur && (cur + " " + w).length > max) { lines.push(cur); cur = w; } else cur = cur ? cur + " " + w : w;
    });
    if (cur) lines.push(cur);
    return lines.slice(0, 3);
  }
  function wrapper(type, svgOrNode, aria) {
    var f = H("figure", "apfig apfig-" + type);
    f.style.margin = "";
    if (aria) { f.setAttribute("role", "img"); f.setAttribute("aria-label", aria); }
    f.appendChild(svgOrNode);
    return f;
  }
  function svgBox(h) { return S("svg", { viewBox: "0 0 " + W + " " + h, "aria-hidden": "true", focusable: "false" }); }

  /* ---------------- yatay sayı doğrusu (dot, box için) ---------------- */
  function axisX(svg, sc, tk, y, label, x0, x1, grid, gridTop) {
    svg.appendChild(S("line", { x1: x0, x2: x1, y1: y, y2: y, "class": "af-ax" }));
    tk.ticks.forEach(function (v) {
      var x = sc(v);
      if (grid) svg.appendChild(S("line", { x1: x, x2: x, y1: gridTop, y2: y, "class": "af-gr" }));
      svg.appendChild(S("line", { x1: x, x2: x, y1: y, y2: y + 5, "class": "af-tk" }));
    });
    var per = thin(tk.ticks.map(fmt), x1 - x0);
    tk.ticks.forEach(function (v, i) { if (i % per === 0) svg.appendChild(T(sc(v), y + 20, fmt(v))); });
    if (label) svg.appendChild(T((x0 + x1) / 2, y + 42, label, "af-lb"));
  }

  /* ---------------- türler ---------------- */
  function rTable(f) {
    var head = Array.isArray(f.head) ? f.head : null, rows = Array.isArray(f.rows) ? f.rows.filter(Array.isArray) : [];
    if (!head && !rows.length) return null;
    var cols = Math.max(head ? head.length : 0, rows.reduce(function (m, r) { return Math.max(m, r.length); }, 0));
    var isNum = [], c;
    for (c = 0; c < cols; c++) {
      isNum[c] = rows.length > 0 && rows.every(function (r) {
        var v = r[c];
        return v == null || v === "" || num(v) || /^[−+\-]?[\d.,]+\s*%?$/.test(String(v).trim());
      });
    }
    var tb = H("table"), cell = function (tag, v, c) {
      var n = H(tag, isNum[c] ? "af-r" : "af-l", v == null ? "" : String(v)); return n;
    };
    if (f.caption) tb.appendChild(H("caption", null, String(f.caption)));
    if (head) { var tr = H("tr"); for (c = 0; c < cols; c++) { var th = cell("th", head[c], c); th.setAttribute("scope", "col"); tr.appendChild(th); } var th2 = H("thead"); th2.appendChild(tr); tb.appendChild(th2); }
    var bd = H("tbody");
    rows.forEach(function (r) { var tr = H("tr"); for (c = 0; c < cols; c++) tr.appendChild(cell("td", r[c], c)); bd.appendChild(tr); });
    tb.appendChild(bd);
    var sc = H("div", "af-sc"); sc.appendChild(tb);
    var fig = H("figure", "apfig apfig-table"); fig.appendChild(sc);
    return fig;
  }

  function rDot(f) {
    var vals = nums(f.values);
    if (!vals.length) return null;
    var mn = Math.min.apply(null, vals), mx = Math.max.apply(null, vals);
    var allInt = vals.every(function (v) { return v === Math.round(v); });
    var tk;
    if (allInt && mx - mn <= 20) { tk = { ticks: [], step: 1 }; for (var v = mn - (mx === mn ? 1 : 0); v <= mx + (mx === mn ? 1 : 0); v++) tk.ticks.push(v); tk.lo = tk.ticks[0]; tk.hi = tk.ticks[tk.ticks.length - 1]; }
    else tk = ticksFor(mn, mx, 6);
    var x0 = 20, x1 = W - 20, sc = function (v) { return x0 + (v - tk.lo) / (tk.hi - tk.lo) * (x1 - x0); };
    var groups = {}, keys = [];
    vals.forEach(function (v) { var k = String(clean(v)); if (!groups[k]) { groups[k] = { v: v, n: 0 }; keys.push(k); } groups[k].n++; });
    var xs = keys.map(function (k) { return groups[k].v; }).sort(function (a, b) { return a - b; }), d = Infinity, i;
    for (i = 1; i < xs.length; i++) d = Math.min(d, sc(xs[i]) - sc(xs[i - 1]));
    var r = Math.max(2.5, Math.min(7, isFinite(d) ? d / 2 - 0.6 : 7)), maxN = 0;
    keys.forEach(function (k) { maxN = Math.max(maxN, groups[k].n); });
    var dy = 2 * r + 1.5, top = 12, plotH = maxN * dy + top;
    if (plotH > 250) { dy = (250 - top) / maxN; plotH = 250; }
    var axisY = plotH + 4, svg = svgBox(axisY + (f.label ? 50 : 28));
    axisX(svg, sc, tk, axisY, f.label, x0, x1, false);
    keys.forEach(function (k) {
      var g = groups[k], j;
      for (j = 0; j < g.n; j++) svg.appendChild(S("circle", { cx: sc(g.v), cy: axisY - 2 - r - j * dy, r: r, "class": "af-c0" }));
    });
    return wrapper("dot", svg, "Dot plot" + (f.label ? " of " + f.label : "") + ": " + vals.slice().sort(function (a, b) { return a - b; }).map(fmt).join(", "));
  }

  function rHist(f) {
    var bins = Array.isArray(f.bins) ? f.bins.filter(function (b) { return b && num(b.from) && num(b.to) && num(b.n); }) : [];
    if (!bins.length) return null;
    bins.sort(function (a, b) { return a.from - b.from; });
    var lo = bins[0].from, hi = bins[bins.length - 1].to, ymax = 0;
    bins.forEach(function (b) { ymax = Math.max(ymax, b.n); });
    var yt = ticksFor(0, Math.max(ymax, 1), 5, true);
    yt.ticks = yt.ticks.filter(function (v) { return v === Math.round(v); });
    var L = f.ylabel ? 52 : 36, R = 14, x0 = L, x1 = W - R, y0 = 12, y1 = 190;
    var sx = function (v) { return x0 + (v - lo) / (hi - lo || 1) * (x1 - x0); }, sy = function (v) { return y1 - (v - yt.lo) / (yt.hi - yt.lo || 1) * (y1 - y0); };
    var svg = svgBox(y1 + (f.label ? 50 : 28)), i;
    yt.ticks.forEach(function (v) {
      svg.appendChild(S("line", { x1: x0, x2: x1, y1: sy(v), y2: sy(v), "class": "af-gr" }));
      svg.appendChild(T(x0 - 7, sy(v) + 4.5, fmt(v), null, "end"));
    });
    bins.forEach(function (b) {
      var h = sy(0) - sy(b.n);
      svg.appendChild(S("rect", { x: sx(b.from), y: sy(b.n), width: Math.max(0, sx(b.to) - sx(b.from)), height: Math.max(0, h), "class": "af-hb" }));
    });
    svg.appendChild(S("line", { x1: x0, x2: x0, y1: y0, y2: y1, "class": "af-ax" }));
    svg.appendChild(S("line", { x1: x0, x2: x1, y1: y1, y2: y1, "class": "af-ax" }));
    var edges = [bins[0].from]; bins.forEach(function (b) { edges.push(b.to); });
    var per = thin(edges.map(fmt), x1 - x0);
    edges.forEach(function (e, k) {
      svg.appendChild(S("line", { x1: sx(e), x2: sx(e), y1: y1, y2: y1 + 5, "class": "af-tk" }));
      if (k % per === 0 || k === edges.length - 1 && per === 1) svg.appendChild(T(sx(e), y1 + 20, fmt(e)));
    });
    if (f.label) svg.appendChild(T((x0 + x1) / 2, y1 + 42, f.label, "af-lb"));
    if (f.ylabel) svg.appendChild(T(0, 0, f.ylabel, "af-lb", "middle", { transform: "translate(13 " + (y0 + y1) / 2 + ") rotate(-90)" }));
    return wrapper("hist", svg, "Histogram" + (f.label ? " of " + f.label : "") + ": " + bins.map(function (b) { return fmt(b.from) + "–" + fmt(b.to) + ": " + fmt(b.n); }).join("; "));
  }

  function rBox(f) {
    var items = Array.isArray(f.items) ? f.items.filter(function (b) { return b && num(b.min) && num(b.q1) && num(b.med) && num(b.q3) && num(b.max); }) : [];
    if (!items.length) return null;
    var mn = Infinity, mx = -Infinity;
    items.forEach(function (b) { nums(b.outliers).concat([b.min, b.max]).forEach(function (v) { mn = Math.min(mn, v); mx = Math.max(mx, v); }); });
    var tk = ticksFor(mn, mx, 7);
    var named = items.some(function (b) { return b.name; }), nameW = 0;
    items.forEach(function (b) { if (b.name) nameW = Math.max(nameW, textW(b.name, 13.5)); });
    var x0 = named ? Math.min(W * 0.34, Math.max(54, nameW + 20)) : 20, x1 = W - 22, nch = Math.max(5, Math.floor((x0 - 16) / 7.4));
    var sc = function (v) { return x0 + (v - tk.lo) / (tk.hi - tk.lo) * (x1 - x0); };
    var rowH = 52, top = 8, axisY = top + items.length * rowH + 2, svg = svgBox(axisY + (f.label ? 50 : 28));
    axisX(svg, sc, tk, axisY, f.label, x0, x1, true, top);
    items.forEach(function (b, i) {
      var cy = top + i * rowH + rowH / 2 - 2, h = 26;
      if (b.name) {
        var nl = wrap(b.name, nch).slice(0, 2), nt = T(x0 - 12, cy + 4.5 - (nl.length - 1) * 8, "", "af-lb", "end");
        nl.forEach(function (ln, li) { var sp = S("tspan", { x: x0 - 12, dy: li ? 16 : 0 }); sp.textContent = ln; nt.appendChild(sp); });
        svg.appendChild(nt);
      }
      svg.appendChild(S("line", { x1: sc(b.min), x2: sc(b.q1), y1: cy, y2: cy, "class": "af-wk" }));
      svg.appendChild(S("line", { x1: sc(b.q3), x2: sc(b.max), y1: cy, y2: cy, "class": "af-wk" }));
      svg.appendChild(S("line", { x1: sc(b.min), x2: sc(b.min), y1: cy - 8, y2: cy + 8, "class": "af-wk" }));
      svg.appendChild(S("line", { x1: sc(b.max), x2: sc(b.max), y1: cy - 8, y2: cy + 8, "class": "af-wk" }));
      svg.appendChild(S("rect", { x: sc(b.q1), y: cy - h / 2, width: Math.max(1, sc(b.q3) - sc(b.q1)), height: h, "class": "af-bx" }));
      svg.appendChild(S("line", { x1: sc(b.med), x2: sc(b.med), y1: cy - h / 2, y2: cy + h / 2, "class": "af-md" }));
      nums(b.outliers).forEach(function (o) { svg.appendChild(S("circle", { cx: sc(o), cy: cy, r: 3.6, "class": "af-ot" })); });
    });
    return wrapper("box", svg, "Boxplot" + (items.length > 1 ? "s" : "") + (f.label ? " of " + f.label : "") + ": " + items.map(function (b) {
      return (b.name ? b.name + " " : "") + "min " + fmt(b.min) + ", Q1 " + fmt(b.q1) + ", median " + fmt(b.med) + ", Q3 " + fmt(b.q3) + ", max " + fmt(b.max) + (nums(b.outliers).length ? ", outliers " + nums(b.outliers).map(fmt).join(", ") : "");
    }).join("; "));
  }

  function rBar(f) {
    var cats = Array.isArray(f.cats) ? f.cats.map(String) : [];
    var series = Array.isArray(f.series) ? f.series.filter(function (s) { return s && Array.isArray(s.values); }) : [];
    if (!cats.length || !series.length) return null;
    var mn = 0, mx = 0;
    series.forEach(function (s) { nums(s.values).forEach(function (v) { mn = Math.min(mn, v); mx = Math.max(mx, v); }); });
    var yt = ticksFor(mn, mx || 1, 5);
    var L = f.ylabel ? 56 : 40, x0 = L, x1 = W - 12, band = (x1 - x0) / cats.length;
    var multi = series.length > 1, legH = multi ? 26 : 0, y0 = 10 + legH, y1 = y0 + 170;
    var maxChars = Math.max(5, Math.floor(band / 6.6)), lines = cats.map(function (c) { return wrap(c, maxChars); });
    var nl = lines.reduce(function (m, l) { return Math.max(m, l.length); }, 1);
    var svg = svgBox(y1 + 14 + nl * 15 + 8);
    var sy = function (v) { return y1 - (v - yt.lo) / (yt.hi - yt.lo || 1) * (y1 - y0); };
    if (multi) {
      var lx = x0;
      series.forEach(function (s, i) {
        svg.appendChild(S("rect", { x: lx, y: 3, width: 12, height: 12, rx: 2, "class": "af-c" + (i % 4) }));
        svg.appendChild(T(lx + 17, 14, s.name || "", null, "start"));
        lx += 17 + textW(s.name || "", 13) + 18;
      });
    }
    yt.ticks.forEach(function (v) {
      svg.appendChild(S("line", { x1: x0, x2: x1, y1: sy(v), y2: sy(v), "class": "af-gr" }));
      svg.appendChild(T(x0 - 7, sy(v) + 4.5, fmt(v), null, "end"));
    });
    var gap = Math.min(18, band * 0.22), inner = band - gap, bw = inner / series.length;
    cats.forEach(function (c, ci) {
      var bx = x0 + ci * band + gap / 2;
      series.forEach(function (s, si) {
        var v = s.values[ci];
        if (!num(v)) return;
        var yv = sy(v), y0v = sy(0);
        svg.appendChild(S("rect", { x: bx + si * bw, y: Math.min(yv, y0v), width: Math.max(1, bw - (multi ? 1.5 : 0)), height: Math.abs(y0v - yv), "class": "af-bar af-c" + (si % 4) }));
      });
      var t = T(x0 + ci * band + band / 2, y1 + 18, "", null, "middle");
      lines[ci].forEach(function (ln, li) { var sp = S("tspan", { x: x0 + ci * band + band / 2, dy: li ? 15 : 0 }); sp.textContent = ln; t.appendChild(sp); });
      svg.appendChild(t);
    });
    svg.appendChild(S("line", { x1: x0, x2: x0, y1: y0, y2: y1, "class": "af-ax" }));
    svg.appendChild(S("line", { x1: x0, x2: x1, y1: sy(0), y2: sy(0), "class": "af-ax" }));
    if (f.ylabel) svg.appendChild(T(0, 0, f.ylabel, "af-lb", "middle", { transform: "translate(13 " + (y0 + y1) / 2 + ") rotate(-90)" }));
    return wrapper("bar", svg, "Bar chart" + (f.ylabel ? " of " + f.ylabel : "") + ": " + series.map(function (s) {
      return (s.name ? s.name + ": " : "") + cats.map(function (c, i) { return c + " " + (num(s.values[i]) ? fmt(s.values[i]) : "n/a"); }).join(", ");
    }).join("; "));
  }

  function rStem(f) {
    var st = Array.isArray(f.stems) ? f.stems.filter(function (s) { return s && s.s != null; }) : [];
    if (!st.length) return null;
    var g = H("div", "af-stem");
    st.forEach(function (s) {
      g.appendChild(H("span", "af-sk", String(s.s)));
      g.appendChild(H("span", "af-lv", String(s.leaves == null ? "" : s.leaves)));
    });
    var sc = H("div", "af-sc"); sc.appendChild(g);
    var fig = H("figure", "apfig apfig-stem");
    fig.setAttribute("role", "img");
    fig.setAttribute("aria-label", "Stem-and-leaf plot: " + st.map(function (s) { return s.s + " | " + s.leaves; }).join("; ") + (f.key ? ". Key: " + f.key : ""));
    fig.appendChild(sc);
    if (f.key) fig.appendChild(H("p", "af-key", "Key: " + f.key));
    return fig;
  }

  /* ekonomi grafiği: arz–talep doğruları, PPC, noktalar, fiyat çizgileri (birimler 0…xmax / 0…ymax) */
  function rGraph(f) {
    var xmax = num(f.xmax) && f.xmax > 0 ? f.xmax : 10, ymax = num(f.ymax) && f.ymax > 0 ? f.ymax : 10;
    var h = 300, L = 52, R = 30, TOP = 26, B = 44, gw = W - L - R, gh = h - TOP - B;
    var X = function (q) { return L + (q / xmax) * gw; }, Y = function (p) { return TOP + gh - (p / ymax) * gh; };
    var svg = svgBox(h), cls = ["af-c0", "af-c1", "af-c2", "af-c3"], aria = [];
    var strokeOf = function (i) { return ["var(--c0)", "var(--c1)", "var(--c2)", "var(--c3)"][((i | 0) % 4 + 4) % 4]; };
    /* eksenler + oklar */
    svg.appendChild(S("path", { d: "M" + L + " " + (TOP - 8) + " L" + L + " " + (TOP + gh) + " L" + (L + gw + 10) + " " + (TOP + gh), "class": "af-ax" }));
    svg.appendChild(S("path", { d: "M" + (L - 4) + " " + (TOP - 2) + " L" + L + " " + (TOP - 10) + " L" + (L + 4) + " " + (TOP - 2) + "Z", fill: "var(--axis)" }));
    svg.appendChild(S("path", { d: "M" + (L + gw + 4) + " " + (TOP + gh - 4) + " L" + (L + gw + 12) + " " + (TOP + gh) + " L" + (L + gw + 4) + " " + (TOP + gh + 4) + "Z", fill: "var(--axis)" }));
    if (f.ylabel) svg.appendChild(T(L + 6, TOP - 10, f.ylabel, "af-lb", "start"));
    if (f.xlabel) svg.appendChild(T(L + gw + 10, TOP + gh + 34, f.xlabel, "af-lb", "end"));
    (Array.isArray(f.xticks) ? f.xticks : []).forEach(function (t) {
      if (!t || !num(t.v)) return;
      svg.appendChild(S("line", { x1: X(t.v), y1: TOP + gh - 4, x2: X(t.v), y2: TOP + gh + 4, "class": "af-tk" }));
      svg.appendChild(T(X(t.v), TOP + gh + 18, t.label != null ? String(t.label) : fmt(t.v), "af-t2"));
    });
    (Array.isArray(f.yticks) ? f.yticks : []).forEach(function (t) {
      if (!t || !num(t.v)) return;
      svg.appendChild(S("line", { x1: L - 4, y1: Y(t.v), x2: L + 4, y2: Y(t.v), "class": "af-tk" }));
      svg.appendChild(T(L - 8, Y(t.v) + 4, t.label != null ? String(t.label) : fmt(t.v), "af-t2", "end"));
    });
    /* PPC eğrileri */
    (Array.isArray(f.ppc) ? f.ppc : []).forEach(function (c, i) {
      if (!c || !num(c.qmax) || !num(c.pmax)) return;
      var k = num(c.k) && c.k > 0 ? c.k : 2, d = "", n = 40, j, q, p;
      for (j = 0; j <= n; j++) { q = c.qmax * j / n; p = c.pmax * Math.pow(Math.max(0, 1 - Math.pow(q / c.qmax, k)), 1 / k); d += (j ? " L" : "M") + X(q).toFixed(1) + " " + Y(p).toFixed(1); }
      svg.appendChild(S("path", { d: d, fill: "none", stroke: strokeOf(c.color != null ? c.color : i), "stroke-width": 2.6, "stroke-dasharray": c.dash ? "6 5" : null }));
      if (c.label) svg.appendChild(T(X(c.qmax * 0.72) + 8, Y(c.pmax * Math.pow(1 - Math.pow(0.72, k), 1 / k)) - 8, c.label, "af-lb", "start"));
      aria.push((c.label || "PPC") + " from " + fmt(c.pmax) + " to " + fmt(c.qmax));
    });
    /* doğrular (arz / talep) */
    (Array.isArray(f.lines) ? f.lines : []).forEach(function (l, i) {
      if (!l || !Array.isArray(l.from) || !Array.isArray(l.to)) return;
      svg.appendChild(S("line", { x1: X(l.from[0]), y1: Y(l.from[1]), x2: X(l.to[0]), y2: Y(l.to[1]), stroke: strokeOf(l.color != null ? l.color : i), "stroke-width": 2.6, "stroke-linecap": "round", "stroke-dasharray": l.dash ? "6 5" : null }));
      if (l.label) svg.appendChild(T(X(l.to[0]) + 8, Y(l.to[1]) + (l.to[1] < l.from[1] ? 14 : -4), l.label, "af-lb", "start"));
      aria.push((l.label || "line") + " from (" + l.from.join(", ") + ") to (" + l.to.join(", ") + ")");
    });
    /* yatay fiyat çizgileri */
    (Array.isArray(f.hlines) ? f.hlines : []).forEach(function (hl) {
      if (!hl || !num(hl.p)) return;
      svg.appendChild(S("line", { x1: L, y1: Y(hl.p), x2: L + gw * 0.96, y2: Y(hl.p), "class": "af-gr" }));
      if (hl.label) svg.appendChild(T(L + gw * 0.96, Y(hl.p) - 6, hl.label, "af-t2", "end"));
    });
    /* noktalar (+ eksenlere kesikli kılavuz) */
    (Array.isArray(f.points) ? f.points : []).forEach(function (pt) {
      if (!pt || !num(pt.q) || !num(pt.p)) return;
      if (pt.guides) {
        svg.appendChild(S("path", { d: "M" + X(pt.q) + " " + (TOP + gh) + " L" + X(pt.q) + " " + Y(pt.p) + " L" + L + " " + Y(pt.p), "class": "af-gr" }));
      }
      svg.appendChild(S("circle", { cx: X(pt.q), cy: Y(pt.p), r: 5, "class": "af-c0", stroke: "var(--surface,#fff)", "stroke-width": 1.5 }));
      if (pt.label) svg.appendChild(T(X(pt.q) + 9, Y(pt.p) - 8, pt.label, "af-lb", "start"));
      aria.push("point " + (pt.label || "") + " at (" + fmt(pt.q) + ", " + fmt(pt.p) + ")");
    });
    return wrapper("graph", svg, (f.caption ? f.caption + ". " : "") + "Graph with " + (f.xlabel || "x") + " and " + (f.ylabel || "y") + ": " + aria.join("; "));
  }

  var TYPES = { table: rTable, dot: rDot, hist: rHist, box: rBox, bar: rBar, stem: rStem, graph: rGraph };

  window.APFig = {
    render: function (fig) {
      try {
        if (!fig || typeof fig !== "object" || !Object.prototype.hasOwnProperty.call(TYPES, fig.type)) return null;
        injectCss();
        W = (window.innerWidth || 1024) < 560 ? 340 : 440;
        return TYPES[fig.type](fig);
      } catch (e) { return null; }
    }
  };
})();
