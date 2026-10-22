/* ==========================================================================
   KİTORA NOT DEFTERİ — videodan çalışmak istemeyenler için bölüm bölüm hareketli defter.
   Sayfa: /ap/<ders>/unit-N/defter/            → ünitenin defter listesi
          /ap/<ders>/unit-N/defter/?b=mc101    → mc101 defteri (mc101.js yüklenir)
   Bölüm bilgisi (başlık, renk, sorular) ../kit-data.js'teki window.KIT'ten gelir.
   Defter verisi: window.DEFTER = { slug, amac, bolumler:[ { baslik, kisa, bloklar:[ … ] } ] }
     amac = defterin başındaki "Bu defterde" cümlesi (konu ne, neyi öğreneceksin; 1–2 sade cümle)
     kisa = başlığın altındaki "Kısaca:" satırı (o başlığın tek cümlelik özü, ≤ 14 kelime)

   Metin işaretleri (her metin alanında):  *English term*   ==vurgu==   **kalın**

   Blok türleri (tip):
     not       { metin }                                              düz paragraf
     hikaye    { ikon, baslik?, metin }                               açılış hikâyesi (büyük ikon süzülür)
     kavramlar { kartlar:[{ ikon, terim, tr, tanim, ornek? }] }       çevrilen terim kartları
     ikili     { sol:{baslik,ikon?,maddeler[]}, sag:{…}, oyun?:[{metin, cevap:"sol"|"sag", neden?}] }
     adimlar   { baslik?, adimlar:[{ baslik, metin }] }               kaydırdıkça dolan çizgi
     grafik    { baslik?, xlabel, ylabel, xmax?, ymax?, xticks?, yticks?, ogeler:[…], durumlar:[{ metin, set?, goster?, gizle? }] }
               ögeler: cizgi{id,from:[x,y],to:[x,y],etiket?,renk?,kesik?} · egri{id,noktalar:[[x,y]…]}
                       ppc{id,qmax,pmax,k?} · nokta{id,x,y,etiket?,kilavuz?} · alan{id,noktalar} · ok{id,from,to}
                       yazi{id,x,y,metin}   — her ögede gizli:true ilk durumda gizler; renk 0…3
     sekil     { fig, baslik? }                                       figs.js şekli (tablo, histogram, kutu…)
     tablo     { baslik?, head[], rows[][], vurgu?:satırNo, not? }
     ornek     { baslik, durum, adimlar[], sonuc }                    adım adım çözülen örnek
     formul    { parcalar:[{ t, alt? } | "=" …], aciklama? }
     sayilar   { ogeler:[{ deger, onek?, sonek?, etiket }] }
     harita    { merkez, dallar:[{ baslik, alt? }] }                  zihin haritası
     zaman     { olaylar:[{ tarih, baslik, metin? }] }
     liste     { maddeler:[{ ikon, baslik, metin? }] }
     tuzak     { baslik?, metin, yanlis?, dogru? }                    sınav tuzağı
     ozet      { maddeler[] }                                         işaretlenen özet listesi
     ders      { tarih?, baslik?, bloklar[] }                         derste işlenen ek notlar (sonradan eklenir)
   Kiti olmayan ünitelerde (KIT.kitYok) defter kendi sorularını taşır:
     sorular   [{ q, opts:[4 şık], a: doğru şık 0–3, why, fig? }]      5 soru; "Kendini dene"de çıkar
   Defterin sonunda bölümün "Kendini dene" soruları otomatik gelir; cevaplar kitteki ilerlemeye yazılır.
   ========================================================================== */
