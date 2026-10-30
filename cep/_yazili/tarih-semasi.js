/* Kitpath · yazılı kitleri · "tarih şeması" yapıştırıcısı (v2)
   veri.js şemasındaki verileri ortak kabuğun (yazili.js) adımlarına çevirir. Kit, verisini açıkça verir:
     YAZILI.tarihKiti({ sk, ad, ders, veri:{SINAV, SENARYO, RUBRIK, EK, KRONO, KART, YY17, ANT, ESLE, HARITA_NOKTA, HARITA_SORU,
                        LALE, MC, PROVA, KONU, ESLE_GRUP}, videolar:[...], adlar:{...}, metin:{...}, ciktiAd:{...} })
   Verisi olmayan adım atlanır. Tarih: Kronoloji · Savaşlar · Lale Devri. Coğrafya vb.: KONU → "Konular" adımı
   (#konular/<id> ile tek tek açılır), ESLE_GRUP + KONU.kavram → "Eşleştirme ve kavramlar" adımı.
   Adım renkleri sabittir: plan lacivert, videolar kırmızı, test mavi, prova petrol; ara adımlar yeşil, mor, turuncu sırasıyla. */
(function () {
  "use strict";
  var Y = window.YAZILI;

  Y.tarihKiti = function (cfg) {
    var V = cfg.veri || {};
    var SINAV = V.SINAV, SENARYO = V.SENARYO || [], RUBRIK = V.RUBRIK || [], EK = V.EK || [],
      KRONO = V.KRONO || null, KART = V.KART || [], YY17 = V.YY17 || [], ANT = V.ANT || null, ESLE = V.ESLE || [],
      HARITA_NOKTA = V.HARITA_NOKTA || [], HARITA_SORU = V.HARITA_SORU || [], LALE = V.LALE || null, MC = V.MC || null, PROVA = V.PROVA || null,
      KONU = V.KONU || null, ESLE_GRUP = V.ESLE_GRUP || null, MUHTEMEL = V.MUHTEMEL || null, AKIS = cfg.akis || null;
    var esc = Y.esc, A = cfg.adlar || {}, M = cfg.metin || {};

    /* ---------- durum (anahtar ve alanlar eski kitle aynı) ---------- */
    var SK = cfg.sk, S = {};
    try { S = JSON.parse(localStorage.getItem(SK) || "{}") || {}; } catch (e) { S = {}; }
    S.r = S.r || {}; S.chk = S.chk || {}; S.es = S.es || {}; S.pv = S.pv || {}; S.pd = S.pd || 0; S.mcF = S.mcF || "all";
    S.vid = S.vid || {}; S.kf = S.kf || {}; S.mcRun = S.mcRun || {}; S.ko = S.ko || {}; S.vt = S.vt || {}; S.vtRun = S.vtRun || {}; S.df = S.df || {}; S.mu = S.mu || 0;
    if (ESLE_GRUP && (typeof S.esSeed !== "object" || !S.esSeed)) S.esSeed = {};
    if (PROVA && S.pd >= PROVA.length) S.pd = 0;
    /* prova soruları değişince eski cevaplar yeni sorulara karışmasın */
    if (V.PROVA_SURUM && S.pvSurum !== V.PROVA_SURUM) { S.pv = {}; S.pd = 0; S.pvSurum = V.PROVA_SURUM; }
    function save() { try { localStorage.setItem(SK, JSON.stringify(S)); } catch (e) {} }
    var CN = cfg.ciktiAd || {};
    var ESKI = { kapsam: "plan", video: AKIS ? "akis" : "videolar", krono: "kronoloji", savas: "savaslar", lale: "lale", test: "test", prova: "prova" };
    if (KONU) KONU.forEach(function (k) { ESKI[k.id] = "konular"; });

    function allKeys() {
      var k = [];
      (MC || []).forEach(function (_, i) { k.push("m" + i); });
      HARITA_SORU.forEach(function (_, i) { k.push("h" + i); });
      ESLE.forEach(function (_, i) { k.push("e" + i); });
      (ESLE_GRUP || []).forEach(function (g) { g.soru.forEach(function (_, i) { k.push("e:" + g.id + ":" + i); }); });
      return k;
    }
    function mark(key, ok) { if (!S.r[key]) { S.r[key] = ok ? "ok" : "bad"; save(); } }
    function ilkDogru() { var k = allKeys(); return [k.filter(function (x) { return S.r[x] === "ok"; }).length, k.length]; }
    function pvState(d, q) { S.pv[d] = S.pv[d] || {}; S.pv[d][q] = S.pv[d][q] || { t: "", o: false, c: [] }; return S.pv[d][q]; }
    function qScore(d, q) { var st = pvState(d, q), s = PROVA[d].s[q]; return Y.olcutPuan(s.o, st.c); }
    function grupCevap(g) { return Object.keys(S.es[g.id] || {}).length; }
    var tumKavram = [];
    if (KONU) KONU.forEach(function (k) { (k.kavram || []).forEach(function (c, i) { tumKavram.push(k.id + ":" + i); }); });

    var P = {
      plan: function () { return [RUBRIK.filter(function (_, i) { return S.chk[i]; }).length, RUBRIK.length]; },
      videolar: function () { return [(cfg.videolar || []).filter(function (v) { return S.vid[v.id]; }).length, (cfg.videolar || []).length]; },
      kronoloji: function () { var b = S.ordBest || {}, en = null; Object.keys(b).forEach(function (n) { if (!en || b[n] / n > en[0] / en[1]) en = [b[n], +n]; }); return en || [0, KRONO.length]; },
      savaslar: function () { return [Object.keys(S.es).length + HARITA_SORU.filter(function (_, i) { return S.r["h" + i]; }).length, ESLE.length + HARITA_SORU.length]; },
      lale: function () { return [LALE.kavram.filter(function (_, i) { return S.kf[i]; }).length, LALE.kavram.length]; },
      akis: function () { return [AKIS.filter(akisBitti).length, AKIS.length]; },
      muhtemel: function () { return [S.mu ? 1 : 0, 1]; },
      konular: function () { return [KONU.filter(function (k) { return S.ko[k.id]; }).length, KONU.length]; },
      esle: function () { var a = 0, b = 0; ESLE_GRUP.forEach(function (g) { a += grupCevap(g); b += g.soru.length; }); return [a, b]; },
      test: function () { return [MC.filter(function (_, i) { return S.r["m" + i]; }).length, MC.length]; },
      prova: function () { var a = 0, b = 0; PROVA.forEach(function (p, d) { p.s.forEach(function (s, q) { a += qScore(d, q); b += s.p; }); }); return [a, b]; }
    };

    /* ================= PLAN ================= */
    function plan(g) {
      Y.planUst(g);
      var top = SENARYO.reduce(function (a, b) { return a + b.n; }, 0);
      var h = '<div class="y-kart" style="margin-top:22px"><h2 class="y-h2">Sınava ne giriyor?</h2><p class="y-soluk" style="margin-top:4px">' + top + " açık uçlu soru" + (cfg.senaryoAd ? " (" + esc(cfg.senaryoAd) + ")" : "") + ":</p>" +
        '<ul class="y-nokta-liste">' + SENARYO.filter(function (s) { return s.n; }).map(function (s) { return "<li><b>" + s.n + " soru</b> · " + s.t + "</li>"; }).join("") + "</ul></div>";
      h += Y.katla("Günlük plan", '<div id="gplan"></div>', "kalan güne göre");
      if (RUBRIK.length) h += Y.katla("Öz değerlendirme listesi", '<div id="rubrik"></div>', '<span data-chk-say></span>');
      var disi = SENARYO.filter(function (s) { return !s.n; });
      if (EK.length || disi.length) h += Y.katla("Sınav dışı konular", (disi.length ? '<ul class="y-nokta-liste">' + disi.map(function (s) { return "<li>" + s.k + " · " + s.t + "</li>"; }).join("") + "</ul>" : "") + EK.map(function (x) { return '<div class="y-ek" style="margin-top:10px"><span class="y-kod">' + x.k + "</span><h3>" + x.h + "</h3><p>" + x.p + "</p></div>"; }).join(""));
      g.insertAdjacentHTML("beforeend", h);
      var vids = cfg.videolar || [], gorev = [];
      if (vids.length) gorev.push({ ad: "Videoları izle (" + vids.length + " video)", dk: Math.round(vids.reduce(function (a, v) { return a + (v.sure || 0); }, 0) / 60) + 5, git: "videolar", ilerleme: P.videolar });
      if (KRONO) gorev.push({ ad: "Kronoloji: sıralama oyununu iki tur oyna", dk: 20, git: "kronoloji", ilerleme: function () { return [Object.keys(S.ordBest || {}).length ? 1 : 0, 1]; } });
      if (ANT) gorev.push({ ad: (A.savaslar || "Savaşlar ve antlaşmalar") + ": kartları oku", dk: 30, git: "savaslar", ilerleme: null }, { ad: "Eşleştirme ve harita soruları", dk: 30, git: "savaslar", ilerleme: P.savaslar });
      if (LALE) gorev.push({ ad: (A.lale || "Lale Devri") + " ve kavram kartları", dk: 40, git: "lale", ilerleme: P.lale });
      if (KONU) KONU.forEach(function (k) { gorev.push({ ad: "Konu: " + k.ad, dk: 35, git: "konular/" + k.id, ilerleme: function () { return [S.ko[k.id] ? 1 : 0, 1]; } }); });
      if (ESLE_GRUP) gorev.push({ ad: "Eşleştirme alıştırmaları", dk: 30, git: "esle", ilerleme: P.esle });
      if (MC) gorev.push({ ad: "Çoktan seçmeli pekiştirme", dk: 30, git: "test", ilerleme: P.test });
      if (PROVA) PROVA.forEach(function (p, d) { gorev.push({ ad: "Yazılı provası: " + p.ad, dk: 40, git: "prova", ilerleme: function () { return [p.s.filter(function (_, q) { return pvState(d, q).o; }).length, p.s.length]; } }); });
      Y.gunlukPlan(g.querySelector("#gplan"), { gorevler: gorev, bosGun: { ad: "Çoktan seçmelide yanlışlarını tekrar çöz", git: "test" }, sonGun: { ad: M.sonGun || "Hafif tekrar: kartlara göz at, erken uyu", git: "plan" } });
      if (RUBRIK.length) {
        var chkSay = function () { var c = g.querySelector("[data-chk-say]"); if (c) c.textContent = P.plan()[0] + "/" + RUBRIK.length; };
        Y.liste(g.querySelector("#rubrik"), { maddeler: RUBRIK.map(function (r) { return { html: r.t }; }), durum: S.chk, kaydet: save, degisti: chkSay });
        chkSay();
      }
    }

    /* ================= VİDEOLAR ================= */
    function videolar(g, alt) { Y.videolar(g, { gruplar: [{ baslik: "", videolar: cfg.videolar }], durum: S.vid, kaydet: save, ac: alt }); }

    /* ================= KRONOLOJİ ================= */
    var ord = null;
    function kronoloji(g) {
      g.innerHTML = '<div class="y-kart"><div class="y-satir y-satir--ara" style="margin-bottom:12px"><span class="y-soluk" data-bilgi></span><button type="button" class="y-lnk" data-geri-al>↩ Geri al</button></div>' +
        '<div class="y-sira-alan" data-sira></div><div data-kontrol-yer style="margin-top:14px"></div>' +
        '<h3 class="y-h3" style="margin:18px 0 10px">Kalan olaylar</h3><div class="y-sira-alan" data-havuz></div></div>' +
        Y.katla(esc(M.cizelge || "Çizelge"), '<ol class="y-zaman">' + KRONO.map(function (o) { return '<li><span class="y">' + o.y + "</span>" + o.t + '<span class="y-etk">' + esc(CN[o.c] || o.c) + '</span><span class="nt">' + o.n + "</span></li>"; }).join("") + "</ol>", "önce oyunu oyna") +
        Y.diger('<button type="button" class="y-lnk" data-yeni="12">Yeni tur (12 olay)</button><button type="button" class="y-lnk" data-yeni="' + KRONO.length + '">Hepsiyle oyna (' + KRONO.length + " olay)</button>");
      function basla(n) {
        var idx = Y.karistir(KRONO.length, Y.tohum()).slice(0, n).sort(function (a, b) { return a - b; });
        ord = { set: idx, pool: Y.karistir(idx.length, Y.tohum() + 7).map(function (i) { return idx[i]; }), seq: [], checked: false };
        ciz();
      }
      function ciz() {
        var rank = function (i) { return ord.set.indexOf(i); };
        g.querySelector("[data-sira]").innerHTML = ord.seq.length ? ord.seq.map(function (i, p) {
          var ok = rank(i) === p;
          return '<div class="y-olay ' + (ord.checked ? (ok ? "ok" : "bad") : "yerde") + '"><span class="k">' + (p + 1) + "</span><span>" + KRONO[i].t + (ord.checked ? ' <span class="y-mini y-soluk">(' + KRONO[i].y + (ok ? "" : " · doğru yeri: " + (rank(i) + 1)) + ")</span>" : "") + "</span></div>";
        }).join("") : '<p class="y-soluk">En eski olaydan başlayarak aşağıdaki olaylara dokun.</p>';
        var kalan = ord.pool.filter(function (i) { return ord.seq.indexOf(i) < 0; });
        g.querySelector("[data-havuz]").innerHTML = kalan.map(function (i) { return '<button type="button" class="y-olay" data-i="' + i + '"><span class="k">+</span><span>' + KRONO[i].t + "</span></button>"; }).join("") || '<p class="y-soluk">Hepsi dizildi.</p>';
        g.querySelector("[data-kontrol-yer]").innerHTML = ord.seq.length === ord.set.length && !ord.checked ? '<button type="button" class="y-btn y-btn--ana y-btn--genis" data-kontrol>Kontrol et</button>'
          : ord.checked ? '<button type="button" class="y-btn y-btn--ana y-btn--genis" data-yeni="' + ord.set.length + '">Yeni tur</button>' : "";
        g.querySelector("[data-geri-al]").hidden = ord.checked || !ord.seq.length;
        var b = g.querySelector("[data-bilgi]");
        if (ord.checked) {
          var ok = ord.seq.filter(function (i, p) { return rank(i) === p; }).length;
          b.innerHTML = "<b>" + ok + "/" + ord.set.length + "</b> doğru yerde";
          S.ordBest = S.ordBest || {}; S.ordBest[ord.set.length] = Math.max(S.ordBest[ord.set.length] || 0, ok); save(); Y.yenile();
        } else { var e = (S.ordBest || {})[ord.set.length]; b.textContent = ord.set.length + " olay" + (e != null ? " · en iyi " + e + "/" + ord.set.length : ""); }
      }
      g.addEventListener("click", function (e) {
        var t = e.target.closest("button"); if (!t || t.disabled) return;
        if (t.hasAttribute("data-i")) { if (ord.checked) return; ord.seq.push(+t.getAttribute("data-i")); ciz(); }
        else if (t.hasAttribute("data-geri-al")) { if (ord.checked) return; ord.seq.pop(); ciz(); }
        else if (t.hasAttribute("data-yeni")) basla(+t.getAttribute("data-yeni"));
        else if (t.hasAttribute("data-kontrol")) { ord.checked = true; ciz(); }
      });
      if (ord) ciz(); else basla(12);
    }

    /* ================= ortak: eşleştirme satırı ================= */
    function esSatir(p, metin, secenekler, dogru, onceki, sec, aciklama) {
      var d = document.createElement("div"); d.className = "y-es";
      d.innerHTML = '<div class="m">' + (p + 1) + ". " + metin + '</div><div class="bs">' + secenekler.map(function (s) { return '<button type="button" data-a="' + s[0] + '">' + s[1] + "</button>"; }).join("") + '</div><div class="fb"></div>';
      function boya(x) {
        d.querySelectorAll(".bs button").forEach(function (b) { b.disabled = true; if (b.getAttribute("data-a") === String(dogru)) b.classList.add("ok"); else if (b.getAttribute("data-a") === String(x)) b.classList.add("bad"); });
        var ok = String(x) === String(dogru);
        d.querySelector(".fb").innerHTML = '<div class="y-aciklama"><div class="bas ' + (ok ? "ok" : "bad") + '">' + (ok ? "Doğru" : "Yanlış") + "</div>" + aciklama + "</div>";
      }
      if (onceki != null) boya(onceki);
      d.querySelector(".bs").addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b || b.disabled) return; var x = b.getAttribute("data-a"); sec(x); boya(x); Y.yenile(); });
      return d;
    }

    /* ================= SAVAŞLAR VE ANTLAŞMALAR ================= */
    var DUR = { kazanc: ["y-cip--ok", "Osmanlı kazançlı"], kayip: ["y-cip--bad", "Osmanlı kayıplı"], denge: ["y-cip--bilgi", "Denge / sınır"] };
    var antF = "all";
    function kv(k) { return '<div class="y-kv"><h3>' + k.h + "</h3><ul>" + k.p.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul></div>"; }
    function savaslar(g) {
      var ANTAD = {}; ANT.forEach(function (a) { ANTAD[a.id] = a.ad.replace(" Antlaşması", "") + " (" + a.y + ")"; });
      var noktalar = HARITA_NOKTA.filter(function (p) { return p.n; }).map(function (p) { return p.n; });
      g.innerHTML =
        (KART.length ? Y.katla(esc(M.buyukResim || "18. yüzyılın büyük resmi"), '<div class="y-izgara" style="margin-top:0">' + KART.map(kv).join("") + "</div>") : "") +
        (YY17.length ? Y.katla(esc(M.yy17 || "Arka plan: 17. yüzyıl"), '<div class="y-izgara" style="margin-top:0">' + YY17.map(kv).join("") + "</div>", "bağlam için") : "") +
        '<div class="y-blok-bas"><h2 class="y-h2">Antlaşma kartları</h2><span class="y-mini y-soluk" data-antf-yazi></span></div><div class="y-ants" data-ants></div>' +
        (ESLE.length ? '<div class="y-blok-bas"><h2 class="y-h2">Hangi antlaşma?</h2><span class="y-mini y-soluk" data-esle-bilgi></span></div><div class="y-esle" data-esle></div>' : "") +
        (HARITA_SORU.length ? '<div class="y-blok-bas"><h2 class="y-h2">Haritada numaralı yerler</h2></div><div class="y-harita" data-harita></div><div style="margin-top:12px" data-hsorular></div>' : "") +
        Y.diger('<span class="grup">Antlaşma kartlarını göster:</span>' + [["all", "Hepsi"], ["kazanc", "Kazançlı"], ["kayip", "Kayıplı"], ["denge", "Denge"]].map(function (f) { return '<button type="button" class="y-lnk" data-f="' + f[0] + '">' + f[1] + "</button>"; }).join("") +
          (ESLE.length ? '<span class="grup">Alıştırma:</span><button type="button" class="y-lnk" data-esle-sifir>Eşleştirmeyi baştan çöz</button>' : ""));
      function antCiz() {
        var F = { all: "hepsi", kazanc: "kazançlı", kayip: "kayıplı", denge: "denge" };
        g.querySelector("[data-antf-yazi]").textContent = antF === "all" ? "" : "Gösterilen: " + F[antF];
        g.querySelector("[data-ants]").innerHTML = ANT.filter(function (a) { return antF === "all" || a.durum === antF; }).map(function (a) {
          var d = DUR[a.durum] || ["", a.durum];
          return '<div class="y-ant"><div class="ust"><span>' + a.y + '</span><span class="y-cip ' + d[0] + '">' + d[1] + "</span></div><h3>" + a.ad + '</h3><div class="meta">' + a.taraf + " · " + a.donem + '</div><div class="lab">Bağlam</div><p>' + a.baglam + '</p><div class="lab">Önemli maddeler</div><ul>' + a.madde.map(function (m) { return "<li>" + m + "</li>"; }).join("") + '</ul><div class="lab">Osmanlı açısından sonuç</div><p>' + a.sonuc + "</p></div>";
        }).join("");
      }
      g.addEventListener("click", function (e) {
        var b = e.target.closest("[data-f]"); if (b) { antF = b.getAttribute("data-f"); antCiz(); g.querySelector("[data-ants]").scrollIntoView({ block: "start" }); }
        if (e.target.closest("[data-esle-sifir]")) { S.es = {}; S.esSeed = Y.tohum(); save(); esleCiz(); Y.yenile(); }
      });
      antCiz();
      function esInfo() { var b = g.querySelector("[data-esle-bilgi]"); if (!b) return; var done = Object.keys(S.es).length, ok = Object.keys(S.es).filter(function (i) { return ESLE[i] && S.es[i] === ESLE[i].a; }).length; b.textContent = done + "/" + ESLE.length + " · " + ok + " doğru"; }
      function esleCiz() {
        var box = g.querySelector("[data-esle]"); if (!box) return;
        box.innerHTML = "";
        Y.karistir(ESLE.length, Y.hash("esle" + (S.esSeed || 1))).forEach(function (i, p) {
          var it = ESLE[i], An = ANT.filter(function (a) { return a.id === it.a; })[0];
          box.appendChild(esSatir(p, it.m, ANT.map(function (a) { return [a.id, ANTAD[a.id]]; }), it.a, S.es[i] || null, function (x) { S.es[i] = x; mark("e" + i, x === it.a); save(); esInfo(); }, An.ad + " (" + An.y + "), " + An.taraf + "."));
        });
        esInfo();
      }
      esleCiz();
      var hk = g.querySelector("[data-harita]");
      if (hk) {
        hk.innerHTML = haritaSVG();
        var hs = g.querySelector("[data-hsorular]");
        var hCiz = function () {
          hs.innerHTML = "";
          HARITA_SORU.forEach(function (it, i) {
            var d = document.createElement("div"); d.className = "y-hsoru";
            d.innerHTML = '<div class="qn">Harita ' + (i + 1) + '</div><div class="qt">' + it.q + '</div><div class="y-sayilar">' + noktalar.map(function (n) { return '<button type="button" data-n="' + n + '">' + n + "</button>"; }).join("") + '</div><div class="fb"></div>';
            d.querySelector(".y-sayilar").addEventListener("click", function (e) {
              var b = e.target.closest("button"); if (!b || b.disabled) return;
              var n = +b.getAttribute("data-n"), ok = n === it.a;
              d.querySelectorAll(".y-sayilar button").forEach(function (x) { x.disabled = true; if (+x.getAttribute("data-n") === it.a) x.classList.add("ok"); });
              if (!ok) b.classList.add("bad");
              mark("h" + i, ok); Y.yenile();
              d.querySelector(".fb").innerHTML = '<div class="y-aciklama"><div class="bas ' + (ok ? "ok" : "bad") + '">' + (ok ? "Doğru" : "Yanlış, doğrusu " + it.a) + "</div>" + it.e + (ok ? "" : '<div class="ek"><button type="button" class="y-lnk" data-tekrar>Tekrar dene</button></div>') + "</div>";
              var ag = d.querySelector("[data-tekrar]"); if (ag) ag.onclick = hCiz;
            });
            hs.appendChild(d);
          });
        };
        hCiz();
      }
    }
    function haritaSVG() {
      var PX = function (lon, lat) { return [((lon - 14) * 0.73 * 28).toFixed(1), ((50 - lat) * 28).toFixed(1)]; };
      var poly = function (a) { return a.map(function (p) { return PX(p[0], p[1]).join(","); }).join(" "); };
      var line = function (a) { return "M" + a.map(function (p) { return PX(p[0], p[1]).join(","); }).join(" L"); };
      var wl = function (t, lon, lat) { var p = PX(lon, lat); return '<text class="wl" x="' + p[0] + '" y="' + p[1] + '">' + t + "</text>"; };
      var ic;
      if (cfg.harita) ic = cfg.harita(PX);
      else {
        var BLACK = [[29.1,41.2],[28.0,41.6],[27.9,42.6],[27.9,43.2],[28.6,43.6],[28.7,44.2],[29.7,45.2],[30.2,45.8],[30.7,46.4],[31.5,46.6],[32.0,46.4],[32.6,46.1],[33.5,46.0],[33.6,45.9],[32.5,45.4],[33.5,44.6],[34.3,44.45],[35.3,44.8],[35.9,45.1],[36.5,45.25],[36.7,45.1],[37.3,44.9],[38.0,44.4],[39.7,43.6],[40.5,43.0],[41.6,41.6],[40.5,41.0],[39.7,41.0],[37.9,41.0],[36.3,41.4],[35.0,42.0],[33.0,41.9],[31.0,41.2]];
        var AZOV = [[34.8,46.1],[35.4,46.6],[36.8,46.75],[38.2,47.1],[39.2,47.2],[38.4,46.6],[37.9,46.0],[37.6,45.6],[36.6,45.4],[35.6,45.3],[35.1,45.6]];
        var MARM = [[26.65,40.4],[27.5,40.95],[29.0,41.05],[29.4,40.75],[28.0,40.35],[26.75,40.25]];
        var MED = [[14,45.4],[14.5,45.3],[15.2,44.3],[15.9,43.6],[16.4,43.5],[17.4,43.0],[18.1,42.6],[18.6,42.4],[19.4,41.8],[19.5,40.9],[19.5,40.4],[20.0,39.7],[20.3,39.3],[20.7,38.8],[21.1,38.4],[21.6,38.2],[21.3,37.7],[21.6,37.3],[21.9,36.8],[22.4,36.45],[22.8,36.7],[23.0,36.45],[23.2,37.0],[22.8,37.6],[23.2,37.6],[24.0,37.7],[24.0,38.2],[23.5,38.7],[22.9,39.3],[22.6,40.0],[22.9,40.6],[23.4,40.3],[23.9,40.2],[24.4,40.9],[25.5,40.85],[26.0,40.75],[26.6,40.45],[26.2,40.05],[26.2,39.5],[26.9,39.5],[26.7,39.1],[26.8,38.7],[26.3,38.6],[26.3,38.3],[27.2,37.9],[27.3,37.0],[28.0,36.7],[29.0,36.6],[30.0,36.3],[30.6,36.8],[31.5,36.6],[32.5,36.1],[34.0,36.3],[35.0,36.6],[36.2,36.6],[36.0,36.0],[15.0,36.0],[15.1,36.7],[15.3,37.3],[15.6,38.2],[16.6,38.4],[17.2,39.0],[16.6,39.6],[17.0,40.4],[17.9,40.3],[18.5,40.1],[18.4,40.6],[17.2,41.0],[16.0,41.5],[16.2,41.9],[15.2,42.0],[14.2,42.4],[14,42.6]];
        var DANUBE = [[16.4,48.2],[17.1,48.1],[18.8,47.8],[19.0,47.5],[18.9,46.0],[19.9,45.25],[20.5,44.8],[21.5,44.7],[22.5,44.6],[22.9,43.9],[24.5,43.7],[26.0,43.9],[27.0,44.1],[27.9,44.3],[28.1,45.3],[28.7,45.3],[29.7,45.2]];
        var PRUT = [[25.8,48.3],[26.7,48.0],[27.6,47.4],[28.0,47.0],[28.1,46.4],[28.2,45.5]];
        var DON = [[41.3,48.6],[40.5,47.7],[39.4,47.1]];
        ic = '<polygon class="sea" points="' + poly(MED) + '"/><polygon class="sea" points="' + poly(BLACK) + '"/><polygon class="sea" points="' + poly(AZOV) + '"/><polygon class="sea" points="' + poly(MARM) + '"/>' +
          '<path class="riv" d="' + line(DANUBE) + '"/><path class="riv" d="' + line(PRUT) + '"/><path class="riv" d="' + line(DON) + '"/>' +
          wl("Karadeniz", 34.5, 43.2) + wl("Ege", 25.0, 38.9) + wl("Akdeniz", 29.5, 36.25) + wl("Adriyatik", 16.6, 42.4) + wl("Tuna", 24.2, 44.1);
      }
      return '<svg viewBox="0 0 572 392" role="img" aria-label="' + esc(cfg.haritaAlt || "Doğu Avrupa, Balkanlar ve Karadeniz'in şematik haritası; numaralı yerler") + '"><rect class="land" x="0" y="0" width="572" height="392"/>' + ic +
        HARITA_NOKTA.map(function (p) { var q = PX(p.lon, p.lat); return p.n ? '<g class="pin"><circle cx="' + q[0] + '" cy="' + q[1] + '" r="14"/><text x="' + q[0] + '" y="' + q[1] + '">' + p.n + "</text></g>" : '<g class="city"><rect x="' + (q[0] - 3) + '" y="' + (q[1] - 3) + '" width="6" height="6"/><text x="' + (+q[0] + 6) + '" y="' + (+q[1] + 14) + '">' + esc(p.ad) + "</text></g>"; }).join("") + "</svg>";
    }

    /* ================= LALE DEVRİ ================= */
    function lale(g) {
      var L = LALE;
      g.innerHTML = '<div class="y-iki"><div class="y-kart" style="margin:0"><h2 class="y-h2">Neden ortaya çıktı?</h2><ul class="y-nokta-liste">' + L.neden.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul></div>" +
        '<div class="y-kart" style="margin:0"><h2 class="y-h2">Toplum hayatına etkileri</h2><ul class="y-nokta-liste">' + L.toplum.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul></div></div>" +
        '<div class="y-blok-bas"><h2 class="y-h2">Yenilikler, alan alan</h2></div><div class="y-izgara" style="margin-top:0">' + L.yenilik.map(function (y) { return '<div class="y-kv"><h3>' + y.a + "</h3><p>" + y.i + '</p><div class="x">' + y.x + "</div></div>"; }).join("") + "</div>" +
        (L.patrona ? '<div class="y-blok-bas"><h2 class="y-h2">' + esc(M.patrona || "Patrona Halil İsyanı") + " (" + esc(M.patronaYil || "1730") + ')</h2></div><div class="y-kart"><p>' + esc(L.patrona.olay) + '</p><div class="y-iki" style="margin-top:14px"><div><h3 class="y-h3">Nedenler</h3><ul class="y-nokta-liste">' + L.patrona.neden.map(function (x) { return "<li>" + x + "</li>"; }).join("") + '</ul></div><div><h3 class="y-h3">Sonuçlar</h3><ul class="y-nokta-liste">' + L.patrona.sonuc.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul></div></div></div>" : "") +
        '<div class="y-blok-bas"><h2 class="y-h2">Kavram kartları</h2><span class="y-mini y-soluk">dokun, açıklamayı gör</span></div><div data-kavram></div>';
      var api = Y.cevir(g.querySelector("[data-kavram]"), { kartlar: L.kavram.map(function (k, i) { return { k: i, on: k.k, arka: k.a }; }), durum: S.kf, kaydet: save, dar: true, ipucu: "Dokun" });
      g.insertAdjacentHTML("beforeend", Y.diger('<button type="button" class="y-lnk" data-karis>Kartları karıştır</button><button type="button" class="y-lnk" data-kapa>Hepsini kapat</button>'));
      g.querySelector("[data-karis]").onclick = api.karistir; g.querySelector("[data-kapa]").onclick = function () { api.hepsi(false); };
    }

    /* ================= KONULAR (Coğrafya vb.) ================= */
    var KR = ["yesil", "mor", "turuncu", "mavi"];
    function konular(g, alt, akisSonra) {
      var k = null; KONU.forEach(function (x) { if (x.id === alt) k = x; });
      if (!k) {
        g.innerHTML = '<ol class="y-yol" style="margin-top:0">' + KONU.map(function (x, i) {
          return '<li><a class="y-yol-satir y-renk' + (S.ko[x.id] ? " bitti" : "") + '" style="--a:var(--r-' + KR[i % KR.length] + ')" href="#konular/' + x.id + '" data-git="konular/' + x.id + '"><span class="y-adim-no">' + (S.ko[x.id] ? Y.svg(Y.ikon.tik, 15) : i + 1) + '</span><span class="m"><b>' + esc(x.ad) + "</b><span>" + esc(x.k) + " · sınavda " + x.n + ' soru</span></span><span class="say">' + (S.ko[x.id] ? "okundu" : "") + "</span></a></li>";
        }).join("") + "</ol>";
        return;
      }
      var i = KONU.indexOf(k), sonraki = KONU[i + 1];
      var h = '<div class="y-satir" style="margin-bottom:14px"><a class="y-lnk" href="#konular" data-git="konular">← Tüm konular</a></div>' +
        '<div class="y-kart"><h2 class="y-h2">' + esc(k.ad) + '</h2><p class="y-mini y-soluk" style="margin-top:2px">' + esc(k.k) + " · sınavda " + k.n + " soru</p><p style=\"margin-top:10px\">" + k.giris + "</p></div>" +
        '<div class="y-blok-bas"><h2 class="y-h2">Konu özeti</h2></div><div class="y-izgara" style="margin-top:0">' + k.kart.map(kv).join("") + "</div>";
      (k.tablo || []).forEach(function (t) {
        h += '<div class="y-blok-bas"><h2 class="y-h2">' + t.h + '</h2></div><div class="y-kart" style="padding:8px 14px"><div class="fig" style="margin:0"><table class="y-tablo" style="margin:0"><thead><tr>' + t.kol.map(function (c) { return "<th>" + c + "</th>"; }).join("") + "</tr></thead><tbody>" +
          t.sat.map(function (r) { return "<tr>" + r.map(function (c) { return "<td>" + c + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table></div>" + (t.not ? '<p class="y-mini y-soluk" style="margin:6px 0 8px">' + t.not + "</p>" : "") + "</div>";
      });
      if (k.vaka && k.vaka.length) h += Y.katla("Vaka kartları", '<div class="y-izgara" style="margin-top:0">' + k.vaka.map(function (v) { return '<div class="y-kv"><h3>' + v.h + "</h3>" + v.satir.map(function (r) { return "<p><b>" + r[0] + ":</b> " + r[1] + "</p>"; }).join("") + "</div>"; }).join("") + "</div>", k.vaka.length + " örnek olay");
      h += '<div class="y-alt" style="border:0;padding-top:0"><button type="button" class="y-btn y-btn--ana y-btn--genis" data-okudum><span>' + (akisSonra ? "Okudum, sıradaki: " + esc(akisSonra.ad) : sonraki ? "Okudum, sonraki konu: " + esc(sonraki.ad) : "Okudum, eşleştirmeye geç") + "</span>" + Y.svg(Y.ikon.ileri, 18) + "</button></div>";
      g.innerHTML = h;
      g.querySelector("[data-okudum]").onclick = function () { S.ko[k.id] = 1; save(); Y.yenile(); if (akisSonra) Y.git(akisSonra.id, akisSonra.alt); else Y.git(sonraki ? "konular" : "esle", sonraki ? sonraki.id : null); };
    }

    /* ================= EŞLEŞTİRME VE KAVRAMLAR ================= */
    function esle(g) {
      var h = "";
      ESLE_GRUP.forEach(function (gr) { h += Y.katla(esc(gr.ad), '<p class="y-soluk" style="margin-bottom:12px">' + gr.yon + '</p><div class="y-esle" data-grup="' + gr.id + '"></div>', '<span data-gsay="' + gr.id + '"></span>'); });
      if (KONU && tumKavram.length) {
        h += '<div class="y-blok-bas"><h2 class="y-h2">Kavram kartları</h2><span class="y-mini y-soluk">dokun, açıklamayı gör</span></div>';
        KONU.forEach(function (k) { if ((k.kavram || []).length) h += Y.katla(esc(k.ad), '<div data-kav="' + k.id + '"></div>', k.kavram.length + " kavram"); });
      }
      h += Y.diger('<button type="button" class="y-lnk" data-sifir>Eşleştirmeleri baştan çöz</button>');
      g.innerHTML = h;
      function say(gr) { var c = g.querySelector('[data-gsay="' + gr.id + '"]'); var o = S.es[gr.id] || {}; c.textContent = Object.keys(o).length + "/" + gr.soru.length + " · " + Object.keys(o).filter(function (i) { return o[i] === gr.soru[i].a; }).length + " doğru"; }
      function grupCiz(gr) {
        var box = g.querySelector('[data-grup="' + gr.id + '"]'); box.innerHTML = ""; S.es[gr.id] = S.es[gr.id] || {};
        Y.karistir(gr.soru.length, Y.hash("es" + gr.id + (S.esSeed[gr.id] || 1))).forEach(function (i, p) {
          var it = gr.soru[i];
          box.appendChild(esSatir(p, it.m, gr.sec.map(function (s, si) { return [si, s]; }), it.a, S.es[gr.id][i] != null ? S.es[gr.id][i] : null,
            function (x) { S.es[gr.id][i] = +x; mark("e:" + gr.id + ":" + i, +x === it.a); save(); say(gr); }, "Doğru cevap: " + gr.sec[it.a] + "."));
        });
        say(gr);
      }
      ESLE_GRUP.forEach(grupCiz);
      if (KONU) KONU.forEach(function (k) {
        var b = g.querySelector('[data-kav="' + k.id + '"]'); if (!b) return;
        var dur = {}; Object.keys(S.kf).forEach(function (x) { var p = String(x).split(":"); if (p[0] === k.id) dur[p[1]] = 1; });
        Y.cevir(b, { kartlar: k.kavram.map(function (c, i) { return { k: i, on: c.k, arka: c.a }; }), durum: new Proxy(dur, { set: function (t, p, v) { t[p] = v; S.kf[k.id + ":" + p] = 1; return true; } }), kaydet: save, dar: true, ipucu: "Dokun" });
      });
      g.querySelector("[data-sifir]").onclick = function () { ESLE_GRUP.forEach(function (gr) { S.es[gr.id] = {}; S.esSeed[gr.id] = Y.tohum(); }); save(); ESLE_GRUP.forEach(grupCiz); Y.yenile(); };
    }

    /* ================= ÇOKTAN SEÇMELİ ================= */
    function test(g) {
      var F = [["all", "Hepsi"]].concat(Object.keys(CN).map(function (k) { return [k, CN[k]]; })).concat([["wrong", "İlk denemede yanlışlarım"]]);
      var havuzOf = function (f) { return MC.map(function (_, i) { return i; }).filter(function (i) { return f === "all" || (f === "wrong" ? S.r["m" + i] === "bad" : MC[i].c === f); }); };
      F = F.filter(function (f) { return f[0] === "all" || f[0] === "wrong" || havuzOf(f[0]).length; });
      var ad = {}; F.forEach(function (f) { ad[f[0]] = f[1]; });
      if (!ad[S.mcF]) S.mcF = "all";
      var id = ilkDogru(), havuz = havuzOf(S.mcF);
      g.innerHTML = (S.mcF !== "all" ? '<p class="y-not" style="margin-bottom:14px">Gösterilen: <b>' + esc(ad[S.mcF]) + "</b> (" + havuz.length + " soru)</p>" : "") + '<div data-oyn></div>' +
        Y.diger('<span class="grup">Soruları süz:</span>' + F.map(function (f) { return '<button type="button" class="y-lnk" data-f="' + f[0] + '">' + esc(f[1]) + " (" + havuzOf(f[0]).length + ")</button>"; }).join("") +
          '<span class="grup">Tüm alıştırmalarda ilk denemede doğru: ' + id[0] + "/" + id[1] + "</span>", "Diğer: süz");
      g.querySelectorAll("[data-f]").forEach(function (b) { b.onclick = function () { var f = b.getAttribute("data-f"); if (S.mcF === f) return; S.mcF = f; S.mcRun = {}; save(); g.innerHTML = ""; test(g); }; });
      if (S.mcRun.f !== S.mcF) S.mcRun = { f: S.mcF };
      var kutu = g.querySelector("[data-oyn]");
      if (!havuz.length) { kutu.innerHTML = '<p class="y-not">' + (S.mcF === "wrong" ? "İlk denemede yanlış yaptığın soru yok." : "Bu süzgeçte soru yok.") + "</p>"; return; }
      Y.oynatici(kutu, {
        havuz: havuz, durum: S.mcRun, kaydet: save,
        soru: function (qi) { var m = MC[qi]; return { q: m.q, o: m.o, a: m.a || 0, e: m.e }; },
        etiket: function (qi) { return '<span class="y-kod">' + esc(CN[MC[qi].c] || MC[qi].c) + "</span>"; },
        kontrol: function (qi, ok) { mark("m" + qi, ok); },
        mesaj: function (p, n, tur) { return tur === "yanlis" ? (p === n ? "Hepsini düzelttin." : n + " yanlıştan " + p + " tanesini düzelttin.") : p === n ? "Hepsi doğru. Yazılı provasına geç." : p >= n * 0.75 ? "İyi gidiyorsun. Yanlışlarını tekrar çöz." : "Yanlış çıkan konuları oku, sonra yanlışları tekrar çöz."; },
        ozet: function (r) {
          var t = {}; havuz.forEach(function (qi) { var c = MC[qi].c; t[c] = t[c] || [0, 0]; t[c][1]++; if (r.yanlis.indexOf(qi) < 0) t[c][0]++; });
          return '<div class="y-karo">' + Object.keys(t).map(function (c) { return "<div><span>" + esc(CN[c] || c) + "</span><b>" + t[c][0] + "/" + t[c][1] + "</b></div>"; }).join("") + "</div>";
        }
      });
    }


    /* ================= VİDEO + TEST AKIŞI =================
       cfg.akis: [{video:"th101", defter:"th101"} | {konu:"mekan"} | {test:[MC sırası...], ad:"..."} | {defter:"fz302", ad:"...", dk:15}];
       video ya da konudan sonra kısa test gelir. Yalnız defter adımı: videosu olmayan defter; "Okudum" ile biter (S.df). */
    function akisVideo(id) { var v = null; (cfg.videolar || []).forEach(function (x) { if (x.id === id) v = x; }); return v; }
    function akisKonu(id) { var k = null; (KONU || []).forEach(function (x) { if (x.id === id) k = x; }); return k; }
    function yalnizDefter(x) { return !!x.defter && !x.video && !x.konu && !x.test; }
    function akisBitti(x, i) { return x.video ? !!S.vid[x.video] : x.konu ? !!S.ko[x.konu] : yalnizDefter(x) ? !!S.df[x.defter] : S.vt[i] != null; }
    function akisSatir(x) {
      if (x.video) { var v = akisVideo(x.video); return ["Video", v.baslik, Math.round((v.sure || 0) / 60) + " dk" + (x.defter ? " · defteriyle" : "")]; }
      if (x.konu) { var k = akisKonu(x.konu); return ["Konu", k.ad, k.k + " · okuma"]; }
      if (yalnizDefter(x)) return ["Defter", x.ad || x.defter, (x.dk ? x.dk + " dk · " : "") + "okuma"];
      return ["Test", x.ad, x.test.length + " soru"];
    }
    function akisSonra(i) {
      var x = AKIS[i + 1];
      return x ? { id: "akis", alt: String(i + 1), ad: akisSatir(x)[0] + ": " + akisSatir(x)[1] } : { id: MUHTEMEL ? "muhtemel" : "prova", ad: MUHTEMEL ? "Sınavda çıkabilecekler" : "Yazılı kağıdı" };
    }
    function akis(g, alt) {
      var i = alt ? +alt : -1, x = AKIS[i];
      if (!x) {
        g.innerHTML = '<ol class="y-yol" style="margin-top:0">' + AKIS.map(function (x, i) {
          var b = akisBitti(x, i), s = akisSatir(x);
          return '<li><a class="y-yol-satir y-renk' + (b ? " bitti" : "") + '" style="--a:var(--r-' + (x.test ? "mavi" : x.konu || yalnizDefter(x) ? "yesil" : "kirmizi") + ')" href="#akis/' + i + '" data-git="akis/' + i + '"><span class="y-adim-no">' + (b ? Y.svg(Y.ikon.tik, 15) : i + 1) + '</span><span class="m"><b>' + esc(s[0] + ": " + s[1]) + "</b><span>" + esc(s[2]) + '</span></span><span class="say">' + (x.test && b ? S.vt[i] : "") + "</span></a></li>";
        }).join("") + "</ol>";
        return;
      }
      var son = akisSonra(i), git = son.id + (son.alt ? "/" + son.alt : "");
      var ust = '<div class="y-satir" style="margin-bottom:14px"><a class="y-lnk" href="#akis" data-git="akis">← Akışın tamamı</a><span class="y-mini y-soluk">' + (i + 1) + " / " + AKIS.length + "</span></div>";
      var sonBtn = function (ana) { return '<div class="y-alt" style="border:0;padding-top:0;margin-top:16px"><a class="y-btn' + (ana ? " y-btn--ana" : "") + ' y-btn--genis" href="#' + git + '" data-git="' + git + '"><span>Sıradaki: ' + esc(son.ad) + "</span>" + Y.svg(Y.ikon.ileri, 18) + "</a></div>"; };
      if (x.konu) { konular(g, x.konu, son); g.insertAdjacentHTML("afterbegin", ust); var tk = g.querySelector('[data-git="konular"]'); if (tk) tk.parentNode.remove(); return; }
      if (x.video) {
        g.innerHTML = ust + "<div data-v></div>" + (x.defter ? '<a class="y-btn y-btn--genis" style="margin-top:12px" href="' + (cfg.defterYol || "defter/?b=") + x.defter + '">' + Y.svg(Y.ikon.liste, 18) + "<span>Defteri aç: videonun notları</span></a>" : "") + sonBtn(true);
        Y.videolar(g.querySelector("[data-v]"), { gruplar: [{ baslik: "", videolar: [akisVideo(x.video)] }], durum: S.vid, kaydet: save, ac: x.video });
        return;
      }
      if (yalnizDefter(x)) {
        g.innerHTML = ust + '<div class="y-kart"><h2 class="y-h2">' + esc(x.ad || x.defter) + '</h2><p class="y-mini y-soluk" style="margin-top:4px">Bu adımın videosu yok: defteri oku, sonra devam et.</p>' +
          '<a class="y-btn y-btn--genis" style="margin-top:14px" href="' + (cfg.defterYol || "defter/?b=") + x.defter + '">' + Y.svg(Y.ikon.liste, 18) + "<span>Defteri aç</span></a></div>" +
          '<div class="y-alt" style="border:0;padding-top:0;margin-top:16px"><button type="button" class="y-btn y-btn--ana y-btn--genis" data-okudum><span>Okudum, sıradaki: ' + esc(son.ad) + "</span>" + Y.svg(Y.ikon.ileri, 18) + "</button></div>";
        g.querySelector("[data-okudum]").onclick = function () { S.df[x.defter] = 1; save(); Y.yenile(); Y.git(son.id, son.alt); };
        return;
      }
      g.innerHTML = ust + "<div data-oyn></div>" + sonBtn(false);
      S.vtRun[i] = S.vtRun[i] || {};
      Y.oynatici(g.querySelector("[data-oyn]"), {
        havuz: x.test, durum: S.vtRun[i], kaydet: save,
        soru: function (qi) { var m = MC[qi]; return { q: m.q, o: m.o, a: m.a || 0, e: m.e }; },
        kontrol: function (qi, ok) { mark("m" + qi, ok); },
        mesaj: function (p, n, tur) { return p === n ? (tur === "yanlis" ? "Hepsini düzelttin." : "Hepsi doğru.") : "Yanlışlarını bir kez daha çöz, sonra devam et."; },
        ozet: function (r) { if (S.vt[i] == null) { S.vt[i] = (x.test.length - r.yanlis.length) + "/" + x.test.length; save(); Y.yenile(); } return ""; }
      });
    }

    /* ================= SINAVDA ÇIKABİLECEKLER (not) ================= */
    function muhtemel(g) {
      var h = (MUHTEMEL.giris ? '<p class="y-not" style="margin-bottom:14px">' + MUHTEMEL.giris + "</p>" : "") + MUHTEMEL.ciktilar.map(function (c) {
        return '<div class="y-kart" style="margin-bottom:14px"><h2 class="y-h2">' + esc(CN[c.c] || c.c) + (c.ad ? ": " + esc(c.ad) : "") + '</h2><p class="y-mini y-soluk" style="margin-top:2px">Sınavda ' + c.n + " soru</p><ul class=\"y-madde\" style=\"margin-top:10px\">" + c.m.map(function (m) { return "<li>" + m + "</li>"; }).join("") + "</ul></div>";
      }).join("") + (MUHTEMEL.tip ? '<div class="y-kart" style="margin-bottom:14px"><h2 class="y-h2">Soru biçimleri</h2><ul class="y-madde" style="margin-top:10px">' + MUHTEMEL.tip.map(function (m) { return "<li>" + m + "</li>"; }).join("") + "</ul></div>" : "") +
        '<div class="y-alt" style="border:0;padding-top:0"><button type="button" class="y-btn y-btn--ana y-btn--genis" data-oku><span>Okudum, yazılı kağıdına geç</span>' + Y.svg(Y.ikon.ileri, 18) + "</button></div>";
      g.innerHTML = h;
      g.querySelector("[data-oku]").onclick = function () { S.mu = 1; save(); Y.yenile(); Y.git("prova"); };
    }

    /* ================= YAZILI KAĞIDI (v3, ortak Y.kagit) ================= */
    function topPuan(d) { return PROVA[d].s.reduce(function (a, x) { return a + x.p; }, 0); }
    function kagitHTML(d) {
      var P = PROVA[d];
      return '<div class="y-kagit"><div class="ust"><h2>' + esc(cfg.ders + " · " + P.ad) + "</h2><p>Süre 40 dakika · " + topPuan(d) + " puan</p>" + '<div class="kim"><span>Ad soyad:</span><span>Sınıf / no:</span><span>Puan:</span></div></div>' +
        P.s.map(function (x, q) {
          var c = "", satir = x.tur === "kisa" ? 3 : 7; for (var k = 0; k < satir; k++) c += '<div class="c"></div>';
          return '<div class="s"><h3>' + (q + 1) + ". soru <small>(" + x.p + " puan)</small></h3>" + (x.k ? '<div class="y-kaynak">' + x.k + "</div>" : "") + '<div class="y-soru">' + x.q + "</div>" + c + "</div>";
        }).join("") + "</div>";
    }
    function konuVideo(c) {
      var ad = CN[c] || c, v = (cfg.videolar || []).filter(function (x) { return (x.etiket || "").indexOf(ad) >= 0; })[0];
      if (!v || !AKIS) return null;
      var i = -1; AKIS.forEach(function (x, k) { if (i < 0 && x.video === v.id) i = k; });
      return i < 0 ? null : { alt: "akis/" + i, baslik: v.baslik };
    }
    function prova(g) {
      var d = S.pd, P = PROVA[d];
      S.ks = S.ks || {}; S.pk = S.pk || {};
      if (!S.ks[d]) S.ks[d] = { a: S.pk[d] ? "puan" : "", t0: 0, i: 0 };
      Y.kagit(g, {
        ad: P.ad, bilgi: "<b>" + P.s.length + "</b> soru · <b>" + topPuan(d) + "</b> puan · <b>40</b> dk", sure: 40,
        kagitHTML: function () { return kagitHTML(d); },
        sorular: P.s.map(function (s) { return { c: s.c, puan: s.p, q: s.q, kaynak: s.k, ornek: s.c2, olcut: s.o }; }),
        durum: function (q) { return pvState(d, q); }, kaydet: save, K: S.ks[d],
        sifirla: function () { S.pv[d] = {}; S.pk[d] = 0; },
        konuAd: function (c) { var m = MUHTEMEL && MUHTEMEL.ciktilar.filter(function (x) { return x.c === c; })[0]; return m && m.ad ? m.ad : CN[c] || c; }, video: konuVideo,
        digerUst: PROVA.length > 1 ? '<span class="grup">Başka kağıt:</span>' + PROVA.map(function (p, i) { return i === d ? "" : '<button type="button" class="y-lnk" data-d="' + i + '">' + esc(p.ad) + "</button>"; }).join("") : "",
        tikla: function (t) { if (!t.hasAttribute("data-d")) return false; S.pd = +t.getAttribute("data-d"); save(); prova(g); return true; }
      });
    }

    /* ================= KUR ================= */
    var ara = ["yesil", "mor", "turuncu"], ai = 0;
    function araRenk() { return ara[(ai++) % ara.length]; }
    var adimlar = [{ id: "plan", ad: "Plan", renk: "lacivert", ikon: "plan", baslik: cfg.baslik || cfg.ad, metin: M.plan || "Sıradaki adımı aç; bitirdikçe liste kendini günceller.", ciz: plan }];
    if ((cfg.videolar || []).length && !AKIS) adimlar.push({ id: "videolar", ad: "Videolar", renk: "kirmizi", ikon: "video", kisa: cfg.videolar.length + " video, toplam ≈ " + Math.round(cfg.videolar.reduce(function (a, v) { return a + (v.sure || 0); }, 0) / 60) + " dk", metin: M.videolar || "Bir videoya dokun, burada açılır. %80'ini izleyince “izlendi” sayılır.", ciz: videolar, ilerleme: P.videolar });
    /* akış varsa sıra: Video + test → Sınavda çıkabilecekler → Yazılı kağıdı; eski adımlar arkada "ek çalışma" olarak durur */
    if (AKIS) {
      adimlar.push({ id: "akis", ad: "Video + test", renk: "kirmizi", ikon: "video", kisa: AKIS.length + " adım: " + (AKIS.some(function (x) { return x.video; }) ? "video" : "konu") + ", ardından kısa test", metin: M.akis || "Sırayla git: önce izle ya da oku, ardından kısa testi çöz.", ciz: akis, ilerleme: P.akis });
      if (MUHTEMEL) adimlar.push({ id: "muhtemel", ad: "Sınavda çıkabilecekler", renk: "turuncu", ikon: "liste", kisa: "Kısa not: ne sorulabilir", metin: M.muhtemel || "Yazılıdan önce bir kez oku.", ciz: muhtemel, ilerleme: P.muhtemel });
      if (PROVA) adimlar.push({ id: "prova", ad: "Yazılı kağıdı", renk: "petrol", ikon: "kalem", kisa: "Kağıtta çöz, sonra puanla", metin: M.kagit || "Kağıdı aç, 40 dakikada çöz, sonra örnek cevaplarla puanla.", ciz: prova, ilerleme: P.prova });
    }
    var ekBas = adimlar.length;
    if (KRONO) adimlar.push({ id: "kronoloji", ad: "Kronoloji", renk: araRenk(), ikon: "saat", kisa: "Olayları sıraya diz", metin: M.kronoloji || "Olaylara en eskiden en yeniye doğru dokun, sonra kontrol et.", ciz: kronoloji, ilerleme: P.kronoloji });
    if (ANT) adimlar.push({ id: "savaslar", ad: A.savaslar || "Savaşlar ve antlaşmalar", renk: araRenk(), ikon: "bayrak", kisa: "Antlaşma kartları, eşleştirme, harita", metin: M.savaslar || "", ciz: savaslar, ilerleme: P.savaslar });
    if (LALE) adimlar.push({ id: "lale", ad: A.lale || "Lale Devri", renk: araRenk(), ikon: "cicek", kisa: "Nedenler, yenilikler, kavram kartları", metin: M.lale || "", ciz: lale, ilerleme: P.lale });
    if (KONU) adimlar.push({ id: "konular", ad: A.konular || "Konular", renk: araRenk(), ikon: "liste", kisa: KONU.length + " konu: özet, tablo, vaka", metin: M.konular || "Bir konuyu aç, oku; bitince “Okudum”a dokun.", ciz: konular, ilerleme: P.konular });
    if (ESLE_GRUP) adimlar.push({ id: "esle", ad: A.esle || "Eşleştirme ve kavramlar", renk: araRenk(), ikon: "kart", kisa: ESLE_GRUP.length + " alıştırma ve kavram kartları", metin: M.esle || "Bir alıştırmayı aç ve her maddenin doğru karşılığına dokun.", ciz: esle, ilerleme: P.esle });
    if (MC) adimlar.push({ id: "test", ad: "Çoktan seçmeli", renk: "mavi", ikon: "soru", kisa: MC.length + " soru, anında açıklama", metin: M.test || "Şıkka dokununca cevabın kontrol edilir; açıklamayı okuyup devam et.", ciz: test, ilerleme: P.test });
    if (PROVA && !AKIS) adimlar.push({ id: "prova", ad: "Yazılı provası", renk: "petrol", ikon: "kalem", kisa: PROVA.length + " deneme, örnek cevap ve ölçüt", metin: M.provaMetin || "Kaynağı oku, cevabını yaz, örnek cevabı aç ve ölçütlerle kendini puanla. 40 dakika tut.", ciz: prova, ilerleme: P.prova });

    if (AKIS) adimlar.slice(ekBas).forEach(function (a) { a.kisa = "Ek çalışma · " + (a.kisa || ""); });

    Y.kur({
      ad: cfg.ad, ders: cfg.ders, sinav: SINAV.tarih, sinavMetin: SINAV.gun, geri: cfg.geri,
      ilkAdim: function () { return S.adim || ESKI[S.view] || "plan"; },
      adimKaydet: function (id) { if (S.adim !== id) { S.adim = id; save(); } },
      adimlar: adimlar
    });
  };
})();