(function () {
  "use strict";
  var KIT = window.KIT || { episodes: [] };
  var EPS = KIT.episodes || [];
  if (!KIT.store) KIT.store = "hg-kit:v2:";                 /* kit.js ile aynı varsayılanlar (Human Geography) */
  var COURSE = KIT.course || "Human Geography", UNIT = KIT.unitLabel || "Unit 1";
  var APC = /^AP\b/.test(COURSE) ? COURSE : "AP " + COURSE;
  /* KIT.kitYok: bu ünitenin video kiti yok; liste defter/defter-liste.js'ten gelir, sorular defter dosyasındadır (DEFTER.sorular) */
  var KY = !!KIT.kitYok, HUB = "/ap/defterler/";
  var H = window.HESAP || null;
  var M = window.Motion || null;
  var RM = false;
  try { RM = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}
  var root = document.getElementById("defter");
  if (!root) return;

  /* ---------------- yardımcılar ---------------- */
  function el(tag, attrs, kids) {
    var n = document.createElement(tag), k;
    if (attrs) for (k in attrs) {
      if (attrs[k] == null || attrs[k] === false) continue;
      if (k === "class") n.className = attrs[k];
      else if (k === "html") n.innerHTML = attrs[k];
      else if (k === "text") n.textContent = attrs[k];
      else if (k === "style") n.setAttribute("style", attrs[k]);
      else if (k.slice(0, 2) === "on") n.addEventListener(k.slice(2), attrs[k]);
      else n.setAttribute(k, attrs[k] === true ? "" : attrs[k]);
    }
    add(n, kids);
    return n;
  }
  function add(n, kids) {
    if (kids == null) return n;
    if (!Array.isArray(kids)) kids = [kids];
    kids.forEach(function (c) { if (c == null || c === false) return; n.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return n;
  }
  var NS = "http://www.w3.org/2000/svg";
  function sv(tag, attrs) { var n = document.createElementNS(NS, tag), k; for (k in attrs || {}) if (attrs[k] != null) n.setAttribute(k, attrs[k]); return n; }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  /* *English* · ==vurgu== · **kalın** */
  function md(s) {
    return esc(s)
      .replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>")
      .replace(/==(?!=)(.+?)==/g, '<mark class="hl">$1</mark>')
      .replace(/\*([^*]+)\*/g, '<span class="en" lang="en">$1</span>');
  }
  function T(s) { return { html: md(s) }; }
  /* SVG yazıları düz metin: işaretleri at (*terim*, ==vurgu==, **kalın**) */
  function plain(s) { return String(s == null ? "" : s).replace(/\*\*([^*]+)\*\*/g, "$1").replace(/==(?!=)(.+?)==/g, "$1").replace(/\*([^*]+)\*/g, "$1"); }
  function lg(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } }
  function ls(k, v) { try { window.localStorage.setItem(k, v); } catch (e) {} if (H && H.yaz) H.yaz(k); }
  function hash(s) { var h = 5381, i = s.length; while (i) h = (h * 33) ^ s.charCodeAt(--i); return (h >>> 0).toString(36); }
  function qid(q) { return hash(String(q.q) + "|" + (q.opts || []).join("|")); }
  function anim(node, kf, opt) {
    if (RM || !node) return;
    if (M && M.animate) { try { M.animate(node, kf, opt || { duration: 0.5 }); return; } catch (e) {} }
  }
  function epNo(ep) { return ep.code || String(ep.no); }

  /* ---------------- görünürlük: ekrana girince .in ---------------- */
  var io = null;
  if (!RM && "IntersectionObserver" in window) {
    io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        var n = e.target; io.unobserve(n);
        n.classList.add("in");
        if (n._onIn) n._onIn();
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.08 });
  }
  function watch(n, onIn) {
    n.classList.add("dv"); n._onIn = onIn || null;
    if (io) io.observe(n); else { n.classList.add("in"); if (onIn) setTimeout(onIn, 0); }
    return n;
  }
  function stag(list) { list.forEach(function (n, i) { n.style.setProperty("--i", i); }); return list; }

  /* ---------------- adres ---------------- */
  var qs = {};
  (window.location.search || "").replace(/^\?/, "").split("&").forEach(function (p) { var a = p.split("="); if (a[0]) qs[decodeURIComponent(a[0])] = decodeURIComponent(a[1] || ""); });
  var slug = (qs.b || "").replace(/[^a-z0-9-]/gi, "");
  var idx = -1;
  EPS.forEach(function (e, i) { if (e.slug === slug) idx = i; });

  var acc = H && H.aktif ? H.aktif() : null;
  var guest = !!H && !acc;
  function locked(i) { return guest && i !== 0; }
  function loginUrl() { return "/kitora/giris/?devam=" + encodeURIComponent(window.location.pathname + window.location.search); }
  if (acc && H.engel && H.profil) {
    var eng = H.engel(H.profil());
    if (eng) { try { window.location.replace(eng + "?devam=" + encodeURIComponent(window.location.pathname + window.location.search)); } catch (e) {} return; }
  }

  var LOCK = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 11V8a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>';

  /* ======================= LİSTE GÖRÜNÜMÜ ======================= */
  function readMap() { try { return JSON.parse(lg(KIT.store + (acc ? acc.id : "misafir") + ":defter") || "{}") || {}; } catch (e) { return {}; } }

  function listView() {
    document.title = "Not defterleri · " + COURSE + " · Kitora";
    var read = readMap();
    root.classList.add("d-list-v");
    var hero = el("section", { class: "d-hero" }, [
      el("p", { class: "eyebrow mono", lang: "en", text: APC + " · " + UNIT }),
      el("h1", { class: "d-hand" }, [el("span", { text: "Not defterleri" })]),
      el("p", { class: "lead", text: KY ? "Her konu için tek sayfalık bir defter: hareketli şekiller, kavram kartları, adım adım örnekler ve sınav tuzakları. Her defterin sonunda beş soru var." : "Video izlemeden çalışmak isteyenler için: her bölüm, hareketli şekiller, kavram kartları, adım adım örnekler ve sınav tuzaklarıyla tek sayfalık bir defter. Defterin sonundaki sorular kitteki ilerlemene sayılır." })
    ]);
    var grid = el("div", { class: "d-grid" });
    EPS.forEach(function (ep, i) {
      var lk = locked(i);
      var card = el("a", {
        class: "d-card" + (lk ? " locked" : "") + (read[ep.slug] ? " read" : ""),
        href: lk ? loginUrl() : "?b=" + ep.slug,
        style: "--acc:" + (ep.accent || "var(--accent)")
      }, [
        el("i", { class: "d-card-spine", "aria-hidden": "true" }),
        el("span", { class: "d-card-lbl" }, [
          el("span", { class: "d-card-no", text: "No. " + epNo(ep) }),
          el("span", { class: "d-card-t", text: ep.title }),
          el("span", { class: "d-card-en", lang: "en", text: ep.en || "" })
        ]),
        el("span", { class: "d-card-f", html: lk ? LOCK + " hesapla açılır" : read[ep.slug] ? "✓ okundu" : (ep.terms ? ep.terms.length + " kavram" : "") }),
        el("i", { class: "d-card-band", "aria-hidden": "true" })
      ]);
      grid.appendChild(card);
    });
    add(root, [hero, grid]);
    stag([].slice.call(grid.children)).forEach(function (c) { watch(c); });
    var back = document.getElementById("dBack");
    if (back) { back.href = KY ? HUB : "../"; if (KY) back.lastChild.textContent = " Bütün dersler"; }
  }

  /* ======================= DEFTER GÖRÜNÜMÜ ======================= */
  function lockView(ep) {
    add(root, el("section", { class: "d-lock" }, [
      el("div", { class: "d-lock-i", html: LOCK }),
      el("h1", {}, [el("span", { text: ep.title })]),
      el("p", { class: "lead", text: "Bu defter kilitli. İlk bölümün defteri herkese açık; gerisi hesabınla açılır. Hesap açmak bir dakika sürer, ilerlemen de kaydedilir." }),
      el("a", { class: "btn primary", href: loginUrl(), text: "Giriş yap ya da hesap aç →" })
    ]));
  }

  function notebookView(ep, D) {
    document.title = ep.title + " · Not defteri · Kitora";
    var acc2 = ep.accent || "#7C95FF";
    document.documentElement.style.setProperty("--acc", acc2);
    var back = document.getElementById("dBack");
    if (back) { back.href = KY ? "./" : "../#" + ep.slug; back.lastChild.textContent = KY ? " Ünitenin defterleri" : " Kite dön"; }
    if ((!ep.questions || !ep.questions.length) && Array.isArray(D.sorular)) ep.questions = D.sorular.filter(function (q) { return q && q.q && Array.isArray(q.opts) && typeof q.a === "number"; });

    /* ilerleme çubuğu */
    var prog = el("div", { class: "d-prog", "aria-hidden": "true" }, el("i"));
    document.body.appendChild(prog);

    /* üst: ders satırı, konu başlığı, "Bu defterde" kutusu (konunun ne olduğu + başlıkların listesi) */
    var B0 = D.bolumler || [];
    var list = el("ol", { class: "d-plan" }, B0.map(function (b, i) {
      return el("li", {}, el("a", { href: "#b" + (i + 1) }, [el("span", { html: md(b.baslik) }), b.kisa ? el("small", { html: md(b.kisa) }) : null]));
    }));
    var hero = el("section", { class: "d-hero nb" }, [
      el("p", { class: "d-course" }, [
        el("span", { text: APC + " · " + UNIT.split(" — ")[0] + " · Konu " + epNo(ep) }),
        KY ? null : el("a", { href: "../#" + ep.slug, text: "▶ Videosu" })
      ]),
      el("h1", {}, [el("span", { class: "d-ttl", text: ep.title })]),
      ep.en ? el("p", { class: "d-en", lang: "en", text: ep.en }) : null,
      el("div", { class: "d-about" }, [
        el("p", { class: "d-about-k", text: "Bu defterde" }),
        el("p", { class: "d-about-t", html: md(D.amac || D.ozet || "") }),
        list
      ])
    ]);
    root.appendChild(hero);
    splitTitle(hero.querySelector(".d-ttl"));

    /* yapışkan ince çubuk: hangi başlıktasın */
    var bar = el("div", { class: "d-bar", "aria-hidden": "true" }, [el("span", { class: "n" }), el("span", { class: "t" })]);
    root.appendChild(bar);

    var secs = [], names = [];
    B0.forEach(function (b, i) {
      var id = "b" + (i + 1);
      var sec = el("section", { class: "d-sec", id: id, "aria-labelledby": id + "t" });
      var head = el("header", { class: "d-sec-h" }, [
        el("span", { class: "d-sec-no", text: String(i + 1) }),
        el("div", {}, [
          el("h2", { id: id + "t", html: md(b.baslik) }),
          b.kisa ? el("p", { class: "d-kisa", html: "<b>Kısaca:</b> " + md(b.kisa) }) : null
        ])
      ]);
      sec.appendChild(watch(head));
      (b.bloklar || []).forEach(function (bl) { var n = block(bl); if (n) sec.appendChild(n); });
      root.appendChild(sec);
      secs.push(sec); names.push(b.baslik);
    });

    /* Kendini dene */
    if (ep.questions && ep.questions.length) {
      var qsec = el("section", { class: "d-sec d-quiz", id: "sorular", "aria-labelledby": "sorulart" });
      qsec.appendChild(watch(el("header", { class: "d-sec-h" }, [
        el("span", { class: "d-sec-no mono", text: "✎" }),
        el("h2", { id: "sorulart", text: "Kendini dene" })
      ])));
      qsec.appendChild(watch(el("p", { class: "d-p muted", text: KY ? "Konuyu anladığını beş soruyla dene; cevapların hesabına kaydedilir." : "Bu sorular kitteki sorularla aynı; cevapların ilerlemene sayılır." })));
      quiz(ep, qsec);
      root.appendChild(qsec);
      secs.push(qsec); names.push("Kendini dene");
    }

    /* önceki / sonraki */
    var prev = EPS[idx - 1], next = EPS[idx + 1];
    root.appendChild(el("nav", { class: "d-pn", "aria-label": "Öbür defterler" }, [
      prev ? el("a", { class: "d-pn-b", href: locked(idx - 1) ? loginUrl() : "?b=" + prev.slug }, [el("small", { class: "mono", text: "← " + epNo(prev) }), el("span", { text: prev.title })]) : el("span"),
      el("a", { class: "d-pn-b mid", href: "./" }, [el("small", { class: "mono", text: "Bütün defterler" })]),
      next ? el("a", { class: "d-pn-b r", href: locked(idx + 1) ? loginUrl() : "?b=" + next.slug }, [el("small", { class: "mono", text: epNo(next) + " →" }), el("span", { text: next.title })]) : el("a", { class: "d-pn-b r", href: KY ? HUB : KIT.denemeler ? "../" + KIT.denemeler.url : "../" }, [el("small", { class: "mono", text: "Sırada →" }), el("span", { text: KY ? "Bütün dersler" : KIT.denemeler ? "Denemeler" : "Kite dön" })])
    ]));

    /* kaydırma: ilerleme + çubukta etkin başlık + okundu işareti */
    var markedRead = false, lastCur = -2;
    function onScroll() {
      var h = document.documentElement, max = h.scrollHeight - window.innerHeight;
      var p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 1;
      prog.firstChild.style.transform = "scaleX(" + p + ")";
      var cur = -1;
      secs.forEach(function (s, i) { if (s.getBoundingClientRect().top < window.innerHeight * 0.35) cur = i; });
      bar.classList.toggle("on", cur >= 0);
      if (cur !== lastCur && cur >= 0) {
        lastCur = cur;
        bar.firstChild.textContent = (cur < B0.length ? (cur + 1) + " / " + B0.length : "✎");
        bar.lastChild.innerHTML = md(names[cur]);
      }
      if (!markedRead && p > 0.92) { markedRead = true; markRead(ep); }
      steppers.forEach(function (f) { f(); });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    setTimeout(onScroll, 50);
  }

  function splitTitle(n) {
    if (!n || RM) return;
    var words = n.textContent.split(" ");
    n.textContent = "";
    words.forEach(function (w, i) {
      n.appendChild(el("span", { class: "w", style: "--i:" + i, text: w }));
      if (i < words.length - 1) n.appendChild(document.createTextNode(" "));
    });
  }

  function markRead(ep) {
    var k = KIT.store + (acc ? acc.id : "misafir") + ":defter", m = readMap();
    if (m[ep.slug]) return;
    m[ep.slug] = Date.now();
    if (acc) ls(k, JSON.stringify(m)); else try { window.localStorage.setItem(k, JSON.stringify(m)); } catch (e) {}
  }

  /* ======================= BLOKLAR ======================= */
  var steppers = [];
  var B = {};

  function block(b) {
    if (!b || !B[b.tip]) return null;
    try { return B[b.tip](b); } catch (e) { if (window.console) console.warn("defter bloğu çizilemedi", b.tip, e); return null; }
  }

  B.not = function (b) { return watch(el("p", { class: "d-p", html: md(b.metin) })); };

  B.hikaye = function (b) {
    var lines = String(b.metin || "").split(/(?<=[.!?…])\s+/);
    var txt = el("div", { class: "d-story-t" }, [
      b.baslik ? el("h3", { html: md(b.baslik) }) : null,
      el("p", {}, stag(lines.map(function (l) { return el("span", { class: "ln", html: md(l) + " " }); })))
    ]);
    return watch(el("div", { class: "d-story" }, [el("div", { class: "d-story-i", "aria-hidden": "true", text: b.ikon || "✦" }), txt]));
  };

  B.kavramlar = function (b) {
    var grid = el("div", { class: "d-terms" });
    (b.kartlar || []).forEach(function (k, i) {
      var card = el("button", { class: "d-term", type: "button", "aria-pressed": "false", style: "--i:" + i }, [
        el("span", { class: "d-term-in" }, [
          el("span", { class: "d-term-f" }, [
            el("span", { class: "d-term-ic", "aria-hidden": "true", text: k.ikon || "◆" }),
            el("span", { class: "d-term-en", lang: "en", text: k.terim }),
            el("span", { class: "d-term-tr", text: k.tr || "" }),
            el("span", { class: "d-term-hint mono", text: "çevir ↻" })
          ]),
          el("span", { class: "d-term-b" }, [
            el("span", { class: "d-term-def", html: md(k.tanim) }),
            k.ornek ? el("span", { class: "d-term-ex", html: "<b>Örnek:</b> " + md(k.ornek) }) : null
          ])
        ])
      ]);
      card.addEventListener("click", function () {
        var on = card.classList.toggle("flip");
        card.setAttribute("aria-pressed", on ? "true" : "false");
      });
      grid.appendChild(card);
    });
    var wrap = el("div", { class: "d-blk" }, [el("p", { class: "d-kick mono", text: "Kartlara dokun, arkası çevrilir" }), grid]);
    return watch(wrap);
  };

  B.ikili = function (b) {
    function col(c, side) {
      return el("div", { class: "d-vs-c " + side }, [
        el("h4", {}, [c.ikon ? el("span", { class: "ic", "aria-hidden": "true", text: c.ikon }) : null, el("span", { html: md(c.baslik) })]),
        el("ul", {}, stag((c.maddeler || []).map(function (m) { return el("li", { html: md(m) }); })))
      ]);
    }
    var L = col(b.sol || {}, "l"), R = col(b.sag || {}, "r");
    var box = el("div", { class: "d-vs" }, [L, el("div", { class: "d-vs-x mono", "aria-hidden": "true", text: b.ayirici || "vs" }), R]);
    var wrap = el("div", { class: "d-blk" }, [watch(box)]);
    if (b.oyun && b.oyun.length) wrap.appendChild(sortGame(b, L, R));
    return wrap;
  };

  function sortGame(b, L, R) {
    var items = b.oyun.slice(), i = 0, score = 0;
    var card = el("div", { class: "d-game" });
    var head = el("p", { class: "d-kick mono", text: "Ayır bakalım · " + items.length + " ifade" });
    var stmt = el("p", { class: "d-game-s" });
    var why = el("p", { class: "d-game-w", "aria-live": "polite" });
    var bl = el("button", { class: "btn ghost", type: "button", html: md(b.sol.baslik) });
    var br = el("button", { class: "btn ghost", type: "button", html: md(b.sag.baslik) });
    var acts = el("div", { class: "d-game-a" }, [bl, br]);
    var bin = { sol: el("ul", { class: "d-game-bin" }), sag: el("ul", { class: "d-game-bin" }) };
    L.appendChild(bin.sol); R.appendChild(bin.sag);
    function show() {
      if (i >= items.length) {
        stmt.innerHTML = "Bitti: <b>" + score + " / " + items.length + "</b> doğru.";
        acts.hidden = true; return;
      }
      stmt.innerHTML = md(items[i].metin);
      anim(stmt, { opacity: [0, 1], y: [8, 0] }, { duration: 0.35 });
    }
    function pick(side) {
      var it = items[i];
      if (!it) return;
      var ok = it.cevap === side;
      if (ok) score++;
      why.innerHTML = (ok ? "✓ " : "✗ ") + (it.neden ? md(it.neden) : ok ? "Doğru." : "Öbür tarafa ait.");
      why.className = "d-game-w " + (ok ? "ok" : "bad");
      if (!ok) anim(card, { x: [0, -8, 7, -4, 3, 0] }, { duration: 0.4 });
      var li = el("li", { class: ok ? "ok" : "bad", html: md(it.metin) });
      bin[it.cevap].appendChild(li);
      anim(li, { opacity: [0, 1], scale: [0.8, 1] }, { type: "spring", bounce: 0.4, duration: 0.5 });
      i++; show();
    }
    bl.addEventListener("click", function () { pick("sol"); });
    br.addEventListener("click", function () { pick("sag"); });
    add(card, [head, stmt, acts, why]);
    show();
    return watch(card);
  }

  B.adimlar = function (b) {
    var ol = el("ol", { class: "d-steps" });
    var fill = el("i", { class: "d-steps-fill" });
    var rail = el("span", { class: "d-steps-rail", "aria-hidden": "true" }, fill);
    var lis = (b.adimlar || []).map(function (a, i) {
      return el("li", {}, [el("span", { class: "d-steps-n mono", text: String(i + 1) }), el("div", {}, [el("h4", { html: md(a.baslik) }), a.metin ? el("p", { html: md(a.metin) }) : null])]);
    });
    add(ol, lis);
    var wrap = el("div", { class: "d-blk d-steps-w" }, [b.baslik ? el("h3", { class: "d-h3", html: md(b.baslik) }) : null, el("div", { class: "d-steps-box" }, [rail, ol])]);
    steppers.push(function () {
      var r = ol.getBoundingClientRect(), mid = window.innerHeight * 0.6;
      var p = r.height ? Math.min(1, Math.max(0, (mid - r.top) / r.height)) : 0;
      fill.style.transform = "scaleY(" + p + ")";
      lis.forEach(function (li) { var t = li.getBoundingClientRect().top; li.classList.toggle("on", t < mid); });
    });
    return watch(wrap);
  };

  B.tablo = function (b) {
    var tb = el("tbody");
    (b.rows || []).forEach(function (r, i) {
      tb.appendChild(el("tr", { class: b.vurgu === i ? "hi" : null, style: "--i:" + i }, r.map(function (c) { return el("td", { html: md(String(c)) }); })));
    });
    var t = el("table", { class: "d-tbl" }, [
      b.head ? el("thead", {}, el("tr", {}, b.head.map(function (h) { return el("th", { html: md(h) }); }))) : null, tb
    ]);
    return watch(el("div", { class: "d-blk" }, [b.baslik ? el("h3", { class: "d-h3", html: md(b.baslik) }) : null, el("div", { class: "d-tbl-sc" }, t), b.not ? el("p", { class: "d-cap", html: md(b.not) }) : null]));
  };

  B.ornek = function (b) {
    var steps = (b.adimlar || []).map(function (s, i) { return el("li", { html: md(s), hidden: true }, null); });
    var res = el("div", { class: "d-ex-r", hidden: true, html: "<span class=\"mono\">Sonuç</span> " + md(b.sonuc || "") });
    var k = 0;
    var nb = el("button", { class: "btn primary sm", type: "button", text: steps.length ? "İlk adım →" : "Sonucu göster →" });
    function nextStep() {
      if (k < steps.length) {
        steps[k].hidden = false; anim(steps[k], { opacity: [0, 1], x: [-14, 0] }, { duration: 0.4 });
        k++;
        nb.textContent = k < steps.length ? "Sonraki adım →" : "Sonucu göster →";
      } else {
        res.hidden = false; anim(res, { opacity: [0, 1], scale: [0.94, 1] }, { type: "spring", bounce: 0.35, duration: 0.6 });
        nb.hidden = true; all.hidden = true;
      }
    }
    var all = el("button", { class: "linkish", type: "button", text: "hepsini aç" });
    all.addEventListener("click", function () { steps.forEach(function (s) { s.hidden = false; }); res.hidden = false; nb.hidden = true; all.hidden = true; });
    nb.addEventListener("click", nextStep);
    return watch(el("div", { class: "d-ex" }, [
      el("p", { class: "d-kick mono", text: "Örnek" }),
      el("h3", { html: md(b.baslik || "") }),
      el("p", { class: "d-ex-d", html: md(b.durum || "") }),
      el("ol", { class: "d-ex-s" }, steps),
      res,
      el("div", { class: "d-ex-a" }, [nb, all])
    ]));
  };

  B.formul = function (b) {
    var row = el("div", { class: "d-fx" });
    (b.parcalar || []).forEach(function (p, i) {
      if (typeof p === "string") row.appendChild(el("span", { class: "d-fx-op", style: "--i:" + i, text: p }));
      else row.appendChild(el("span", { class: "d-fx-p", style: "--i:" + i }, [el("span", { class: "t", html: md(p.t) }), p.alt ? el("span", { class: "a", html: md(p.alt) }) : null]));
    });
    return watch(el("div", { class: "d-blk d-fx-w" }, [row, b.aciklama ? el("p", { class: "d-cap", html: md(b.aciklama) }) : null]));
  };

  B.sayilar = function (b) {
    var nodes = [];
    var box = el("div", { class: "d-nums" }, (b.ogeler || []).map(function (o, i) {
      var v = el("span", { class: "v", text: (o.onek || "") + (RM ? o.deger : 0) + (o.sonek || "") });
      nodes.push({ n: v, o: o });
      return el("div", { class: "d-num", style: "--i:" + i }, [v, el("span", { class: "l", html: md(o.etiket || "") })]);
    }));
    return watch(box, function () {
      nodes.forEach(function (x) {
        var to = Number(x.o.deger), dec = (String(x.o.deger).split(".")[1] || "").length, t0 = null;
        if (!isFinite(to)) { x.n.textContent = (x.o.onek || "") + x.o.deger + (x.o.sonek || ""); return; }
        function f(t) {
          if (t0 == null) t0 = t;
          var p = Math.min(1, (t - t0) / 1100), e = 1 - Math.pow(1 - p, 3);
          x.n.textContent = (x.o.onek || "") + (to * e).toLocaleString("tr-TR", { minimumFractionDigits: dec, maximumFractionDigits: dec }) + (x.o.sonek || "");
          if (p < 1) requestAnimationFrame(f);
        }
        requestAnimationFrame(f);
      });
    });
  };

  B.harita = function (b) {
    var center = el("div", { class: "d-map-c", html: md(b.merkez || "") });
    var nodes = (b.dallar || []).map(function (d, i) {
      return el("div", { class: "d-map-n", style: "--i:" + i }, [el("b", { html: md(d.baslik) }), d.alt ? el("span", { html: md(d.alt) }) : null]);
    });
    var grid = el("div", { class: "d-map-g" }, nodes);
    var svg = sv("svg", { class: "d-map-s", "aria-hidden": "true" });
    var box = el("div", { class: "d-map" }, [svg, center, grid]);
    function draw() {
      while (svg.firstChild) svg.removeChild(svg.firstChild);
      var br = box.getBoundingClientRect(), c = center.getBoundingClientRect();
      svg.setAttribute("viewBox", "0 0 " + br.width + " " + br.height);
      var cx = c.left + c.width / 2 - br.left, cy = c.bottom - br.top;
      nodes.forEach(function (n, i) {
        var r = n.getBoundingClientRect(), x = r.left + r.width / 2 - br.left, y = r.top - br.top;
        var p = sv("path", { d: "M" + cx + " " + cy + " C" + cx + " " + (cy + (y - cy) * 0.6) + " " + x + " " + (cy + (y - cy) * 0.4) + " " + x + " " + y, class: "ln", style: "--i:" + i, pathLength: "1" });
        svg.appendChild(p);
      });
    }
    var w = watch(el("div", { class: "d-blk" }, box), function () { draw(); });
    window.addEventListener("resize", function () { if (w.classList.contains("in")) draw(); });
    return w;
  };

  B.zaman = function (b) {
    return watch(el("ol", { class: "d-time" }, stag((b.olaylar || []).map(function (o) {
      return el("li", {}, [el("span", { class: "d-time-d mono", text: o.tarih || "" }), el("div", {}, [el("h4", { html: md(o.baslik) }), o.metin ? el("p", { html: md(o.metin) }) : null])]);
    }))));
  };

  B.liste = function (b) {
    return watch(el("ul", { class: "d-list" }, stag((b.maddeler || []).map(function (m) {
      return el("li", {}, [el("span", { class: "ic", "aria-hidden": "true", text: m.ikon || "•" }), el("div", {}, [el("b", { html: md(m.baslik) }), m.metin ? el("p", { html: md(m.metin) }) : null])]);
    }))));
  };

  B.tuzak = function (b) {
    var n = el("div", { class: "d-trap" }, [
      el("p", { class: "d-trap-k mono", html: "⚠ " + md(b.baslik || "Sınav tuzağı") }),
      el("p", { html: md(b.metin || "") }),
      b.yanlis ? el("p", { class: "d-trap-x", html: "<span>✗</span> " + md(b.yanlis) }) : null,
      b.dogru ? el("p", { class: "d-trap-o", html: "<span>✓</span> " + md(b.dogru) }) : null
    ]);
    return watch(n, function () { anim(n, { rotate: [0, -1.2, 1, -0.6, 0] }, { duration: 0.6, delay: 0.35 }); });
  };

  B.ozet = function (b) {
    return watch(el("ul", { class: "d-sum" }, stag((b.maddeler || []).map(function (m) {
      return el("li", {}, [el("span", { class: "ck", "aria-hidden": "true", html: '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" pathLength="1"/></svg>' }), el("span", { html: md(m) })]);
    }))));
  };

  B.ders = function (b) {
    var box = el("div", { class: "d-lec" }, [
      el("p", { class: "d-lec-k mono", text: "Derste" + (b.tarih ? " · " + b.tarih : "") }),
      b.baslik ? el("h3", { html: md(b.baslik) }) : null
    ]);
    (b.bloklar || []).forEach(function (x) { var n = block(x); if (n) box.appendChild(n); });
    return watch(box);
  };

  B.sekil = function (b) {
    var f = null;
    try { f = window.APFig ? window.APFig.render(b.fig) : null; } catch (e) {}
    if (!f) return null;
    var w = el("div", { class: "d-blk d-fig" }, [b.baslik ? el("h3", { class: "d-h3", html: md(b.baslik) }) : null, f]);
    return watch(w, function () {
      if (RM) return;
      var bars = [].slice.call(f.querySelectorAll("rect"));
      bars.forEach(function (r, i) { r.style.transformBox = "fill-box"; r.style.transformOrigin = "50% 100%"; anim(r, { scaleY: [0, 1] }, { duration: 0.6, delay: 0.04 * i, ease: [0.2, 0.8, 0.2, 1] }); });
      [].slice.call(f.querySelectorAll("circle")).forEach(function (c, i) { anim(c, { opacity: [0, 1], scale: [0, 1] }, { duration: 0.35, delay: 0.03 * i }); });
    });
  };

  /* ---------------- grafik (durumlu, hareketli) ---------------- */
  B.grafik = function (b) {
    var XM = b.xmax || 10, YM = b.ymax || 10;
    var W = 560, Hh = 400, ml = 54, mr = 26, mt = 22, mb = 48, pw = W - ml - mr, ph = Hh - mt - mb;
    function X(v) { return ml + v / XM * pw; }
    function Y(v) { return mt + ph - v / YM * ph; }
    var svg = sv("svg", { viewBox: "0 0 " + W + " " + Hh, class: "d-g", role: "img", "aria-label": (b.baslik || "Grafik") });
    var defs = sv("defs");
    defs.innerHTML = '<marker id="ah' + (B._g = (B._g || 0) + 1) + '" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker>';
    var mk = "ah" + B._g;
    svg.appendChild(defs);
    var grid = sv("g", { class: "g-grid" });
    for (var gx = 1; gx < XM; gx++) grid.appendChild(sv("line", { x1: X(gx), y1: Y(0), x2: X(gx), y2: Y(YM) }));
    for (var gy = 1; gy < YM; gy++) grid.appendChild(sv("line", { x1: X(0), y1: Y(gy), x2: X(XM), y2: Y(gy) }));
    svg.appendChild(grid);
    var ax = sv("path", { class: "g-ax", d: "M" + X(0) + " " + Y(YM) + " V" + Y(0) + " H" + X(XM), "marker-start": "url(#" + mk + ")", "marker-end": "url(#" + mk + ")" });
    svg.appendChild(ax);
    var xl = sv("text", { x: X(XM), y: Y(0) + 34, "text-anchor": "end", class: "g-al" }); xl.textContent = plain(b.xlabel);
    var yl = sv("text", { x: 0, y: 0, "text-anchor": "middle", class: "g-al", transform: "translate(" + (X(0) - 34) + " " + Y(YM / 2) + ") rotate(-90)" });
    yl.textContent = plain(b.ylabel);
    svg.appendChild(xl); svg.appendChild(yl);
    /* eksen sayıları: xticks / yticks = [{ v, label }] */
    (b.xticks || []).forEach(function (t) { var n = sv("text", { x: X(t.v), y: Y(0) + 18, "text-anchor": "middle", class: "g-tk" }); n.textContent = plain(t.label); svg.appendChild(n); });
    (b.yticks || []).forEach(function (t) { var n = sv("text", { x: X(0) - 8, y: Y(t.v) + 4, "text-anchor": "end", class: "g-tk" }); n.textContent = plain(t.label); svg.appendChild(n); });
    var layer = sv("g"); svg.appendChild(layer);

    var base = {}, order = [];
    (b.ogeler || []).forEach(function (o) { if (o && o.id) { base[o.id] = JSON.parse(JSON.stringify(o)); order.push(o.id); } });
    var states = b.durumlar && b.durumlar.length ? b.durumlar : [{ metin: "" }];
    /* her durumun tam hali: önceki durumların üstüne eklenir */
    var full = [], cur = JSON.parse(JSON.stringify(base)), vis = {};
    order.forEach(function (id) { vis[id] = !base[id].gizli; });
    states.forEach(function (s) {
      var k;
      if (s.set) for (k in s.set) if (cur[k]) Object.assign(cur[k], s.set[k]);
      (s.goster || []).forEach(function (id) { vis[id] = true; });
      (s.gizle || []).forEach(function (id) { vis[id] = false; });
      full.push({ o: JSON.parse(JSON.stringify(cur)), v: Object.assign({}, vis) });
    });

    var nodes = {};
    order.forEach(function (id) {
      var o = base[id], g = sv("g", { class: "g-o g-" + o.tip + " c" + (o.renk || 0) });
      if (o.tip === "cizgi" || o.tip === "egri" || o.tip === "ppc") { g.appendChild(sv("path", { class: "g-ln" + (o.kesik ? " dash" : ""), pathLength: "1" })); g.appendChild(sv("text", { class: "g-lb" })); }
      else if (o.tip === "alan") g.appendChild(sv("path", { class: "g-ar" }));
      else if (o.tip === "ok") g.appendChild(sv("path", { class: "g-ok", "marker-end": "url(#" + mk + ")" }));
      else if (o.tip === "nokta") { g.appendChild(sv("path", { class: "g-gd" })); g.appendChild(sv("circle", { r: 6.5, class: "g-pt" })); g.appendChild(sv("text", { class: "g-lb" })); }
      else if (o.tip === "yazi") g.appendChild(sv("text", { class: "g-tx" }));
      layer.appendChild(g); nodes[id] = g;
    });

    function lerp(a, b2, t) {
      if (typeof a === "number" && typeof b2 === "number") return a + (b2 - a) * t;
      if (Array.isArray(a) && Array.isArray(b2) && a.length === b2.length) return a.map(function (v, i) { return lerp(v, b2[i], t); });
      return t < 0.5 ? a : b2;
    }
    function mix(A, Bb, t) { var r = {}, k; for (k in Bb) r[k] = lerp(A ? A[k] : Bb[k], Bb[k], t); return r; }
    function ppcPts(o) {
      var k = o.k || 2, pts = [], i, a;
      for (i = 0; i <= 40; i++) { a = i / 40 * Math.PI / 2; pts.push([o.qmax * Math.pow(Math.cos(a), 2 / k), o.pmax * Math.pow(Math.sin(a), 2 / k)]); }
      return pts;
    }
    function smooth(pts) {
      if (pts.length < 3) return "M" + pts.map(function (p) { return X(p[0]) + " " + Y(p[1]); }).join(" L");
      var d = "M" + X(pts[0][0]) + " " + Y(pts[0][1]), i, p0, p1, p2, p3;
      for (i = 0; i < pts.length - 1; i++) {
        p0 = pts[i - 1] || pts[i]; p1 = pts[i]; p2 = pts[i + 1]; p3 = pts[i + 2] || p2;
        d += " C" + X(p1[0] + (p2[0] - p0[0]) / 6) + " " + Y(p1[1] + (p2[1] - p0[1]) / 6) + " " + X(p2[0] - (p3[0] - p1[0]) / 6) + " " + Y(p2[1] - (p3[1] - p1[1]) / 6) + " " + X(p2[0]) + " " + Y(p2[1]);
      }
      return d;
    }
    function paint(o, g) {
      var p, end;
      if (o.tip === "cizgi") { g.firstChild.setAttribute("d", "M" + X(o.from[0]) + " " + Y(o.from[1]) + " L" + X(o.to[0]) + " " + Y(o.to[1])); end = o.to; }
      else if (o.tip === "egri") { g.firstChild.setAttribute("d", smooth(o.noktalar)); end = o.noktalar[o.noktalar.length - 1]; }
      else if (o.tip === "ppc") { p = ppcPts(o); g.firstChild.setAttribute("d", "M" + p.map(function (q) { return X(q[0]) + " " + Y(q[1]); }).join(" L")); end = [o.qmax * 0.72, o.pmax * 0.72]; }
      if (end) { var t = g.lastChild; t.textContent = plain(o.etiket); t.setAttribute("x", X(end[0]) + 6); t.setAttribute("y", Y(end[1]) - 6); }
      if (o.tip === "alan") g.firstChild.setAttribute("d", "M" + o.noktalar.map(function (q) { return X(q[0]) + " " + Y(q[1]); }).join(" L") + "Z");
      if (o.tip === "ok") g.firstChild.setAttribute("d", "M" + X(o.from[0]) + " " + Y(o.from[1]) + " L" + X(o.to[0]) + " " + Y(o.to[1]));
      if (o.tip === "nokta") {
        g.childNodes[0].setAttribute("d", o.kilavuz ? "M" + X(0) + " " + Y(o.y) + " H" + X(o.x) + " V" + Y(0) : "");
        g.childNodes[1].setAttribute("cx", X(o.x)); g.childNodes[1].setAttribute("cy", Y(o.y));
        var lb = g.childNodes[2]; lb.textContent = plain(o.etiket); lb.setAttribute("x", X(o.x) + 10); lb.setAttribute("y", Y(o.y) - 10);
      }
      if (o.tip === "yazi") { var tx = g.firstChild; tx.textContent = plain(o.metin); tx.setAttribute("x", X(o.x)); tx.setAttribute("y", Y(o.y)); tx.setAttribute("text-anchor", o.hiza || "middle"); }
    }
    var shown = -1, raf = 0;
    function go(i, instant) {
      i = Math.max(0, Math.min(full.length - 1, i));
      var from = shown >= 0 ? full[shown] : null, to = full[i];
      shown = i;
      cap.style.opacity = 0;
      setTimeout(function () { cap.innerHTML = md(states[i].metin || ""); cap.style.opacity = 1; }, instant || RM ? 0 : 160);
      dots.forEach(function (d, k) { d.classList.toggle("on", k === i); d.setAttribute("aria-current", k === i ? "step" : "false"); });
      pv.disabled = i === 0; nx.disabled = i === full.length - 1;
      order.forEach(function (id) {
        var g = nodes[id], on = to.v[id], was = from ? from.v[id] : false;
        g.classList.toggle("off", !on);
        if (on && !was && !instant) { g.classList.remove("drawn"); void g.getBoundingClientRect(); g.classList.add("drawn"); }
      });
      cancelAnimationFrame(raf);
      var t0 = null, dur = instant || RM || !from ? 0 : 750;
      function f(t) {
        if (t0 == null) t0 = t;
        var p = dur ? Math.min(1, (t - t0) / dur) : 1, e = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
        order.forEach(function (id) { paint(mix(from && from.o[id], to.o[id], e), nodes[id]); });
        if (p < 1) raf = requestAnimationFrame(f);
      }
      raf = requestAnimationFrame(f);
    }
    var cap = el("p", { class: "d-g-cap", "aria-live": "polite" });
    var pv = el("button", { class: "d-g-b", type: "button", "aria-label": "Önceki adım", text: "←" });
    var nx = el("button", { class: "d-g-b", type: "button", "aria-label": "Sonraki adım", text: "→" });
    var play = el("button", { class: "d-g-b play", type: "button", "aria-label": "Baştan oynat", text: "▶" });
    var dots = states.map(function (s, k) { var d = el("button", { class: "d-g-dot", type: "button", "aria-label": "Adım " + (k + 1) }); d.addEventListener("click", function () { stop(); go(k); }); return d; });
    var timer = 0;
    function stop() { clearTimeout(timer); timer = 0; play.classList.remove("on"); }
    function auto() {
      if (shown >= full.length - 1) { stop(); return; }
      timer = setTimeout(function () { go(shown + 1); auto(); }, 3400);
    }
    pv.addEventListener("click", function () { stop(); go(shown - 1); });
    nx.addEventListener("click", function () { stop(); go(shown + 1); });
    play.addEventListener("click", function () { stop(); play.classList.add("on"); go(0); auto(); });
    var ctr = el("div", { class: "d-g-ctl" }, [play, pv, el("div", { class: "d-g-dots" }, dots), nx]);
    var wrap = el("figure", { class: "d-blk d-gw" }, [b.baslik ? el("figcaption", { class: "d-h3", html: md(b.baslik) }) : null, svg, cap, full.length > 1 ? ctr : null]);
    go(0, true);
    order.forEach(function (id) { nodes[id].classList.add("pre"); });
    return watch(wrap, function () {
      order.forEach(function (id) { nodes[id].classList.remove("pre"); nodes[id].classList.add("drawn"); });
      if (full.length > 1 && !RM) { play.classList.add("on"); auto(); }
    });
  };

  /* ---------------- Kendini dene (kit ilerlemesine yazar) ---------------- */
  var AB = ["A", "B", "C", "D", "E"];
  function stateKey() { return KIT.store + (acc ? acc.id : "misafir") + ":state"; }
  function readState() { try { return JSON.parse(lg(stateKey()) || "null") || { v: 1, eps: {} }; } catch (e) { return { v: 1, eps: {} }; } }
  function writeAns(ep, q, k) {
    var s = readState();
    if (!s.eps || typeof s.eps !== "object") s.eps = {};
    var e = s.eps[ep.slug] || (s.eps[ep.slug] = { watched: false, step: "video", ans: {}, hw: {} });
    if (!e.ans) e.ans = {};
    e.ans[qid(q)] = k;
    if (e.step === "video") e.step = "quiz";
    if (acc) ls(stateKey(), JSON.stringify(s)); else try { window.localStorage.setItem(stateKey(), JSON.stringify(s)); } catch (x) {}
  }
  function quiz(ep, sec) {
    var st = readState(), prev = (st.eps && st.eps[ep.slug] && st.eps[ep.slug].ans) || {};
    var score = el("p", { class: "d-qs mono" });
    var tally = { n: ep.questions.length, a: 0, ok: 0 };
    function upd() { score.textContent = tally.a + " / " + tally.n + " cevaplandı · " + tally.ok + " doğru"; }
    ep.questions.forEach(function (q, qi) {
      var box = el("div", { class: "d-q" }), fig = null;
      try { fig = q.fig && window.APFig ? window.APFig.render(q.fig) : null; } catch (e) {}
      var why = el("div", { class: "d-q-why", hidden: true, html: "<b>Neden?</b> " + md(q.why || "") });
      var btns = q.opts.map(function (o, k) {
        return el("button", { class: "d-q-o", type: "button" }, [el("span", { class: "k mono", text: AB[k] }), el("span", { html: md(o) })]);
      });
      function lock(k, fresh) {
        btns.forEach(function (b2, j) { b2.disabled = true; if (j === q.a) b2.classList.add("ok"); if (j === k && k !== q.a) b2.classList.add("bad"); });
        why.hidden = false;
        tally.a++; if (k === q.a) tally.ok++; upd();
        if (fresh) {
          anim(k === q.a ? btns[k] : box, k === q.a ? { scale: [1, 1.03, 1] } : { x: [0, -7, 6, -4, 3, 0] }, { duration: 0.42 });
          anim(why, { opacity: [0, 1], y: [8, 0] }, { duration: 0.4 });
          writeAns(ep, q, k);
        }
      }
      btns.forEach(function (b2, k) { b2.addEventListener("click", function () { lock(k, true); }); });
      add(box, [el("p", { class: "d-q-n mono", text: "Soru " + (qi + 1) }), el("p", { class: "d-q-t", html: md(q.q) }), fig, el("div", { class: "d-q-os" }, btns), why]);
      var p = prev[qid(q)];
      if (typeof p === "number" && p >= 0 && p < q.opts.length) lock(p, false);
      sec.appendChild(watch(box));
    });
    upd();
    sec.appendChild(score);
  }

  /* ---------------- başlat ---------------- */
  function sketchFilter() {
    if (document.getElementById("d-kaba")) return;
    var s2 = sv("svg", { width: 0, height: 0, style: "position:absolute", "aria-hidden": "true" });
    s2.innerHTML = '<defs><filter id="d-kaba" filterUnits="userSpaceOnUse" x="-80" y="-80" width="3000" height="3000"><feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="3" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="2.6" xChannelSelector="R" yChannelSelector="G"/></filter></defs>';
    document.body.appendChild(s2);
  }
  /* açık / koyu tema düğmesi (seçim bu cihazda hatırlanır; sayfa başındaki satır ilk boyamadan önce uygular) */
  var TEMA = "kitora-defter-tema";
  function temaButonu() {
    var yer = document.querySelector(".top-r");
    if (!yer) return;
    var b = el("button", { class: "d-tema", type: "button" });
    function yaz() {
      var koyu = document.documentElement.getAttribute("data-tema") === "koyu";
      b.textContent = koyu ? "☀️ Açık defter" : "🌙 Koyu defter";
      b.setAttribute("aria-label", koyu ? "Açık temaya geç" : "Koyu temaya geç");
    }
    b.addEventListener("click", function () {
      var koyu = document.documentElement.getAttribute("data-tema") !== "koyu";
      if (koyu) document.documentElement.setAttribute("data-tema", "koyu"); else document.documentElement.removeAttribute("data-tema");
      try { window.localStorage.setItem(TEMA, koyu ? "koyu" : "acik"); } catch (e) {}
      yaz();
    });
    yaz();
    yer.insertBefore(b, yer.firstChild);
  }
  function start() {
    sketchFilter();
    temaButonu();
    if (idx < 0) { listView(); return; }
    var ep = EPS[idx];
    if (locked(idx)) { lockView(ep); return; }
    var s = document.createElement("script");
    s.src = ep.slug + ".js?v=" + (window.DEFTER_V || 1);
    s.onload = function () {
      if (!window.DEFTER) { root.appendChild(el("p", { class: "lead", text: "Bu bölümün defteri henüz hazır değil." })); return; }
      notebookView(ep, window.DEFTER);
      if (window.location.hash) { var t = document.getElementById(window.location.hash.slice(1)); if (t) setTimeout(function () { t.scrollIntoView(); }, 60); }
    };
    s.onerror = function () {
      add(root, el("section", { class: "d-lock" }, [el("h1", { text: ep.title }), el("p", { class: "lead", text: "Bu bölümün defteri yakında geliyor. O zamana kadar videosundan çalışabilirsin." }), el("a", { class: "btn primary", href: "../#" + ep.slug, text: "Videoya git →" })]));
    };
    document.body.appendChild(s);
  }
  if (acc && H.sec) H.sec(acc.id).then(start, start); else start();
})();
